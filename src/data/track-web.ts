import type { Track } from "./types";

export const webTrack: Track = {
  id: "web",
  title: "Web Development Foundations",
  blurb: "HTML5, CSS3, and modern JavaScript — the bedrock every frontend stands on.",
  numeral: "Ⅰ",
  lessons: [
    {
      id: "html-semantic",
      title: "Semantic HTML: Pages That Mean Something",
      minutes: 10,
      reading: true,
      body: `HTML isn't about making things *look* right — it's about saying what things **are**. Semantic elements tell browsers, search engines, and screen readers what role each region plays.

\`\`\`
<body>
  <header>    <!-- site banner, nav lives here -->
    <nav>…</nav>
  </header>
  <main>      <!-- one per page: the unique content -->
    <article> <!-- self-contained: a post, a card, a product -->
      <h1>Title</h1>
      <section> <!-- thematic grouping inside -->
        <h2>Sub-heading</h2>
      </section>
    </article>
    <aside>   <!-- tangential: related links, ads -->
    <footer>  <!-- meta info, copyright -->
  </main>
</body>
\`\`\`

**Why it matters:**
- **Accessibility** — screen readers navigate by landmarks. A page of \`<div>\`s is a maze; a semantic page is a building with signs.
- **SEO** — search engines weight content inside \`<article>\` and headings more heavily.
- **Maintainability** — \`<main>\` tells the next developer more than \`<div class="main-content">\` ever could.

**The rules of thumb:**
1. One \`<h1>\` per page, headings in order — never skip levels for styling (use CSS for that).
2. \`<main>\` appears once; \`<article>\` and \`<section>\` can nest.
3. A \`<div>\` is not a failure — use it when nothing semantic fits. Use \`<section>\` only when it has a heading.

**The box model** underpins every layout: \`margin\` (space outside) → \`border\` → \`padding\` (space inside) → \`content\`. \`box-sizing: border-box\` makes \`width\` include padding and border, which is what everyone wants — modern resets apply it globally.`,
      quiz: [
        {
          q: "Which element should appear exactly once per page?",
          options: ["<section>", "<article>", "<main>", "<div>"],
          answer: 2,
          explanation:
            "<main> wraps the unique primary content of the page — duplicates confuse landmarks.",
        },
        {
          q: "What does box-sizing: border-box do?",
          options: [
            "Adds a border to every box",
            "Makes width/height include padding and border",
            "Rounds all corners",
            "Centers the element",
          ],
          answer: 1,
          explanation:
            "With border-box, width includes padding + border, so boxes stay the size you asked for.",
        },
        {
          q: "Where does the primary page navigation belong?",
          options: ["<footer>", "<nav> inside <header>", "<aside>", "<main>"],
          answer: 1,
          explanation:
            "Site-level navigation is a landmark inside the banner — <nav> within <header>.",
        },
        {
          q: "Which is the RIGHT order of box model layers, outside to in?",
          options: [
            "content → padding → border → margin",
            "margin → border → padding → content",
            "padding → margin → content → border",
            "border → margin → padding → content",
          ],
          answer: 1,
          explanation:
            "From outside in: margin, border, padding, content.",
        },
        {
          q: "When is a <div> the right choice?",
          options: [
            "Never — always use semantic tags",
            "When no semantic element matches the content's meaning",
            "Only inside <footer>",
            "For every heading",
          ],
          answer: 1,
          explanation:
            "Divs are honest workhorses — use them when nothing more specific describes the content.",
        },
      ],
    },
    {
      id: "css-layout",
      title: "Flexbox, Grid & Responsive Strategy",
      minutes: 12,
      reading: true,
      body: `Two layout systems, two mindsets:

**Flexbox** — one dimension at a time. Content flows along a main axis; great for toolbars, nav rows, centering.

\`\`\`
.toolbar {
  display: flex;
  justify-content: space-between; /* main axis */
  align-items: center;            /* cross axis */
  gap: 12px;
}
\`\`\`

**Grid** — two dimensions. You design the *structure* and place items into cells; great for page layouts and card walls.

\`\`\`
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
\`\`\`

That one \`grid-template-columns\` line is a whole responsive card wall — no media queries needed, because \`auto-fill\` + \`minmax\` decides how many columns fit.

**The decision rule:** choosing between flex and grid is about the *relationship* of items. Items adjusting to each other? Flex. Items aligning to a shared structure? Grid.

**Mobile-first media queries** — write the phone layout as the default, then enhance as space grows:

\`\`\`
.sidebar { width: 100%; }            /* base: mobile */

@media (min-width: 768px) {          /* tablet and up */
  .layout { display: grid; grid-template-columns: 240px 1fr; }
}
\`\`\`

Use \`min-width\` queries (not \`max-width\`), let content wrap naturally, and never test on one breakpoint — resize continuously.`,
      quiz: [
        {
          q: "Your items should flow in a row and shrink to fit. Best tool?",
          options: ["Grid", "Flexbox", "Floats", "Position absolute"],
          answer: 1,
          explanation:
            "One-dimensional content-driven flow is exactly what Flexbox was designed for.",
        },
        {
          q: "What does repeat(auto-fill, minmax(220px, 1fr)) achieve?",
          options: [
            "Exactly 220px columns always",
            "As many ≥220px columns as fit, sharing space equally",
            "One column on mobile",
            "It's invalid CSS",
          ],
          answer: 1,
          explanation:
            "auto-fill packs the row with the most ≥220px tracks that fit; 1fr distributes leftover space.",
        },
        {
          q: "justify-content aligns items along which axis?",
          options: ["Cross axis", "Main axis", "The z-axis", "The grid baseline"],
          answer: 1,
          explanation:
            "justify-* works on the main axis; align-* works on the cross axis.",
        },
        {
          q: "In mobile-first CSS, media queries should mostly use…",
          options: ["max-width", "min-width", "both equally", "no queries at all"],
          answer: 1,
          explanation:
            "min-width lets the base styles be mobile and layers on enhancements as space grows.",
        },
        {
          q: "Grid or Flexbox for a full-page app shell (sidebar + content + header)?",
          options: [
            "Flexbox — rows only",
            "Grid — it defines rows AND columns",
            "Neither; use tables",
            "Flexbox nested 10 deep",
          ],
          answer: 1,
          explanation:
            "Two-dimensional structure with named regions is Grid's home turf.",
        },
      ],
    },
    {
      id: "scope-context",
      title: "Execution Context & Scope: let, const, var",
      minutes: 10,
      body: `JavaScript runs your code in **execution contexts**. Each function call creates a new context with its own scope — a sandbox of visible variables.

\`\`\`
const global = "visible everywhere";

function outer() {
  const outerVar = "visible in outer";
  function inner() {
    console.log(global + " and " + outerVar); // closure!
  }
  inner();
}
\`\`\`

When \`inner\` runs, JavaScript walks up the **scope chain** until it finds each name. Functions remember where they were *born* — that's a **closure**, and it's how callbacks and hooks keep working after their parent finished.

**let vs const vs var:**

- \`var\` is function-scoped and **hoisted** (declared everywhere in the function, initialized to \`undefined\`) — a footgun. Modern code avoids it.
- \`let\` and \`const\` are block-scoped (\`{}\`-scoped) and sit in the "temporal dead zone" until their declaration line — the engine throws instead of quietly giving you \`undefined\`.
- Rule: **\`const\` by default, \`let\` when it must change, \`var\` never.**

\`\`\`
if (true) {
  let x = 1;
  const y = 2;
  var z = 3;      // leaks outside the block!
}
console.log(z);   // 3 — surprise
// console.log(x); // ReferenceError — contained
\`\`\``,
      starter: `function makeCounter() {
  let count = 0; // private — trapped in this closure
  return function increment() {
    count = count + 1;
    return count;
  };
}

const nextCount = makeCounter();
console.log(nextCount()); // 1
console.log(nextCount()); // 2
console.log(nextCount()); // 3

// TODO: fix the loop-scope bug — this prints 3, 3, 3
const printDelayed = [];
for (var i = 0; i < 3; i++) {
  printDelayed.push(i);
}
console.log("loop captured:", printDelayed.join(","));`,
      check: {
        expr: "output.includes('1') && output.includes('3') && output.includes('loop captured: 0,1,2')",
        hint: "Keep the counter working, and change var i to let i so each iteration keeps its own value.",
      },
      quiz: [
        {
          q: "What does the temporal dead zone mean?",
          options: [
            "let/const variables exist but throw if read before declaration",
            "Garbage collection pauses",
            "The event loop is blocked",
            "Old browsers crash",
          ],
          answer: 0,
          explanation:
            "Between scope entry and the declaration line, touching a let/const throws instead of returning undefined.",
        },
        {
          q: "A closure is…",
          options: [
            "A finished function",
            "A function remembering variables from where it was created",
            "A private class field",
            "The end of a loop",
          ],
          answer: 1,
          explanation:
            "Functions capture their birthplace's scope — that's why makeCounter's count survives.",
        },
        {
          q: "Which loop printed 3, 3, 3 in the old days, and why?",
          options: [
            "for with let — blocks share state",
            "for with var — one function-scoped variable",
            "while loops always do this",
            "It was a browser bug",
          ],
          answer: 1,
          explanation:
            "var is one shared binding; by the time callbacks run, i is 3. let creates a fresh binding per iteration.",
        },
        {
          q: "Default declaration choice in modern JS?",
          options: ["var", "let", "const", "whatever compiles"],
          answer: 2,
          explanation:
            "const by default communicates intent; switch to let only when reassignment is needed.",
        },
        {
          q: "Block scope means…",
          options: [
            "Variables live inside any { } block",
            "Variables live inside functions only",
            "Variables live on the window",
            "Variables live in modules",
          ],
          answer: 0,
          explanation:
            "let/const bind to the nearest enclosing block, not the whole function like var.",
        },
      ],
    },
    {
      id: "es6-syntax",
      title: "ES6+ Power Syntax: Arrows & Destructuring",
      minutes: 9,
      body: `Modern JavaScript reads differently than the old tutorials. Two upgrades you'll use every single day:

**Arrow functions** — compact, and they *don't create their own \`this\`*:

\`\`\`
// old
const doubled = nums.map(function (n) { return n * 2; });

// modern
const doubled = nums.map((n) => n * 2);
\`\`\`

**Destructuring** — unpack in one step:

\`\`\`
const { name, level } = player;   // objects: by key
const [first, second] = pair;     // arrays: by position
const { id, ...rest } = payload;  // rest properties
\`\`\`

Combine them with default values and parameters:

\`\`\`
function renderUser({ name, role = "member" }) {
  console.log(name + " (" + role + ")");
}
\`\`\`

**The spread operator** (\`...\`) copies and merges without mutating — a habit that matters the moment you touch React:

\`\`\`
const updated = { ...state, score: state.score + 10 };
const merged = [...a, ...b];
\`\`\`

Below: refactoring practice from old-school to modern style.`,
      starter: `// Old-school. Refactor to arrows + destructuring as you go.
const users = [
  { name: "Ada", points: 90 },
  { name: "Lin", points: 75 },
  { name: "Sam", points: 55 },
];

const winners = users.filter(function (u) { return u.points >= 70; });
const names = [];
for (var i = 0; i < winners.length; i++) {
  names.push(winners[i].name);
}
console.log("winners:", names.join(", "));

// TODO: one line with arrow + destructuring:
// log each winner's name and points as "Ada: 90"
winners.forEach(function (w) {
  console.log(w.name + ": " + w.points);
});`,
      check: {
        expr: "output.includes('winners: Ada, Lin') && output.includes('Ada: 90')",
        hint: "Refactor to (u) => u.points >= 70 and ({ name, points }) => console.log(name + ': ' + points).",
      },
      quiz: [
        {
          q: "Arrow functions differ from regular functions because they…",
          options: [
            "Are always faster",
            "Don't create their own this binding",
            "Can't take parameters",
            "Return undefined",
          ],
          answer: 1,
          explanation:
            "Arrows inherit this from their surroundings — ideal for callbacks.",
        },
        {
          q: "const { a, b } = obj; is equivalent to…",
          options: [
            "const a = obj; const b = obj;",
            "const a = obj.a; const b = obj.b;",
            "const [a, b] = obj;",
            "Nothing — invalid syntax",
          ],
          answer: 1,
          explanation: "Object destructuring pulls properties by key.",
        },
        {
          q: "What does [...items, newItem] do?",
          options: [
            "Mutates items",
            "Creates a new array with newItem appended",
            "Throws if items is empty",
            "Flattens newItem",
          ],
          answer: 1,
          explanation:
            "Spread makes a shallow copy — the original stays untouched (immutability).",
        },
        {
          q: "function f({ x = 5 }) {} — when is the default used?",
          options: [
            "When x is 0",
            "When x is undefined (or missing)",
            "When x is null",
            "Always",
          ],
          answer: 1,
          explanation:
            "Defaults trigger on undefined only — 0 and null are real values.",
        },
        {
          q: "const { id, ...rest } = data; — what is rest?",
          options: [
            "A syntax error",
            "A new object with everything except id",
            "The value of id",
            "An array of keys",
          ],
          answer: 1,
          explanation:
            "Rest properties collect the leftovers into a fresh object.",
        },
      ],
    },
    {
      id: "dom-events",
      title: "DOM Traversal & Event Delegation",
      minutes: 11,
      reading: true,
      body: `The DOM is a tree you can walk:

\`\`\`
list.children            // direct children
item.parentElement       // walk up
item.closest(".card")    // nearest ancestor matching a selector
item.querySelector("p")  // search below
item.previousElementSibling
\`\`\`

**Events don't stop where you click.** They travel in two phases: **capture** (down from the document) then **bubble** (back up to the document). \`addEventListener(type, fn, { capture: true })\` chooses the downward trip; by default you get bubbling.

**Event delegation** exploits bubbling — attach ONE listener to a stable parent instead of many listeners on changing children:

\`\`\`
list.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;                       // click landed on the list itself
  console.log("clicked:", btn.dataset.action);
});
\`\`\`

Why this wins:
1. **Dynamically added items work instantly** — no re-binding after every render.
2. **100 list rows = 1 listener**, not 100.
3. **Removing elements can't leak listeners.**

Read \`event.target\` (what was actually hit) vs \`event.currentTarget\` (what the listener is attached to). And call \`event.preventDefault()\` to stop default behaviors — like a form actually submitting.`,
      quiz: [
        {
          q: "Event delegation means…",
          options: [
            "One listener on a parent handling clicks for its children",
            "Each element gets its own listener",
            "Delegating events to the server",
            "Using capture phase only",
          ],
          answer: 0,
          explanation:
            "You exploit bubbling: the parent hears child clicks and inspects event.target.",
        },
        {
          q: "Why does event.target.closest('button') matter in a delegated handler?",
          options: [
            "It's faster than addEventListener",
            "The click may land on a child inside the button, not the button itself",
            "It prevents bubbling",
            "It creates the button",
          ],
          answer: 1,
          explanation:
            "closest() walks up from the actual target to find the actionable ancestor.",
        },
        {
          q: "During bubbling, an event travels…",
          options: [
            "document → target",
            "target → document (up through ancestors)",
            "Nowhere — it's instant",
            "Only between siblings",
          ],
          answer: 1,
          explanation:
            "Capture goes down, bubble goes back up — bubbling is the upward phase.",
        },
        {
          q: "You add 50 <li> to a list with a delegated listener. How many new listeners do you add?",
          options: ["50", "1", "0", "51"],
          answer: 2,
          explanation:
            "Zero — the parent's existing listener already covers future children. That's the payoff.",
        },
        {
          q: "Which walks UP the tree to the nearest match?",
          options: [
            "el.querySelector('.x')",
            "el.closest('.x')",
            "el.children",
            "el.firstChild",
          ],
          answer: 1,
          explanation: "closest() searches ancestors; querySelector searches descendants.",
        },
      ],
    },
    {
      id: "async-promises",
      title: "Promises & async/await",
      minutes: 11,
      body: `Slow things (network, timers, files) can't block a single-threaded page. **Promises** are IOUs for future values.

\`\`\`
const p = fetch("/api/user");   // starts now, resolves later
p.then((res) => console.log("done", res));
console.log("this runs FIRST"); // sync code never waits
\`\`\`

A promise is **pending** → then either **fulfilled** (\`.then\` runs) or **rejected** (\`.catch\` runs).

**async/await** is promise syntax that *reads* like synchronous code:

\`\`\`
async function loadUser() {
  try {
    const res = await fetch("/api/user");
    const data = await res.json();   // res.json() is ALSO a promise
    return data;
  } catch (err) {
    console.error("failed:", err);
  }
}
\`\`\`

**Rules that trip everyone up:**
1. \`await\` only works inside \`async\` functions (and top-level in modules).
2. \`await\` pauses *that function*, not the whole page — the event loop keeps spinning.
3. Sequential awaits = total of both times. Independent work? Run it in parallel:

\`\`\`
const [user, posts] = await Promise.all([getUser(), getPosts()]);
\`\`\`

Try the playground — \`sleep()\` is a promise-based timer, so you can watch async ordering with zero network.`,
      starter: `// sleep(ms) returns a promise — a stand-in for real I/O
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function brewTea() {
  console.log("1. kettle on");
  await sleep(100);
  console.log("2. water boiled");
  await sleep(100);
  console.log("3. tea steeped");
  return "🍵 ready";
}

console.log("0. order placed");
brewTea().then((result) => console.log("4.", result));
console.log("5. (still free to do other work!)");

// TODO: run two brews in PARALLEL with Promise.all
// and log how the total wait is one brew, not two
async function main() {
  const teas = await Promise.all([brewTea(), brewTea()]);
  console.log("batch done:", teas.join(" + "));
}
main();`,
      check: {
        expr: "output.includes('batch done') && output.includes('order placed')",
        hint: "Keep both the sequential demo and the Promise.all batch — you should see 'order placed' before 'batch done'.",
      },
      quiz: [
        {
          q: "await can be used…",
          options: [
            "Anywhere in JavaScript",
            "Inside async functions (or top-level in modules)",
            "Only in event handlers",
            "Only with setTimeout",
          ],
          answer: 1,
          explanation:
            "await is gated to async function bodies (plus top-level await in modules).",
        },
        {
          q: "While awaiting, the browser…",
          options: [
            "Freezes completely",
            "Keeps running the event loop — other code proceeds",
            "Reloads the page",
            "Blocks all promises",
          ],
          answer: 1,
          explanation:
            "Only the current async function suspends; the page stays responsive.",
        },
        {
          q: "res.json() returns…",
          options: ["A plain object", "A promise that resolves to parsed JSON", "A string", "undefined"],
          answer: 1,
          explanation:
            "Body parsing is async — that's why you await it twice (fetch, then json).",
        },
        {
          q: "Two independent fetches: fastest pattern?",
          options: [
            "await a; await b;",
            "Promise.all([a, b]) awaited once",
            "Call them and never await",
            "await a.then(b)",
          ],
          answer: 1,
          explanation:
            "Promise.all runs them concurrently — total time ≈ the slower one, not the sum.",
        },
        {
          q: "A rejected promise with no .catch becomes…",
          options: ["undefined", "An unhandled rejection error", "A retry", "null"],
          answer: 1,
          explanation:
            "Always attach .catch or wrap in try/catch — silent failures are the worst failures.",
        },
      ],
    },
    {
      id: "fetch-api",
      title: "Fetching Real APIs (with a Mock Server)",
      minutes: 12,
      body: `The **Fetch API** is how the browser talks to servers:

\`\`\`
const res = await fetch("https://api.example.com/users");
if (!res.ok) throw new Error("HTTP " + res.status);  // fetch doesn't throw on 404s!
const data = await res.json();                       // body → JS object
\`\`\`

**The two awaits** confuse everyone: \`fetch\` resolves when *headers* arrive; \`res.json()\` resolves when the *body* finishes streaming.

**Status codes are the conversation:**
- \`200\` OK · \`201\` Created · \`204\` No Content
- \`400\` Bad Request (your fault) · \`401\` Unauthorized · \`404\` Not Found
- \`500\`, \`502\`, \`503\` — server's problem

**Passing options:**

\`\`\`
await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ada" }),
});
\`\`\`

This sandbox has a **mock server** with real latency: \`GET /api/users\`, \`GET /api/users/:id\`, \`POST /api/users\`, \`DELETE /api/users/:id\`, and a flaky \`GET /api/flaky\` that fails randomly — perfect for practicing error handling.`,
      starter: `// A mock server lives in this sandbox. Try the CRUD cycle:

async function main() {
  // READ all
  let res = await fetch("/api/users");
  let users = await res.json();
  console.log("users:", users.map((u) => u.name).join(", "));

  // CREATE
  res = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Grace", role: "admiral" }),
  });
  const created = await res.json();
  console.log("created:", created.name, "id", created.id, "status", res.status);

  // READ one
  res = await fetch("/api/users/" + created.id);
  const one = await res.json();
  console.log("fetched one:", one.name);

  // DELETE
  res = await fetch("/api/users/" + created.id, { method: "DELETE" });
  console.log("deleted, status:", res.status);

  // ERROR HANDLING — this one fails ~50% of the time
  try {
    res = await fetch("/api/flaky");
    if (!res.ok) throw new Error("HTTP " + res.status);
    console.log("flaky succeeded on this attempt!");
  } catch (err) {
    console.log("caught the failure:", err.message);
  }
}
main();`,
      check: {
        expr: "output.includes('created:') && (output.includes('flaky succeeded') || output.includes('caught the failure'))",
        hint: "Complete the CRUD cycle and make sure the flaky call is wrapped in try/catch so one of the two final lines always appears.",
      },
      quiz: [
        {
          q: "fetch() rejects its promise when…",
          options: [
            "The server returns 404",
            "The network itself fails — not on HTTP error statuses",
            "The JSON is invalid",
            "A header is missing",
          ],
          answer: 1,
          explanation:
            "HTTP 4xx/5xx still 'succeeds' as a response — check res.ok or res.status yourself.",
        },
        {
          q: "Why two awaits — fetch() then res.json()?",
          options: [
            "Style preference",
            "Headers arrive first; the body streams in separately",
            "json() is synchronous",
            "It's a browser bug",
          ],
          answer: 1,
          explanation:
            "fetch resolves on headers; res.json() resolves once the full body is parsed.",
        },
        {
          q: "Which status means 'you created something'?",
          options: ["200", "201", "301", "404"],
          answer: 1,
          explanation: "201 Created is the REST convention for successful POSTs.",
        },
        {
          q: "What must you do before sending an object in a POST body?",
          options: [
            "JSON.stringify it and set Content-Type: application/json",
            "Base64 encode it",
            "Nothing — objects send directly",
            "Wrap it in a form",
          ],
          answer: 0,
          explanation:
            "Bodies travel as strings — serialize, and declare the content type.",
        },
        {
          q: "A 500-series status means…",
          options: [
            "Your request was bad",
            "The server failed to handle a valid request",
            "You're not logged in",
            "The resource moved",
          ],
          answer: 1,
          explanation:
            "5xx = server-side failure; 4xx = client-side problem.",
        },
      ],
    },
  ],
};
