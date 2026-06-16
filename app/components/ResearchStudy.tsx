import Link from "next/link";

function SurveyCard({ title, desc, cta, href }: { title: string; desc: string; cta: string; href: string }) {
  return (
    <div className="bg-white rounded-xl p-8">
      <h3 className="font-header font-semibold text-xl text-strong mb-4">{title}</h3>
      <p className="font-body text-sub text-sm leading-[1.7] mb-6">{desc}</p>
      <Link href={href} className="inline-flex items-center gap-1.5 font-header font-medium text-sm text-strong underline underline-offset-4 hover:text-primary-base transition-colors">
        {cta}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
      </Link>
    </div>
  );
}

export default function ResearchStudy() {
  return (
    <section id="research" className="bg-primary-base py-20 lg:py-[120px]">
      <div className="container-site">
        <h2 className="font-header font-semibold text-white text-[34px] lg:text-5xl leading-[1.12] tracking-[-0.02em] max-w-2xl mb-8">
          The first national climate-health awareness study in Nigeria.
        </h2>
        <p className="font-body italic text-white/80 text-base mb-6">
          Mixed-methods. Six geopolitical zones. 900 verified responses.
        </p>
        <div className="space-y-4 max-w-[1280px] mb-12">
          <p className="font-body text-white/85 text-base leading-[1.75]">
            ACHII is conducting Nigeria&apos;s first national study to examine climate-health awareness
            among healthcare professionals AND communities simultaneously. Most existing research
            looks at one or the other. We look at both &mdash; because the gap between what clinicians
            know and what communities experience is where lives are lost.
          </p>
          <p className="font-body text-white/85 text-base leading-[1.75]">
            The study uses a mixed-methods cross-sectional design across all six geopolitical zones.
            We&apos;ve completed our pilot phase (81 responses) and are now scaling to 900 verified
            responses nationally through the Regional Champion Model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SurveyCard
            title="Add Your Voice to the Research"
            desc="10 minutes. Fully anonymous. Healthcare professionals & community members in Nigeria."
            cta="Take the Survey"
            href="#survey"
          />
          <SurveyCard
            title="Help Us Reach Every Region"
            desc="Forward it to your network. Every region of Nigeria deserves to be represented."
            cta="Share the survey"
            href="#share"
          />
        </div>
      </div>
    </section>
  );
}
