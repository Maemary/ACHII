import Link from "next/link";

type Variant = "yellow" | "outline-dark" | "outline-white";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-header font-medium text-sm whitespace-nowrap transition-colors duration-200";

const variants: Record<Variant, string> = {
  yellow: "bg-yellow text-strong hover:bg-[#f5c01f]",
  "outline-dark": "border border-strong/25 text-strong hover:bg-strong hover:text-white",
  "outline-white": "border border-white/40 text-white hover:bg-white hover:text-primary-dark",
};

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export default function Button({
  href = "#",
  children,
  variant = "yellow",
  className = "",
  external = false,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        <span>{children}</span>
        <Arrow />
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}


