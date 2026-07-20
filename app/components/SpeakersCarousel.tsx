"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

// Add each speaker's headshot via `image` (Cloudinary URL) once available — the initials avatar is a placeholder until then.
const speakers = [
  { name: "Lasisi Godwin", image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784555374/Godwin_toz7mg.jpg" },
  { name: "Toluwalase Abiona",  image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784555372/Abiona_mpqwjv.jpg" },
  { name: "Jennifer Uchendu",  image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784555374/Jennifer_ssjmpu.jpg" },
  { name: "Dr. Ayodele Majekodunmi",  image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784555371/Ayodele_vgjxw6.jpg" },
  { name: "Dr. Msilikale Walter Manyiri",  image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784555376/Walter_vxv5ny.jpg" },
  { name: "Pharm (Dr.) Esther Amos",  image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784555371/Esther_eedc4f.jpg" },
  { name: "Odunola Oladeji",   image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784555375/Oladeji_kxb4lf.jpg" },
  { name: "Sharon Chiahemen",  image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784555376/Sharon_aalkqk.jpg" },
  { name: "Kehinde Olanrewaju",  image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784555374/Kehinde_vr26gv.jpg" },
  { name: "Funmilayo Adeagbo Famuyiwa",  image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784555373/funmilayo_ad15yu.jpg" },
  { name: "Abdulhakeem Abdulsalam Oladipupo",   image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784555370/Abdul_tseeob.jpg" },
  { name: "Kosomolate Precious", image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784555375/Precious_c3ijfd.jpg" },

];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function SpeakersCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", dragFree: false });
  const [selected, setSelected] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelected(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="label-tag mb-4">Featured Speakers</p>
            <h2 className="font-header font-semibold text-strong text-3xl lg:text-[40px] leading-[1.15] tracking-[-0.01em]">
              The voices behind the series.
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous speaker"
              className="w-11 h-11 rounded-full border border-stroke-soft flex items-center justify-center transition-colors enabled:hover:bg-primary-lighter enabled:hover:border-primary-base disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Next speaker"
              className="w-11 h-11 rounded-full border border-stroke-soft flex items-center justify-center transition-colors enabled:hover:bg-primary-lighter enabled:hover:border-primary-base disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing select-none" ref={emblaRef}>
          <div className="flex -ml-6">
            {speakers.map((s, i) => (
              <div key={i} className="pl-6 flex-[0_0_65%] sm:flex-[0_0_38%] lg:flex-[0_0_23%]">
                <div className="bg-bg-soft rounded-xl p-6 h-full flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-5 shrink-0">
                    {s.image ? (
                      <Image src={s.image} alt={s.name} fill sizes="96px" className="object-cover" />
                    ) : (
                      <div className="w-full h-full bg-primary-lighter flex items-center justify-center">
                        <span className="font-header font-semibold text-primary-base text-lg">{initials(s.name)}</span>
                      </div>
                    )}
                  </div>
                  <p className="font-header font-semibold text-strong text-base leading-snug mb-1">{s.name}</p>
                  <p className="font-body text-sub text-sm"></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 justify-center mt-8">
          {speakers.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              aria-label={`Go to speaker ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${selected === i ? "w-6 bg-primary-base" : "w-1.5 bg-stroke-sub"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
