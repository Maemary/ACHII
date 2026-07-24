import Button from "./Button";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-[120px]">
      <div className="container-site flex flex-col lg:flex-row gap-12 lg:gap-[90px]">
        <div className="lg:w-[520px] flex-shrink-0">
          <p className="label-tag mb-4">About Africa Climate and Health Innovation Institute</p>
          <h2 className="font-header font-semibold text-[34px] lg:text-5xl leading-[1.12] tracking-[-0.02em]">
            <span className="text-primary-dark">We&apos;re not building an NGO. </span>
            <span className="text-green">We&apos;re building a movement.</span>
          </h2>
        </div>

        <div className="flex-1 max-w-[670px]">
          <div className="space-y-6 mb-10">
            <p className="font-body text-sub text-base leading-[1.75]">
              For too long, the climate crisis has been treated as an abstract environmental issue
              &mdash; while clinicians across Africa treat its physical symptoms every day. Heatstroke.
              Cholera. Waterborne disease. Vector-borne shifts. Respiratory illness. Pregnancy
              complications in flood-prone regions.
            </p>
            <p className="font-body text-sub text-base leading-[1.75]">
              The Africa Climate and Health Innovation Institute (ACHII) was founded to close that
              gap &mdash; turning anxiety into action, and frontline experience into the evidence,
              training, and infrastructure that builds climate-resilient health systems across the
              continent.
            </p>
          </div>
          <Button href="/about" variant="yellow">Learn More About ACHII</Button>
        </div>
      </div>
    </section>
  );
}
