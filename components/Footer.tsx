const footerLinks = [
  { label: "Topics", href: "#topics" },
  { label: "Questions", href: "#questions" },
  { label: "About", href: "#about-answer" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm font-semibold text-slate-900">DevInterviewCoach</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <a
              className="text-sm text-slate-600 transition hover:text-slate-950"
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
