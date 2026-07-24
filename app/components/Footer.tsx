import Link from "next/link";
import Logo from "./Logo";
import SocialLinks, {type SocialLink} from "./SocialLinks";
import { socialIcons } from "@/lib/socialIcons";



const cols = [
  { heading: "Explore", links: [
    { label: "Home", href: "/" },
    { label: "Training", href: "/training" },
    { label: "Programmes", href: "/insights" },
    { label: "Research", href: "/#research" },
    { label: "Reports", href: "/reports" },
    { label: "About", href: "/about" },
  ] },
  { heading: "Get Involved", links: [
    { label: "Join as an Ally", href: "/get-involved" },
    //{ label: "", href: "/donate" },
    { label: "Volunteer", href: "/get-involved#volunteer" },
    { label: "Partner with us", href: "/partner" },
  ] },
];

const profileLinks:SocialLink[] = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@achii_institute",
    target: "_blank",
    icon: socialIcons.tiktok,
  },
  {
    name: "X",
    href: "https://x.com/ACHII_Ecodoctr",
    target: "_blank",
    icon: socialIcons.x,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/achii_ecodoctr/",
    target: "_blank",
    icon: socialIcons.instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ecodoctr",
    target: "_blank",
    icon: socialIcons.linkedin,
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/ACHII.formerly.Ecodoctr",
    target: "_blank",
    icon: socialIcons.linktree,
  },
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
              <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-white/50 mb-5">Contact Us</p>
              <address className="not-italic font-body text-sm text-white/80 leading-relaxed mb-5">
                <a href="mailto:info@achii.co" className="underline underline-offset-2 hover:text-white">info@achii.co</a>
              </address>
              <SocialLinks links={profileLinks} size="sm" />
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
