export type Check = {
  /** JS expression evaluated against the user's `output`; must return truthy to pass */
  expr: string;
  /** Kept as a fallback when a lesson has no tiered `hints` */
  hint: string;
  /** Optional 3-tier hint ladder: concept → syntax → partial code */
  hints?: Hint[];
};

/** One rung of the tiered hint ladder. */
export type Hint = {
  /** 1 = conceptual nudge, 2 = syntax reminder, 3 = partial code */
  tier: 1 | 2 | 3;
  /** Text of the hint (tier 3 may contain short code) */
  text: string;
};

export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
};

/** A "predict the output" challenge: pick an answer, then verify by running it. */
export type PredictStep = {
  prompt: string;
  code: string;
  options: string[];
  answer: number;
  explanation: string;
  /** Language of `code` — non-JS snippets are displayed but not executed. */
  lang?: "js" | "bash" | "python" | "sql";
};

/**
 * A drag-to-order puzzle: the learner reconstructs a sequence (box model layers,
 * middleware pipeline, exception block) instead of reading it.
 */
export type SortChallenge = {
  prompt: string;
  /** The correct order, top to bottom. */
  items: string[];
  explanation?: string;
};

/** Objective for the guided Git terminal simulator. */
export type GitObjective = {
  /** Description shown to the learner */
  text: string;
  /** Any command satisfying this predicate completes the objective.
   * `state` is the simulator snapshot just before the command ran. */
  match: (
    parts: { cmd: string; args: string[] },
    state?: { branch: string; conflicts: string | null; ahead: number }
  ) => boolean;
};

/**
 * A break-and-fix puzzle. `fixCheck` is a JS expression evaluated against the
 * captured console output, so a repair is graded by behaviour and not by text:
 * a green run that prints the wrong thing still fails.
 */
export type DebugChallenge = {
  id: string;
  title: string;
  brief: string;
  /** the damaged program the learner starts from */
  broken: string;
  /** expression over `output` that only a genuinely repaired program satisfies */
  fixCheck: string;
  /** success message shown once the fix passes */
  win: string;
  /** tiered hints, revealed one at a time */
  hints: Hint[];
  /** what the bug actually was — deliberately the last resort */
  solution: string;
  /** reference repair, executed by the test suite */
  fix: string;
};

/**
 * A live-rendering sandbox: the learner edits HTML/CSS/JS and sees the
 * browser's own layout engine respond. Grading is structural — `requires`
 * lists the selectors the finished markup must satisfy.
 */
export type PreviewSpec = {
  /** what to build, in one line */
  goal: string;
  /** why it matters / how it's graded */
  brief: string;
  /** starter markup */
  html: string;
  css?: string;
  js?: string;
  /** CSS selectors the finished markup must match (graded in-frame) */
  requires?: string[];
  /** Tailwind's Play CDN is injected unless this is "none" */
  framework?: "tailwind" | "none";
};

export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  /** Reading lessons have no runnable exercise — body + quiz only */
  reading?: boolean;
  /** Run this exercise through the real TypeScript compiler: type-check,
   * strip types, then execute in the shared JS sandbox. */
  lang?: "ts";
  /** Break-and-fix lab — graded by running the repaired program */
  debug?: DebugChallenge;
  /** Live-rendering sandbox for markup, layout and styling lessons */
  preview?: PreviewSpec;
  /** Mounts the visual CSS flexbox/grid sandbox instead of the code playground */
  sandbox?: boolean;
  /** Mounts the guided Git terminal simulator instead of the code playground */
  gitSim?: GitObjective[];
  /** Predict-the-output challenges shown after the body */
  predict?: PredictStep[];
  /** Drag-and-drop ordering challenge shown before the quiz */
  sort?: SortChallenge;
  /** Markdown-lite: paragraphs separated by \n\n, `code`, **bold**, and ```fenced``` blocks */
  body: string;
  starter?: string;
  check?: Check;
  quiz: QuizQuestion[];
};

export type Track = {
  id: string;
  title: string;
  blurb: string;
  /** Roman numeral shown in the premium design instead of an emoji */
  numeral: string;
  lessons: Lesson[];
};
