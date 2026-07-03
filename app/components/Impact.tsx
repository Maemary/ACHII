import Button from "./Button";

const stats = [
  { value: "5", label: "Active Projects" },
  { value: "170", label: "Webinar Attendees" },
  { value: "1570", label: "Students Reached" },
  { value: "75,363", label: "People reached" },
  { value: "22", label: "Regional Champions" },
  { value: "15", label: "Countries Represented" },
];

export default function Impact() {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container-site">
        <div className="mb-12">
          <p className="label-tag mb-4">Our Impact So Far &middot; Q2 2026</p>
          <h2 className="font-header font-semibold text-[34px] lg:text-5xl leading-[1.12] tracking-[-0.02em] max-w-2xl">
            <span className="text-green">Nine months</span>
            <span className="text-strong"> in. The numbers are just the start.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {stats.map((s) => (
            <div key={s.label} className="bg-primary-lighter rounded-xl p-7">
              <div className="font-header font-semibold text-[56px] leading-none text-strong mb-6">{s.value}</div>
              <div className="border-t border-stroke-sub/60 pt-4">
                <span className="font-body text-sm text-sub">{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[1280px] space-y-6">
          <p className="font-body text-sub text-base leading-[1.75]">
            Across Q1-Q2 2026, ACHII delivered six climate-health webinars to audiences in Nigeria,
            Malawi, Afghanistan, and Zambia. We reached ~70 secondary school students through
            in-person outreach in Ibadan. We launched the first national study to examine
            climate-health awareness among healthcare professionals and communities simultaneously
            across Nigeria&apos;s six geopolitical zones. And we deployed 22 Regional Champions to
            close the geographic gap in our research data.
          </p>
          <p className="font-body text-strong font-medium text-base leading-[1.75]">
            100% of healthcare professionals surveyed in our pilot want climate-health training
            &mdash; yet 57.9% have received none. This is the gap ACHII exists to close.
          </p>
         <Button href="https://drive.google.com/file/d/1bLIfrLKF6yd2MylH6F0jaeaKpKQMw9lf/view?ts=6a43d1b6" variant="yellow">Read Our Q1 Impact Report</Button>
        </div>
      </div>
    </section>
  );
}
