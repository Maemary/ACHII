import Button from "./Button";

const webinars = [
  { quote: "Nigeria loses ₦3.5 trillion in food annually post-harvest.", desc: "Climate change is compounding these failures — but the solutions are within reach if we act at the household, farmer, and policy level simultaneously.", author: "By ACHII Policy Team", date: "April 2025" },
  { quote: "Climate change is the best thing to happen to mosquitoes in a century.", desc: "AI-driven outbreak prediction is now hitting 85% accuracy — and African epidemiology must be at the centre of that work, not the periphery.", author: "By Urban Futures Collective", date: "June 2025" },
  { quote: "85% of brain development happens before age 3.", desc: "Heat, malnutrition, and disaster stress during this window cause irreversible damage. Our most evidence-dense session of the series.", author: "By EcoTech Insights", date: "May 2025" },
  { quote: "Extreme heat is the ultimate inequality.", desc: "It hits the poor, the elderly, and the outdoor worker hardest — reshaping what 'healthy' means in our cities, our farms, and our clinics.", author: "By Urban Futures Collective", date: "June 2025" },
];

export default function Webinars() {
  return (
    <section id="webinars" className="bg-white py-20 lg:py-[120px]">
      <div className="container-site">
        <div className="mb-12 max-w-[787px]">
          <p className="label-tag mb-4">Webinar Insights &middot; What we&apos;ve heard</p>
          <h2 className="font-header font-semibold text-[34px] lg:text-5xl leading-[1.12] tracking-[-0.02em] text-strong mb-4">
            Four webinars. One argument. A growing cross-continental conversation.
          </h2>
          <p className="font-body text-sub text-base leading-[1.7] mb-8">
            These are not separate topics. They are the same crisis at different scales and in
            different rooms.
          </p>
          <Button href="#webinars" variant="yellow">Explore Past Webinars</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webinars.map((w, i) => (
            <div key={i} className="bg-bg-soft rounded-xl p-7 flex flex-col">
              <div className="flex-1 mb-6">
                <h3 className="font-header font-semibold text-base text-strong leading-snug mb-3">{w.quote}</h3>
                <p className="font-body text-sub text-sm leading-[1.7]">{w.desc}</p>
              </div>
              <div className="border-t border-stroke-gray pt-4 flex items-center justify-between">
                <div>
                  <p className="font-body text-xs text-soft">{w.author}</p>
                  <p className="font-body text-xs text-soft">{w.date}</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sub"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
