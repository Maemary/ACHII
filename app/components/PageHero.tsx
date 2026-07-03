import Image from "next/image";
import Button from "./Button";

type CTA = { label: string; href: string; variant?: "yellow" | "outline-white" };

export default function PageHero({
  eyebrow,
  eyebrowClassName,
  title,
  subtitle,
  body,
  ctas,
  image,
  sideImage,
}: {
  eyebrow?: string;
  eyebrowClassName?: string;
  title: string;
  subtitle?: string;
  body?: string[];
  ctas?: CTA[];
  image?: string;
  sideImage?: string;
}) {
  return (
    <section className="relative bg-primary-dark pt-[148px] pb-20 lg:pb-28 overflow-hidden">
      {image && (
        <>
          <Image src={image} alt="" aria-hidden="true" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/92 to-primary-dark/50" />
          <div className="absolute inset-0 bg-primary-dark/35" />
        </>
      )}
      <div className="relative container-site">
        <div className={sideImage ? "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center" : ""}>
          <div>
            {eyebrow && (
              <p className={
                eyebrowClassName ?? 
                `font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-5`}>
                {eyebrow}
              </p>
            )}
            <h1 className="font-header font-semibold text-white text-[34px] sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.01em] max-w-4xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 font-body text-white/80 text-lg leading-[1.65] max-w-2xl">{subtitle}</p>
            )}
            {body && (
              <div className="mt-7 space-y-4 max-w-3xl">
                {body.map((p, i) => (
                  <p key={i} className="font-body text-white/70 text-base leading-[1.75]">{p}</p>
                ))}
              </div>
            )}
            {ctas && ctas.length > 0 && (
              <div className="mt-9 flex flex-wrap gap-3">
                {ctas.map((c) => (
                  <Button key={c.label} href={c.href} variant={c.variant ?? "yellow"}>{c.label}</Button>
                ))}
              </div>
            )}
          </div>

          {sideImage && (
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src={sideImage} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}