type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm font-bold text-slate-300">
        <span>Progress</span>
        <span>
          {current} / {total}
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-800 ring-1 ring-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-400 via-sky-400 to-emerald-300 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
