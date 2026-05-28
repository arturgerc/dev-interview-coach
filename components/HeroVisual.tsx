import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -left-5 top-8 hidden rounded-md border border-emerald-200 bg-white/90 px-4 py-3 text-sm font-semibold text-emerald-900 shadow-lg shadow-emerald-950/10 md:block">
        6 core stacks
      </div>
      <div className="absolute -bottom-5 right-4 z-10 hidden rounded-md border border-amber-200 bg-white/90 px-4 py-3 text-sm font-semibold text-amber-950 shadow-lg shadow-amber-950/10 sm:block">
        Human answers
      </div>
      <Image
        src="/images/interview-coach-dashboard.png"
        alt="Interview coaching dashboard with code review, system design, and mentor call panels"
        width={1536}
        height={1024}
        priority
        className="aspect-[4/3] w-full rounded-lg border border-slate-200 object-cover shadow-2xl shadow-slate-950/15"
      />
    </div>
  );
}
