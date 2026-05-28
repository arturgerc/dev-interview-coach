import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-slate-950 to-slate-800 text-white shadow-xl shadow-slate-950/20 hover:from-slate-900 hover:to-teal-900"
      : "border border-slate-300/80 bg-white/90 text-slate-900 shadow-sm hover:border-slate-400 hover:bg-white hover:shadow-md";

  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${styles}`}
      href={href}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
