import { Link } from "react-router-dom";
import type { Track } from "../data/curriculum";
import { loadProgress, type Progress } from "../lib/progress";

export function trackProgress(track: Track, progress: Progress) {
  const done = track.lessons.filter(
    (l) => (progress.completed[track.id + "/" + l.id] ?? 0) >= 1
  ).length;
  return { done, total: track.lessons.length };
}

export default function TrackCard({ track }: { track: Track }) {
  const progress = loadProgress();
  const { done, total } = trackProgress(track, progress);
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <Link
      to={"/learn/" + track.id}
      className="card group flex flex-col gap-3 p-6 transition hover:border-mint-500/50 hover:shadow-glow"
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl transition group-hover:scale-110">{track.emoji}</span>
        <span className="font-mono text-xs text-slate-500">
          {done}/{total} lessons
        </span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white transition group-hover:text-mint-300">
          {track.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-400">{track.blurb}</p>
      </div>
      <div className="mt-auto h-1.5 overflow-hidden rounded-full bg-ink-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-mint-600 to-mint-400 transition-all"
          style={{ width: pct + "%" }}
        />
      </div>
    </Link>
  );
}
