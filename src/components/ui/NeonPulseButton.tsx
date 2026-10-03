import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "quest";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-medium tracking-tight outline-none " +
  "transition-[box-shadow,background-color,border-color,color] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] " +
  "focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030305] " +
  "disabled:pointer-events-none disabled:opacity-40";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#00E5FF] text-[#031014] shadow-[0_0_30px_rgba(0,229,255,0.25)] hover:shadow-[0_0_44px_rgba(0,229,255,0.4)]",
  secondary:
    "border border-white/10 bg-white/[0.03] text-zinc-100 backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.06]",
  ghost: "text-zinc-400 hover:bg-white/[0.04] hover:text-white",
  quest:
    "bg-emerald-400 text-[#021410] shadow-[0_0_24px_rgba(16,185,129,0.3)] hover:shadow-[0_0_36px_rgba(16,185,129,0.45)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export interface NeonPulseButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Rendered after the label; nudges right on hover. */
  icon?: ReactNode;
  /** Shows a soft pulse instead of a spinner and disables the button. */
  loading?: boolean;
}

export function NeonPulseButton({
  children,
  variant = "primary",
  size = "md",
  icon,
  loading = false,
  disabled,
  className,
  ...rest
}: NeonPulseButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      {...rest}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {loading && <span aria-hidden className="h-2 w-2 animate-pulse rounded-full bg-current" />}
      <span>{children}</span>
      {icon && (
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </motion.button>
  );
}
