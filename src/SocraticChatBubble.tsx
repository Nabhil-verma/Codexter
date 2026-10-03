import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

export interface SocraticChatBubbleProps {
  role: "user" | "socratic";
  children: ReactNode;
  /** Short follow-up prompts shown as chips under a tutor message. */
  hints?: string[];
  onHint?: (hint: string) => void;
  className?: string;
}

export function SocraticChatBubble({ role, children, hints, onHint, className }: SocraticChatBubbleProps) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={cn("flex flex-col gap-2", isUser ? "items-end" : "items-start", className)}
    >
      {!isUser && (
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-cyan-300/70">Socratic AI</span>
      )}
      <div
        className={cn(
          "max-w-[88%] text-sm leading-relaxed",
          isUser
            ? "rounded-2xl rounded-br-md bg-white/[0.06] px-4 py-3 text-zinc-100"
            : "border-l border-cyan-400/30 py-1 pl-4 text-zinc-300",
        )}
      >
        {children}
      </div>
      {!isUser && hints && hints.length > 0 && (
        <div className="flex flex-wrap gap-2 pl-4">
          {hints.map((hint) => (
            <button
              key={hint}
              type="button"
              onClick={() => onHint?.(hint)}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.04] px-3 py-1.5 text-xs text-cyan-200 outline-none transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.09] hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] focus-visible:ring-2 focus-visible:ring-cyan-500 active:scale-[0.97]"
            >
              {hint}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export interface SocraticStatusProps {
  label?: string;
}

export function SocraticStatus({ label = "Socratic AI is analyzing" }: SocraticStatusProps) {
  return (
    <div role="status" className="flex items-center gap-3 pl-4 font-mono text-[0.7rem] uppercase tracking-widest text-zinc-500">
      <span aria-hidden className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1 w-1 animate-pulse rounded-full bg-cyan-400 motion-reduce:animate-none"
            style={{ animationDelay: `${i * 160}ms` }}
          />
        ))}
      </span>
      {label}
    </div>
  );
}
