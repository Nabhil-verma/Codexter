import { useEffect, useRef, useState, type FormEvent } from "react";
import { useAccount } from "./AccountProvider";

type Mode = "signin" | "signup" | "reset";

const inputCls =
  "w-full rounded-xl border border-paper-300 bg-paper-50 px-4 py-2.5 text-sm text-ink-950 outline-none transition placeholder:text-ink-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/25";

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const { signIn, signUp, resetPassword } = useAccount();
  const [mode, setMode] = useState<Mode>("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const firstInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInput.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (mode === "signin") await signIn(email.trim(), password);
      else if (mode === "signup") await signUp(name.trim(), email.trim(), password);
      else await resetPassword(email.trim());
      if (mode !== "reset") onClose();
      else setNotice("Reset email sent — check your inbox (and the spam folder).");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  const title =
    mode === "signin" ? "Welcome back" : mode === "signup" ? "Create your account" : "Reset password";
  const sub =
    mode === "signin"
      ? "Sign in to sync your progress across devices."
      : mode === "signup"
        ? "Free forever. Your quiz scores and completed lessons follow you anywhere."
        : "Enter your email and we'll send you a reset link.";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/40 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md rounded-2xl border border-paper-200 bg-paper-50 p-8 shadow-lift">
        <p className="eyebrow">code-learn.reimagined</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-950">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{sub}</p>

        {notice ? (
          <div className="mt-6 rounded-xl border border-gold-400/50 bg-gold-400/10 px-4 py-3 text-sm leading-relaxed text-ink-800">
            {notice}
          </div>
        ) : (
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
            {mode !== "reset" && (
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
            )}
            {mode === "reset" && (
              <input
                ref={firstInput}
                className={inputCls}
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            )}
            {mode !== "reset" && (
              <input
                className={inputCls}
                type="password"
                required
                minLength={6}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
              />
            )}
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button type="submit" disabled={busy} className="btn-gold w-full !justify-center disabled:opacity-60">
              {busy ? "One moment…" : mode === "signin" ? "Sign in" : mode === "signup" ? "Create account" : "Send reset link"}
            </button>
          </form>
        )}

        <div className="mt-5 space-y-1.5 text-center text-sm">
          {mode !== "signup" && (
            <p className="text-ink-600">
              New here?{" "}
              <button
                type="button"
                className="font-semibold text-gold-600 hover:underline"
                onClick={() => {
                  setMode("signup");
                  setError(null);
                  setNotice(null);
                }}
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
                onClick={() => {
                  setMode("signin");
                  setError(null);
                  setNotice(null);
                }}
              >
                ← Back to sign in
              </button>
            </p>
          )}
          {mode === "signin" && (
            <p className="text-ink-600">
              <button
                type="button"
                className="hover:underline"
                onClick={() => {
                  setMode("reset");
                  setError(null);
                  setNotice(null);
                }}
              >
                Forgot your password?
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
