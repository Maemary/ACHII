export default function Placeholder({
  label,
  className = "",
  dark = false,
  diagonal = false,
  textClassName = "text-xs",
  border = true,
}: {
  label: string;
  className?: string;
  dark?: boolean;
  diagonal?: boolean;
  textClassName?: string;
  border?: boolean;
}) {
  return (
    <div
      className={`rounded-xl flex items-center justify-center text-center p-6 ${
        border ? `border border-dashed ${dark ? "border-white/25" : "border-stroke-sub"}` : ""
      } ${dark ? "text-white/55" : "text-soft"} ${className}`}
    >
      <span className={`font-body leading-relaxed inline-block ${textClassName} ${diagonal ? "-rotate-12" : ""}`}>{label}</span>
    </div>
  );
}
