export default function Placeholder({
  label,
  className = "",
  dark = false,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-dashed flex items-center justify-center text-center p-6 ${
        dark ? "border-white/25 text-white/55" : "border-stroke-sub text-soft"
      } ${className}`}
    >
      <span className="font-body text-xs leading-relaxed">{label}</span>
    </div>
  );
}
