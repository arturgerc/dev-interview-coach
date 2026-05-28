import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DevInterviewCoach | Full-Stack Developer Interview Prep",
  description:
    "A focused interview preparation website for Python, JavaScript, TypeScript, Node.js, React, and Next.js developers.",
  openGraph: {
    title: "DevInterviewCoach",
    description:
      "Practice full-stack interview questions with human-style answers and senior-level framing.",
    images: ["/images/interview-coach-dashboard.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
