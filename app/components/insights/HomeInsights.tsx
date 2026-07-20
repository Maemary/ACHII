import Link from "next/link";
import Button from "@/app/components/Button";
import Image from "next/image";



const upcomingWebinar = {
  tag: "Upcoming Webinar · WB0007",
  title: "Cities Underwater",
  subtitle: "Decoding the 2026 Flood Crisis and How Youth Can Build Climate Resilience",
  date: "Saturday, 25th July 2026",
  time: "7:00 PM – 8:30 PM WAT",
  platform: "Google Meet",
  registerHref:
    "https://docs.google.com/forms/d/e/1FAIpQLSdNSwJam6YwSDlCJ3HMKcuFBZ79qv9blfYRpMd313JLzYWyJw/viewform",
};

const pastWebinars = [
  {
    tag: "WB0006 · June 2026",
    title: "Voices From The Margins: Protecting Women, Elderly, and Low-Income Communities in Africa's Climate Crisis",
    href: "https://drive.google.com/file/d/1AGZfMb_Q7SjkTas95ucCRzJTx3h1RmxW/view?usp=drive_link",
  },
  {
    tag: "WB0005 · May 2026",
    title: "Minds Under Pressure: The Unseen Wounds of Climate Change",
    href: "https://drive.google.com/file/d/1AGZfMb_Q7SjkTas95ucCRzJTx3h1RmxW/view?usp=drive_link",
  },
  {
    tag: "WB0004 · April 2026",
    title: "Too Hot to Handle: Why Heat is the Ultimate Inequality",
    href: "https://drive.google.com/open?id=15pk3F-o2XD432kn9bdhIBV4x27BzntTA",
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
          <div className="flex flex-col lg:flex-row gap-8 lg:col-span-2 rounded-3xl overflow-hidden bg-primary-base p-8 lg:p-10">
          <div className=" flex flex-1 flex-col">
            <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-5">
              {upcomingWebinar.tag} · {upcomingWebinar.date}
            </p>
            <h3 className="font-header font-semibold text-white text-2xl sm:text-[32px] leading-[1.15] tracking-[-0.01em] mb-3">
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
              <Button href={upcomingWebinar.registerHref} variant="yellow" external>
                Register for the July Webinar
              </Button>
              <Link
                href="/training"
                className="font-header font-medium text-sm text-white/80 hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                Event Details
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
           <div className="relative w-full h-[280px] sm:h-[350px] lg:w-[350px] lg:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-lg shadow-black/20 lg:ml-auto">
  <Image
    src="https://res.cloudinary.com/davuaeyxb/image/upload/v1784123996/achii/images/July-Webinar.jpg"
    alt="An ACHII volunteer holding a climate-health education poster"
    fill
    sizes="(max-width:1024px) 100vw, 360px"
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