import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";

export type LegalSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  closing?: string;
};

export default function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <main className="relative">
      <Navbar />

      <div data-nav-theme="dark">
        <PageHero eyebrow={eyebrow} title={title} subtitle={`Last updated: ${lastUpdated}`} />

        <section className="bg-primary-dark pt-0 pb-20 lg:pb-28">
          <div className="container-site max-w-3xl">
            {intro && (
              <p className="font-body text-white/75 text-base leading-[1.8] mb-10">{intro}</p>
            )}
            <div className="space-y-10">
              {sections.map((s, i) => (
                <div key={i}>
                  {s.heading && (
                    <h2 className="font-header font-semibold text-white text-xl mb-3">{s.heading}</h2>
                  )}
                  {s.paragraphs?.map((p, j) => (
                    <p key={j} className="font-body text-white/75 text-base leading-[1.8] mb-4">{p}</p>
                  ))}
                  {s.list && (
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {s.list.map((item, k) => (
                        <li key={k} className="font-body text-white/75 text-base leading-[1.8]">{item}</li>
                      ))}
                    </ul>
                  )}
                  {s.closing && (
                    <p className="font-body text-white/75 text-base leading-[1.8]">{s.closing}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div data-nav-theme="dark">
        <Footer />
      </div>
    </main>
  );
}
