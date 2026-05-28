const footerLinks = [
  { label: "Topics", href: "#topics" },
  { label: "Questions", href: "#questions" },
  { label: "About", href: "#about-answer" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm font-black text-slate-950">DevInterviewCoach</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <a
              className="rounded-md px-2 py-1 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
