import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { loadProgress, type Progress } from "../lib/progress";
import { totalLessonCount } from "../data/curriculum";

export default function Nav() {
  const [progress, setProgress] = useState<Progress>({ completed: {} });
  const location = useLocation();

  useEffect(() => {
    setProgress(loadProgress());
  }, [location]);

  const done = Object.keys(progress.completed).length;

  return (
    <header className="sticky top-0 z-40 border-b border-ink-700 bg-ink-950/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="group flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-mint-500 font-bold text-ink-950 transition group-hover:shadow-glow">
            &lt;/&gt;
          </span>
          <span>
            code-learn<span className="text-mint-400">.reimagined</span>
          </span>
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <Link
            to="/learn"
            className={
              "rounded-lg px-3 py-1.5 font-medium transition " +
              (location.pathname.startsWith("/learn")
                ? "bg-ink-800 text-mint-300"
                : "text-slate-300 hover:bg-ink-800 hover:text-white")
            }
          >
            Lessons
          </Link>
          <span className="hidden items-center gap-1.5 rounded-lg border border-ink-700 px-3 py-1.5 font-mono text-xs text-slate-400 sm:flex">
            <span className="text-mint-400">{done}</span>/{totalLessonCount} done
          </span>
        </nav>
      </div>
    </header>
  );
}
