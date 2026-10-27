import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/Button";



const upcomingWebinar = {
  tag: "Upcoming · WB0010 · October 2026",
  title: "Antalya COP31: Wetin climate change really mean for your health?",
  subtitle: "COP31 Conversations: The Road to COP31 — what COP is, what's at stake in Antalya, and Africa and Nigeria's climate-health priorities.",
  date: "Saturday, 31 October 2026",
  time: "6:00 PM – 7:30 PM WAT",
  platform: "Google Meet",
};

const pastWebinars = [
  {
    tag: "WB0008 · August 2026",
    title: "ACHII @ 1 Anniversary: Youth Advocacy in Climate & Health",
    href: "https://drive.google.com/file/d/1uiMsCxSR-cakXitJHJiHvC037p4uAHAy/view",
  },
  {
    tag: "WB0007 · July 2026",
    title: "Cities Underwater: Decoding the 2026 Flood Crisis and How Youth Can Build Climate Resilience",
    href: "https://drive.google.com/file/d/1lcunRQwyVIZD7biVXyG0iT0hicwp_Gr5/view?usp=drive_open",
  },
  {
    tag: "WB0006 · June 2026",
    title: "Voices From The Margins: Protecting Women, Elderly, and Low-Income Communities in Africa's Climate Crisis",
    href: "https://drive.google.com/file/d/1Nx83XjR80r_uxHcLcNWyQDOJIoQBPEyz/view",
  },
];

export default function HomeInsights() {
  return (
    <section id="insights" className="bg-white py-20 lg:py-[120px]">
      <div className="container-site">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

        <div className="max-w-2xl mb-4 md:mb-12">
          <p className="label-tag mb-4">
            ACHII Resource Bank · Access free, open-source tools and research built for African contexts
          </p>
          <h2 className="font-header font-semibold text-strong text-3xl lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
            An evolving knowledge bank for climate-health action.
          </h2>
        </div>
              

          <Link
            href="/training"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-header font-medium text-sm bg-yellow text-strong hover:bg-[#f5c01f] transition-colors"
          >
            Explore All Training & Webinars
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upcoming webinar announcement */}
          <div className="flex flex-col xl:flex-row gap-8 lg:col-span-2 rounded-3xl overflow-hidden bg-primary-base p-8 lg:p-10">
          <div className=" flex flex-1 flex-col">
            <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-5">
              {upcomingWebinar.tag}
            </p>
            <h3 className="font-header font-semibold text-white text-2xl lg:text-[32px] leading-tight tracking-[-0.01em] mb-3">
              {upcomingWebinar.title}
            </h3>
            <p className="font-body italic text-white/70 text-base mb-6 max-w-xl">
              {upcomingWebinar.subtitle}
            </p>

           <dl className="grid grid-cols-3 sm:grid-rows-3 sm:grid-cols-none gap-4 sm:gap-8 mb-8 max-w-xl">
  <div>
    <dt className="font-body text-xs text-white/50 uppercase tracking-wide mb-1">Date</dt>
    <dd className="font-body text-white text-sm">{upcomingWebinar.date}</dd>
  </div>
  <div>
    <dt className="font-body text-xs text-white/50 uppercase tracking-wide mb-1">Time</dt>
    <dd className="font-body text-white text-sm">{upcomingWebinar.time}</dd>
  </div>
  <div>
    <dt className="font-body text-xs text-white/50 uppercase tracking-wide mb-1">Platform</dt>
    <dd className="font-body text-white text-sm">{upcomingWebinar.platform}</dd>
  </div>
</dl>

            <div className="mt-auto flex flex-wrap items-center gap-4">
              <Button href="/reports#newsletter" variant="yellow">
                Get Notified
              </Button>
              <Button href="/training" variant="outline-dark">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-[450px] aspect-square xl:self-start xl:w-[350px] xl:flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 xl:ml-auto">
            <Image
              src="https://res.cloudinary.com/davuaeyxb/image/upload/v1792765648/achii/images/cop31-flyer-register.webp"
              alt="Antalya COP31 webinar flyer — Which side your health dey for climate change? With Dr. Henrietta Ampofo and Queen Amazundiro, 31 October, 6:00 PM WAT on Google Meet"
              fill
              sizes="(max-width:1280px) 450px, 350px"
              className="object-cover"
            />
          </div>
          </div>

          {/* Past webinar recordings */}
          <div className="flex flex-col gap-6">
            {pastWebinars.map((w) => (
              <a
                key={w.tag}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-left group rounded-2xl border border-stroke-soft hover:border-primary-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 p-6 bg-white flex flex-col flex-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block w-fit self-start rounded-full px-3 py-1 font-body font-semibold text-[11px] tracking-wide uppercase bg-primary-lighter text-primary-base">
                    {w.tag}
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-soft group-hover:text-primary-base transition-colors flex-shrink-0">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </div>
                <h3 className="font-header font-semibold text-strong text-lg leading-snug group-hover:text-primary-base transition-colors">
                  {w.title}
                </h3>
                <span className="mt-auto pt-4 font-body text-soft text-xs">Watch recording</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}