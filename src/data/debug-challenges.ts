import type { DebugChallenge, Hint } from "./types";

/* ═══════════════════════════════════════════════════════════════
   Break-and-fix library.

   Every challenge here is a *real* bug: the broken program runs
   cleanly, prints something plausible, and is wrong. None of them
   are "the code is actually fine, the lesson is about assumptions"
   — that genre teaches students to distrust their own eyes.

   Grading is by execution. `fixCheck` is a JS expression over the
   captured console output, so a fix is only accepted when the
   program genuinely behaves. Each `broken` program fails its own
   check; each corresponding fix passes it (asserted in the tests).
   ═══════════════════════════════════════════════════════════════ */

const h = (tier: 1 | 2 | 3, text: string): Hint => ({ tier, text });

/** Reads the nth line of captured output, trimmed. */
const line = (n: number) =>
  `output.split("\\n")[${n}].trim()`;

export const DEBUG_CHALLENGES: DebugChallenge[] = [
  {
    id: "off-by-one",
    title: "The Off-By-One",
    brief:
      "This should sum every number from 1 to n inclusive. It prints two numbers that are both short by exactly n. Find why.",
    broken: `function sumToN(n) {
  let total = 0;
  for (let i = 1; i < n; i++) {
    total += i;
  }
  return total;
}

console.log("sum(5) =", sumToN(5));
console.log("sum(10) =", sumToN(10));`,
    fixCheck:
      'output.includes("sum(5) = 15") && output.includes("sum(10) = 55")',
    win: "The loop stopped one short. `i < n` skips n itself — an inclusive range needs `i <= n`.",
    hints: [
      h(1, "Compare what the loop adds to what the brief asks for. Which number never gets added?"),
      h(2, "Walk the loop by hand for n = 5: which values does `i` take, and which one is missing?"),
      h(3, "The condition `i < n` stops before n. Use `i <= n` and re-run."),
    ],
    solution:
      "`i < n` runs while i is strictly less than n, so n is never added: sum(5) returns 1+2+3+4 = 10 instead of 15. Change the condition to `i <= n`. Off-by-one errors are the single most common loop bug — when a result is off by exactly one term, check the loop bounds first.",
    fix: `function sumToN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log("sum(5) =", sumToN(5));
console.log("sum(10) =", sumToN(10));`,
  },
  {
    id: "silent-mutator",
    title: "The Silent Mutator",
    brief:
      "\"original\" and \"returned\" should not be the same array. The function is supposed to return a new array while leaving the caller's data untouched.",
    broken: `function addItem(arr, item) {
  arr.push(item);
  return arr;
}

const fruits = ["apple", "banana"];
const more = addItem(fruits, "cherry");

console.log("original:", fruits.join(","));
console.log("returned:", more.join(","));`,
    fixCheck:
      `${line(0)} === "original: apple,banana" && output.includes("returned: apple,banana,cherry")`,
    win: "You returned a new array instead of mutating the caller's. That's the difference between a function and a side effect.",
    hints: [
      h(1, "Both lines print the same thing. Is `arr` inside the function a copy of `fruits`, or the very same array?"),
      h(2, "`push` changes the array you call it on. Which array is that here — the parameter or a copy of it?"),
      h(3, "Build the result without touching the parameter: `return [...arr, item];`"),
    ],
    solution:
      "`arr` and `fruits` reference the same object in memory, so `arr.push(item)` mutates the caller's array. Return a copy instead: `return [...arr, item]` (or `arr.concat(item)`). Mutating arguments is how functions leak surprises into unrelated parts of a program — prefer returning new values.",
    fix: `function addItem(arr, item) {
  return [...arr, item];
}

const fruits = ["apple", "banana"];
const more = addItem(fruits, "cherry");

console.log("original:", fruits.join(","));
console.log("returned:", more.join(","));`,
  },
  {
    id: "closure-trap",
    title: "The Closure Trap",
    brief:
      "Three timers are scheduled with delays of 0, 1 and 2 ticks. They should capture 0, 1 and 2 — but they all capture the same number.",
    broken: `const captured = [];

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    captured.push(i);
  }, i * 40);
}

setTimeout(() => {
  console.log("captured:", captured.join(","));
}, 300);`,
    fixCheck: 'output.includes("captured: 0,1,2")',
    win: "One keyword, one binding per iteration. `let` gives the closure its own `i`.",
    hints: [
      h(1, "How many `i` variables exist — one per iteration, or one for the whole function?"),
      h(2, "`var` is function-scoped. When the callbacks finally run, what is `i` by then?"),
      h(3, "Change `var i` to `let i`. Block scoping creates a fresh binding each pass."),
    ],
    solution:
      "`var` is function-scoped, so all three callbacks close over the *same* `i`, which has already reached 3 by the time they fire — they print 3,3,3. `let` is block-scoped and creates a new binding per iteration, so each closure captures its own value. (The pre-ES6 fix was an IIFE that froze the value in a parameter.)",
    fix: `const captured = [];

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    captured.push(i);
  }, i * 40);
}

setTimeout(() => {
  console.log("captured:", captured.join(","));
}, 300);`,
  },
  {
    id: "lost-this",
    title: "The Detached Method",
    brief:
      "The first call works. The second crashes with \"Cannot read properties of undefined\". Both should increment the same counter and print 1, then 2.",
    broken: `const counter = {
  count: 0,
  increment() {
    this.count += 1;
    return this.count;
  },
};

const bump = counter.increment;

console.log("method:", counter.increment());
console.log("detached:", bump());`,
    fixCheck: 'output.includes("method: 1") && output.includes("detached: 2")',
    win: "`this` comes from the call site, not the definition. Binding the function kept the receiver attached.",
    hints: [
      h(1, "The function body didn't change between the two calls. What *did* change?"),
      h(2, "`bump()` is called with nothing before the dot. So what is `this` inside it?"),
      h(3, "Permanently attach the receiver: `const bump = counter.increment.bind(counter);`"),
    ],
    solution:
      "In strict mode a plain function call has `this === undefined`, so `this.count` throws. `counter.increment()` works because `counter` is the receiver. `this` is decided by *how* a function is called, not where it's written — fix it with `.bind(counter)`, an arrow function, or a class field. This is the classic bug behind broken event handlers and `setTimeout(this.method, 100)`.",
    fix: `const counter = {
  count: 0,
  increment() {
    this.count += 1;
    return this.count;
  },
};

const bump = counter.increment.bind(counter);

console.log("method:", counter.increment());
console.log("detached:", bump());`,
  },
  {
    id: "missing-await",
    title: "The Unawaited Value",
    brief:
      "The score comes back from an async function as 7. This prints 0 — the value arrives, but too late to be read.",
    broken: `function fetchScore() {
  return Promise.resolve(7);
}

async function report() {
  let score = 0;
  fetchScore().then((n) => {
    score = n;
  });
  console.log("score:", score);
}

report();`,
    fixCheck: 'output.includes("score: 7")',
    win: "`await` suspended the function until the value existed. `.then` only schedules work — it doesn't pause anything.",
    hints: [
      h(1, "Which line does `console.log` actually run *after*?"),
      h(2, "`.then(callback)` queues the callback. Does queuing it stop the current function?"),
      h(3, "In an `async` function you can simply wait: `const score = await fetchScore();`"),
    ],
    solution:
      "`.then()` registers a callback and returns immediately, so `console.log` runs while `score` is still 0 — the assignment happens on a later microtask. Inside an `async` function, `await` actually suspends execution until the promise settles: `const score = await fetchScore();`. A `.then` that only assigns a variable is almost always a missing `await` in disguise.",
    fix: `function fetchScore() {
  return Promise.resolve(7);
}

async function report() {
  const score = await fetchScore();
  console.log("score:", score);
}

report();`,
  },
  {
    id: "shallow-copy",
    title: "The Shallow Copy",
    brief:
      "The function copies the user before editing it, yet the original keeps changing. \"original\" must still say ada after the update.",
    broken: `function updateName(user, name) {
  const copy = { ...user };
  copy.profile.name = name;
  return copy;
}

const user = { profile: { name: "ada", theme: "dark" } };
const updated = updateName(user, "grace");

console.log("original:", user.profile.name);
console.log("updated:", updated.profile.name);`,
    fixCheck:
      `${line(0)} === "original: ada" && output.includes("updated: grace")`,
    win: "Spread copies one level deep. `profile` was still the shared object — copying it too fixed the leak.",
    hints: [
      h(1, "`{ ...user }` makes a new object. What does `copy.profile` point at?"),
      h(2, "The copy has its own `profile` *reference*, but both references target the same nested object."),
      h(3, "Copy the level you mutate: `const copy = { ...user, profile: { ...user.profile } };`"),
    ],
    solution:
      "Object spread is shallow: `copy` is a new object whose `profile` property points at the *same* nested object as `user.profile`. Mutating `copy.profile.name` therefore edits both. Copy the level you mutate (`{ ...user, profile: { ...user.profile } }`), or use `structuredClone(user)` for a true deep copy. Every modern React state bug involving nested objects traces back to this.",
    fix: `function updateName(user, name) {
  const copy = { ...user, profile: { ...user.profile } };
  copy.profile.name = name;
  return copy;
}

const user = { profile: { name: "ada", theme: "dark" } };
const updated = updateName(user, "grace");

console.log("original:", user.profile.name);
console.log("updated:", updated.profile.name);`,
  },
  {
    id: "sort-and-mutate",
    title: "Two Bugs, One Line",
    brief:
      "The numbers should come out ascending, and the original array must be left in the order it started. Right now neither is true.",
    broken: `const scores = [42, 8, 99, 15];

const sorted = scores.sort();

console.log("sorted:", sorted.join(","));
console.log("original:", scores.join(","));`,
    fixCheck:
      'output.includes("sorted: 8,15,42,99") && output.split("\\n")[1].trim() === "original: 42,8,99,15"',
    win: "A numeric comparator *and* a copy. `sort()` compares strings and reorders the array in place.",
    hints: [
      h(1, "Two separate problems here: the order is wrong, and so is the second line. Tackle them one at a time."),
      h(2, "Default `sort()` converts items to strings — so \"15\" sorts before \"42\". What would fix the ordering?"),
      h(3, "`sort()` also mutates in place. Copy first, then compare numerically: `[...scores].sort((a, b) => a - b)`."),
    ],
    solution:
      "Two classic traps in one line. Default `sort()` compares *strings*, so [42,8,99,15] becomes [15,42,8,99] — always pass a comparator for numbers: `(a, b) => a - b`. It also sorts the array in place, so `scores` is reordered too; spread a copy first. Fix both: `const sorted = [...scores].sort((a, b) => a - b);`",
    fix: `const scores = [42, 8, 99, 15];

const sorted = [...scores].sort((a, b) => a - b);

console.log("sorted:", sorted.join(","));
console.log("original:", scores.join(","));`,
  },
];

const BY_ID = new Map(DEBUG_CHALLENGES.map((c) => [c.id, c]));

/**
 * Lookup used by lesson definitions, so a challenge lives in exactly one
 * place and lessons reference it by id. Throws on a typo rather than silently
 * rendering nothing — tests assert every referenced id resolves.
 */
export function debugChallenge(id: string): DebugChallenge {
  const found = BY_ID.get(id);
  if (!found) {
    throw new Error(
      `Unknown debug challenge "${id}" — add it to src/data/debug-challenges.ts`
    );
  }
  return found;
}
