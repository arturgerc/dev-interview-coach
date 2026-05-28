import { AlertTriangle, ChevronDown, Lightbulb } from "lucide-react";
import type { InterviewQuestion } from "@/lib/questions";

type PracticeCardProps = {
  question: InterviewQuestion;
  showAnswer: boolean;
  showSeniorAnswer: boolean;
  onToggleSeniorAnswer: () => void;
};

export function PracticeCard({
  question,
  showAnswer,
  showSeniorAnswer,
  onToggleSeniorAnswer,
}: PracticeCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200/80 bg-white text-slate-950 shadow-2xl shadow-slate-950/15 ring-1 ring-white/80">
      <div className="border-b border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-md bg-slate-950 px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
            {question.topic}
          </span>
          <span className="rounded-md border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-black text-teal-800">
            {question.difficulty}
          </span>
        </div>
        <p className="mt-6 text-sm font-black uppercase tracking-wide text-teal-700">
          Interview question
        </p>
        <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl">
          {question.question}
        </h2>
      </div>

      <div className="space-y-4 p-6 sm:p-8">
        {showAnswer ? (
          <>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-slate-950">
                <Lightbulb aria-hidden="true" className="h-4 w-4 text-teal-700" />
                Short answer
              </div>
              <p className="mt-3 leading-7 text-slate-700">
                {question.shortAnswer}
              </p>
            </div>

            <div className="rounded-lg border border-teal-200 bg-gradient-to-br from-teal-50 to-sky-50">
              <button
                className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-black uppercase tracking-wide text-teal-950 transition hover:bg-white/45"
                onClick={onToggleSeniorAnswer}
                type="button"
              >
                Senior-style answer
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 transition ${
                    showSeniorAnswer ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showSeniorAnswer ? (
                <p className="border-t border-teal-200/70 px-5 pb-5 pt-4 leading-7 text-slate-700">
                  {question.seniorAnswer}
                </p>
              ) : null}
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-amber-950">
                <AlertTriangle aria-hidden="true" className="h-4 w-4" />
                Common mistake
              </div>
              <p className="mt-3 leading-7 text-amber-950">
                {question.commonMistake}
              </p>
            </div>
          </>
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <p className="text-lg font-black text-slate-950">
              Speak your answer first.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Then reveal the coaching notes and compare your structure,
              specificity, and tradeoffs.
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
