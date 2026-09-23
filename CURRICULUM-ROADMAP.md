# Curriculum Roadmap — Interactive, Practical, Comprehensive

This document is the plan **and** the record. Everything described as "shipped"
below is in the repository and covered by tests. The two courses that were
listed here as *proposed* are now built (§3.2), so the only item still open in
§8 is a credential the project owner has to mint.

Numbers in this document are the real ones: **15 tracks, 86 lessons**, up from
10 tracks and 56 lessons.

---

## 1. Where the curriculum started

The audit that drove this work found two different problems, and conflating them
would have produced the wrong fix.

**What was already strong.** The app executed real code in the browser. Nine of
the ten original tracks had runnable exercises, seven had predict-the-output
challenges, four had drag-to-order puzzles, and the runner already included an
infinite-loop guard and a mounted mock REST server. The interactive *engine* was
not the gap.

**What was actually missing:**

| Gap | Evidence |
| --- | --- |
| Break-and-fix was read-only | `BugHunt` displayed broken code but had **no editor and no Run button** — you could only reveal the answer |
| Two of five bug challenges were not bugs | Their own text said "the code actually works, the lesson is about assumptions" — teaching students to distrust correct code |
| No live rendering | Every sandbox executed JavaScript. Nothing rendered HTML/CSS, so no frontend lesson could show you the thing you built |
| No modern frontend courses | The catalog jumped from "React basics" (4 lessons) straight to backend/DSA. Tailwind, advanced state, and API integration were entirely absent |
| No project layer | Progress was measured only in lessons passed. Nothing asked the learner to *build* anything, and nothing awarded for it |

That last row is the one that mattered most: a learner could finish every track
and have nothing to show anyone.

---

## 2. Pillar 1 — Interactive upgrades (shipped)

### 2.1 Live code execution → live *rendering*

`src/components/LivePreview.tsx` adds a real sandboxed `<iframe>` with Tailwind's
Play CDN injected, so learners write HTML/CSS/JS and see the browser's own layout
engine respond. Three editor tabs, debounced re-render, and a script-error
readout.

**The design decision worth copying:** grading is **structural, not visual**. An
in-frame probe reports which required CSS selectors are missing via
`postMessage`. That means:

- verification is independent of the CDN — if Tailwind can't load, the markup is
  still graded correctly and the panel says so
- selectors can assert *classes*, which is how the sandbox grades Tailwind usage
  rather than just structure:

```ts
requires: [".grid.md\\:grid-cols-3", ".grid.gap-6", ".card.dark\\:bg-slate-900"]
```

Because the learner's markup is untrusted, the frame runs with
`sandbox="allow-scripts"` and an opaque origin, and the parent only accepts
messages whose `source` is its own `contentWindow`.

### 2.2 Break-and-fix, graded by execution

`src/components/DebugLab.tsx` replaces the read-only component. The learner edits
the program in a real editor and the fix is graded by **running it**:

- the repaired code must execute cleanly **and** satisfy a predicate over its
  output
- the damaged version fails that same predicate — so "reveal the answer" is no
  longer a shortcut, and a green run that prints the wrong thing still fails
- tactile feedback: a snap on success, a screen shake on a failed attempt
- hints unlock after two runs; the bug explanation is available on demand

The library (`src/data/debug-challenges.ts`) contains **seven real bugs**, each
with a reference fix stored alongside it so the whole library is test-verified:

| Challenge | The bug |
| --- | --- |
| The Off-By-One | `i < n` skips `n` — inclusive range needs `i <= n` |
| The Silent Mutator | `arr.push()` mutates the caller's array |
| The Closure Trap | `var` is function-scoped, so all callbacks share one binding |
| The Detached Method | `this` comes from the call site, not the definition |
| The Unawaited Value | `.then` schedules; it doesn't suspend — a missing `await` |
| The Shallow Copy | spread copies one level; the nested object is still shared |
| Two Bugs, One Line | `sort()` compares strings *and* mutates in place |

`tests/debug-challenges.test.ts` asserts, for every challenge, that **the broken
code fails its own check** and **the reference fix passes it** — and that the
failure is a genuine bug rather than a syntax error, so these stay debugging
exercises instead of typo hunts.

### 2.3 New exercises in the existing tracks

The two new components are now first-class lesson elements (`debug` and `preview`
on the `Lesson` type), so they slot into the existing step flow — `Read → Run →
Sequence → Debug → Build → Prove it → Solutions` — with section numerals derived
from what actually renders.

---

## 3. Pillar 2 — Modern course additions

### 3.1 Shipped: the first three of the five new tracks, 18 lessons

**`tailwind` — UI Engineering with Tailwind CSS** (6 lessons)

| Lesson | Interactive element |
| --- | --- |
| Utility-First: The Mental Model | live preview — build and style a card |
| Layout: Flexbox & Grid in Utilities | live preview — responsive card grid |
| Responsive & Dark Mode Systems | drag-to-order the breakpoint ladder |
| States, Variants & Motion | live preview — hover, focus and group variants |
| Tokens, Theme Config & Custom Scales | reading (uses this app's real config) |
| Capstone: Build a Component Kit | live preview — graded kit assembly |

This track exists because Tailwind is now the default styling answer in job
listings, and because it is the one subject that is *impossible* to teach
properly without live rendering. Before `LivePreview`, there was nowhere to put
it.

**`state` — Advanced React State Management** (6 lessons)

| Lesson | Interactive element |
| --- | --- |
| Choosing a State Shape | debug lab — the shallow-copy bug |
| useReducer: State Machines in Disguise | code exercise — implement a reducer |
| Context Without the Re-Render Tax | predict-the-output on reference equality |
| External Stores & useSyncExternalStore | code exercise — build the store |
| Server State ≠ Client State | reading |
| Capstone: A Guarded Checkout State Machine | code exercise — guarded transitions |

The "React basics" track is four lessons and stops at `useState`. Everything a
learner hits in their first month of real work — reducers, context re-render
cost, external stores, server-vs-client state — lives here.

**`api` — API Integration & Data Fetching** (6 lessons)

| Lesson | Interactive element |
| --- | --- |
| HTTP, REST & Status Codes | code exercise — against the mounted mock server |
| Errors, Ordering & the Missing Await | debug lab — the unawaited value |
| The Four States of Every Request | drag-to-order the stale-while-revalidate flow |
| Races, Aborts & Debounce | code exercise — fix the stale-response race |
| Optimistic Updates & Cache Invalidation | reading |
| Capstone: A Retrying, Resilient API Client | code exercise — backoff with an injected transport |

Every exercise here runs against the mock REST server already in the runner, and
the capstone injects its transport, which makes retry logic deterministic and
therefore testable.

### 3.2 Shipped: the last two courses, 12 lessons

The two courses this section used to list as *proposed* are built. The runner
decision that blocked the first one is recorded with the lessons, because it was
the product call, not the code, that determined what these tracks could teach.

**`typescript` — TypeScript for Real Projects** (6 lessons, 5 of them runnable)

| Lesson | Interactive element |
| --- | --- |
| Annotations, Inference & Structural Typing | TS exercise — bound, average, repeat |
| Discriminated Unions & Narrowing | TS exercise — describe every branch of a union |
| Generics That Pay Rent | TS exercise — `first`, `countBy`, no `any` |
| Interfaces, Aliases & Object Shapes | reading |
| unknown, Type Guards & Safe Boundaries | TS exercise — `safeParse` with a type guard |
| Capstone: A Type-Safe Data Layer | TS exercise — discriminated actions, immutability |

**The decision: the real compiler runs in the browser.** The alternative on the
table was "spot the type error" puzzles graded structurally — a day of work, and
it would have taught types as trivia. Instead `src/lib/tsRunner.ts` drives the
`tsc` front end over an in-memory `CompilerHost`: the ES2020 lib chain is
imported as raw text and served by path, so there is no filesystem, no network,
and no WASM build to maintain. Two details make it honest rather than
decorative:

- **Ambient declarations match the sandbox exactly.** `console`, timers and the
  mock `fetch` are declared; the DOM deliberately is not. A lesson cannot
  compile against an API the runner does not provide, which is precisely how the
  "no `document` in the sandbox" rule becomes something the compiler teaches
  instead of something the docs mention.
- **Type errors never block execution, but they always block passing.** The
  program still runs after erasure — you see its output and its diagnostics — yet
  `Playground` only awards the pass when the run is clean, `typeErrors` is empty,
  *and* the output check passes. All three, or nothing.

Cost note: `typescript` and its lib files are only reached through a dynamic
`import()` in the Run handler, so JavaScript lessons never download them.

**`performance` — Web Performance & Accessibility** (6 lessons)

| Lesson | Interactive element |
| --- | --- |
| Core Web Vitals: What Users Actually Feel | reading |
| Fixing CLS: Reserve the Space | live preview — intrinsic image dimensions |
| Contrast: Reading Is a Feature | live preview — fix a failing colour pair |
| Keyboard & Semantics: Real Elements Win | live preview — skip link, landmarks, focus |
| The Rendering Path: Reflow, Repaint, Restyle | drag-to-order the waterfall (also a reading) |
| Capstone: The Performance & A11y Audit | live preview — all nine checks on one page |

This track exists because it is the one subject in the catalog whose answer is a
*measurement* — and the preview sandbox is what makes it teachable: delete
`width`/`height` from the image and the page visibly reflows under you; add them
back and it settles. Grading stays structural (the frame reports which selectors
and attributes are missing) so nothing depends on the CDN or on a one-off lab
score, and the capstone re-asks all nine earlier acceptance tests on a single
document — passing it means the fixes are there, not that the page scored well
once.

Both are 6-lesson tracks with one capstone each, matching the pattern above.

---

## 4. Pillar 3 — Project-based milestones (shipped)

### 4.1 The design

`src/lib/milestones.ts` defines **one continuous project** — *The Continuous
Portfolio* — split into six milestones. The key idea is that a milestone is not
another quiz:

```
unlocked  ⟵ every gating lesson complete (the skill gate)
built     ⟵ every functional component ticked off
verified  ⟵ the sandbox passes (where one exists)
shipped   ⟵ claimed: XP + badge
```

Three things follow from that shape, and each was a deliberate choice:

**1. Rewards attach to artifacts, not answers.** Each milestone carries 3–5
*functional components* — "a controlled input wired to value + onChange", "every
interactive element has a focus-visible treatment" — rather than a score. The
learner ticks them off against their own running project.

**2. The skill gate cannot be faked by the claim log.** `milestoneStatus()`
derives `unlocked` from real lesson completion alone, and `earned` requires
`claimed && unlocked`. `tests/milestones.test.ts` asserts that a claim with
wiped progress reads as **not earned**, so a stale claim can never render as
shipped.

**3. Where it can be verified, it is.** Four milestones carry an executable
proof (the logic behind the interactive component, the four-state render
cascade, the persistent store, commit-message quality) and two carry a live
preview. The one honest gap: **deployment cannot be verified in the browser**,
so `m-ship`'s live-URL deliverable is self-attested. That is why `m-ship` also
carries a code proof — so claiming it is never purely a matter of clicking a box.

### 4.2 The six milestones

| # | Milestone | Gate | XP |
| --- | --- | --- | --- |
| 1 | Semantic Page Shell | semantic HTML, box model | 150 |
| 2 | Design System Layer | 4 × Tailwind lessons | 250 |
| 3 | Interactive Component | JSX, props/state, effects, DOM events | 300 |
| 4 | Live Data Layer | 4 × API lessons | 300 |
| 5 | Persistent State | state shapes, reducer, external stores | 350 |
| 6 | Ship It | 3 × Git lessons | 400 |

**1,750 XP** total — roughly 28% of the XP available in the whole curriculum,
which is the point: shipping outweighs quiz-passing.

Milestone XP now counts toward **rank**, not just a sidebar stat. `playerXp()`
in `gamification.ts` adds it to lesson/quest XP, and `AccountProvider` publishes
that combined total in the player card, so the leaderboard ranks partly on what
you have produced. Claiming a milestone re-publishes that card immediately —
the sync subscribes to the claim log as well as the progress map — because a
claim moves XP without touching a single lesson score, and a rank that only
caught up on your next completed lesson would be wrong exactly when it matters.

### 4.3 Honest limits

- **Claims now sync.** They were local-first when this pillar shipped, which
  meant two devices disagreed and clearing storage lost the project. They now
  live in a `claims` field on the same Convex `progress` row as the score map,
  written by their own `progress.getClaims` / `progress.saveClaims` pair. The
  field is optional, so no migration was needed.
- **The two maps merge by different rules, so they are kept apart.** A score map
  is "best value per key"; a claim log is "best claim per milestone" — more
  ticked deliverables wins, ties go to the earlier date. That rule is
  commutative and idempotent in *both* copies (`src/lib/milestones.ts` for the
  client, `src/convex/progress.ts` for the server), which is what stops a push
  and a pull from oscillating instead of converging.
- **A synced claim still cannot fake the gate.** `earned` is `claimed &&
  unlocked`, and `unlocked` is derived from lesson completion alone — so a claim
  pulled from another device renders as *not shipped* until its lessons are done
  here too. `tests/milestone-claims.test.ts` asserts exactly that against a full
  claim log and empty progress.
- **Self-attestation is inherent** for deliverables the browser cannot observe
  (a deployed URL, a README, an accessibility pass). The automated proof narrows
  the gap; it does not close it.

---

## 5. Exercise catalogue — what to build, and why each form

Concrete, reusable patterns. All of these ship, and all are in `src/data/`.

### 5.1 Break-and-fix (`debug`)

The highest-value format per line of content: it teaches reading code, forming a
hypothesis, and *verifying* it. The non-negotiable rule is that the grading
predicate must be behaviour, not text.

```ts
{
  id: "missing-await",
  brief: "The score comes back as 7. This prints 0 — the value arrives too late.",
  broken: `async function report() {
  let score = 0;
  fetchScore().then((n) => { score = n; });
  console.log("score:", score);
}`,
  fixCheck: 'output.includes("score: 7")',
  fix: `// reference repair, used by the test suite`,
  hints: [/* tier 1, 2, 3 */],
  solution: "`.then()` schedules; it doesn't suspend — use `await`.",
}
```

### 5.2 Live build (`preview`)

For anything where the answer is *what it looks like*. Briefs name the exact
classes so a class-based assertion is fair rather than a guessing game.

```ts
{
  goal: "Give .grid the classes grid, gap-6 and md:grid-cols-3.",
  html: `<div class="grid mx-auto max-w-4xl"> … </div>`,
  requires: [".grid.gap-6", ".grid.md\\:grid-cols-3", ".card + .card"],
}
```

### 5.3 Code exercise with a real assertion (`starter` + `check`)

Graded on console output, so any correct implementation passes — there is no
single blessed answer. Two invariants make these worth the writing, both
enforced by tests: the starter must not already pass, and a reference solution
must pass.

```ts
check: {
  expr: 'output.includes("after add(25): 1 25") && output.includes("after clear: 0 0")',
  hint: "Every action returns a new state object.",
  hints: [/* 1: concept, 2: syntax, 3: partial code */],
}
```

### 5.4 Predict the output (`predict`)

Runnable snippets the learner reasons about *then* runs, so a wrong prediction is
immediately falsifiable. Cheap to author, and it exposes the mental-model errors
that quizzes reward-guess.

### 5.5 Drag-to-order (`sort`)

For sequences where order *is* the knowledge — the breakpoint ladder, the
request lifecycle, middleware. Items must be unique or the puzzle becomes
ambiguous; `tests/curriculum.test.ts` enforces that.

**Coverage across the five tracks added last** (Tailwind, state, API,
TypeScript, performance — 30 lessons): 8 live preview sandboxes, 11 graded code
exercises (5 of them type-checked by the real compiler), 2 break-and-fix labs,
3 drag-to-order puzzles, 1 predict, plus 4 executable milestone proofs and 2
preview proofs. The 7-challenge debug library is shared with the older tracks,
which is why the count here is lower than the library's size.

---

## 6. Rollout sequence

1. **Engine first.** `LivePreview` and `DebugLab` before content, because every
   later track depends on them and both needed to be provably safe (sandboxed
   iframe, execution-graded checks) before lessons could rely on them.
2. **Replace the broken content immediately.** The two fake bug challenges were
   actively harmful, so they were removed in the same pass rather than scheduled.
3. **Author the three tracks that the engine unlocks.** Tailwind first — it was
   blocked entirely on live rendering.
4. **Layer the project on top.** Milestones reference lessons from the new tracks
   *and* the old ones, so the project ties the catalog together instead of
   sitting beside it.
5. **Then measure** (below) before adding more courses.
6. **Close the last two courses, then make the checks automatic.** TypeScript
   and performance/accessibility were the two items the measurement in step 5
   could not start until; with them in place, the work that keeps everything
   honest is mechanical — CI on every push, and a credential-gated deploy so the
   backend functions that the leaderboard and claims depend on actually ship.

## 7. What to measure

The interactive layer is instrumented for learning analytics, not vanity
metrics. In priority order:

- **Exercise attempt distribution.** A break-and-fix challenge solved on the
  first run is too easy; one that takes 8+ runs before the solution is revealed
  is mis-scoped. Both are content bugs with the same fix.
- **Hint-tier reach.** If most learners stop at tier 1, hints are sufficient. If
  they go to the solution, the tier-2 hint is too vague.
- **Exercises completed without the quiz passed.** The strongest signal that
  someone is building rather than guessing.
- **Milestone funnel.** Where do learners stall — locked on a skill gate, mid
  deliverables, or refusing to claim? Each implies a different fix.
- **Return rate after a `preview` or `debug` lesson** versus a reading lesson.
  This is the hypothesis the whole pillar rests on.

## 8. Open items

All four items from the last pass are closed.

| Item | Status |
| --- | --- |
| Convex sync for milestone claims | **Shipped** — `claims` field on the `progress` row, `getClaims`/`saveClaims`, merged on sign-in and debounce-pushed after. Covered by `tests/milestone-claims.test.ts` |
| TypeScript track | **Shipped** — 6 lessons, 5 runnable against the real compiler in the browser (§3.2) |
| Performance & Accessibility track | **Shipped** — 6 lessons, 4 of them live previews (§3.2) |
| CI workflow | **Shipped** — `.github/workflows/ci.yml` runs `bun run typecheck` and `bun run test` on every push to `main` and every PR |
| Production Convex deploy | **Automated, one secret away** — a `deploy-backend` job runs `bunx convex deploy` on pushes to `main`, and reports why it skipped when `CONVEX_DEPLOY_KEY` is absent. The key is a Convex dashboard credential (Project Settings → Production Deploy Key); add it as a repository secret and the leaderboard, guild and claim-sync functions ship with the next merge |

One honest gap remains, and it is not a code gap: **the production deploy has not
been executed from here**, because minting a production deploy key requires the
Convex account owner. Everything up to that step is verified — functions bundle
and codegen is in sync (`convex dev --once`), the bindings are committed so CI
typechecks without a backend, and every function is exercised in-process by the
convex-test suites.

---

## 9. Verification

Everything in this document is enforced by the suite — **155 tests across 15
files**, up from 79:

```
bun tsc -b --noEmit     # clean
bun x vitest run        # 155 passing
```

And the same two commands now run on every push and pull request, so this
document cannot drift away from the code without CI saying so.

The content tests are the interesting ones, because content is where these bugs
hide:

- `tests/debug-challenges.test.ts` — every broken program fails its own check,
  every reference fix passes it, and no challenge is secretly a syntax error
- `tests/new-exercises.test.ts` — no starter is pre-solved, every check is
  satisfiable, every exercise has a full three-tier hint ladder
- `tests/milestones.test.ts` — gates derive from real progress, stale claims are
  not earned, and every executable proof is solved by an independent reference
- `tests/curriculum.test.ts` — extended for the new tracks, plus the new
  invariant that no two tracks share a numeral
- `tests/curriculum-ui.test.tsx` — renders the real lesson page and asserts the
  parts that only exist in the UI: a `debug` lesson shows the editor and its
  Run button, a `preview` lesson shows the sandbox and its tabs, step numerals
  only count sections that actually render, and `/projects` is both routed and
  linked — the project layer is unreachable without that route
- `tests/ts-runner.test.ts` — the in-browser compiler: clean code produces zero
  diagnostics, a real error carries the right TS code, line and column, the
  sandbox globals are declared and the DOM is not, top-level `await` is legal,
  and a program that types `const n: number = "6"` still runs — which is exactly
  why the pass gate needs the compiler's answer as well as the output
- `tests/milestone-claims.test.ts` — the merge rule is commutative and
  idempotent, the server round-trips a two-device claim log without ever
  downgrading it, malformed input is dropped rather than stored, claims and
  scores on the shared row cannot clobber each other, a wipe clears both, and a
  full claim log with no progress renders as *not* earned
- `tests/new-exercises.test.ts` — extended to all five recently added tracks,
  with the TypeScript reference solutions graded through the compiler: each one
  must type-check clean *and* satisfy its output check
