# Codexter

A 100% free, interactive code teacher. Thirteen tracks, 74 hands-on lessons —
you write and run real code from minute one, in the browser, with easy signup.

**Live:** [nnghedico.freebuff.app](https://nnghedico.freebuff.app)

## What's inside

- **13 curriculum tracks** — Web foundations, React, Tailwind UI engineering, advanced React state, API integration, backend/Node, DSA, Python, Git & testing, DevOps/Linux/Docker, web security (OWASP), system design, and debugging/testing practice
- **Live sandbox runner** — every lesson has an editor + console with self-checking exercises, "predict the output" challenges, and an infinite-loop guard
- **Visual execution engine** — step through code like Python Tutor: variables, call stack, and console replay line by line
- **Tiered hint system** — conceptual nudge → syntax reminder → code skeleton, before any full solution
- **Plain-English error translator** — runtime errors get beginner-friendly explanations above the console
- **Gamification game loop** — XP, levels, daily streaks, daily quests, 13 badges, and a GitHub-style activity heatmap on your public portfolio
- **Global leaderboard** — live weekly / monthly / all-time brackets with glassmorphic rank rows, ascension frames and titles, and your own row glowing as it reorders
- **RPG ascension** — seven tiers (Initiate → Mythic) that change your avatar frame and unlock equippable titles, with a level ring and tier ladder on your profile
- **Guilds** — form a study group of up to 25, pool your XP on the guild board, and unlock collective rewards from Band to Legend
- **Interactive course elements** — drag-and-drop sequence challenges, a timed rapid-fire quiz mode with combo streaks and screen shake, and animated progress reveals
- **Printable certificates** — finish every lesson in a track to unlock a gold-sealed certificate
- **Progress that follows you** — saved locally by default; optional Convex Auth email sign-in syncs it across devices
- **AI Socratic tutor (BYOK)** — bring your own Gemini or Claude key; it asks guiding questions instead of giving answers
- **PWA** — installable, with offline caching of lessons

## Gamification plan

The full feature plan behind the game layer — the XP economy, quest and streak
math, ascension tiers, guild rewards, the backend player-card model, and
drop-in snippets for every component — lives in **[GAMIFICATION.md](./GAMIFICATION.md)**.

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

## Email sign-in (cloud sync)

The app works fully without a backend — progress lives in `localStorage`.
Accounts are built on **Convex Auth** (email/password, zero API keys in the
frontend):

- `src/convex/` — schema (auth tables + `progress`, `profiles`, `clans`), auth
  config, HTTP routes, and the `progress`/`users`/`profiles`/`leaderboard`/`clans`
  functions. Functions live in `src/convex` via `convex.json`.
- On sign-in the cloud copy is merged with local (best score per key wins);
  local changes debounce-push to the cloud while signed in.
- `profiles` is the public player card: XP totals per bracket, level,
  ascension tier, streak and guild. The client recomputes it from the progress
  map and pushes it, so leaderboard queries sort server-side without reading
  anyone's full progress blob.
- XP, quests and ascension are all **derived** from the progress map (see
  `src/lib/gamification.ts`) — no second source of truth, and every reward is
  replayable and testable without touching the backend.

Deploy the new functions with `npx convex deploy` before the leaderboard and
Guilds panels can load in production; until then those panels show an inline
"offline" state instead of breaking the page.

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
