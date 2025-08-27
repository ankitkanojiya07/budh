"use client";
import ajantaelora_data from "@/content-data/trips-data/ajanta-ellora-tour.json";
import bodhgaay_data from "@/content-data/trips-data/bodhgaya-tour.json";
import sarnath_data from "@/content-data/trips-data/sarnath-tour.json";
import kapilvastu_data from "@/content-data/trips-data/kapilvastu-tour.json";
import Link from "next/link";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {useGSAP} from "@gsap/react";

const PopularTourBar = () => {
    const popularTours = [ajantaelora_data, bodhgaay_data, sarnath_data];
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const formatTourLink = (name: string) => {
        return name.toLowerCase().split(' ').join('-').replace('-tour', '');
    };

    useGSAP(() => {
        if (containerRef.current && cardsRef.current.length) {
            gsap.fromTo(cardsRef.current,
                {
                    opacity: 0,
                    y: 100
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
                    }
                }
            );
        }
    }, []);

    return (
        <div ref={containerRef} className="bg-dim-pink w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 overflow-hidden flex flex-col items-center justify-center">
            <div className="mx-auto max-w-7xl">
                <div className="mb-4 sm:mb-6 lg:mb-8  flex flex-col items-start justify-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2 sm:px-4 lg:px-6 bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 bg-clip-text text-transparent font-serif text-center sm:text-left">
                        Popular Tours
                    </h2>
                    <p className="px-2 sm:px-4 lg:px-6">Explore the most popular buddhist heritage sites in india.</p>
                </div>
                <div className="flex flex-wrap gap-6 items-center justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                                {popularTours.concat(popularTours).map((tour, i) => (
                                    <div 
                                        key={i} 
                                        ref={(el) => {
                                            if (el) cardsRef.current[i] = el;
                                        }}
                                        className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                    >
                                        {/* Image Section */}
                                        <div className="relative h-64 sm:h-[40vh] md:h-[75vh] overflow-hidden rounded-lg">
                                            <img 
                                                src="/tour-package-header-images/1.jpeg" 
                                                alt={tour.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            {/* Dark overlay for text readability */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                        </div>
                                        {/* Title overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <Link href={`/tours/${formatTourLink(tour.name)}`} className="block">
                                                <h3 className="text-xl sm:text-2xl font-bold text-white text-center uppercase tracking-wide">
                                                    {tour.name}
                                                </h3>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                </div>
            </div>
            <div className="mt-10 space-x-4">
                <Link className="bg-im-orange hover:bg-pri-orange cursor-pointer text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg hover:bg-opacity-90 transition-all duration-300" href="/allTours">View All Destinations</Link>
                <Link className="bg-im-orange hover:bg-pri-orange cursor-pointer text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg hover:bg-opacity-90 transition-all duration-300" href="/tours">View All Packages</Link>
            </div>
        </div>
    );
}

export default PopularTourBar;