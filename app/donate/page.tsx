
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import SectionHeader from "@/app/components/SectionHeader";
// import DonateWidget from "@/app/components/DonateWidget";
import SocialLinks, { type SocialLink } from "@/app/components/SocialLinks";
import { socialIcons } from "@/lib/socialIcons";
import Link from "next/link";
import Image from "next/image";
import { partners } from "@/app/data/partners";

import PartnerCarousel from "../components/partnerCarousel";

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




//const stats = [["5", "Active Projects"], ["170", "Webinar Attendees"], ["22", "Regional Champions"], ["15", "Countries Reached"]];

 export default function DonatePage({ searchParams }: { searchParams: { type?: string } }) {
const initialFreq = searchParams?.type === "monthly" ? "monthly" : "once";

  return (
    <main className="relative">
      <Navbar />

      {/* <div data-nav-theme="dark">
        <PageHero
          eyebrow="Donate"
          title="Fund the work. Build the future."
          subtitle="Your support helps train climate-health leaders, fund community research, and ensure vulnerable communities are not left behind in the climate crisis."
        />
      </div> */}

      {/* What your donation supports */}
      {/* <div data-nav-theme="light">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader eyebrow="What Your Donation Supports" title="Every gift funds a specific piece of the work." className="mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {areas.map((a) => (
                <div key={a.title} className="bg-primary-lighter rounded-2xl p-7">
                  <div className="text-3xl mb-4">{a.icon}</div>
                  <h3 className="font-header font-semibold text-strong text-lg mb-2">{a.title}</h3>
                  <p className="font-body text-sub text-sm leading-[1.65]">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div> */}

      {/* Donation widget + impact examples */}
      {/* <div data-nav-theme="light" id="give">
        <section className="bg-bg-soft py-20 lg:py-[120px]">
          <div className="container-site grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader eyebrow="Make a Donation" title="Choose what works for you." className="mb-6" />
              <p className="font-body text-sub text-base leading-[1.7] mb-8">
                Give once or become a recurring supporter. Every amount is tied to real impact on the
                ground — here is what your gift can do:
              </p>
              <ul className="space-y-3">
                {examples.map(([amt, what]) => (
                  <li key={amt} className="flex gap-3 items-start">
                    <span className="font-header font-semibold text-primary-base text-sm whitespace-nowrap min-w-[72px]">{amt}</span>
                    <span className="font-body text-sub text-sm leading-[1.6]">{what}</span>
                  </li>
                ))}
              </ul>
            </div>
            <DonateWidget initialFreq={initialFreq} />
          </div>
        </section>
      </div> */}


<div data-nav-theme="dark">
  <PageHero
    eyebrow="Why You Can Trust Us"
    eyebrowClassName="font-body font-semibold text-lg tracking-[0.14em] uppercase text-yellow mb-5"
    title="Transparency is part of the mission."
    subtitle="Your support helps train climate-health leaders, fund community research, and ensure vulnerable communities are not left behind in the climate crisis."
    sideImage="/images/outreach-blue.jpg"
  />
</div>

      {/* Trust section */}
      <div data-nav-theme="light">
  <section className="bg-primary-base py-10 lg:py-[120px] mb-2">
    <PartnerCarousel />
  </section>
</div>


<div data-nav-theme="light">
  <section className="bg-white py-16">
    <div className="container-site">
      <div className="rounded-2xl bg-bg-soft px-8 py-10 lg:px-12 lg:py-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* max-w-2xl + mt-8 blocks unchanged */}
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
                    Have a question, partnership idea, or media enquiry? We'd love to hear from you.
                  </p>

                  <p
                    className="btn-primary mb-6 inline-flex font-bold"
                  >
                    Get in touch
                  </p>
                      <SocialLinks links={profileLinks} size="sm" />

                </div>
      </div>
    </div>
  </section>
</div>
    {/* <div className="container-site">
          
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {stats.map(([v, l]) => (
                <div key={l}>
                  <div className="font-header font-semibold text-white text-4xl lg:text-5xl mb-2">{v}</div>
                  <div className="font-body text-white/70 text-sm">{l}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-4">Our Partners</p>
                <div className="flex flex-wrap gap-3">
                  {partners.map((p) => (
                    <span key={p} className="rounded-full border border-white/25 px-4 py-2 font-body text-sm text-white/85">{p}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-4">Transparency</p>
                <p className="font-body text-white/80 text-sm leading-[1.7] mb-13">
                  ACHII (formerly Ecodoctr) is the Africa Climate and Health Innovation Institute. Every
                  donation is allocated to research, training, outreach, or infrastructure — and we
                  publish quarterly impact reports so you can see exactly where it goes.
                </p>
                <p className="font-body text-white/55 text-xs mb-8">Registration details to be added before launch.</p>
              </div>
            </div>
          </div> */}



        

      <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
  }
