import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import SectionHeader from "@/app/components/SectionHeader";
import DonateWidget from "@/app/components/DonateWidget";

export const metadata = {
  title: "Donate — ACHII",
  description:
    "Your support helps train climate-health leaders, fund community research, and ensure vulnerable communities are not left behind in the climate crisis.",
};

const areas = [
  { icon: "\ud83c\udf31", title: "Research", desc: "Fund nationwide climate-health studies and publication costs for African researchers." },
  { icon: "\ud83c\udf93", title: "Training", desc: "Support webinars, fellowships, and student education across the continent." },
  { icon: "\ud83d\udce2", title: "Community Outreach", desc: "Fund awareness campaigns, school outreach, and regional activities." },
  { icon: "\ud83c\udfe5", title: "Climate-Health Solutions", desc: "Help build resilience and climate-smart infrastructure in vulnerable communities." },
];

const examples = [
  ["₦5,000", "prints climate-health learning materials for a classroom."],
  ["₦10,000", "provides learning resources to emerging researchers."],
  ["₦25,000", "supports community outreach activities in one region."],
  ["₦50,000", "helps fund a school outreach session reaching ~70 students."],
];

const partners = ["WHO", "Wellcome Trust", "UNEP", "AfDB", "Red Cross Red Crescent Climate Centre"];
const stats = [["5", "Active Projects"], ["117", "Webinar Attendees"], ["17", "Regional Champions"], ["4", "Countries Reached"]];

export default function DonatePage({ searchParams }: { searchParams: { type?: string } }) {
  const initialFreq = searchParams?.type === "monthly" ? "monthly" : "once";

  return (
    <main className="relative">
      <Navbar />

      <div data-nav-theme="dark">
        <PageHero
          eyebrow="Donate"
          title="Fund the work. Build the future."
          subtitle="Your support helps train climate-health leaders, fund community research, and ensure vulnerable communities are not left behind in the climate crisis."
        />
      </div>

      {/* What your donation supports */}
      <div data-nav-theme="light">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader eyebrow="What Your Donation Supports" title="Every gift funds a specific piece of the work." className="mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {areas.map((a) => (
                <div key={a.title} className="bg-primary-lighter rounded-2xl p-7">
                  <div className="text-3xl mb-4">{a.icon}</div>
                  <h3 className="font-header font-semibold text-strong text-lg mb-2">{a.title}</h3>
                  <p className="font-body text-sub text-sm leading-[1.65]">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Donation widget + impact examples */}
      <div data-nav-theme="light" id="give">
        <section className="bg-bg-soft py-20 lg:py-[120px]">
          <div className="container-site grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader eyebrow="Make a Donation" title="Choose what works for you." className="mb-6" />
              <p className="font-body text-sub text-base leading-[1.7] mb-8">
                Give once or become a recurring supporter. Every amount is tied to real impact on the
                ground — here is what your gift can do:
              </p>
              <ul className="space-y-3">
                {examples.map(([amt, what]) => (
                  <li key={amt} className="flex gap-3 items-start">
                    <span className="font-header font-semibold text-primary-base text-sm whitespace-nowrap min-w-[72px]">{amt}</span>
                    <span className="font-body text-sub text-sm leading-[1.6]">{what}</span>
                  </li>
                ))}
              </ul>
            </div>
            <DonateWidget initialFreq={initialFreq} />
          </div>
        </section>
      </div>

      {/* Trust section */}
      <div data-nav-theme="dark">
        <section className="bg-primary-base py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader light eyebrow="Why You Can Trust Us" title="Transparency is part of the mission." className="mb-12" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {stats.map(([v, l]) => (
                <div key={l}>
                  <div className="font-header font-semibold text-white text-4xl lg:text-5xl mb-2">{v}</div>
                  <div className="font-body text-white/70 text-sm">{l}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-4">Our Partners</p>
                <div className="flex flex-wrap gap-3">
                  {partners.map((p) => (
                    <span key={p} className="rounded-full border border-white/25 px-4 py-2 font-body text-sm text-white/85">{p}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-4">Transparency</p>
                <p className="font-body text-white/80 text-sm leading-[1.7] mb-3">
                  ACHII (formerly Ecodoctr) is the Africa Climate and Health Innovation Institute. Every
                  donation is allocated to research, training, outreach, or infrastructure — and we
                  publish quarterly impact reports so you can see exactly where it goes.
                </p>
                <p className="font-body text-white/55 text-xs">Registration details to be added before launch.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
}
