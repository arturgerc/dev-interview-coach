import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ImageCard } from "@/components/ImageCard";

const sellingPoints = [
  "Train with real full-stack questions",
  "Learn how senior developers explain tradeoffs",
  "Build confident interview answers",
];

export function VisualFeatureSection() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <ImageCard
          alt="Laptop desk setup prepared for a full-stack mock interview"
          label="Mock interview"
          src="/images/interview-desk.svg"
          title="A calm workspace for structured answers"
        />

        <div>
          <p className="inline-flex rounded-md border border-teal-200 bg-white/75 px-3 py-1 text-xs font-black uppercase tracking-wide text-teal-800 shadow-sm">
            Guided rehearsal
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Practice like it is a real interview
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Move from passive reading to active rehearsal. DevInterviewCoach
            gives you realistic prompts, compact explanations, and senior-level
            answer patterns you can actually say out loud.
          </p>

          <ul className="mt-8 grid gap-3">
            {sellingPoints.map((point) => (
              <li
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white/85 p-4 shadow-sm"
                key={point}
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                />
                <span className="font-bold text-slate-800">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/practice">Start Practice Arena</ButtonLink>
            <ButtonLink href="#questions" variant="secondary">
              Browse questions
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
