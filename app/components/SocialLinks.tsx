export type SocialLink = {
  name: string;
  href: string;
  icon: string;
  target?: "_blank";
};

export default function SocialLinks({
  links,
  size = "md",
  bordered = true,
}: {
  links: SocialLink[];
  size?: "sm" | "md";
  bordered?: boolean;
}) {
  const wrapper =
    size === "sm"
      ? "w-8 h-8"
      : "w-10 h-10";

  const icon =
    size === "sm"
      ? "w-4 h-4"
      : "w-5 h-5";

  return (
    <div className="flex items-center gap-3">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.target}
          rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
          aria-label={link.name}
          className={`${wrapper} flex items-center justify-center rounded-full text-current transition-colors
          ${
            bordered
              ? "border border-current/25 hover:bg-current/10"
              : "hover:text-primary-base"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={icon}
          >
            <path d={link.icon} />
          </svg>
        </a>
      ))}
    </div>
  );
}