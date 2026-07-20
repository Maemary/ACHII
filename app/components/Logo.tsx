const sizeMap = {
  sm: { img: "h-10" },
  md: { img: "h-14" },
  lg: { img: "h-20" },
  xl: { img: "h-28" },
};

export default function Logo({
  variant = "white",
  align = "center",
  size = "sm",
  className = "",
}: {
  variant?: "white" | "color";
  align?: "center" | "left";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const white = variant === "white";
  const { img } = sizeMap[size];
  return (
    <div className={`flex flex-col ${align === "left" ? "items-start" : "items-center"} leading-none ${className}`}>
      <img
        src="https://res.cloudinary.com/davuaeyxb/image/upload/v1784124011/achii/images/Logo/ACHII%20Logo.png"
        alt="ACHII"
        className={`${img} w-auto object-contain transition-[filter] duration-300 ${white ? "[filter:brightness(0)_invert(1)]" : ""}`}
      />
    </div>
  );
}