"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from 'next/navigation';
import InfoCard from "./InfoCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const headerLinks: { title: string, link: string }[] = [
    { title: "Home", link: "/" },
    { title: "Tours", link: "/allTours" },
    // { title: "Spiritual Journey", link: "/spiritual-journey" }, --> will be converted to logo
    // { title: "Enquire", link: "/enquire" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" }
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navContainerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const isActiveLink = (link: string): boolean => {
        if (link === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(link);
    };

    // Handle scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useGSAP(() => {
        const navLinks = navContainerRef.current?.querySelectorAll('.nav-link');
        if (navLinks) {
            gsap.from(navLinks, {
                opacity: 0,
                y: 20,
                duration: 2,
                stagger: 0.2,
                ease: "power2.out"
            });
        }
    }, []);

    return (
        <>
            {/* Main Header */}
            <header className={`absolute z-50 w-full font-cormorant py-4 transition-all duration-300 ease-in-out ${isScrolled ? 'lg:opacity-0 lg:pointer-events-none' : ''}`}>
                <div className="container mx-auto px-4">
                    {/* Main header row with three sections */}
                    <div className="flex items-center justify-center">
                        {/* First 2 links */}
                        <div className="hidden lg:flex gap-6">
                            {headerLinks.slice(0, 2).map((headerOpt, index) => (
                                <Link 
                                    className={`text-[1.5vw] nav-link uppercase gap-2 text-sm transition-none font-medium relative
                                        ${pathname.includes('/tours') || pathname.includes('/spiritual-journey') || pathname.includes('/about')
                                        ? 'text-black' 
                                        : 'text-white'
                                    }
                                        ${isActiveLink(headerOpt.link) 
                                            ? 'text-im-orange before:content-["-"] before:mr-1 after:content-["-"] after:ml-1' 
                                            : 'hover:text-im-orange hover:before:content-["-"] hover:before:mr-1 hover:after:content-["-"] hover:after:ml-1'
                                        }`}
                                    href={headerOpt.link} 
                                    key={index}
                                >
                                    {
                                        <span>{headerOpt.title}</span>
                                    }
                                </Link>
                            ))}
                        </div>

                        {/* Logo */}
                        <div className="sm:flex justify-start md:flex md:justify-center mx-6">
                            <Link href="/spiritual-journey" className="flex items-center">
                                <Image 
                                    src="/header/buddha_face.png" 
                                    alt="Buddhist Tour Logo" 
                                    width={60} 
                                    height={60}
                                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain invert"
                                />
                            </Link>
                        </div>

                        {/* Last 2 links */}
                        <div className="hidden lg:flex gap-6">
                            {headerLinks.slice(2).map((headerOpt, index) => (
                                <Link 
                                    className={`nav-link text-[1.5vw] uppercase gap-2 text-sm font-medium transition-all duration-300 ${
                                        pathname.includes('/tours') || pathname.includes('/spiritual-journey') || pathname.includes('/about')
                                        ? 'text-black' 
                                        : 'text-white'
                                    }
                                    ${isActiveLink(headerOpt.link) 
                                        ? 'text-im-orange before:content-["-"] before:mr-1 after:content-["-"] after:ml-1' 
                                        : 'hover:text-im-orange hover:before:content-["-"] hover:before:mr-1 hover:after:content-["-"] hover:after:ml-1'
                                    }`}
                                    href={headerOpt.link} 
                                    key={index + 2}
                                >
                                    {headerOpt.title}
                                </Link>
                            ))}
                        </div>

                        {/* Contact button */}
                        <div className="hidden lg:flex absolute right-10 justify-end col-span-2 lg:col-span-1">
                            <button
                                onClick={() => setIsContactPanelOpen(!isContactPanelOpen)}
                                className="w-12 h-12 group hover:bg-gray-200 transition-colors duration-500 rounded-full ease-in bg-pri-orange flex flex-col items-center justify-center gap-1.5 cursor-pointer"
                                aria-label="Toggle contact panel"
                            >
                                <div className="w-6 h-0.5 group-hover:bg-pri-orange transition-colors duration-500 ease-in bg-white rounded-full"></div>
                                <div className="w-6 h-0.5 group-hover:bg-pri-orange transition-colors duration-500 ease-in bg-white rounded-full"></div>
                                <div className="w-6 h-0.5 group-hover:bg-pri-orange transition-colors duration-500 ease-in bg-white rounded-full"></div>
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden absolute right-10">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                                aria-label="Toggle mobile menu"
                            >
                                <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
                                <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                                <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
                            </button>
                        </div>
                    </div>

                    {/* Mobile navigation menu */}
                    <nav className={`lg:hidden transition-all duration-300 ease-in-out bg-white/70 backdrop-blur-sm ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="py-4 border-t border-gray-200">
                            <div className="flex flex-col gap-2">
                                {headerLinks.map((headerOpt, index) => (
                                    <Link 
                                        className={` uppercase transition-colors duration-300 py-3 px-4 hover:bg-gray-100 ${
                                            isActiveLink(headerOpt.link) 
                                            ? 'text-pri-orange' 
                                            : 'hover:text-pri-orange'
                                        }`}
                                        href={headerOpt.link} 
                                        key={index}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {headerOpt.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Info Card - only shown on desktop */}
            {isContactPanelOpen && (
                <InfoCard 
                    isOpen={isContactPanelOpen}
                    onClose={() => setIsContactPanelOpen(false)}
                />
            )}
        </>
    );
}

export default Header;