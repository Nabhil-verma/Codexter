import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import LessonBody from "../components/LessonBody";
import Playground from "../components/Playground";
import Quiz from "../components/Quiz";
import {
  findTrack,
  findLesson,
  lessonKey,
  type QuizQuestion,
} from "../data/curriculum";
import { loadProgress, useProgress } from "../lib/progress";

export default function Lesson() {
  const { trackId, lessonId } = useParams();
  const track = findTrack(trackId ?? "");
  const lesson = findLesson(trackId ?? "", lessonId ?? "");
  const { record } = useProgress();
  const [exerciseDone, setExerciseDone] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setExerciseDone(false);
  }, [trackId, lessonId]);

  if (!track || !lesson) {
    return (
      <div className="min-h-screen">
        <Nav />
        <main className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-white">Lesson not found</h1>
          <Link to="/learn" className="btn-primary mt-6">
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
    if (score >= 1) record(key, 1);
  };

  const completed = (loadProgress().completed[key] ?? 0) >= 1;

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="font-mono text-xs text-slate-500">
          <Link to="/learn" className="hover:text-mint-300">
            lessons
          </Link>{" "}
          / {track.title}
        </p>
        <h1 className="mt-2 flex items-center gap-3 text-3xl font-extrabold text-white">
          <span>{track.emoji}</span> {lesson.title}
        </h1>
        <p className="mt-1 font-mono text-xs text-slate-500">
          {lesson.minutes} min ·{" "}
          {completed ? (
            <span className="text-mint-400">✓ completed</span>
          ) : (
            "in progress"
          )}
        </p>

        {/* 1. Read */}
        <section className="mt-8">
          <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-mint-400">
            1 · Read
          </h2>
          <LessonBody lesson={lesson} />
        </section>

        {/* 2. Run */}
        <section className="mt-10">
          <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-mint-400">
            2 · Run
          </h2>
          <Playground
            starter={lesson.starter}
            check={lesson.check}
            onPass={() => setExerciseDone(true)}
          />
        </section>

        {/* 3. Prove it */}
        <section className="mt-10">
          <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-mint-400">
            3 · Prove it
          </h2>
          <Quiz questions={quiz} onScore={handleScore} />
        </section>

        {/* Prev / next */}
        <nav className="mt-12 flex items-center justify-between gap-3 border-t border-ink-700 pt-6">
          {prev ? (
            <Link
              to={"/learn/" + track.id + "/" + prev.id}
              className="btn-ghost !px-4 !py-2 text-sm"
            >
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={"/learn/" + track.id + "/" + next.id}
              className="btn-primary !px-4 !py-2 text-sm"
            >
              {next.title} →
            </Link>
          ) : (
            <Link to="/learn" className="btn-primary !px-4 !py-2 text-sm">
              Finish track 🎉
            </Link>
          )}
        </nav>
        {exerciseDone && (
          <p className="mt-4 text-center font-mono text-xs text-mint-400">
            exercise passed — finish the quiz with 100% to complete the lesson
          </p>
        )}
      </main>
    </div>
  );
}
