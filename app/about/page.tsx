import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SplitHero from "@/app/components/SplitHero";
import SectionHeader from "@/app/components/SectionHeader";
import Image from "next/image";
import Placeholder from "@/app/components/Placeholder";
import ImageBand from "@/app/components/ImageBand";
import ImpactStats from "@/app/components/ImpactStats";
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
          title='"ACHII is what happens when frontline clinicians decide the system isn’t going to fix itself."'
          quoteAuthor="Dr. Aishat"
          subtitle="Africa Climate and Health Innovation Institute. Formerly known as Ecodoctr. Built by African clinicians, students, and researchers for the climate-health future Africa deserves."
          image="https://res.cloudinary.com/davuaeyxb/image/upload/v1784289738/Aishat_Oduye_Photo_eoin1w.jpg"
          imageAlt="An ACHII team member at a school outreach"
          imgPosition="object-cover object-center"
        />
       
      </div>
    
      {/* Our Story */}
      <div data-nav-theme="light">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12">
            <div>
              <SectionHeader eyebrow="Our Story" title="From Ecodoctr to ACHII." />
              <div className="relative w-full h-[240px] rounded-2xl overflow-hidden mt-8 hidden lg:block">
                <Image src="https://res.cloudinary.com/davuaeyxb/image/upload/v1784124032/achii/images/Mission.jpg" alt="ACHII volunteers at a school outreach" fill sizes="420px" className="object-cover object-top" />
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
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-6">
              {truths.map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg md:rounded-2xl p-2.5 md:p-7">
                  <span className="font-header font-semibold text-yellow text-base md:text-3xl block mb-1.5 md:mb-4">0{i + 1}</span>
                  <p className="font-body text-white/85 text-[10px] md:text-base leading-[1.4] md:leading-[1.65]">{t}</p>
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
    <div className="container-site">
      <div className="mb-12">
        <p className="label-tag mb-4">Our Impact So Far</p>
        <h2 className="font-header font-semibold text-[34px] lg:text-5xl leading-[1.12] tracking-[-0.02em] max-w-2xl">
          <span className="text-green">Eleven months</span>
          <span className="text-strong"> in. The numbers are just the start.</span>
        </h2>
      </div>

      <div className="mb-14">
        <ImpactStats columns={3} />
      </div>

      <div className="max-w-8xl">
        <p className="font-body text-sub text-base leading-[1.75]">
          In our first eleven months, ACHII has delivered six webinars reaching 170 attendees across
          four countries. We've reached 1,570 secondary school students through in-person outreach.
          We've launched Nigeria's first national climate-health awareness study. We've deployed
          22 Regional Champions across all six geopolitical zones. And we've built active partnerships
          with NYSC, CHDI, Transformers Global, and Ecohealth Africa.
        </p>
      </div>
    </div>
  </section>
</div>

    
      <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
}
