'use client';

import React, { useState, useEffect } from 'react';

interface HeroSliderProps {
  onOpenQuote?: () => void;
}

const slideImages = [
  {
    src: '/images/1.png',
    alt: 'Anjali Doors - Rolling Shutter & Industrial Door Manufacturer'
  },
  {
    src: '/images/8.png',
    alt: 'Anjali Doors - Certified Fire Rated Doors'
  },
  {
    src: '/images/2.png',
    alt: 'Anjali Doors - Cleanroom & High Performance Doors'
  }
];

export default function HeroSlider({ onOpenQuote }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slideImages.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full bg-[#00381f] select-none group overflow-hidden touch-pan-y"
    >
      {/* Slider Container: exact 2:1 aspect ratio matching the 1920x960 images */}
      <div className="relative w-full aspect-[2/1] min-h-[190px] sm:min-h-[320px] md:min-h-[440px] lg:min-h-[540px]">
        {slideImages.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === current ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))}

        {/* SVG Arrow Controls matching Royal Elementor Addons Slider */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-[#00381f] active:scale-95 text-white flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer touch-manipulation"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
            viewBox="0 0 283.4 512"
            xmlSpace="preserve"
          >
            <polygon points="54.5,256.3 283.4,485.1 256.1,512.5 0,256.3 0,256.3 27.2,229 256.1,0 283.4,27.4 " />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-[#00381f] text-white flex items-center justify-center transition-all duration-300 opacity-60 hover:opacity-100 shadow-md cursor-pointer"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 fill-current rotate-180"
            viewBox="0 0 283.4 512"
            xmlSpace="preserve"
          >
            <polygon points="54.5,256.3 283.4,485.1 256.1,512.5 0,256.3 0,256.3 27.2,229 256.1,0 283.4,27.4 " />
          </svg>
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slideImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === current
                  ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-[#e5a832]'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
