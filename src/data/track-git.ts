import type { Track } from "./types";

export const gitTrack: Track = {
  id: "git",
  title: "Git, GitHub & Workflows",
  blurb: "Version control, branches, PRs, and shipping pipelines — how teams actually work.",
  numeral: "Ⅵ",
  lessons: [
    {
      id: "git-basics",
      title: "Git Foundations: Staging & Commits",
      minutes: 9,
      reading: true,
      body: `Git stores your project as a chain of **snapshots** (commits). Three areas matter:

\`\`\`
working directory  →  staging area  →  repository
   (your edits)      (git add)        (git commit)
\`\`\`

The **staging area** is the killer feature: compose a commit deliberately instead of dumping everything.

\`\`\"
git init                     # start tracking a project
git status                   # what changed, what's staged
git add index.html           # stage one file
git add -p                   # stage piece by piece (hunk by hunk!)
git commit -m "Add hero section"
git log --oneline --graph    # history at a glance
\`\`\`

**Commit messages are documentation.** Subject in imperative mood, ≤50 chars, blank line, then the *why*:

\`\`\"
Fix overflow on mobile hero

The hero image pushed CTA below the fold on 375px screens;
constrain by viewport height instead of fixed px.
\`\`\`

**The safety net:**
- \`git diff\` — unstaged changes · \`git diff --staged\` — what's about to be committed
- \`git restore file\` — discard uncommitted edits to a file
- \`git restore --staged file\` — unstage (keep the edits)
- \`git commit --amend\` — fix the last commit (before pushing!)

Commits are cheap checkpoints. Small, single-purpose commits make bugs bisectable (\`git bisect\` finds the culprit commit by binary search) and reviews readable.`,
      quiz: [
        {
          q: "git add does what?",
          options: ["Commits", "Moves changes into the staging area", "Pushes", "Creates a branch"],
          answer: 1,
          explanation: "Staging selects exactly what the next commit will contain.",
        },
        {
          q: "A good commit message subject is…",
          options: [
            "'update'",
            "Imperative, ≤50 chars: 'Fix mobile hero overflow'",
            "All caps",
            "The date",
          ],
          answer: 1,
          explanation: "It completes 'this commit will…' — imperative and specific.",
        },
        {
          q: "git restore --staged file.js will…",
          options: [
            "Delete the file",
            "Unstage it, keeping your edits",
            "Discard the edits",
            "Commit it",
          ],
          answer: 1,
          explanation: "It rewinds the staging area, not the working tree.",
        },
        {
          q: "Why small commits?",
          options: [
            "More contributions look good",
            "Bisectable history and readable reviews",
            "Git requires it",
            "They compress better",
          ],
          answer: 1,
          explanation: "git bisect binary-searches history — it needs granular commits.",
        },
        {
          q: "git diff --staged shows…",
          options: [
            "Changes since the last push",
            "What the next commit will contain vs HEAD",
            "Other branches",
            "Deleted files only",
          ],
          answer: 1,
          explanation: "It diffs staging area against the last commit.",
        },
      ],
    },
    {
      id: "git-branches",
      title: "Branches & Resolving Conflicts",
      minutes: 10,
      reading: true,
      body: `A **branch** is just a movable pointer to a commit — creating one is instant and free.

\`\`\"
git switch -c feature/login     # create + move to a new branch
# ...work, commit...
git switch main
git merge feature/login         # bring the work back
\`\`\`

**A fast-forward** moves the pointer when main hasn't diverged. When both branches committed, git makes a **merge commit** — or stops to ask for help:

\`\`\"
<<<<<<< HEAD
const timeout = 30;        // your branch's version
=======
const timeout = 60;        // incoming branch's version
>>>>>>> feature/timeout
\`\`\`

**Resolving a conflict = editing the file to the correct combined result**, then \`git add\` + \`git commit\`. The markers are questions git is asking you, not errors.

**Conflict-prevention habits:**
- Pull/rebase often — small drift, small conflicts
- Small branches, short lives
- One topic per branch
- Agree on file ownership within the team

**Team convention (GitHub flow):** branch per feature → push → **Pull Request** → review → merge → delete branch. The PR is where code review, CI checks, and discussion live — the conversation is as valuable as the code.

\`git pull\` = fetch + merge from the remote. On shared branches, prefer \`git pull --rebase\` to keep history linear (your local commits replay on top of the latest remote).`,
      quiz: [
        {
          q: "A branch is…",
          options: [
            "A copy of the whole folder",
            "A movable pointer to a commit",
            "A remote backup",
            "A tag",
          ],
          answer: 1,
          explanation: "Branches are 41-byte pointer files — creating them is O(1).",
        },
        {
          q: "Conflict markers mean…",
          options: [
            "Git is broken",
            "Both branches changed the same lines — git needs a human decision",
            "The file is corrupted",
            "You must delete the file",
          ],
          answer: 1,
          explanation:
            "Edit to the correct result, add, and commit to complete the merge.",
        },
        {
          q: "After resolving conflicts you must…",
          options: ["git abort", "git add the files and commit the merge", "re-clone", "nothing"],
          answer: 1,
          explanation: "Staging the resolved files signals 'decision made'.",
        },
        {
          q: "A Pull Request is primarily…",
          options: [
            "A git command",
            "A proposal to merge + the venue for review and CI",
            "An error report",
            "A backup",
          ],
          answer: 1,
          explanation: "PR = review conversation + checks gating a merge.",
        },
        {
          q: "git pull --rebase instead of plain pull keeps…",
          options: [
            "Local commits replayed on top — linear history",
            "Everything on main",
            "Merge commits out of your feature work",
            "Both a and c",
          ],
          answer: 3,
          explanation:
            "Rebase replays your work onto the remote tip — no merge bubbles from pulls.",
        },
      ],
    },
    {
      id: "git-ci",
      title: "CI/CD: Shipping Automatically",
      minutes: 9,
      reading: true,
      body: `**CI (Continuous Integration)** — every push builds and tests the code automatically. **CD (Continuous Delivery/Deployment)** — passing builds ship to users without ceremony.

\`\`\"
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run typecheck
      - run: npm test
      - run: npm run build
\`\`\`

That file turns every push into a gate: typecheck, test, build. A PR that breaks any check **cannot merge** — review focuses on design, not "does it run".

**Pipeline stages, in order of cheapness:**
1. Lint + typecheck (seconds)
2. Unit tests (seconds–minutes)
3. Build (minutes)
4. Deploy to a **preview** environment per PR
5. Manual promote → production

**The deployment contract:** env vars/secrets live in the platform's settings (\`DATABASE_URL\`, API keys) — never in git; builds must be reproducible (lockfiles committed); deploys are immutable artifacts that you can roll back.

**Preview deployments are underrated** — every PR gets a real URL (this very app deploys that way). Reviewers click, not pull-and-run.

Culture note: green main is sacred. If CI goes red, fixing it outranks new work — a broken main blocks the whole team.`,
      quiz: [
        {
          q: "CI's core promise is…",
          options: [
            "Faster laptops",
            "Every push is automatically built and tested",
            "No bugs ever",
            "Free hosting",
          ],
          answer: 1,
          explanation: "Integration happens continuously, so breakage surfaces in minutes.",
        },
        {
          q: "Where do production secrets belong?",
          options: [
            "Committed .env",
            "The platform's environment/secret settings",
            "In the README",
            "In the Dockerfile",
          ],
          answer: 1,
          explanation: "Secrets are injected at deploy time — never in version control.",
        },
        {
          q: "What gates a merge in a mature setup?",
          options: [
            "Gut feeling",
            "CI checks passing (typecheck, tests, build)",
            "The CEO's approval",
            "Nothing",
          ],
          answer: 1,
          explanation: "Branch protection + required checks = green-main discipline.",
        },
        {
          q: "Cheapest pipeline stage to run first?",
          options: ["E2E tests", "Lint + typecheck", "Deploy", "Load tests"],
          answer: 1,
          explanation: "Fail fast: seconds-level checks before expensive builds.",
        },
        {
          q: "A preview deployment gives…",
          options: [
            "A live URL per PR for reviewers",
            "A fake environment",
            "Only production",
            "A local server",
          ],
          answer: 0,
          explanation: "Reviewers experience the change without touching their setup.",
        },
      ],
    },
  ],
};
