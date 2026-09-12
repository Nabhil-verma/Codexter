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

/** A "predict the output" challenge: pick an answer, then verify by running it. */
export type PredictStep = {
  prompt: string;
  code: string;
  options: string[];
  answer: number;
  explanation: string;
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

export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  /** Reading lessons have no runnable exercise — body + quiz only */
  reading?: boolean;
  /** Mounts the visual CSS flexbox/grid sandbox instead of the code playground */
  sandbox?: boolean;
  /** Mounts the guided Git terminal simulator instead of the code playground */
  gitSim?: GitObjective[];
  /** Predict-the-output challenges shown after the body */
  predict?: PredictStep[];
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
