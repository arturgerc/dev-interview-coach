import type { Difficulty, InterviewQuestion } from "@/lib/questions";

type QuestionCardProps = {
  question: InterviewQuestion;
};

const difficultyStyles: Record<Difficulty, string> = {
  Junior: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  Middle: "bg-sky-50 text-sky-800 ring-sky-200",
  Senior: "bg-teal-50 text-teal-800 ring-teal-200",
};

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-lg shadow-slate-950/5 ring-1 ring-white/80 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-950/10">
      <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-slate-950 px-3 py-1 text-xs font-black uppercase tracking-wide text-white shadow-sm">
            {question.topic}
          </span>
          <span
            className={`rounded-md px-3 py-1 text-xs font-black ring-1 ${difficultyStyles[question.difficulty]}`}
          >
            {question.difficulty}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-black leading-snug text-slate-950">
          {question.question}
        </h3>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 text-sm leading-6 text-slate-600">
        <div className="rounded-md border border-slate-200 bg-slate-50/70 p-4">
          <p className="font-black uppercase tracking-wide text-slate-950">
            Short answer
          </p>
          <p className="mt-2">{question.shortAnswer}</p>
        </div>
        <div className="rounded-md border border-teal-200 bg-teal-50/70 p-4">
          <p className="font-black uppercase tracking-wide text-teal-950">
            Senior-style answer
          </p>
          <p className="mt-2 text-slate-700">{question.seniorAnswer}</p>
        </div>
        <div className="rounded-md border border-sky-200 bg-sky-50/70 p-4">
          <p className="font-black uppercase tracking-wide text-sky-950">
            Common mistake
          </p>
          <p className="mt-2 text-slate-700">{question.commonMistake}</p>
        </div>
      </div>
    </article>
  );
}
