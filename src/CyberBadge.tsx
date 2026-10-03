import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { Tone } from "../../types";

export type BadgeTone = Tone | "neutral";

const tones: Record<BadgeTone, string> = {
  neutral: "border-white/10 bg-white/[0.03] text-zinc-400",
  cyan: "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300",
  violet: "border-violet-400/20 bg-violet-400/[0.06] text-violet-300",
  emerald: "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300",
  amber: "border-amber-400/20 bg-amber-400/[0.06] text-amber-300",
  rose: "border-rose-400/20 bg-rose-400/[0.06] text-rose-300",
};

const dots: Record<BadgeTone, string> = {
  neutral: "bg-zinc-400",
  cyan: "bg-cyan-400",
  violet: "bg-violet-400",
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  rose: "bg-rose-400",
};

export interface CyberBadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  /** Adds a pulsing status dot. */
  live?: boolean;
  icon?: ReactNode;
  className?: string;
}

export function CyberBadge({ children, tone = "neutral", live = false, icon, className }: CyberBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-widest backdrop-blur-xl",
        tones[tone],
        className,
      )}
    >
      {live && (
        <span aria-hidden className="relative flex h-1.5 w-1.5">
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 motion-reduce:animate-none",
              dots[tone],
            )}
          />
          <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", dots[tone])} />
        </span>
      )}
      {icon}
      {children}
    </span>
  );
}
