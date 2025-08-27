'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AnimatedImageSectionProps {
    name: string;
}

export default function AnimatedImageSection({ name }: AnimatedImageSectionProps) {
    const sectionRef = useRef(null);
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
    const image3Ref = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        });

        // Initial state
        gsap.set([image1Ref.current, image2Ref.current, image3Ref.current], {
            opacity: 0,
            y: 100
        });

        // Animation sequence
        tl.to(image1Ref.current, {
            opacity: 1,
            y: 0,
            duration: 1
        })
        .to(image2Ref.current, {
            opacity: 1,
            y: 0,
            duration: 1
        }, "-=0.5")
        .to(image3Ref.current, {
            opacity: 1,
            y: 0,
            duration: 1
        }, "-=0.5")
        .to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 1
        }, "-=0.5");

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 gap-6">
                    {/* Left side images */}
                    <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4 relative">
                        <div ref={image1Ref} className="col-span-1">
                            <div className="relative h-[300px] rounded-lg overflow-hidden">
                                <Image
                                    src="/discover/buddha.jpg"
                                    alt={`${name} Discover`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div ref={image2Ref} className="col-span-1 mt-8">
                            <div className="relative h-[400px] rounded-lg overflow-hidden">
                                <Image
                                    src="/discover/arch.jpg"
                                    alt={`${name} Architecture`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div ref={image3Ref} className="col-span-2 mt-4">
                            <div className="relative h-[250px] rounded-lg overflow-hidden">
                                <Image
                                    src="/hero/buddha-statues.jpg"
                                    alt={`${name} Overview`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side text */}
                    <div ref={textRef} className="col-span-12 md:col-span-5 ml-10 flex flex-col justify-center">
                        <div className="relative">
                            <Image
                                src="/discover/lotus-icon.png"
                                alt="Lotus Icon"
                                width={60}
                                height={60}
                                className="absolute -top-15 -left-4 opacity-20"
                            />
                            <h3 className="text-3xl  text-pri-brown mb-6">
                                Discover the Beauty
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Immerse yourself in the spiritual journey through ancient temples,
                                sacred sites, and serene landscapes. Each location tells a story
                                of wisdom, peace, and enlightenment.
                            </p>
                            <p className="text-gray-600">
                                Experience the transformative power of these sacred places,
                                where centuries of Buddhist tradition merge with natural beauty
                                to create an unforgettable spiritual experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 