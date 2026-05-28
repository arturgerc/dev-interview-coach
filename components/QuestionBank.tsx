"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { QuestionCard } from "@/components/QuestionCard";
import {
  difficulties,
  questionBank,
  questionTopics,
  type Difficulty,
  type QuestionTopic,
} from "@/lib/questions";

type TopicFilter = "All" | QuestionTopic;
type DifficultyFilter = "All" | Difficulty;

export function QuestionBank() {
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<TopicFilter>("All");
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<DifficultyFilter>("All");

  const filteredQuestions = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return questionBank.filter((question) => {
      const matchesTopic =
        selectedTopic === "All" || question.topic === selectedTopic;
      const matchesDifficulty =
        selectedDifficulty === "All" ||
        question.difficulty === selectedDifficulty;
      const searchableText = [
        question.topic,
        question.difficulty,
        question.question,
        question.shortAnswer,
        question.seniorAnswer,
        question.commonMistake,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesTopic &&
        matchesDifficulty &&
        searchableText.includes(normalizedSearch)
      );
    });
  }, [search, selectedDifficulty, selectedTopic]);

  const clearFilters = () => {
    setSearch("");
    setSelectedTopic("All");
    setSelectedDifficulty("All");
  };

  return (
    <div className="mt-12">
      <div className="rounded-lg border border-slate-200 bg-white/90 p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.9fr_0.7fr]">
          <label className="block">
            <span className="text-sm font-bold text-slate-900">Search</span>
            <span className="mt-2 flex min-h-12 items-center gap-3 rounded-md border border-slate-300 bg-white px-4 transition focus-within:border-teal-600 focus-within:ring-4 focus-within:ring-teal-100">
              <Search aria-hidden="true" className="h-5 w-5 text-slate-400" />
              <input
                className="w-full bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search questions, answers, mistakes..."
                type="search"
                value={search}
              />
            </span>
          </label>

          <div>
            <p className="text-sm font-bold text-slate-900">Topic</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["All", ...questionTopics] as TopicFilter[]).map((topic) => (
                <button
                  aria-pressed={selectedTopic === topic}
                  className={`min-h-10 rounded-md px-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                    selectedTopic === topic
                      ? "bg-slate-950 text-white shadow-md shadow-slate-950/15"
                      : "border border-slate-300 bg-white text-slate-700 hover:border-slate-500"
                  }`}
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  type="button"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">Difficulty</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["All", ...difficulties] as DifficultyFilter[]).map(
                (difficulty) => (
                  <button
                    aria-pressed={selectedDifficulty === difficulty}
                    className={`min-h-10 rounded-md px-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                      selectedDifficulty === difficulty
                        ? "bg-teal-700 text-white shadow-md shadow-teal-900/15"
                        : "border border-slate-300 bg-white text-slate-700 hover:border-slate-500"
                    }`}
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    type="button"
                  >
                    {difficulty}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Showing{" "}
            <span className="font-bold text-slate-950">
              {filteredQuestions.length}
            </span>{" "}
            of {questionBank.length} questions
          </p>
          <button
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 font-semibold text-slate-700 transition hover:border-slate-500 hover:bg-slate-50"
            onClick={clearFilters}
            type="button"
          >
            <X aria-hidden="true" className="h-4 w-4" />
            Clear filters
          </button>
        </div>
      </div>

      {filteredQuestions.length > 0 ? (
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {filteredQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
          <h3 className="text-xl font-bold text-slate-950">
            No matching questions
          </h3>
          <p className="mt-2 text-slate-600">
            Try a broader search term or clear the filters.
          </p>
        </div>
      )}
    </div>
  );
}
