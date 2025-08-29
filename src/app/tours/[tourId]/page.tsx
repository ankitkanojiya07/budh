'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import dayWiseDataTourDataImporter from '@/content-data/daywise-trips-data/dayWiseDataTourDataImporter';
import gsap from 'gsap';
import { useParams } from 'next/navigation';
import Link from 'next/link';
// Trips-data (destination) imports for fallback rendering
import ajantaelora_data from "@/content-data/trips-data/ajanta-ellora-tour.json";
import bodhgaay_data from "@/content-data/trips-data/bodhgaya-tour.json";
import sarnath_data from "@/content-data/trips-data/sarnath-tour.json";
import kapilvastu_data from "@/content-data/trips-data/kapilvastu-tour.json";
import rajgir_data from "@/content-data/trips-data/rajgir-tour.json";
import nalanda_data from "@/content-data/trips-data/nalanda-tour.json";
import varanasi_data from "@/content-data/trips-data/varanasi-tour.json";
import lumbini_data from "@/content-data/trips-data/lumbini-tour.json";
import kushinagar_data from "@/content-data/trips-data/kushinagar-tour.json";
import sravasti_data from "@/content-data/trips-data/sravasti-tour.json";
import vaishali_data from "@/content-data/trips-data/vaishali-tour.json";
import sankisa_data from "@/content-data/trips-data/sankisa-tour.json";
import sikkim_data from "@/content-data/trips-data/sikkim-tour.json";
import ladakh_data from "@/content-data/trips-data/ladakh-tour.json";
import tabo_data from "@/content-data/trips-data/tabo-tour.json";
import tawang_data from "@/content-data/trips-data/tawang-tour.json";

interface DayProgram {
    day: string;
    title?: string;
    desc: string;
}

interface TourData {
    name: string;
    duration: string;
    link: string;
    destination: string;
    description?: string | string[];
    sketchProgram: DayProgram[];
}

interface TourDataMap {
    [key: string]: TourData;
}

// Image mapping for tour packages - using new .jpg images
const tourPackageImages = {
    buddhist_circuit: '/tour-package-header-images/1.jpg',
    buddhist_india: '/tour-package-header-images/2.jpg',
    buddhist_pilgrimage: '/tour-package-header-images/3.jpg',
    buddhist: '/tour-package-header-images/4.jpg',
    footstep_of_buddha: '/tour-package-header-images/5.jpg',
    ganga_sailing: '/tour-package-header-images/6.jpg',
    golden_triangle: '/tour-package-header-images/7.jpg',
    india_buddhist: '/tour-package-header-images/8.jpg',
    india_nepal_buddhist: '/tour-package-header-images/9.jpg',
    land_of_buddha: '/tour-package-header-images/10.jpg',
    way_to_enlightenment: '/tour-package-header-images/11.jpg'
};

// Image mapping for individual destination tours - using popular-tour images
const destinationImages = {
    'ajanta-ellora': '/popular-tour/1.jpg',
    'bodhgaya': '/popular-tour/2.jpg',
    'sarnath': '/popular-tour/3.jpg',
    'kapilvastu': '/popular-tour/4.jpg',
    'rajgir': '/popular-tour/5.jpg',
    'nalanda': '/popular-tour/6.jpg',
    'varanasi': '/popular-tour/7.jpg',
    'lumbini': '/popular-tour/8.jpg',
    'kushinagar': '/popular-tour/9.jpg',
    'sravasti': '/popular-tour/10.jpg',
    'vaishali': '/popular-tour/11.jpg',
    'sankisa': '/popular-tour/12.jpg',
    'sikkim': '/popular-tour/14.jpg',
    'ladakh': '/popular-tour/15.jpg',
    'tabo-monastery': '/popular-tour/16.jpg',
    'tawang': '/popular-tour/17.jpg'
};

// Combined image mapping
const tourImages = { ...tourPackageImages, ...destinationImages };

// Default image for tours without specific mapping
const defaultTourImage = '/tour-package-header-images/1.jpg';

// Helper to build slugs like "bodhgaya" from tour names
const formatTourLink = (name: string) => name.toLowerCase().split(' ').join('-').replace('-tour', '');

// Aggregate trips-data into a list for lookup
const tripsDataList = [
    ajantaelora_data,
    bodhgaay_data,
    sarnath_data,
    kapilvastu_data,
    rajgir_data,
    nalanda_data,
    varanasi_data,
    lumbini_data,
    kushinagar_data,
    sravasti_data,
    vaishali_data,
    sankisa_data,
    sikkim_data,
    ladakh_data,
    tabo_data,
    tawang_data
];

function DayProgram({ program, index }: { program: DayProgram; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isExpanded && contentRef.current) {
            gsap.fromTo(contentRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [isExpanded]);

    // Day program images - cycling through available images
    const dayImages = [
        '/hero2/p1.jpg',
        '/hero2/p2.jpg',
        '/hero2/p3.jpg',
        '/hero2/p4.jpg',
        '/hero2/p5.jpg',
        '/discover/buddha.jpg',
        '/journey/monks-pray.jpg',
        '/journey/standing-monk.jpg',
        '/journey/girl-pray.jpg',
        '/discover/arch.jpg'
    ];
    const dayImage = dayImages[index % dayImages.length];

    return (
        <div className="border-b cursor-pointer">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full pl-4 py-3 flex items-center justify-between text-left hover:bg-pri-orange hover:text-white transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                            src={dayImage}
                            alt={`Day ${program.day}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg">
                        {program.day}{program.title && `: ${program.title}`}
                    </h3>
                </div>
                <span className="pr-4">
                    {isExpanded ? '−' : '+'}
                </span>
            </button>
            {isExpanded && (
                <div ref={contentRef} className="p-4 pt-4 border-t border-pri-brown/20">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1">
                            <p className="text-gray-600 text-justify text-sm sm:text-base">{program.desc}</p>
                        </div>
                        <div className="relative w-full lg:w-48 h-32 lg:h-48 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                                src={dayImage}
                                alt={`Day ${program.day} - ${program.title || 'Program'}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function TourDetailPage() {
    const params = useParams();
    const tourId = params.tourId as string;
    
    const tourDataMap = dayWiseDataTourDataImporter() as TourDataMap;
    const tourData = tourDataMap[tourId];
    const tripsDataFallback = tripsDataList.find(t => formatTourLink(t.name) === tourId);

    const mainContentRef = useRef<HTMLDivElement>(null);

    // Get the appropriate image for the selected tour
    let tourImage = tourImages[tourId as keyof typeof tourImages];
    
    // If no image found for tour package, try to get image from destination data
    if (!tourImage && tripsDataFallback) {
        const destinationSlug = formatTourLink(tripsDataFallback.name);
        tourImage = destinationImages[destinationSlug as keyof typeof destinationImages];
    }
    
    // Final fallback to default image
    tourImage = tourImage || defaultTourImage;

    // Initial load animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(mainContentRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
            );
        });

        return () => ctx.revert();
    }, []);

    if (!tourData && tripsDataFallback) {
        const t = tripsDataFallback as any;
        return (
            <div className="min-h-screen bg-gray-50 pt-24">
                <main className="px-4 sm:px-6 lg:px-8 pb-8 max-w-full">
                    <div ref={mainContentRef} className="space-y-6 max-w-4xl mx-auto">
                        {/* Hero Image Section */}
                        <div className="relative h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg bg-gray-900">
                            <img
                                src={tourImage}
                                alt={t.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/hero/buddha-statues.jpg';
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center px-4">
                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                                        {t.name}
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <section className="relative bg-gray-50 p-6 rounded-lg overflow-hidden">
                            {/* Background watermarks */}
                            <div id='f-wtrmrk' className="absolute inset-0 bg-[url('/bt.png')] bg-contain bg-center bg-no-repeat opacity-10 pointer-events-none" ></div>
                            <div id='s-wtrmrk' className="absolute -bottom-[13vh] -right-[10vh] w-40 h-40 sm:w-56 sm:h-56 bg-[url('/lotus/buddh_1.png')] bg-no-repeat bg-right-bottom bg-contain opacity-30 pointer-events-none"></div>
                            
                            {/* Content with relative positioning */}
                            <div className="relative z-10">
                                {/* Basic Info if present */}
                                <div className="space-y-2 text-sm sm:text-base">
                                    {t.duration && (
                                        <p className="text-gray-600"><span className="font-semibold">Duration:</span> {t.duration}</p>
                                    )}
                                    {t.destination && (
                                        <p className="text-gray-600"><span className="font-semibold">Destination:</span> {t.destination}</p>
                                    )}
                                </div>

                                {/* Description/Main Desc */}
                                {t.mainDesc && (
                                    <div className="space-y-4">
                                        <h2 className="text-lg sm:text-xl font-semibold text-pri-brown">About</h2>
                                        <p className="text-gray-600 text-justify text-sm sm:text-base leading-relaxed">{t.mainDesc}</p>
                                    </div>
                                )}

                                {/* Paragraphs */}
                                {Array.isArray(t.para) && t.para.length > 0 && (
                                    <div className="space-y-3">
                                        {t.para.map((desc: string, index: number) => (
                                            <p key={index} className="text-gray-600 text-justify text-sm sm:text-base leading-relaxed">{desc}</p>
                                        ))}
                                    </div>
                                )}

                                {/* Major Attractions */}
                                {Array.isArray(t.majorBuddhistAttraction) && t.majorBuddhistAttraction.length > 0 && (
                                    <div className="space-y-4">
                                        <h2 className="text-lg sm:text-xl font-semibold text-pri-brown">Major Buddhist Attractions</h2>
                                        <div className="space-y-3">
                                            {t.majorBuddhistAttraction.map((item: any, i: number) => (
                                                <div key={i} className="">
                                                    <h3 className="font-semibold">{item.title}</h3>
                                                    <p className="text-gray-600 text-sm sm:text-base text-justify">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Other Attractions */}
                                {Array.isArray(t.otherAttraction) && t.otherAttraction.length > 0 && (
                                    <div className="space-y-4">
                                        <h2 className="text-lg sm:text-xl font-semibold text-pri-brown">Other Attractions</h2>
                                        <div className="space-y-3">
                                            {t.otherAttraction.map((item: any, i: number) => (
                                                <div key={i} className="">
                                                    <h3 className="font-semibold">{item.title}</h3>
                                                    <p className="text-gray-600 text-sm sm:text-base text-justify">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        );
    }

    if (!tourData) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-600 mb-4">Tour not found</h1>
                    <Link 
                        href="/tours" 
                        className="bg-im-orange hover:bg-pri-orange text-white px-6 py-3 rounded-md transition-colors"
                    >
                        Back to Tours
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            {/* Main content area */}
            <main className="px-4 sm:px-6 lg:px-8 pb-8 max-w-full">
                <div ref={mainContentRef} className="space-y-6 max-w-4xl mx-auto">
                    {/* Hero Image Section */}
                    <div className="relative h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg bg-gray-900">
                        <img
                            src={tourImage}
                            alt={tourData.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/hero/buddha-statues.jpg';
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center px-4">
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                                    {tourData.name}
                                </h1>
                                <p className="text-white/90 text-sm sm:text-base">
                                    Discover the spiritual journey
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 text-sm sm:text-base">
                        <p className="text-gray-600">
                            <span className="font-semibold">Duration:</span> {tourData.duration}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Destination:</span> {tourData.destination}
                        </p>
                    </div>

                    <div className="space-y-4">
                        {tourData.description && (
                            <h2 className="text-lg sm:text-xl font-semibold text-pri-brown">Description</h2>
                        )}
                        {Array.isArray(tourData.description) ? (
                            <div className="space-y-3">
                                {tourData.description.map((desc, index) => (
                                    <p key={index} className="text-gray-600 text-justify text-sm sm:text-base leading-relaxed">
                                        {desc}
                                    </p>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600 text-justify text-sm sm:text-base leading-relaxed">
                                {tourData.description}
                            </p>
                        )}
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg sm:text-xl font-semibold text-pri-brown">Day-wise Program</h2>
                        <div className="space-y-2 sm:space-y-4">
                            {tourData.sketchProgram.map((program, index) => (
                                <DayProgram 
                                    key={index} 
                                    program={program} 
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}