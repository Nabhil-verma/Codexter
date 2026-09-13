import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Playground from "../components/Playground";
import BugHunt, { BUG_HUNTS } from "../components/BugHunt";
import LocalModeGuide from "../components/LocalModeGuide";

const STORAGE_KEY = "clr-playground-code-v1";

const snippets: { name: string; blurb: string; code: string }[] = [
  {
    name: "Blank",
    blurb: "A clean console",
    code: `// Free playground — anything goes.\nconsole.log("hello");`,
  },
  {
    name: "Event loop",
    blurb: "Watch microtasks beat timers",
    code: `console.log("1 sync");

setTimeout(() => console.log("4 timeout"), 0);

Promise.resolve().then(() => console.log("3 microtask"));

console.log("2 sync");
// predict the order before you run!`,
  },
  {
    name: "Mock API",
    blurb: "CRUD against /api/users",
    code: `// A mock REST server is mounted: /api/users (GET/POST/DELETE),
// /api/users/:id, and /api/flaky (fails ~50% of the time).
async function main() {
  const res = await fetch("/api/users");
  const users = await res.json();
  console.log("users:", users.map((u) => u.name).join(", "));

  const created = await (
    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Newcomer" }),
    })
  ).json();
  console.log("created:", created.id, created.name);
}
main();`,
  },
  {
    name: "Closures",
    blurb: "Private state, factories",
    code: `function makeWallet(start) {
  let balance = start;        // private
  return {
    spend: (n) => (balance -= n),
    peek: () => balance,
  };
}

const wallet = makeWallet(100);
wallet.spend(30);
wallet.spend(15);
console.log("remaining:", wallet.peek());`,
  },
  {
    name: "Two pointers",
    blurb: "Classic DSA pattern",
    code: `function pairWithSum(sorted, target) {
  let lo = 0, hi = sorted.length - 1;
  while (lo < hi) {
    const sum = sorted[lo] + sorted[hi];
    if (sum === target) return [lo, hi];
    if (sum < target) lo++;
    else hi--;
  }
  return null;
}

console.log(pairWithSum([1, 3, 5, 8, 12], 13));`,
  },
  {
    name: "Debounce demo",
    blurb: "Promise-based timing",
    code: `const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function toast(msg) {
  console.log("→", msg);
  await sleep(300);
  console.log("✓ done:", msg);
}

await Promise.all([toast("a"), toast("b"), toast("c")]);
console.log("all toasts finished in ~300ms, not 900");`,
  },
];

export default function PlaygroundPage() {
  const [code, setCode] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) ?? snippets[0].code;
    } catch {
      return snippets[0].code;
    }
  });
  const [activeSnippet, setActiveSnippet] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // storage unavailable — session-only persistence
    }
  }, [code]);

  const loadSnippet = (i: number) => {
    setActiveSnippet(i);
    setCode(snippets[i].code);
  };

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <p className="eyebrow">Free playground</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink-950">
          Break things safely
        </h1>
        <p className="mt-3 max-w-xl text-ink-600">
          No lesson, no goals — just a console. Your code autosaves in this
          browser. Timers, promises, and the mock API server all work here.
        </p>

        {/* Snippet library */}
        <div className="mt-8 flex flex-wrap gap-1.5">
          {snippets.map((s, i) => (
            <button
              key={s.name}
              onClick={() => loadSnippet(i)}
              title={s.blurb}
              className={
                "rounded-full border px-3.5 py-1.5 font-mono text-xs transition " +
                (activeSnippet === i
                  ? "border-gold-400 bg-gold-400/15 text-gold-700"
                  : "border-paper-200 text-ink-600 hover:border-gold-400/60 hover:text-ink-900")
              }
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <Playground
            key={activeSnippet}
            starter={code}
            onCodeChange={setCode}
          />
        </div>

        <p className="mt-6 text-center font-mono text-xs text-ink-600">
          Tip · Cmd/Ctrl+Enter runs · Tab indents · infinite loops can't freeze the tab
        </p>

        {/* Run locally guide */}
        <section className="mt-16">
          <LocalModeGuide
            title="Playground Snippets"
            starterCode={code}
            deps={[""]}
          />
        </section>

        {/* Bug Hunt challenges */}
        <section className="mt-16">
          <p className="eyebrow text-center">Bug Hunts</p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold tracking-tight text-ink-950">
            Find the bugs, fix the code
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-ink-600">
            Each challenge has broken code. Read it, find the bug, then reveal hints
            or the full solution.
          </p>
          <div className="mt-10 space-y-10">
            {BUG_HUNTS.map((bh) => (
              <BugHunt key={bh.id} challenge={bh} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
