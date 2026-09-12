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
