import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import TrackCard from "../components/TrackCard";
import { tracks, totalLessonCount, findTrack } from "../data/curriculum";
import { loadProgress } from "../lib/progress";

const features = [
  {
    icon: "⚡",
    title: "Learn by running real code",
    text: "Every lesson ships with a live editor and console. No videos to sit through — you write JavaScript from minute one.",
  },
  {
    icon: "✅",
    title: "Exercises that verify themselves",
    text: "Each lesson checks your output automatically, so you always know whether you actually got it.",
  },
  {
    icon: "🧠",
    title: "Quizzes that lock it in",
    text: "Short quizzes with explanations at the end of every lesson. Score 100% to mark it complete.",
  },
  {
    icon: "🆓",
    title: "100% free, forever",
    text: "No account, no paywall, no ads. Progress is saved right in your browser.",
  },
];

function ContinueCard() {
  // Find the first lesson not yet completed, in curriculum order
  const progress = loadProgress();
  for (const track of tracks) {
    for (let i = 0; i < track.lessons.length; i++) {
      const lesson = track.lessons[i];
      if ((progress.completed[track.id + "/" + lesson.id] ?? 0) < 1) {
        const next = track.lessons[i + 1];
        const first = findTrack(tracks[0].id) === track && i === 0;
        return (
          <Link
            to={`/learn/${track.id}/${lesson.id}`}
            className="card group mx-auto mt-10 flex max-w-2xl items-center gap-4 border-mint-500/30 bg-mint-500/5 p-4 text-left transition hover:border-mint-500/60"
          >
            <span className="text-2xl">{track.emoji}</span>
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-xs text-mint-400">
                {first ? "start here" : "continue where you left off"}
              </span>
              <span className="block truncate font-semibold text-white">
                {lesson.title}
              </span>
            </span>
            <span className="btn-primary !px-4 !py-1.5 text-sm">{next || i > 0 ? "Continue →" : "Start →"}</span>
          </Link>
        );
      }
    }
  }
  return (
    <div className="card mx-auto mt-10 flex max-w-2xl items-center gap-4 border-mint-500/40 bg-mint-500/10 p-4">
      <span className="text-2xl">🏆</span>
      <span className="flex-1 font-semibold text-white">
        Every lesson complete — you finished the whole curriculum!
      </span>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(42,51,66,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(42,51,66,0.35) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 text-center sm:pt-28">
          <p className="mb-4 inline-block rounded-full border border-mint-500/40 bg-mint-500/10 px-3 py-1 font-mono text-xs text-mint-300">
            beta · free forever
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            The code teacher that runs{" "}
            <span className="font-mono text-mint-400">your</span> code
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Interactive JavaScript lessons with a built-in editor, console, and
            self-checking exercises. From <code className="font-mono text-mint-300">console.log</code> to
            arrays and objects — no signup, no cost.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/learn" className="btn-primary">
              Start learning free →
            </Link>
            <a href="#tracks" className="btn-ghost">
              See the curriculum
            </a>
          </div>

          <ContinueCard />

          {/* Hero terminal */}
          <div className="code-window mx-auto mt-14 max-w-2xl text-left">
            <div className="flex items-center gap-1.5 border-b border-ink-700 bg-ink-850 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-slate-500">
                lesson-01.js
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-sky-300">learner</span>{" "}
                <span className="text-slate-500">=</span>{" "}
                <span className="text-slate-300">{"{"}</span>{" "}
                <span className="text-mint-300">name</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-amber-300">"you"</span>
                <span className="text-slate-500">,</span>{" "}
                <span className="text-mint-300">excuses</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-amber-300">"none"</span>{" "}
                <span className="text-slate-300">{"}"}</span>
                {"\n"}
                <span className="text-purple-400">console</span>
                <span className="text-slate-500">.</span>
                <span className="text-sky-300">log</span>
                <span className="text-slate-300">(</span>
                <span className="text-amber-300">"Hello, free education! 👋"</span>
                <span className="text-slate-300">)</span>
                {"\n\n"}
                <span className="text-slate-600">// → Hello, free education! 👋</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="card p-6 transition hover:border-mint-500/40">
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-3 font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section id="tracks" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-white">
          {tracks.length} tracks · {totalLessonCount} hands-on lessons
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
          Start at the top if you're new. Every lesson ends with code you ran
          yourself and a quiz you passed.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {tracks.map((t) => (
            <TrackCard key={t.id} track={t} />
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="card relative overflow-hidden p-10 text-center sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mint-500/10 blur-3xl" />
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Ready to write your first line?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-slate-400">
            It takes about five minutes to finish your first lesson. That's it.
            That's the pitch.
          </p>
          <Link to="/learn" className="btn-primary mt-7">
            Open lesson 1 →
          </Link>
        </div>
      </section>

      <footer className="border-t border-ink-700 py-8 text-center font-mono text-xs text-slate-500">
        code-learn<span className="text-mint-400">.reimagined</span> · a 100% free
        code teacher · built with ♥ and zero dollars
      </footer>
    </div>
  );
}
