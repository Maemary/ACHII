"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import JoinButton from "./JoinButton";

const links = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "",
    children: [
      { label: "About ACHII", href: "/about" },
      { label: "Core Values", href: "/about/core-values" },
      { label: "Our Team", href: "/about/our-team" },
    ],
  },
 { label: "Training", href: "/training" },
 { label: "Programs", href: "/insights" },
  { label: "Blogs", href: "/reports" },
  { label: "Get Involved", href: "/get-involved" },
  {label: "Partner with Us", href: "/partner"},
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

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
          {links.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`font-header text-[15px] transition-colors duration-300 ${linkColor}`}
                >
                  {item.label}
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200 ease-out">
                  <div
                    className={`min-w-[200px] rounded-xl py-2 shadow-lg border ${
                      dark ? "bg-primary-dark border-white/10" : "bg-white border-stroke-soft"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={`block px-4 py-2.5 font-header text-sm whitespace-nowrap transition-colors duration-200 ${
                          dark ? "text-white/80 hover:text-white hover:bg-white/10" : "text-strong/75 hover:text-strong hover:bg-primary-lighter"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`font-header text-[15px] transition-colors duration-300 ${linkColor}`}
              >
                {item.label}
              </Link>
            )
          )}
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
          {links.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)}
                  className={`w-full flex items-center justify-between font-header py-1 ${dark ? "text-white/85 hover:text-white" : "text-strong/80 hover:text-strong"}`}
                >
                  {item.label}
                  <span className={`ml-2 transition-transform duration-200 ${mobileSubmenu === item.label ? "rotate-180" : ""}`}>▾</span>
                </button>
                {mobileSubmenu === item.label && (
                  <div className="mt-2 ml-3 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={`font-header text-sm py-1 ${dark ? "text-white/70 hover:text-white" : "text-strong/65 hover:text-strong"}`}
                        onClick={() => {
                          setOpen(false);
                          setMobileSubmenu(null);
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`font-header py-1 ${dark ? "text-white/85 hover:text-white" : "text-strong/80 hover:text-strong"}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <JoinButton variant="yellow" className="mt-2 w-full">Join the Movement</JoinButton>
        </div>
      )}
    </nav>
  );
}
