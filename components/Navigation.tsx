import Link from "next/link";

const navLinks = [
  { label: "Topics", href: "/#topics" },
  { label: "Questions", href: "/#questions" },
  { label: "About", href: "/#about-answer" },
  { label: "Practice", href: "/practice" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 px-3 py-3 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-lg border border-white/75 bg-white/90 px-4 shadow-lg shadow-slate-950/5 ring-1 ring-slate-900/5 sm:px-5 lg:px-6">
        <Link
          className="flex items-center gap-2 text-base font-bold tracking-tight text-slate-950"
          href="/"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-950 text-xs font-black text-white shadow-md shadow-slate-950/15">
            DI
          </span>
          <span>DevInterviewCoach</span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center rounded-md border border-slate-200 bg-slate-50/80 p-1 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              className="rounded-md px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-950 hover:shadow-sm"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          className="inline-flex min-h-10 items-center rounded-md bg-slate-950 px-4 text-sm font-semibold text-white shadow-md shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
          href="/practice"
        >
          Start practice
        </Link>
      </div>
    </header>
  );
}
