/* ------------------------------------------------------------------ */
/* Milestone claims — localStorage + a tiny pub/sub, mirroring the     */
/* progress store so views re-render the same way.                     */
/*                                                                     */
/* Kept deliberately separate from `progress`: the progress map is a   */
/* numeric score map, while a project claim is a dated attestation     */
/* that merges by its own rule. The task is stored on the same Convex  */
/* row but in its own field, so neither merge can corrupt the other.   */
/* Local storage stays the source of truth while signed out.          */
/* ------------------------------------------------------------------ */

import { useEffect, useState } from "react";
import {
  mergeClaims,
  milestoneXpTotal,
  type Claim,
  type Claims,
} from "./milestones";

const KEY = "clr-milestones-v1";

type Listener = () => void;
const listeners = new Set<Listener>();

export function subscribeClaims(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function emit() {
  for (const fn of listeners) fn();
}

export function loadClaims(): Claims {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Claims;
      if (parsed && typeof parsed === "object") return parsed;
    }
  } catch {
    // corrupted or unavailable storage — fall through to no claims
  }
  return {};
}

export function saveClaims(claims: Claims) {
  try {
    localStorage.setItem(KEY, JSON.stringify(claims));
  } catch {
    // private mode — claims simply don't persist locally
  }
  emit();
}

/**
 * Merge a cloud claim log into the local one and persist. Used by the account
 * sync on pull; the merged log is also what gets pushed back, so both sides
 * converge rather than one overwriting the other.
 */
export function applyCloudClaims(cloud: Claims): Claims {
  const merged = mergeClaims(loadClaims(), cloud);
  saveClaims(merged);
  return merged;
}

/**
 * Record a milestone as shipped. The skill gate is enforced by the caller
 * (`milestoneStatus().unlocked`) and re-checked in the UI, so a stale claim
 * can never render as earned without its lessons behind it.
 */
export function claimMilestone(
  id: string,
  deliverables: number[],
  day: string
): Claims {
  const claims = loadClaims();
  const existing: Claim | undefined = claims[id];
  // Never downgrade a completed claim to a partial one.
  if (existing && existing.deliverables.length >= deliverables.length) return claims;
  const next: Claims = {
    ...claims,
    [id]: { at: day, deliverables: [...deliverables].sort((a, b) => a - b) },
  };
  saveClaims(next);
  return next;
}

export function resetClaims() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
  emit();
}

/* --------------------------- React bindings --------------------------- */

export function useClaims(): Claims {
  const [claims, setClaims] = useState<Claims>(loadClaims);
  useEffect(() => subscribeClaims(() => setClaims(loadClaims())), []);
  return claims;
}

/** XP earned from shipped milestones — its own stat, next to lesson XP. */
export function useMilestoneXp(): number {
  return milestoneXpTotal(useClaims());
}

/**
 * Non-hook reader for code that runs outside render — the profile sync in
 * `AccountProvider` publishes this to the leaderboard.
 */
export function currentMilestoneXp(): number {
  return milestoneXpTotal(loadClaims());
}
