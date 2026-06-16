import Image from "next/image";

const cards = [
  {
    label: "Our Vision",
    bg: "bg-yellow",
    labelCls: "text-strong/70",
    bodyCls: "text-strong",
    body: "A climate-resilient Africa where every community has the knowledge, infrastructure, and agency to protect health in an era of environmental crisis.",
  },
  {
    label: "Our Mission",
    bg: "bg-green",
    labelCls: "text-white/60",
    bodyCls: "text-white",
    body: "ACHII exists to build climate-resilient healthcare systems in Africa through high-impact education, youth-led advocacy, and strategic research-to-policy translation.",
  },
];

function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
      {cards.map((c) => (
        <div key={c.label} className={`${c.bg} rounded-2xl p-7 lg:p-10`}>
          <p className={`font-body font-semibold text-[11px] tracking-[0.14em] uppercase mb-4 ${c.labelCls}`}>
            {c.label}
          </p>
          <p className={`font-body text-base leading-[1.7] ${c.bodyCls}`}>{c.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function VisionMission() {
  return (
    <section className="relative bg-white">
      <div className="relative w-full h-[360px] sm:h-[528px] md:h-[816px] overflow-hidden bg-primary-base">
        <Image
          src="/images/vision.jpg"
          alt="Young people in a circle, viewed from below against a blue sky"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Desktop: cards overlay the image bottom */}
        <div className="hidden md:block absolute inset-x-0 bottom-0">
          <div className="container-site pb-12 md:pb-16">
            <Cards />
          </div>
        </div>
      </div>

      {/* Mobile: cards lifted just over the image edge */}
      <div className="md:hidden container-site -mt-12 relative z-10 pb-12">
        <Cards />
      </div>
    </section>
  );
}
