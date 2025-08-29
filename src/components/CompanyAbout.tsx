'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const CompanyAbout = () => {
    const firstImageRef = useRef(null);
    const secondImageRef = useRef(null);
    const contentRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Simple fade animation on page load
        gsap.from('main', {
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        });

        const mm = gsap.matchMedia();
        
        mm.add("(min-width: 768px)", () => {
            gsap.to(firstImageRef.current, {
                y: 30,
                scrollTrigger: {
                    trigger: firstImageRef.current,
                    start: 'top center',
                    end: 'bottom top',
                    scrub: 1.5
                }
            });

            // Animate the second image container
            gsap.to(secondImageRef.current, {
                y: -30,
                scrollTrigger: {
                    trigger: secondImageRef.current,
                    start: 'top center',
                    end: 'bottom top',
                    scrub: 1.5
                }
            });
        });

        // Animate content paragraphs
        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                gsap.from(ref, {
                    x: index % 2 === 0 ? -50 : 50,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ref,
                        start: 'top 80%',
                        end: 'bottom center',
                        toggleActions: 'play none none reverse'
                    }
                });
            }
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            mm.revert();
        };
    }, []);

    const setContentRef = (el: HTMLParagraphElement | null, index: number) => {
        contentRefs.current[index] = el;
    };

    return (
        <section className={"w-full pt-[5vh]"}>
            <div className="w-full px-4 sm:px-6  overflow-hidden">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2 sm:px-4 lg:px-6 bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 bg-clip-text text-transparent font-serif mb-4 text-left">
                        About
                    </h2>
                </div>
            </div>
            <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-8 sm:pb-12 lg:pb-16 text-justify font-cormorant">
                <div className="max-w-7xl mx-auto">
                    {/* First Content Block */}
                    <div className="mb-12 sm:mb-16 lg:mb-20">
                        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center justify-center">
                            {/* Content */}
                            <div className="flex-1 order-2 lg:order-1 px-4 sm:px-6 lg:px-8 xl:px-12">
                                <p 
                                    ref={(el) => setContentRef(el, 0)}
                                    className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700"
                                >
                                    Spirituality is a state of being. It can connotate different things to different people, but the underlying pursuit remains to connect to a higher version of the self. Spirituality not just helps you rediscover yourself but also unearth the nuances of daily life. While people choose divergent paths to awaken their higher self, traveling acts one of the best catalysts.
                                </p>
                                <p 
                                    ref={(el) => setContentRef(el, 1)}
                                    className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700"
                                >
                                    Buddhist Tour helps people by taking them on a timeless journey across the Indo Gangetic Plains. Everyone has a spiritual journey that is unique and intimate, which is why we have made it our mission to provide a travel experience that is one of its kinds.
                                </p>
                            </div>
                            {/* Image */}
                            <div 
                                ref={firstImageRef}
                                className="w-full lg:w-80 xl:w-96 h-48 sm:h-56 lg:h-64 xl:h-72 relative overflow-hidden rounded-lg shadow-lg order-1 lg:order-2 flex-shrink-0"
                            >
                                <Image
                                    src="/popular-tour/27.jpg"
                                    alt="Buddha Statue"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Second Content Block */}
                    <div className="mb-12 sm:mb-16 lg:mb-20">
                        <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-8 lg:gap-12 items-center justify-center">
                            {/* Content */}
                            <div className="flex-1 order-2 lg:order-1 px-4 sm:px-6 lg:px-8 xl:px-12">
                                <p 
                                    ref={(el) => setContentRef(el, 2)}
                                    className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700"
                                >
                                    Our team consists of trained professionals and erudite experts who have in-depth knowledge of the regions and the way Buddhism connects to each of them. We ensure to arrange for luxurious and hassle-free travel to Buddhist pilgrimage sites, only with the motto to bring you closer to yourself.
                                </p>
                                <p 
                                    ref={(el) => setContentRef(el, 3)}
                                    className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700"
                                >
                                    We are a people's organization, which is why you can rely on us for your comfort, quality of services and exciting travel itinerary. Buddhist Tours grows every moment with the trust of the people. We believe in building relationships with you that last for a lifetime, just like the enthralling and memorable experience of the travel that goes beyond words.
                                </p>
                            </div>
                            {/* Image */}
                            <div 
                                ref={secondImageRef}
                                className="w-full lg:w-80 xl:w-96 h-48 sm:h-56 lg:h-64 xl:h-72 relative overflow-hidden rounded-lg shadow-lg order-1 lg:order-2 flex-shrink-0"
                            >
                                <Image
                                    src="/popular-tour/34.jpg"
                                    alt="Buddhist Monk"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Final Content */}
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p 
                            ref={(el) => setContentRef(el, 4)}
                            className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700"
                        >
                            Our extensive network of representatives works 24*7 to provide you with a seamless pilgrimage to Buddhist destinations across the Indo Gangetic plains. Seeded with the foundation of providing personalized services on your journey to spirituality, Buddhist Tours offers one of the most competitive rates. Be it hotels or other supplies, we offer the best in class services backed by unparalleled rates.
                        </p>

                        <p 
                            ref={(el) => setContentRef(el, 5)}
                            className="mb-6 sm:mb-8 lg:mb-12 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700"
                        >
                            With Buddhist Tours, we take you through the life of the high-spirited Buddha, in its very essence, while you renaissance through each moment.
                        </p>

                        <div 
                            ref={(el) => setContentRef(el, 6)}
                            className="text-center lg:text-right"
                        >
                            <div className="inline-block relative rounded-lg p-4 overflow-hidden">
                                {/* Background Image - only behind the text */}
                                <div className="absolute inset-0 rounded-lg">
                                    <Image
                                        src="/lotus/buddh_1.png"
                                        alt="Buddha background"
                                        fill
                                        className="object-contain opacity-20"
                                    />
                                </div>
                                {/* Text Content */}
                                <div className="relative z-10 space-y-1">
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">With best regards</p>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">Sincerely,</p>
                                    <p className="text-sm sm:text-base lg:text-lg font-semibold text-pri-brown">For Buddhist Tour</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default CompanyAbout;