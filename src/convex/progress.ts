import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Progress is a flat `"${track}/${lesson}!${YYYY-MM-DD}" -> 0..1` map. Every
 * value is coerced to a finite number in [0,1] before it touches the database:
 * `Math.max` against a non-number yields NaN, which would then poison the whole
 * map for every future read and merge.
 */
function sanitize(raw: unknown): Record<string, number> {
  const out: Record<string, number> = {};
  if (!raw || typeof raw !== "object") return out;
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    const n = typeof value === "number" ? value : Number(value);
    if (Number.isFinite(n)) out[key] = Math.min(1, Math.max(0, n));
  }
  return out;
}

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
    return sanitize(row?.data);
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
    // Signed out (e.g. a debounced push that lands after sign-out): drop it.
    // Progress stays local, and there is no account to merge into.
    if (!userId) return;
    const incoming = sanitize(data);
    const row = await ctx.db
      .query("progress")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
    if (row) {
      const merged = sanitize(row.data);
      for (const [key, score] of Object.entries(incoming)) {
        merged[key] = Math.max(merged[key] ?? 0, score);
      }
      await ctx.db.patch(row._id, { data: merged, updatedAt: Date.now() });
    } else {
      await ctx.db.insert("progress", {
        userId,
        data: incoming,
        updatedAt: Date.now(),
      });
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
