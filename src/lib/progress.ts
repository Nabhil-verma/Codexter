import { useEffect, useState } from "react";

const KEY = "clr-progress-v1";

export type Progress = {
  /** lesson key `${trackId}/${lessonId}` -> best quiz score (0..1) */
  completed: Record<string, number>;
};

export const EMPTY_PROGRESS: Progress = { completed: {} };

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

export function recordProgress(key: string, score: number): Progress {
  const p = loadProgress();
  const best = Math.max(p.completed[key] ?? 0, score);
  if (best === p.completed[key]) return p;
  p.completed[key] = best;
  saveProgress(p);
  return p;
}

export function resetLocalProgress() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
  // Legacy key from the very first build — clear it too.
  try {
    localStorage.removeItem("clr-progress");
  } catch {
    // ignore
  }
  emit();
}

/** Union of two progress objects, keeping the best score per lesson key. */
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
    record: recordProgress,
    reset: resetLocalProgress,
  };
}
