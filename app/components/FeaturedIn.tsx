import Image from "next/image";

const outlets = [
  { name: "Gavi", src: "https://res.cloudinary.com/davuaeyxb/image/upload/v1787332105/Gavi-logo_1b_ji5hlf.png", height: "h-8 sm:h-10", href: "https://www.gavi.org/vaccineswork/oyo-state-schools-climate-health-link-curriculum" },
  { name: "City FM", src: "https://res.cloudinary.com/davuaeyxb/image/upload/v1787232820/CityFm_n8kbyv.png", height: "h-10 sm:h-16" },
  { name: "TVC", src: "https://res.cloudinary.com/davuaeyxb/image/upload/v1787232820/TVC_ir27si.png", height: "h-8 sm:h-10", href: "https://youtu.be/ZlGhmX2Xy7Y?si=6-09-CKQKrTBoY5n" },
  { name: "Base FM", src: "https://res.cloudinary.com/davuaeyxb/image/upload/v1787232819/BaseFm_iyrlzd.png", height: "h-8 sm:h-10" },
];

export default function FeaturedIn() {
  return (
    <section className="bg-bg-soft py-6">
      <div className="container-site flex flex-row items-center gap-4 sm:gap-10">
        <p className="label-tag text-primary-dark whitespace-nowrap">Featured On</p>
        <div className="flex flex-1 flex-nowrap items-center justify-between gap-x-6 sm:gap-x-10 overflow-x-auto">
          {outlets.map((o) => {
            const img = (
              <Image
                src={o.src}
                alt={o.name}
                width={120}
                height={48}
                className={`${o.height} w-auto object-contain`}
              />
            );
            return o.href ? (
              <a key={o.name} href={o.href} target="_blank" rel="noopener noreferrer" aria-label={o.name} className="flex-shrink-0">
                {img}
              </a>
            ) : (
              <span key={o.name} className="flex-shrink-0">{img}</span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
