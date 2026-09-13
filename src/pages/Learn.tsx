import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { tracks, lessonKey, totalLessonCount } from "../data";
import { resetLocalProgress, scoreFor, useProgressState } from "../lib/progress";
import {
  activeDays,
  computeBadges,
  computeStreak,
  lessonsToday,
  levelFor,
  previousDayKeys,
  todayKey,
  totalXp,
} from "../lib/gamification";
import { useAccount } from "../AccountProvider";
import SkillTree from "../components/SkillTree";
import MicroPractice from "../components/MicroPractice";

export default function Learn() {
  const progress = useProgressState();
  const { user, resetEverything } = useAccount();
  const navigate = useNavigate();
  const doneCount = tracks.reduce(
    (n, t) =>
      n +
      t.lessons.filter((l) => scoreFor(progress, lessonKey(t.id, l.id)) >= 1)
        .length,
    0
  );
  const pct = Math.round((doneCount / totalLessonCount) * 100);
  const today = todayKey();
  const streak = computeStreak(progress, today, previousDayKeys());
  const level = levelFor(totalXp(progress));
  const badges = computeBadges(progress, streak);
  const earnedCount = badges.filter((b) => b.earned).length;
  const doneToday = lessonsToday(progress, today);
  const days = activeDays(progress);

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
                  if (user) {
                    // Signed in: wipe device + cloud copy; UI updates live.
                    void resetEverything();
                  } else {
                    resetLocalProgress();
                  }
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

        {/* Engagement panel — XP, level, streak, badges */}
        <div className="card mt-8 grid gap-6 p-6 sm:grid-cols-3">
          <div>
            <p className="eyebrow">Level {level.level}</p>
            <p className="mt-1 font-display text-2xl font-semibold text-ink-950">
              {totalXp(progress).toLocaleString()} XP
            </p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-paper-200">
              <div
                className="h-full rounded-full bg-gold-400 transition-all"
                style={{ width: level.pct + "%" }}
              />
            </div>
            <p className="mt-1.5 font-mono text-[11px] text-ink-600">
              {level.toNext} XP to level {level.level + 1}
            </p>
          </div>
          <div>
            <p className="eyebrow">Daily streak</p>
            <p className="mt-1 font-display text-2xl font-semibold text-ink-950">
              {streak.current} day{streak.current === 1 ? "" : "s"}
              {streak.current === 0 && days.length > 0 && (
                <span className="ml-2 font-mono text-xs font-normal text-ink-600">
                  (best: {streak.longest})
                </span>
              )}
            </p>
            <p className="mt-1.5 font-mono text-[11px] text-ink-600">
              {doneToday > 0
                ? doneToday + " lesson" + (doneToday === 1 ? "" : "s") + " today — keep it alive"
                : days.length > 0
                  ? "complete a lesson today to extend it"
                  : "complete your first lesson to start one"}
            </p>
            {days.length > 0 && <ActivityStrip days={days} today={today} />}
          </div>
          <div>
            <p className="eyebrow">Badges</p>
            <p className="mt-1 font-display text-2xl font-semibold text-ink-950">
              {earnedCount}/{badges.length}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {badges.map((b) => (
                <span
                  key={b.id}
                  title={b.title + " — " + b.description}
                  className={
                    "flex h-8 w-8 items-center justify-center rounded-full border text-sm transition " +
                    (b.earned
                      ? "border-gold-400 bg-gold-400/15 text-gold-600 shadow-glow"
                      : "border-paper-200 text-paper-300")
                  }
                >
                  {b.icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Skill Tree */}
        <div className="mt-14">
          <h2 className="eyebrow mb-4">skill tree</h2>
          <div className="rounded-2xl border border-ink-200 bg-paper-50 p-6">
            <SkillTree />
          </div>
        </div>

        {/* Mobile Micro-Practice */}
        <div className="mt-14">
          <h2 className="eyebrow mb-4">quick practice</h2>
          <MicroPractice />
        </div>

        <div className="mt-14 space-y-12">
          {tracks.map((track) => {
            const trackDone = track.lessons.filter((l) => scoreFor(progress, lessonKey(track.id, l.id)) >= 1).length;
            return (
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
                  const score = scoreFor(progress, key);
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

              {/* Certificate CTA for fully-completed tracks */}
              {trackDone === track.lessons.length && (
                <div className="mt-4 rounded-2xl border border-gold-400/50 bg-gold-400/10 px-5 py-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm text-ink-800">
                      <span className="mr-2 text-gold-600">✦</span>
                      <strong className="font-display font-semibold text-ink-950">
                        Track complete.
                      </strong>{" "}
                      Claim your printable certificate.
                    </p>
                    <button
                      type="button"
                      onClick={() => navigate("/certificate/" + track.id)}
                      className="btn-gold !px-5 !py-2 text-sm"
                    >
                      View certificate →
                    </button>
                  </div>
                </div>
              )}
            </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}

/** Last 14 days of activity as a tiny strip of squares. */
function ActivityStrip({ days, today }: { days: string[]; today: string }) {
  const set = new Set(days);
  const cells: { key: string; on: boolean }[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(today + "T00:00:00Z");
    d.setUTCDate(d.getUTCDate() - i);
    const k = d.toISOString().slice(0, 10);
    cells.push({ key: k, on: set.has(k) });
  }
  return (
    <div className="mt-3 flex gap-1" aria-label="Last 14 days of activity">
      {cells.map((c) => (
        <span
          key={c.key}
          title={c.key}
          className={
            "h-3 w-3 rounded-[3px] " +
            (c.on ? "bg-gold-400" : "bg-paper-200")
          }
        />
      ))}
    </div>
  );
}
