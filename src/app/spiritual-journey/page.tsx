'use client';
import { useState, useEffect, useRef } from 'react';
import lifeOfBuddhaDataImporter from '@/content-data/life-of-buddha-data/lifeOfBuddhaDataImporter';
import buddhismTripsDataImporter from '@/content-data/buddhism-trips-data/buddhismTripsDataImporter';
import gsap from 'gsap';
import Link from 'next/link';

interface MenuItem {
    name: string;
    value: string;
}

interface BuddhaLifeData {
    name: string;
    para: string[];
}

interface GetThereInfo {
    air?: string;
    rail?: string;
    road?: string;
}

interface Attraction {
    title: string;
    desc: string | string[];
}

interface Festival {
    name: string;
    link: string;
}

interface BuddhistPlace {
    title: string;
    desc: string[];
    location?: string;
    attractions?: Attraction[];
    excrusion?: Attraction[];
    getThere?: GetThereInfo;
    festival?: Festival[];
    inside?: string[];
}

interface BuddhismTripData {
    name: string;
    significance: string[];
    getThere?: GetThereInfo;
    major_buddhist_places?: BuddhistPlace[];
    otherOpts?: (string | { name: string; link: string; })[];
}

interface DataMap {
    [key: string]: BuddhaLifeData | BuddhismTripData;
}

function StorySection({ content, index }: { content: string; index: number }) {
    return (
        <p className="text-gray-600 text-justify mb-4 text-sm sm:text-base leading-relaxed">
            {content}
        </p>
    );
}

function GetThereSection({ getThere }: { getThere: GetThereInfo }) {
    if (!getThere) return null;

    return (
        <div className="mt-8 bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-pri-brown mb-4">How to Get There</h3>
            <div className="space-y-4">
                {getThere.air && (
                    <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-pri-brown mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-pri-brown text-sm sm:text-base">By Air</h4>
                            <p className="text-gray-600 text-sm sm:text-base">{getThere.air}</p>
                        </div>
                    </div>
                )}
                {getThere.rail && (
                    <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-pri-brown mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-pri-brown text-sm sm:text-base">By Rail</h4>
                            <p className="text-gray-600 text-sm sm:text-base">{getThere.rail}</p>
                        </div>
                    </div>
                )}
                {getThere.road && (
                    <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-pri-brown mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-pri-brown text-sm sm:text-base">By Road</h4>
                            <p className="text-gray-600 text-sm sm:text-base">{getThere.road}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function FestivalSection({ festivals }: { festivals: Festival[] }) {
    if (!festivals?.length) return null;

    return (
        <div className="mt-8">
            <h3 className="text-lg sm:text-xl font-semibold text-pri-brown mb-4">Festivals</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {festivals.map((festival, index) => (
                    <Link 
                        key={index}
                        href={festival.link}
                        className="block p-4 bg-gray-50 hover:bg-pri-brown/5 rounded-lg transition-colors"
                    >
                        <span className="text-pri-brown hover:text-pri-brown/80 text-sm sm:text-base">{festival.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function BuddhistPlaceSection({ place }: { place: BuddhistPlace }) {
    return (
        <div className="mt-8 border border-gray-100 rounded-lg p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-pri-brown mb-4">{place.title}</h3>
            
            {/* Description */}
            <div className="space-y-4 mb-6">
                {place.desc.map((desc, index) => (
                    <p key={index} className="text-gray-600 text-justify text-sm sm:text-base leading-relaxed">{desc}</p>
                ))}
            </div>

            {/* Location */}
            {place.location && (
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-pri-brown mb-2 text-sm sm:text-base">Location</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{place.location}</p>
                </div>
            )}

            {/* Inside Details */}
            {place.inside && place.inside.length > 0 && (
                <div className="mt-6">
                    <h4 className="text-base sm:text-lg font-medium text-pri-brown mb-4">Inside the Temple</h4>
                    <div className="space-y-3">
                        {place.inside.map((detail, index) => (
                            <p key={index} className="text-gray-600 text-justify text-sm sm:text-base leading-relaxed">{detail}</p>
                        ))}
                    </div>
                </div>
            )}

            {/* Attractions */}
            {place.attractions && place.attractions.length > 0 && (
                <div className="mt-6">
                    <h4 className="text-base sm:text-lg font-medium text-pri-brown mb-4">Key Attractions</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {place.attractions.map((attraction, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                <h5 className="font-medium text-pri-brown mb-2 text-sm sm:text-base">{attraction.title}</h5>
                                {Array.isArray(attraction.desc) ? (
                                    <div className="space-y-2">
                                        {attraction.desc.map((desc, i) => (
                                            <p key={i} className="text-gray-600 text-sm sm:text-base">{desc}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-600 text-sm sm:text-base">{attraction.desc}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Excursions */}
            {place.excrusion && place.excrusion.length > 0 && (
                <div className="mt-6">
                    <h4 className="text-base sm:text-lg font-medium text-pri-brown mb-4">Excursions</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {place.excrusion.map((excursion, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                <h5 className="font-medium text-pri-brown mb-2 text-sm sm:text-base">{excursion.title}</h5>
                                {Array.isArray(excursion.desc) ? (
                                    <div className="space-y-2">
                                        {excursion.desc.map((desc, i) => (
                                            <p key={i} className="text-gray-600 text-sm sm:text-base">{desc}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-600 text-sm sm:text-base">{excursion.desc}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Festival Section */}
            {place.festival && <FestivalSection festivals={place.festival} />}

            {/* Transportation */}
            {place.getThere && <GetThereSection getThere={place.getThere} />}
        </div>
    );
}

function RelatedLinksSection({ 
    otherOpts, 
    category 
}: { 
    otherOpts: (string | { name: string; link: string; })[]; 
    category: string;
}) {
    if (!otherOpts?.length) return null;

    return (
        <div className="mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-pri-brown mb-4">
                {category === 'region' ? 'Related Tours' : 'Buddhist Festivals'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherOpts.map((opt, index) => {
                    const name = typeof opt === 'string' ? opt : opt.name;
                    const link = typeof opt === 'string' ? `/tours/${name.toLowerCase().replace(/\s+/g, '-')}` : opt.link;
                    
                    return (
                        <Link 
                            href={link}
                            key={index}
                            className="block p-4 bg-gray-50 hover:bg-pri-brown/5 rounded-lg transition-colors"
                        >
                            <span className="text-pri-brown hover:text-pri-brown/80 text-sm sm:text-base">{name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

function isBuddhaLifeData(data: BuddhaLifeData | BuddhismTripData): data is BuddhaLifeData {
    return 'para' in data;
}

export default function SpiritualJourneyPage() {
    const categories = [
        { name: "Life of Buddha", value: "life" },
        { name: "Buddhism Tours", value: "region" }
    ];

    const lifeEvents: MenuItem[] = [
        { name: 'Birth of Buddha', value: 'birth' },
        { name: 'Childhood of Buddha', value: 'childhood' },
        { name: 'Four Encounters of Buddha', value: 'fourEncounter' },
        { name: 'Departure from Palace', value: 'departure' },
        { name: 'Enlightenment of Buddha', value: 'enlightenment' },
        { name: 'Teachings of Buddha', value: 'teachings' },
        { name: 'Parinirvana of Buddha', value: 'parinirvana' }
    ];

    const buddhismTrips: MenuItem[] = [
        { name: 'Buddhism in Bihar', value: 'bihar' },
        { name: 'Buddhism in Uttar Pradesh', value: 'up' },
        { name: 'Buddhism in Orissa', value: 'orrisa' },
        { name: 'Buddhism in Gujarat', value: 'gujarat' },
        { name: 'Buddhism in Arunachal Pradesh', value: 'arunachal' },
        { name: 'Buddhism in Sikkim', value: 'sikkim' },
        { name: 'Buddhism in Jammu & Kashmir', value: 'jk' },
        { name: 'Buddhism in Maharashtra', value: 'maharashtra' },
        { name: 'Buddhism in Himachal Pradesh', value: 'himachal' },
        { name: 'Buddhism in Nepal', value: 'nepal' },
        { name: 'Buddhist Festivals in India', value: 'festivals' },
        { name: 'Buddhist Temples & Monuments', value: 'temples' }
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedItem, setSelectedItem] = useState<MenuItem>(lifeEvents[0]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const lifeDataMap = lifeOfBuddhaDataImporter() as DataMap;
    const tripsDataMap = buddhismTripsDataImporter() as DataMap;
    
    const currentData = selectedCategory.value === 'life' 
        ? lifeDataMap[selectedItem.value]
        : tripsDataMap[selectedItem.value];
    
    const mainContentRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Close mobile menu when selections are made
    const handleCategorySelect = (category: any) => {
        setSelectedCategory(category);
        setIsMobileMenuOpen(false);
    };

    const handleItemSelect = (item: MenuItem) => {
        setSelectedItem(item);
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        setSelectedItem(selectedCategory.value === 'life' ? lifeEvents[0] : buddhismTrips[0]);
    }, [selectedCategory]);

    // Initial load animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            
            tl.fromTo(sidebarRef.current,
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            );

            tl.fromTo(mainContentRef.current,
                { x: 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.6"
            );
        });

        return () => ctx.revert();
    }, []);

    // Content change animation
    useEffect(() => {
        if (!mainContentRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(mainContentRef.current,
                { opacity: 0, x: 20 },
                { 
                    opacity: 1, 
                    x: 0, 
                    duration: 0.5, 
                    ease: "power2.out"
                }
            );
        });

        return () => ctx.revert();
    }, [selectedItem]);

    // Mobile menu animation
    useEffect(() => {
        if (!mobileMenuRef.current) return;

        const ctx = gsap.context(() => {
            if (isMobileMenuOpen) {
                gsap.fromTo(mobileMenuRef.current,
                    { x: '100%', opacity: 0 },
                    { x: '0%', opacity: 1, duration: 0.3, ease: "power2.out" }
                );
            } else {
                gsap.to(mobileMenuRef.current,
                    { x: '100%', opacity: 0, duration: 0.3, ease: "power2.in" }
                );
            }
        });

        return () => ctx.revert();
    }, [isMobileMenuOpen]);

    return (
        <div className="min-h-screen">
            {/* Mobile Header */}
            <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-40">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-full flex items-center justify-between p-2 rounded-md hover:bg-gray-100"
                >
                    <h1 className="text-base sm:text-lg font-semibold text-pri-brown truncate">
                        {selectedItem.name}
                    </h1>
                    <svg 
                        className={`w-5 h-5 text-pri-brown transition-transform duration-200 flex-shrink-0 ml-2 ${
                            isMobileMenuOpen ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div 
                ref={mobileMenuRef}
                className="lg:hidden fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white z-50 transform translate-x-full opacity-0 shadow-xl"
            >
                <div className="p-6 h-full overflow-y-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-pri-brown">Spiritual Journey</h2>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-md hover:bg-gray-100"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Category Selection */}
                    <div className="mb-6 space-y-2">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => handleCategorySelect(category)}
                                className={`w-full text-left py-3 px-4 rounded-md transition-colors ${
                                    selectedCategory.value === category.value
                                        ? 'bg-pri-brown text-white'
                                        : 'hover:bg-pri-brown/5'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-2">
                        {(selectedCategory.value === 'life' ? lifeEvents : buddhismTrips).map((item) => (
                            <button
                                className={`w-full text-left py-3 px-4 rounded-md hover:bg-pri-brown/5 transition-colors ${
                                    selectedItem.value === item.value
                                        ? 'text-pri-brown font-medium bg-pri-brown/10'
                                        : 'text-gray-600'
                                }`}
                                key={item.value}
                                onClick={() => handleItemSelect(item)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex">
                {/* Desktop Sidebar */}
                <aside ref={sidebarRef} className="hidden lg:block w-[300px] xl:w-[350px] sticky top-0 h-screen flex-shrink-0 p-6 xl:p-8 text-base overflow-y-auto border-r border-gray-100">
                    <h2 className="text-xl font-semibold mb-6 text-pri-brown">Spiritual Journey</h2>
                    
                    {/* Category Selection */}
                    <div className="mb-6 space-y-2">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => setSelectedCategory(category)}
                                className={`w-full text-left py-2 px-4 rounded-md transition-colors ${
                                    selectedCategory.value === category.value
                                        ? 'bg-pri-brown text-white'
                                        : 'hover:bg-pri-brown/5'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-1">
                        {(selectedCategory.value === 'life' ? lifeEvents : buddhismTrips).map((item) => (
                            <button
                                className={`w-full text-left py-2 px-3 rounded-md hover:bg-pri-brown/5 transition-colors ${
                                    selectedItem.value === item.value
                                        ? 'text-pri-brown font-medium bg-pri-brown/10'
                                        : 'text-gray-600'
                                }`}
                                key={item.value}
                                onClick={() => setSelectedItem(item)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </aside>

                {/* Main content area */}
                <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-full">
                    {currentData && (
                        <div ref={mainContentRef} className="space-y-6 max-w-4xl mx-auto mt-16">
                            <h1 className="text-2xl sm:text-3xl font-semibold text-pri-brown mb-8 hidden lg:block">
                                {currentData.name}
                            </h1>

                            <div className="space-y-4">
                                {(isBuddhaLifeData(currentData) ? currentData.para : (currentData as BuddhismTripData).significance).map((paragraph, index) => (
                                    <StorySection 
                                        key={index} 
                                        content={paragraph} 
                                        index={index}
                                    />
                                ))}
                            </div>

                            {/* Transportation Section */}
                            {!isBuddhaLifeData(currentData) && currentData.getThere && (
                                <GetThereSection getThere={currentData.getThere} />
                            )}

                            {/* Major Buddhist Places Section */}
                            {!isBuddhaLifeData(currentData) && currentData.major_buddhist_places && currentData.major_buddhist_places.length > 0 && (
                                <div className="mt-12">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-pri-brown mb-6">Major Buddhist Places</h2>
                                    <div className="space-y-8">
                                        {currentData.major_buddhist_places.map((place, index) => (
                                            <BuddhistPlaceSection key={index} place={place} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Related Tours/Festivals Section */}
                            {!isBuddhaLifeData(currentData) && currentData.otherOpts && (
                                <RelatedLinksSection 
                                    otherOpts={currentData.otherOpts}
                                    category={selectedCategory.value}
                                />
                            )}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
