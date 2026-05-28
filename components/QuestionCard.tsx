import type { Difficulty, InterviewQuestion } from "@/lib/questions";

type QuestionCardProps = {
  question: InterviewQuestion;
};

const difficultyStyles: Record<Difficulty, string> = {
  Junior: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  Middle: "bg-amber-50 text-amber-800 ring-amber-200",
  Senior: "bg-rose-50 text-rose-800 ring-rose-200",
};

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-950/10">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {question.topic}
        </span>
        <span
          className={`rounded-md px-3 py-1 text-xs font-bold ring-1 ${difficultyStyles[question.difficulty]}`}
        >
          {question.difficulty}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold leading-snug text-slate-950">
        {question.question}
      </h3>

      <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
        <div>
          <p className="font-bold text-slate-950">Short answer</p>
          <p className="mt-1">{question.shortAnswer}</p>
        </div>
        <div>
          <p className="font-bold text-slate-950">Senior-style answer</p>
          <p className="mt-1">{question.seniorAnswer}</p>
        </div>
        <div className="rounded-md border border-amber-200 bg-amber-50 p-4">
          <p className="font-bold text-amber-950">Common mistake</p>
          <p className="mt-1 text-amber-900">{question.commonMistake}</p>
        </div>
      </div>
    </article>
  );
}
