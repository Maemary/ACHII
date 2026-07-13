
import { socialIcons } from "@/lib/socialIcons";
import SocialLinks, { type SocialLink } from "@/app/components/SocialLinks";


const profileLinks:SocialLink[] = [
  {
    name: "Email",
    href: "mailto:Ecodoctr@gmail.com",
    icon: socialIcons.email,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ecodoctr",
    target: "_blank",
    icon: socialIcons.linkedin,
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
    name: "TikTok",
    href: "https://www.tiktok.com/@achii_institute",
    target: "_blank",
    icon: socialIcons.tiktok,
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/ACHII.formerly.Ecodoctr",
    target: "_blank",
    icon: socialIcons.linktree,
  },
];



export const metadata = {
  title: "Donate — ACHII",
  description:
    "Your support helps train climate-health leaders, fund community research, and ensure vulnerable communities are not left behind in the climate crisis.",
  
};

const areas = [
  { icon: "\ud83c\udf31", title: "Research", desc: "Fund nationwide climate-health studies and publication costs for African researchers." },
  { icon: "\ud83c\udf93", title: "Training", desc: "Support webinars, fellowships, and student education across the continent." },
  { icon: "\ud83d\udce2", title: "Community Outreach", desc: "Fund awareness campaigns, school outreach, and regional activities." },
  { icon: "\ud83c\udfe5", title: "Climate-Health Solutions", desc: "Help build resilience and climate-smart infrastructure in vulnerable communities." },
];


export default function ContactCTA() {
  return (
    <div data-nav-theme="light">
      <section className="bg-white py-16">
        <div className="container-site">
          <div className="rounded-2xl bg-bg-soft px-8 py-10 lg:px-12 lg:py-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-primary-base mb-3">
                Let's Work Together
              </p>

              <h2 className="font-header text-3xl lg:text-4xl font-semibold text-strong mb-4">
                Have a question, partnership idea, or funding opportunity?
              </h2>

              <p className="font-body text-sub leading-[1.75]">
                Whether you're a researcher, healthcare professional, donor,
                policymaker, or organization, we'd love to hear from you and
                explore how we can advance climate-health solutions together.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-header font-semibold text-lg text-strong mb-2">
                Contact us
              </p>

              <p className="font-body text-sub mb-5">
                Have a question, partnership idea, or media enquiry? We'd love
                to hear from you.
              </p>

              <p className="btn-primary mb-6 inline-flex font-bold">
                Get in touch
              </p>

              <SocialLinks links={profileLinks} size="sm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}