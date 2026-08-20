import Image from "next/image";

const outlets = [
  { name: "City FM", src: "https://res.cloudinary.com/davuaeyxb/image/upload/v1787232820/CityFm_n8kbyv.png", height: "h-14 sm:h-16" },
  { name: "TVC", src: "https://res.cloudinary.com/davuaeyxb/image/upload/v1787232820/TVC_ir27si.png", height: "h-8 sm:h-10" },

  { name: "Base FM", src: "https://res.cloudinary.com/davuaeyxb/image/upload/v1787232819/BaseFm_iyrlzd.png", height: "h-8 sm:h-10" },
];

export default function FeaturedIn() {
  return (
    <section className="bg-bg-soft py-6">
      <div className="container-site flex flex-col sm:flex-row items-center gap-3 sm:gap-10">
        <p className="label-tag text-primary-dark whitespace-nowrap">Featured In</p>
        <div className="flex flex-1 flex-wrap items-center justify-between gap-x-10 gap-y-3">
          {outlets.map((o) => (
            <Image
              key={o.name}
              src={o.src}
              alt={o.name}
              width={120}
              height={48}
              className={`${o.height} w-auto object-contain`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
