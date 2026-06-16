import Link from "next/link";
import Logo from "./Logo";

const socials = [
  { name: "TikTok", path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.84 4.84 0 0 1-1-.05z" },
  { name: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { name: "Instagram", path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.9.07s-3.63 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2zm0 3.13A6.67 6.67 0 1 0 18.67 12 6.67 6.67 0 0 0 12 5.33zm0 11A4.33 4.33 0 1 1 16.33 12 4.33 4.33 0 0 1 12 16.33zm6.94-11.27a1.56 1.56 0 1 1-1.56-1.56 1.56 1.56 0 0 1 1.56 1.56z" },
  { name: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

const cols = [
  { heading: "Explore", links: [
    { label: "Home", href: "/" },
    { label: "Training", href: "/training" },
    { label: "Research", href: "/#research" },
    { label: "Reports", href: "/reports" },
    { label: "About", href: "/about" },
  ] },
  { heading: "Get Involved", links: [
    { label: "Join as an Ally", href: "/get-involved" },
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/get-involved#volunteer" },
    { label: "Partner with us", href: "/get-involved#partner" },
  ] },
];

export default function Footer() {
  return (
    <footer className="bg-primary-base text-white">
      <div className="max-w-site mx-auto px-5 lg:px-[50px] pt-16 pb-8">
        <div className="flex flex-col lg:flex-row gap-14 mb-14">
          <div className="lg:w-[520px]">
            <Logo variant="white" align="left" className="mb-7" />
            <p className="font-header font-semibold text-white text-3xl lg:text-[38px] leading-[1.14] tracking-[-0.01em] max-w-md mb-5">
              Building Africa&apos;s climate health leaders.
            </p>
            <p className="font-body text-white/70 text-sm leading-[1.7] max-w-md">
              ACHII exists to build climate-resilient healthcare systems in Africa through high-impact
              education, youth-led advocacy, and research-to-policy translation.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-10 lg:pl-10">
            {cols.map((c) => (
              <div key={c.heading}>
                <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-white/50 mb-5">{c.heading}</p>
                <ul className="space-y-3">
                  {c.links.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="font-body text-sm text-white/80 hover:text-white transition-colors">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-white/50 mb-5">Connect</p>
              <address className="not-italic font-body text-sm text-white/80 leading-relaxed mb-5">
                <a href="mailto:ecodoctr@gmail.com" className="underline underline-offset-2 hover:text-white">ecodoctr@gmail.com</a><br />
                @Achii_ecodoctr
              </address>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a key={s.name} href="#" aria-label={s.name} className="w-8 h-8 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/15 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((item) => (
              <Link key={item} href="#" className="font-body text-xs text-white/60 hover:text-white transition-colors">{item}</Link>
            ))}
          </div>
          <p className="font-body text-xs text-white/60">
            &copy; 2026 Africa Climate and Health Innovation Institute. Formerly Ecodoctr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
