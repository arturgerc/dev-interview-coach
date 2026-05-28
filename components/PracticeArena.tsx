"use client";

import { useMemo, useState } from "react";
import { InterviewerPanel } from "@/components/InterviewerPanel";
import { PracticeCard } from "@/components/PracticeCard";
import { PracticeControls } from "@/components/PracticeControls";
import { ProgressBar } from "@/components/ProgressBar";
import {
  difficulties,
  questionBank,
  questionTopics,
  type Difficulty,
  type QuestionTopic,
} from "@/lib/questions";

type TopicFilter = "All" | QuestionTopic;
type DifficultyFilter = "All" | Difficulty;
type ConfidenceLevel = {
  label: string;
  score: number;
};

const confidenceLevels: ConfidenceLevel[] = [
  { label: "Warming up", score: 45 },
  { label: "Getting there", score: 65 },
  { label: "Interview ready", score: 85 },
];

export function PracticeArena() {
  const [topic, setTopic] = useState<TopicFilter>("All");
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSeniorAnswer, setShowSeniorAnswer] = useState(false);
  const [streak, setStreak] = useState(0);
  const [confidence, setConfidence] = useState(65);

  const filteredQuestions = useMemo(() => {
    return questionBank.filter((question) => {
      const matchesTopic = topic === "All" || question.topic === topic;
      const matchesDifficulty =
        difficulty === "All" || question.difficulty === difficulty;

      return matchesTopic && matchesDifficulty;
    });
  }, [difficulty, topic]);

  const currentQuestion = filteredQuestions[currentIndex];
  const progressCurrent =
    filteredQuestions.length > 0
      ? Math.min(currentIndex + 1, filteredQuestions.length)
      : 0;

  const resetQuestionView = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setShowSeniorAnswer(false);
  };

  const selectTopic = (nextTopic: TopicFilter) => {
    setTopic(nextTopic);
    resetQuestionView();
  };

  const selectDifficulty = (nextDifficulty: DifficultyFilter) => {
    setDifficulty(nextDifficulty);
    resetQuestionView();
  };

  const goPrevious = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
    setShowAnswer(false);
    setShowSeniorAnswer(false);
  };

  const goNext = () => {
    if (showAnswer) {
      setStreak((value) => value + 1);
    }

    setCurrentIndex((index) =>
      Math.min(index + 1, filteredQuestions.length - 1),
    );
    setShowAnswer(false);
    setShowSeniorAnswer(false);
  };

  const resetPractice = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setShowSeniorAnswer(false);
    setStreak(0);
    setConfidence(65);
  };

  const badges = [
    { label: "Warm-up", active: streak < 2 },
    { label: "Full-stack mode", active: topic === "All" },
    { label: "Senior focus", active: difficulty === "Senior" },
    { label: "Interview ready", active: confidence >= 80 || streak >= 3 },
  ];

  return (
    <section className="relative px-6 pb-24 lg:px-8">
      <div className="absolute inset-x-0 top-24 -z-0 h-96 bg-gradient-to-r from-sky-500/10 via-teal-500/10 to-emerald-500/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.36fr_0.64fr]">
        <div className="space-y-5">
          <InterviewerPanel
            confidence={confidence}
            difficulty={currentQuestion?.difficulty ?? difficulty}
            streak={streak}
            topic={currentQuestion?.topic ?? topic}
          />

          <div className="rounded-lg border border-white/10 bg-white/10 p-5 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <p className="text-sm font-black uppercase tracking-wide text-teal-200">
              Filters
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-bold text-slate-300">Topic</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(["All", ...questionTopics] as TopicFilter[]).map((item) => (
                    <button
                      aria-pressed={topic === item}
                      className={`min-h-10 rounded-md px-3 text-sm font-bold transition hover:-translate-y-0.5 ${
                        topic === item
                          ? "bg-white text-slate-950 shadow-lg shadow-white/10"
                          : "border border-white/10 bg-slate-950/35 text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                      key={item}
                      onClick={() => selectTopic(item)}
                      type="button"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-300">Difficulty</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(["All", ...difficulties] as DifficultyFilter[]).map(
                    (item) => (
                      <button
                        aria-pressed={difficulty === item}
                        className={`min-h-10 rounded-md px-3 text-sm font-bold transition hover:-translate-y-0.5 ${
                          difficulty === item
                            ? "bg-teal-300 text-slate-950 shadow-lg shadow-teal-950/20"
                            : "border border-white/10 bg-slate-950/35 text-slate-300 hover:bg-white/10 hover:text-white"
                        }`}
                        key={item}
                        onClick={() => selectDifficulty(item)}
                        type="button"
                      >
                        {item}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-5 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <p className="text-sm font-black uppercase tracking-wide text-teal-200">
              Badges
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {badges.map((badge) => (
                <div
                  className={`rounded-md border p-3 text-sm font-black transition ${
                    badge.active
                      ? "border-teal-300/40 bg-teal-300/15 text-teal-100"
                      : "border-white/10 bg-slate-950/35 text-slate-400"
                  }`}
                  key={badge.label}
                >
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-lg border border-white/10 bg-white/10 p-5 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <ProgressBar
              current={progressCurrent}
              total={filteredQuestions.length}
            />
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {confidenceLevels.map((level) => (
                <button
                  className={`rounded-md border px-4 py-3 text-left transition hover:-translate-y-0.5 ${
                    confidence === level.score
                      ? "border-sky-300 bg-sky-300/15 text-sky-100 shadow-lg shadow-sky-950/20"
                      : "border-white/10 bg-slate-950/35 text-slate-300 hover:bg-white/10"
                  }`}
                  key={level.label}
                  onClick={() => setConfidence(level.score)}
                  type="button"
                >
                  <span className="block text-sm font-black">
                    {level.label}
                  </span>
                  <span className="mt-1 block text-xs font-bold text-slate-400">
                    {level.score}% confidence
                  </span>
                </button>
              ))}
            </div>
          </div>

          {currentQuestion ? (
            <>
              <PracticeCard
                onToggleSeniorAnswer={() =>
                  setShowSeniorAnswer((value) => !value)
                }
                question={currentQuestion}
                showAnswer={showAnswer}
                showSeniorAnswer={showSeniorAnswer}
              />

              <PracticeControls
                canGoNext={currentIndex < filteredQuestions.length - 1}
                canGoPrevious={currentIndex > 0}
                onNext={goNext}
                onPrevious={goPrevious}
                onReset={resetPractice}
                onShowAnswer={() => setShowAnswer(true)}
                showAnswer={showAnswer}
              />
            </>
          ) : (
            <div className="rounded-lg border border-white/10 bg-white p-8 text-center text-slate-950 shadow-2xl shadow-slate-950/20">
              <h2 className="text-2xl font-black">No questions found</h2>
              <p className="mt-2 text-slate-600">
                Change the filters to restart the practice list.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
