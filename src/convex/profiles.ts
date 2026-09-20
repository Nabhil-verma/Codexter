import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * The public "player card". The client recomputes every number from its
 * progress map and pushes it here, so leaderboard queries stay cheap: sorting
 * never has to walk anybody's full progress blob.
 */

const MAX_NAME = 40;
const MAX_TITLE = 24;

/** Coerce anything to a finite, non-negative integer the DB can sort on. */
function count(raw: unknown, hi = 10_000_000): number {
  const n = typeof raw === "number" && Number.isFinite(raw) ? Math.floor(raw) : 0;
  return Math.min(hi, Math.max(0, n));
}

function shortString(raw: unknown, max: number): string {
  return typeof raw === "string" ? raw.trim().slice(0, max) : "";
}

/** Upsert the signed-in learner's player card and return its id. */
export const sync = mutation({
  args: {
    xp: v.number(),
    xpWeek: v.number(),
    xpMonth: v.number(),
    level: v.number(),
    ascension: v.string(),
    streakCurrent: v.number(),
    streakLongest: v.number(),
    lastActiveDay: v.optional(v.string()),
    lessonsDone: v.number(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    // The display name is owned by the auth user so a rename propagates.
    const user = await ctx.db.get(userId);
    const name =
      shortString(user?.name, MAX_NAME) ||
      shortString(user?.email, MAX_NAME) ||
      "Learner";

    const next = {
      name,
      xp: count(args.xp),
      xpWeek: count(args.xpWeek),
      xpMonth: count(args.xpMonth),
      level: Math.max(1, count(args.level, 999)),
      ascension: shortString(args.ascension, MAX_TITLE) || "initiate",
      streakCurrent: count(args.streakCurrent, 10_000),
      streakLongest: count(args.streakLongest, 10_000),
      lastActiveDay: args.lastActiveDay?.slice(0, 10),
      lessonsDone: count(args.lessonsDone, 100_000),
      updatedAt: Date.now(),
    };

    const existing = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();

    if (!existing) {
      // Only create a card once the learner has actually earned something —
      // an empty board is worse than a small one.
      if (next.xp === 0 && next.lessonsDone === 0) return null;
      return await ctx.db.insert("profiles", { userId, ...next });
    }

    // Skip the write when nothing moved (progress events fire often).
    const unchanged =
      existing.xp === next.xp &&
      existing.xpWeek === next.xpWeek &&
      existing.xpMonth === next.xpMonth &&
      existing.level === next.level &&
      existing.ascension === next.ascension &&
      existing.streakCurrent === next.streakCurrent &&
      existing.streakLongest === next.streakLongest &&
      existing.lastActiveDay === next.lastActiveDay &&
      existing.lessonsDone === next.lessonsDone &&
      existing.name === next.name;
    if (unchanged) return existing._id;

    await ctx.db.patch(existing._id, next);
    return existing._id;
  },
});

/**
 * The signed-in learner's own card, plus the guild they belong to. Returns
 * null for signed-out visitors and for accounts that have never synced.
 */
export const me = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
    if (!profile) return null;
    const clan = profile.clanId ? await ctx.db.get(profile.clanId) : null;
    return {
      name: profile.name,
      xp: profile.xp,
      xpWeek: profile.xpWeek,
      xpMonth: profile.xpMonth,
      level: profile.level,
      ascension: profile.ascension,
      title: profile.title ?? null,
      streakCurrent: profile.streakCurrent,
      streakLongest: profile.streakLongest,
      lessonsDone: profile.lessonsDone,
      clan: clan ? { id: clan._id, name: clan.name, tag: clan.tag } : null,
    };
  },
});

/** Choose which unlocked title is displayed on the leaderboard. */
export const setTitle = mutation({
  args: { title: v.string() },
  handler: async (ctx, { title }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return;
    const clean = shortString(title, MAX_TITLE);
    const row = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
    if (row) await ctx.db.patch(row._id, { title: clean || undefined });
  },
});
