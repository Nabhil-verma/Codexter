import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";
import type { Tone } from "../../types";

const fill: Record<Tone, string> = {
  cyan: "bg-gradient-to-r from-cyan-400 to-cyan-200 shadow-[0_0_16px_rgba(0,229,255,0.45)]",
  violet: "bg-gradient-to-r from-violet-500 to-fuchsia-400 shadow-[0_0_16px_rgba(139,92,246,0.45)]",
  emerald: "bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.45)]",
  amber: "bg-gradient-to-r from-amber-500 to-amber-300 shadow-[0_0_16px_rgba(245,158,11,0.45)]",
  rose: "bg-gradient-to-r from-rose-500 to-rose-300 shadow-[0_0_16px_rgba(251,113,133,0.45)]",
};

const stroke: Record<Tone, string> = {
  cyan: "#00E5FF",
  violet: "#A855F7",
  emerald: "#10B981",
  amber: "#F59E0B",
  rose: "#FB7185",
};

const clampPct = (value: number, max: number): number =>
  max <= 0 ? 0 : Math.min(100, Math.max(0, (value / max) * 100));

export interface PrecisionProgressBarProps {
  value: number;
  max?: number;
  tone?: Tone;
  label?: string;
  /** Right-aligned readout above the bar, e.g. "680 / 1000 XP". */
  valueLabel?: string;
  thickness?: "xs" | "sm";
  className?: string;
}

export function PrecisionProgressBar({
  value,
  max = 100,
  tone = "cyan",
  label,
  valueLabel,
  thickness = "sm",
  className,
}: PrecisionProgressBarProps) {
  const reduce = useReducedMotion();
  const pct = clampPct(value, max);

  return (
    <div className={cn("w-full", className)}>
      {(label || valueLabel) && (
        <div className="mb-2 flex items-baseline justify-between font-mono text-[0.7rem] uppercase tracking-widest text-zinc-500">
          <span>{label}</span>
          <span className="tabular-nums text-zinc-300">{valueLabel}</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-label={label ?? "Progress"}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={Math.round(value)}
        className={cn("overflow-hidden rounded-full bg-white/[0.06]", thickness === "xs" ? "h-0.5" : "h-1.5")}
      >
        <motion.div
          className={cn("h-full rounded-full", fill[tone])}
          initial={reduce ? false : { width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 26 }}
        />
      </div>
    </div>
  );
}

export interface PrecisionRingProps {
  /** 0 to 100 */
  value: number;
  size?: number;
  strokeWidth?: number;
  tone?: Tone;
  label?: string;
  children?: ReactNode;
}

export function PrecisionRing({
  value,
  size = 72,
  strokeWidth = 2,
  tone = "cyan",
  label,
  children,
}: PrecisionRingProps) {
  const reduce = useReducedMotion();
  const pct = clampPct(value, 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const target = circumference * (1 - pct / 100);

  return (
    <div
      role="progressbar"
      aria-label={label ?? "Progress"}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
      className="relative grid place-items-center"
      style={{ width: size, height: size }}
    >
      <svg
        aria-hidden
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        style={{ filter: `drop-shadow(0 0 4px ${stroke[tone]}66)` }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={stroke[tone]}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: reduce ? target : circumference }}
          animate={{ strokeDashoffset: target }}
          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 24 }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">{children}</div>
    </div>
  );
}
