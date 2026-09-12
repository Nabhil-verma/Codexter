import { describe, it, expect } from "vitest";
import { tracks, findLesson, lessonKey, totalLessonCount } from "../src/data";
import { runUserCode, evaluateCheck } from "../src/lib/runner";

const allLessons = tracks.flatMap((t) =>
  t.lessons.map((l) => ({ track: t, lesson: l }))
);

describe("curriculum integrity", () => {
  it("has seven tracks", () => {
    expect(tracks).toHaveLength(7);
  });

  it("has unique track ids", () => {
    const ids = tracks.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("has unique lesson ids per track", () => {
    for (const t of tracks) {
      const ids = t.lessons.map((l) => l.id);
      expect(new Set(ids).size, `track ${t.id}`).toBe(ids.length);
    }
  });

  it("every lesson has body, minutes, and a quiz", () => {
    for (const { track, lesson } of allLessons) {
      expect(lesson.body.length, `${track.id}/${lesson.id}`).toBeGreaterThan(40);
      expect(lesson.minutes, `${track.id}/${lesson.id}`).toBeGreaterThan(0);
      expect(lesson.quiz.length, `${track.id}/${lesson.id}`).toBeGreaterThanOrEqual(2);
    }
  });

  it("every quiz question has a valid answer index and ≥3 options", () => {
    for (const { track, lesson } of allLessons) {
      lesson.quiz.forEach((q, i) => {
        expect(
          q.options.length,
          `${track.id}/${lesson.id} q${i}`
        ).toBeGreaterThanOrEqual(3);
        expect(q.answer, `${track.id}/${lesson.id} q${i}`).toBeGreaterThanOrEqual(0);
        expect(q.answer, `${track.id}/${lesson.id} q${i}`).toBeLessThan(q.options.length);
        expect(q.explanation.length, `${track.id}/${lesson.id} q${i}`).toBeGreaterThan(5);
      });
    }
  });

  it("lesson lookups work", () => {
    expect(findLesson("web", "css-layout")?.sandbox).toBe(true);
    expect(findLesson("dsa", "graphs-bfs-dfs")).toBeTruthy();
    expect(findLesson("nope", "nope")).toBeUndefined();
    expect(lessonKey("web", "css-layout")).toBe("web/css-layout");
  });

  it("total count matches the sum of lessons", () => {
    expect(totalLessonCount).toBe(allLessons.length);
    expect(totalLessonCount).toBeGreaterThanOrEqual(30);
  });

  it(
    "every interactive starter runs cleanly and every check expression compiles",
    async () => {
      const runnable = allLessons.filter(
        ({ lesson }) => lesson.starter && lesson.check
      );
      expect(runnable.length).toBeGreaterThan(8);

      for (const { track, lesson } of runnable) {
        // TODO-style exercises intentionally leave the starter incomplete —
        // completing it is the student's task. The app guarantees are:
        // first Run shows output (no crash) and the check expression is
        // valid JS (evaluateCheck swallows syntax errors as `false`, so
        // nothing else would catch a typo).
        const result = await runUserCode(lesson.starter!);
        const out = result.logs.join("\n");
        expect(
          result.error,
          `${track.id}/${lesson.id} errored: ${result.error}`
        ).toBeNull();
        expect(
          out.length,
          `${track.id}/${lesson.id} starter produced no output`
        ).toBeGreaterThan(0);
        expect(() => {
          new Function("output", `return (${lesson.check!.expr});`);
        }, `${track.id}/${lesson.id} check.expr must compile`).not.toThrow();
      }
    },
    60_000
  );
});
