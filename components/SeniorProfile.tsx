import { CheckCircle2 } from "lucide-react";

type SeniorProfileProps = {
  answer: string;
  strengths: string[];
};

export function SeniorProfile({ answer, strengths }: SeniorProfileProps) {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-teal-700">
          Senior profile
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Tell me about yourself
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          A polished example for a senior full-stack developer with 15 years of
          experience.
        </p>
      </div>

      <div className="grid gap-5">
        <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl hover:shadow-slate-950/10">
          <p className="text-lg leading-8 text-slate-700">{answer}</p>
        </article>

        <div className="rounded-lg border border-teal-200 bg-teal-50/80 p-6">
          <h3 className="text-lg font-bold text-slate-950">
            Why this answer works
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {strengths.map((strength) => (
              <li className="flex items-start gap-3 text-sm text-slate-700" key={strength}>
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-teal-700"
                />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
