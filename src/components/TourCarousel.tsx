"use client";

import { useState, useRef } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import TourCard from "./TourCard";

interface TourData {
  image: string;
  title: string;
  peopleCount: string;
  imagePosition?: string;
  imageSize?: string;
}

interface TourCarouselProps {
  tours: TourData[];
  className?: string;
}

export default function TourCarousel({ tours, className = "" }: TourCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, tours.length - 3);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex -ml-3 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 33.333}%)`
          }}
        >
          {tours.map((tour, index) => (
            <div key={index} className="flex-shrink-0 w-full basis-1/2 md:basis-1/3 pl-3">
              <TourCard
                image={tour.image}
                title={tour.title}
                peopleCount={tour.peopleCount}
                imagePosition={tour.imagePosition}
                imageSize={tour.imageSize}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all cursor-pointer duration-200 hover:scale-110 z-10 border border-gray-200"
        aria-label="Previous slide"
      >
        <IconChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all cursor-pointer duration-200 hover:scale-110 z-10 border border-gray-200"
        aria-label="Next slide"
      >
        <IconChevronRight className="w-5 h-5" />
      </button>

      {/* Navigation Arrows - Positioned outside and properly centered */}
    </div>
  );
}
