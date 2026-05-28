import {
  Braces,
  Code2,
  FileCode2,
  Hexagon,
  Layers3,
  Server,
  type LucideIcon,
} from "lucide-react";

export type Topic = {
  title: string;
  summary: string;
  focus: string[];
  accent: string;
  Icon: LucideIcon;
};

export const topics: Topic[] = [
  {
    title: "Python",
    summary: "Write clear APIs, model data well, and explain performance tradeoffs.",
    focus: ["Typing and data models", "Async IO", "Testing and debugging"],
    accent: "bg-emerald-500",
    Icon: FileCode2,
  },
  {
    title: "JavaScript",
    summary: "Show that you understand the runtime, the event loop, and browser behavior.",
    focus: ["Closures and scope", "Promises", "DOM and fetch"],
    accent: "bg-amber-400",
    Icon: Braces,
  },
  {
    title: "TypeScript",
    summary: "Use types to make collaboration safer without over-engineering.",
    focus: ["Generics", "Narrowing", "Runtime boundaries"],
    accent: "bg-cyan-500",
    Icon: Code2,
  },
  {
    title: "Node.js",
    summary: "Build services that handle IO, failures, queues, and observability.",
    focus: ["Streams", "Error handling", "API design"],
    accent: "bg-lime-500",
    Icon: Server,
  },
  {
    title: "React",
    summary: "Reason about state, rendering, accessibility, and component design.",
    focus: ["Hooks", "Forms", "Performance"],
    accent: "bg-sky-500",
    Icon: Hexagon,
  },
  {
    title: "Next.js",
    summary: "Connect product UX with routing, data fetching, caching, and deployment.",
    focus: ["App Router", "Server Components", "Caching"],
    accent: "bg-rose-500",
    Icon: Layers3,
  },
];

export const seniorIntroAnswer =
  "I am a senior full-stack developer with 15 years of experience building web products from early prototypes through production systems. I have spent a lot of time in Python services, JavaScript and TypeScript codebases, Node.js APIs, and React or Next.js frontends, so I am comfortable moving between architecture, implementation, and product tradeoffs. What I enjoy most is taking an unclear problem, making it concrete with the team, and then shipping something reliable that users can actually feel. Over the years I have led technical decisions, mentored developers, improved testing and delivery habits, and worked closely with product and design partners. I usually bring calm execution, strong debugging instincts, and a practical view of how backend, frontend, infrastructure, and user experience fit together.";

export const seniorIntroStrengths = [
  "Starts with experience and product scope instead of a job-title recap.",
  "Mentions Python, JavaScript, TypeScript, Node.js, React, and Next.js naturally.",
  "Shows leadership through mentoring, technical decisions, and delivery habits.",
  "Connects engineering choices to user value and team collaboration.",
];
