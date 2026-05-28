# DevInterviewCoach

DevInterviewCoach is a modern interview preparation landing page for full-stack developers. It focuses on Python, JavaScript, TypeScript, Node.js, React, and Next.js with practical topic cards, sample interview questions, and human-style answers.

## Features

- Next.js App Router project structure
- TypeScript-first components and content data
- Tailwind CSS 4 styling
- Responsive landing page with clean navigation
- Topic cards for six full-stack technologies
- Sample interview questions with natural answers
- "Tell me about yourself" answer for a senior full-stack developer with 15 years of experience
- Reusable components for navigation, buttons, cards, section headers, and footer
- Generated hero visual stored in `public/images/interview-coach-dashboard.png`

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide React icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  ButtonLink.tsx
  Footer.tsx
  HeroVisual.tsx
  Navigation.tsx
  QuestionCard.tsx
  SectionHeader.tsx
  TopicCard.tsx
lib/
  content.ts
public/
  images/
    interview-coach-dashboard.png
```

## Deployment

The easiest deployment target is Vercel:

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js build settings.
4. Deploy.

You can also deploy to any platform that supports Next.js.

For production social previews, set `NEXT_PUBLIC_SITE_URL` to your deployed URL.
