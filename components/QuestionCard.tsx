import type { Question } from "@/lib/content";

type QuestionCardProps = {
  question: Question;
};

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="mb-4 inline-flex rounded-md bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-800">
        {question.tag}
      </p>
      <h3 className="text-lg font-bold leading-snug text-slate-950">
        {question.question}
      </h3>
      <p className="mt-4 text-base leading-7 text-slate-600">{question.answer}</p>
    </article>
  );
}
