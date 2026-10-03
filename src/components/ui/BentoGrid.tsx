import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { MinimalGlassCard, type MinimalGlassCardProps } from "./MinimalGlassCard";
import { cn } from "../../lib/cn";

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const reducedItemVariants: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
};

const columnClass = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
} as const;

const colSpanClass = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
} as const;

const rowSpanClass = {
  1: "md:row-span-1",
  2: "md:row-span-2",
  3: "md:row-span-3",
} as const;

export interface BentoGridProps {
  children: ReactNode;
  columns?: keyof typeof columnClass;
  className?: string;
}

export function BentoGrid({ children, columns = 4, className }: BentoGridProps) {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("grid grid-cols-1 gap-4 md:auto-rows-[minmax(14rem,auto)] lg:gap-8", columnClass[columns], className)}
    >
      {children}
    </motion.div>
  );
}

export interface BentoItemProps extends Omit<MinimalGlassCardProps, "variants"> {
  colSpan?: keyof typeof colSpanClass;
  rowSpan?: keyof typeof rowSpanClass;
}

export function BentoItem({ colSpan = 1, rowSpan = 1, className, ...rest }: BentoItemProps) {
  const reduce = useReducedMotion();
  return (
    <MinimalGlassCard
      {...rest}
      variants={reduce ? reducedItemVariants : itemVariants}
      className={cn(colSpanClass[colSpan], rowSpanClass[rowSpan], className)}
    />
  );
}
