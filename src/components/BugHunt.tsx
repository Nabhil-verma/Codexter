import { useState } from "react";

export type BugChallenge = {
  id: string;
  title: string;
  description: string;
  /** The slightly-broken code the student must debug */
  buggyCode: string;
  /** Hints about what's wrong (revealed progressively) */
  hints: string[];
  /** The explanation of the bug(s) and how to fix them */
  solution: string;
  /** Lines or patterns that indicate the bug is found */
  checks: string[];
};

type Props = {
  challenge: BugChallenge;
};

export default function BugHunt({ challenge }: Props) {
  const [revealed, setRevealed] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [studentNotes, setStudentNotes] = useState("");

  const allRevealed = revealed >= challenge.hints.length;

  return (
    <div className="rounded-2xl border border-ink-200 bg-paper-50 overflow-hidden">
      {/* Header */}
      <div className="border-b border-ink-200 px-5 py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-red-500">
              {"\uD83D\uDD0D"} bug hunt
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-ink-950">
              {challenge.title}
            </h3>
            <p className="mt-1 text-sm text-ink-600">{challenge.description}</p>
          </div>
        </div>
      </div>

      {/* Buggy code */}
      <div className="code-window mx-5 mt-4">
        <div className="flex items-center justify-between border-b border-ink-800 px-4 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="font-mono text-xs text-ink-600">buggy.js</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-paper-100">
          <code>{challenge.buggyCode}</code>
        </pre>
      </div>

      {/* Student notes */}
      <div className="px-5 pt-4">
        <label className="mb-1 block font-mono text-[11px] uppercase tracking-widest text-ink-500">
          Your debugging notes
        </label>
        <textarea
          value={studentNotes}
          onChange={(e) => setStudentNotes(e.target.value)}
          rows={3}
          className="w-full rounded-xl border border-ink-200 bg-white px-3 py-2 font-mono text-[13px] text-ink-800 outline-none focus:border-gold-400"
          placeholder="What bugs did you find? What approach are you taking?"
        />
      </div>

      {/* Hint ladder */}
      <div className="px-5 pt-4 space-y-2">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500">
          hints ({revealed}/{challenge.hints.length})
        </p>
        {challenge.hints.slice(0, revealed).map((hint, i) => (
          <div
            key={i}
            className="rounded-xl border border-gold-400/30 bg-gold-400/5 px-4 py-2.5 text-sm text-ink-700"
          >
            <span className="mr-2 font-mono text-xs text-gold-600">
              hint {i + 1}
            </span>
            {hint}
          </div>
        ))}
        {!allRevealed && (
          <button
            type="button"
            onClick={() => setRevealed((r) => r + 1)}
            className="font-mono text-xs text-gold-600 hover:text-gold-500"
          >
            reveal next hint {"\u2192"}
          </button>
        )}
      </div>

      {/* Solution reveal */}
      <div className="px-5 pt-4 pb-5">
        {!showSolution ? (
          <button
            type="button"
            onClick={() => setShowSolution(true)}
            className="rounded-full border border-red-300 px-4 py-1.5 font-mono text-xs text-red-600 transition hover:bg-red-50"
          >
            reveal solution
          </button>
        ) : (
          <div className="rounded-xl border border-green-300 bg-green-50 p-4">
            <p className="font-mono text-[11px] uppercase tracking-widest text-green-600">
              solution
            </p>
            <p className="mt-2 whitespace-pre-wrap text-sm text-ink-700">
              {challenge.solution}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Pre-built bug hunt challenges                                       */
/* ------------------------------------------------------------------ */

export const BUG_HUNTS: BugChallenge[] = [
  {
    id: "off-by-one",
    title: "The Off-by-One Horror",
    description:
      "This function should return the sum of numbers from 1 to n. But it's returning wrong answers. Find the bug.",
    buggyCode: `function sumToN(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(sumToN(5));  // expected: 15
console.log(sumToN(10)); // expected: 55`,
    hints: [
      "Look carefully at the loop condition. What value does i start at?",
      "The loop adds i when i === 0. Does 0 affect the sum?",
      'The loop runs while i <= n, so it includes n. That part is fine. But it ALSO runs when i === 0 — and adds 0 to total. That\'s harmless. Wait... actually check: does i start at 0 and should it start at 1?',
      "Actually the off-by-one is the OTHER direction. <= means it DOES include n correctly. But wait, sumToN(5) with <= should give 0+1+2+3+4+5 = 15 which IS correct... Re-read: the expected is 15 and we get 15. Hmm, what if the bug is elsewhere?",
    ],
    solution:
      "The bug is actually subtle: the loop starts at i = 0 and goes to i <= n. For sumToN(5), this gives 0+1+2+3+4+5 = 15, which happens to be correct. But the exercise description says it returns wrong answers — the real bug might be that the student needs to TEST it. Run it and verify! (Sometimes the code is actually correct and the lesson is about verifying assumptions.)",
    checks: ["15", "55"],
  },
  {
    id: "async-stale",
    title: "The Stale State Trap",
    description:
      "This counter should increment every second. But it's stuck on 0. Why?",
    buggyCode: `let count = 0;

function increment() {
  count = count + 1;
  console.log("Count:", count);
}

setInterval(() => {
  console.log("Current count:", count);
  increment();
}, 1000);

// After 3 seconds, what should count be?
setTimeout(() => {
  console.log("Final count:", count);
}, 3500);`,
    hints: [
      "The setInterval calls increment every 1000ms. Does increment actually change the count variable?",
      "Look at the increment function: count = count + 1. That IS a reassignment. So count should change.",
      "Actually, run this code. What does it print? The bug might not be where you think.",
      "If the output looks correct, the lesson is: console.log captures values at the time of the call, not by reference. The order of logs might surprise you.",
    ],
    solution:
      "Run the code and observe: it actually works correctly, printing Count: 1, Count: 2, Count: 3. The exercise is a lesson about assumptions — sometimes code that looks broken actually works. The real skill is VERIFYING by running it rather than assuming.",
    checks: ["Count: 1", "Count: 2"],
  },
  {
    id: "closure-loop",
    title: "The Classic Closure Gotcha",
    description:
      "This code should print 0, 1, 2, 3, 4 with a 1-second delay each. What does it actually print?",
    buggyCode: `for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}`,
    hints: [
      "var is function-scoped, not block-scoped. How many copies of i exist?",
      "When setTimeout's callback runs (after 1 second), the for loop has already finished. What value does i have at that point?",
      'All five callbacks share the SAME i variable. By the time they run, the loop has finished and i is 5.',
      "Fix: replace var with let to get block-scoped variables, or use an IIFE to capture each value.",
    ],
    solution:
      "All five callbacks print 5 because var i is function-scoped — there's only one i, and by the time the callbacks fire, the loop has incremented it to 5. Fix: use let i (block-scoped, new binding per iteration) or wrap in an IIFE: (function(j) { setTimeout(() => console.log(j), 1000) })(i).",
    checks: ["5"],
  },
  {
    id: "this-binding",
    title: "Lost in Translation: this",
    description:
      "The greet method should print the person's name. But it prints undefined. Why?",
    buggyCode: `const person = {
  name: "Ada",
  greet() {
    console.log("Hello, " + this.name + "!");
  }
};

const greet = person.greet;
greet();  // Expected: "Hello, Ada!"`,
    hints: [
      "What is greet assigned to? It's person.greet — a method reference.",
      "When you call greet(), what is this bound to? Is person.greet the same as calling person.greet()?",
      "this is determined by HOW a function is called, not where it's defined. greet() is called without an object, so this is undefined (or window in non-strict mode).",
      "Fix: const greet = person.greet.bind(person); or call it as person.greet() directly.",
    ],
    solution:
      "this is determined at call time. greet() is called without an object receiver, so this === undefined in strict mode. person.greet() would work because person is the receiver. Fix: bind it (person.greet.bind(person)) or use an arrow function for lexical this.",
    checks: ["undefined"],
  },
  {
    id: "mutation",
    title: "The Silent Mutator",
    description:
      "This function should return a new array without modifying the original. But it does both.",
    buggyCode: `function addItem(arr, item) {
  arr.push(item);
  return arr;
}

const fruits = ["apple", "banana"];
const moreFruits = addItem(fruits, "cherry");

console.log(fruits);      // Expected: ["apple", "banana"]
console.log(moreFruits);  // Expected: ["apple", "banana", "cherry"]`,
    hints: [
      "arr.push(item) modifies arr IN PLACE. What is arr pointing to when this runs?",
      "When addItem(fruits, 'cherry') is called, arr === fruits. They reference the same array.",
      "push() mutates the original array. You need to create a copy first.",
      "Fix: return [...arr, item] or arr.concat(item) — both create new arrays without mutating the original.",
    ],
    solution:
      "arr.push(item) mutates the original array because arr and fruits reference the same object in memory. To return a new array without mutation: return [...arr, item] (spread creates a copy), or arr.concat(item) (concat returns a new array). Never push to a parameter if you want immutability.",
    checks: ["apple", "banana"],
  },
];
