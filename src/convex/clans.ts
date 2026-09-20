import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation, query, type MutationCtx, type QueryCtx } from "./_generated/server";
import { v } from "convex/values";
import type { Doc, Id } from "./_generated/dataModel";
import { MAX_GUILD_MEMBERS, guildTierFor } from "../lib/guild";

/**
 * Guilds ("clans"): small teams whose pooled XP unlocks collective rewards and
 * turns solo grinding into team play. Membership lives on the profile row, so
 * leaving a guild can never orphan a member.
 */

const MAX_MEMBERS = MAX_GUILD_MEMBERS;
const MAX_NAME = 28;
const MAX_BLURB = 140;

/** Load (or lazily create) the signed-in learner's player card. */
async function ensureProfile(
  ctx: MutationCtx,
  userId: Id<"users">
): Promise<Doc<"profiles">> {
  const existing = await ctx.db
    .query("profiles")
    .withIndex("by_user", (q) => q.eq("userId", userId))
    .unique();
  if (existing) return existing;
  const user = await ctx.db.get(userId);
  const name =
    ((user?.name as string | undefined) || (user?.email as string | undefined) || "Learner")
      .slice(0, 40);
  const id = await ctx.db.insert("profiles", {
    userId,
    name,
    xp: 0,
    xpWeek: 0,
    xpMonth: 0,
    level: 1,
    ascension: "initiate",
    streakCurrent: 0,
    streakLongest: 0,
    lessonsDone: 0,
    updatedAt: Date.now(),
  });
  const created = await ctx.db.get(id);
  if (!created) throw new Error("Could not create your player card");
  return created;
}

async function membersOf(
  ctx: QueryCtx,
  clanId: Id<"clans">
): Promise<Doc<"profiles">[]> {
  return ctx.db
    .query("profiles")
    .withIndex("by_clan", (q) => q.eq("clanId", clanId))
    .take(MAX_MEMBERS + 5);
}

export type ClanMember = {
  name: string;
  xp: number;
  level: number;
  ascension: string;
  isMe: boolean;
};

export type ClanView = {
  id: Id<"clans">;
  name: string;
  tag: string;
  blurb: string;
  memberCount: number;
  /** pooled all-time XP — what the guild tier and board sort on */
  totalXp: number;
  /** pooled XP since Monday */
  weekXp: number;
  tier: string;
  tierPerk: string;
  isMine: boolean;
  isOwner: boolean;
  members: ClanMember[];
};

function view(
  c: Doc<"clans">,
  members: Doc<"profiles">[],
  meId: Id<"users"> | null
): ClanView {
  const sorted = [...members].sort((a, b) => b.xp - a.xp);
  const totalXp = sorted.reduce((n, m) => n + m.xp, 0);
  return {
    id: c._id,
    name: c.name,
    tag: c.tag,
    blurb: c.blurb,
    memberCount: sorted.length,
    totalXp,
    weekXp: sorted.reduce((n, m) => n + m.xpWeek, 0),
    tier: guildTierFor(totalXp).tier.name,
    tierPerk: guildTierFor(totalXp).tier.perk,
    isMine: meId !== null && sorted.some((m) => m.userId === meId),
    isOwner: meId !== null && c.ownerId === meId,
    members: sorted.slice(0, 12).map((m) => ({
      name: m.name,
      xp: m.xp,
      level: m.level,
      ascension: m.ascension,
      isMe: meId !== null && m.userId === meId,
    })),
  };
}

/** Every guild, ranked by pooled XP. */
export const list = query({
  args: {},
  handler: async (ctx) => {
    const meId = await getAuthUserId(ctx);
    const clans = await ctx.db.query("clans").take(40);
    const out: ClanView[] = [];
    for (const c of clans) {
      out.push(view(c, await membersOf(ctx, c._id), meId));
    }
    out.sort((a, b) => b.totalXp - a.totalXp || b.weekXp - a.weekXp);
    return out;
  },
});

/** The caller's own guild, or null when they're a free agent. */
export const mine = query({
  args: {},
  handler: async (ctx) => {
    const meId = await getAuthUserId(ctx);
    if (!meId) return null;
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", meId))
      .unique();
    if (!profile?.clanId) return null;
    const clan = await ctx.db.get(profile.clanId);
    if (!clan) return null;
    return view(clan, await membersOf(ctx, clan._id), meId);
  },
});

function cleanText(raw: string, max: number): string {
  return raw.replace(/\s+/g, " ").trim().slice(0, max);
}

/** Found a guild. One guild per learner. */
export const create = mutation({
  args: { name: v.string(), tag: v.string(), blurb: v.string() },
  handler: async (ctx, { name, tag, blurb }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not signed in");

    const cleanName = cleanText(name, MAX_NAME);
    const cleanTag = cleanText(tag, 5).toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (cleanName.length < 3) throw new Error("Guild name needs at least 3 characters");
    if (cleanTag.length < 2) throw new Error("Guild tag needs 2–5 letters or numbers");

    const profile = await ensureProfile(ctx, userId);
    if (profile.clanId) throw new Error("Leave your current guild first");

    const nameTaken = await ctx.db
      .query("clans")
      .withIndex("by_name", (q) => q.eq("name", cleanName))
      .first();
    if (nameTaken) throw new Error("That guild name is taken");
    const tagTaken = await ctx.db
      .query("clans")
      .withIndex("by_tag", (q) => q.eq("tag", cleanTag))
      .first();
    if (tagTaken) throw new Error("That guild tag is taken");

    const clanId = await ctx.db.insert("clans", {
      name: cleanName,
      tag: cleanTag,
      blurb: cleanText(blurb, MAX_BLURB) || "No motto yet — recruiting builders.",
      ownerId: userId,
      createdAt: Date.now(),
    });
    await ctx.db.patch(profile._id, { clanId });
    return clanId;
  },
});

/** Join a guild (capacity-checked). */
export const join = mutation({
  args: { clanId: v.id("clans") },
  handler: async (ctx, { clanId }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not signed in");
    const clan = await ctx.db.get(clanId);
    if (!clan) throw new Error("That guild no longer exists");

    const profile = await ensureProfile(ctx, userId);
    if (profile.clanId === clanId) return;

    const members = await membersOf(ctx, clanId);
    if (members.length >= MAX_MEMBERS) throw new Error("That guild is full");
    await ctx.db.patch(profile._id, { clanId });
  },
});

/**
 * Leave the current guild. If the owner leaves, the highest-XP remaining
 * member is promoted; an empty guild is disbanded.
 */
export const leave = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not signed in");
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
    if (!profile?.clanId) return;
    const clan = await ctx.db.get(profile.clanId);
    await ctx.db.patch(profile._id, { clanId: undefined });
    if (!clan) return;

    const remaining = (await membersOf(ctx, clan._id)).filter(
      (m) => m.userId !== userId
    );
    if (remaining.length === 0) {
      await ctx.db.delete(clan._id);
      return;
    }
    if (clan.ownerId === userId) {
      const heir = [...remaining].sort((a, b) => b.xp - a.xp)[0];
      await ctx.db.patch(clan._id, { ownerId: heir.userId });
    }
  },
});
