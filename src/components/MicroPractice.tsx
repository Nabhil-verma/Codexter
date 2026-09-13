import { useState } from "react";

type PracticeType = "assembly" | "matching" | "spot";

type PracticeQ = {
  type: PracticeType;
  prompt: string;
  /** For assembly: array of line-strings the user must sort */
  lines?: string[];
  /** For matching: pairs of [left, right] */
  pairs?: [string, string][];
  /** For spot-the-bug: the broken code line(s) + the fix */
  broken?: string[];
  fixed?: string[];
  explanation?: string;
};

const QUESTIONS: PracticeQ[] = [
  {
    type: "assembly",
    prompt: "Arrange these lines to print the numbers 1 through 5:",
    lines: ["for (let i = 1; i <= 5; i++) {", "}", "  console.log(i);"],
    explanation:
      "The for loop header sets up the counter, the body logs each value, and the closing brace ends the block.",
  },
  {
    type: "matching",
    prompt: "Match each keyword to its purpose:",
    pairs: [
      ["const", "Declares a value that can't be reassigned"],
      ["let", "Declares a value that can change"],
      ["var", "Old-style declaration (function-scoped)"],
    ],
  },
  {
    type: "spot",
    prompt: "Find the bug in this code (it should print 42):",
    broken: ["const a = 6;", "const b = 7;", 'console.log("a + b");'],
    fixed: ["const a = 6;", "const b = 7;", "console.log(a + b);"],
    explanation:
      'The quotes around a + b make it a string literal. Remove the quotes to evaluate the expression.',
  },
  {
    type: "assembly",
    prompt: "Arrange these lines to create a function that doubles a number:",
    lines: ["function double(n) {", "}", "  return n * 2;", "double(5)"],
    explanation:
      "Function declaration \u2192 body with return \u2192 closing brace \u2192 call it.",
  },
  {
    type: "spot",
    prompt: "What's wrong? (should find 'hello' in the array)",
    broken: ["const arr = [\"hi\", \"hello\", \"hey\"];", "const found = arr.includes(\"hello\");"],
    fixed: ["const arr = [\"hi\", \"hello\", \"hey\"];", 'const found = arr.indexOf("hello") !== -1;'],
    explanation:
      ".includes() is ES2016 \u2014 works in modern environments. The code is actually correct, but for older support, use indexOf.",
  },
  {
    type: "matching",
    prompt: "Match the array method to what it does:",
    pairs: [
      [".map()", "Transforms each element"],
      [".filter()", "Keeps elements that pass a test"],
      [".reduce()", "Accumulates into a single value"],
    ],
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* -- Assembly Card */

function AssemblyCard({ q }: { q: PracticeQ }) {
  const [order, setOrder] = useState(() => shuffle(q.lines ?? []));
  const [submitted, setSubmitted] = useState(false);
  const correct = JSON.stringify(order) === JSON.stringify(q.lines);

  const move = (from: number, dir: -1 | 1) => {
    const to = from + dir;
    if (to < 0 || to >= order.length) return;
    const next = [...order];
    [next[from], next[to]] = [next[to], next[from]];
    setOrder(next);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-ink-700">{q.prompt}</p>
      <div className="space-y-1">
        {order.map((line, i) => (
          <div
            key={`${i}-${line}`}
            className="flex items-center gap-2 rounded-lg border border-ink-200 bg-paper-50 px-3 py-2 font-mono text-[13px] text-ink-800"
          >
            <button
              onClick={() => move(i, -1)}
              disabled={i === 0}
              className="text-ink-400 hover:text-gold-600 disabled:opacity-20"
            >
              {"\u25B2"}
            </button>
            <button
              onClick={() => move(i, 1)}
              disabled={i === order.length - 1}
              className="text-ink-400 hover:text-gold-600 disabled:opacity-20"
            >
              {"\u25BC"}
            </button>
            <span className="flex-1 whitespace-pre">{line}</span>
          </div>
        ))}
      </div>
      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          className="rounded-full bg-gold-400 px-5 py-1.5 font-mono text-xs font-bold text-ink-950 hover:bg-gold-300"
        >
          Check order
        </button>
      ) : (
        <div className="rounded-xl px-4 py-3 text-sm">
          {correct ? (
            <p className="text-green-700">
              <span className="mr-1">{"\u2713"}</span> Correct!
            </p>
          ) : (
            <p className="text-red-600">
              <span className="mr-1">{"\u2717"}</span> Not quite {"\u2014"} try a different order.
            </p>
          )}
          {q.explanation && (
            <p className="mt-1 text-ink-600">{q.explanation}</p>
          )}
          {correct && (
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 font-mono text-xs text-gold-600 hover:text-gold-500"
            >
              try again {"\u21BB"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

/* -- Matching Card */

function MatchingCard({ q }: { q: PracticeQ }) {
  const pairs = q.pairs ?? [];
  const lefts = shuffle(pairs.map((p) => p[0]));
  const rights = shuffle(pairs.map((p) => p[1]));
  const [selL, setSelL] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string | null>(null);

  const tryMatch = (right: string) => {
    if (!selL) return;
    const correctPair = pairs.find((p) => p[0] === selL);
    if (correctPair && correctPair[1] === right) {
      setMatched((s) => new Set(s).add(selL));
      setSelL(null);
    } else {
      setWrong(selL + right);
      setTimeout(() => setWrong(null), 600);
      setSelL(null);
    }
  };

  const allDone = matched.size === pairs.length;

  return (
    <div className="space-y-3">
      <p className="text-sm text-ink-700">{q.prompt}</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          {lefts.map((l) => (
            <button
              key={l}
              onClick={() => setSelL(matched.has(l) ? null : l)}
              className={`block w-full rounded-lg border px-3 py-2 text-left font-mono text-[13px] transition ${
                matched.has(l)
                  ? "border-green-400 bg-green-50 text-green-700"
                  : selL === l
                  ? "border-gold-400 bg-gold-400/10 text-gold-700 ring-2 ring-gold-400/30"
                  : wrong?.includes(l)
                  ? "border-red-300 bg-red-50 text-red-600"
                  : "border-ink-200 text-ink-800 hover:border-gold-300"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
        <div className="space-y-1.5">
          {rights.map((r) => {
            const leftFor = pairs.find((p) => p[1] === r)?.[0];
            const isMatched = !!leftFor && matched.has(leftFor);
            return (
              <button
                key={r}
                onClick={() => tryMatch(r)}
                disabled={isMatched}
                className={`block w-full rounded-lg border px-3 py-2 text-left text-[13px] transition ${
                  isMatched
                    ? "border-green-400 bg-green-50 text-green-700"
                    : wrong?.includes(r)
                    ? "border-red-300 bg-red-50 text-red-600"
                    : "border-ink-200 text-ink-700 hover:border-gold-300"
                }`}
              >
                {r}
              </button>
            );
          })}
        </div>
      </div>
      {allDone && (
        <p className="rounded-xl bg-green-50 px-4 py-2 text-sm text-green-700">
          <span className="mr-1">{"\u2713"}</span> All matched!
        </p>
      )}
    </div>
  );
}

/* -- Spot-the-Bug Card */

function SpotCard({ q }: { q: PracticeQ }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="space-y-3">
      <p className="text-sm text-ink-700">{q.prompt}</p>
      <div className="code-window overflow-hidden">
        <div className="max-h-40 overflow-auto p-4 font-mono text-[12px] leading-relaxed">
          {(q.broken ?? []).map((line, i) => (
            <div key={i} className="text-red-600/80">
              {line}
            </div>
          ))}
        </div>
      </div>
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="rounded-full border border-gold-400/40 bg-gold-400/10 px-5 py-1.5 font-mono text-xs font-bold text-gold-700 hover:bg-gold-400/20"
        >
          Reveal fix
        </button>
      ) : (
        <div className="space-y-2 rounded-xl border border-green-300 bg-green-50 p-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-green-600">
            fixed version
          </p>
          <div className="max-h-40 overflow-auto font-mono text-[12px] leading-relaxed">
            {(q.fixed ?? []).map((line, i) => (
              <div key={i} className="text-green-700">
                {line}
              </div>
            ))}
          </div>
          {q.explanation && (
            <p className="text-sm text-ink-600">{q.explanation}</p>
          )}
        </div>
      )}
    </div>
  );
}

/* -- Main Export */

export default function MicroPractice() {
  const [idx, setIdx] = useState(0);
  const q = QUESTIONS[idx];
  const next = () => setIdx((i) => (i + 1) % QUESTIONS.length);

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500">
          micro practice {"\u00B7"} {idx + 1}/{QUESTIONS.length}
        </p>
        <button
          onClick={next}
          className="font-mono text-xs text-gold-600 hover:text-gold-500"
        >
          next {"\u2192"}
        </button>
      </div>

      <div className="rounded-2xl border border-ink-200 bg-paper-50 p-5">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-gold-500">
          {q.type === "assembly"
            ? "code assembly"
            : q.type === "matching"
            ? "matching"
            : "spot the bug"}
        </p>
        {q.type === "assembly" && <AssemblyCard q={q} />}
        {q.type === "matching" && <MatchingCard q={q} />}
        {q.type === "spot" && <SpotCard q={q} />}
      </div>
    </div>
  );
}
