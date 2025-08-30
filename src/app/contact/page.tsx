"use client";

import {useEffect, useRef} from "react";
import ContactForm from "@/components/ContactForm";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

const page = () => {
    const inquiryGridRef = useRef<HTMLDivElement>(null);

    const contactInfo = [
        {
            title: "General Inquiries",
            content: "For any kind of queries and help, please email our reservation expert team at",
            email: "test",
            additionalText: ". They will revert all your queries at the earliest within 12 hours."
        },
        {
            title: "Reservations & Planning",
            content: "You can contact us via email at",
            email: "test",
            additionalText: " for hotel room reservations related enquiries, itinerary planning, excursions, holiday options, rates, etc."
        },
        {
            title: "Business & Partnerships",
            content: "Visit",
            link: "buddhisttour.com",
            additionalText: " for joint promotions, advertising, partnerships, fulfillment role, business relations, banner advertising, membership programs, etc."
        },
        {
            title: "Technical Support",
            content: "For any technology related queries and issues contact us via email at",
            email: "info@buddhisttour.com"
        }
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate the inquiry grid items with stagger
        const inquiryItems = inquiryGridRef.current?.children;
        if (inquiryItems) {
            gsap.from(inquiryItems, {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: inquiryGridRef.current,
                    start: "top 80%",
                    end: "bottom center",
                    toggleActions: "play none none reverse"
                }
            });
        }
    }, []);

    return (
        <main className="w-full min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-[url('/contact/c1.jpg')] bg-cover bg-center font-bold  text-center py-8 sm:py-12 md:py-16 lg:py-20 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Contact</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal">
                        Get in touch with us for all your Buddhist tour needs
                    </p>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-pri-brown mb-4">
                        How Can We Help You?
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                        Choose the best way to reach us based on your needs
                    </p>
                </div>

                {/* Responsive Grid Layout */}
                <div ref={inquiryGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="p-4 sm:p-6 lg:p-8 ring-2 ring-pri-orange ring-offset-2 bg-pri-orange text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 font-bold">{info.title}</h3>
                                <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
                                    {info.content}{' '}
                                    {info.email && (
                                        <a href={`mailto:${info.email}`} className="underline hover:no-underline break-words">
                                            {info.email}
                                        </a>
                                    )}
                                    {info.link && (
                                        <a href={`https://${info.link}`} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline break-words">
                                            {info.link}
                                        </a>
                                    )}
                                    {info.additionalText}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Components */}
            {/* <ContactBar /> */}
            <ContactForm />
        </main>
    )
}

export default page;