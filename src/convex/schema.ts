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
});
