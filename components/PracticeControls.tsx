import { Eye, RotateCcw, SkipBack, SkipForward } from "lucide-react";

type PracticeControlsProps = {
  canGoPrevious: boolean;
  canGoNext: boolean;
  showAnswer: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onReset: () => void;
  onShowAnswer: () => void;
};

export function PracticeControls({
  canGoPrevious,
  canGoNext,
  showAnswer,
  onPrevious,
  onNext,
  onReset,
  onShowAnswer,
}: PracticeControlsProps) {
  const disabledStyle = "disabled:cursor-not-allowed disabled:opacity-45";

  return (
    <div className="grid gap-3 sm:grid-cols-4">
      <button
        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-md ${disabledStyle}`}
        disabled={!canGoPrevious}
        onClick={onPrevious}
        type="button"
      >
        <SkipBack aria-hidden="true" className="h-4 w-4" />
        Previous
      </button>
      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-teal-600 to-sky-600 px-4 text-sm font-black text-white shadow-lg shadow-teal-950/20 transition hover:-translate-y-0.5 hover:from-teal-700 hover:to-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={showAnswer}
        onClick={onShowAnswer}
        type="button"
      >
        <Eye aria-hidden="true" className="h-4 w-4" />
        {showAnswer ? "Answer shown" : "Show answer"}
      </button>
      <button
        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-black text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-teal-950 ${disabledStyle}`}
        disabled={!canGoNext}
        onClick={onNext}
        type="button"
      >
        Next
        <SkipForward aria-hidden="true" className="h-4 w-4" />
      </button>
      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-md"
        onClick={onReset}
        type="button"
      >
        <RotateCcw aria-hidden="true" className="h-4 w-4" />
        Reset
      </button>
    </div>
  );
}
