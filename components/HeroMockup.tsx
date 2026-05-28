import Image from "next/image";

export function HeroMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-sky-200/40 via-white/50 to-emerald-200/40 blur-2xl" />

      <div className="absolute -left-4 top-8 z-20 hidden rounded-md border border-emerald-200/80 bg-white/95 px-4 py-3 text-sm font-black text-emerald-950 shadow-xl shadow-emerald-950/10 ring-1 ring-white/80 md:block">
        Senior-ready
      </div>
      <div className="absolute -bottom-5 right-4 z-20 hidden rounded-md border border-sky-200/80 bg-white/95 px-4 py-3 text-sm font-black text-sky-950 shadow-xl shadow-sky-950/10 ring-1 ring-white/80 sm:block">
        Real interview answers
      </div>

      <div className="relative overflow-hidden rounded-lg border border-white/70 bg-slate-950 p-3 shadow-2xl shadow-slate-950/20 ring-1 ring-slate-900/10">
        <div className="grid gap-3 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-md border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <span className="rounded-md bg-teal-400/15 px-2 py-1 text-xs font-black text-teal-200">
                Live prep
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-md border border-slate-800 bg-slate-950 p-4">
                <p className="text-xs font-black uppercase tracking-wide text-sky-300">
                  Code editor
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    "bg-teal-300",
                    "bg-sky-300",
                    "bg-violet-300",
                    "bg-slate-500",
                    "bg-emerald-300",
                    "bg-slate-600",
                  ].map((color, index) => (
                    <div className="flex items-center gap-3" key={index}>
                      <span className="w-5 text-right text-xs text-slate-600">
                        {index + 1}
                      </span>
                      <span
                        className={`h-2.5 rounded-full ${color}`}
                        style={{ width: `${54 + index * 8}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-md border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs font-black uppercase tracking-wide text-teal-300">
                    Interview call
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-md bg-gradient-to-br from-teal-300 to-sky-400 text-xl font-black text-slate-950">
                      M
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2.5 rounded-full bg-slate-600" />
                      <div className="h-2.5 w-2/3 rounded-full bg-slate-700" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-md border border-slate-800 bg-slate-900 p-4">
                    <p className="text-2xl font-black text-white">18</p>
                    <p className="text-xs text-slate-400">questions</p>
                  </div>
                  <div className="rounded-md border border-slate-800 bg-slate-900 p-4">
                    <p className="text-2xl font-black text-emerald-300">6</p>
                    <p className="text-xs text-slate-400">stacks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="overflow-hidden rounded-md border border-slate-800 bg-white">
              <Image
                alt="Coffee and coding workspace illustration"
                className="aspect-[4/3] w-full object-cover"
                height={600}
                src="/images/coding-coffee.svg"
                width={800}
                priority
              />
            </div>
            <div className="rounded-md border border-slate-800 bg-slate-900 p-4">
              <p className="text-xs font-black uppercase tracking-wide text-violet-200">
                Floating question
              </p>
              <p className="mt-2 text-sm font-bold leading-6 text-white">
                Explain the tradeoff, not just the definition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
