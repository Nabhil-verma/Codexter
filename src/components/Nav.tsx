import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { loadProgress, type Progress } from "../lib/progress";
import { totalLessonCount } from "../data";

export default function Nav() {
  const [progress, setProgress] = useState<Progress>({ completed: {} });
  const location = useLocation();

  useEffect(() => {
    setProgress(loadProgress());
  }, [location]);

  const done = Object.keys(progress.completed).length;

  return (
    <header className="sticky top-0 z-40 border-b border-paper-200 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-950 font-mono text-xs font-bold text-gold-400 transition group-hover:shadow-glow">
            &lt;/&gt;
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
            code-learn<span className="text-gold-500">.reimagined</span>
          </span>
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <Link
            to="/learn"
            className={
              "rounded-full px-4 py-1.5 font-medium transition " +
              (location.pathname.startsWith("/learn")
                ? "bg-ink-950 text-paper-50"
                : "text-ink-700 hover:bg-paper-100")
            }
          >
            Lessons
          </Link>
          <Link
            to="/playground"
            className={
              "rounded-full px-4 py-1.5 font-medium transition " +
              (location.pathname.startsWith("/playground")
                ? "bg-ink-950 text-paper-50"
                : "text-ink-700 hover:bg-paper-100")
            }
          >
            Playground
          </Link>
          <span className="hidden items-center gap-1.5 rounded-full border border-paper-200 px-3 py-1.5 font-mono text-xs text-ink-600 sm:flex">
            <span className="text-gold-600">{done}</span>/{totalLessonCount} done
          </span>
        </nav>
      </div>
    </header>
  );
}
