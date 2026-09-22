import { useEffect, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   Banked clan-quest rewards. The server enforces one claim per
   (user, week); this log records what was banked so the pushed
   player card can include it in all-time XP. Same shape as the
   milestone claim log: a plain module store + subscribe + hook.
   ═══════════════════════════════════════════════════════════════ */

const KEY = "clr-clan-rewards-v1";

/** weekKey → banked reward XP for that week's quest. */
export type ClanClaims = Record<string, number>;

type Listener = () => void;
const listeners = new Set<Listener>();

function emit() {
  for (const fn of listeners) fn();
}

export function subscribeClanClaims(fn: Listener): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function loadClanClaims(): ClanClaims {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as ClanClaims;
    if (!parsed || typeof parsed !== "object") return {};
    const out: ClanClaims = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (typeof v === "number" && Number.isFinite(v) && v > 0) out[k] = v;
    }
    return out;
  } catch {
    return {};
  }
}

export function saveClanClaims(claims: ClanClaims) {
  try {
    localStorage.setItem(KEY, JSON.stringify(claims));
  } catch {
    // storage unavailable — rewards just won't persist locally
  }
  emit();
}

/** Record a freshly banked weekly reward (server already validated it). */
export function bankClanReward(weekKey: string, xp: number) {
  const claims = loadClanClaims();
  if (claims[weekKey] !== undefined) return;
  claims[weekKey] = xp;
  saveClanClaims(claims);
}

/** Total banked reward XP — added to the pushed all-time player card. */
export function clanRewardXp(): number {
  return Object.values(loadClanClaims()).reduce((n, v) => n + v, 0);
}

export function resetClanRewards() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
  emit();
}

/** React binding: re-renders whenever the claim log changes. */
export function useClanRewardXp(): number {
  const [xp, setXp] = useState(clanRewardXp);
  useEffect(() => subscribeClanClaims(() => setXp(clanRewardXp())), []);
  return xp;
}
