import type { Topic } from "@/lib/content";

type TopicCardProps = {
  topic: Topic;
};

export function TopicCard({ topic }: TopicCardProps) {
  const { Icon } = topic;

  return (
    <article className="group relative overflow-hidden rounded-lg border border-slate-200/80 bg-white/90 p-6 shadow-sm ring-1 ring-white/70 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-2xl hover:shadow-slate-950/10">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-500 via-sky-500 to-emerald-500 opacity-80" />
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-md ${topic.accent} text-white shadow-lg shadow-slate-950/10 transition group-hover:scale-105`}
        >
          <Icon aria-hidden="true" className="h-6 w-6" />
        </div>
        <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-600">
          Focus area
        </span>
      </div>
      <h3 className="mt-6 text-xl font-black text-slate-950">{topic.title}</h3>
      <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600 sm:min-h-24 lg:min-h-20">
        {topic.summary}
      </p>
      <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
        {topic.focus.map((item) => (
          <li
            className="flex items-center gap-2 text-sm font-medium text-slate-700"
            key={item}
          >
            <span className={`h-2 w-2 rounded-full ${topic.accent} shadow-sm`} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
