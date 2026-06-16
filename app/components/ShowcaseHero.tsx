import Image from "next/image";
import Button from "./Button";

type CTA = { label: string; href: string; variant?: "yellow" | "outline-white" };

export default function ShowcaseHero({
  eyebrow,
  title,
  subtitle,
  ctas,
  image,
  imageAlt,
  card,
  stat,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctas?: CTA[];
  image: string;
  imageAlt: string;
  card?: { title: string; sub: string };
  stat?: { value: string; label: string };
}) {
  return (
    <section className="relative bg-primary-dark pt-[148px] pb-16 lg:pb-20 overflow-hidden">
      <div className="container-site">
        {eyebrow && (
          <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-5">{eyebrow}</p>
        )}
        <h1 className="font-header font-semibold text-white text-[34px] sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.01em] max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 font-body text-white/75 text-lg leading-[1.65] max-w-2xl">{subtitle}</p>
        )}
        {ctas && ctas.length > 0 && (
          <div className="mt-9 flex flex-wrap gap-3">
            {ctas.map((c) => (
              <Button key={c.label} href={c.href} variant={c.variant ?? "yellow"}>{c.label}</Button>
            ))}
          </div>
        )}
      </div>

      <div className="container-site mt-12 lg:mt-16">
        <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden bg-primary-base">
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />

          {card && (
            <div className="absolute top-5 right-5 sm:top-7 sm:right-7 bg-white rounded-2xl p-4 sm:p-5 max-w-[260px] shadow-xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 rounded-full bg-primary-dark flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
                <p className="font-header font-semibold text-strong text-sm leading-tight">{card.title}</p>
              </div>
              <p className="font-body text-sub text-xs leading-snug">{card.sub}</p>
            </div>
          )}

          {stat && (
            <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 bg-white rounded-2xl px-5 py-4 shadow-xl">
              <div className="font-header font-semibold text-strong text-2xl sm:text-3xl leading-none mb-1">{stat.value}</div>
              <div className="font-body text-sub text-xs">{stat.label}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
