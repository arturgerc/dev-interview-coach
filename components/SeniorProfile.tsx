import { CheckCircle2 } from "lucide-react";

type SeniorProfileProps = {
  answer: string;
  strengths: string[];
};

export function SeniorProfile({ answer, strengths }: SeniorProfileProps) {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
      <div className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-7 text-white shadow-2xl shadow-slate-950/20">
        <p className="inline-flex rounded-md border border-teal-300/25 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-wide text-teal-100">
          Senior profile
        </p>
        <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Tell me about yourself
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          A polished example for a senior full-stack developer with 15 years of
          experience.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="rounded-md border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-black">15</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
              Years
            </p>
          </div>
          <div className="rounded-md border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-black">6</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
              Stacks
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5">
        <article className="rounded-lg border border-slate-200/80 bg-white p-7 shadow-xl shadow-slate-950/5 ring-1 ring-white/80 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/10">
          <p className="text-lg leading-8 text-slate-700">{answer}</p>
        </article>

        <div className="rounded-lg border border-teal-200/80 bg-gradient-to-br from-teal-50 to-sky-50 p-6 shadow-sm">
          <h3 className="text-lg font-black text-slate-950">
            Why this answer works
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {strengths.map((strength) => (
              <li
                className="flex items-start gap-3 rounded-md border border-white/80 bg-white/70 p-3 text-sm text-slate-700 shadow-sm"
                key={strength}
              >
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
