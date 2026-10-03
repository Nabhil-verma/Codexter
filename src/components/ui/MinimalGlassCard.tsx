import type { MouseEvent, ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/cn";
import type { Tone } from "../../types";

export type GlowTone = Tone | "none";

const hoverTone: Record<GlowTone, string> = {
  none: "hover:border-white/20",
  cyan: "hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.12)]",
  violet: "hover:border-violet-400/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.14)]",
  emerald: "hover:border-emerald-400/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.14)]",
  amber: "hover:border-amber-400/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.14)]",
  rose: "hover:border-rose-400/30 hover:shadow-[0_0_30px_rgba(251,113,133,0.14)]",
};

const paddings = {
  none: "",
  md: "p-6",
  lg: "p-8 lg:p-10",
} as const;

export interface MinimalGlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: ReactNode;
  /** Colour of the border/glow that appears on hover. */
  tone?: GlowTone;
  /** Soft light that follows the cursor inside the card. */
  spotlight?: boolean;
  padding?: keyof typeof paddings;
}

export function MinimalGlassCard({
  children,
  tone = "none",
  spotlight = true,
  padding = "lg",
  className,
  onMouseMove,
  ...rest
}: MinimalGlassCardProps) {
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
    onMouseMove?.(event);
  };

  return (
    <motion.div
      {...rest}
      onMouseMove={handleMove}
      className={cn(
        "group/card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_48px_-24px_rgba(0,0,0,0.8)]",
        "transition-[border-color,box-shadow,background-color] duration-500 ease-out hover:bg-white/[0.035]",
        hoverTone[tone],
        paddings[padding],
        className,
      )}
    >
      {spotlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.06),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        />
      )}
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
