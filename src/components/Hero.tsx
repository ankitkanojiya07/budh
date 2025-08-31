"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const houseRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const tourCards = [
    {
      id: 1,
      title: "Bodh Gaya Pilgrimage",
      duration: "7 Days",
      price: "₹25,999",
      image: "/hero/sl1.jpg",
      rating: 4.8,
      reviews: 127,
      badge: "Best Seller",
    },
    {
      id: 2,
      title: "Ajanta Ellora Caves",
      duration: "5 Days",
      price: "₹18,999",
      image: "/hero/sl2.jpg",
      rating: 4.6,
      reviews: 89,
      badge: "Popular",
    },
    {
      id: 3,
      title: "Ladakh Monastery Tour",
      duration: "9 Days",
      price: "₹32,999",
      image: "/hero/buddha-statues.jpg",
      rating: 4.9,
      reviews: 156,
      badge: "Premium",
    },
  ];

  useGSAP(() => {
    // Animate floating house
    if (houseRef.current) {
      gsap.to(houseRef.current, {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    // Animate waves
    if (waveRef.current) {
      gsap.to(waveRef.current, {
        x: -100,
        duration: 8,
        ease: "none",
        repeat: -1,
      });
    }

    // Stagger animation for tour cards
    gsap.fromTo(
      ".tour-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-[#fff7ed] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-yellow-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col lg:flex-row items-center">
        {/* Left Column - Content */}
        <div className="w-full lg:w-1/2 space-y-8 lg:pr-8">
          {/* Subtitle */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                Buddha Tour Related
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight">
              Discover Your
              <span className="block text-orange-600">Inner Peace</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
              Embark on a transformative journey through India's sacred Buddhist
              sites. Experience spiritual awakening and cultural enlightenment.
            </p>
          </div>

          {/* MOST POPULAR Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-orange-500"></div>
              <h2 className="text-2xl font-bold text-gray-800">MOST POPULAR</h2>
            </div>

            <div className="grid gap-4">
              {tourCards.map((card, index) => (
                <div
                  key={card.id}
                  className={`tour-card group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                    isHovered === index ? "ring-2 ring-orange-400" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="inline-block px-2 py-1 text-xs font-bold text-white bg-orange-500 rounded-full">
                          {card.badge}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3 className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {card.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4 text-orange-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                          </svg>
                          {card.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {card.rating}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-orange-600">
                          {card.price}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({card.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Animated Illustration */}
        <div className="w-full lg:w-1/2 relative h-96 lg:h-[600px] flex items-center justify-center">
          {/* Turquoise Water Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-3xl overflow-hidden">
            {/* Wave Patterns */}
            <div
              ref={waveRef}
              className="absolute bottom-0 left-0 w-full h-32 bg-white/20 transform -skew-y-6"
            ></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-white/10 transform -skew-y-3 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-white/5 transform -skew-y-1 translate-x-40"></div>

            {/* Geometric Shapes */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-8 h-8 bg-white/30 rotate-45 animate-bounce"></div>
            <div className="absolute bottom-20 left-16 w-12 h-12 bg-white/20 rounded-lg rotate-12 animate-pulse"></div>
          </div>

          {/* Floating House Illustration */}
          <div ref={houseRef} className="relative z-10">
            <div className="relative">
              {/* House Base */}
              <div className="w-48 h-32 bg-white rounded-t-2xl shadow-2xl relative">
                {/* Windows */}
                <div className="absolute top-4 left-6 w-8 h-8 bg-cyan-300 rounded-lg"></div>
                <div className="absolute top-4 right-6 w-8 h-8 bg-cyan-300 rounded-lg"></div>
                {/* Door */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-cyan-400 rounded-t-lg"></div>
              </div>

              {/* Roof */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-56 h-16 bg-orange-400 rounded-t-3xl"></div>

              {/* Chimney */}
              <div className="absolute -top-12 right-8 w-6 h-8 bg-gray-600 rounded-t-lg"></div>

              {/* Smoke */}
              <div className="absolute -top-16 right-8 w-4 h-6 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-6 h-6 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-32 w-4 h-4 bg-pink-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-32 w-8 h-8 bg-green-300 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Link
          href="/tours"
          className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <span>Explore All Journeys</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
