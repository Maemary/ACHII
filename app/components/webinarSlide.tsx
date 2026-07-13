"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/Jan.png", alt: "A clinician and a community member examine a seedling in dry farmland" },
  { src: "/images/February-Webinar.jpg", alt: "Description of second image" },
  { src: "/images/March.png", alt: "Description of third image" },
  { src: "/images/April.png", alt: "Description of third image" },
  { src: "/images/May.png", alt: "Description of third image" },
  { src: "/images/June.png", alt: "Description of third image" },
];

const TRACK_SLIDES = [...SLIDES, SLIDES[0]];

const AUTOPLAY_INTERVAL = 2000;
const SWIPE_THRESHOLD = 50;
const TRANSITION_MS = 700;

export default function WebinarSlide() {
  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const next = useCallback(() => {
    setWithTransition(true);
    setIndex((i) => i + 1);
  }, []);

  const prev = useCallback(() => {
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
      next();
    } else if (distance < -SWIPE_THRESHOLD) {
      prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeDot = index % SLIDES.length;

  return (
    <div
      className="relative w-full h-full md:h-[596px] overflow-hidden bg-primary-dark touch-pan-y"
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
          <div key={`${slide.src}-${i}`} className="relative w-full h-full flex-shrink-0">
            {/* Blurred, color-matched backdrop fills the letterboxed edges */}
            <Image
              src={slide.src}
              alt=""
              fill
              aria-hidden
              sizes="100vw"
              className="object-cover scale-10 blur-lg "
            />
            {/* Sharp foreground image, always fully visible, never cropped */}
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="relative object-scale-down"
            />
          </div>
        ))}
      </div>
    </div>
  );
}