import Image from "next/image";
import Button from "./Button";

type CTA = { label: string; href: string; variant?: "yellow" | "outline-white" };

export default function SplitHero({
  eyebrow,
  title,
  subtitle,
  quoteAuthor,
  ctas,
  image,
  imageAlt,
  reverse = false,
  imgPosition = "object-cover",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  quoteAuthor?: string;
  ctas?: CTA[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  imgPosition?: string;
}) {
  return (
    <section className="relative bg-primary-dark pt-[140px] pb-16 lg:pb-24 overflow-hidden">
      <div className="container-site grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className={reverse ? "lg:order-2" : ""}>
          {eyebrow && (
            <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-5">{eyebrow}</p>
          )}
          <h1 className="font-header font-semibold text-white text-[32px] sm:text-5xl lg:text-[52px] leading-[1.08] tracking-[-0.01em]">
            {title}
          </h1>
          {quoteAuthor && (
            <p className="mt-4 font-body text-sm text-white/60">— {quoteAuthor}</p>
          )}
          {subtitle && (
            <p className="mt-6 font-body text-white/75 text-base lg:text-lg leading-[1.7] max-w-xl">{subtitle}</p>
          )}
          {ctas && ctas.length > 0 && (
            <div className="mt-9 flex flex-wrap gap-3">
              {ctas.map((c) => (
                <Button key={c.label} href={c.href} variant={c.variant ?? "yellow"}>{c.label}</Button>
              ))}
            </div>
          )}
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden bg-primary-base">
            <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className={imgPosition} />
          </div>
        </div>
      </div>
    </section>
  );
}