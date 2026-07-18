import PartnerCarousel from "./partnerCarousel";

export default function PartnersSection() {
  return (
    <section className=" py-10 lg:py-[20px] mb-12">
      <div className="container-site text-center mb-10 lg:mb-14">
        <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-primary-dark mb-4">
          Our Partners
        </p>
        
      </div>
      <PartnerCarousel />
    </section>
  );
}