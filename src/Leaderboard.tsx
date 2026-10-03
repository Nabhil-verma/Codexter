import { motion, useReducedMotion } from "framer-motion";
import { Flame } from "lucide-react";
import { CyberBadge } from "../components/ui/CyberBadge";
import { MinimalGlassCard, type GlowTone } from "../components/ui/MinimalGlassCard";
import { Skeleton } from "../components/ui/Skeleton";
import { cn } from "../lib/cn";
import type { Player } from "../types";

type Place = 1 | 2 | 3;

interface PlaceStyle {
  name: string;
  ring: string;
  glow: string;
  text: string;
  height: string;
  avatar: string;
  tone: GlowTone;
}

const PLACE: Record<Place, PlaceStyle> = {
  1: {
    name: "Gold",
    ring: "from-amber-200 via-amber-400 to-amber-600",
    glow: "bg-amber-400",
    text: "text-amber-300",
    height: "min-h-[24rem]",
    avatar: "h-24 w-24 text-3xl lg:h-28 lg:w-28",
    tone: "amber",
  },
  2: {
    name: "Silver",
    ring: "from-zinc-100 via-zinc-300 to-zinc-500",
    glow: "bg-zinc-300",
    text: "text-zinc-200",
    height: "min-h-[20rem]",
    avatar: "h-20 w-20 text-2xl lg:h-24 lg:w-24",
    tone: "none",
  },
  3: {
    name: "Bronze",
    ring: "from-orange-200 via-orange-400 to-orange-700",
    glow: "bg-orange-400",
    text: "text-orange-300",
    height: "min-h-[17rem]",
    avatar: "h-20 w-20 text-2xl lg:h-24 lg:w-24",
    tone: "none",
  },
};

/* -------------------------------------------------------------------------- */
/* Avatar                                                                     */
/* -------------------------------------------------------------------------- */

interface AvatarProps {
  player: Player;
  className?: string;
  ringClassName?: string;
  glowClassName?: string;
  halo?: boolean;
}

function Avatar({ player, className, ringClassName, glowClassName, halo = false }: AvatarProps) {
  const reduce = useReducedMotion();
  const initial = player.name.slice(0, 1).toUpperCase();

  return (
    <div className="relative inline-grid place-items-center">
      {halo && (
        <motion.span
          aria-hidden
          className={cn("absolute inset-0 rounded-full blur-2xl", glowClassName)}
          initial={{ opacity: 0.35 }}
          animate={reduce ? { opacity: 0.35 } : { opacity: [0.25, 0.55, 0.25] }}
          transition={reduce ? { duration: 0 } : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <span className={cn("relative rounded-full bg-gradient-to-br p-[2px]", ringClassName ?? "from-white/30 to-white/5")}>
        {player.avatarUrl ? (
          <img
            src={player.avatarUrl}
            alt=""
            className={cn("rounded-full bg-[#111116] object-cover", className)}
          />
        ) : (
          <span
            aria-hidden
            className={cn(
              "grid place-items-center rounded-full bg-[#111116] font-display font-bold text-[#FAFAFA]",
              className,
            )}
          >
            {initial}
          </span>
        )}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Podium                                                                     */
/* -------------------------------------------------------------------------- */

interface PedestalProps {
  player: Player;
  place: Place;
}

function Pedestal({ player, place }: PedestalProps) {
  const style = PLACE[place];

  return (
    <li className="list-none">
      <MinimalGlassCard
        tone={style.tone}
        padding="md"
        className={cn("flex flex-col items-center justify-end text-center lg:p-8", style.height)}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30, delay: place === 1 ? 0.15 : place === 2 ? 0.05 : 0.1 }}
      >
        <span className={cn("mb-6 font-mono text-xs uppercase tracking-widest", style.text)}>
          <span className="sr-only">{style.name}, place </span>#{place}
        </span>
        <Avatar
          player={player}
          className={style.avatar}
          ringClassName={style.ring}
          glowClassName={style.glow}
          halo
        />
        <p className="mt-6 max-w-full truncate font-display text-lg font-bold tracking-tight text-[#FAFAFA] lg:text-xl">
          {player.name}
        </p>
        {player.title && (
          <CyberBadge className="mt-3" tone={place === 1 ? "amber" : "neutral"}>
            {player.title}
          </CyberBadge>
        )}
        <p className={cn("mt-6 font-mono text-2xl tabular-nums lg:text-3xl", style.text)}>
          {player.xp.toLocaleString()}
          <span className="ml-1.5 text-xs uppercase tracking-widest text-zinc-500">XP</span>
        </p>
      </MinimalGlassCard>
    </li>
  );
}

interface PodiumProps {
  top: Player[];
}

function Podium({ top }: PodiumProps) {
  // Visual order is silver, gold, bronze so first place sits in the middle.
  const slots: Array<{ player: Player | undefined; place: Place }> = [
    { player: top[1], place: 2 },
    { player: top[0], place: 1 },
    { player: top[2], place: 3 },
  ];

  return (
    <ol aria-label="Top three players" className="mx-auto grid max-w-4xl grid-cols-3 items-end gap-3 sm:gap-4 lg:gap-8">
      {slots.map(({ player, place }) =>
        player ? <Pedestal key={player.id} player={player} place={place} /> : <li key={place} aria-hidden />,
      )}
    </ol>
  );
}

function PodiumSkeleton() {
  return (
    <div role="status" aria-label="Loading top players" className="mx-auto grid max-w-4xl grid-cols-3 items-end gap-3 sm:gap-4 lg:gap-8">
      <Skeleton className="h-80 rounded-3xl" />
      <Skeleton className="h-96 rounded-3xl" />
      <Skeleton className="h-64 rounded-3xl" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Rankings table                                                             */
/* -------------------------------------------------------------------------- */

interface RankingsTableProps {
  players: Player[];
  startRank: number;
  currentPlayerId?: string;
}

function RankingsTable({ players, startRank, currentPlayerId }: RankingsTableProps) {
  return (
    <table className="w-full border-separate border-spacing-y-1.5 text-left">
      <caption className="sr-only">Leaderboard rankings from place {startRank} down</caption>
      <thead>
        <tr className="font-mono text-[0.7rem] uppercase tracking-widest text-zinc-600">
          <th scope="col" className="w-16 px-4 pb-3 font-normal">
            Rank
          </th>
          <th scope="col" className="px-4 pb-3 font-normal">
            Player
          </th>
          <th scope="col" className="hidden px-4 pb-3 text-right font-normal sm:table-cell">
            Quests
          </th>
          <th scope="col" className="px-4 pb-3 text-right font-normal">
            Streak
          </th>
          <th scope="col" className="px-4 pb-3 text-right font-normal">
            XP
          </th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => {
          const isYou = player.id === currentPlayerId;
          const cell = cn(
            "py-4 transition-colors duration-300 group-hover:bg-white/[0.04]",
            "first:rounded-l-2xl last:rounded-r-2xl",
            isYou && "bg-cyan-400/[0.05] group-hover:bg-cyan-400/[0.08]",
          );
          return (
            <motion.tr
              key={player.id}
              layout="position"
              aria-current={isYou ? "true" : undefined}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="group"
            >
              <td className={cn(cell, "px-4 font-mono text-sm tabular-nums text-zinc-500")}>{startRank + index}</td>
              <td className={cn(cell, "px-4")}>
                <div className="flex items-center gap-4">
                  <Avatar player={player} className="h-10 w-10 text-sm" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-[#FAFAFA]">
                      {player.name}
                      {isYou && <span className="ml-2 font-mono text-[0.65rem] uppercase tracking-widest text-cyan-300">You</span>}
                    </p>
                    <p className="truncate font-mono text-xs text-zinc-600">@{player.handle}</p>
                  </div>
                </div>
              </td>
              <td className={cn(cell, "hidden px-4 text-right font-mono text-sm tabular-nums text-zinc-400 sm:table-cell")}>
                {player.questsCompleted}
              </td>
              <td className={cn(cell, "px-4 text-right")}>
                <span className="inline-flex items-center gap-1.5 font-mono text-sm tabular-nums text-amber-300/90">
                  <Flame aria-hidden className="h-3.5 w-3.5" />
                  {player.streak}
                </span>
              </td>
              <td className={cn(cell, "px-4 text-right font-mono text-sm tabular-nums text-[#FAFAFA]")}>
                {player.xp.toLocaleString()}
              </td>
            </motion.tr>
          );
        })}
      </tbody>
    </table>
  );
}

function RankingsSkeleton() {
  return (
    <div role="status" aria-label="Loading rankings" className="flex flex-col gap-2">
      {Array.from({ length: 6 }, (_, i) => (
        <Skeleton key={i} className="h-16 rounded-2xl" />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export interface LeaderboardProps {
  /** Sorted by rank, best first. Pass `undefined` while loading. */
  entries?: Player[];
  currentPlayerId?: string;
}

export default function Leaderboard({ entries, currentPlayerId }: LeaderboardProps) {
  const top = entries?.slice(0, 3) ?? [];
  const rest = entries?.slice(3) ?? [];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030305] font-sans text-zinc-300">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-24 h-[28rem] w-[40rem] -translate-x-1/2 rounded-full bg-amber-400 opacity-10 blur-[140px]" />

      <main className="relative mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
        <h1 className="text-center font-display text-4xl font-extrabold tracking-tighter text-[#FAFAFA] sm:text-6xl">
          Leaderboard
        </h1>

        <div className="py-24 lg:py-32">{entries ? <Podium top={top} /> : <PodiumSkeleton />}</div>

        {!entries ? (
          <RankingsSkeleton />
        ) : rest.length > 0 ? (
          <RankingsTable players={rest} startRank={4} currentPlayerId={currentPlayerId} />
        ) : (
          <p className="text-center text-sm text-slate-400">Everyone on the board is on the podium. Finish a quest to join them.</p>
        )}
      </main>
    </div>
  );
}
