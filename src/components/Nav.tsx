import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAccount } from "../AccountProvider";
import AiSettingsModal from "./AiSettingsModal";
import { lessonIdOf, useProgressState } from "../lib/progress";
import { totalLessonCount } from "../data";

const syncLabel: Record<string, string> = {
  idle: "local only",
  syncing: "syncing…",
  synced: "synced",
  error: "sync error",
};

const syncDot: Record<string, string> = {
  idle: "bg-ink-300",
  syncing: "bg-gold-400 animate-pulse",
  synced: "bg-gold-500",
  error: "bg-red-500",
};

export default function Nav() {
  const progress = useProgressState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { user, authReady, sync, signOutUser, resetEverything } = useAccount();

  // Close the account menu on outside click.
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [menuOpen]);

  // Distinct lessons ever completed (v2 keys are date-suffixed — dedupe).
  const done = new Set(
    Object.keys(progress.completed)
      .filter((k) => (progress.completed[k] ?? 0) >= 1)
      .map(lessonIdOf)
  ).size;

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
          <Link
            to="/portfolio"
            className={
              "hidden rounded-full px-4 py-1.5 font-medium transition sm:inline-block " +
              (location.pathname.startsWith("/portfolio")
                ? "bg-ink-950 text-paper-50"
                : "text-ink-700 hover:bg-paper-100")
            }
          >
            Profile
          </Link>
          <span className="hidden items-center gap-1.5 rounded-full border border-paper-200 px-3 py-1.5 font-mono text-xs text-ink-600 sm:flex">
            <span className="text-gold-600">{done}</span>/{totalLessonCount} done
          </span>

          {/* AI settings gear */}
          <button
            type="button"
            onClick={() => setAiOpen(true)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-paper-200 text-ink-600 transition hover:border-gold-400 hover:text-gold-600"
            aria-label="AI tutor settings"
          >
            {"\u2699\uFE0F"}
          </button>

          {/* Account pill — always show sign-in; /auth explains gracefully
              when cloud keys aren't configured on this deployment. */}
          {authReady &&
            (user ? (
              <div ref={menuRef} className="relative">
                <button
                  type="button"
                  onClick={() => setMenuOpen((v) => !v)}
                  className="flex items-center gap-2 rounded-full border border-paper-200 py-1.5 pl-3 pr-2 transition hover:border-gold-400"
                  aria-label="Account menu"
                >
                  <span className="hidden max-w-[140px] truncate text-xs font-medium text-ink-800 md:block">
                    {user.displayName || user.email}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-950 font-display text-xs font-semibold text-gold-400">
                    {(user.displayName || user.email || "?").charAt(0).toUpperCase()}
                  </span>
                </button>
                {menuOpen && (
                  <div className="absolute right-0 top-11 w-64 rounded-2xl border border-paper-200 bg-paper-50 p-2 shadow-lift">
                    <div className="px-3 pb-2 pt-2">
                      <p className="truncate text-sm font-medium text-ink-950">
                        {user.displayName || "Learner"}
                      </p>
                      <p className="truncate font-mono text-xs text-ink-600">{user.email}</p>
                      <p className="mt-2 flex items-center gap-1.5 font-mono text-[11px] text-ink-600">
                        <span className={"h-1.5 w-1.5 rounded-full " + syncDot[sync]} />
                        {syncLabel[sync]}
                      </p>
                    </div>
                    <div className="my-1 h-px bg-paper-200" />
                    <button
                      type="button"
                      className="w-full rounded-xl px-3 py-2 text-left text-sm text-ink-800 transition hover:bg-paper-100"
                      onClick={async () => {
                        setMenuOpen(false);
                        if (confirm("Reset progress everywhere? This clears your saved scores on this device and in your account.")) {
                          await resetEverything();
                          window.location.reload();
                        }
                      }}
                    >
                      Reset progress
                    </button>
                    <button
                      type="button"
                      className="w-full rounded-xl px-3 py-2 text-left text-sm text-ink-800 transition hover:bg-paper-100"
                      onClick={async () => {
                        setMenuOpen(false);
                        await signOutUser();
                      }}
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={`/auth?returnTo=${encodeURIComponent(location.pathname + location.search)}`}
                className="rounded-full bg-ink-950 px-4 py-1.5 font-medium text-paper-50 transition hover:shadow-glow"
              >
                Sign in
              </Link>
            ))}
        </nav>
      </div>
      {aiOpen && <AiSettingsModal onClose={() => setAiOpen(false)} />}
    </header>
  );
}
