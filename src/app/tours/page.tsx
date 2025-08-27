'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

interface TourDetail {
    name: string;
    value: string;
}

// Tour package header images
const tourHeaderImages = [
    '/tour-package-header-images/1.jpeg',
    '/tour-package-header-images/2.jpeg',
    '/tour-package-header-images/3.jpeg',
    '/tour-package-header-images/4.jpeg',
    '/tour-package-header-images/5.jpeg',
    '/tour-package-header-images/6.jpeg',
    '/tour-package-header-images/7.jpeg'
];

// Image mapping for different tour types - each tour gets a specific header image
const tourImages = {
    buddhist_circuit: '/tour-package-header-images/1.jpeg',
    buddhist_india: '/tour-package-header-images/2.jpeg',
    buddhist_pilgrimage: '/tour-package-header-images/3.jpeg',
    buddhist: '/tour-package-header-images/4.jpeg',
    footstep_of_buddha: '/tour-package-header-images/5.jpeg',
    ganga_sailing: '/tour-package-header-images/6.jpeg',
    golden_triangle: '/tour-package-header-images/7.jpeg',
    india_buddhist: '/tour-package-header-images/1.jpeg',
    india_nepal_buddhist: '/tour-package-header-images/2.jpeg',
    land_of_buddha: '/tour-package-header-images/3.jpeg',
    way_to_enlightenment: '/tour-package-header-images/4.jpeg'
};

// Default image for tours without specific mapping
const defaultTourImage = '/tour-package-header-images/1.jpeg';

export default function ToursPage() {
    const toursDetails: TourDetail[] = [
        {
            name: 'Buddhist Circuit',
            value: 'buddhist_circuit'
        },
        {
            name: 'Buddhist India',
            value: 'buddhist_india'
        },
        {
            name: 'Buddhist Pilgrimage',
            value: 'buddhist_pilgrimage'
        },
        {
            name: 'Buddhist Tour',
            value: 'buddhist'
        },
        {
            name: 'Footstep of Buddha',
            value: 'footstep_of_buddha'
        },
        {
            name: 'Ganga Sailing',
            value: 'ganga_sailing'
        },
        {
            name: 'Golden Triangle',
            value: 'golden_triangle'
        },
        {
            name: 'India Buddhist',
            value: 'india_buddhist'
        },
        {
            name: 'India Nepal Buddhist',
            value: 'india_nepal_buddhist'
        },
        {
            name: 'Land of Buddha',
            value: 'land_of_buddha'
        },
        {
            name: 'Way to Enlightenment',
            value: 'way_to_enlightenment'
        }
    ];
    
    const cardsRef = useRef<HTMLAnchorElement[]>([]);

    // Initial load animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(cardsRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 pt-16">
            {/* Tour Package Cards Section */}
            <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 overflow-hidden">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2 sm:px-4 lg:px-6 font-black text-im-orange mb-4 sm:mb-6 lg:mb-8 text-center">
                        Tour Packages
                    </h2>
                    <div className="flex flex-wrap gap-6 items-center justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            {toursDetails.map((tour, i) => (
                                <Link 
                                    key={tour.value} 
                                    href={`/tours/${tour.value}`}
                                    ref={(el) => {
                                        if (el) cardsRef.current[i] = el;
                                    }}
                                    className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                >
                                    {/* Image Section */}
                                    <div className="relative sm:h-[40vh] md:h-[75vh] overflow-hidden rounded-lg">
                                        <img 
                                            src={tourImages[tour.value as keyof typeof tourImages] || defaultTourImage}
                                            alt={tour.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/hero/buddha-statues.jpg';
                                            }}
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
            </div>
        </div>
    );
}