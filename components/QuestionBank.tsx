"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
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
      <div className="overflow-hidden rounded-lg border border-white/70 bg-white/90 shadow-2xl shadow-slate-950/10 ring-1 ring-slate-900/5">
        <div className="flex flex-col gap-4 border-b border-slate-200 bg-gradient-to-r from-slate-950 via-slate-900 to-teal-950 p-5 text-white sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/10">
              <SlidersHorizontal aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-teal-200">
                Practice command center
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Search by concept, stack, answer style, or mistake.
              </p>
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold">
            {filteredQuestions.length} / {questionBank.length} visible
          </div>
        </div>

        <div className="p-5">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.95fr_0.7fr]">
          <label className="block">
            <span className="text-sm font-black text-slate-950">Search</span>
            <span className="mt-2 flex min-h-14 items-center gap-3 rounded-md border border-slate-300 bg-white px-4 shadow-inner shadow-slate-950/5 transition focus-within:border-teal-600 focus-within:ring-4 focus-within:ring-teal-100">
              <Search aria-hidden="true" className="h-5 w-5 text-teal-700" />
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
            <p className="text-sm font-black text-slate-950">Topic</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["All", ...questionTopics] as TopicFilter[]).map((topic) => (
                <button
                  aria-pressed={selectedTopic === topic}
                  className={`min-h-10 rounded-md px-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${
                    selectedTopic === topic
                      ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15 ring-1 ring-slate-950/10"
                      : "border border-slate-300 bg-slate-50 text-slate-700 hover:border-slate-500 hover:bg-white hover:shadow-sm"
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
            <p className="text-sm font-black text-slate-950">Difficulty</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["All", ...difficulties] as DifficultyFilter[]).map(
                (difficulty) => (
                  <button
                    aria-pressed={selectedDifficulty === difficulty}
                    className={`min-h-10 rounded-md px-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${
                      selectedDifficulty === difficulty
                        ? "bg-teal-700 text-white shadow-lg shadow-teal-900/20 ring-1 ring-teal-900/10"
                        : "border border-slate-300 bg-slate-50 text-slate-700 hover:border-slate-500 hover:bg-white hover:shadow-sm"
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

        <div className="mt-5 flex flex-col gap-3 rounded-md border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Showing{" "}
            <span className="font-bold text-slate-950">
              {filteredQuestions.length}
            </span>{" "}
            of {questionBank.length} questions
          </p>
          <button
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-50 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            onClick={clearFilters}
            type="button"
          >
            <X aria-hidden="true" className="h-4 w-4" />
            Clear filters
          </button>
        </div>
        </div>
      </div>

      {filteredQuestions.length > 0 ? (
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {filteredQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white/90 p-10 text-center shadow-sm">
          <h3 className="text-xl font-black text-slate-950">
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
