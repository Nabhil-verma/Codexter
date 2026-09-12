import { useRef, useState } from "react";
import { runUserCode, evaluateCheck, type RunResult } from "../lib/runner";
import type { Check } from "../data/curriculum";

type Props = {
  starter: string;
  check?: Check;
  onPass?: () => void;
};

export default function Playground({ starter, check, onPass }: Props) {
  const [code, setCode] = useState(starter);
  const [result, setResult] = useState<RunResult | null>(null);
  const [passed, setPassed] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);

  const run = () => {
    const r = runUserCode(code);
    setResult(r);
    if (check) {
      const ok = !r.error && evaluateCheck(check.expr, r.logs.join("\n"));
      setPassed(ok);
      if (ok) onPass?.();
    }
  };

  const reset = () => {
    setCode(starter);
    setResult(null);
    setPassed(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Cmd/Ctrl+Enter runs the code
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      run();
      return;
    }
    // Tab inserts two spaces instead of leaving the textarea
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = taRef.current;
      if (!ta) return;
      const { selectionStart: s, selectionEnd: end } = ta;
      const next = code.slice(0, s) + "  " + code.slice(end);
      setCode(next);
      requestAnimationFrame(() => ta.setSelectionRange(s + 2, s + 2));
    }
  };

  return (
    <div className="space-y-4">
      <div className="code-window shadow-lift">
        <div className="flex items-center justify-between border-b border-ink-800 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold-400" />
            <span className="ml-2 font-mono text-xs text-ink-600">editor.js</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={reset}
              className="rounded-full px-3 py-1 font-mono text-xs text-ink-600 transition hover:bg-ink-800 hover:text-paper-100"
            >
              reset
            </button>
            <button
              onClick={run}
              title="Cmd/Ctrl+Enter"
              className="rounded-full bg-gold-400 px-4 py-1 font-mono text-xs font-bold text-ink-950 transition hover:bg-gold-300"
            >
              ▶ Run
            </button>
          </div>
        </div>
        <textarea
          ref={taRef}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={onKeyDown}
          spellCheck={false}
          rows={Math.max(8, Math.min(20, code.split("\n").length + 1))}
          className="block w-full resize-y bg-ink-950 p-5 font-mono text-[13px] leading-relaxed text-paper-100 outline-none placeholder:text-ink-600"
          placeholder="Write some JavaScript…"
        />
      </div>

      <div className="code-window">
        <div className="border-b border-ink-800 px-4 py-2.5 font-mono text-xs text-ink-600">
          console
        </div>
        <div className="max-h-64 overflow-auto p-5 font-mono text-[13px] leading-relaxed">
          {!result && <p className="text-ink-600">// press Run to see output</p>}
          {result?.logs.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap text-paper-300">
              <span className="mr-2 select-none text-gold-500">›</span>
              {line}
            </div>
          ))}
          {result?.error && (
            <div className="mt-2 whitespace-pre-wrap text-red-400">✗ {result.error}</div>
          )}
          {result && !result.error && result.logs.length === 0 && (
            <p className="text-ink-600">(no output — did you call console.log?)</p>
          )}
        </div>
      </div>

      {check && (
        <div
          className={
            "rounded-2xl border px-5 py-4 text-sm " +
            (passed
              ? "border-gold-400/60 bg-gold-400/10 text-ink-800"
              : "border-paper-200 bg-paper-50 text-ink-600")
          }
        >
          {passed ? (
            <span>
              <span className="mr-2 text-gold-600">✓</span>
              <strong className="font-semibold text-ink-950">Exercise passed.</strong>{" "}
              Elegant work.
            </span>
          ) : (
            <span>
              <strong className="font-semibold text-ink-950">Goal</strong>{" "}
              <span className="mx-1 text-gold-500">·</span> {check.hint}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
