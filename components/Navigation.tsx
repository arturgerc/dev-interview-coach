import Link from "next/link";

const navLinks = [
  { label: "Topics", href: "#topics" },
  { label: "Questions", href: "#questions" },
  { label: "About", href: "#about-answer" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link className="text-base font-bold tracking-tight text-slate-950" href="/">
          DevInterviewCoach
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="inline-flex min-h-10 items-center rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          href="#questions"
        >
          Start practice
        </a>
      </div>
    </header>
  );
}
