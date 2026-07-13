import PartnerCarousel from "./partnerCarousel";

export default function PartnersSection() {
  return (
    <section className="bg-primary-dark py-10 lg:py-[20px] mb-12">
      <div className="container-site text-center mb-10 lg:mb-14">
        <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-4">
          Our Partners
        </p>
        <h2 className="font-header font-semibold text-white text-3xl lg:text-[40px] leading-[1.15] tracking-[-0.01em]">
          Organizations building this movement with us
        </h2>
      </div>
      <PartnerCarousel />
    </section>
  );
}