import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ShowcaseHero from "@/app/components/ShowcaseHero";
import ImageBand from "@/app/components/ImageBand";
import Image from "next/image";
import SectionHeader from "@/app/components/SectionHeader";
import Button from "@/app/components/Button";
import WebinarSlide from "../components/webinarSlide";

export const metadata = {
  title: "Training — ACHII",
  description:
    "Climate-health training built for the African front line: Webinars, specialized workshops, and evidence-based training designed by African clinicians, for African clinicians.",
};

const eventDetails = [
  ["Date", "Saturday, 25th July 2026"],
  ["Time", "7:00 PM – 8:30 PM WAT"],
  ["Duration", "90 minutes"],
  ["Platform", "Google Meet"],
  ["Cost", "Free — registration required"],
];

const recordings = [
  { tag: "WB0000 · October 2025 ", title: "The Future of Food & Sustainable Agriculture in Nigeria", desc: "Nigeria loses ₦3.5 trillion in food annually post-harvest. Climate change is compounding these failures. Four audience-specific solutions across households, farmers, youth, and advocates.", href: "https://drive.google.com/drive/folders/1u31rqEaKku9eeUlxZd70g7WX801b6Fuu", linkType: "recording"},
  { tag: "WB0001 · January 2026", title: "The Future of Food & Sustainable Agriculture in Nigeria", desc: "Nigeria loses ₦3.5 trillion in food annually post-harvest. Climate change is compounding these failures. Four audience-specific solutions across households, farmers, youth, and advocates.", href: "https://drive.google.com/file/d/1Z_4sRm_vtwjRHEoZTaMf-jooQi6lWy4R/view?usp=drive_link", linkType: "report"},
  { tag: "WB0002 · February 2026", title: "Future-Proofing Childhood: Building Climate-Resilient Minds", desc: "85% of brain development happens before age 3. Heat, malnutrition, and disaster stress during this window cause irreversible damage. The most evidence-dense session of the series.", href: "https://drive.google.com/file/d/1T5Ezw5EQ5lPkD0e2P5xpmS34YQfPKQvp/view?usp=sharing", linkType: "report"},
  { tag: "WB0003 · March 2026", title: "The Big Itch: Why Climate Change is the Best Thing to Happen to Mosquitoes", desc: "International attendance from Afghanistan and Zambia. Two One Health and epidemiology experts featured. AI outbreak prediction accuracy: 85%.", href: "https://drive.google.com/open?id=1gNLNEklLqfuleq_Qm7e2y9evS0cGl0Wt", linkType: "recording" },
  { tag: "WB0004 · April 2026", title: "Too Hot to Handle: Why Heat is the Ultimate Inequality", desc: "The highest participation quality of the series. Interactive Kahoot quiz introduced. Extreme heat framed as a justice and equity issue, not just a medical one.", href: "https://drive.google.com/open?id=15pk3F-o2XD432kn9bdhIBV4x27BzntTA", linkType: "recording" },
  { tag: "WB0005 · May 2026", title: " Minds Under Pressure: The Unseen Wounds of Climate Change", desc: "Explored the mental health impacts of climate change in African communities, highlighting issues such as eco-anxiety, eco-grief, and the need for holistic post-disaster support.", href: "https://drive.google.com/file/d/1AGZfMb_Q7SjkTas95ucCRzJTx3h1RmxW/view?usp=drive_link", linkType: "recording" },
];

const modules = [
  "Climate change and health foundations",
  "Air Quality Resources",
  "Asthma in children",
  "Data integrity guide",
  "Urgent Health Safety tips"
];


export default function TrainingPage() {
  return (
    <main className="relative">
      <Navbar />

      <div data-nav-theme="dark">
        <ShowcaseHero
  eyebrow="Training"
  title="Climate-health training, built for the African front line."
  subtitle="Webinars, specialized workshops, and evidence-based training — designed by African clinicians, for African clinicians."
  imageContent={<WebinarSlide />}
  imageAlt="An ACHII facilitator addressing students at a school outreach"
  card={{ title: "Next Webinar · WB0007", sub: "Cities Underwater — 25 July 2026" }}
  stat={{ value: "7", label: "Past webinars · free recordings" }}
  sideContent={
    <div>
      <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-4">
        Webinars
      </p>
      <h2 className="font-header font-semibold text-white text-2xl leading-[1.2] mb-4">
        Real conversations on Africa's climate–health frontline
      </h2>
      <p className="font-body text-white/70 text-md leading-[1.75]">
        Every session brings clinicians, researchers, and community advocates
        together to unpack how climate change is reshaping health across the
        continent — and what we can do about it. Free to join, recorded for
        later.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi possimus porro corrupti nam facere eaque dicta accusamus magnam vel quidem necessitatibus, adipisci ab nisi molestiae, quasi tempore quaerat. Eaque.
      </p>
    </div>
  }
/>

        
      </div>

      {/* Upcoming webinar feature */}
      <div data-nav-theme="light">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">
            <div>
              <p className="label-tag mb-4">Upcoming Webinar · WB0007 · 25 July 2026</p>
              <h2 className="font-header font-semibold text-strong text-3xl lg:text-[40px] leading-[1.15] tracking-[-0.01em] mb-4">
                July Webinar: Cities Underwater
                </h2>
              <p className="font-body italic text-sub text-base mb-7">
             Decoding the 2026 Flood Crisis and How Youth Can Build Climate Resilience
              </p>
              <div className="space-y-4 mb-8">
                <p className="font-body text-sub text-base leading-[1.75]">
                 As extreme rainfall and failing municipal infrastructure trigger severe flash floods across Africa, our cities are facing an escalating health and water crisis. Blocked drainage networks and plastic waste bottlenecks are turning seasonal rains into immediate emergencies—compromising local clinics, threatening water security, and driving deadly outbreaks of waterborne pathogens like cholera.
                 </p>
                <p className="font-body text-sub text-base leading-[1.75]">
                This webinar unpacks the immediate realities of the current flood emergency and connects them directly to systemic climate vulnerabilities.</p>
                <p className="font-body text-sub text-base leading-[1.75]">
                Join us for a 90-minute session to decode the structural drivers behind urban flooding, analyze cascading public health risks, and explore youth-led data models. Together, we will build actionable frameworks for community-level adaptation, early-warning mapping, and emergency response to protect frontline communities.

                 </p>
              </div>
              <div className="mb-8">
                <p className="font-header font-semibold text-strong text-sm mb-2">Who should attend</p>
                <p className="font-body text-sub text-sm leading-[1.7]">
                 Healthcare professionals, WASH practitioners, environmental advocates, youth urban planners, community leaders, civil society organizations, students, and citizens dedicated to building climate-resilient cities.
                </p>
              </div>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdNSwJam6YwSDlCJ3HMKcuFBZ79qv9blfYRpMd313JLzYWyJw/viewform" external>Register for the July Webinar</Button>
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
                   <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNSwJam6YwSDlCJ3HMKcuFBZ79qv9blfYRpMd313JLzYWyJw/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-header font-medium text-xs text-yellow underline underline-offset-4 hover:text-primary-base transition-colors self-start">
                Register for the July Webinar
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
              </a>
                </dl>
                <div className="border-t border-white/15 pt-5">
                  <p className="font-body text-xs text-white/50 uppercase tracking-wide mb-2">Speakers</p>
                  <p className="font-body text-white text-sm">Sharon Chiahemen</p>
                </div>
               

                <p className="mt-6 font-body text-xs text-white/40">#CitiesUnderwater</p>
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
{/* 
      <div data-nav-theme="dark">
        <ImageBand src="/images/students-tree.jpg" alt="Students gathered for an ACHII school outreach" height="h-[360px] md:h-[528px]" />
      </div> */}


      {/* Curriculum Commons */}
      <div data-nav-theme="dark">
        <section className="bg-primary-base py-20 lg:py-[120px]">
          <div className="container-site grid lg:grid-cols-[1fr_360px] gap-12 items-center">
            <div>
            <SectionHeader
              eyebrow="Open-Access Learning Hub"
              title="Free. Open-Access. Built to be used — with or without us."
              className="mb-8"
            />
            <div className="max-w-3xl space-y-4 mb-8">
              <p className="font-body text-white text-base leading-[1.75]">
                ACHII believes that climate-health evidence and tools belong to the frontline. Our Resource Bank equips our allies, advocates, and partners with open-access assets—from policy briefs to visual infographics—designed to be independently shared, adapted, and scaled for community impact.
              </p>
              <p className="font-body text-yellow text-base leading-[1.75]">Modules in development cover:</p>
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
              <Image src="/images/train.jpg" alt="An ACHII volunteer holding a climate-health education poster" fill sizes="(max-width:1024px) 100vw, 360px" className="object-cover" />
            </div>
          </div>
        </section>
      </div>

      
      {/* Fellowship */}
      <div data-nav-theme="light">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site max-w-3xl">
            <p className="font-body font-semibold text-[14px] tracking-[0.14em] uppercase text-yellow mb-4">Coming Soon</p>
            <h2 className="font-header font-semibold text-sub text-3xl lg:text-[40px] leading-[1.15] tracking-[-0.01em] mb-5">
              Climate-Health Fellowship Programme
            </h2>
            <p className="font-body text-sub text-lg leading-[1.6] mb-5">
              A structured cohort programme for the next generation of African climate-health practitioners.
            </p>
            <p className="font-body text-sub text-base leading-[1.75] mb-8">
              We are building a structured Fellowship Programme — combining mentorship, cohort learning,
              fieldwork, and research credentialing — to train the next generation of African
              climate-health practitioners. <b>Applications open later in 2026.</b>
            </p>
            <Button href="#" variant="outline-white">Register Interest</Button>
          </div>
        </section>
      </div>

      <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
}
