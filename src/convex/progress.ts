import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/** Load the signed-in user's saved progress map, or null when signed out. */
export const get = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;
    const row = await ctx.db
      .query("progress")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
    return (row?.data as Record<string, number> | undefined) ?? {};
  },
});

/**
 * Upsert the signed-in user's progress map. Merges with whatever is already
 * stored (best score per key wins) so a second device never erases the first.
 */
export const save = mutation({
  args: { data: v.any() },
  handler: async (ctx, { data }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not signed in");
    const row = await ctx.db
      .query("progress")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
    if (row) {
      const existing = (row.data as Record<string, number>) ?? {};
      const merged: Record<string, number> = { ...existing };
      for (const [k, v2] of Object.entries(data as Record<string, number>)) {
        merged[k] = Math.max(merged[k] ?? 0, v2);
      }
      await ctx.db.patch(row._id, { data: merged, updatedAt: Date.now() });
    } else {
      await ctx.db.insert("progress", { userId, data, updatedAt: Date.now() });
    }
  },
});

/** Wipe the signed-in user's cloud progress (local reset is client-side). */
export const wipe = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return;
    const row = await ctx.db
      .query("progress")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
    if (row) await ctx.db.delete(row._id);
  },
});
