/* ------------------------------------------------------------------ */
/* XP, daily streak, and badges — all derived from the progress store  */
/* so nothing new needs to be persisted.                               */
/* ------------------------------------------------------------------ */

import { tracks } from "../data";
import { lessonIdOf, scoreFor, type Progress } from "./progress";

/* ---------------------------- XP ---------------------------- */

/** XP for one lesson: base 50, +25 for a flawless (100%) quiz. */
export function lessonXp(score: number): number {
  return 50 + (score >= 1 ? 25 : 0);
}

export function totalXp(progress: Progress): number {
  return Object.values(progress.completed).reduce(
    (sum, score) => sum + lessonXp(score),
    0
  );
}

/** 250 XP ≈ 4 lessons — one level. */
export const XP_PER_LEVEL = 250;

export function levelFor(xp: number) {
  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const intoLevel = xp % XP_PER_LEVEL;
  return {
    level,
    intoLevel,
    toNext: XP_PER_LEVEL - intoLevel,
    pct: Math.round((intoLevel / XP_PER_LEVEL) * 100),
  };
}

/* ------------------------- Daily streak ------------------------- */

export type Streak = { current: number; longest: number; lastDay: string | null };

/**
 * Streaks are computed from the sorted list of distinct days on which any
 * lesson was first-completed. `prevDays` is the set of "the day before X"
 * strings so the function stays pure and testable.
 */
export function computeStreak(
  progress: Progress,
  today: string,
  prevDays: Set<string>
): Streak {
  const daySet = new Set(
    Object.keys(progress.completed)
      .map((k) => k.split("!")[1])
      .filter((d): d is string => Boolean(d))
  );
  const days = [...daySet].sort();
  if (!days.length) return { current: 0, longest: 0, lastDay: null };

  // Longest run of consecutive calendar days, ever.
  let longest = 1;
  let run = 1;
  for (let i = 1; i < days.length; i++) {
    if (days[i] === nextDayKey(days[i - 1])) {
      run += 1;
    } else {
      run = 1;
    }
    longest = Math.max(longest, run);
  }

  // The current streak must reach today or yesterday, or it's broken.
  const last = days[days.length - 1];
  let current = 0;
  if (last === today || prevDays.has(last)) {
    current = 1;
    for (let i = days.length - 1; i > 0; i--) {
      if (days[i] === nextDayKey(days[i - 1])) current += 1;
      else break;
    }
  }
  return { current, longest, lastDay: last };
}

function nextDayKey(day: string): string {
  const d = new Date(day + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
}

/** Distinct days with at least one first completion. */
export function activeDays(progress: Progress): string[] {
  return [...new Set(
    Object.keys(progress.completed)
      .map((k) => k.split("!")[1])
      .filter((d): d is string => Boolean(d))
  )].sort();
}

/** Lessons completed today (by best-score day), for the "N today" pill. */
export function lessonsToday(progress: Progress, today: string): number {
  return Object.keys(progress.completed).filter(
    (k) => k.split("!")[1] === today
  ).length;
}

/* --------------------------- Badges --------------------------- */

export type Badge = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type EarnedBadge = Badge & { earned: boolean };

const ALL_BADGES: Badge[] = [
  { id: "first-steps", icon: "①", title: "First Steps", description: "Complete your first lesson." },
  { id: "flawless", icon: "◎", title: "Flawless", description: "Score 100% on any lesson quiz." },
  { id: "streak-3", icon: "③", title: "Three-Day Streak", description: "Learn something 3 days in a row." },
  { id: "streak-7", icon: "⑦", title: "Week Warrior", description: "Learn something 7 days in a row." },
  { id: "xp-1000", icon: "✦", title: "1,000 XP", description: "Earn 1,000 XP across all lessons." },
  { id: "track-finisher", icon: "❖", title: "Track Finisher", description: "Complete every lesson in a track." },
  { id: "explorer", icon: "❂", title: "Explorer", description: "Finish a lesson in 5 different tracks." },
  { id: "polyglot", icon: "✺", title: "Polyglot", description: "Finish a lesson in every track." },
];

export function allBadges(): Badge[] {
  return ALL_BADGES;
}

export function computeBadges(
  progress: Progress,
  streak: Streak
): EarnedBadge[] {
  const doneKeys = Object.keys(progress.completed).filter(
    (k) => (progress.completed[k] ?? 0) >= 1
  );
  const doneLessons = doneKeys.map(lessonIdOf);
  const doneTrackIds = new Set(doneLessons.map((k) => k.split("/")[0]));
  const anyFlawless = doneKeys.some((k) => progress.completed[k] >= 1);

  const trackFinished = (trackId: string) => {
    const track = tracks.find((t) => t.id === trackId);
    if (!track) return false;
    return track.lessons.every((l) => scoreFor(progress, trackId + "/" + l.id) >= 1);
  };

  return ALL_BADGES.map((b) => {
    let earned = false;
    switch (b.id) {
      case "first-steps": earned = doneLessons.length >= 1; break;
      case "flawless": earned = anyFlawless; break;
      case "streak-3": earned = streak.current >= 3 || streak.longest >= 3; break;
      case "streak-7": earned = streak.current >= 7 || streak.longest >= 7; break;
      case "xp-1000": earned = totalXp(progress) >= 1000; break;
      case "track-finisher": earned = tracks.some((t) => trackFinished(t.id)); break;
      case "explorer": earned = doneTrackIds.size >= 5; break;
      case "polyglot": earned = doneTrackIds.size >= tracks.length; break;
    }
    return { ...b, earned };
  });
}

/* ------------------------- Certificates ------------------------- */

/** Fully-completed tracks, newest-first by position in the curriculum. */
export function finishedTracks(progress: Progress) {
  return tracks.filter((t) =>
    t.lessons.every((l) => scoreFor(progress, t.id + "/" + l.id) >= 1)
  );
}

/* ----------------------- Date helpers (UTC) ----------------------- */

/** `YYYY-MM-DD` in UTC — stable across timezones for a global audience. */
export function todayKey(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10);
}

/** Set of "the day before today" and "two days before" — keeps weekend streaks alive. */
export function previousDayKeys(d: Date = new Date()): Set<string> {
  const one = new Date(d);
  one.setUTCDate(one.getUTCDate() - 1);
  const two = new Date(d);
  two.setUTCDate(two.getUTCDate() - 2);
  return new Set([todayKey(one), todayKey(two)]);
}
