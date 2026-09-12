import { useState } from "react";
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

  return (
    <div className="space-y-3">
      <div className="code-window">
        <div className="flex items-center justify-between border-b border-ink-700 bg-ink-850 px-3 py-1.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-slate-500">editor.js</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={reset}
              className="rounded-md px-2.5 py-1 font-mono text-xs text-slate-400 transition hover:bg-ink-700 hover:text-white"
            >
              reset
            </button>
            <button
              onClick={run}
              className="rounded-md bg-mint-500 px-3 py-1 font-mono text-xs font-bold text-ink-950 transition hover:bg-mint-400"
            >
              ▶ Run
            </button>
          </div>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          rows={Math.max(8, Math.min(20, code.split("\n").length + 1))}
          className="block w-full resize-y bg-ink-900 p-4 font-mono text-[13px] leading-relaxed text-slate-200 outline-none placeholder:text-slate-600"
          placeholder="Write some JavaScript…"
        />
      </div>

      <div className="code-window">
        <div className="border-b border-ink-700 bg-ink-850 px-3 py-1.5 font-mono text-xs text-slate-500">
          console
        </div>
        <div className="max-h-64 overflow-auto p-4 font-mono text-[13px] leading-relaxed">
          {!result && <p className="text-slate-600">// press Run to see output</p>}
          {result?.logs.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap text-slate-300">
              <span className="mr-2 select-none text-slate-600">›</span>
              {line}
            </div>
          ))}
          {result?.error && (
            <div className="mt-2 whitespace-pre-wrap text-red-400">✗ {result.error}</div>
          )}
          {result && !result.error && result.logs.length === 0 && (
            <p className="text-slate-600">(no output — did you call console.log?)</p>
          )}
        </div>
      </div>

      {check && (
        <div
          className={
            "rounded-xl border px-4 py-3 text-sm " +
            (passed
              ? "border-mint-500/50 bg-mint-500/10 text-mint-300"
              : "border-ink-700 bg-ink-850 text-slate-400")
          }
        >
          {passed ? (
            <span>
              ✓ Exercise passed! <strong className="text-white">Nice work.</strong>
            </span>
          ) : (
            <span>
              <strong className="text-slate-200">Goal:</strong> {check.hint}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
