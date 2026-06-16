export default function Logo({
  variant = "white",
  align = "center",
  className = "",
}: {
  variant?: "white" | "color";
  align?: "center" | "left";
  className?: string;
}) {
  const white = variant === "white";
  return (
    <div className={`flex flex-col ${align === "left" ? "items-start" : "items-center"} leading-none ${className}`}>
      <img
        src="/images/achii-icon.png"
        alt="ACHII"
        className={`h-9 w-auto object-contain transition-[filter] duration-300 ${white ? "[filter:brightness(0)_invert(1)]" : ""}`}
      />
      <span
        className={`mt-1 font-header font-bold tracking-[0.2em] text-[14px] transition-colors duration-300 ${white ? "text-white" : "text-primary-dark"}`}
      >
        ACHII
      </span>
    </div>
  );
}
