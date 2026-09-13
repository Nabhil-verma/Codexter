import { Link } from "react-router-dom";
import { tracks, type Track } from "../data";
import { scoreFor, useProgressState, type Progress } from "../lib/progress";

export function trackProgress(track: Track, progress: Progress) {
  const done = track.lessons.filter(
    (l) => scoreFor(progress, track.id + "/" + l.id) >= 1
  ).length;
  return { done, total: track.lessons.length };
}

export default function TrackCard({ track }: { track: Track }) {
  const progress = useProgressState();
  const { done, total } = trackProgress(track, progress);
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <Link
      to={"/learn/" + track.id + "/" + track.lessons[0].id}
      className="card card-hover group flex flex-col gap-4 p-7"
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-3xl text-gold-500">
          {String(tracks.indexOf(track) + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-xs text-ink-600">
          {done}/{total} lessons
        </span>
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold text-ink-950 transition group-hover:text-gold-600">
          {track.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{track.blurb}</p>
      </div>
      <div className="mt-auto h-px w-full bg-paper-200">
        <div
          className="h-px bg-gold-400 transition-all"
          style={{ width: pct + "%" }}
        />
      </div>
      <span className="font-mono text-xs text-gold-600 transition group-hover:translate-x-1">
        begin →
      </span>
    </Link>
  );
}
