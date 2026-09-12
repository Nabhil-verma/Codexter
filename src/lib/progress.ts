const KEY = "clr-progress-v1";

export type Progress = {
  /** lesson key `${trackId}/${lessonId}` -> best quiz score (0..1) */
  completed: Record<string, number>;
};

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Progress;
  } catch {
    // corrupted storage — fall through to fresh state
  }
  return { completed: {} };
}

export function saveProgress(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    // storage unavailable (private mode) — progress just won't persist
  }
}

export function useProgress() {
  const get = loadProgress;
  const record = (key: string, score: number) => {
    const p = loadProgress();
    p.completed[key] = Math.max(p.completed[key] ?? 0, score);
    saveProgress(p);
  };
  const reset = () => saveProgress({ completed: {} });
  return { get, record, reset };
}
