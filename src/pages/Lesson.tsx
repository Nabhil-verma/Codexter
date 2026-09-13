import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import LessonBody from "../components/LessonBody";
import Playground from "../components/Playground";
import CssSandbox from "../components/CssSandbox";
import GitSim from "../components/GitSim";
import PredictOutput from "../components/PredictOutput";
import Quiz from "../components/Quiz";
import {
  findTrack,
  findLesson,
  lessonKey,
  type QuizQuestion,
} from "../data";
import { useProgress, useProgressState, scoreFor } from "../lib/progress";
import { todayKey } from "../lib/gamification";

export default function Lesson() {
  const { trackId, lessonId } = useParams();
  const track = findTrack(trackId ?? "");
  const lesson = findLesson(trackId ?? "", lessonId ?? "");
  const { record } = useProgress();
  const progressState = useProgressState();
  const [exerciseDone, setExerciseDone] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setExerciseDone(false);
  }, [trackId, lessonId]);

  if (!track || !lesson) {
    return (
      <div className="min-h-screen">
        <Nav />
        <main className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-semibold text-ink-950">
            Lesson not found
          </h1>
          <Link to="/learn" className="btn-primary mt-8">
            Back to lessons
          </Link>
        </main>
      </div>
    );
  }

  const key = lessonKey(track.id, lesson.id);
  const idx = track.lessons.findIndex((l) => l.id === lesson.id);
  const prev = track.lessons[idx - 1];
  const next = track.lessons[idx + 1];
  const quiz: QuizQuestion[] = lesson.quiz;

  const handleScore = (score: number) => {
    if (score >= 1) record(key, 1, todayKey());
  };

  const completed = scoreFor(progressState, key) >= 1;

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <p className="font-mono text-xs text-ink-600">
          <Link to="/learn" className="hover:text-gold-600">
            lessons
          </Link>{" "}
          / {track.title}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-950">
          {lesson.title}
        </h1>
        <p className="mt-2 flex items-center gap-3 font-mono text-xs text-ink-600">
          <span>{lesson.minutes} min</span>
          <span className="text-gold-500">·</span>
          <span>
            {lesson.starter
              ? "interactive"
              : lesson.gitSim
                ? "terminal"
                : lesson.sandbox
                  ? "visual"
                  : "reading"}
          </span>
          <span className="text-gold-500">·</span>
          {completed ? (
            <span className="text-gold-600">✓ completed</span>
          ) : (
            <span>in progress</span>
          )}
        </p>

        {/* 1. Read */}
        <section className="mt-12">
          <h2 className="eyebrow mb-4">Ⅰ · Read</h2>
          <LessonBody lesson={lesson} />
        </section>

        {/* 2. Run — code playground or visual sandbox */}
        {lesson.starter && (
          <section className="mt-14">
            <h2 className="eyebrow mb-4">Ⅱ · Run</h2>
            <Playground
              starter={lesson.starter}
              check={lesson.check}
              onPass={() => setExerciseDone(true)}
            />
          </section>
        )}
        {lesson.sandbox && (
          <section className="mt-14">
            <h2 className="eyebrow mb-4">Ⅱ · Play</h2>
            <CssSandbox onPass={() => setExerciseDone(true)} />
          </section>
        )}
        {lesson.gitSim && (
          <section className="mt-14">
            <h2 className="eyebrow mb-4">Ⅱ · Do</h2>
            <GitSim objectives={lesson.gitSim} />
          </section>
        )}

        {/* 2.5 Predict — mental execution practice */}
        {lesson.predict && lesson.predict.length > 0 && (
          <PredictOutput steps={lesson.predict} />
        )}

        {/* 3. Prove it */}
        <section className="mt-14">
          <h2 className="eyebrow mb-4">
            {lesson.starter || lesson.sandbox || lesson.gitSim ? "Ⅲ" : "Ⅱ"} · Prove it
          </h2>
          <Quiz questions={quiz} onScore={handleScore} />
        </section>

        {/* Prev / next */}
        <nav className="mt-16 flex items-center justify-between gap-3 border-t border-paper-200 pt-8">
          {prev ? (
            <Link
              to={"/learn/" + track.id + "/" + prev.id}
              className="btn-ghost !px-5 !py-2 text-sm"
            >
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={"/learn/" + track.id + "/" + next.id}
              className="btn-primary !px-5 !py-2 text-sm"
            >
              {next.title} →
            </Link>
          ) : (
            <Link to="/learn" className="btn-gold !px-5 !py-2 text-sm">
              Finish track 🎉
            </Link>
          )}
        </nav>
        {exerciseDone && (
          <p className="mt-6 text-center font-mono text-xs text-gold-600">
            exercise passed — finish the quiz with 100% to complete the lesson
          </p>
        )}
      </main>
    </div>
  );
}
