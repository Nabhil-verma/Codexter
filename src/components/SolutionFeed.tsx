import { useState, useEffect } from "react";

type Solution = {
  id: string;
  author: string;
  code: string;
  votes: number;
  note?: string;
};

const STORAGE_KEY = "cl_solutions";

function loadSolutions(): Record<string, Solution[]> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

function saveSolutions(all: Record<string, Solution[]>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

function seedSolutions(lessonKey: string): Solution[] {
  // Seed some starter solutions per lesson
  const seeds: Solution[] = [
    {
      id: "seed-1",
      author: "Curator",
      code: '// Clean one-liner\nconsole.log([1, 2, 3].map(x => x * 2));',
      votes: 12,
      note: "Uses .map() for a concise transformation",
    },
    {
      id: "seed-2",
      author: "Curator",
      code: '// Classic loop approach\nconst result = [];\nfor (let i = 1; i <= 3; i++) {\n  result.push(i * 2);\n}\nconsole.log(result);',
      votes: 8,
      note: "Straightforward and easy to understand",
    },
    {
      id: "seed-3",
      author: "Curator",
      code: '// Functional with filter\nconsole.log([1, 2, 3].filter(x => x % 2 === 0));',
      votes: 5,
      note: "Finds even numbers instead — alternative approach",
    },
  ];
  const all = loadSolutions();
  if (!all[lessonKey]) {
    all[lessonKey] = seeds;
    saveSolutions(all);
  }
  return all[lessonKey];
}

type Props = {
  lessonKey: string;
  passed: boolean;
};

export default function SolutionFeed({ lessonKey, passed }: Props) {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [voted, setVoted] = useState<Set<string>>(new Set());
  const [showSubmit, setShowSubmit] = useState(false);
  const [newCode, setNewCode] = useState("");
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    if (passed) {
      setSolutions(seedSolutions(lessonKey));
      try {
        const v = JSON.parse(localStorage.getItem("cl_votes") ?? "[]");
        setVoted(new Set(v));
      } catch { /* ignore */ }
    }
  }, [lessonKey, passed]);

  const upvote = (id: string) => {
    if (voted.has(id)) return;
    const next = new Set(voted).add(id);
    setVoted(next);
    localStorage.setItem("cl_votes", JSON.stringify([...next]));
    setSolutions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, votes: s.votes + 1 } : s))
    );
  };

  const submit = () => {
    if (!newCode.trim()) return;
    const sol: Solution = {
      id: `user-${Date.now()}`,
      author: "You",
      code: newCode.trim(),
      votes: 0,
      note: newNote.trim() || undefined,
    };
    const all = loadSolutions();
    const list = [...(all[lessonKey] ?? []), sol];
    all[lessonKey] = list;
    saveSolutions(all);
    setSolutions(list);
    setNewCode("");
    setNewNote("");
    setShowSubmit(false);
  };

  if (!passed) {
    return (
      <div className="rounded-2xl border border-dashed border-ink-200 bg-paper-50 p-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink-400">
          🔒 solution feed
        </p>
        <p className="mt-2 text-sm text-ink-500">
          Pass the exercise to unlock community solutions.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500">
          community solutions · {solutions.length}
        </p>
        <button
          onClick={() => setShowSubmit((v) => !v)}
          className="font-mono text-xs text-gold-600 hover:text-gold-500"
        >
          {showSubmit ? "cancel" : "+ share yours"}
        </button>
      </div>

      {showSubmit && (
        <div className="rounded-xl border border-ink-200 bg-paper-50 p-4 space-y-2">
          <textarea
            value={newCode}
            onChange={(e) => setNewCode(e.target.value)}
            rows={4}
            className="block w-full rounded-lg border border-ink-200 bg-ink-950 p-3 font-mono text-[12px] text-paper-100 outline-none focus:border-gold-400"
            placeholder="Paste your solution code…"
          />
          <input
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            className="block w-full rounded-lg border border-ink-200 bg-paper-50 px-3 py-2 text-sm text-ink-800 outline-none focus:border-gold-400"
            placeholder="Optional note about your approach…"
          />
          <button
            onClick={submit}
            className="rounded-full bg-gold-400 px-4 py-1.5 font-mono text-xs font-bold text-ink-950 hover:bg-gold-300"
          >
            Submit
          </button>
        </div>
      )}

      {solutions
        .sort((a, b) => b.votes - a.votes)
        .map((sol) => (
          <div
            key={sol.id}
            className="rounded-xl border border-ink-200 bg-paper-50 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs text-ink-500">{sol.author}</p>
                {sol.note && (
                  <p className="mt-1 text-sm text-ink-600">{sol.note}</p>
                )}
              </div>
              <button
                onClick={() => upvote(sol.id)}
                disabled={voted.has(sol.id)}
                className={`flex shrink-0 items-center gap-1 rounded-full border px-3 py-1 font-mono text-[11px] transition ${
                  voted.has(sol.id)
                    ? "border-gold-400 bg-gold-400/10 text-gold-600"
                    : "border-ink-200 text-ink-500 hover:border-gold-300 hover:text-gold-600"
                }`}
              >
                ▲ {sol.votes}
              </button>
            </div>
            <pre className="mt-3 overflow-auto rounded-lg bg-ink-950 p-3 font-mono text-[12px] leading-relaxed text-paper-300">
              {sol.code}
            </pre>
          </div>
        ))}
    </div>
  );
}
