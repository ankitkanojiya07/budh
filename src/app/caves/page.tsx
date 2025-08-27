'use client';
import { useState, useEffect, useRef } from 'react';
import cavesDataImporter from '@/content-data/caves-data/cavesDataImporter';
import gsap from 'gsap';

interface CaveDetail {
    name: string;
    value: string;
}

interface GetThereInfo {
    air?: string;
    rail?: string;
    road?: string;
}

interface CaveData {
    name: string;
    para?: string[];
    architecture?: string[];
    getThere?: GetThereInfo[] | GetThereInfo;
}

interface CaveDataMap {
    [key: string]: CaveData;
}

function ContentSection({ content, index }: { content: string; index: number }) {
    return (
        <p className="text-gray-600 text-justify mb-4 text-sm sm:text-base leading-relaxed">
            {content}
        </p>
    );
}

function GetThereSection({ getThere }: { getThere: GetThereInfo[] | GetThereInfo | undefined }) {
    if (!getThere) return null;

    // Handle both array and single object cases
    let info: GetThereInfo;
    if (Array.isArray(getThere)) {
        if (getThere.length === 0) return null;
        info = getThere[0];
    } else {
        info = getThere;
    }
    
    if (!info) return null;

    const hasTransportInfo = info.air || info.rail || info.road;
    if (!hasTransportInfo) return null;

    return (
        <div className="mt-8 bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-pri-brown mb-4">How to Get There</h3>
            <div className="space-y-4">
                {info.air && (
                    <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-pri-brown mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-pri-brown text-sm sm:text-base">By Air</h4>
                            <p className="text-gray-600 text-sm sm:text-base">{info.air}</p>
                        </div>
                    </div>
                )}
                {info.rail && (
                    <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-pri-brown mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-pri-brown text-sm sm:text-base">By Rail</h4>
                            <p className="text-gray-600 text-sm sm:text-base">{info.rail}</p>
                        </div>
                    </div>
                )}
                {info.road && (
                    <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-pri-brown mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-pri-brown text-sm sm:text-base">By Road</h4>
                            <p className="text-gray-600 text-sm sm:text-base">{info.road}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function CavesPage() {
    const caveDetails: CaveDetail[] = [
        {
            name: 'Ajanta Caves',
            value: 'ajanta'
        },
        {
            name: 'Bhaja Caves',
            value: 'bhaja'
        },
        {
            name: 'Ellora Caves',
            value: 'ellora'
        },
        {
            name: 'Junnar Caves',
            value: 'junnar'
        },
        {
            name: 'Kanheri Caves',
            value: 'kanheri'
        },
        {
            name: 'Karla Caves',
            value: 'karla'
        }
    ];

    const [selectedCave, setSelectedCave] = useState<CaveDetail>(caveDetails[0]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const caveDataMap = cavesDataImporter() as CaveDataMap;
    const caveData = caveDataMap[selectedCave.value];
    
    const mainContentRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const handleCaveSelect = (cave: CaveDetail) => {
        setSelectedCave(cave);
        setIsMobileMenuOpen(false);
    };

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
    }, [selectedCave]);

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
                    <h1 className="text-lg font-semibold text-pri-brown truncate">
                        {selectedCave.name}
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
                        <h2 className="text-xl font-semibold text-pri-brown">Buddhist Caves</h2>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-md hover:bg-gray-100"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-2">
                        {caveDetails.map((cave) => (
                            <button
                                className={`w-full text-left py-3 px-4 rounded-md hover:bg-pri-brown/5 transition-colors ${
                                    selectedCave.name === cave.name
                                        ? 'text-pri-brown font-medium bg-pri-brown/10'
                                        : 'text-gray-600'
                                }`}
                                key={cave.value}
                                onClick={() => handleCaveSelect(cave)}
                            >
                                {cave.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex">
                {/* Desktop Sidebar */}
                <aside ref={sidebarRef} className="hidden lg:block w-[300px] xl:w-[350px] sticky top-0 h-screen flex-shrink-0 p-6 xl:p-8 text-base overflow-y-auto border-r border-gray-100">
                    <h2 className="text-xl font-semibold mb-6 text-pri-brown">Buddhist Caves</h2>
                    <div className="space-y-1">
                        {caveDetails.map((cave) => (
                            <button
                                className={`w-full text-left py-2 px-3 rounded-md hover:bg-pri-brown/5 transition-colors ${
                                    selectedCave.name === cave.name
                                        ? 'text-pri-brown font-medium bg-pri-brown/10'
                                        : 'text-gray-600'
                                }`}
                                key={cave.value}
                                onClick={() => setSelectedCave(cave)}
                            >
                                {cave.name}
                            </button>
                        ))}
                    </div>
                </aside>

                {/* Main content area */}
                <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-full">
                    {caveData ? (
                        <div ref={mainContentRef} className="space-y-6 max-w-4xl mx-auto">
                            <h1 className="text-2xl sm:text-3xl font-semibold text-pri-brown hidden lg:block">
                                {caveData.name || 'Cave Information'}
                            </h1>

                            {/* Description Section */}
                            {caveData.para && caveData.para.length > 0 && (
                                <div className="space-y-4">
                                    <h2 className="text-lg sm:text-xl font-semibold text-pri-brown">About</h2>
                                    {caveData.para.map((paragraph, index) => (
                                        <ContentSection 
                                            key={index} 
                                            content={paragraph} 
                                            index={index}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Architecture Section */}
                            {caveData.architecture && caveData.architecture.length > 0 && (
                                <div className="space-y-4">
                                    <h2 className="text-lg sm:text-xl font-semibold text-pri-brown">Architecture</h2>
                                    {caveData.architecture.map((arch, index) => (
                                        <ContentSection 
                                            key={index} 
                                            content={arch} 
                                            index={index}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Transportation Section */}
                            <GetThereSection getThere={caveData.getThere} />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-64">
                            <div className="text-center">
                                <h2 className="text-xl font-semibold text-pri-brown mb-2">Cave Information Not Available</h2>
                                <p className="text-gray-600">Please select a cave from the sidebar to view details.</p>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
} 