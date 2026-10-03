import { cn } from "../../lib/cn";

export interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return <div aria-hidden className={cn("animate-pulse rounded-xl bg-white/5 motion-reduce:animate-none", className)} />;
}

export function CardSkeleton({ className }: SkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("flex flex-col gap-6 rounded-3xl border border-white/5 bg-white/[0.02] p-8", className)}
    >
      <div className="flex items-start justify-between">
        <Skeleton className="h-16 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}
