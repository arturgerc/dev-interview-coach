export type QuestionTopic =
  | "Python"
  | "JavaScript"
  | "TypeScript"
  | "Node.js"
  | "React"
  | "Next.js";

export type Difficulty = "Junior" | "Middle" | "Senior";

export type InterviewQuestion = {
  id: number;
  topic: QuestionTopic;
  difficulty: Difficulty;
  question: string;
  shortAnswer: string;
  seniorAnswer: string;
  commonMistake: string;
};

export const questionTopics: QuestionTopic[] = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
];

export const difficulties: Difficulty[] = ["Junior", "Middle", "Senior"];

export const questionBank: InterviewQuestion[] = [
  {
    id: 1,
    topic: "Python",
    difficulty: "Junior",
    question: "What is the difference between a list and a tuple in Python?",
    shortAnswer:
      "A list is mutable, while a tuple is immutable. Lists are better for data that changes; tuples are useful for fixed grouped values.",
    seniorAnswer:
      "I usually explain it as intent plus behavior. A list says this collection may change, so it supports append, remove, and item assignment. A tuple says this group of values should stay fixed, which makes it useful for coordinates, lightweight records, return values, or dictionary keys when the contained values are also hashable.",
    commonMistake:
      "Saying tuples are always faster without explaining mutability, intent, or hashability.",
  },
  {
    id: 2,
    topic: "Python",
    difficulty: "Middle",
    question: "How would you avoid slow database access in a Python API?",
    shortAnswer:
      "Measure queries, add indexes, avoid N+1 access, paginate large responses, and cache stable data when it is safe.",
    seniorAnswer:
      "I would start with profiling and query plans because the slow part is often not Python itself. Then I would remove N+1 queries, select only needed columns, add the right indexes, use pagination for unbounded lists, and cache data that has clear invalidation rules. If the endpoint depends on slow external work, I would move that work to a background job and return a clear status to the client.",
    commonMistake:
      "Adding caching first without knowing the bottleneck or how cached data will be invalidated.",
  },
  {
    id: 3,
    topic: "Python",
    difficulty: "Senior",
    question: "When would you use async Python, and when would you avoid it?",
    shortAnswer:
      "Use async for high-concurrency IO-bound work. Avoid it for CPU-heavy work unless you move that work to workers or separate processes.",
    seniorAnswer:
      "Async Python is a good fit when a service spends most of its time waiting on network, database, or file IO and needs to handle many concurrent requests. I would avoid treating async as a speed button for CPU-heavy tasks because the event loop can still be blocked. For CPU-heavy work, I would look at worker processes, queues, or specialized services, and I would keep sync code if the complexity of async does not buy us a real operational benefit.",
    commonMistake:
      "Using async everywhere while still calling blocking libraries inside the event loop.",
  },
  {
    id: 4,
    topic: "JavaScript",
    difficulty: "Junior",
    question: "What is a closure in JavaScript?",
    shortAnswer:
      "A closure is when a function keeps access to variables from the scope where it was created, even after that outer function has finished.",
    seniorAnswer:
      "A closure is a function plus the lexical environment it was created in. In day-to-day code, closures show up in callbacks, event handlers, factory functions, and hooks. They are powerful because they let us keep private state, but they can also surprise people when a callback reads an old value or accidentally keeps a large object alive.",
    commonMistake:
      "Only giving a memorized definition and not connecting it to real callback or state behavior.",
  },
  {
    id: 5,
    topic: "JavaScript",
    difficulty: "Middle",
    question: "How does the JavaScript event loop handle promises and timers?",
    shortAnswer:
      "Promise callbacks run as microtasks before the browser or Node.js moves to the next macrotask, such as a timer callback.",
    seniorAnswer:
      "JavaScript runs one call stack at a time. When async work completes, promise handlers go into the microtask queue, while timers and many IO callbacks go into task queues. After the current stack finishes, the runtime drains microtasks before moving to the next task. That is why a resolved promise callback usually runs before a zero-delay timeout.",
    commonMistake:
      "Assuming setTimeout with zero milliseconds runs immediately.",
  },
  {
    id: 6,
    topic: "JavaScript",
    difficulty: "Senior",
    question: "How do you debug memory leaks in a JavaScript application?",
    shortAnswer:
      "Reproduce the leak, take heap snapshots, compare retained objects, and look for listeners, timers, caches, or references that never get cleaned up.",
    seniorAnswer:
      "I try to make the leak repeatable first. Then I use browser or Node profiling tools to compare heap snapshots before and after the suspected workflow. Common causes are event listeners that are not removed, intervals that keep running, unbounded caches, subscriptions that outlive components, and closures retaining large objects. The fix should include a regression check, because leaks often return when cleanup paths are not tested.",
    commonMistake:
      "Blaming the framework before checking retained references and cleanup paths.",
  },
  {
    id: 7,
    topic: "TypeScript",
    difficulty: "Junior",
    question: "Why would you use TypeScript instead of plain JavaScript?",
    shortAnswer:
      "TypeScript catches many mistakes before runtime and makes code easier to understand, refactor, and collaborate on.",
    seniorAnswer:
      "TypeScript is useful because it documents intent in a way the editor and compiler can enforce. It helps teams make safer changes, especially around shared models, API responses, and component props. I still remember that TypeScript does not validate runtime data by itself, so anything coming from users, APIs, or environment variables needs validation at the boundary.",
    commonMistake:
      "Saying TypeScript prevents all bugs or replaces runtime validation.",
  },
  {
    id: 8,
    topic: "TypeScript",
    difficulty: "Middle",
    question: "What is type narrowing, and why does it matter?",
    shortAnswer:
      "Type narrowing is when TypeScript refines a broad type into a more specific type after checks like typeof, in, or custom guards.",
    seniorAnswer:
      "Type narrowing lets us write code that handles each possible shape safely. For example, if a value can be a string or an object, a runtime check lets TypeScript understand which branch we are in. I use narrowing heavily around union types, API state, form data, and error handling because it makes impossible states harder to represent.",
    commonMistake:
      "Using type assertions instead of checking the value at runtime.",
  },
  {
    id: 9,
    topic: "TypeScript",
    difficulty: "Senior",
    question: "How do you design shared TypeScript types for a growing product?",
    shortAnswer:
      "Keep shared types close to real contracts, avoid giant catch-all models, and validate external data before trusting it.",
    seniorAnswer:
      "I prefer types that reflect actual boundaries: request payloads, response shapes, domain entities, and UI view models. I avoid one massive type that every layer mutates slightly because it becomes fragile. For a growing product, I separate external contracts from internal models, use narrow unions for states, keep generated or schema-backed types where useful, and make runtime validation explicit at system edges.",
    commonMistake:
      "Sharing one broad type everywhere until every property becomes optional.",
  },
  {
    id: 10,
    topic: "Node.js",
    difficulty: "Junior",
    question: "What makes Node.js good for backend APIs?",
    shortAnswer:
      "Node.js is strong for IO-heavy APIs because it uses an event-driven model and has a large ecosystem for web services.",
    seniorAnswer:
      "Node is a practical choice for APIs that spend a lot of time waiting on databases, network calls, queues, or file IO. Its event-driven model makes concurrency efficient for those workloads, and sharing TypeScript between frontend and backend can reduce friction. I would still evaluate CPU-heavy tasks carefully because they can block the event loop unless moved to workers or separate services.",
    commonMistake:
      "Claiming Node is best for every backend workload without mentioning CPU-bound limits.",
  },
  {
    id: 11,
    topic: "Node.js",
    difficulty: "Middle",
    question: "How do you handle errors in an Express or Node API?",
    shortAnswer:
      "Use consistent error handling middleware, separate expected from unexpected errors, log context, and avoid leaking internal details to clients.",
    seniorAnswer:
      "I want one clear path for errors. Expected errors like validation failures or missing records should return useful status codes and safe messages. Unexpected errors should be logged with request context, correlation IDs if available, and enough detail for debugging. I also make sure async route errors are forwarded correctly and that background jobs have their own retry and dead-letter strategy.",
    commonMistake:
      "Catching errors and returning 200 responses with an error message in the body.",
  },
  {
    id: 12,
    topic: "Node.js",
    difficulty: "Senior",
    question: "How would you protect a Node.js service from overload?",
    shortAnswer:
      "Use rate limits, timeouts, backpressure, queues, health checks, and observability to fail gracefully instead of collapsing.",
    seniorAnswer:
      "I look at overload as a system behavior problem. The service needs request timeouts, input limits, connection pool limits, and rate limiting at the edge. For expensive work, queues and backpressure help control concurrency. I also want health checks, metrics, structured logs, and alerts so we can see saturation before users do. The goal is controlled degradation, not heroic scaling after the service is already down.",
    commonMistake:
      "Only increasing server size without adding timeouts, limits, or visibility.",
  },
  {
    id: 13,
    topic: "React",
    difficulty: "Junior",
    question: "What problem does React state solve?",
    shortAnswer:
      "State stores values that affect rendering and can change over time, such as form input, selected items, or loaded data.",
    seniorAnswer:
      "React state is for data that should cause the UI to update when it changes. I try to keep state minimal and derived values computed from existing state where possible. If state is duplicated in multiple places, bugs appear because the UI can disagree with itself. Good React code often comes from choosing the right owner for each piece of state.",
    commonMistake:
      "Putting every variable into state even when it can be derived during render.",
  },
  {
    id: 14,
    topic: "React",
    difficulty: "Middle",
    question: "How do you decide when to split a React component?",
    shortAnswer:
      "Split components when it improves readability, reuse, testing, or separates stateful behavior from presentation.",
    seniorAnswer:
      "I split components when a piece of UI has a clear responsibility. A good split makes props understandable and reduces mental load. I avoid splitting only to make files tiny because that can scatter logic. For larger features, I often separate data/state coordination from smaller presentational components, which makes the UI easier to test and change.",
    commonMistake:
      "Creating many tiny components without clear ownership or meaningful names.",
  },
  {
    id: 15,
    topic: "React",
    difficulty: "Senior",
    question: "How would you improve performance in a React screen?",
    shortAnswer:
      "Measure first, reduce unnecessary renders, memoize carefully, virtualize long lists, and keep expensive work out of render.",
    seniorAnswer:
      "I start with React DevTools or browser profiling to find the actual slow path. Then I look for unnecessary state updates, expensive calculations during render, large lists that need virtualization, and props that change identity too often. Memoization can help, but I use it deliberately because it adds complexity. Often the biggest win is changing the data flow so fewer components need to re-render.",
    commonMistake:
      "Adding memo everywhere before measuring what is actually slow.",
  },
  {
    id: 16,
    topic: "Next.js",
    difficulty: "Junior",
    question: "What is the App Router in Next.js?",
    shortAnswer:
      "The App Router is Next.js's file-based routing system built around the app directory, layouts, pages, and server-first rendering.",
    seniorAnswer:
      "The App Router lets us model routes with folders, compose shared layouts, and use Server Components by default. It changes how I think about data fetching because server-rendered parts can fetch data close to where they are used, while client components are reserved for interactivity. That helps keep less JavaScript on the client when the page does not need it.",
    commonMistake:
      "Making every component a client component because one small part needs state.",
  },
  {
    id: 17,
    topic: "Next.js",
    difficulty: "Middle",
    question: "How do you choose between Server Components and Client Components?",
    shortAnswer:
      "Use Server Components for data fetching and static UI. Use Client Components for browser-only behavior, state, effects, and event handlers.",
    seniorAnswer:
      "I default to Server Components because they reduce client JavaScript and can safely access server-side resources. I switch to a Client Component when the UI needs state, effects, refs, event handlers, or browser APIs. A common pattern is to render the page shell and data on the server, then isolate interactive controls into small client components.",
    commonMistake:
      "Adding use client at the page level when only a small child component needs interactivity.",
  },
  {
    id: 18,
    topic: "Next.js",
    difficulty: "Senior",
    question: "How do caching and revalidation affect a Next.js product?",
    shortAnswer:
      "They control freshness, speed, and cost. The right strategy depends on how often data changes and what users expect.",
    seniorAnswer:
      "Caching is a product decision as much as a technical one. For stable content, caching improves speed and reduces backend load. For dashboards or account data, freshness matters more, so I would use dynamic rendering or careful revalidation. I like to document the freshness expectation for each route because unclear caching rules create bugs that look random to users.",
    commonMistake:
      "Caching everything without defining how fresh the page must be.",
  },
];
