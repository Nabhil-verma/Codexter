# Codexter

A 100% free, interactive code teacher. Fifteen tracks, 86 hands-on lessons —
you write and run real code from minute one, in the browser, with easy signup.

**Live:** [nnghedico.freebuff.app](https://nnghedico.freebuff.app)

## What's inside

- **15 curriculum tracks** — Web foundations, React, Tailwind UI engineering, advanced React state, API integration, TypeScript for real projects, backend/Node, DSA, Python, Git & testing, DevOps/Linux/Docker, web security (OWASP), system design, web performance & accessibility, and debugging/testing practice
- **Live sandbox runner** — every lesson has an editor + console with self-checking exercises, "predict the output" challenges, and an infinite-loop guard
- **Visual execution engine** — step through code like Python Tutor: variables, call stack, and console replay line by line
- **The real TypeScript compiler, in the browser** — the TypeScript track runs the `tsc` front end against an in-memory host holding the ES2020 libs, so every Run reports real diagnostics with line and column, then strips types and executes. Grading needs all three: it runs, it compiles with zero errors, and its output passes — a program that prints the right thing while lying to the type system does not count
- **Measured performance & accessibility** — a track where the answer is a number, not an opinion: LCP/INP/CLS budgets, layout shift fixed in a live preview, AA contrast ratios, keyboard semantics and reduced motion, all graded against the page you actually built
- **Tiered hint system** — conceptual nudge → syntax reminder → code skeleton, before any full solution
- **Plain-English error translator** — runtime errors get beginner-friendly explanations above the console
- **Gamification game loop** — XP, levels, daily streaks, daily quests, 13 badges, and a GitHub-style activity heatmap on your public portfolio
- **Global leaderboard** — live weekly / monthly / all-time brackets with glassmorphic rank rows, ascension frames and titles, and your own row glowing as it reorders
- **RPG ascension** — seven tiers (Initiate → Mythic) that change your avatar frame and unlock equippable titles, with a level ring and tier ladder on your profile
- **Guilds** — form a study group of up to 25, pool your XP on the guild board, and unlock collective rewards from Band to Legend
- **Interactive course elements** — drag-and-drop sequence challenges, a timed rapid-fire quiz mode with combo streaks and screen shake, and animated progress reveals
- **Live rendering + break-and-fix labs** — write HTML/CSS/Tailwind and watch the browser's own layout engine respond, or repair a genuinely broken program that is graded by running it: a green run that prints the wrong output still fails
- **Project milestones** — one continuous portfolio project split into six milestones, each gated on the lessons that teach the skill and worth 1,750 XP toward your rank
- **Printable certificates** — finish every lesson in a track to unlock a gold-sealed certificate
- **Progress that follows you** — lesson scores and project milestone claims are saved locally by default; optional Convex Auth email sign-in syncs both across devices
- **AI Socratic tutor (BYOK)** — bring your own Gemini or Claude key; it asks guiding questions instead of giving answers
- **PWA** — installable, with offline caching of lessons

## Gamification plan

The full feature plan behind the game layer — the XP economy, quest and streak
math, ascension tiers, guild rewards, the backend player-card model, and
drop-in snippets for every component — lives in **[GAMIFICATION.md](./GAMIFICATION.md)**.
The curriculum's interactive engine, the courses it unlocks, and the project
milestone layer are documented in
**[CURRICULUM-ROADMAP.md](./CURRICULUM-ROADMAP.md)**.

## Tech stack

Vite · React 18 · TypeScript · Tailwind CSS · React Router · Convex + Convex Auth (accounts & sync) · Vitest

## Getting started

```bash
npm install       # or bun install
npm run dev       # dev server on 0.0.0.0
npm test          # vitest suite
npm run typecheck # tsc -b --noEmit
npm run build     # production build → dist/
```

CI runs the same two checks — `bun run typecheck` and `bun run test` — on every
push to `main` and every pull request.

## Email sign-in (cloud sync)

The app works fully without a backend — progress lives in `localStorage`.
Accounts are built on **Convex Auth** (email/password, zero API keys in the
frontend):

- `src/convex/` — schema (auth tables + `progress`, `profiles`, `clans`), auth
  config, HTTP routes, and the `progress`/`users`/`profiles`/`leaderboard`/`clans`
  functions. Functions live in `src/convex` via `convex.json`.
- On sign-in the cloud copy is merged with local (best score per key wins);
  local changes debounce-push to the cloud while signed in.
- One `progress` row per user holds both maps: the numeric score map in `data`
  and the milestone claims in `claims`. They merge by different rules — best
  score per key, best claim per milestone — so they live in separate fields and
  are written by separate mutations (`progress.save` / `progress.saveClaims`)
  rather than one blob that both would clobber. The `claims` field is optional,
  so rows written before the project layer keep working with no migration.
- `profiles` is the public player card: XP totals per bracket, level,
  ascension tier, streak and guild. The client recomputes it from the progress
  map and pushes it, so leaderboard queries sort server-side without reading
  anyone's full progress blob.
- XP, quests and ascension are all **derived** from the progress map (see
  `src/lib/gamification.ts`) — no second source of truth, and every reward is
  replayable and testable without touching the backend.

The leaderboard, guild and milestone-claims panels need the Convex functions
deployed to production, and until they are, they show an inline "offline" state
instead of breaking the page. `.github/workflows/ci.yml` runs that deploy on
every push to `main` once a `CONVEX_DEPLOY_KEY` repository secret is set
(Convex dashboard → Project Settings → Production Deploy Key); without the
secret the job reports why and exits clean, so forks never fail. To do it by
hand instead: `bunx convex deploy`.

The app ships pointed at a public Convex deployment, so accounts, sync, and the
leaderboard work with no environment setup. The client URL is built from the
`CONVEX_DEPLOYMENT` constant in `src/AccountProvider.tsx` — change it there to
target a different deployment. A `VITE_CONVEX_URL` env var is deliberately not
consulted, so a `convex dev` localhost URL can never leak into a production build.

## License

MIT — free forever, as intended.

## Extra from sole owner

if you find any bugs or problems please i beg you to report it DM it to me on my discord account the username is " ado_zaryan " no caps 
and the display is " XARYAN " all caps Thank you! and please try your best ! :) .
