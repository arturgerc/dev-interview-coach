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

export type Question = {
  question: string;
  answer: string;
  tag: string;
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

export const sampleQuestions: Question[] = [
  {
    tag: "Python",
    question: "How would you keep a Python API fast as the amount of data grows?",
    answer:
      "I start by measuring instead of guessing. I would look at database query plans, add pagination where the response can grow, avoid repeated work inside request handlers, and cache only the data that is stable enough to be cached safely. If the slow part is IO, I may move it to async code or a background job. If it is CPU-heavy, I would isolate it and consider a worker process so the API stays responsive.",
  },
  {
    tag: "TypeScript",
    question: "When do you use TypeScript types, and when do you use runtime validation?",
    answer:
      "TypeScript is great for code I own because it catches mistakes before the app runs. Runtime validation is still needed at boundaries, like HTTP requests, environment variables, webhooks, or data from a queue. My usual rule is: types protect the inside of the system, validation protects the edges.",
  },
  {
    tag: "Node.js",
    question: "How do you handle async errors in a Node.js service?",
    answer:
      "I keep errors visible and intentional. Route handlers should pass failures to one central error layer, background jobs should retry only when the operation is safe to retry, and logs should include enough context to debug the issue later. I also separate expected errors, like a missing record, from unexpected errors, like a database timeout.",
  },
  {
    tag: "React and Next.js",
    question: "How do Server Components change the way you fetch data?",
    answer:
      "They let me fetch data closer to where it is used without shipping that data-fetching code to the browser. I still think carefully about caching, loading states, and what must be interactive. A good pattern is to keep the first render server-friendly, then use client components only for the parts that truly need browser state or event handlers.",
  },
];

export const seniorIntroAnswer =
  "I am a senior full-stack developer with 15 years of experience building web products from early prototypes through production systems. Most of my work has been across Python services, JavaScript and TypeScript applications, Node.js APIs, and React or Next.js frontends. I like being close to both product thinking and engineering details: understanding the user problem, shaping the architecture, then helping the team ship something maintainable. In recent roles I have led technical decisions, mentored developers, improved testing and delivery practices, and worked with stakeholders to turn unclear requirements into practical releases. What I usually bring to a team is calm execution, strong debugging instincts, and the ability to connect backend, frontend, infrastructure, and product context.";
