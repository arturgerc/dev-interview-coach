import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PracticeArena } from "@/components/PracticeArena";

export const metadata: Metadata = {
  title: "Practice Arena | DevInterviewCoach",
  description:
    "Practice full-stack interview questions interactively with streaks, filters, answers, and confidence scoring.",
};

export default function PracticePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative px-6 py-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(14,165,233,0.28),transparent_28rem),radial-gradient(circle_at_90%_5%,rgba(16,185,129,0.22),transparent_26rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 rounded-lg border border-white/10 bg-white/10 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            <Link
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
              href="/"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to home
            </Link>
            <div className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-wide text-teal-100">
              <span className="rounded-md border border-teal-300/20 bg-teal-300/10 px-3 py-1">
                Practice Arena
              </span>
              <span className="rounded-md border border-sky-300/20 bg-sky-300/10 px-3 py-1">
                Local only
              </span>
            </div>
          </div>

          <div className="grid gap-8 py-12 lg:grid-cols-[0.82fr_1.18fr] lg:py-16">
            <div>
              <p className="inline-flex rounded-md border border-teal-300/25 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-wide text-teal-100">
                Mock Interview Practice
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl">
                Practice Arena
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Step through one question at a time, reveal stronger answers,
                build a streak, and track your confidence before the real
                interview.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["18", "question prompts"],
                ["6", "full-stack topics"],
                ["3", "difficulty levels"],
                ["0", "external APIs"],
              ].map(([value, label]) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/10 p-5 shadow-lg shadow-slate-950/20"
                  key={label}
                >
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-300">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PracticeArena />
    </main>
  );
}
