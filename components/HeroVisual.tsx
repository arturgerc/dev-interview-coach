import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-sky-200/40 via-white/50 to-emerald-200/40 blur-2xl" />
      <div className="absolute -left-4 top-8 z-10 hidden rounded-md border border-emerald-200/80 bg-white/95 px-4 py-3 text-sm font-bold text-emerald-950 shadow-xl shadow-emerald-950/10 ring-1 ring-white/80 md:block">
        Senior-ready
      </div>
      <div className="absolute -bottom-5 right-4 z-10 hidden rounded-md border border-sky-200/80 bg-white/95 px-4 py-3 text-sm font-bold text-sky-950 shadow-xl shadow-sky-950/10 ring-1 ring-white/80 sm:block">
        Real interview answers
      </div>
      <div className="relative rounded-lg border border-white/70 bg-slate-950 p-2 shadow-2xl shadow-slate-950/20 ring-1 ring-slate-900/10">
        <Image
          src="/images/interview-coach-dashboard.png"
          alt="Interview coaching dashboard with code review, system design, and mentor call panels"
          width={1536}
          height={1024}
          priority
          className="aspect-[4/3] w-full rounded-md border border-slate-800 object-cover"
        />
        <div className="pointer-events-none absolute inset-2 rounded-md bg-gradient-to-t from-slate-950/20 via-transparent to-white/10" />
      </div>
    </div>
  );
}
