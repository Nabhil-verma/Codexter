# code-learn.reimagined

A 100% free, interactive code teacher. Ten tracks, 60+ hands-on lessons —
you write and run real code from minute one, in the browser, with zero signup.

**Live:** [codeimagine.freebuff.app](https://codeimagine.freebuff.app)

## What's inside

- **10 curriculum tracks** — Web foundations, React, backend/Node, DSA, Python, Git & testing, DevOps/Linux/Docker, web security (OWASP), system design, and debugging/testing practice
- **Live sandbox runner** — every lesson has an editor + console with self-checking exercises, "predict the output" challenges, and an infinite-loop guard
- **Visual execution engine** — step through code like Python Tutor: variables, call stack, and console replay line by line
- **Tiered hint system** — conceptual nudge → syntax reminder → code skeleton, before any full solution
- **Plain-English error translator** — runtime errors get beginner-friendly explanations above the console
- **Gamification** — XP, levels, daily streaks, 8 badges, and a GitHub-style activity heatmap on your public portfolio
- **Printable certificates** — finish every lesson in a track to unlock a gold-sealed certificate
- **Progress that follows you** — saved locally by default; optional Firebase email sign-in syncs it across devices
- **AI Socratic tutor (BYOK)** — bring your own Gemini or Claude key; it asks guiding questions instead of giving answers
- **PWA** — installable, with offline caching of lessons

## Tech stack

Vite · React 18 · TypeScript · Tailwind CSS · React Router · Firebase (optional, for cloud sync) · Vitest

## Getting started

```bash
npm install       # or bun install
npm run dev       # dev server on 0.0.0.0
npm test          # vitest suite
npm run typecheck # tsc -b --noEmit
npm run build     # production build → dist/
```

## Optional: email sign-in (cloud sync)

The app works fully without any backend — progress lives in `localStorage`.
To enable email/password accounts and cross-device sync, create a free
[Firebase](https://console.firebase.google.com) project, enable **Email/Password
sign-in** and **Realtime Database**, then set these env vars:

```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_DATABASE_URL
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

Without them, the app automatically falls back to local-only mode and the
sign-in page explains the situation instead of showing a broken form.

## License

MIT — free forever, as intended.
