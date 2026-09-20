/* ═══════════════════════════════════════════════════════════════
   Guild collective rewards. Kept in a plain module (no Convex or
   React imports) so both the backend aggregation and the UI read
   from exactly one ladder.
   ═══════════════════════════════════════════════════════════════ */

export type GuildTier = {
  id: string;
  name: string;
  /** pooled all-time XP needed for the tier */
  minXp: number;
  perk: string;
};

export const GUILD_TIERS: GuildTier[] = [
  { id: "band", name: "Band", minXp: 0, perk: "Shared guild banner" },
  { id: "company", name: "Company", minXp: 500, perk: "+1 guild streak shield" },
  { id: "order", name: "Order", minXp: 2_000, perk: "Guild aura on the leaderboard" },
  { id: "coterie", name: "Coterie", minXp: 6_000, perk: "Custom guild reward tag" },
  { id: "legend", name: "Legend", minXp: 15_000, perk: "Gilded guild crest + title" },
];

export const MAX_GUILD_MEMBERS = 25;

export function guildTierFor(totalXp: number) {
  let tier = GUILD_TIERS[0];
  for (const t of GUILD_TIERS) if (totalXp >= t.minXp) tier = t;
  const idx = GUILD_TIERS.indexOf(tier);
  const next = GUILD_TIERS[idx + 1] ?? null;
  return {
    tier,
    next,
    toNext: next ? next.minXp - totalXp : 0,
    pct: next
      ? Math.round(((totalXp - tier.minXp) / (next.minXp - tier.minXp)) * 100)
      : 100,
  };
}
