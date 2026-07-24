import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import SectionHeader from "@/app/components/SectionHeader";
import Button from "@/app/components/Button";
import Placeholder from "@/app/components/Placeholder";
import SubscribeForm from "@/app/components/EmailSignup";
import Image from "next/image";

export const metadata = {
  title: "Get Involved — ACHII",
  description: "Join as an Ally. Fund the work. Wear the movement. Partner with us. Volunteer.",
};

const allyPerks = [
  "Invitation to the ACHII Allies WhatsApp community for real-time conversation.",
  "Full access to the Resource Bank — past webinar recordings, written reports, toolkits, and infographics.",
  "Monthly ACHII newsletter — what we’re working on, what we’ve learned, what we need.",
  "Early access to webinars and community calls.",
  "Invitations to in-person events when we’re in your region.",
  "First word on volunteer opportunities, the Fellowship Programme, and partnership openings.",
];

const donationAreas = [
  ["Research Grants", "Fast-turnaround grants covering publication costs for African authors."],
  ["Training Delivery", "Webinars, in-person workshops, and the Climate-Health Fellowship Programme."],
  ["Infrastructure Prototypes", "Climate-smart upgrades for health facilities in vulnerable regions."],
  ["Community Programmes", "School outreach, community health literacy, and the Regional Champion Model."],
];

export default function GetInvolvedPage() {
  return (
    <main className="relative">
      <Navbar />

      <div data-nav-theme="dark">
        <PageHero
          image="https://res.cloudinary.com/davuaeyxb/image/upload/v1784123969/achii/images/assembly-field.jpg"
          eyebrow="Get Involved"
          title="Four ways to build with us."
          subtitle="Join as an Ally. Fund the work. Partner with us. Volunteer with us"
          body={[
            "Africa Climate and Health Innovation Institute isn’t built by a single team. It’s built by a continent-wide community of people who believe Africa’s climate-health future is worth fighting for. Here’s how you join us.",
          ]}
        />
      </div>

      {/* Option 1 — Ally */}
      <div data-nav-theme="light" id="ally">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
             <p className="label-tag mb-4">Join as an ACHII Ally</p>
              <h2 className="font-header font-semibold text-strong text-3xl lg:text-[40px] leading-[1.15] tracking-[-0.01em] mb-4">
                Add your voice. Stay close to the work.
              </h2>
              <p className="font-body text-sub text-base leading-[1.75] mb-6">
                ACHII Allies is our community of healthcare professionals, students, researchers,
                advocates, and community members building climate-resilient health systems in Africa.
                Joining is free, takes 30 seconds, and unlocks the full Resource Bank.
              </p>
              <div className="bg-primary-lighter rounded-2xl p-7">
                <p className="font-header font-semibold text-strong text-sm mb-3">Join in 30 seconds.</p>
                <SubscribeForm
  source="join_ally"
  buttonLabel="Join as an Ally"
/>
                <p className="font-body text-soft text-xs mt-3">
                  Email only. We’ll send your welcome letter, WhatsApp invite, and Resource Bank link.
                </p>
              </div>
            </div>
            <ul className="space-y-4 lg:pt-12">
              {allyPerks.map((p) => (
                <li key={p} className="flex gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green flex-shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"/></svg>
                  <span className="font-body text-sub text-sm leading-[1.7]">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Option 2 — Donate 
      <div data-nav-theme="dark" id="donate">
        <section className="bg-primary-base py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader
              light
              eyebrow="Option 2 — Donate to ACHII Projects"
              title="Fund the research. Fund the training. Fund the future."
              intro="ACHII is at an early stage — and every donation directly funds a specific piece of the work, showing up on the ground."
              className="mb-12"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {donationAreas.map(([t, d]) => (
                <div key={t} className="bg-white/10 border border-white/15 rounded-2xl p-6">
                  <h3 className="font-header font-semibold text-white text-base mb-2">{t}</h3>
                  <p className="font-body text-white/75 text-sm leading-[1.65]">{d}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/donate" variant="yellow">Donate Once</Button>
              <Button href="/donate?type=monthly" variant="outline-white">Donate Monthly</Button>
            </div>
          </div>
        </section>
      </div>

      {/* Option 3 — Merch 
      <div data-nav-theme="light" id="shop">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader
              eyebrow="Option 3 — Shop ACHII Merchandise"
              title="Wear the movement. Fund the mission."
              intro="Every item funds the research, training, and infrastructure work — and every wearer becomes a walking conversation starter for climate-health in Africa."
              className="mb-10"
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-9">
              {[1, 2, 3, 4].map((n) => (
                <div key={n}>
                  <Placeholder label={`Product ${n} image`} className="aspect-square mb-3" />
                  <p className="font-header font-medium text-strong text-sm">Product {n}</p>
                  <p className="font-body text-soft text-xs">Coming soon</p>
                </div>
              ))}
            </div>
            <Button href="https://forms.gle/q7JTqAYGj4fEi6xb8" variant="yellow">Notify Me When the Store Launches</Button>
          </div>
        </section>
      </div>
*/}
      {/* Option 4 — Partner */}
      <div data-nav-theme="light" id="partner">
        <section className="bg-bg-soft py-20 lg:py-[120px]">
          <div className="container-site max-w-3xl">
            <SectionHeader
              eyebrow="Partner with ACHII"
              title="For institutions, funders, and organisations."
              className="mb-6"
            />
            <p className="font-body text-sub text-base leading-[1.75] mb-8">
              If you represent a research institution, a funder, an NGO, a healthcare organisation, or a
              government agency working at the climate-health intersection — we’d love to talk. ACHII
              partners across funding, research collaboration, training delivery, policy advocacy, and
              infrastructure prototyping.
            </p>
            <Button href="mailto:info@achii.co" variant="yellow">Partner With Us</Button>
          </div>
        </section>
      </div>

      {/* Option 5 — Volunteer */}
      <div data-nav-theme="light" id="volunteer">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[320px] lg:h-[440px] rounded-3xl overflow-hidden order-1 lg:order-2">
              <Image src="https://res.cloudinary.com/davuaeyxb/image/upload/v1784124137/achii/images/volunteer-active.jpg" alt="An ACHII volunteer presenting climate-health materials" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover object-top" />
            </div>
            <div className="order-2 lg:order-1">
            <SectionHeader
              eyebrow="Volunteer with ACHII"
              title="Show up. Build with us."
              className="mb-6"
            />
            <p className="font-body text-sub text-base leading-[1.75] mb-8">
             We recruit across six functional areas— research, communications, design, operations, community organising, and writing, this movement is built by people who simply showed up.
            </p>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSd4jAuK5degYOf0rI-hEhkBzbMtLNrJDIznBQEhNEasZ_XjLg/viewform" variant="yellow">Volunteer With ACHII</Button>
            </div>
          </div>
        </section>
      </div>

      <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
}
