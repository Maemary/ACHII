import Link from "next/link";

const actions = [
  { title: "Join as an Ally", desc: "Add your voice and get our monthly newsletter.", cta: "Join as an Ally", href: "#join", bg: "bg-primary-base", text: "text-white", desc2: "text-white/75", btn: "border border-white/50 text-white hover:bg-white hover:text-primary-base" },
  { title: "Take the Survey", desc: "Help us reach 900 responses across Nigeria.", cta: "Take the Survey", href: "#survey", bg: "bg-yellow", text: "text-strong", desc2: "text-strong/75", btn: "border border-strong/40 text-strong hover:bg-strong hover:text-yellow" },
  { title: "Donate", desc: "Fund the research, training, and infrastructure work.", cta: "Support ACHII", href: "/donate", bg: "bg-green", text: "text-white", desc2: "text-white/75", btn: "border border-white/50 text-white hover:bg-white hover:text-green" },
];

export default function CallToAction() {
  return (
    <section id="join" className="bg-white py-16 lg:py-20">
      <div className="container-site grid grid-cols-1 md:grid-cols-3 gap-6">
        {actions.map((a) => (
          <div key={a.title} className={`${a.bg} rounded-2xl px-9 py-12 flex flex-col min-h-[260px]`}>
            <div className="flex-1">
              <h3 className={`font-header font-semibold text-[28px] mb-3 ${a.text}`}>{a.title}</h3>
              <p className={`font-body text-sm leading-[1.7] mb-8 ${a.desc2}`}>{a.desc}</p>
            </div>
            <Link href={a.href} className={`inline-flex items-center justify-center self-start rounded-full px-6 py-3 font-header font-medium text-sm transition-colors ${a.btn}`}>
              {a.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
