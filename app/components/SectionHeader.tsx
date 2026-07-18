export default function SectionHeader({
  eyebrow,
  title,
  intro,
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className={`font-body font-semibold text-[11px] tracking-[0.14em] uppercase mb-4 ${light ? "text-yellow" : "text-primary-base"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-header font-semibold text-3xl lg:text-[40px] leading-[1.15] tracking-[-0.01em] max-w-5xl ${light ? "text-white" : "text-strong"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 font-body text-base leading-[1.7] max-w-3xl ${light ? "text-white/75" : "text-sub"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
