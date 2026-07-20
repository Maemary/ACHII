
import Link from "next/link";

const surveyUrl = "https://forms.gle/UXaxsnP7xBfshLdHA";
const surveyTitle = "ACHII Climate-Health Survey";
const text = encodeURIComponent(`${surveyTitle}: ${surveyUrl}`);

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

function ShareSurveyCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-8">
      <h3 className="font-header font-semibold text-xl text-strong mb-4">{title}</h3>
      <p className="font-body text-sub text-sm leading-[1.7] mb-6">{desc}</p>
      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 p-4 rounded-lg">
        <a href={`mailto:?subject=${encodeURIComponent(surveyTitle)}&body=${text}`} className="font-header font-medium text-sm text-strong underline underline-offset-4 hover:text-primary-base transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
  <path d="M1.5 4.5A2.5 2.5 0 0 1 4 2h16a2.5 2.5 0 0 1 2.5 2.5v15A2.5 2.5 0 0 1 20 22H4a2.5 2.5 0 0 1-2.5-2.5v-15Zm2.3.5L12 11.25 20.2 5H3.8ZM21 6.28l-8.39 6.39a1 1 0 0 1-1.22 0L3 6.28V19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6.28Z"/>
</svg>
        </a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(surveyUrl)}`} target="_blank" rel="noopener noreferrer" className="font-header font-medium text-sm text-strong underline underline-offset-4 hover:text-primary-base transition-colors
        ">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.２ ２４ ２４ ２３．２２７ ２４ ２２．２７１V１．７２９C２４ .７７４ ２３．２ ０ ２２．２２２ ０h．００３z"/>
</svg>
        </a>
        <a href={`https://wa.me/?text=${text}`} target="_blank" rel="noopener noreferrer" className="font-header font-medium text-sm text-strong underline underline-offset-4 hover:text-primary-base transition-colors">
          
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
  <path d="M20.52 3.48A11.8 11.8 0 0 0 12.02 0C5.4 0 .03 5.37.03 12a11.9 11.9 0 0 0 1.62 5.98L0 24l6.2-1.62A12 12 0 1 0 20.52 3.48Zm-8.5 18.4a9.93 9.93 0 0 1-5.08-1.4l-.36-.22-3.68.97.98-3.59-.24-.37A9.96 9.96 0 1 1 12.02 21.9Zm5.45-7.44c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.69.15-.2.3-.79.99-.96 1.2-.18.2-.36.23-.67.08-.3-.15-1.29-.47-2.46-1.5-.91-.8-1.53-1.8-1.71-2.1-.18-.3-.02-.47.14-.62.14-.14.3-.36.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.69-1.66-.94-2.28-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.89 1.23 3.09c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.8-.73 2.05-1.43.25-.71.25-1.32.18-1.44-.08-.13-.28-.2-.58-.36Z"/>
</svg>
        </a>
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(surveyTitle)}&url=${encodeURIComponent(surveyUrl)}`} target="_blank" rel="noopener noreferrer" className="font-header font-medium text-sm text-strong underline underline-offset-4 hover:text-primary-base transition-colors">
         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
</svg>
          </a>
        
        
      </div>
    </div>
  );
}

export default function ResearchStudy() {
  return (
    <section id="research" className="bg-primary-base py-20 lg:py-[120px]">
      <div className="container-site">
        <h2 className="font-header font-semibold text-white text-[34px] lg:text-5xl leading-[1.12] tracking-[-0.02em] max-w-2xl mb-8">
          Our first national climate-health awareness study in Nigeria.
        </h2>
        <p className="font-body italic text-white/80 text-base mb-6">
          Six geopolitical zones. Over 600 verified responses.
        </p>
        <div className="space-y-4 max-w-[1280px] mb-12">
          <p className="font-body text-white/85 text-base leading-[1.75]">
            Climate change is reshaping public health, yet frontline realities are rarely connected to clinical data. ACHII is changing that by launching a pan-national climate-health study across all six geopolitical zones. We are scaling our successful 603-response pilot to a nationwide target of 900 verified perspectives. 
          </p>
          <p className="font-body text-white/85 text-base leading-[1.75]">
            Your voice is the missing piece. By submitting your responses right now, you shift from a bystander to a co-creator of the evidence base.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SurveyCard
            title="Add Your Voice to the Research"
            desc="10 minutes. Fully anonymous.  Community members & Healthcare professionals in Nigeria."
            cta="Take the Survey"
            href={surveyUrl}
          />
          <ShareSurveyCard
            title="Help Us Reach Every Region"
            desc="Forward it to your network. Every region of Nigeria deserves to be represented."
          />
        </div>
      </div>
    </section>
  );
}