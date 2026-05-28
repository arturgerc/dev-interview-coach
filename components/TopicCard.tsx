import type { Topic } from "@/lib/content";

type TopicCardProps = {
  topic: Topic;
};

export function TopicCard({ topic }: TopicCardProps) {
  const { Icon } = topic;

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/10">
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-md ${topic.accent} text-white`}
      >
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-slate-950">{topic.title}</h3>
      <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">
        {topic.summary}
      </p>
      <ul className="mt-5 space-y-2">
        {topic.focus.map((item) => (
          <li className="flex items-center gap-2 text-sm text-slate-700" key={item}>
            <span className={`h-2 w-2 rounded-full ${topic.accent}`} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
