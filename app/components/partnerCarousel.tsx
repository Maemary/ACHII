"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { partners } from "@/app/data/partners";

export default function PartnerCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2500 }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="embla__slide flex flex-col items-center justify-center p-0 md:p-4"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={100}
              height={80}
              className="h-20 w-60 object-contain"
            />
            <p className="mt-2 text-center font-bold text-2xl text-white">
              {partner.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}