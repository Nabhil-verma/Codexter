import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { tracks, lessonKey, totalLessonCount } from "../data/curriculum";
import { loadProgress } from "../lib/progress";

export default function Learn() {
  const progress = loadProgress();
  const doneCount = tracks.reduce(
    (n, t) =>
      n +
      t.lessons.filter((l) => (progress.completed[lessonKey(t.id, l.id)] ?? 0) >= 1)
        .length,
    0
  );
  const pct = Math.round((doneCount / totalLessonCount) * 100);

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-white">All lessons</h1>
            <p className="mt-2 text-slate-400">
              Work through the tracks in order, or jump to whatever looks useful.
            </p>
          </div>
          {doneCount > 0 && (
            <button
              onClick={() => {
                if (confirm("Reset all progress? This can't be undone.")) {
                  localStorage.removeItem("clr-progress-v1");
                  location.reload();
                }
              }}
              className="rounded-lg border border-ink-700 px-3 py-1.5 font-mono text-xs text-slate-400 transition hover:border-red-500/50 hover:text-red-300"
            >
              reset progress
            </button>
          )}
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between font-mono text-xs text-slate-500">
            <span>
              <span className="text-mint-400">{doneCount}</span> of{" "}
              {totalLessonCount} lessons complete
            </span>
            <span>{pct}%</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-ink-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-mint-600 to-mint-400 transition-all"
              style={{ width: pct + "%" }}
            />
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {tracks.map((track) => (
            <section key={track.id}>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl">{track.emoji}</span>
                <div>
                  <h2 className="text-xl font-bold text-white">{track.title}</h2>
                  <p className="text-sm text-slate-400">{track.blurb}</p>
                </div>
              </div>
              <ol className="space-y-2">
                {track.lessons.map((lesson, i) => {
                  const key = lessonKey(track.id, lesson.id);
                  const score = progress.completed[key] ?? 0;
                  const done = score >= 1;
                  const started = score > 0;
                  return (
                    <li key={lesson.id}>
                      <Link
                        to={"/learn/" + track.id + "/" + lesson.id}
                        className="card flex items-center gap-4 px-5 py-4 transition hover:border-mint-500/50"
                      >
                        <span
                          className={
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold " +
                            (done
                              ? "bg-mint-500 text-ink-950"
                              : started
                                ? "bg-mint-500/20 text-mint-300"
                                : "bg-ink-700 text-slate-400")
                          }
                        >
                          {done ? "✓" : i + 1}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold text-white">
                            {lesson.title}
                          </span>
                          <span className="block font-mono text-xs text-slate-500">
                            {lesson.minutes} min · {lesson.quiz.length} quiz questions
                          </span>
                        </span>
                        <span className="font-mono text-sm text-slate-500">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
