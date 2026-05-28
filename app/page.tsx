import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { HeroVisual } from "@/components/HeroVisual";
import { Navigation } from "@/components/Navigation";
import { QuestionCard } from "@/components/QuestionCard";
import { SectionHeader } from "@/components/SectionHeader";
import { TopicCard } from "@/components/TopicCard";
import { sampleQuestions, seniorIntroAnswer, topics } from "@/lib/content";

const strengths = [
  "Practice questions organized by real full-stack skills",
  "Answers written in a natural interview voice",
  "Senior-level framing for architecture and tradeoffs",
];

export default function Home() {
  return (
    <main>
      <Navigation />

      <section className="overflow-hidden px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="inline-flex rounded-md border border-teal-200 bg-white/80 px-3 py-1 text-sm font-semibold text-teal-800">
              Full-stack interview preparation
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              DevInterviewCoach
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
              A clean practice hub for developers preparing for Python,
              JavaScript, TypeScript, Node.js, React, and Next.js interviews.
              Build answers that sound experienced, specific, and human.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#questions">Practice sample questions</ButtonLink>
              <ButtonLink href="#topics" variant="secondary">
                Explore topics
              </ButtonLink>
            </div>
            <ul className="mt-10 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              {strengths.map((item) => (
                <li className="flex items-start gap-2" key={item}>
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

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-8 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-bold">6</p>
            <p className="mt-1 text-sm text-slate-300">Core technologies</p>
          </div>
          <div>
            <p className="text-3xl font-bold">15 yrs</p>
            <p className="mt-1 text-sm text-slate-300">Senior answer example</p>
          </div>
          <div>
            <p className="text-3xl font-bold">Real voice</p>
            <p className="mt-1 text-sm text-slate-300">Clear, natural responses</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8" id="topics">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Topic map"
            title="Prepare across the full stack"
            description="Each topic is shaped around what interviewers usually look for: fundamentals, tradeoffs, debugging habits, and how you communicate under pressure."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <TopicCard key={topic.title} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/65 px-6 py-20 lg:px-8" id="questions">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Practice answers"
            title="Sample interview questions"
            description="Use these examples as starting points, then adapt them to your own projects, constraints, and decisions."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {sampleQuestions.map((question) => (
              <QuestionCard key={question.question} question={question} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8" id="about-answer">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-teal-700">
              Senior introduction
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Tell me about yourself
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              A concise answer for a senior full-stack developer with 15 years
              of experience.
            </p>
          </div>
          <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-lg leading-8 text-slate-700">{seniorIntroAnswer}</p>
          </article>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg border border-slate-200 bg-slate-950 p-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Ready to rehearse out loud?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Pick one stack, answer one question, then refine the answer until
              it sounds like a real conversation.
            </p>
          </div>
          <ButtonLink href="#questions" variant="secondary">
            Go to questions
          </ButtonLink>
        </div>
      </section>

      <Footer />
    </main>
  );
}
