import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Button from "@/app/components/Button";
import Image from "next/image";
import ImageBand from "../components/ImageBand";

export const metadata = {
  title: "Programmes — ACHII",
  description:
    "How ACHII builds climate-resilient communities on the ground — school outreach, the Regional Champion Model, and Nigeria's first national climate-health study.",
};

const CONTACT_EMAIL = "ecodoctr@gmail.com";

function StatusTag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-body font-semibold text-[11px] tracking-[0.14em] uppercase mb-6 ${
        dark ? "bg-white/12 text-yellow" : "bg-green/10 text-green"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-yellow" : "bg-green"}`} />
      {children}
    </span>
  );
}

function StatBar({
  stats,
  dark = false,
}: {
  stats: { value: string; label: string }[];
  dark?: boolean;
}) {
  return (
    <div className={`grid grid-cols-2 ${stats.length >= 4 ? "sm:grid-cols-4" : "sm:grid-cols-" + stats.length} gap-4 sm:gap-6 mb-14`}>
      {stats.map((s) => (
        <div
          key={s.label}
          className={`rounded-xl p-6 ${dark ? "bg-white/10 border border-white/15" : "bg-primary-dark"}`}
        >
          <div className="font-header font-semibold text-3xl sm:text-[40px] leading-none text-white mb-4">{s.value}</div>
          <div className={`border-t pt-3 ${dark ? "border-white/20" : "border-stroke-sub/60"}`}>
            <span className="font-body text-xs sm:text-sm text-white/80">{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const jumpLinks = [
  { label: "School Outreach", href: "#school-outreach" },
  { label: "Regional Champions", href: "#regional-champions" },
];

export default function ProgrammesPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <div data-nav-theme="dark">
        <section className="bg-primary-dark pt-[148px] pb-20 lg:pb-24">
          <div className="container-site">
            <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-5">Our Programmes</p>
            <h1 className="font-header font-semibold text-white text-[34px] sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.01em] max-w-9xl">
              From data to the doorstep. How ACHII&apos;s work actually reaches people.
            </h1>
            <p className="mt-6 font-body text-white/75 text-lg leading-[1.65] max-w-6xl">
              Three programmes. One goal: closing the gap between climate-health evidence and the
              communities living the crisis.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
              {jumpLinks.map((j) => (
                <a
                  key={j.href}
                  href={j.href}
                  className="font-header font-medium text-sm text-white/80 hover:text-yellow underline underline-offset-4 transition-colors"
                >
                  {j.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Section 1 — School Outreach / ACHIIlites */}
      <div data-nav-theme="light">
        <section id="school-outreach" className="bg-white py-20 lg:py-[120px]">
          <div className="container-site">
            <StatusTag>Active · Q2 2026</StatusTag>

            <StatBar
              stats={[
                { value: "6", label: "Secondary schools reached" },
                { value: "1,570+", label: "Students reached" },
                { value: "4", label: "Module curriculum" },
                { value: "14", label: "Infographic banners donated" },
              ]}
            />

            <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
              <div>
                <h2 className="font-header font-semibold text-strong text-3xl lg:text-[40px] leading-[1.15] tracking-[-0.01em] mb-8 max-w-3xl">
                  From one school to six: how ACHII takes climate-health education into the classroom
                </h2>

                <div className="space-y-8 mb-8">
                  <div>
                    <p className="label-tag mb-3">Phase 1 · The Pilot (January 2026)</p>
                    <p className="font-body text-sub text-base leading-[1.75]">
                      ACHII&apos;s first in-person outreach ran at Manbai Islamic College in Amuloko, Ibadan
                      — an invitation from The Transformers Global, marking International Environmental
                      Education Day. Roughly 70 students moved through three workshops in a single hour:
                      The Environment and Man, an interactive How to Be a Changemaker session, and a
                      crossword/wordsearch activity that turned new vocabulary into something students
                      could hold onto. Every student left with a take-home Lightbook.
                    </p>
                  </div>
                  <div>
                    <p className="label-tag mb-3">Phase 2 · ACHIIlites (Q2 2026)</p>
                    <p className="font-body text-sub text-base leading-[1.75]">
                      Building on that pilot, ACHII partnered with the National Youth Service Corps (NYSC)
                      to launch ACHIIlites — scaling the model to six secondary schools across Ibadan. Each
                      school received a structured four-module curriculum: climate change and health,
                      environmental stewardship, disease prevention, and practical community action. The
                      programme reached more than 1,570 students, and infographic banners were left behind
                      in every school as permanent classroom resources. These materials remain in the schools as permanent educational tools.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Bring ACHIIlites to Our School")}`}
                    variant="yellow"
                  >
                    Bring ACHIIlites to Your School
                  </Button>
                  <Button href="/get-involved#volunteer" variant="outline-dark">
                    Volunteer as a Facilitator
                  </Button>
                </div>
              </div>

              <div className="relative w-full h-[320px] lg:h-[560px] rounded-3xl overflow-hidden lg:sticky lg:top-28">
                <Image
                  src="https://res.cloudinary.com/davuaeyxb/image/upload/v1784124137/achii/images/volunteer-active.jpg"
                  alt="ACHII school outreach students gathered outdoors"
                  fill
                  sizes="(max-width:1024px) 100vw, 380px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section 2 — Regional Champion Model */}
      <div data-nav-theme="dark">
        <section id="regional-champions" className="bg-primary-base py-20 lg:py-[120px]">
          <div className="container-site">
            <StatusTag dark>First Cohort Completed · Q2 2026</StatusTag>

            <StatBar
              dark
              stats={[
                { value: "22", label: "Regional Champions" },
                { value: "6", label: "Geopolitical zones covered" },
                { value: "603", label: "Verified survey responses contributed" },
              ]}
            />

            <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
              <div>
                <h2 className="font-header font-semibold text-white text-3xl lg:text-[40px] leading-[1.15] tracking-[-0.01em] mb-8 max-w-3xl">
                  22 young leaders. Six zones. One national dataset.
                </h2>

                <div className="space-y-4 mb-8 max-w-2xl">
                  <p className="font-body text-white/80 text-base leading-[1.75]">
                    The Regional Champion Model is ACHII&apos;s first nationwide, volunteer-led research
                    mobilisation programme — built to close a specific gap. Our pilot study had
                    concentrated two-thirds of its responses in just two of Nigeria&apos;s six geopolitical
                    zones. RCM was the fix.
                  </p>
                  <p className="font-body text-white/80 text-base leading-[1.75]">
                    Twenty-two Regional Champions were recruited across all six zones and trained in
                    climate-health concepts, research ethics, community engagement, data collection, and
                    quality assurance. Every submission passed an eleven-point verification checklist
                    before counting toward the national dataset. Together, this first cohort contributed
                    to 603 verified responses — closing the geographic gap the pilot exposed.
                  </p>
                </div>

                <div className="mb-9 max-w-2xl">
                  <p className="font-body text-white/80 text-base leading-[1.75]">
                    RCM isn&apos;t just a data collection system — it&apos;s a leadership pipeline. Most
                    Champions are students or early-career professionals. Each one leaves the programme
                    having led a nationally-scoped public health research initiative, with real research
                    ethics training and the community communication skills to match. Experienced Champions
                    are already positioned to train the next cohort, making the model self-sustaining.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button href="#" variant="yellow">Apply for the Next Cohort</Button>
                </div>
              </div>

              <div className="relative w-full h-[320px] lg:h-[560px] rounded-3xl overflow-hidden lg:sticky lg:top-28">
                <Image
                  src="https://res.cloudinary.com/davuaeyxb/image/upload/v1784301188/RCM_xg5kdm.jpg"
                  alt="An ACHII Regional Champion engaged in community fieldwork"
                  fill
                  sizes="(max-width:1024px) 100vw, 480px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
         <div data-nav-theme="dark">
        <ImageBand
        src="https://res.cloudinary.com/davuaeyxb/image/upload/v1784124044/achii/images/Partner.jpg"
        alt="Young people standing together"
        height="h-[432px] md:h-[624px]"
        objectPosition="object-top" />
      </div>

      {/* Section 3 — National Climate-Health Study */}
      {/* <div data-nav-theme="light">
        <section id="national-study" className="bg-primary-lighter py-20 lg:py-[120px]">
          <div className="container-site max-w-3xl">
            <StatusTag>Active · Scaling Nationally</StatusTag>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-12 max-w-md">
              <div className="bg-primary-dark rounded-xl p-6">
                <div className="font-header font-semibold text-3xl sm:text-[40px] leading-none text-white mb-4">603 / 900</div>
                <div className="border-t border-stroke-sub/60 pt-3">
                  <span className="font-body text-xs sm:text-sm text-white/80">Verified responses collected</span>
                </div>
              </div>
              <div className="bg-primary-dark rounded-xl p-6">
                <div className="font-header font-semibold text-3xl sm:text-[40px] leading-none text-white mb-4">6 / 6</div>
                <div className="border-t border-stroke-sub/60 pt-3">
                  <span className="font-body text-xs sm:text-sm text-white/80">Geopolitical zones represented</span>
                </div>
              </div>
            </div>

            <h2 className="font-header font-semibold text-strong text-3xl lg:text-[40px] leading-[1.15] tracking-[-0.01em] mb-6">
              The evidence base this whole institute is built on
            </h2>
            <p className="font-body text-sub text-base leading-[1.75] mb-4">
              Nigeria&apos;s first study to examine climate-health awareness among both healthcare
              professionals and communities, at the same time. The pilot phase (81 responses) confirmed
              the need was real and the gaps were wide; the Regional Champion Model then scaled collection
              nationally, reaching 603 verified responses against a 900-response target.
            </p>
            <p className="font-body text-sub text-base leading-[1.75] mb-9">
              This is a live, ongoing study — full details, live numbers, and the survey link live on the
              homepage.
            </p>

            <Button href="/#research" variant="outline-dark">See Full Study Details & Add Your Voice</Button>
          </div>
        </section>
      </div> */}

      <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
}
