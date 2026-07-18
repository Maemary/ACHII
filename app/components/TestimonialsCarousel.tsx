"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    quote:
      "I especially loved the connection made with heat and other public health issues around us. I also enjoyed the part where the speaker spoke about healthcare workers being trained on climate change issues and how they affect our health. I think that's something that needs to be included in our curriculum in school, because all I know about climate change are from webinars and sessions like this I attended.",
    role: "Final Year Pharmacy Student",
  },
  {
    quote:
      "The panel session with the speakers, especially the part where the use of insecticide treated nets was found to have a profound effect on mitigation of malaria parasite infection. I especially loved the part where I learned something new, about the insecticide sprayed paints that can be used to paint houses and prevent mosquitoes from reproducing when they perch on the wall.",
    role: "Final Year Pharmacy Student",
  },
  {
    quote:
      "I enjoyed the Question and Answer session. Also how the speaker simplifies the message",
    role: "Customer service representative.",
  },
  
  {
    quote:
      "I loved the way the presenters spoke and the way they kept the humor in the conversation thus making the webinar captivating, educative and interesting at the same time.",
    role: "Student and Freelancer",
  },
    {
    quote:
      "The presenters slides were so concise and straight to the point while still being engaging",
    role: "Medical Doctor",
  },
  {
    quote:
      "**What Yill You Change** - I now have the knowledge and zeal to talk about the effect of climate change of children, so I will educate parents, teachers and children I come across and spend time with.",
    role: "Operations Manager",
  },
   {
    quote:
      "**What Did You Learn** -  I am determined to pay more attention to environmental health in my daily life. Specifically, I will try to reduce water consumption avoid excessive use of plastic and encourage others to follow health and environmental principles.",
    role: "Community Member",
  },
   {
    quote:
      "**What Yill You Change** -  I already make little changes such as disposing my waste properly, but I'm committing to speaking more to my friends and colleagues about climate change and the action it has on our planet and our health. I used to do that earlier on to the extent my friends nicknamed me 'zero waste advocate', now however, I want to be able to help communities especially low income communities in any little way as possible and also keep advocating for climate action.",
    role: "Final Year Pharmacy Student",
  },
  
 
  {
    quote:
      "**What Did You Learn** - I'll ensure to drink more water and encourage others around me to do the same.",
    role: "Student",
  },
 
];

// Wrap any part of a quote in **double asterisks** to render it bold, e.g. "so **very** true".
function renderQuote(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-strong">{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}

export default function TestimonialsCarousel() {
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
            <p className="label-tag mb-4">In Their Words</p>
            <h2 className="font-header font-semibold text-strong text-3xl lg:text-[40px] leading-[1.15] tracking-[-0.01em]">
              What people tell us after a session.
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-stroke-soft flex items-center justify-center transition-colors enabled:hover:bg-primary-lighter enabled:hover:border-primary-base disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-stroke-soft flex items-center justify-center transition-colors enabled:hover:bg-primary-lighter enabled:hover:border-primary-base disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>

       <div className="overflow-hidden cursor-grab active:cursor-grabbing select-none" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((t, i) => (
              <div key={i} className="pl-6 flex-[0_0_100%] sm:flex-[0_0_60%] lg:flex-[0_0_40%]">
                <div className="bg-bg-soft rounded-xl p-8 h-full flex flex-col">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-primary-base/25 mb-5">
                    <path d="M9 7C6.24 7 4 9.24 4 12v6h6v-6H6c0-1.66 1.34-3 3-3V7Zm11 0c-2.76 0-5 2.24-5 5v6h6v-6h-4c0-1.66 1.34-3 3-3V7Z" />
                  </svg>
                  <p className="font-body italic text-strong text-base leading-[1.75] mb-6 flex-1">&ldquo;{renderQuote(t.quote)}&rdquo;</p>
                  <p className="font-body text-sm text-soft border-t border-stroke-gray pt-4">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 justify-center mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${selected === i ? "w-6 bg-primary-base" : "w-1.5 bg-stroke-sub"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
