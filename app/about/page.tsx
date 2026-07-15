import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SplitHero from "@/app/components/SplitHero";
import SectionHeader from "@/app/components/SectionHeader";
import Image from "next/image";
import Placeholder from "@/app/components/Placeholder";
import ImageBand from "@/app/components/ImageBand";

export const metadata = {
  title: "About ACHII — ACHII",
  description:
    "Africa Climate and Health Innovation Institute. Formerly Ecodoctr. Built by African clinicians, students, and researchers for the climate-health future Africa deserves.",
};

const truths = [
  "African researchers can’t afford to publish the evidence policymakers need.",
  "Health clinics collapse under climate shocks they were never designed for.",
  "Communities face climate health crises without the knowledge to protect themselves.",
  "Passionate students have no platform to lead change.",
  "Climate-health knowledge stays locked in silos instead of scaling impact.",
];

export default function AboutPage() {
  return (
    <main className="relative">
      <Navbar />

      <div data-nav-theme="dark">
        <SplitHero
          reverse
          eyebrow="About Us"
          title="ACHII is what happens when frontline clinicians decide the system isn’t going to fix itself."
          subtitle="Africa Climate and Health Innovation Institute. Formerly known as Ecodoctr. Built by African clinicians, students, and researchers for the climate-health future Africa deserves."
          image="/images/brand-portrait.jpg"
          imageAlt="An ACHII team member at a school outreach"
          imgPosition="object-cover object-top"
        />
      </div>

      {/* Our Story */}
      <div data-nav-theme="light">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12">
            <div>
              <SectionHeader eyebrow="Our Story" title="From Ecodoctr to ACHII." />
              <div className="relative w-full h-[240px] rounded-2xl overflow-hidden mt-8 hidden lg:block">
                <Image src="/images/volunteers-pair.jpg" alt="ACHII volunteers at a school outreach" fill sizes="420px" className="object-cover object-top" />
              </div>
            </div>
            <div className="space-y-5 max-w-2xl">
              <p className="font-body text-sub text-base leading-[1.75]">
                ACHII began as Ecodoctr — a grassroots initiative founded by African clinicians,
                students, and public health advocates who recognised that the climate crisis was already
                arriving in their wards. Heatstroke. Cholera after every flood. Malaria in places it used
                to be rare. Respiratory crises during fire seasons. Pregnancy complications in
                flood-prone regions.
              </p>
              <p className="font-body text-sub text-base leading-[1.75]">
                The work that began as Ecodoctr has now scaled into the Africa Climate and Health
                Innovation Institute (ACHII) — a continental institute building the evidence,
                education, and community infrastructure for a climate-resilient health system across
                Africa.
              </p>
              <p className="font-body text-strong font-medium text-base leading-[1.75]">
                The name has changed because the work has scaled. The mission has not.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Why ACHII exists */}
      <div data-nav-theme="dark">
        <section className="bg-primary-dark py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader light eyebrow="Why ACHII Exists" title="Five hard truths." className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {truths.map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                  <span className="font-header font-semibold text-yellow text-3xl block mb-4">0{i + 1}</span>
                  <p className="font-body text-white/85 text-base leading-[1.65]">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Theory of change */}
      <div data-nav-theme="light">
        <section className="bg-primary-lighter py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader
              eyebrow="How We Work — Theory of Change"
              title="IF we do this work — THEN systems transform — BECAUSE these are the prerequisites."
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                ["IF", "We train healthcare professionals to recognise climate-driven illness, equip communities to protect themselves, fund African researchers to generate frontline evidence, prototype climate-smart infrastructure, build youth leadership pipelines, and translate it all into policy change —", "bg-primary-dark text-white"],
                ["THEN", "Africa will build climate-resilient health systems that protect the most vulnerable populations from environmental crisis —", "bg-primary-base text-white"],
                ["BECAUSE", "Knowledge, innovation, and advocacy, rooted in frontline lived experience, are the prerequisites for systemic transformation.", "bg-green text-white"],
              ].map(([tag, body, cls]) => (
                <div key={tag} className={`rounded-2xl p-8 ${cls}`}>
                  <span className="font-header font-semibold text-2xl block mb-4 opacity-90">{tag}</span>
                  <p className="font-body text-sm leading-[1.7] opacity-90">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Impact so far */}
      <div data-nav-theme="light">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12">
            <SectionHeader eyebrow="Our Impact So Far" title="The work is small. The intent is not." />
            <div className="max-w-2xl">
              <p className="font-body text-sub text-base leading-[1.75] mb-7">
                In our first nine months, ACHII has delivered six webinars reaching 170 attendees across
                four countries. We’ve reached 1,570 secondary school students through in-person outreach.
                We’ve launched Nigeria’s first national climate-health awareness study. We’ve deployed
                22 Regional Champions across all six geopolitical zones. And we’ve built active partnerships with NYSC, CHYN, Transformers Global, and Ecohealth Africa.
              </p>
              <div className="bg-primary-lighter rounded-2xl p-7">
                <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-primary-base mb-3">Vision 2036</p>
                <p className="font-body text-strong text-base leading-[1.7]">
                  10,000+ credentialed professionals. 100+ peer-reviewed papers. 50+ retrofitted health
                  facilities. 20+ influenced national policies. Financial independence and WHO integration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div data-nav-theme="dark">
        <ImageBand src="/images/band-community.jpg" alt="Young people standing together" height="h-[432px] md:h-[624px]" />
      </div>

    
      <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
}
