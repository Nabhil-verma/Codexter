import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import TrackCard from "../components/TrackCard";
import { tracks, totalLessonCount, findTrack } from "../data";
import { loadProgress } from "../lib/progress";

const features = [
  {
    icon: "Ⅰ",
    title: "Learn by running real code",
    text: "Every lesson ships with a live editor and console. No videos to sit through — you write JavaScript from minute one.",
  },
  {
    icon: "Ⅱ",
    title: "Exercises that verify themselves",
    text: "Each lesson checks your output automatically, so you always know whether you actually got it.",
  },
  {
    icon: "Ⅲ",
    title: "Quizzes that lock it in",
    text: "Short quizzes with explanations at the end of every lesson. Score 100% to mark it complete.",
  },
  {
    icon: "Ⅳ",
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
        const first = findTrack(tracks[0].id) === track && i === 0;
        return (
          <Link
            to={`/learn/${track.id}/${lesson.id}`}
            className="card card-hover group mx-auto mt-12 flex max-w-2xl items-center gap-4 p-5 text-left"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">
              {first ? "Start here" : "Continue"}
            </span>
            <span className="min-w-0 flex-1 font-display text-lg font-medium text-ink-950">
              {lesson.title}
            </span>
            <span className="font-mono text-sm text-gold-600 transition group-hover:translate-x-1">
              →
            </span>
          </Link>
        );
      }
    }
  }
  return (
    <div className="card mx-auto mt-12 flex max-w-2xl items-center gap-4 border-gold-400/50 p-5">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">
        Complete
      </span>
      <span className="flex-1 font-display text-lg font-medium text-ink-950">
        Every lesson finished — congratulations.
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
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(28,25,23,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(28,25,23,0.045) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 25%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 25%, transparent 72%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-24 text-center sm:pt-32">
          <p className="eyebrow mb-5">beta · free forever</p>
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-semibold leading-[1.08] tracking-tight text-ink-950 sm:text-7xl">
            The code teacher that runs{" "}
            <span className="italic text-gold-500">your</span> code
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            Interactive JavaScript lessons with a built-in editor, console, and
            self-checking exercises. From your first{" "}
            <code className="font-mono text-[0.9em] text-gold-600">console.log</code>{" "}
            to real programs — no signup, no cost.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/learn" className="btn-gold">
              Start learning free →
            </Link>
            <a href="#tracks" className="btn-ghost">
              See the curriculum
            </a>
          </div>

          {/* Hero terminal */}
          <div className="code-window mx-auto mt-16 max-w-2xl text-left shadow-lift">
            <div className="flex items-center justify-between border-b border-ink-800 px-5 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold-400" />
              </div>
              <span className="font-mono text-xs text-ink-600">lesson-01.js</span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-gold-300">const</span>{" "}
                <span className="text-paper-100">learner</span>{" "}
                <span className="text-ink-600">=</span>{" "}
                <span className="text-paper-100">{"{"}</span>{" "}
                <span className="text-gold-400">name</span>
                <span className="text-ink-600">:</span>{" "}
                <span className="text-paper-300">"you"</span>
                <span className="text-ink-600">,</span>{" "}
                <span className="text-gold-400">excuses</span>
                <span className="text-ink-600">:</span>{" "}
                <span className="text-paper-300">"none"</span>{" "}
                <span className="text-paper-100">{"}"}</span>
                {"\n"}
                <span className="text-gold-300">console</span>
                <span className="text-ink-600">.</span>
                <span className="text-paper-100">log</span>
                <span className="text-paper-100">(</span>
                <span className="text-paper-300">"Hello, free education. 👋"</span>
                <span className="text-paper-100">)</span>
                {"\n\n"}
                <span className="text-ink-600">// → Hello, free education. 👋</span>
              </code>
            </pre>
          </div>

          <ContinueCard />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-paper-200 bg-paper-200 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="bg-paper-50 p-8 transition hover:bg-paper-100">
              <div className="font-display text-2xl text-gold-500">{f.icon}</div>
              <h3 className="mt-4 font-semibold text-ink-950">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section id="tracks" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
        <p className="eyebrow text-center">The curriculum</p>
        <h2 className="mt-3 text-center font-display text-4xl font-semibold tracking-tight text-ink-950">
          {tracks.length} tracks · {totalLessonCount} hands-on lessons
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-ink-600">
          Start at the top if you're new. Every lesson ends with code you ran
          yourself and a quiz you passed.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {tracks.map((t) => (
            <TrackCard key={t.id} track={t} />
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-8 py-16 text-center sm:px-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
          <p className="eyebrow !text-gold-400">No excuses left</p>
          <h2 className="mx-auto mt-4 max-w-lg font-display text-4xl font-semibold tracking-tight text-paper-50">
            Ready to write your first line?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-paper-300">
            It takes about five minutes to finish your first lesson. That's it.
            That's the pitch.
          </p>
          <Link to="/learn" className="btn-gold mt-9">
            Open lesson 1 →
          </Link>
        </div>
      </section>

      <footer className="border-t border-paper-200 py-10 text-center font-mono text-xs text-ink-600">
        code-learn<span className="text-gold-500">.reimagined</span> · a 100% free
        code teacher · built with ♥ and zero dollars
      </footer>
    </div>
  );
}
