"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import JoinButton from "./JoinButton";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
 { label: "Training", href: "/training" },
//  { label: "Insights", href: "/insights" },
  { label: "Blogs", href: "/reports" },
  { label: "Get Involved", href: "/get-involved" },
  {label: "Partner with Us", href: "/donate"},
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setAtTop(y < 8);

      if (y > lastY && y > 120) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;

      const probe = 42;
      const sections = document.querySelectorAll<HTMLElement>("[data-nav-theme]");
      for (const el of Array.from(sections)) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom > probe) {
          setTheme((el.dataset.navTheme as "dark" | "light") || "dark");
          break;
        }
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = theme === "dark";

  const navBg = open
    ? dark
      ? "bg-primary-dark"
      : "bg-white"
    : atTop
      ? "bg-transparent"
      : dark
        ? "bg-primary-dark/85 backdrop-blur-md"
        : "bg-white/90 backdrop-blur-md shadow-sm";

  const linkColor = dark ? "text-white/85 hover:text-white" : "text-strong/75 hover:text-strong";
  const barColor = dark ? "bg-white" : "bg-strong";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[transform,background-color,box-shadow] duration-300 ease-out ${navBg} ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container-site h-[84px] flex items-center justify-between">
        <Link href="/" aria-label="ACHII home">
          <Logo variant={dark ? "white" : "color"} />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-header text-[15px] transition-colors duration-300 ${linkColor}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <JoinButton variant="yellow">Join the Movement</JoinButton>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 transition-all duration-300 ${barColor} ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 transition-all duration-300 ${barColor} ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 transition-all duration-300 ${barColor} ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className={`lg:hidden px-5 py-4 flex flex-col gap-3 ${dark ? "border-t border-white/10" : "border-t border-stroke-soft"}`}>
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-header py-1 ${dark ? "text-white/85 hover:text-white" : "text-strong/80 hover:text-strong"}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <JoinButton variant="yellow" className="mt-2 w-full">Join the Movement</JoinButton>
        </div>
      )}
    </nav>
  );
}
