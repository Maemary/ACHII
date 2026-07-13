"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const SLIDES = [
  {
    src: "/images/Slides1.JPG",
    alt: "A clinician and a community member examine a seedling in dry farmland",
  },
//   {
//     src: "/images/Slides2.JPG",
//     alt: "Description of second image",
//   },
//   {
//     src: "/images/Slides3.JPG",
//     alt: "Description of third image",
//   },
//   {
//     src: "/images/Slides4.JPG",
//     alt: "Description of third image",
//   },
//   {
//     src: "/images/Slides5.JPG",
//     alt: "Description of third image",
//   },
  {
    src: "/images/Slides6.JPG",
    alt: "Description of third image",
  },
  {
    src: "/images/Slides7.JPG",
    alt: "Description of third image",
  },
];

const TRACK_SLIDES = [...SLIDES, SLIDES[0]];

const AUTOPLAY_INTERVAL = 2000;
const SWIPE_THRESHOLD = 50;
const TRANSITION_MS = 700;


export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
   const [withTransition, setWithTransition] = useState(true);
   const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);


    const next = useCallback(() => {
    setWithTransition(true);
    setIndex((i) => i + 1);
  }, []);

  const prev = useCallback(() => {
    // Only used by manual arrow clicks; keep it simple by wrapping normally.
    setWithTransition(true);
    setIndex((i) => (i === 0 ? SLIDES.length - 1 : i - 1));
  }, []);


 const goTo = useCallback((i: number) => {
    setWithTransition(true);
    setIndex(i);
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
        next();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

    useEffect(() => {
    if (index === SLIDES.length) {
      const timeout = setTimeout(() => {
        setWithTransition(false);
        setIndex(0);
      }, TRANSITION_MS);
      return () => clearTimeout(timeout);
    }
  }, [index]);

   const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > SWIPE_THRESHOLD) {
      next(); // swiped left -> next slide
    } else if (distance < -SWIPE_THRESHOLD) {
      prev(); // swiped right -> previous slide
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Active dot should reflect the "real" slide even while sitting on the clone.
  const activeDot = index % SLIDES.length;


  return (
    <div
      className="relative w-full h-[432px] md:h-[596px] overflow-hidden bg-primary-base touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
         {/* Sliding track */}
        <div
        className={`flex h-full ${
          withTransition ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
    {TRACK_SLIDES.map((slide, i) => (
         <div 
         key={`${slide.src}-${i}`}
          className= "relative w-full h-full flex-shrink-0">
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
      {/* Prev/Next arrows */}
      {/* <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition"
      >
        <ChevronRight />
      </button> */}

      {/* Dots */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}