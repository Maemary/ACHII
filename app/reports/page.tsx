import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SplitHero from "@/app/components/SplitHero";
import SectionHeader from "@/app/components/SectionHeader";
import Image from "next/image";
import Button from "@/app/components/Button";
import SubscribeForm from "../components/EmailSignup";

export const metadata = {
  title: "Reports & Resources — ACHII",
  description:
    "Webinar recordings, written reports, toolkits, infographics, and writings from African voices on the climate-health front line.",
};

const bankItems = [
  ["Past Webinar Recordings", "Catch up on every session since January, including the “Big Itch” series and our recent “Too Hot to Handle” session."],
  ["Past Webinar Reports", "Prefer reading? Dive into our comprehensive written reports and summaries of every past session."],
  ["Practical Tools & Toolkits", "Including our Heat Guide for community heat-preparedness and our Data Integrity Guide to level up your research skills."],
  ["Infographics & Expert Briefs", "Updated as new evidence and resources are published."],
];


const webinarReports = [
  {
    title: "WB0001 Report — Food & Sustainable Agriculture in Nigeria",
    link: "https://drive.google.com/file/d/1Z_4sRm_vtwjRHEoZTaMf-jooQi6lWy4R/view",
  },
  {
    title: "WB0002 Report — Climate-Resilient Childhood",
    link: "https://drive.google.com/file/d/1T5Ezw5EQ5lPkD0e2P5xpmS34YQfPKQvp/view",
  },
  {
    title: "WB0003 Report — Climate Change and Vector-Borne Disease",
    link: "https://drive.google.com/file/d/1TGCKxJ782m7CnvczVm6Rm8jWxW8OAOE4/view",
  },
  {
    title: "WB0004 Report — Heat and Inequality",
    link: "https://drive.google.com/file/d/13oW_jL8wlDlkYxPzh5rO-EKZL2sxlaxr/view",
  },
   {
    title: "WB0005 Report —  Wounds of Climate Change",
    link: "https://drive.google.com/file/d/1Sf65sWbKoGPtBRyozghAWNy8D1zQ3gvQ/view?usp=sharing",
  },
  
];

const toolkits = [
  ["Heat Guide", "A community heat-preparedness guide for households, schools, and clinics. Practical, illustrated, and culturally grounded."],
  ["Data Integrity Guide", "A short, hands-on resource for researchers and Regional Champions running surveys and data collection in the field."],
];

export default function ReportsPage() {
  return (
    <main className="relative">
      <Navbar />

      <div data-nav-theme="dark">
        <SplitHero
          eyebrow="Reports & Resources"
          title="Everything we’ve learned. In one place. Yours to use."
          subtitle="Webinar recordings, written reports, practical toolkits, infographics, and writings from African voices on the climate-health front line."
          image="/images/band-research.jpg"
          imageAlt="Healthcare professionals reviewing climate-health data together"
        />
      </div>

      {/* Resource Bank feature */}
      <div data-nav-theme="dark">
        <section className="bg-primary-base py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader
              light
              eyebrow="The ACHII Allies Resource Bank"
              title="Unlock the knowledge vault."
              intro="Watch, listen, or read. We’ve curated months of data-driven insight in one place."
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {bankItems.map(([t, d]) => (
                <div key={t} className="bg-white/10 border border-white/15 rounded-2xl p-7">
                  <h3 className="font-header font-semibold text-white text-lg mb-2">{t}</h3>
                  <p className="font-body text-white/75 text-sm leading-[1.7]">{d}</p>
                </div>
              ))}
            </div>
            {/* <div className="max-w-3xl mb-9 space-y-4">
              <p className="font-body text-white/80 text-base leading-[1.75]">
                The Resource Bank is part of the ACHII Allies experience. Join the Allies community
                (free, email only) and you get access to everything in the vault — plus first word
                when new resources land.
              </p>
              <p className="font-body text-white/80 text-base leading-[1.75]">
                Already an Ally? Welcome back. Want a specific topic, dataset, or resource added? Tell
                us. We’re building this for you.
              </p>
            </div> */}
            <div className="flex flex-wrap gap-3">
              <Button href="https://drive.google.com/drive/folders/1XJCt3uu6n7Vt02aj3BUx9mZ6ahIvWM2M" variant="yellow">Access the Resource Bank</Button>
               </div>
          </div>
        </section>
      </div>

      {/* Featured Q1 report */}
      <div data-nav-theme="light">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site">
            <div className="bg-primary-lighter rounded-2xl overflow-hidden grid lg:grid-cols-2 items-stretch">
              <div className="relative min-h-[240px] lg:min-h-[380px] order-1 lg:order-2">
                <Image src="/images/team-group.jpg" alt="ACHII team and students with climate-health infographics" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-9 lg:p-14 order-2 lg:order-1">
                <p className="label-tag mb-4">Featured · Q1 Impact Report</p>
              <h2 className="font-header font-semibold text-strong text-2xl lg:text-[34px] leading-[1.2] tracking-[-0.01em] mb-5 max-w-2xl">
                ACHII Q1 Impact Report — January to April 2026
              </h2>
              <p className="font-body text-sub text-base leading-[1.75] max-w-3xl mb-8">
                Our first quarterly impact report covers the launch of the webinar series, in-person
                school outreach, the pilot phase of the national research study, and the deployment of
                the Regional Champion Model. It’s also a window into how ACHII works — what we
                measure, what we learn, and what we do next.
              </p>
                <Button href="https://drive.google.com/file/d/1bLIfrLKF6yd2MylH6F0jaeaKpKQMw9lf/view?usp=drive_link" variant="yellow">Download the Q1 Report (PDF)</Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Webinar reports list */}
      <div data-nav-theme="light">
        <section className="bg-bg-soft py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader
              eyebrow="Webinar Reports"
              title="Going deeper than the slides."
              intro="Each webinar session has a companion report — speaker insights, audience Q&A highlights, and the evidence base."
              className="mb-10"
            />
              <ul className="divide-y divide-stroke-sub/70 border-t border-b border-stroke-sub/70">
                {webinarReports.map((report) => (
                  <li
                    key={report.title}
                    className="flex items-center justify-between gap-4 py-5"
                  >
                    <span className="font-header font-medium text-strong text-base">
                      {report.title}
                    </span>

                    <a
                      href={report.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-header font-medium text-sm text-primary-base hover:text-primary-dark transition-colors whitespace-nowrap"
                    >  
                     Read Report
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Toolkits */}
      <div data-nav-theme="light">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader
              eyebrow="Practical Tools & Toolkits"
              title="Field-tested. Free to use."
              intro="Practical guides built for the work, not the bookshelf."
              className="mb-10"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-9">
              {toolkits.map(([t, d]) => (
                <div key={t} className="bg-primary-lighter rounded-2xl p-7">
                  <h3 className="font-header font-semibold text-strong text-lg mb-2">{t}</h3>
                  <p className="font-body text-sub text-sm leading-[1.7]">{d}</p>
                </div>
              ))}
            </div>
            <Button href="https://drive.google.com/drive/folders/1_8ovBrWdtCqYk_TLQwvu9NCbn6N4QTNh"  variant="yellow">Browse Toolkits in Resource Bank</Button>
          </div>
        </section>
      </div>

      {/* Newsletter + Writings */}
      <div data-nav-theme="light">
        <section className="bg-bg-soft py-20 lg:py-[120px]">
          <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-9">
              <p className="label-tag mb-4">Newsletter Archive</p>
              <h2 className="font-header font-semibold text-strong text-2xl lg:text-[28px] leading-tight mb-3">The ACHII Newsletter.</h2>
              <p className="font-body text-sub text-base mb-5">Monthly. Honest. Free.</p>
              <p className="font-body text-sub text-sm leading-[1.75] mb-7">
                Once a month, we share what we’re working on, what we’ve learned, and what we need
                help with. Past editions are archived here so new readers can catch up.
              </p>
              <SubscribeForm
  source="newsletter"
  buttonLabel="Subscribe to the Newsletter"
/>
<p className="font-body text-soft text-xs mt-3">
  Email only. We'll send your welcome letter, WhatsApp invite, and Resource Bank link.
</p>
              </div>
            <div className="bg-white rounded-2xl p-9">
              <p className="label-tag mb-4">Writings from African Voices</p>
              <h2 className="font-header font-semibold text-strong text-2xl lg:text-[28px] leading-tight mb-3">Climate health, told by the people living it.</h2>
              <p className="font-body text-sub text-base mb-5">Op-eds, essays, and field reflections from African clinicians, researchers, and community advocates.</p>
              <p className="font-body text-sub text-sm leading-[1.75] mb-7">
                If you have a story to tell, a perspective to share, or research you want amplified —
                we want to hear from you.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="#" variant="outline-dark">Read the Latest Writings <p className="text-yellow">(Coming Soon)</p></Button>
                <Button href="https://forms.gle/bYggA3xcLdvT5eMK7" variant="yellow">Submit Your Writing</Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
}
