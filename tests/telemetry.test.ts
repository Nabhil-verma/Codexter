// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import {
  appendAttempt,
  attemptsFor,
  attemptCount,
  bestScore,
  chanceLadderMean,
  elementCompleted,
  firstScore,
  loadTelemetry,
  recordAttempt,
  resetTelemetry,
  reviewGate,
  type Attempt,
} from "../src/lib/telemetry";

/*
 * The progress map keeps a best-ever score, which is exactly the number the
 * pilot's gates cannot use: a persistent guesser converges to full credit
 * without ever demonstrating the skill. This log is what makes
 * "first attempt" and "which element passed" answerable — so it has to be
 * sanitized, capped, and deterministic.
 */

const LESSON = "agents/verifying-agent-output";

function attempt(over: Partial<Attempt> = {}): Attempt {
  return {
    key: LESSON,
    element: "diff",
    score: 0.4,
    day: "2026-10-03",
    at: 1,
    ...over,
  };
}

afterEach(() => resetTelemetry());

describe("attempt log", () => {
  it("records attempts and reads them back", () => {
    recordAttempt({ key: LESSON, element: "diff", score: 0.4, day: "2026-10-03", at: 10 });
    recordAttempt({ key: LESSON, element: "rubric", score: 1, day: "2026-10-03", at: 20 });

    const t = loadTelemetry();
    expect(t.attempts).toHaveLength(2);
    expect(attemptsFor(t, LESSON, "diff")).toHaveLength(1);
    expect(attemptCount(t, LESSON)).toBe(2);
  });

  it("keeps zero scores — a failed first attempt is the datum the gate needs", () => {
    recordAttempt({ key: LESSON, element: "diff", score: 0, day: "2026-10-03", at: 1 });
    const t = loadTelemetry();
    expect(attemptCount(t, LESSON, "diff")).toBe(1);
    expect(firstScore(t, LESSON, "diff")).toBe(0);
  });

  it("caps the log at the newest N attempts", () => {
    let t = { attempts: [] as Attempt[] };
    for (let i = 0; i < 5; i++) t = appendAttempt(t, attempt({ at: i }), 3);
    expect(t.attempts.map((a) => a.at)).toEqual([2, 3, 4]);
  });

  it("drops malformed stored entries instead of throwing", () => {
    localStorage.setItem(
      "clr-attempts-v1",
      JSON.stringify({
        attempts: [
          attempt({ at: 1 }),
          { key: "", element: "diff", score: 0.4, day: "2026-10-03", at: 2 },
          { key: LESSON, element: "not-a-grader", score: 0.4, day: "2026-10-03", at: 3 },
          { key: LESSON, element: "diff", score: "oops", day: "2026-10-03", at: 4 },
          { key: LESSON, element: "diff", score: 2, day: "2026-10-03", at: 5 },
          null,
        ],
      })
    );
    const t = loadTelemetry();
    // Only the two valid entries survive; the out-of-range score is clamped.
    expect(t.attempts).toHaveLength(2);
    expect(t.attempts[1].score).toBe(1);
  });

  it("rejects entirely invalid input without writing", () => {
    recordAttempt({
      key: LESSON,
      element: "diff",
      score: Number.NaN,
      day: "2026-10-03",
    });
    expect(loadTelemetry().attempts).toHaveLength(0);
  });
});

describe("gate statistics", () => {
  it("reports the first attempt, the best attempt and the attempt count", () => {
    recordAttempt({ key: LESSON, element: "diff", score: 0.4, day: "2026-10-03", at: 10 });
    recordAttempt({ key: LESSON, element: "diff", score: 0.7, day: "2026-10-04", at: 20 });
    recordAttempt({ key: LESSON, element: "diff", score: 1, day: "2026-10-05", at: 30 });

    const gate = reviewGate(loadTelemetry(), LESSON);
    expect(gate.attempts).toBe(3);
    expect(gate.first).toBe(0.4);
    expect(gate.best).toBe(1);
    expect(gate.firstClearedLine).toBe(false);
    expect(gate.firstFullCredit).toBe(false);
  });

  it("attributes completion to the element, not the lesson key", () => {
    recordAttempt({ key: LESSON, element: "quiz", score: 1, day: "2026-10-03", at: 1 });
    const t = loadTelemetry();
    // The whole reason telemetry exists: a flawless quiz completed the lesson
    // key but the rubric has not been attempted at all.
    expect(elementCompleted(t, LESSON, "quiz")).toBe(true);
    expect(elementCompleted(t, LESSON, "rubric")).toBe(false);
    expect(bestScore(t, LESSON, "rubric")).toBe(0);
  });

  it("exposes the chance baseline the ladder must beat", () => {
    // The shipped exercise: 5 files, 101 after-side lines.
    expect(chanceLadderMean(5, 101)).toBeCloseTo(0.0814, 4);
    expect(chanceLadderMean(0, 10)).toBe(0);
    expect(chanceLadderMean(5, 0)).toBe(0);
  });
});
