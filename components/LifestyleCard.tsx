import Image from "next/image";

type LifestyleCardProps = {
  badge: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export function LifestyleCard({
  badge,
  title,
  text,
  image,
  alt,
}: LifestyleCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200/80 bg-white/90 shadow-lg shadow-slate-950/5 ring-1 ring-white/80 transition duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/10">
      <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white p-3">
        <Image
          alt={alt}
          className="aspect-[4/3] w-full rounded-md object-cover transition duration-300 group-hover:scale-[1.02]"
          height={600}
          src={image}
          width={800}
        />
      </div>
      <div className="p-6">
        <span className="rounded-md border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-sky-800">
          {badge}
        </span>
        <h3 className="mt-4 text-xl font-black text-slate-950">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </article>
  );
}
