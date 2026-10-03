import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, Flame, Play } from "lucide-react";
import { BentoGrid, BentoItem } from "../components/ui/BentoGrid";
import { CyberBadge } from "../components/ui/CyberBadge";
import { NeonPulseButton } from "../components/ui/NeonPulseButton";
import { PrecisionProgressBar } from "../components/ui/PrecisionProgressBar";
import { SocraticChatBubble, SocraticStatus } from "../components/ui/SocraticChatBubble";
import { cn } from "../lib/cn";
import type { StatItem } from "../types";

/* -------------------------------------------------------------------------- */
/* Shared bits                                                                */
/* -------------------------------------------------------------------------- */

const HERO_CODE = [
  "function sumEvens(nums) {",
  "  let total = 0;",
  "  for (let i = 0; i < nums.length - 1; i++) {",
  "    if (nums[i] % 2 === 0) total += nums[i];",
  "  }",
  "  return total;",
  "}",
].join("\n");

const BUG_LINE = 2;
const TOKEN = /(\b(?:function|let|const|for|if|return)\b|\b\d+\b)/g;

function tint(line: string): ReactNode[] {
  return line.split(TOKEN).map((part, i) => {
    if (/^(function|let|const|for|if|return)$/.test(part)) {
      return (
        <span key={i} className="text-violet-300">
          {part}
        </span>
      );
    }
    if (/^\d+$/.test(part)) {
      return (
        <span key={i} className="text-amber-300">
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function useTypewriter(text: string, enabled: boolean, speedMs = 26): string {
  const [out, setOut] = useState(enabled ? "" : text);

  useEffect(() => {
    if (!enabled) {
      setOut(text);
      return;
    }
    setOut("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speedMs);
    return () => window.clearInterval(id);
  }, [text, enabled, speedMs]);

  return out;
}

interface MacWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

function MacWindow({ title, children, className }: MacWindowProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0F]/90 backdrop-blur-2xl",
        "shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9),0_0_60px_-20px_rgba(0,229,255,0.15)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="ml-3 font-mono text-[0.7rem] tracking-widest text-zinc-500">{title}</span>
      </div>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Nav                                                                        */
/* -------------------------------------------------------------------------- */

interface NavProps {
  onStart: () => void;
}

function Nav({ onStart }: NavProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#030305]/70 backdrop-blur-2xl">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="/"
          className="flex items-center gap-2.5 rounded-md font-display text-lg font-extrabold tracking-tighter text-[#FAFAFA] outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        >
          <span aria-hidden className="h-2.5 w-2.5 rounded-[3px] bg-[#00E5FF] shadow-[0_0_14px_rgba(0,229,255,0.7)]" />
          Codexter
        </a>
        <NeonPulseButton size="sm" onClick={onStart}>
          Start free
        </NeonPulseButton>
      </nav>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

const HEADLINE: string[][] = [
  ["Don't", "get", "the", "answer."],
  ["Earn", "it."],
];

const headlineContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const headlineWord: Variants = {
  hidden: { y: "105%" },
  show: { y: "0%", transition: { type: "spring", stiffness: 400, damping: 30 } },
};

function FloatingCodeWindow() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 180, damping: 20 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 20 });

  const typed = useTypewriter(HERO_CODE, !reduce, 26);
  const done = typed.length === HERO_CODE.length;
  const fullLines = HERO_CODE.split("\n");
  const typedLines = typed.split("\n");
  const caretLine = done ? -1 : typedLines.length - 1;

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div onMouseMove={onMove} onMouseLeave={onLeave} className="[perspective:1200px]">
      <motion.div style={reduce ? undefined : { rotateX, rotateY }} className="will-change-transform">
        <MacWindow title="sumEvens.js">
          <pre
            aria-label={`Code preview: ${HERO_CODE}`}
            className="overflow-x-auto py-5 font-mono text-[0.85rem] leading-7 text-zinc-300"
          >
            {fullLines.map((_, i) => {
              const text = typedLines[i] ?? "";
              const highlighted = i === BUG_LINE && (done || typedLines.length > BUG_LINE + 1);
              return (
                <div
                  key={i}
                  className={cn(
                    "relative flex px-5 transition-colors duration-700",
                    highlighted && "bg-cyan-400/[0.06]",
                  )}
                >
                  {highlighted && (
                    <span
                      aria-hidden
                      className="absolute inset-y-0 left-0 w-0.5 bg-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.9)]"
                    />
                  )}
                  <span aria-hidden className="mr-5 w-4 select-none text-right text-zinc-600">
                    {i + 1}
                  </span>
                  <code className="whitespace-pre">
                    {tint(text)}
                    {i === caretLine && (
                      <span aria-hidden className="ml-px inline-block h-4 w-[2px] translate-y-0.5 animate-blink bg-[#00E5FF]" />
                    )}
                  </code>
                </div>
              );
            })}
          </pre>
          <div className="flex items-center justify-between border-t border-white/5 px-5 py-3 font-mono text-[0.7rem] tracking-widest text-zinc-500">
            <span>sumEvens([2, 4, 6])</span>
            <span className="text-rose-300">expected 12, got 6</span>
          </div>
        </MacWindow>
      </motion.div>
    </div>
  );
}

interface HeroProps {
  onStart: () => void;
  onWatchDemo?: () => void;
}

function Hero({ onStart, onWatchDemo }: HeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-cyan-400 opacity-10 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-violet-600 opacity-20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 pb-32 pt-28 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-10 lg:pb-44 lg:pt-40">
        <div>
          <CyberBadge tone="cyan" live>
            Free to learn
          </CyberBadge>

          <motion.h1
            variants={headlineContainer}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="mt-10 font-display text-6xl font-extrabold leading-[0.95] tracking-tighter sm:text-7xl xl:text-8xl"
          >
            {HEADLINE.map((line, li) => (
              <span key={li} className="block">
                {line.map((word) => (
                  <span key={word} className="mr-[0.25em] inline-block overflow-hidden pb-[0.14em] align-bottom">
                    <motion.span
                      variants={headlineWord}
                      className="inline-block bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </motion.h1>

          <p className="mt-10 max-w-md text-lg leading-8 text-slate-400">
            Codexter is a code teacher that asks the right question instead of handing over the fix. You write and run
            real code from your first minute.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <NeonPulseButton size="lg" icon={<ArrowRight className="h-5 w-5" />} onClick={onStart}>
              Start your first quest
            </NeonPulseButton>
            <NeonPulseButton
              size="lg"
              variant="secondary"
              icon={<Play className="h-4 w-4" />}
              onClick={onWatchDemo}
              disabled={!onWatchDemo}
            >
              Watch a lesson
            </NeonPulseButton>
          </div>
        </div>

        <FloatingCodeWindow />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Features bento                                                             */
/* -------------------------------------------------------------------------- */

const HINT_TIERS = [
  { name: "Nudge", body: "A question about the concept, nothing more.", opacity: "opacity-100" },
  { name: "Syntax", body: "The shape of the code you are reaching for.", opacity: "opacity-60" },
  { name: "Skeleton", body: "A scaffold with the key lines left blank.", opacity: "opacity-30" },
] as const;

function Features() {
  return (
    <section aria-labelledby="features-heading" className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-44">
      <h2
        id="features-heading"
        className="max-w-xl font-display text-4xl font-extrabold tracking-tighter text-[#FAFAFA] sm:text-5xl"
      >
        Built so you do the thinking.
      </h2>

      <BentoGrid className="mt-20">
        <BentoItem colSpan={2} rowSpan={2} tone="cyan" className="flex flex-col">
          <h3 className="font-display text-2xl font-bold tracking-tight text-[#FAFAFA]">A tutor that asks first</h3>
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
            Stuck? You get a question, then a nudge, then a skeleton. The full solution is the last resort, not the
            first click.
          </p>
          <ol className="mt-auto flex flex-col gap-3 pt-12">
            {HINT_TIERS.map((tier) => (
              <li
                key={tier.name}
                className={cn(
                  "flex items-baseline justify-between gap-6 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4",
                  tier.opacity,
                )}
              >
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">{tier.name}</span>
                <span className="text-right text-sm text-zinc-400">{tier.body}</span>
              </li>
            ))}
          </ol>
        </BentoItem>

        <BentoItem colSpan={2} tone="emerald" className="flex flex-col justify-between gap-10">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-[#FAFAFA]">Every lesson pays out</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
              XP, levels, daily streaks and quests turn practice into a habit you can see.
            </p>
          </div>
          <div className="flex items-end gap-8">
            <PrecisionProgressBar tone="emerald" label="Level 7" valueLabel="680 / 1000 XP" value={680} max={1000} />
            <span
              aria-label="7 day streak"
              className="flex shrink-0 items-center gap-1.5 font-mono text-sm text-amber-300 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]"
            >
              <Flame aria-hidden className="h-4 w-4" />7
            </span>
          </div>
        </BentoItem>

        <BentoItem tone="violet" padding="md" className="flex flex-col justify-between">
          <h3 className="font-display text-xl font-bold tracking-tight text-[#FAFAFA]">Runs in your browser</h3>
          <p className="font-mono text-xs leading-6 text-zinc-500">
            <span className="text-emerald-400/80">3 passing</span>
            <br />
            <span className="text-zinc-600">0 failing, 12ms</span>
          </p>
        </BentoItem>

        <BentoItem tone="amber" padding="md" className="flex flex-col justify-between gap-6">
          <h3 className="font-display text-xl font-bold tracking-tight text-[#FAFAFA]">Climb the board</h3>
          <ul className="flex flex-col gap-2 font-mono text-xs text-zinc-500">
            <li className="flex justify-between">
              <span className="text-amber-300">1</span>
              <span className="tabular-nums">12,480</span>
            </li>
            <li className="flex justify-between">
              <span>2</span>
              <span className="tabular-nums">11,905</span>
            </li>
            <li className="flex justify-between">
              <span>3</span>
              <span className="tabular-nums">10,230</span>
            </li>
          </ul>
        </BentoItem>
      </BentoGrid>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Socratic showcase                                                          */
/* -------------------------------------------------------------------------- */

function Showcase() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const id = window.setTimeout(() => setAnswered(true), reduce ? 0 : 1600);
    return () => window.clearTimeout(id);
  }, [inView, reduce]);

  return (
    <section aria-labelledby="showcase-heading" className="relative mx-auto max-w-7xl px-6 pb-32 lg:px-10 lg:pb-44">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400 opacity-10 blur-[140px]" />
      <h2
        id="showcase-heading"
        className="relative max-w-2xl font-display text-4xl font-extrabold tracking-tighter text-[#FAFAFA] sm:text-5xl"
      >
        When your code breaks, it asks a better question.
      </h2>

      <div ref={ref} className="relative mt-20 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <MacWindow title="sumEvens.test.js">
          <div className="space-y-4 p-6 font-mono text-[0.8rem] leading-6">
            <p className="text-rose-300">FAIL sumEvens adds every even number</p>
            <p className="text-zinc-500">
              expected <span className="text-emerald-400/80">12</span>
              <br />
              received <span className="text-rose-300">6</span>
            </p>
            <p className="text-zinc-600">at sumEvens.js:3</p>
          </div>
        </MacWindow>

        <MacWindow title="socratic-ai">
          <div className="flex min-h-[15rem] flex-col gap-5 p-6">
            <SocraticChatBubble role="user">Why does sumEvens([2, 4, 6]) return 6?</SocraticChatBubble>
            {answered ? (
              <SocraticChatBubble role="socratic" hints={["Show me a hint", "Walk me through the loop"]}>
                Your loop stops one step early. What index does the last item of <code className="font-mono text-cyan-200">nums</code>{" "}
                live at, and does <code className="font-mono text-cyan-200">i</code> ever get there?
              </SocraticChatBubble>
            ) : (
              <SocraticStatus />
            )}
          </div>
        </MacWindow>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Stats marquee + closing CTA                                                */
/* -------------------------------------------------------------------------- */

interface StatsMarqueeProps {
  stats: StatItem[];
}

function StatsMarquee({ stats }: StatsMarqueeProps) {
  const loop = [...stats, ...stats];

  return (
    <section aria-label="Platform stats" className="border-y border-white/5 bg-white/[0.02] backdrop-blur-2xl">
      <div className="overflow-hidden py-12 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex w-max animate-marquee gap-24 pr-24 motion-reduce:animate-none">
          {loop.map((stat, i) => (
            <li
              key={`${stat.label}-${i}`}
              aria-hidden={i >= stats.length}
              className="flex items-baseline gap-4 whitespace-nowrap"
            >
              <span className="font-mono text-4xl font-medium tabular-nums tracking-tight text-[#FAFAFA]">{stat.value}</span>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

interface ClosingProps {
  onStart: () => void;
}

function Closing({ onStart }: ClosingProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-40 text-center lg:py-56">
      <h2 className="font-display text-4xl font-extrabold tracking-tighter text-[#FAFAFA] sm:text-6xl">
        Start with a real exercise, not a video.
      </h2>
      <div className="mt-12 flex justify-center">
        <NeonPulseButton size="lg" icon={<ArrowRight className="h-5 w-5" />} onClick={onStart}>
          Start your first quest
        </NeonPulseButton>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export interface LandingProps {
  onStart: () => void;
  onWatchDemo?: () => void;
  stats: StatItem[];
}

export default function Landing({ onStart, onWatchDemo, stats }: LandingProps) {
  return (
    <div className="min-h-screen bg-[#030305] font-sans text-zinc-300">
      <Nav onStart={onStart} />
      <main>
        <Hero onStart={onStart} onWatchDemo={onWatchDemo} />
        <StatsMarquee stats={stats} />
        <Features />
        <Showcase />
        <Closing onStart={onStart} />
      </main>
    </div>
  );
}
