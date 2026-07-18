const IconBook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7l10-4 10 4-10 4z"/><path d="M6 10v5c0 1 3 2 6 2s6-1 6-2v-5"/></svg>
);
const IconFlask = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/></svg>
);
const IconTools = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5z"/></svg>
);
const IconMega = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h3l8 5V5L7 10H4a1 1 0 0 0-1 1z"/></svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5a3 3 0 0 1 0 6M18 20a6 6 0 0 0-3-5"/></svg>
);

const pillars = [
  { num: "01", title: "Education & Capacity Building", desc: "Training healthcare professionals, youth, and community members to prevent and manage climate-driven illnesses using African-contextualized learning frameworks.", icon: <IconBook />, theme: "dark" },
  { num: "02", title: "Research & Evidence Generation", desc: "Advancing African climate-health data by enabling researchers to co-create studies with frontline communities and provide actionable evidence for policy.", icon: <IconFlask />, theme: "dark" },
  { num: "03", title: "Innovation & Infrastructure", desc: "Creating scalable blueprints and low-cost, climate-smart health facility upgrades designed specifically for African contexts.", icon: <IconTools />, theme: "dark" },
  { num: "04", title: "Policy & Advocacy", desc: "Translating frontline evidence into actionable policy recommendations by engaging leaders at local, national, and continental levels while ensuring community voices shape the agenda.", icon: <IconMega />, theme: "dark" },
  { num: "05", title: "Youth Leadership & Legacy", desc: "The next generation of climate-health leaders can't wait for permission, Student ambassador today. Systems leader tomorrow.", icon: <IconUsers />, theme: "dark" },
];

function Card({ p }: { p: typeof pillars[number] }) {
  const dark = p.theme === "dark";
  return (
    <div className={`rounded-lg md:rounded-2xl p-2.5 md:p-7 h-full ${dark ? "bg-primary-base text-white" : "bg-primary-light text-strong"}`}>
      <div className="flex items-start justify-between mb-2 md:mb-7">
        <span className={`font-header font-semibold text-sm md:text-[28px] ${dark ? "text-white" : "text-strong"}`}>{p.num}</span>
        <div className={`w-7 h-7 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 [&_svg]:w-3.5 [&_svg]:h-3.5 md:[&_svg]:w-[22px] md:[&_svg]:h-[22px] ${dark ? "bg-white/15 text-white" : "bg-white text-primary-base"}`}>
          {p.icon}
        </div>
      </div>
      <h3 className="font-header font-semibold text-[11px] md:text-lg mb-0 md:mb-3 leading-snug">{p.title}</h3>
      <p className={`hidden md:block font-body text-sm leading-[1.7] ${dark ? "text-white/80" : "text-strong/75"}`}>{p.desc}</p>
    </div>
  );
}

export default function Pillars() {
  return (
    <section id="pillars" className="bg-primary-lighter py-20 lg:py-[120px]">
      <div className="container-site">
        <div className="mb-12">
          <p className="label-tag mb-4">Our Five Pillars</p>
          <h2 className="font-header font-semibold text-[34px] lg:text-5xl leading-[1.12] tracking-[-0.02em] max-w-2xl mb-4">
            <span className="text-strong">How we build </span>
            <span className="text-green">climate-resilient</span>
            <span className="text-strong"> health systems.</span>
          </h2>
          <p className="font-body text-sub text-base">Five interconnected pillars. One unified theory of change.</p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {pillars.map((p) => <Card key={p.num} p={p} />)}
        </div>
      </div>
    </section>
  );
}
