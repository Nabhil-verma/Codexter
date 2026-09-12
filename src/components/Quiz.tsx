import { useState } from "react";
import type { QuizQuestion } from "../data/curriculum";

type Props = {
  questions: QuizQuestion[];
  onScore: (score: number) => void;
};

export default function Quiz({ questions, onScore }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = questions.every((_, i) => answers[i] !== undefined);
  const score = questions.filter((q, i) => answers[i] === q.answer).length / questions.length;

  const submit = () => {
    setSubmitted(true);
    onScore(score);
  };

  const retry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="card p-6">
      <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-mint-400">
        Quiz — prove it
      </h3>
      <div className="mt-4 space-y-6">
        {questions.map((q, qi) => (
          <fieldset key={qi}>
            <legend className="mb-2 font-medium text-white">
              {qi + 1}. {q.q}
            </legend>
            <div className="grid gap-2">
              {q.options.map((opt, oi) => {
                const chosen = answers[qi] === oi;
                const isCorrect = submitted && oi === q.answer;
                const isWrongPick = submitted && chosen && oi !== q.answer;
                return (
                  <label
                    key={oi}
                    className={
                      "flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm transition " +
                      (isCorrect
                        ? "border-mint-500 bg-mint-500/10 text-mint-300"
                        : isWrongPick
                          ? "border-red-500/60 bg-red-500/10 text-red-300"
                          : chosen
                            ? "border-mint-500/60 bg-ink-800 text-white"
                            : "border-ink-700 text-slate-300 hover:border-ink-600 hover:bg-ink-800/60")
                    }
                  >
                    <input
                      type="radio"
                      name={"q" + qi}
                      className="accent-mint-500"
                      checked={chosen}
                      disabled={submitted}
                      onChange={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                    />
                    <span className="font-mono text-xs text-slate-500">
                      {String.fromCharCode(65 + oi)}
                    </span>
                    {opt}
                  </label>
                );
              })}
            </div>
            {submitted && (
              <p className="mt-2 text-sm text-slate-400">{q.explanation}</p>
            )}
          </fieldset>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        {!submitted ? (
          <button
            onClick={submit}
            disabled={!allAnswered}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            Check answers
          </button>
        ) : (
          <>
            <span
              className={
                "font-mono text-sm font-bold " +
                (score === 1 ? "text-mint-400" : "text-yellow-400")
              }
            >
              Score: {questions.filter((q, i) => answers[i] === q.answer).length}/
              {questions.length}
              {score === 1 ? " — perfect! 🎉" : " — review and retry"}
            </span>
            <button onClick={retry} className="btn-ghost !px-3 !py-1.5 text-sm">
              Retry
            </button>
          </>
        )}
      </div>
    </div>
  );
}
