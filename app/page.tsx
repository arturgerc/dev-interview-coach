import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { HeroVisual } from "@/components/HeroVisual";
import { Navigation } from "@/components/Navigation";
import { QuestionBank } from "@/components/QuestionBank";
import { SectionHeader } from "@/components/SectionHeader";
import { SeniorProfile } from "@/components/SeniorProfile";
import { TopicCard } from "@/components/TopicCard";
import { seniorIntroAnswer, seniorIntroStrengths, topics } from "@/lib/content";

const strengths = [
  "Practice by stack, seniority, and concept",
  "Compare short answers with senior-style framing",
  "Avoid common mistakes before the interview",
];

const heroBadges = [
  "Senior-ready",
  "Real interview answers",
  "Full-stack focused",
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />

      <section className="relative px-6 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_35%_18%,rgba(14,165,233,0.18),transparent_34rem)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <span
                  className="inline-flex rounded-md border border-teal-200 bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-wide text-teal-800 shadow-sm"
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              DevInterviewCoach for senior-ready full-stack interviews
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
              A premium practice workspace for Python, JavaScript, TypeScript,
              Node.js, React, and Next.js interviews. Search realistic prompts,
              study stronger answers, and rehearse with calm structure.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#questions">Open question bank</ButtonLink>
              <ButtonLink href="#topics" variant="secondary">
                Explore topics
              </ButtonLink>
            </div>
            <ul className="mt-10 grid gap-3 rounded-lg border border-white/75 bg-white/75 p-4 text-sm text-slate-700 shadow-lg shadow-slate-950/5 ring-1 ring-slate-900/5 sm:grid-cols-3">
              {strengths.map((item) => (
                <li className="flex items-start gap-2 rounded-md bg-white/70 p-3" key={item}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-lg border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-teal-950 p-5 text-white shadow-2xl shadow-slate-950/15 sm:grid-cols-3">
          <div className="rounded-md border border-white/10 bg-white/10 p-5">
            <p className="text-3xl font-black">6</p>
            <p className="mt-1 text-sm font-medium text-slate-300">
              Core technologies
            </p>
          </div>
          <div className="rounded-md border border-white/10 bg-white/10 p-5">
            <p className="text-3xl font-black">18</p>
            <p className="mt-1 text-sm font-medium text-slate-300">
              Searchable questions
            </p>
          </div>
          <div className="rounded-md border border-white/10 bg-white/10 p-5">
            <p className="text-3xl font-black">Real voice</p>
            <p className="mt-1 text-sm font-medium text-slate-300">
              Clear, natural responses
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8" id="topics">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Topic map"
            title="A focused map for full-stack interviews"
            description="Each topic is shaped around what interviewers actually look for: fundamentals, tradeoffs, debugging habits, and clear communication under pressure."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <TopicCard key={topic.title} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-y border-white/70 bg-gradient-to-b from-white/80 to-slate-50/90 px-6 py-24 lg:px-8"
        id="questions"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Question bank"
            title="Search, filter, and rehearse smarter"
            description="Practice with junior, middle, and senior questions across the core full-stack tools. Each card includes a concise answer, a stronger senior-style answer, and a common trap to avoid."
          />
          <QuestionBank />
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8" id="about-answer">
        <SeniorProfile
          answer={seniorIntroAnswer}
          strengths={seniorIntroStrengths}
        />
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-8 text-white shadow-2xl shadow-slate-950/20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-teal-200">
              Practice session
            </p>
            <h2 className="mt-2 text-2xl font-black">
              Ready to rehearse out loud?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Pick one stack, answer one question, then refine the answer until
              it sounds like a real conversation.
            </p>
          </div>
          <ButtonLink href="#questions" variant="secondary">
            Open question bank
          </ButtonLink>
        </div>
      </section>

      <Footer />
    </main>
  );
}
