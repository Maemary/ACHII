import Button from "./Button";

const stats = [
  { value: "5", label: "Active Projects" },
  { value: "1570", label: "Students Trained" },
  { value: "75,363", label: "People reached" },
  { value: "170", label: "Webinars" },
  { value: "22", label: "Regional Champions" },
  { value: "15", label: "Countries Represented" },
];

export default function Impact() {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container-site">
        <div className="mb-12">
          <p className="label-tag mb-4">Our Impact So Far</p>
          <h2 className="font-header font-semibold text-[34px] lg:text-5xl leading-[1.12] tracking-[-0.02em] max-w-2xl">
            <span className="text-green">Eleven months</span>
            <span className="text-strong"> in. The numbers are just the start.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {stats.map((s) => (
            <div key={s.label} className="bg-primary-dark rounded-xl p-7">
              <div className="font-header font-semibold text-[56px] leading-none text-white mb-6">{s.value}</div>
              <div className="border-t border-stroke-sub/60 pt-4">
                <span className="font-body text-sm text-white/80">{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[1280px] space-y-6">
          <p className="font-body text-sub text-base leading-[1.75]">
           Across the first half of 2026, ACHII delivered six international climate-health webinars to audiences in Nigeria, Malawi, Afghanistan, and Zambia, while reaching approximately 1570 secondary school students through in-person education in Ibadan. To build a definitive evidence base, we launched Nigeria’s first national study across all six geopolitical zones to simultaneously evaluate climate-health awareness among medical professionals and local communities. This research framework was accelerated by the deployment of 22 trained Regional Champions who eliminated geographic gaps to secure comprehensive data.
          </p>
          <p className="font-body text-strong font-medium text-base leading-[1.75]">
            The urgency of this work is anchored in our findings. While 100% of healthcare professionals surveyed in our pilot research express a clear need for climate-health training, 57.9% have received no formal preparation. This is the critical gap ACHII exists to close.
          </p>
         <Button href="https://drive.google.com/file/d/1bLIfrLKF6yd2MylH6F0jaeaKpKQMw9lf/view?ts=6a43d1b6" variant="yellow">Read Our Q1-Q2 Impact Report</Button>
        </div>
      </div>
    </section>
  );
}
