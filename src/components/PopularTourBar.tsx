"use client";
import ajantaelora_data from "@/content-data/trips-data/ajanta-ellora-tour.json";
import bodhgaay_data from "@/content-data/trips-data/bodhgaya-tour.json";
import sarnath_data from "@/content-data/trips-data/sarnath-tour.json";
import kapilvastu_data from "@/content-data/trips-data/kapilvastu-tour.json";
import rajgir_data from "@/content-data/trips-data/rajgir-tour.json";
import nalanda_data from "@/content-data/trips-data/nalanda-tour.json";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const PopularTourBar = () => {
  const popularTours = [
    ajantaelora_data,
    bodhgaay_data,
    sarnath_data,
    kapilvastu_data,
    rajgir_data,
    nalanda_data,
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  const formatTourLink = (name: string) => {
    return name.toLowerCase().split(" ").join("-").replace("-tour", "");
  };

  useGSAP(() => {
    if (containerRef.current && cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-dim-pink w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 sm:mb-6 lg:mb-8  flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2 sm:px-4 lg:px-6 bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 bg-clip-text text-transparent font-serif">
            Popular Journeys
          </h2>
          <p className="px-2 sm:px-4 lg:px-6">
            Explore the most popular buddhist heritage sites in india.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 w-full">
            {popularTours.map((tour, i) => (
              <Link
                key={i}
                href={`/tours/${formatTourLink(tour.name)}`}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600"
                aria-label={tour.name}
              >
                {/* Image Section */}
                <div className="relative h-64 sm:h-[40vh] md:h-[75vh] md:max-h-[489px] overflow-hidden rounded-lg">
                  <img
                    src={`/${tour.image}`}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white text-center uppercase tracking-wide">
                    {tour.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <Link
          className="bg-im-orange hover:bg-pri-orange cursor-pointer text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg hover:bg-opacity-90 rounded-lg transition-all duration-300 w-full sm:w-auto text-center"
          href="/allTours"
        >
          View All Destinations
        </Link>
        <Link
          className="bg-im-orange hover:bg-pri-orange cursor-pointer text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg hover:bg-opacity-90 rounded-lg transition-all duration-300 w-full sm:w-auto text-center"
          href="/tours"
        >
          View All Packages
        </Link>
      </div>
    </div>
  );
};

export default PopularTourBar;
