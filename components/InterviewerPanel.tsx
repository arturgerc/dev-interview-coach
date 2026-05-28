import Image from "next/image";
import { Bot, Sparkles } from "lucide-react";

type InterviewerPanelProps = {
  topic: string;
  difficulty: string;
  streak: number;
  confidence: number;
};

export function InterviewerPanel({
  topic,
  difficulty,
  streak,
  confidence,
}: InterviewerPanelProps) {
  return (
    <aside className="rounded-lg border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-teal-300 to-sky-400 text-slate-950 shadow-xl shadow-teal-950/20">
          <Bot aria-hidden="true" className="h-8 w-8" />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-slate-950 bg-emerald-300" />
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-teal-200">
            AI interviewer
          </p>
          <h2 className="text-xl font-black text-white">Maya, Staff Engineer</h2>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-300">
        I will ask one focused question at a time. Reveal the answer when you
        have spoken your own version out loud.
      </p>

      <div className="mt-6 overflow-hidden rounded-md border border-white/10 bg-white">
        <Image
          alt="Mock interview video call illustration"
          className="aspect-[4/3] w-full object-cover"
          height={600}
          src="/images/mock-interview.svg"
          width={800}
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-md border border-white/10 bg-slate-950/35 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            Current topic
          </p>
          <p className="mt-1 font-black text-white">{topic}</p>
        </div>
        <div className="rounded-md border border-white/10 bg-slate-950/35 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            Difficulty
          </p>
          <p className="mt-1 font-black text-white">{difficulty}</p>
        </div>
        <div className="rounded-md border border-white/10 bg-slate-950/35 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            Streak
          </p>
          <p className="mt-1 font-black text-emerald-300">{streak}</p>
        </div>
        <div className="rounded-md border border-white/10 bg-slate-950/35 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            Confidence
          </p>
          <p className="mt-1 font-black text-sky-300">{confidence}%</p>
        </div>
      </div>

      <div className="mt-6 rounded-md border border-teal-300/20 bg-teal-300/10 p-4">
        <div className="flex items-center gap-2 text-sm font-black text-teal-100">
          <Sparkles aria-hidden="true" className="h-4 w-4" />
          Coach tip
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Answer first, then compare. The goal is not memorization; it is calm,
          specific reasoning.
        </p>
      </div>
    </aside>
  );
}
