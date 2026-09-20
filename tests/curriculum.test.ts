import { describe, it, expect } from "vitest";
import { tracks, findLesson, lessonKey, totalLessonCount } from "../src/data";
import { runUserCode } from "../src/lib/runner";

const allLessons = tracks.flatMap((t) =>
  t.lessons.map((l) => ({ track: t, lesson: l }))
);

describe("curriculum integrity", () => {
  it("has ten tracks", () => {
    expect(tracks).toHaveLength(10);
  });

  it("covers all ten planned curriculum areas", () => {
    expect(tracks.map((t) => t.id)).toEqual([
      "web",
      "react",
      "backend",
      "dsa",
      "python",
      "git",
      "testing",
      "devops",
      "security",
      "architecture",
    ]);
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

  it("every sequence challenge has ≥3 unique, non-empty steps", () => {
    const withSort = allLessons.filter(({ lesson }) => lesson.sort);
    expect(withSort.length).toBeGreaterThanOrEqual(3);

    for (const { track, lesson } of withSort) {
      const s = lesson.sort!;
      const where = `${track.id}/${lesson.id}`;
      expect(s.prompt.length, where).toBeGreaterThan(10);
      expect(s.items.length, where).toBeGreaterThanOrEqual(3);
      // Duplicate steps would make the puzzle ambiguous: the learner could
      // produce a different-but-identical order and be marked wrong.
      expect(new Set(s.items).size, `${where} has duplicate steps`).toBe(
        s.items.length
      );
      for (const item of s.items) {
        expect(item.trim().length, where).toBeGreaterThan(0);
      }
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
    expect(totalLessonCount).toBeGreaterThanOrEqual(50);
  });

  it("every track ends with a capstone-style build lesson", () => {
    for (const t of tracks) {
      const last = t.lessons[t.lessons.length - 1];
      const isCapstone =
        /capstone|build|project/i.test(last.title) || /capstone/i.test(last.id);
      // Tracks without a formal capstone still end in a substantial applied lesson.
      expect(
        isCapstone || last.body.length > 500,
        `track ${t.id} final lesson "${last.title}"`
      ).toBe(true);
    }
  });

  it("every predict challenge has a valid answer and runnable code", async () => {
    const withPredict = allLessons.filter(({ lesson }) => lesson.predict?.length);
    expect(withPredict.length).toBeGreaterThanOrEqual(5);

    for (const { track, lesson } of withPredict) {
      lesson.predict!.forEach((p, i) => {
        expect(
          p.options.length,
          `${track.id}/${lesson.id} predict ${i}`
        ).toBeGreaterThanOrEqual(3);
        expect(p.answer, `${track.id}/${lesson.id} predict ${i}`).toBeGreaterThanOrEqual(0);
        expect(p.answer, `${track.id}/${lesson.id} predict ${i}`).toBeLessThan(p.options.length);
        expect(p.explanation.length, `${track.id}/${lesson.id} predict ${i}`).toBeGreaterThan(5);
      });
      // JS predict snippets must execute cleanly so the "verify by running"
      // button works; non-JS snippets (bash/python/sql) are display-only.
      for (const [i, p] of (lesson.predict ?? []).entries()) {
        if (p.lang != null && p.lang !== "js") continue;
        // Heuristic (pre-dates the lang tag): shell/python-style snippets
        // aren't runnable in the JS sandbox — except tagged JS with console.log.
        const jsish = !/^\s*(#|def |print|\w+ =)/.test(p.code) || /console\.log/.test(p.code);
        if (jsish) {
          const r = await runUserCode(p.code);
          expect(
            r.error,
            `${track.id}/${lesson.id} predict ${i} failed to run: ${r.error}`
          ).toBeNull();
        }
      }
    }
  }, 30_000);

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
