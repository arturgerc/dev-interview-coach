import Image from "next/image";

type ImageCardProps = {
  src: string;
  alt: string;
  label?: string;
  title?: string;
  className?: string;
};

export function ImageCard({
  src,
  alt,
  label,
  title,
  className = "",
}: ImageCardProps) {
  return (
    <div
      className={`group overflow-hidden rounded-lg border border-white/75 bg-white/85 p-3 shadow-2xl shadow-slate-950/10 ring-1 ring-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-slate-950/15 ${className}`}
    >
      <div className="overflow-hidden rounded-md bg-slate-100">
        <Image
          alt={alt}
          className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.025]"
          height={600}
          src={src}
          width={800}
        />
      </div>
      {label || title ? (
        <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4">
          {title ? (
            <p className="text-sm font-black text-slate-950">{title}</p>
          ) : null}
          {label ? (
            <span className="rounded-md border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-black uppercase tracking-wide text-teal-800">
              {label}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
