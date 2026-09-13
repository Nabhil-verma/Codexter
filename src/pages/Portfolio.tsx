import { useProgressState } from "../lib/progress";
import {
  totalXp,
  levelFor,
  computeStreak,
  computeBadges,
  activeDays,
  todayKey,
  previousDayKeys,
} from "../lib/gamification";
import { tracks } from "../data";
import { scoreFor } from "../lib/progress";
import Nav from "../components/Nav";

function HeatMap() {
  const progress = useProgressState();
  const days = activeDays(progress);
  const daySet = new Set(days);

  // Generate the last 52 weeks of day keys
  const weeks: string[][] = [];
  const today = new Date();
  for (let w = 51; w >= 0; w--) {
    const week: string[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(today);
      date.setUTCDate(date.getUTCDate() - (w * 7 + (6 - d)));
      week.push(todayKey(date));
    }
    weeks.push(week);
  }

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex gap-0.5">
        {weeks.map((w, wi) => (
          <div key={wi} className="flex flex-col gap-0.5">
            {w.map((day) => (
              <div
                key={day}
                title={`${day}: ${daySet.has(day) ? "active" : "inactive"}`}
                className={`h-2.5 w-2.5 rounded-sm transition ${
                  daySet.has(day) ? "bg-gold-400" : "bg-ink-100"
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function BadgeGrid() {
  const progress = useProgressState();
  const streak = computeStreak(progress, todayKey(), previousDayKeys(new Date()));
  const badges = computeBadges(progress, streak);

  return (
    <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
      {badges.map((b) => (
        <div
          key={b.id}
          className={`flex flex-col items-center rounded-xl border p-3 text-center transition ${
            b.earned
              ? "border-gold-400/60 bg-gold-400/10"
              : "border-ink-200 bg-paper-50 opacity-50"
          }`}
        >
          <span className="text-2xl">{b.icon}</span>
          <span className="mt-1 font-mono text-[10px] leading-tight text-ink-700">
            {b.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const progress = useProgressState();
  const xp = totalXp(progress);
  const level = levelFor(xp);
  const streak = computeStreak(progress, todayKey(), previousDayKeys(new Date()));
  const completedTracks = tracks.filter((t) =>
    t.lessons.every((l) => scoreFor(progress, t.id + "/" + l.id) >= 1)
  );
  const completedLessons = tracks.reduce((sum, t) => {
    return (
      sum +
      t.lessons.filter((l) => scoreFor(progress, t.id + "/" + l.id) >= 1)
        .length
    );
  }, 0);
  const totalLessons = tracks.reduce((sum, t) => sum + t.lessons.length, 0);

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <p className="eyebrow text-center">your profile</p>
        <h1 className="mt-3 text-center font-display text-4xl font-semibold tracking-tight text-ink-950">
          Student Portfolio
        </h1>

        {/* Stats bar */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Level", value: String(level.level), icon: "\uD83C\uDFC6" },
            { label: "Total XP", value: String(xp), icon: "\u2B50" },
            { label: "Streak", value: `${streak.current} days`, icon: "\uD83D\uDD25" },
            {
              label: "Lessons",
              value: `${completedLessons}/${totalLessons}`,
              icon: "\uD83D\uDCDA",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-ink-200 bg-paper-50 p-4 text-center"
            >
              <span className="text-xl">{s.icon}</span>
              <p className="mt-1 font-display text-2xl font-semibold text-ink-950">
                {s.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Activity Heatmap */}
        <section className="mt-10">
          <h2 className="eyebrow mb-4">activity</h2>
          <div className="rounded-2xl border border-ink-200 bg-paper-50 p-5">
            <HeatMap />
            <div className="mt-3 flex items-center gap-2 font-mono text-[10px] text-ink-500">
              <span>Less</span>
              <div className="h-2.5 w-2.5 rounded-sm bg-ink-100" />
              <div className="h-2.5 w-2.5 rounded-sm bg-gold-400/30" />
              <div className="h-2.5 w-2.5 rounded-sm bg-gold-400/55" />
              <div className="h-2.5 w-2.5 rounded-sm bg-gold-500" />
              <span>More</span>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="mt-10">
          <h2 className="eyebrow mb-4">badges</h2>
          <BadgeGrid />
        </section>

        {/* Completed Tracks */}
        <section className="mt-10">
          <h2 className="eyebrow mb-4">completed tracks</h2>
          {completedTracks.length === 0 ? (
            <p className="text-sm text-ink-500">
              No tracks completed yet {"\u2014"} keep going!
            </p>
          ) : (
            <div className="space-y-2">
              {completedTracks.map((t) => (
                <div
                  key={t.id}
                  className="flex items-center gap-3 rounded-xl border border-gold-400/40 bg-gold-400/5 px-4 py-3"
                >
                  <span className="text-lg">{"\uD83C\uDF93"}</span>
                  <span className="flex-1 font-display text-lg font-medium text-ink-950">
                    {t.title}
                  </span>
                  <span className="font-mono text-xs text-gold-600">{"\u2713"}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Share */}
        <section className="mt-10 rounded-2xl border border-ink-200 bg-paper-50 p-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500">
            share your progress
          </p>
          <p className="mt-2 text-sm text-ink-600">
            Your portfolio is saved locally. Screenshot or share this page URL
            to show off your progress.
          </p>
        </section>
      </main>
    </div>
  );
}
