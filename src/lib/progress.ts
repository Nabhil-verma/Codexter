import { useEffect, useState } from "react";

const KEY = "clr-progress-v2";
/** Pre-v2 keys had no date suffix — migrated once on load. */
const LEGACY_KEYS = ["clr-progress-v1", "clr-progress"];

export type Progress = {
  /** lesson key `${trackId}/${lessonId}!${YYYY-MM-DD}` -> best quiz score (0..1) */
  completed: Record<string, number>;
};

export const EMPTY_PROGRESS: Progress = { completed: {} };

/** Stable part of a stored key: `web/html!2026-09-01` → `web/html`. */
export function lessonIdOf(key: string): string {
  return key.split("!")[0];
}

/* ------------------------------------------------------------------ */
/* Migration: v1 keys (`track/lesson`) → v2 (`track/lesson!date`).     */
/* Old scores keep their value; the completion day is unknowable, so   */
/* they count as completed but don't fabricate streak days.            */
/* ------------------------------------------------------------------ */

function migrateV1(raw: Record<string, number>): Record<string, number> {
  const out: Record<string, number> = {};
  for (const [k, v] of Object.entries(raw)) {
    out[k.includes("!") ? k : k + "!"] = v;
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Tiny pub/sub so every view re-renders when progress changes        */
/* ------------------------------------------------------------------ */

type Listener = () => void;
const listeners = new Set<Listener>();

export function subscribeProgress(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function emit() {
  for (const fn of listeners) fn();
}

/* ------------------------------------------------------------------ */
/* Core store                                                          */
/* ------------------------------------------------------------------ */

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Progress;
      if (parsed && typeof parsed.completed === "object" && parsed.completed) {
        return { completed: parsed.completed };
      }
    }
    // Attempt a one-time migration from any older format.
    for (const legacy of LEGACY_KEYS) {
      const old = localStorage.getItem(legacy);
      if (old) {
        const parsed = JSON.parse(old) as Progress;
        if (parsed && typeof parsed.completed === "object" && parsed.completed) {
          return { completed: migrateV1(parsed.completed) };
        }
      }
    }
  } catch {
    // corrupted storage — fall through to fresh state
  }
  return { completed: {} };
}

export function saveProgress(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    // storage unavailable (private mode) — progress just won't persist locally
  }
  emit();
}

/**
 * Record a lesson completion under today's date key.
 * `score` is the best quiz score (0..1); the best score per lesson wins.
 */
export function recordLesson(key: string, score: number, dateKey: string): Progress {
  const p = loadProgress();
  const storedKey = key + "!" + dateKey;
  const best = Math.max(scoreFor(p, key), score);
  if (best === scoreFor(p, key)) return p;
  p.completed[storedKey] = best;
  saveProgress(p);
  return p;
}

/** Best score a learner has for a lesson key, across all days. */
export function scoreFor(p: Progress, key: string): number {
  let best = 0;
  for (const [k, v] of Object.entries(p.completed)) {
    if (lessonIdOf(k) === key) best = Math.max(best, v);
  }
  return best;
}

/**
 * Record helper compatible with callers/tests that don't care about dates:
 * stamps today's date automatically. Prefer `recordLesson(key, score, day)`
 * when the day is meaningful (e.g. backfilling history).
 */
export function recordProgress(key: string, score: number): Progress {
  return recordLesson(key, score, todayKey());
}

function todayKey(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10);
}

export function resetLocalProgress() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
  for (const legacy of LEGACY_KEYS) {
    try {
      localStorage.removeItem(legacy);
    } catch {
      // ignore
    }
  }
  emit();
}

/** Union of two progress objects, keeping the best score per (lesson, day). */
export function mergeProgress(a: Progress, b: Progress): Progress {
  const merged: Progress = { completed: { ...a.completed } };
  for (const [k, v] of Object.entries(b.completed)) {
    merged.completed[k] = Math.max(merged.completed[k] ?? 0, v);
  }
  return merged;
}

/* ------------------------------------------------------------------ */
/* React bindings                                                      */
/* ------------------------------------------------------------------ */

export function useProgressState(): Progress {
  const [progress, setProgress] = useState<Progress>(loadProgress);
  useEffect(() => subscribeProgress(() => setProgress(loadProgress())), []);
  return progress;
}

export function useProgress() {
  return {
    get: loadProgress,
    record: recordLesson,
    reset: resetLocalProgress,
  };
}
