import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Nav from "../components/Nav";
import { useAccount } from "../AccountProvider";

type Mode = "signin" | "signup";

const inputCls =
  "w-full rounded-xl border border-paper-300 bg-paper-50 px-4 py-2.5 text-sm text-ink-950 outline-none transition placeholder:text-ink-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/25";

const PERKS = [
  {
    icon: "☁",
    title: "Sync across devices",
    text: "Quiz scores, completed lessons, and badges follow your account — phone, tablet, laptop.",
  },
  {
    icon: "🎓",
    title: "Certificates with your name",
    text: "Finish a track and your printable certificate is pre-filled with your display name.",
  },
  {
    icon: "🔥",
    title: "Streaks that survive",
    text: "Your daily streak and XP are safe even if you clear this browser or switch devices.",
  },
];

function sanitizeReturnTo(raw: string | null): string {
  if (raw && raw.startsWith("/") && !raw.startsWith("//")) return raw;
  return "/learn";
}

export default function AuthPage() {
  const { user, authReady, cloudReady, signIn, signUp } = useAccount();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const returnTo = sanitizeReturnTo(searchParams.get("returnTo"));

  const [mode, setMode] = useState<Mode>("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const firstInput = useRef<HTMLInputElement>(null);

  // Already signed in? Straight to where you were headed.
  useEffect(() => {
    if (user) navigate(returnTo, { replace: true });
  }, [user, navigate, returnTo]);

  // Focus the first field whenever the mode changes.
  useEffect(() => {
    firstInput.current?.focus();
  }, [mode]);

  function switchMode(next: Mode) {
    setMode(next);
    setError(null);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (mode === "signin") await signIn(email.trim(), password);
      else await signUp(name.trim(), email.trim(), password);
      navigate(returnTo, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  const title = mode === "signin" ? "Welcome back" : "Create your account";
  const sub =
    mode === "signin"
      ? "Sign in to sync your progress across devices."
      : "Free forever. Your quiz scores and completed lessons follow you anywhere.";

  return (
    <div className="min-h-screen">
      <Nav />

      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Perks panel */}
          <section className="order-2 lg:order-1">
            <p className="eyebrow">why sign in?</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-950">
              Progress worth keeping
            </h1>
            <p className="mt-3 max-w-md leading-relaxed text-ink-600">
              You can learn everything without an account. Signing in just means
              your progress can't be lost.
            </p>
            <ul className="mt-8 space-y-5">
              {PERKS.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/50 bg-gold-400/10 text-gold-600">
                    {p.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-ink-950">{p.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-600">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-10 font-mono text-xs text-ink-600">
              no spam · no ads · delete your account data anytime
            </p>
          </section>

          {/* Form card */}
          <section className="order-1 lg:order-2">
            {!cloudReady ? (
              <div className="card p-8 sm:p-10">
                <p className="eyebrow">cloud sync not configured</p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-950">
                  Sign-in is switched off right now
                </h2>
                <p className="mt-3 leading-relaxed text-ink-600">
                  This deployment isn't connected to its sync backend, so cloud
                  accounts are disabled.{" "}
                  <strong className="text-ink-950">Nothing is lost</strong> — your
                  progress still saves automatically in this browser, and every
                  lesson, playground, and certificate works exactly the same.
                </p>
                <Link to="/learn" className="btn-primary mt-8">
                  Keep learning without an account →
                </Link>
              </div>
            ) : !authReady ? (
              <div className="card p-10 text-center">
                <p className="font-mono text-sm text-ink-600">Checking your session…</p>
              </div>
            ) : (
              <div className="card p-8 sm:p-10">
                <p className="eyebrow">code-learn.reimagined</p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-950">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{sub}</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                  {mode === "signup" && (
                    <input
                      ref={firstInput}
                      className={inputCls}
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                    />
                  )}
                  <input
                    ref={mode === "signin" ? firstInput : undefined}
                    className={inputCls}
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                  <input
                    className={inputCls}
                    type="password"
                    required
                    minLength={8}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete={mode === "signup" ? "new-password" : "current-password"}
                  />
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <button
                    type="submit"
                    disabled={busy}
                    className="btn-gold w-full !justify-center disabled:opacity-60"
                  >
                    {busy ? "One moment…" : mode === "signin" ? "Sign in" : "Create account"}
                  </button>
                </form>

                <div className="mt-5 space-y-1.5 text-center text-sm">
                  {mode !== "signup" && (
                    <p className="text-ink-600">
                      New here?{" "}
                      <button
                        type="button"
                        className="font-semibold text-gold-600 hover:underline"
                        onClick={() => switchMode("signup")}
                      >
                        Create a free account
                      </button>
                    </p>
                  )}
                  {mode !== "signin" && (
                    <p className="text-ink-600">
                      <button
                        type="button"
                        className="font-semibold text-gold-600 hover:underline"
                        onClick={() => switchMode("signin")}
                      >
                        ← Back to sign in
                      </button>
                    </p>
                  )}
                </div>

                <div className="mt-6 border-t border-paper-200 pt-4 text-center">
                  <Link
                    to="/learn"
                    className="font-mono text-xs text-ink-600 transition hover:text-gold-600"
                  >
                    continue without an account →
                  </Link>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
