"use client";
import { useJoinModal } from "./JoinModalProvider";

type Variant = "yellow" | "outline-white" | "outline-dark";

const baseCls =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-header font-medium text-sm whitespace-nowrap transition-colors duration-200";

const variants: Record<Variant, string> = {
  yellow: "bg-yellow text-strong hover:bg-[#f5c01f]",
  "outline-white": "border border-white/40 text-white hover:bg-white hover:text-primary-dark",
  "outline-dark": "border border-strong/25 text-strong hover:bg-strong hover:text-white",
};

export default function JoinButton({
  children = "Join the Movement",
  variant = "yellow",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const { open } = useJoinModal();
  return (
    <button onClick={open} className={`${baseCls} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </button>
  );
}
