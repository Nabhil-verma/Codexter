import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,

  /** One row per user: the same `completed` map the app keeps in localStorage. */
  progress: defineTable({
    userId: v.id("users"),
    data: v.any(),
    updatedAt: v.optional(v.number()),
  })
    .index("by_user", ["userId"]),

  /**
   * The public, ranked view of a learner. Everything here is derived from the
   * progress map plus the guild they belong to; the client recomputes and
   * pushes it so the leaderboard can sort server-side without walking every
   * user's whole progress blob.
   */
  profiles: defineTable({
    userId: v.id("users"),
    name: v.string(),
    /** all-time XP (lessons + quest bonuses + consistency) */
    xp: v.number(),
    /** XP earned since Monday — the weekly bracket */
    xpWeek: v.number(),
    /** XP earned since the 1st — the monthly bracket */
    xpMonth: v.number(),
    level: v.number(),
    /** ascension tier id, e.g. "archon" */
    ascension: v.string(),
    /** chosen display title, e.g. "bugslayer" */
    title: v.optional(v.string()),
    streakCurrent: v.number(),
    streakLongest: v.number(),
    lastActiveDay: v.optional(v.string()),
    lessonsDone: v.number(),
    clanId: v.optional(v.id("clans")),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_xp", ["xp"])
    .index("by_xpWeek", ["xpWeek"])
    .index("by_xpMonth", ["xpMonth"])
    .index("by_clan", ["clanId"]),

  /** A guild: a named group whose members' XP pools into a shared score. */
  clans: defineTable({
    name: v.string(),
    /** short uppercase badge, 2–5 chars, unique */
    tag: v.string(),
    blurb: v.string(),
    ownerId: v.id("users"),
    createdAt: v.number(),
  })
    .index("by_name", ["name"])
    .index("by_tag", ["tag"])
    .index("by_owner", ["ownerId"]),
});
