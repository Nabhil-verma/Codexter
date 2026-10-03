import{r,j as e,N as p,P as h,m as d,T as g,R as x,a2 as u}from"./index-DJWgThtW.js";import{P as j}from"./Playground-Cl5M-BTE.js";import{D as f}from"./DebugLab-B5zSNzS2.js";function b({starterCode:s,title:a,deps:n=[]}){const[c,i]=r.useState(!1),t=async()=>{s&&(await navigator.clipboard.writeText(s),i(!0),setTimeout(()=>i(!1),2e3))};return e.jsxs("div",{className:"rounded-2xl border border-ink-200 bg-paper-50 overflow-hidden",children:[e.jsxs("div",{className:"border-b border-ink-200 px-5 py-4",children:[e.jsxs("p",{className:"font-mono text-[10px] uppercase tracking-widest text-ink-500",children:["⌨️"," pro / local mode"]}),e.jsxs("h3",{className:"mt-1 font-display text-lg font-semibold text-ink-950",children:['Run "',a,'" on your machine']}),e.jsx("p",{className:"mt-1 text-sm text-ink-600",children:"Set up the project locally with VS Code, Node.js, and Git."})]}),e.jsxs("div",{className:"space-y-4 p-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-widest text-gold-600",children:"step 1: prerequisites"}),e.jsxs("ul",{className:"mt-2 space-y-1 text-sm text-ink-700",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-gold-500",children:"▸"}),"Node.js 18+ installed"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-gold-500",children:"▸"}),"VS Code (or any editor)"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-gold-500",children:"▸"}),"Git"]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-widest text-gold-600",children:"step 2: create the project"}),e.jsx("div",{className:"code-window mt-2 overflow-x-auto",children:e.jsx("pre",{className:"p-4 font-mono text-[12px] leading-relaxed text-paper-100",children:e.jsx("code",{children:`# Create project directory
mkdir ${a.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")}
cd ${a.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")}

# Initialize with Node
npm init -y${n.length?`

# Install dependencies
npm install ${n.join(" ")}`:""}

# Open in VS Code
code .`})})})]}),s&&e.jsxs("div",{children:[e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-widest text-gold-600",children:"step 3: add the starter code"}),e.jsxs("p",{className:"mt-1 text-sm text-ink-600",children:["Create an ",e.jsx("code",{className:"font-mono text-gold-600",children:"index.js"})," file and paste:"]}),e.jsxs("div",{className:"code-window mt-2 overflow-x-auto",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-ink-800 px-4 py-2",children:[e.jsx("span",{className:"font-mono text-xs text-ink-600",children:"index.js"}),e.jsx("button",{type:"button",onClick:()=>void t(),className:"font-mono text-[11px] text-gold-600 hover:text-gold-500",children:c?"copied!":"copy"})]}),e.jsx("pre",{className:"max-h-64 overflow-auto p-4 font-mono text-[12px] leading-relaxed text-paper-100",children:e.jsx("code",{children:s})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-widest text-gold-600",children:"step 4: run it"}),e.jsx("div",{className:"code-window mt-2 overflow-x-auto",children:e.jsx("pre",{className:"p-4 font-mono text-[12px] leading-relaxed text-paper-100",children:e.jsx("code",{children:"node index.js"})})})]}),e.jsxs("div",{className:"rounded-xl border border-ink-200 bg-paper-100 p-4",children:[e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-widest text-ink-500",children:"pro tips"}),e.jsxs("ul",{className:"mt-2 space-y-1 text-sm text-ink-600",children:[e.jsxs("li",{children:["•"," Use ",e.jsx("code",{className:"font-mono text-gold-600",children:"console.log()"})," for debugging"]}),e.jsxs("li",{children:["•"," Set breakpoints in VS Code's debugger (F5)"]}),e.jsxs("li",{children:["•"," Run ",e.jsx("code",{className:"font-mono text-gold-600",children:"node --inspect index.js"})," for Chrome DevTools"]}),e.jsxs("li",{children:["•"," Use ",e.jsx("code",{className:"font-mono text-gold-600",children:"git init"})," to start version control"]})]})]})]})]})}const m="clr-playground-code-v1",l=[{name:"Blank",blurb:"A clean console",code:`// Free playground — anything goes.
console.log("hello");`},{name:"Event loop",blurb:"Watch microtasks beat timers",code:`console.log("1 sync");

setTimeout(() => console.log("4 timeout"), 0);

Promise.resolve().then(() => console.log("3 microtask"));

console.log("2 sync");
// predict the order before you run!`},{name:"Mock API",blurb:"CRUD against /api/users",code:`// A mock REST server is mounted: /api/users (GET/POST/DELETE),
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
main();`},{name:"Closures",blurb:"Private state, factories",code:`function makeWallet(start) {
  let balance = start;        // private
  return {
    spend: (n) => (balance -= n),
    peek: () => balance,
  };
}

const wallet = makeWallet(100);
wallet.spend(30);
wallet.spend(15);
console.log("remaining:", wallet.peek());`},{name:"Two pointers",blurb:"Classic DSA pattern",code:`function pairWithSum(sorted, target) {
  let lo = 0, hi = sorted.length - 1;
  while (lo < hi) {
    const sum = sorted[lo] + sorted[hi];
    if (sum === target) return [lo, hi];
    if (sum < target) lo++;
    else hi--;
  }
  return null;
}

console.log(pairWithSum([1, 3, 5, 8, 12], 13));`},{name:"Debounce demo",blurb:"Promise-based timing",code:`const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function toast(msg) {
  console.log("→", msg);
  await sleep(300);
  console.log("✓ done:", msg);
}

await Promise.all([toast("a"), toast("b"), toast("c")]);
console.log("all toasts finished in ~300ms, not 900");`}];function v(){const[s,a]=r.useState(()=>{try{return localStorage.getItem(m)??l[0].code}catch{return l[0].code}}),[n,c]=r.useState(0);r.useEffect(()=>{try{localStorage.setItem(m,s)}catch{}},[s]);const i=t=>{c(t),a(l[t].code)};return e.jsxs("div",{className:"min-h-screen",children:[e.jsx(p,{}),e.jsx(h,{children:e.jsxs("main",{className:"mx-auto max-w-4xl px-4 py-8 sm:py-12",children:[e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.55,ease:[.22,1,.36,1]},children:[e.jsx("p",{className:"eyebrow",children:"Free playground"}),e.jsxs("h1",{className:"mt-2 font-display text-4xl font-semibold tracking-tight text-ink-950",children:["Break things ",e.jsx("span",{className:"gradient-text",children:"safely"})]}),e.jsx("p",{className:"mt-3 max-w-xl text-ink-600",children:"No lesson, no goals — just a console. Your code autosaves in this browser. Timers, promises, and the mock API server all work here."})]}),e.jsx("div",{className:"mt-8 flex flex-wrap gap-1.5",children:l.map((t,o)=>e.jsx(d.button,{onClick:()=>i(o),title:t.blurb,className:"rounded-full border px-3.5 py-1.5 font-mono text-xs transition "+(n===o?"border-gold-400 bg-gold-400/15 text-gold-700 shadow-glow":"border-paper-200 text-ink-600 hover:border-gold-400/60 hover:text-ink-900"),initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},transition:{delay:o*.05,type:"spring",stiffness:320,damping:22},whileHover:{scale:1.06},whileTap:{scale:.94},children:t.name},t.name))}),e.jsx("div",{className:"mt-6",style:{perspective:"1200px"},children:e.jsx(g,{max:3,scale:1.005,children:e.jsx(j,{starter:s,onCodeChange:a},n)})}),e.jsx("p",{className:"mt-6 text-center font-mono text-xs text-ink-600",children:"Tip · Cmd/Ctrl+Enter runs · Tab indents · infinite loops can't freeze the tab"}),e.jsx(x,{className:"mt-16",children:e.jsx("section",{children:e.jsx(b,{title:"Playground Snippets",starterCode:s,deps:[""]})})}),e.jsx(x,{className:"mt-16",children:e.jsxs("section",{children:[e.jsx("p",{className:"eyebrow text-center",children:"Break & fix"}),e.jsx("h2",{className:"mt-3 text-center font-display text-3xl font-semibold tracking-tight text-ink-950",children:"Find the bugs, fix the code"}),e.jsx("p",{className:"mx-auto mt-3 max-w-md text-center text-ink-600",children:"Every challenge is a real bug that runs cleanly and prints the wrong thing. Edit the program, run it, and the fix is graded by behaviour — a green run that prints the wrong output still fails."}),e.jsx("div",{className:"mt-10 space-y-10",children:u.map((t,o)=>e.jsx(d.div,{initial:{opacity:0,y:32},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.55,delay:Math.min(o*.08,.24),ease:[.22,1,.36,1]},children:e.jsx(f,{challenge:t})},t.id))})]})})]})})]})}export{v as default};
