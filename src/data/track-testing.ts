import type { Track } from "./types";

export const testingTrack: Track = {
  id: "testing",
  title: "Testing & Debugging",
  blurb: "Write tests that catch bugs, and hunt down the ones that slip through.",
  numeral: "Ⅶ",
  lessons: [
    {
      id: "testing-why",
      title: "Why Test? The Test Pyramid & First Assertions",
      minutes: 9,
      body: `Tests are **executable specifications**: code that proves your code does what you claim, and keeps proving it while everything around it changes.

**The test pyramid** — many cheap tests at the base, few expensive ones on top:

\`\`\`
        /  E2E  \\        few, slow, whole-app via browser
       /  Integr. \\      some, API + DB together
      / Unit tests \\     many, milliseconds, single functions
\`\`\`

Push most of your effort to the base: unit tests run in milliseconds, so you run them constantly.

**Anatomy of every good test — AAA:**

\`\`\`
test("adds two numbers", () => {
  // Arrange
  const calc = new Calculator();
  // Act
  const result = calc.add(2, 3);
  // Assert
  expect(result).toBe(5);
});
\`\`\`

**The rules that keep suites healthy:**
1. **One behavior per test** — when it fails, the name should tell you what broke
2. **Test behavior, not implementation** — assert \`renderUser(...)\` output, not that it called a private helper
3. **Deterministic** — no \`Date.now()\`, no randomness without seeds, or tests flake
4. **Fast by default** — if the suite takes minutes, nobody runs it, and unrun tests are decoration

**What to test first:** the money paths (checkout, auth), the code that broke before (regression tests), and anything with branches you can't hold in your head.

This app ships with a real \`vitest\` suite in \`tests/\` — run \`bun test\` and read it; it's the same patterns you're learning here.`,
      starter: `// This sandbox runs real assertions — a tiny expect() implementation.
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected)
        throw new Error("expected " + expected + ", got " + actual);
    },
    toEqual(expected) {
      if (JSON.stringify(actual) !== JSON.stringify(expected))
        throw new Error("expected " + JSON.stringify(expected) + ", got " + JSON.stringify(actual));
    },
  };
}

function test(name, fn) {
  try { fn(); console.log("✓", name); }
  catch (e) { console.log("✗", name, "—", e.message); }
}

// The code under test — deliberate bug for you to find via tests
function slugify(title) {
  return title.toLowerCase().replace(/ /g, "-");
}

test("slugify lowercases and hyphenates", () => {
  expect(slugify("Hello World")).toBe("hello-world");
});

test("slugify trims multiple spaces", () => {
  expect(slugify("two  spaces")).toBe("two-spaces"); // fails! fix slugify
});

test("slugify strips punctuation", () => {
  expect(slugify("Hi, There!")).toBe("hi-there");   // fails! fix slugify
});`,
      check: {
        expr: "output.includes('✓ slugify lowercases') && output.includes('✓ slugify trims multiple spaces') && output.includes('✓ slugify strips punctuation')",
        hint: "Fix slugify: lowercase, replace /\\\\s+/g with '-', then strip characters that aren't letters, numbers, or hyphens.",
      },
      quiz: [
        {
          q: "The test pyramid says most tests should be…",
          options: ["E2E", "Integration", "Unit tests", "Manual"],
          answer: 2,
          explanation: "Cheap and fast at the base — a few expensive E2E at the top.",
        },
        {
          q: "AAA stands for…",
          options: [
            "Arrange, Act, Assert",
            "Always Add Assertions",
            "Async, Await, Assert",
            "Analyze, Adapt, Approve",
          ],
          answer: 0,
          explanation: "Set up, exercise, verify — the universal test shape.",
        },
        {
          q: "A 'flaky' test is one that…",
          options: [
            "Is very fast",
            "Passes and fails without code changes — usually nondeterminism",
            "Tests UI",
            "Has many assertions",
          ],
          answer: 1,
          explanation: "Time, randomness, or shared state makes it unreliable — tests must be deterministic.",
        },
        {
          q: "Good first targets for tests are…",
          options: [
            "Getter/setter boilerplate",
            "Money paths, past bug sites, tricky branches",
            "CSS files",
            "Everything equally",
          ],
          answer: 1,
          explanation: "Highest risk × highest pain-if-broken first.",
        },
        {
          q: "Tests should assert…",
          options: [
            "Private helper call counts",
            "Public behavior — inputs to observable outputs",
            "Line coverage numbers",
            "Implementation order",
          ],
          answer: 1,
          explanation:
            "Behavior tests survive refactors; implementation tests shatter on them.",
        },
      ],
    },
    {
      id: "debugging-method",
      title: "Debugging: A Scientific Method",
      minutes: 10,
      body: `Debugging is **binary search over your assumptions**. The systematic loop:

1. **Reproduce** — a bug you can't trigger, you can't verify fixed. Shrink it: smallest input, fewest steps.
2. **Read the error** — top line = what broke; first line of *your code* in the stack = where. Errors are information, not insults.
3. **Form a hypothesis** — "the cart total is NaN because quantity arrives as a string."
4. **Test the hypothesis with ONE probe** — log \`typeof quantity\`, or set a breakpoint. If confirmed, fix; if not, next hypothesis.
5. **Fix the cause, not the symptom** — \`Number(quantity)\` at the boundary, not \`Number(quantity) || 0\` at every usage.
6. **Prove it** — rerun the repro, then write a **regression test** so it can never return.

\`\`\"
// Stack traces: read yours first, then libraries
TypeError: Cannot read properties of undefined (reading 'name')
    at renderUser (user.ts:12:18)      ← start here (your code)
    at updateProfile (app.ts:40:5)
\`\`\`

**console is more than log:**

\`\`\"
console.table(users);            // arrays of objects as a grid
console.time("render"); render(); console.timeEnd("render");
console.log({ user, cart });     // shorthand — labels included
\`\`\`

**Breakpoints beat log-spam:** in DevTools, click a line number to pause there — you inspect every variable at that instant, live. \`debugger;\` in code does the same. Conditional breakpoints (\`i === 999\`) catch loop-ending bugs without a thousand pauses.

**Rubber duck it:** explaining the code aloud line-by-line forces slow, careful reading — half of all bugs surrender before the duck answers.`,
      starter: `// A real bug hunt. Predict the failure, then find it with ONE probe at a time.
const cart = [
  { name: "keyboard", price: "80", qty: 1 },   // price is a STRING (API bug)
  { name: "mouse", price: 25, qty: 2 },
];

function total(items) {
  let sum = 0;
  for (const item of items) {
    sum += item.price * item.qty;
  }
  return sum;
}

console.log("cart total:", total(cart));
console.log("— is the total wrong? probe the cause —");

// Probe 1: what types are we multiplying?
cart.forEach((i) =>
  console.log(i.name, "price:", typeof i.price, "qty:", typeof i.qty)
);

// TODO 1: fix total() so strings are coerced — at the BOUNDARY, once
// TODO 2: add a failing test first: expect(total(cart)).toBe(130)

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected)
        throw new Error("expected " + expected + ", got " + actual);
    },
  };
}
function test(name, fn) {
  try { fn(); console.log("✓", name); }
  catch (e) { console.log("✗", name, "—", e.message); }
}

test("cart total is 130", () => {
  expect(total(cart)).toBe(130);
});`,
      check: {
        expr: "output.includes('✓ cart total is 130')",
        hint: "Make total() coerce: sum += Number(item.price) * item.qty. The test must print ✓.",
      },
      quiz: [
        {
          q: "Step one of debugging any bug?",
          options: [
            "Rewrite the module",
            "Reproduce it reliably, then shrink it",
            "Add try/catch",
            "Restart the machine",
          ],
          answer: 1,
          explanation: "Unreproducible bugs can't be verified fixed — repro is the foundation.",
        },
        {
          q: "In a stack trace, you should read…",
          options: [
            "Only the top line",
            "What broke, then the first frame belonging to YOUR code",
            "The bottom line",
            "Nothing — ignore stack traces",
          ],
          answer: 1,
          explanation: "Library frames fill the middle; your frame is where you can act.",
        },
        {
          q: "The scientific debugging loop is…",
          options: [
            "Log everything forever",
            "Hypothesis → single probe → confirm/refute → fix cause",
            "Delete code until it works",
            "Copy code from the internet",
          ],
          answer: 1,
          explanation: "Each probe tests exactly one assumption — that's binary search over beliefs.",
        },
        {
          q: "Why write a regression test after fixing?",
          options: [
            "To slow the suite down",
            "The exact bug can never silently return",
            "It's required by git",
            "To increase coverage stats",
          ],
          answer: 1,
          explanation: "Every fixed bug deserves a test that fails without the fix.",
        },
        {
          q: "console.table() is best for…",
          options: [
            "Hiding logs",
            "Inspecting arrays of objects as a readable grid",
            "Timing code",
            "Stack traces",
          ],
          answer: 1,
          explanation: "It renders tabular data as an actual table — far faster to read than nested logs.",
        },
      ],
    },
    {
      id: "tdd-mocking",
      title: "TDD, Mocks & Testing Async Code",
      minutes: 11,
      reading: true,
      body: `**TDD (Test-Driven Development)** flips the order: red → green → refactor.

\`\`\"
1. RED:    write a failing test for behavior you want
2. GREEN:  write the SIMPLEST code that passes
3. REFACTOR: clean up with the safety net on
\`\`\`

The cycle is minutes long. Benefits: you only write code some test demanded, and every feature is born with a specification. Costs: discipline, and design blindness if you over-follow it — pragmatists TDD the tricky logic, not the boilerplate.

**Mocks and stubs** replace slow/real dependencies with controllable fakes:

\`\`\"
// Real: slow, flaky, needs network
// Mocked: instant, deterministic, can simulate failures
const fakeApi = {
  getUser: vi.fn().mockResolvedValue({ id: 1, name: "Ada" }),
  getUserFailure: vi.fn().mockRejectedValue(new Error("500")),
};

test("shows the user name", async () => {
  const vm = await createViewModel(fakeApi);
  expect(vm.name).toBe("Ada");
  expect(fakeApi.getUser).toHaveBeenCalledWith(1);
});
\`\`\`

**What to mock:** the network, time, filesystem, randomness. **What not to mock:** the code under test, simple pure functions, everything (mock-everything tests verify wiring, not behavior — they break on every refactor and catch no bugs).

**Testing async code:**

\`\`\"
test("retries flaky calls", async () => {
  // vitest: fake timers make time instant and deterministic
  vi.useFakeTimers();
  const p = withRetry(flakyFn, 3);
  await vi.runAllTimersAsync();      // advance the clock!
  await expect(p).resolves.toBe("ok");
  expect(flakyFn).toHaveBeenCalledTimes(3);
});
\`\`\`

Rules: **always await** async assertions (an un-awaited promise passes vacuously!), simulate failure paths — happy-path-only suites lie about resilience — and keep each test's arrange section small enough to read at a glance.

**Coverage** is a smoke detector, not a goal: 100% coverage with weak assertions proves nothing; 70% with sharp behavioral tests is worth ten vanity suites.`,
      quiz: [
        {
          q: "TDD's cycle is…",
          options: [
            "Code → test → debug",
            "Red (failing test) → green (minimal pass) → refactor",
            "Design → build → test once at the end",
            "Ship → fix → test",
          ],
          answer: 1,
          explanation: "The failing test is the specification; minimal code makes it pass.",
        },
        {
          q: "A mock that 'replaces' a dependency exists to…",
          options: [
            "Slow tests down realistically",
            "Make tests fast and deterministic — and simulate failure paths",
            "Reduce coverage",
            "Skip writing the real code",
          ],
          answer: 1,
          explanation: "You control the fake: instant, repeatable, and able to throw on demand.",
        },
        {
          q: "Testing async code, the classic silent bug is…",
          options: [
            "Forgetting await — the test passes before the assertion runs",
            "Using too many mocks",
            "Naming the test wrong",
            "Using vi.fn()",
          ],
          answer: 0,
          explanation: "Un-awaited promises resolve after the test exits — assertions never execute.",
        },
        {
          q: "Which should you NOT mock?",
          options: ["Time", "The network", "The function under test", "Randomness"],
          answer: 2,
          explanation: "Mocking the subject tests nothing — you'd be verifying your own mock.",
        },
        {
          q: "100% test coverage means…",
          options: [
            "Zero bugs",
            "Nothing by itself — assertions quality decides the value",
            "The suite is too slow",
            "TDD was followed",
          ],
          answer: 1,
          explanation:
            "Coverage measures execution, not verification — sharp assertions beat big numbers.",
        },
      ],
    },
  ],
};
