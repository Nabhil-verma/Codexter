import{r,I,j as e,m as O}from"./index-DJWgThtW.js";import{u as A}from"./Playground-Cl5M-BTE.js";function w(s,l,a,m){const d=s.framework==="none"?"":'<script src="https://cdn.tailwindcss.com"><\/script>',u=`
    (function () {
      var selectors = ${JSON.stringify(s.requires??[])};
      function report() {
        var missing = selectors.filter(function (s) {
          try { return !document.querySelector(s); } catch (e) { return true; }
        });
        parent.postMessage({
          __preview: "probe",
          missing: missing,
          tailwind: typeof window.tailwind !== "undefined"
        }, "*");
      }
      report();
      setTimeout(report, 600);
      window.addEventListener("load", report);
    })();
  `;return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
${d}
<style>
  html { color-scheme: light; }
  body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, sans-serif; }
  /* Visible without the CDN, so layout still reads if Tailwind can't load. */
  h1, h2, h3 { margin: 0 0 8px; line-height: 1.3; }
  p { margin: 0 0 8px; line-height: 1.6; }
  button { font: inherit; }
  ${a}
</style>
</head>
<body>
${l}
<script>
  try {
    ${m}
  } catch (err) {
    parent.postMessage({
      __preview: "error",
      message: (err && err.message) ? err.message : String(err)
    }, "*");
  }
<\/script>
<script>${u}<\/script>
</body>
</html>`}const F=[{id:"html",label:"index.html"},{id:"css",label:"styles.css"},{id:"js",label:"app.js"}];function G({spec:s,onPass:l}){const[a,m]=r.useState(s.html),[d,u]=r.useState(s.css??""),[p,v]=r.useState(s.js??""),[c,T]=r.useState("html"),[j,y]=r.useState(()=>w(s,s.html,s.css??"",s.js??"")),[$,N]=r.useState(0),[i,L]=r.useState(null),[k,x]=r.useState(null),[h,S]=r.useState(!1),E=r.useRef(null),f=A(),C=I(),b=r.useRef(!1),g=s.requires??[];r.useEffect(()=>{const t=window.setTimeout(()=>{y(w(s,a,d,p)),N(o=>o+1),x(null)},500);return()=>window.clearTimeout(t)},[s,a,d,p]),r.useEffect(()=>{const t=o=>{var M;if(o.source!==((M=E.current)==null?void 0:M.contentWindow))return;const n=o.data;(n==null?void 0:n.__preview)==="probe"?L({missing:n.missing??[],tailwind:!!n.tailwind,error:null}):(n==null?void 0:n.__preview)==="error"&&x(n.message??"Script error")};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[]);const _=!!i&&g.length>0&&i.missing.length===0;r.useEffect(()=>{if(!_){b.current=!1,S(!1);return}S(!0),b.current||(b.current=!0,C||f.start({scale:[1,1.012,1],transition:{duration:.35,ease:"easeOut"}}),l==null||l())},[_,C,f,l]);const R=c==="html"?a:c==="css"?d:p,q=t=>c==="html"?m(t):c==="css"?u(t):v(t),D=i!==null&&s.framework!=="none"&&!i.tailwind,B=r.useMemo(()=>j,[j]);return e.jsxs(O.div,{animate:f,className:"glass glass-edge overflow-hidden rounded-2xl border transition-colors duration-300 "+(h?"border-gold-400/70":"border-paper-200/60"),children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-paper-200/60 px-5 py-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-mono text-[10px] uppercase tracking-widest text-sky-600",children:"▷ live preview"}),e.jsx("p",{className:"mt-1 max-w-lg text-sm text-ink-600",children:s.brief})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>{y(w(s,a,d,p)),N(t=>t+1),x(null)},className:"rounded-full border border-paper-200 px-3 py-1 font-mono text-xs text-ink-600 transition hover:border-gold-400 hover:text-gold-600",children:"↻ re-render"}),e.jsx("button",{type:"button",onClick:()=>{m(s.html),u(s.css??""),v(s.js??"")},className:"rounded-full px-3 py-1 font-mono text-xs text-ink-600 transition hover:bg-paper-100 hover:text-ink-950",children:"reset"})]})]}),e.jsxs("div",{className:"grid gap-4 p-5 lg:grid-cols-2",children:[e.jsxs("div",{className:"code-window",children:[e.jsx("div",{className:"flex items-center gap-1 border-b border-ink-800 px-3 py-2",children:F.map(t=>e.jsx("button",{type:"button",onClick:()=>T(t.id),className:"relative rounded-md px-2.5 py-1 font-mono text-[11px] transition "+(c===t.id?"bg-ink-800 text-gold-300":"text-ink-600 hover:text-paper-200"),children:t.label},t.id))}),e.jsx("textarea",{value:R,onChange:t=>q(t.target.value),spellCheck:!1,rows:16,"aria-label":`${c} source`,className:"block w-full resize-y bg-ink-950 p-4 font-mono text-[13px] leading-relaxed text-paper-100 outline-none"})]}),e.jsxs("div",{className:"overflow-hidden rounded-xl border border-paper-200 bg-white",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-paper-200 px-3 py-2",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-paper-300"}),e.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-paper-300"}),e.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-paper-300"})]}),e.jsx("span",{className:"font-mono text-[11px] text-ink-500",children:"localhost"})]}),e.jsx("iframe",{ref:E,title:"Live preview",srcDoc:B,sandbox:"allow-scripts allow-modals",className:"block h-[380px] w-full border-0 bg-white"},$)]})]}),k&&e.jsxs("div",{className:"mx-5 mb-4 rounded-xl border border-red-300 bg-red-50 px-4 py-2.5 font-mono text-xs text-red-700",children:["✗ script error · ",k]}),D&&e.jsx("div",{className:"mx-5 mb-4 rounded-xl border border-paper-200 bg-paper-50 px-4 py-2.5 text-xs text-ink-600",children:"Tailwind's CDN didn't load, so utility classes can't style the preview. Your markup is still checked — reconnect to see the styles."}),g.length>0&&e.jsx("div",{className:"mx-5 mb-5 rounded-2xl border px-5 py-4 text-sm "+(h?"border-gold-400/60 bg-gold-400/10 text-ink-800":"border-paper-200 bg-paper-50 text-ink-600"),children:h?e.jsxs("span",{children:[e.jsx("span",{className:"mr-2 text-gold-600",children:"✓"}),e.jsx("strong",{className:"font-semibold text-ink-950",children:"Structure verified."})," ","Every required element is in the rendered document."]}):e.jsxs(e.Fragment,{children:[e.jsx("strong",{className:"font-semibold text-ink-950",children:"Goal"}),e.jsx("span",{className:"mx-1 text-gold-500",children:"·"}),s.goal??"Build the markup described in the brief.",e.jsx("ul",{className:"mt-2 space-y-1",children:g.map(t=>{const o=(i==null?void 0:i.missing.includes(t))??!0;return e.jsxs("li",{className:"font-mono text-xs "+(o?"text-ink-500":"text-gold-700 line-through"),children:[o?"○":"✓"," ",t]},t)})})]})})]})}export{G as L};
