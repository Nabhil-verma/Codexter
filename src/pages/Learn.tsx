import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { tracks, lessonKey, totalLessonCount } from "../data";
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
      <main className="mx-auto max-w-4xl px-4 py-16">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="eyebrow">The curriculum</p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink-950">
              All lessons
            </h1>
            <p className="mt-3 max-w-lg text-ink-600">
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
              className="rounded-full border border-paper-300 px-4 py-1.5 font-mono text-xs text-ink-600 transition hover:border-gold-400 hover:text-gold-600"
            >
              reset progress
            </button>
          )}
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between font-mono text-xs text-ink-600">
            <span>
              <span className="text-gold-600">{doneCount}</span> of {totalLessonCount}{" "}
              lessons complete
            </span>
            <span>{pct}%</span>
          </div>
          <div className="mt-2 h-px w-full bg-paper-200">
            <div
              className="h-px bg-gold-400 transition-all"
              style={{ width: pct + "%" }}
            />
          </div>
        </div>

        <div className="mt-14 space-y-12">
          {tracks.map((track) => (
            <section key={track.id}>
              <div className="mb-5 flex items-baseline gap-4 border-b border-paper-200 pb-4">
                <span className="font-display text-2xl text-gold-500">
                  {String(tracks.indexOf(track) + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-ink-950">
                    {track.title}
                  </h2>
                  <p className="text-sm text-ink-600">{track.blurb}</p>
                </div>
              </div>
              <ol className="space-y-1">
                {track.lessons.map((lesson, i) => {
                  const key = lessonKey(track.id, lesson.id);
                  const score = progress.completed[key] ?? 0;
                  const done = score >= 1;
                  const started = score > 0;
                  return (
                    <li key={lesson.id}>
                      <Link
                        to={"/learn/" + track.id + "/" + lesson.id}
                        className="group flex items-center gap-4 rounded-xl px-4 py-4 transition hover:bg-paper-100"
                      >
                        <span
                          className={
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-bold transition " +
                            (done
                              ? "border-gold-400 bg-gold-400 text-ink-950"
                              : started
                                ? "border-gold-400/60 text-gold-600"
                                : "border-paper-300 text-ink-600")
                          }
                        >
                          {done ? "✓" : String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-lg font-medium text-ink-950 group-hover:text-gold-600">
                            {lesson.title}
                          </span>
                          <span className="block font-mono text-xs text-ink-600">
                            {lesson.minutes} min ·{" "}
                            {lesson.starter
                              ? "interactive"
                              : lesson.gitSim
                                ? "terminal"
                                : lesson.sandbox
                                  ? "visual"
                                  : "reading"}
                            {lesson.predict?.length ? " · predict" : ""} ·{" "}
                            {lesson.quiz.length} quiz questions
                          </span>
                        </span>
                        <span className="font-mono text-sm text-ink-600 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                          →
                        </span>
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
