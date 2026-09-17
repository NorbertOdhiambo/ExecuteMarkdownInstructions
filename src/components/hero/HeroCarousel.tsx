import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router";
import { heroSlides } from "../../data/church";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const goTo = useCallback((index: number) => {
    setCurrent((index + heroSlides.length) % heroSlides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, heroSlides[current].duration);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, paused, prefersReducedMotion]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Church welcome slideshow"
    >
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity ${prefersReducedMotion ? "" : "duration-[1200ms]"} ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== current}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${heroSlides.length}: ${slide.title}`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-[#1a0a0a] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-[#A82626]/10" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20">
        <div className="max-w-3xl">
          <p
            className="text-[#E8A0A0] text-xs sm:text-sm font-sans uppercase tracking-[0.25em] mb-6 transition-all duration-500"
            key={`eyebrow-${current}`}
          >
            {heroSlides[current].eyebrow}
          </p>
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            key={`title-${current}`}
          >
            {heroSlides[current].title}
          </h1>
          <p
            className="text-white/80 text-base sm:text-lg md:text-xl font-sans leading-relaxed mb-10 max-w-xl"
            key={`desc-${current}`}
          >
            {heroSlides[current].description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/plan-visit"
              className="inline-flex items-center px-8 py-4 bg-[#A82626] text-white text-sm font-sans font-medium uppercase tracking-widest rounded hover:bg-[#8a1f1f] transition-colors duration-200"
            >
              Plan a Visit
            </Link>
            <Link
              to="/sermons"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white text-sm font-sans font-medium uppercase tracking-widest rounded border border-white/50 hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              Watch Sermons
            </Link>
          </div>
        </div>

        {/* Service info bottom */}
        <div className="absolute bottom-24 left-6 sm:left-10 lg:left-16 right-6 flex items-end justify-between">
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded px-5 py-3">
            <p className="text-white/50 text-xs font-sans uppercase tracking-widest mb-1">Sunday Worship</p>
            <p className="text-white text-sm font-sans font-medium">[Service time to be confirmed]</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 right-6 sm:right-10 lg:right-16 z-20 flex items-center gap-4">
        {/* Prev */}
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all duration-200"
          aria-label="Previous slide"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 3L5 8l5 5" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-8 h-1.5 bg-[#A82626]" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all duration-200"
          aria-label="Next slide"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 3l5 5-5 5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
