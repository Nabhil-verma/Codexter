import { ArrowRight, Clock, Flame, Trophy } from "lucide-react";
import { BentoGrid, BentoItem } from "../components/ui/BentoGrid";
import { CyberBadge, type BadgeTone } from "../components/ui/CyberBadge";
import { MinimalGlassCard } from "../components/ui/MinimalGlassCard";
import { NeonPulseButton } from "../components/ui/NeonPulseButton";
import { PrecisionProgressBar, PrecisionRing } from "../components/ui/PrecisionProgressBar";
import { CardSkeleton, Skeleton } from "../components/ui/Skeleton";
import { cn } from "../lib/cn";
import type { CourseModule, DailyChallenge, Difficulty, Player } from "../types";

const difficultyTone: Record<Difficulty, BadgeTone> = {
  beginner: "emerald",
  intermediate: "amber",
  advanced: "rose",
};

/* -------------------------------------------------------------------------- */
/* Player header                                                              */
/* -------------------------------------------------------------------------- */

interface PlayerHeaderProps {
  player: Player;
}

function PlayerHeader({ player }: PlayerHeaderProps) {
  return (
    <header className="grid items-end gap-10 lg:grid-cols-[1fr_minmax(18rem,26rem)_auto] lg:gap-16">
      <div>
        <p className="font-mono text-[0.7rem] uppercase tracking-widest text-zinc-500">Welcome back</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tighter text-[#FAFAFA] sm:text-5xl">
          {player.name}
        </h1>
        {player.title && <p className="mt-2 text-sm text-slate-400">{player.title}</p>}
      </div>

      <PrecisionProgressBar
        tone="cyan"
        label={`Level ${player.level}`}
        valueLabel={`${player.xpIntoLevel.toLocaleString()} / ${player.xpForLevel.toLocaleString()} XP`}
        value={player.xpIntoLevel}
        max={player.xpForLevel}
      />

      <dl className="flex items-end gap-10">
        <div aria-label={`${player.streak} day streak`}>
          <dt className="sr-only">Streak</dt>
          <dd className="flex items-center gap-2 font-mono text-2xl tabular-nums text-amber-300 drop-shadow-[0_0_12px_rgba(245,158,11,0.55)]">
            <Flame aria-hidden className="h-5 w-5" />
            {player.streak}
            <span className="text-xs uppercase tracking-widest text-zinc-500">day streak</span>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-zinc-500">Total XP</dt>
          <dd className="mt-1 font-mono text-2xl tabular-nums text-emerald-300">{player.xp.toLocaleString()}</dd>
        </div>
        <div>
          <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-zinc-500">Rank</dt>
          <dd className="mt-1 font-mono text-2xl tabular-nums text-[#FAFAFA]">#{player.rank}</dd>
        </div>
      </dl>
    </header>
  );
}

function PlayerHeaderSkeleton() {
  return (
    <div role="status" aria-label="Loading player stats" className="grid items-end gap-10 lg:grid-cols-[1fr_minmax(18rem,26rem)_auto] lg:gap-16">
      <div className="space-y-4">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-12 w-64" />
      </div>
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-10 w-72" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Daily challenge                                                            */
/* -------------------------------------------------------------------------- */

interface DailyChallengeCardProps {
  challenge: DailyChallenge;
  onStart: (challengeId: string) => void;
}

function DailyChallengeCard({ challenge, onStart }: DailyChallengeCardProps) {
  return (
    <MinimalGlassCard tone="cyan" padding="lg" className="lg:p-14">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-400 opacity-10 blur-[100px]" />
      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <CyberBadge tone="cyan" live>
            Daily challenge
          </CyberBadge>
          <h2 className="mt-8 font-display text-3xl font-extrabold tracking-tighter text-[#FAFAFA] sm:text-4xl">
            {challenge.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">{challenge.prompt}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CyberBadge tone="emerald">+{challenge.rewardXp} XP</CyberBadge>
            <CyberBadge icon={<Clock aria-hidden className="h-3 w-3" />}>{challenge.etaMinutes} min</CyberBadge>
            <CyberBadge tone={difficultyTone[challenge.difficulty]}>{challenge.difficulty}</CyberBadge>
          </div>
        </div>
        <NeonPulseButton
          size="lg"
          icon={<ArrowRight className="h-5 w-5" />}
          onClick={() => onStart(challenge.id)}
          className="shrink-0"
        >
          Start challenge
        </NeonPulseButton>
      </div>
    </MinimalGlassCard>
  );
}

/* -------------------------------------------------------------------------- */
/* Module cards                                                               */
/* -------------------------------------------------------------------------- */

interface ModuleCardProps {
  module: CourseModule;
  featured: boolean;
  onContinue: (moduleId: string) => void;
}

function ModuleCard({ module, featured, onContinue }: ModuleCardProps) {
  return (
    <BentoItem colSpan={featured ? 2 : 1} rowSpan={featured ? 2 : 1} tone={module.tone} className="flex flex-col">
      <div className="flex items-start justify-between">
        <PrecisionRing value={module.progress} tone={module.tone} size={featured ? 96 : 72} label={`${module.title} progress`}>
          <span className="font-mono text-xs tabular-nums text-zinc-300">{Math.round(module.progress)}%</span>
        </PrecisionRing>
        <CyberBadge tone={difficultyTone[module.difficulty]}>{module.difficulty}</CyberBadge>
      </div>

      <div className="mt-auto pt-10">
        <h3
          className={cn(
            "font-display font-bold tracking-tight text-[#FAFAFA]",
            featured ? "text-3xl" : "text-xl",
          )}
        >
          {module.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{module.blurb}</p>
        <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-widest text-zinc-500">
          {module.lessonsDone}/{module.lessonsTotal} lessons · about {module.etaMinutes} min left
        </p>
        <div className="mt-6 opacity-0 transition-opacity duration-300 focus-within:opacity-100 group-hover/card:opacity-100 [@media(hover:none)]:opacity-100">
          <NeonPulseButton
            size="sm"
            variant="quest"
            icon={<ArrowRight className="h-4 w-4" />}
            aria-label={`Continue quest: ${module.title}`}
            onClick={() => onContinue(module.id)}
          >
            Continue quest
          </NeonPulseButton>
        </div>
      </div>
    </BentoItem>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export interface DashboardProps {
  /** Pass `undefined` while Convex is still loading to show skeletons. */
  player?: Player;
  modules?: CourseModule[];
  daily?: DailyChallenge;
  onContinueModule: (moduleId: string) => void;
  onStartDaily: (challengeId: string) => void;
  onBrowseTracks?: () => void;
}

export default function Dashboard({
  player,
  modules,
  daily,
  onContinueModule,
  onStartDaily,
  onBrowseTracks,
}: DashboardProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030305] font-sans text-zinc-300">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-violet-600 opacity-10 blur-[140px]" />

      <main className="relative mx-auto flex max-w-7xl flex-col gap-24 px-6 py-20 lg:gap-32 lg:px-10 lg:py-28">
        {player ? <PlayerHeader player={player} /> : <PlayerHeaderSkeleton />}

        {daily ? (
          <DailyChallengeCard challenge={daily} onStart={onStartDaily} />
        ) : (
          <CardSkeleton className="min-h-[18rem]" />
        )}

        <section aria-labelledby="modules-heading">
          <h2 id="modules-heading" className="font-display text-2xl font-bold tracking-tight text-[#FAFAFA]">
            Your quests
          </h2>

          <div className="mt-10">
            {!modules ? (
              <div className="grid gap-4 md:grid-cols-4 lg:gap-8">
                <CardSkeleton className="md:col-span-2 md:row-span-2 min-h-[20rem]" />
                <CardSkeleton />
                <CardSkeleton />
              </div>
            ) : modules.length === 0 ? (
              <MinimalGlassCard padding="lg" spotlight={false} className="text-center">
                <p className="text-base text-slate-400">No quests yet. Pick a track to start your first one.</p>
                {onBrowseTracks && (
                  <div className="mt-8 flex justify-center">
                    <NeonPulseButton variant="secondary" icon={<Trophy className="h-4 w-4" />} onClick={onBrowseTracks}>
                      Browse tracks
                    </NeonPulseButton>
                  </div>
                )}
              </MinimalGlassCard>
            ) : (
              <BentoGrid>
                {modules.map((module, index) => (
                  <ModuleCard key={module.id} module={module} featured={index === 0} onContinue={onContinueModule} />
                ))}
              </BentoGrid>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
