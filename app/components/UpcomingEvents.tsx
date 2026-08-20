import Image from "next/image";
import Button from "./Button";

const upcoming = [
  {
    label: "1st Anniversary",
    title: "ACHII Turns One: Youth Advocacy in Climate & Health",
    desc: "Our founding story, a special “Guess the Speaker” session, and a chance to connect with the ACHII community.",
    meta: "29 Aug · 7PM · Google Meet",
    cta: "Register Now",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdNSwJam6YwSDlCJ3HMKcuFBZ79qv9blfYRpMd313JLzYWyJw/viewform", // same form used by the existing "1-Year Anniversary" webinar block in HomeInsights.tsx
    external: true,
    src: "https://res.cloudinary.com/davuaeyxb/image/upload/v1787139268/WhatsApp_Image_2026-08-19_at_11.24.27_AM_iaid8k.jpg",
    aspect: "aspect-[3/4]",
    alt: "ACHII Turns One anniversary event flyer — Youth Advocacy in Climate & Health, 29 August 7PM on Google Meet",
  },
  {
    label: "Celebrating Our Volunteers",
    title: "One Year Volunteer Retreat",
    desc: "Celebrating one year of learning, impact, and growth with the volunteers who made it possible.",
    meta: "26–28 Aug 2026",
    cta: "Meet the Team",
    href: "/about/our-team", // TODO: point at wherever the volunteer team/retreat gets featured
    external: false,
    src: "https://res.cloudinary.com/davuaeyxb/image/upload/v1787139269/WhatsApp_Image_2026-08-19_at_11.24.37_AM_m5xpyk.jpg",
    aspect: "aspect-square",
    alt: "ACHII One Year Volunteer Retreat flyer — 26–28 August 2026",
  },
];

export default function UpcomingEvents() {
  return (
    <section id="upcoming" className="bg-white py-14 lg:py-20">
      <div className="container-site">
        <div className="mb-8 max-w-[787px]">
          <p className="label-tag mb-3">Upcoming &middot; Mark your calendar</p>
          <h2 className="font-header font-semibold text-[28px] lg:text-4xl leading-[1.12] tracking-[-0.02em] text-strong">
            One year in. Here&apos;s what&apos;s next.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcoming.map((e) => (
            <div key={e.title} className="bg-bg-soft rounded-2xl overflow-hidden flex flex-row items-stretch">
              <div className={`relative w-32 sm:w-40 flex-shrink-0 ${e.aspect}`}>
                <Image src={e.src} alt={e.alt} fill sizes="160px" className="object-cover" />
              </div>
              <div className="p-5 flex flex-col justify-center flex-1 min-w-0">
                <p className="label-tag mb-2">{e.label}</p>
                <h3 className="font-header font-semibold text-base text-strong leading-snug mb-1">{e.title}</h3>
                <p className="font-body text-sub text-xs leading-[1.6] mb-2 line-clamp-2">{e.desc}</p>
                <p className="font-body text-xs text-soft mb-3">{e.meta}</p>
                <Button href={e.href} variant="yellow" className="self-start !px-4 !py-2 !text-xs" external={e.external}>{e.cta}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
