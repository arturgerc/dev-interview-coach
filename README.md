# DevInterviewCoach

DevInterviewCoach is a modern interview preparation product for full-stack developers. It focuses on Python, JavaScript, TypeScript, Node.js, React, and Next.js with topic guidance, a searchable question bank, senior-style answers, and a polished "Tell me about yourself" example.

## Features

- Next.js App Router project structure
- TypeScript-first components and content data
- Tailwind CSS 4 styling
- Premium SaaS-inspired responsive landing page
- Polished sticky navigation, gradient hero, and elevated content cards
- Local SVG illustrations for interview desks, mock interviews, coding coffee, question cards, developer profiles, and remote workspace scenes
- Product-style visual sections for interview rehearsal and answer transformation
- Topic cards for six full-stack technologies
- Interactive question bank with 18 interview questions
- Client-side search and topic/difficulty filters using React state
- `/practice` Practice Arena page with one-question-at-a-time mock interview flow
- Local streak counter, progress indicator, badges, and confidence score UI
- Junior, Middle, and Senior difficulty levels
- Short answers, senior-style answers, and common mistakes for each question
- "Tell me about yourself" answer for a senior full-stack developer with 15 years of experience
- Reusable components for navigation, buttons, cards, section headers, filters, and profile content
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
  practice/
    page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  ButtonLink.tsx
  Footer.tsx
  HeroVisual.tsx
  HeroMockup.tsx
  ImageCard.tsx
  InterviewerPanel.tsx
  LifestyleCard.tsx
  Navigation.tsx
  PracticeArena.tsx
  PracticeCard.tsx
  PracticeControls.tsx
  ProgressBar.tsx
  QuestionBank.tsx
  QuestionCard.tsx
  SectionHeader.tsx
  SeniorProfile.tsx
  TopicCard.tsx
  VisualFeatureSection.tsx
lib/
  content.ts
  questions.ts
public/
  images/
    coding-coffee.svg
    developer-profile.svg
    interview-coach-dashboard.png
    interview-desk.svg
    mock-interview.svg
    question-cards.svg
    remote-workspace.svg
```

## Future Improvements

- Add a practice mode that reveals answers step by step.
- Add bookmarking for questions the user wants to revisit.
- Add mock interview flows grouped by role and seniority.
- Add progress tracking in local storage.
- Add more system design and behavioral interview prompts.

## Deployment

The easiest deployment target is Vercel:

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js build settings.
4. Deploy.

You can also deploy to any platform that supports Next.js.

For production social previews, set `NEXT_PUBLIC_SITE_URL` to your deployed URL.
