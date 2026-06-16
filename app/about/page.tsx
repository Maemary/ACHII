import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SplitHero from "@/app/components/SplitHero";
import SectionHeader from "@/app/components/SectionHeader";
import Button from "@/app/components/Button";
import Image from "next/image";
import Placeholder from "@/app/components/Placeholder";
import ImageBand from "@/app/components/ImageBand";

export const metadata = {
  title: "About Us — ACHII",
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

const values = [
  ["Collaboration", "Strength in unity. We share knowledge freely and value collective success over individual recognition."],
  ["Inclusion", "Belonging for all. We intentionally seek out diverse perspectives."],
  ["Proactiveness", "Ownership of action. See a gap? Fill it."],
  ["Excellence", "Commitment to quality. Good enough is never the goal."],
  ["Integrity", "Honesty in effort. Trust is the foundation of our work."],
  ["Empathy", "Compassion in service. We lead with heart."],
];

const roles = [
  "Founder & Executive Director — Dr Aishat Oduye",
  "Research Lead",
  "Operations Lead",
  "Communications Lead",
  "Programmes Lead",
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
                In our first six months, ACHII has delivered four webinars reaching 117 attendees across
                four countries. We’ve reached ~70 secondary school students through in-person outreach.
                We’ve launched Nigeria’s first national climate-health awareness study. We’ve deployed
                17 Regional Champions across all six geopolitical zones. And we’ve mapped strategic
                partnerships with 10 global organisations including WHO, Wellcome Trust, UNEP, AfDB, and
                the Red Cross Red Crescent Climate Centre.
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

      {/* Founder */}
      <div data-nav-theme="light">
        <section className="bg-bg-soft py-20 lg:py-[120px]">
          <div className="container-site grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12">
            <div>
              <Placeholder label="Founder photo — to be added" className="aspect-[4/5] mb-5" />
              <h2 className="font-header font-semibold text-strong text-2xl leading-tight">Dr Aishat Oduye</h2>
              <p className="font-body text-primary-base text-sm mt-1">Founder & Executive Director</p>
            </div>
            <div>
              <p className="label-tag mb-4">Founder’s Story</p>
              <h3 className="font-header font-semibold text-strong text-2xl lg:text-[28px] leading-tight mb-6">Why I started ACHII.</h3>
              <Placeholder
                dark={false}
                label="Professional bio (100–150 words) and first-person “Why I started ACHII” narrative (250–400 words) to be added before launch. Pair with a founder photo and a 60–90 second video."
                className="min-h-[180px] mb-6"
              />
              <p className="font-body text-sub text-sm leading-[1.7]">
                We recommend pairing this section with a strong founder photo and a short video of the
                founder telling this story in her own voice.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Board + Core team */}
      <div data-nav-theme="light">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader
              eyebrow="Board of Advisors"
              title="Senior leaders guiding ACHII’s strategy and impact."
              intro="Our Board brings together expertise across climate science, public health, healthcare policy, research, and youth advocacy."
              className="mb-10"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {[1, 2, 3].map((n) => (
                <Placeholder key={n} label={`Advisor ${n} — photo · name · role · organisation · bio`} className="min-h-[200px]" />
              ))}
            </div>

            <SectionHeader
              eyebrow="Core Team"
              title="The team building this every day."
              intro="ACHII is run by a small, focused team of clinicians, researchers, communicators, and operations leads — every hire mission-aligned."
              className="mb-10"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {roles.map((r) => (
                <div key={r} className="bg-primary-lighter rounded-xl p-6">
                  <p className="font-header font-medium text-strong text-sm">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Volunteers */}
      <div data-nav-theme="light">
        <section className="bg-bg-soft py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader
              eyebrow="Volunteers & ACHII Allies"
              title="ACHII is powered by the people who show up."
              intro="Beyond our core team, ACHII is sustained by a growing network of volunteers — Allies, Regional Champions, student ambassadors, peer reviewers, writers, and contributors of every kind."
              className="mb-10"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <Placeholder key={n} label={`Volunteer ${n} — photo · name · role · region`} className="min-h-[160px]" />
              ))}
            </div>
            <p className="font-body text-sub text-base mb-8">
              If you’re already volunteering — thank you. If you’re not yet — there’s a place for you.
            </p>
            <Button href="/get-involved#volunteer" variant="yellow">Volunteer with ACHII</Button>
          </div>
        </section>
      </div>

      {/* Core values */}
      <div data-nav-theme="dark">
        <section className="bg-primary-base py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader light eyebrow="Our Core Values" title="Six values, six rules of engagement." className="mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map(([t, d]) => (
                <div key={t} className="bg-white/10 border border-white/15 rounded-2xl p-7">
                  <h3 className="font-header font-semibold text-white text-lg mb-2">{t}</h3>
                  <p className="font-body text-white/75 text-sm leading-[1.7]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
}
