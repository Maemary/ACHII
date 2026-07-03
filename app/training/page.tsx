import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ShowcaseHero from "@/app/components/ShowcaseHero";
import ImageBand from "@/app/components/ImageBand";
import Image from "next/image";
import SectionHeader from "@/app/components/SectionHeader";
import Button from "@/app/components/Button";

export const metadata = {
  title: "Training — ACHII",
  description:
    "Climate-health training built for the African front line: webinars, workshops, and credentialed learning designed by African clinicians, for African clinicians.",
};

const eventDetails = [
  ["Date", "Saturday, 27th June 2026"],
  ["Time", "7:00 PM – 8:30 PM WAT"],
  ["Duration", "90 minutes"],
  ["Platform", "Google Meet"],
  ["Cost", "Free — registration required"],
];

const recordings = [
  { tag: "WB0000 · October 2025 · 42 attendees", title: "The Future of Food & Sustainable Agriculture in Nigeria", desc: "Nigeria loses ₦3.5 trillion in food annually post-harvest. Climate change is compounding these failures. Four audience-specific solutions across households, farmers, youth, and advocates.", href: "https://drive.google.com/file/d/1Z_4sRm_vtwjRHEoZTaMf-jooQi6lWy4R/view?usp=drive_link", linkType: "report"},
  { tag: "WB0001 · January 2026 · 42 attendees", title: "The Future of Food & Sustainable Agriculture in Nigeria", desc: "Nigeria loses ₦3.5 trillion in food annually post-harvest. Climate change is compounding these failures. Four audience-specific solutions across households, farmers, youth, and advocates.", href: "https://drive.google.com/file/d/1Z_4sRm_vtwjRHEoZTaMf-jooQi6lWy4R/view?usp=drive_link", linkType: "report"},
  { tag: "WB0002 · February 2026 · 17 attendees", title: "Future-Proofing Childhood: Building Climate-Resilient Minds", desc: "85% of brain development happens before age 3. Heat, malnutrition, and disaster stress during this window cause irreversible damage. The most evidence-dense session of the series.", href: "https://drive.google.com/file/d/1T5Ezw5EQ5lPkD0e2P5xpmS34YQfPKQvp/view?usp=sharing", linkType: "report"},
  { tag: "WB0003 · March 2026 · 36 attendees", title: "The Big Itch: Why Climate Change is the Best Thing to Happen to Mosquitoes", desc: "International attendance from Afghanistan and Zambia. Two One Health and epidemiology experts featured. AI outbreak prediction accuracy: 85%.", href: "https://drive.google.com/open?id=1gNLNEklLqfuleq_Qm7e2y9evS0cGl0Wt", linkType: "recording" },
  { tag: "WB0004 · April 2026 · 22 attendees", title: "Too Hot to Handle: Why Heat is the Ultimate Inequality", desc: "The highest participation quality of the series. Interactive Kahoot quiz introduced. Extreme heat framed as a justice and equity issue, not just a medical one.", href: "https://drive.google.com/open?id=15pk3F-o2XD432kn9bdhIBV4x27BzntTA", linkType: "recording" },
  { tag: "WB0005 · May 2026 · 22 attendees", title: " Minds Under Pressure: The Unseen Wounds of Climate Change", desc: "Explored the mental health impacts of climate change in African communities, highlighting issues such as eco-anxiety, eco-grief, and the need for holistic post-disaster support.", href: "https://drive.google.com/file/d/1AGZfMb_Q7SjkTas95ucCRzJTx3h1RmxW/view?usp=drive_link", linkType: "recording" },
];

const modules = [
  "Climate-driven disease patterns",
  "Clinical assessment in heat events",
  "Flood-response triage",
  "Vector-borne shifts",
  "Community health literacy",
];

export default function TrainingPage() {
  return (
    <main className="relative">
      <Navbar />

      <div data-nav-theme="dark">
        <ShowcaseHero
          eyebrow="Training"
          title="Climate-health training, built for the African front line."
          subtitle="Webinars, workshops, and credentialed learning — designed by African clinicians, for African clinicians."
          image="/images/outreach-assembly.jpg"
          imageAlt="An ACHII facilitator addressing students at a school outreach"
          card={{ title: "Next Webinar · WB0006", sub: "Voices From The Margins — 27 June 2026" }}
          stat={{ value: "5", label: "Past webinars · free recordings" }}
        />
      </div>

      {/* Upcoming webinar feature */}
      <div data-nav-theme="light">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">
            <div>
              <p className="label-tag mb-4">Upcoming Webinar · WB0006 · 27 June 2026</p>
              <h2 className="font-header font-semibold text-strong text-3xl lg:text-[40px] leading-[1.15] tracking-[-0.01em] mb-4">
                Voices From The Margins 
                </h2>
              <p className="font-body italic text-sub text-base mb-7">
             Protecting Women, Elderly, and Low-Income Communities in Africa's Climate Crisis
              </p>
              <div className="space-y-4 mb-8">
                <p className="font-body text-sub text-base leading-[1.75]">
                   As Africa faces intensifying climate impacts, the most vulnerable populations such as women, elderly, and low-income communities, bear disproportionate burdens yet lack decision-making power in climate conversations.
             
                 </p>
                <p className="font-body text-sub text-base leading-[1.75]">
                This webinar centres their experiences, elevates solutions-oriented voices from within these communities, and builds collective action for protection and resilience. By hosting this in June, we position ACHII as a leader in climate justice and inclusive climate health action.
               
                </p>
                <p className="font-body text-sub text-base leading-[1.75]">
                 Join us for a 90-minute conversation that examines the intersecting vulnerabilities these groups face, explores evidence-based adaptation strategies, and builds pathways for inclusive climate action that prioritises protection, dignity, and equitable access to resources.
                </p>
              </div>
              <div className="mb-8">
                <p className="font-header font-semibold text-strong text-sm mb-2">Who should attend</p>
                <p className="font-body text-sub text-sm leading-[1.7]">
                  Climate health practitioners, healthcare workers, women's rights advocates, elderly care specialists, policymakers, community leaders, social workers, and anyone passionate about climate justice and protecting vulnerable populations.

                </p>
              </div>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdNSwJam6YwSDlCJ3HMKcuFBZ79qv9blfYRpMd313JLzYWyJw/viewform" external>Register for the June Webinar</Button>
            </div>

            {/* Event details sidebar */}
            <aside className="lg:sticky lg:top-28 self-start">
              <div className="bg-primary-dark rounded-2xl p-8">
                <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-5">Event Details</p>
                <dl className="space-y-4 mb-7">
                  {eventDetails.map(([k, v]) => (
                    <div key={k}>
                      <dt className="font-body text-xs text-white/50 uppercase tracking-wide mb-1">{k}</dt>
                      <dd className="font-body text-white text-sm">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-white/15 pt-5">
                  <p className="font-body text-xs text-white/50 uppercase tracking-wide mb-2">Speakers</p>
                  <p className="font-body text-white text-sm">Lasisi Godwin (UNICEF GEN-U Youth Advisor)</p>
                  <p className="font-body text-white text-sm">Jennifer Uchendu (Founder, SustyVibes)</p>
                  <p className="font-body text-white text-sm">Kehinde Olanrewaju (Founder, Better Health Initiative)</p>
                </div>
                <p className="mt-6 font-body text-xs text-white/40">#VoicesFromTheMargins</p>
              </div>
            </aside>
          </div>
        </section>
      </div>

      {/* Past recordings */}
      <div data-nav-theme="light">
        <section className="bg-primary-lighter py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader
              eyebrow="Past Webinar Recordings"
              title="Catch up on the series so far."
              intro="All recordings free, in full. Watch on your own time, share with your team."
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recordings.map((r) => (
                <div key={r.tag} className="bg-white rounded-2xl p-7 flex flex-col">
                  <p className="font-body text-xs text-primary-base font-semibold tracking-wide uppercase mb-3">{r.tag}</p>
                  <h3 className="font-header font-semibold text-lg text-strong leading-snug mb-3">{r.title}</h3>
                  <p className="font-body text-sub text-sm leading-[1.7] mb-6 flex-1">{r.desc}</p>
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-header font-medium text-sm text-strong underline underline-offset-4 hover:text-primary-base transition-colors self-start">
                   {r.linkType === "report" ? "View Report" : "Watch Recording"}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div data-nav-theme="dark">
        <ImageBand src="/images/students-tree.jpg" alt="Students gathered for an ACHII school outreach" height="h-[360px] md:h-[528px]" />
      </div>

      {/* Fellowship */}
      <div data-nav-theme="dark">
        <section className="bg-primary-base py-20 lg:py-[120px]">
          <div className="container-site max-w-3xl">
            <p className="font-body font-semibold text-[14px] tracking-[0.14em] uppercase text-yellow mb-4">Coming Soon</p>
            <h2 className="font-header font-semibold text-white text-3xl lg:text-[40px] leading-[1.15] tracking-[-0.01em] mb-5">
              Climate-Health Fellowship Programme
            </h2>
            <p className="font-body text-white/80 text-lg leading-[1.6] mb-5">
              A structured cohort programme for the next generation of African climate-health practitioners.
            </p>
            <p className="font-body text-white/70 text-base leading-[1.75] mb-8">
              We are building a structured Fellowship Programme — combining mentorship, cohort learning,
              fieldwork, and research credentialing — to train the next generation of African
              climate-health practitioners. Applications open later in 2026.
            </p>
            <Button href="#" variant="outline-white">Register Interest</Button>
          </div>
        </section>
      </div>

      {/* Curriculum Commons */}
      <div data-nav-theme="light">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site grid lg:grid-cols-[1fr_360px] gap-12 items-center">
            <div>
            <SectionHeader
              eyebrow="Open-Source Curriculum Commons"
              title="Free. Creative Commons. Built to be used — with or without us."
              className="mb-8"
            />
            <div className="max-w-3xl space-y-4 mb-8">
              <p className="font-body text-sub text-base leading-[1.75]">
                ACHII believes climate-health knowledge belongs to everyone. Our curriculum modules are
                released under Creative Commons licensing so any clinician, educator, or institution can
                teach them, adapt them, and scale them.
              </p>
              <p className="font-body text-sub text-base leading-[1.75]">Modules in development cover:</p>
            </div>
            <div className="flex flex-wrap gap-3 mb-9">
              {modules.map((m) => (
                <span key={m} className="rounded-full bg-primary-lighter text-primary-base font-body text-sm px-4 py-2">{m}</span>
              ))}
            </div>
          <p className="font-body font-semibold text-[18px] tracking-[0.14em] uppercase text-yellow mb-4">Coming Soon</p>

            {/* <Button href="#" variant="yellow">Browse the Curriculum</Button> */}
            </div>
            <div className="relative w-full h-[360px] lg:h-[460px] rounded-3xl overflow-hidden">
              <Image src="/images/volunteer-poster.jpg" alt="An ACHII volunteer holding a climate-health education poster" fill sizes="(max-width:1024px) 100vw, 360px" className="object-cover" />
            </div>
          </div>
        </section>
      </div>

      <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
}
