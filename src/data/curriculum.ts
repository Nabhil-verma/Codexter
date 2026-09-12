export type Check = {
  /** JS expression evaluated against the user's `output`; must return truthy to pass */
  expr: string;
  hint: string;
};

export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  /** Markdown-lite: paragraphs separated by \n\n, `code`, **bold** supported */
  body: string;
  starter: string;
  check: Check;
  quiz: QuizQuestion[];
};

export type Track = {
  id: string;
  title: string;
  blurb: string;
  emoji: string;
  lessons: Lesson[];
};

export const tracks: Track[] = [
  {
    id: "js-basics",
    title: "JavaScript Basics",
    blurb: "Start from zero: variables, functions, loops — run real code in every lesson.",
    emoji: "🟨",
    lessons: [
      {
        id: "hello-world",
        title: "Hello, JavaScript",
        minutes: 5,
        body: `Welcome! Every lesson here has three parts: **read**, **run**, and **prove it**.

You write code in the editor, press **Run**, and your program's output appears in the console. \`console.log()\` prints things — it's the easiest way to see what your code is doing.

Variables store values. In modern JavaScript we use \`let\` (value can change) and \`const\` (value can't be reassigned).

\`//\` starts a comment — notes for humans that the computer ignores.`,
        starter: `// Change the name and press Run!
const name = "world";
console.log("Hello, " + name + "!");

let visits = 0;
visits = visits + 1;
visits = visits + 1;
console.log("visits:", visits);`,
        check: {
          expr: "output.includes('Hello,') && output.includes('visits:')",
          hint: "Make sure both console.log lines still run — you need output containing 'Hello,' and 'visits:'.",
        },
        quiz: [
          {
            q: "Which keyword declares a value that should never be reassigned?",
            options: ["let", "const", "var", "static"],
            answer: 1,
            explanation: "`const` locks the binding — reassigning it throws a TypeError.",
          },
          {
            q: "What does console.log(\"hi\") do?",
            options: [
              "Saves 'hi' to the database",
              "Shows 'hi' in the browser title bar",
              "Prints 'hi' to the console",
              "Sends 'hi' over the network",
            ],
            answer: 2,
            explanation: "console.log prints to the console — your main tool for peeking inside a program.",
          },
        ],
      },
      {
        id: "functions",
        title: "Functions: Reusable Recipes",
        minutes: 7,
        body: `A function is a **named recipe**: it takes ingredients (parameters) and returns a dish (a return value).

\`\`\`
function greet(name) {
  return "Hey " + name;
}
\`\`\`

The \`return\` keyword hands a value back to whoever called the function. Code after \`return\` inside the function doesn't run.

Arrow functions are a shorter syntax: \`const greet = (name) => "Hey " + name;\``,
        starter: `function add(a, b) {
  // TODO: return the sum of a and b
}

console.log("2 + 3 =", add(2, 3));
console.log("10 + 5 =", add(10, 5));`,
        check: {
          expr: "output.includes('2 + 3 = 5') && output.includes('10 + 5 = 15')",
          hint: "Inside add, write: return a + b;",
        },
        quiz: [
          {
            q: "What keyword sends a value back out of a function?",
            options: ["send", "yield", "return", "export"],
            answer: 2,
            explanation: "`return` passes the value back to the caller and exits the function.",
          },
          {
            q: "add(4, 4) is called. What do the parameters a and b hold?",
            options: ["4 and 4", "undefined and undefined", "8 and 0", "Nothing — parameters can't hold values"],
            answer: 0,
            explanation: "Arguments are matched to parameters by position: a gets 4, b gets 4.",
          },
        ],
      },
      {
        id: "conditionals",
        title: "Decisions with if/else",
        minutes: 6,
        body: `Programs make decisions with \`if\`, \`else if\`, and \`else\`.

\`\`\`
if (temperature > 30) {
  console.log("Hot!");
} else if (temperature > 20) {
  console.log("Nice.");
} else {
  console.log("Chilly.");
}
\`\`\`

Comparisons: \`>\`, \`<\`, \`>=\`, \`<=\`, \`===\` (strict equality — always prefer it over \`==\`).

Combine conditions with \`&&\` (and), \`||\` (or), \`!\` (not).`,
        starter: `const score = 74; // try other values!

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Keep practicing!");
}`,
        check: {
          expr: "output.includes('Grade: C')",
          hint: "With score = 74 the chain should reach the >= 70 branch and print 'Grade: C'.",
        },
        quiz: [
          {
            q: "Which operator checks strict equality?",
            options: ["=", "==", "===", "=>"],
            answer: 2,
            explanation: "=== compares value AND type. == silently converts types, which causes subtle bugs.",
          },
          {
            q: "if (a > 5 && b > 5) runs when…",
            options: [
              "at least one is over 5",
              "both are over 5",
              "neither is over 5",
              "exactly one is over 5",
            ],
            answer: 1,
            explanation: "&& requires both sides to be truthy.",
          },
        ],
      },
      {
        id: "strings",
        title: "Strings & Template Literals",
        minutes: 6,
        body: `Strings hold text. JavaScript gives you a whole toolbox for them.

Basic moves:
- \`"abc".length\` → 3
- \`"abc".toUpperCase()\` → "ABC"
- \`"a,b,c".split(",")\` → ["a", "b", "c"]
- \`"  hi  ".trim()\` → "hi"

**Template literals** (backtick strings) let you embed variables directly:

\`\`\`
const name = "Ada";
console.log(\`Hello, \${name}! You have \${3 + 2} messages.\`);
\`\`\`

The \`\${...}\` part runs any expression inside the string — much cleaner than gluing things together with +.`,
        starter: `const user = "Ada";
const points = 250;

// TODO: use a template literal to make this one clean line
console.log("Player " + user + " has " + points + " points");

const shout = "learning is fun";
console.log(shout.toUpperCase());
console.log("word count:", shout.split(" ").length);`,
        check: {
          expr: "output.includes('Player Ada has 250 points')",
          hint: "Rewrite the first console.log as a template literal: `Player ${user} has ${points} points`.",
        },
        quiz: [
          {
            q: "Which character starts a template literal?",
            options: ["A double quote \"", "A backtick `", "A single quote '", "A slash /"],
            answer: 1,
            explanation: "Template literals use backticks, which allow ${} interpolation and multi-line strings.",
          },
          {
            q: 'What does "hello".split("") return?',
            options: ["[\"hello\"]", "[\"h\",\"e\",\"l\",\"l\",\"o\"]", "\"olleh\"", "5"],
            answer: 1,
            explanation: "Splitting on the empty string breaks the text into single characters.",
          },
        ],
      },
      {
        id: "loops",
        title: "Loops: Repeat Yourself",
        minutes: 7,
        body: `Loops repeat work so you don't have to.

\`\`\`
for (let i = 0; i < 5; i++) {
  console.log("lap", i);
}
\`\`\`

Read it as: *start i at 0; keep going while i < 5; add 1 each lap*.

\`while (condition)\` repeats as long as the condition holds — careful, a condition that never becomes false is an **infinite loop**. (This playground has a loop guard so you can experiment safely.)`,
        starter: `// Print the 3-times table
for (let i = 1; i <= 5; i++) {
  console.log("3 x " + i + " = " + 3 * i);
}

let countdown = 3;
while (countdown > 0) {
  console.log("T-minus", countdown);
  countdown = countdown - 1;
}
console.log("Liftoff! 🚀");`,
        check: {
          expr: "output.includes('3 x 5 = 15') && output.includes('Liftoff')",
          hint: "Keep both loops intact — you need the 15 row and the liftoff line.",
        },
        quiz: [
          {
            q: "How many times does this loop run? for (let i = 0; i < 3; i++)",
            options: ["2", "3", "4", "Infinite"],
            answer: 1,
            explanation: "i takes the values 0, 1, 2 — three laps total.",
          },
          {
            q: "What causes an infinite while loop?",
            options: [
              "The condition never becomes false",
              "Using let instead of const",
              "Calling console.log inside",
              "Loops always run forever",
            ],
            answer: 0,
            explanation: "If nothing in the body pushes the condition toward false, the loop never ends.",
          },
        ],
      },
    ],
  },
  {
    id: "js-data",
    title: "Data & Collections",
    blurb: "Arrays and objects — how real programs organize information.",
    emoji: "📦",
    lessons: [
      {
        id: "arrays",
        title: "Arrays: Ordered Lists",
        minutes: 7,
        body: `An array holds an ordered list of values.

\`\`\`
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);      // "apple" — indexes start at 0!
console.log(fruits.length);  // 3
\`\`\`

Handy methods:
- \`push(x)\` — add to the end
- \`includes(x)\` — does it contain x?
- \`map(fn)\` — transform every element
- \`filter(fn)\` — keep elements that pass a test

\`map\` and \`filter\` take a function — this is your first taste of **functional programming**.`,
        starter: `const scores = [45, 88, 72, 95, 61];

// map: transform each element
const doubled = scores.map((s) => s * 2);
console.log("doubled:", doubled);

// filter: keep passing scores
const passing = scores.filter((s) => s >= 70);
console.log("passing:", passing);

console.log("total:", scores.length);`,
        check: {
          expr: "output.includes('doubled:') && output.includes('passing:')",
          hint: "Keep the map and filter lines running and print both arrays.",
        },
        quiz: [
          {
            q: "What is the index of the first element in an array?",
            options: ["1", "0", "-1", "It depends"],
            answer: 1,
            explanation: "Array indexes start at 0 — a classic source of off-by-one bugs.",
          },
          {
            q: "What does [1, 2, 3].map(n => n * 10) return?",
            options: ["[1, 2, 3]", "[10, 20, 30]", "6", "[60]"],
            answer: 1,
            explanation: "map returns a new array with the function applied to every element.",
          },
        ],
      },
      {
        id: "objects",
        title: "Objects: Labeled Data",
        minutes: 7,
        body: `Objects store **labeled** data — like a form with fields.

\`\`\`
const user = {
  name: "Ada",
  level: 3,
  isPro: false,
};
console.log(user.name);       // dot access
console.log(user["level"]);   // bracket access
\`\`\`

Arrays of objects power almost every real app — lists of users, posts, products.

\`\`\`
const team = [{ name: "Ada", points: 90 }, { name: "Lin", points: 75 }];
\`\`\`

Try combining what you know: \`filter\` an array of objects by a field, then \`map\` to pull out names.`,
        starter: `const students = [
  { name: "Ada", score: 92 },
  { name: "Lin", score: 78 },
  { name: "Sam", score: 55 },
];

const winners = students.filter((s) => s.score >= 70).map((s) => s.name);
console.log("Winners:", winners.join(", "));

const avg = students.reduce((sum, s) => sum + s.score, 0) / students.length;
console.log("Average:", avg);`,
        check: {
          expr: "output.includes('Winners: Ada, Lin')",
          hint: "Filter for score >= 70, map to names, and print with join(', ').",
        },
        quiz: [
          {
            q: "How do you read the 'name' field of an object called user?",
            options: ["user.name", "user->name", "name(user)", "user::name"],
            answer: 0,
            explanation: "Dot access (user.name) is the common style; user['name'] also works.",
          },
          {
            q: "What does reduce((sum, n) => sum + n, 0) do to [1, 2, 3]?",
            options: ["Returns [1,2,3]", "Returns the array length", "Returns 6 — it accumulates a total", "Throws an error"],
            answer: 2,
            explanation: "reduce folds the array into a single value by accumulating.",
          },
        ],
      },
      {
        id: "destructuring",
        title: "Destructuring & Spread",
        minutes: 6,
        body: `Destructuring **unpacks** arrays and objects into variables in one step.

\`\`\`
const { name, score } = { name: "Ada", score: 92 };
const [first, second] = ["a", "b"];
\`\`\`

The **spread operator** \`...\` copies or merges:

\`\`\`
const copy = [...scores];              // clone an array
const merged = { ...defaults, ...options }; // later keys win
\`\`\`

These two patterns are everywhere in modern JavaScript — especially React, where \`const { title, onClick } = props;\` happens constantly.`,
        starter: `const player = { name: "Ada", level: 7, xp: 5400 };
const loot = ["sword", "shield", "potion"];

// TODO: replace these with destructuring
const name = player.name;
const level = player.level;

console.log(name, "reached level", level);
console.log("first loot item:", loot[0]);

const updated = { ...player, xp: player.xp + 600 };
console.log("xp after quest:", updated.xp);`,
        check: {
          expr: "output.includes('Ada reached level 7') && output.includes('xp after quest: 6000')",
          hint: "Use const { name, level } = player; and keep the spread line — xp should end at 6000.",
        },
        quiz: [
          {
            q: "What does const [a, b] = [1, 2, 3]; leave in b?",
            options: ["[1, 2]", "2", "3", "undefined"],
            answer: 1,
            explanation: "Destructuring matches by position: a gets 1, b gets 2, the rest is ignored.",
          },
          {
            q: "What does { ...base, level: 10 } return if base.level is 3?",
            options: [
              "level stays 3",
              "level becomes 10 — later keys win",
              "It throws an error",
              "Both levels are kept in an array",
            ],
            answer: 1,
            explanation: "In spread merges, later properties overwrite earlier ones.",
          },
        ],
      },
    ],
  },
  {
    id: "dom",
    title: "The Browser & DOM",
    blurb: "Make web pages come alive — events, elements, and interactivity.",
    emoji: "🌐",
    lessons: [
      {
        id: "dom-intro",
        title: "The DOM: Your Page as Data",
        minutes: 8,
        body: `The browser turns your HTML into a tree of objects called the **DOM**. JavaScript can read and change it — that's how pages become interactive.

This environment is a plain console sandbox, so here you'll practice the *logic* you'd use with the DOM: finding items, changing state, reacting to events.

Key ideas you'll use on real pages:
- \`document.querySelector(".btn")\` — find an element
- \`el.textContent = "hi"\` — change its text
- \`el.addEventListener("click", fn)\` — react to clicks`,
        starter: `// Simulating a to-do list's state (what you'd render to the DOM)
const todos = [
  { text: "Learn arrays", done: true },
  { text: "Learn objects", done: false },
  { text: "Build something cool", done: false },
];

function render() {
  console.log("--- My Day ---");
  todos.forEach((t, i) => {
    const mark = t.done ? "[x]" : "[ ]";
    console.log(mark + " " + (i + 1) + ". " + t.text);
  });
}

render();

// Toggle the second task and re-render — just like clicking it in the UI
todos[1].done = true;
console.log("→ clicked task 2");
render();`,
        check: {
          expr: "output.includes('My Day') && output.includes('[x] Learn objects')",
          hint: "After toggling, the re-render must show '[x] Learn objects'.",
        },
        quiz: [
          {
            q: "What does document.querySelector('.title') do?",
            options: [
              "Deletes the element",
              "Finds the first element with class 'title'",
              "Creates a new page",
              "Renames the document",
            ],
            answer: 1,
            explanation: "querySelector returns the first element matching the CSS selector.",
          },
          {
            q: "Which method reacts to user clicks?",
            options: ["el.listen()", "el.onClick()", "el.addEventListener('click', fn)", "el.subscribe('click')"],
            answer: 2,
            explanation: "addEventListener('click', fn) runs fn every time the element is clicked.",
          },
        ],
      },
      {
        id: "events",
        title: "Events & State",
        minutes: 8,
        body: `Interactive pages are just a loop: **event happens → state changes → UI re-renders**.

A click handler reads like this on a real page:

\`\`\`
button.addEventListener("click", () => {
  count = count + 1;
  label.textContent = count;
});
\`\`\`

The sandbox can't capture real clicks, so here you'll simulate them: a function acts as the handler, mutates state, and "renders". This exact pattern — state in, render out — is the mental model behind React's \`useState\`.`,
        starter: `// A tiny state machine, like a real interactive page
const state = { clicks: 0, log: [] };

function handleClick() {
  state.clicks = state.clicks + 1;
  state.log.push("click #" + state.clicks);
}

function render() {
  console.log("--- render ---");
  console.log("total clicks:", state.clicks);
  state.log.forEach((entry) => console.log(" •", entry));
}

// Simulate three clicks
handleClick();
handleClick();
handleClick();
render();

// TODO: call handleClick one more time, then render() again
// The new log should show "click #4"`,
        check: {
          expr: "output.includes('click #4')",
          hint: "Add handleClick(); then render(); at the bottom — the log must include 'click #4'.",
        },
        quiz: [
          {
            q: "In the event → state → render loop, what usually triggers a re-render?",
            options: ["The state changing", "The browser refreshing", "A CSS animation", "Nothing — pages render once"],
            answer: 0,
            explanation: "Events mutate state; the changed state is what the render step draws.",
          },
          {
            q: "What does an event listener callback receive on a click?",
            options: ["Nothing", "An event object with details like target and coordinates", "The whole page's HTML", "A promise"],
            answer: 1,
            explanation: "Handlers get an event object — event.target tells you what was clicked.",
          },
        ],
      },
      {
        id: "mini-project",
        title: "Mini-Project: Quiz Engine 🏁",
        minutes: 12,
        body: `Time to combine **everything** — variables, functions, conditionals, loops, arrays, objects, destructuring — into one working program.

You're given quiz **data** (an array of objects) and must build the **engine** that runs it:

1. Loop over the questions
2. Compare the stored answer index with the user's pick
3. Tally a score with \`reduce\` or a loop
4. Print a final grade using a template literal

This is a real (tiny) architecture: **data separate from logic**. Change the data and your engine still works — that's the difference between scripting and programming.`,
        starter: `const quizData = [
  { q: "2 + 2 = ?", options: ["3", "4", "5"], answer: 1 },
  { q: "Capital of France?", options: ["London", "Berlin", "Paris"], answer: 2 },
  { q: "JS stands for?", options: ["JavaSource", "JavaScript", "JustScript"], answer: 1 },
];

// The user's picks (simulate a session)
const picks = [1, 0, 1];

// TODO: build the engine
// 1. Loop over quizData with forEach or for
// 2. For each question, compare question.answer with picks[i]
// 3. Count how many are correct
// 4. Print: "Score: X/3" and a message:
//    3 -> "Perfect! 🏆"  2 -> "Almost there!"  else -> "Keep practicing!"`,
        check: {
          expr: "output.includes('Score: 2/3') && output.includes('Almost there!')",
          hint: "picks[0] and picks[2] are correct (2 points), so print 'Score: 2/3' and 'Almost there!'.",
        },
        quiz: [
          {
            q: "Why keep quiz data separate from the quiz logic?",
            options: [
              "It looks nicer in the editor",
              "You can swap or extend the data without touching the engine",
              "JavaScript requires it",
              "It makes the code run faster",
            ],
            answer: 1,
            explanation: "Separating data from logic makes programs flexible and testable — a core engineering habit.",
          },
          {
            q: "Which loop fits best for iterating an array while also needing the index?",
            options: ["for (let i = 0; …) or forEach((item, i) => …)", "while (true)", "do…while", "Loops can't give you indexes"],
            answer: 0,
            explanation: "Both a classic for and forEach's second argument expose the index.",
          },
        ],
      },
    ],
  },
];

export function findTrack(trackId: string) {
  return tracks.find((t) => t.id === trackId);
}

export function findLesson(trackId: string, lessonId: string) {
  return findTrack(trackId)?.lessons.find((l) => l.id === lessonId);
}

export function lessonKey(trackId: string, lessonId: string) {
  return trackId + "/" + lessonId;
}

export const totalLessonCount = tracks.reduce((n, t) => n + t.lessons.length, 0);
