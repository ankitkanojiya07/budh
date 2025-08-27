import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const socialLinks = [
        { href: "https://facebook.com", label: "Facebook" },
        { href: "https://twitter.com", label: "Twitter" },
        { href: "https://youtube.com", label: "YouTube" }
    ];

    const tourCategories = {
        ourTours: [
            { name: "Kushinagar Tour", link: "/tours/kushinagar" },
            { name: "Ladakh Tour", link: "/tours/ladakh" },
            { name: "Lumbini Tour", link: "/tours/lumbini" },
            { name: "Nalanda Tour", link: "/tours/nalanda" },
            { name: "Tabo Tour", link: "/tours/tabo" },
            { name: "Tawang Tour", link: "/tours/tawang" }
        ],
        ourPackages: [
            { name: "Ajanta and Ellora Tour", link: "/tours/ajanta-ellora" },
            { name: "Nagarjuna Konda Tour", link: "/tours/nagarjunakonda" },
            { name: "Buddhism in Orissa", link: "/tours/dhauli" },
            { name: "Rajgir Tour", link: "/tours/rajgir" },
            { name: "Vaishali Tour", link: "/tours/vaishali" },
            { name: "Allahabad Tour", link: "/tours/allahabad" }
        ],
        bestTours: [
            { name: "Sanchi Tour", link: "/tours/sanchi" },
            { name: "Sankisa Tour", link: "/tours/sankisa" },
            { name: "Sarnath Tour", link: "/tours/sarnath" },
            { name: "Sikkim Tour", link: "/tours/sikkim" },
            { name: "Sravasti Tour", link: "/tours/sravasti" },
            { name: "Varanasi Tour", link: "/tours/varanasi" }
        ]
    };

    return (
        <footer className="bg-[url('/tour-package-header-images/4.jpeg')] text-white bg-cover bg-center bg-no-repeat bg-fixed pb-8 md:pb-16 pt-4 relative overflow-hidden">
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            
            <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
                {/* Tour Categories Section */}
                <div className="mt-8 md:mt-16 w-full md:w-[90%] lg:w-[80%] xl:w-[70%]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Our Tours */}
                        <div className="px-4">
                            <h3 className="text-3xl bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 bg-clip-text text-transparent font-serif mb-4 md:mb-6">Our Tours</h3>
                            <ul className="space-y-2 md:space-y-3">
                                {tourCategories.ourTours.map((tour, index) => (
                                    <li key={index}>
                                        <p className="text-sm md:text-base text-white/80 transition-colors duration-300 flex items-center">
                                            <span className="mr-2">•</span>
                                            <Link href={tour.link} className="hover:text-pri-orange transition-colors duration-300 cursor-pointer">
                                                {tour.name}
                                            </Link>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Packages */}
                        <div className="px-4">
                            <h3 className="text-3xl bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 bg-clip-text text-transparent font-serif mb-4 md:mb-6">Our Packages</h3>
                            <ul className="space-y-2 md:space-y-3">
                                {tourCategories.ourPackages.map((package_, index) => (
                                    <li key={index}>
                                        <p className="text-sm md:text-base text-white/80 transition-colors duration-300 flex items-center">
                                            <span className="mr-2">•</span>
                                            <Link href={package_.link} className="hover:text-pri-orange transition-colors duration-300 cursor-pointer">
                                                {package_.name}
                                            </Link>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Best Tours */}
                        <div className="px-4 sm:col-span-2 md:col-span-1">
                            <h3 className="text-3xl bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 bg-clip-text text-transparent font-serif mb-4 md:mb-6">Best Tours</h3>
                            <ul className="space-y-2 md:space-y-3">
                                {tourCategories.bestTours.map((tour, index) => (
                                    <li key={index}>
                                        <p className="text-sm md:text-base text-white/80 transition-colors duration-300 flex items-center">
                                            <span className="mr-2">•</span>
                                            <Link href={tour.link} className="hover:text-pri-orange transition-colors duration-300 cursor-pointer">
                                                {tour.name}
                                            </Link>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-16 w-full max-w-6xl">
                    {/* Address Section */}
                    <div className="space-y-4 text-center md:text-left px-4">
                        <h2 className="text-xl md:text-2xl  mb-4 md:mb-6">Address</h2>
                        <div className="space-y-2 text-sm md:text-base">
                            <p>B - 351, Lower Ground Floor</p>
                            <p>Chittranjan Park</p>
                            <p>New Delhi – 110019</p>
                        </div>
                    </div>

                    {/* Center Logo and Description */}
                    <div className="text-center space-y-4 md:space-y-6 px-4">
                        <div className="flex justify-center">
                            <div className="relative w-32 h-12 md:w-40 md:h-16">
                                <Image 
                                    src="/logo.png"
                                    alt="Monkhi Logo"
                                    fill
                                    className="brightness-0 invert object-contain"
                                    sizes="(max-width: 768px) 128px, 160px"
                                />
                            </div>
                        </div>
                        <p className="text-center max-w-md mx-auto text-white/90 text-sm md:text-base">
                            With a commitment to excellence, we thrive in delivering exceptional solutions 
                            and building lasting partnerships. Our journey is defined by a relentless 
                            pursuit of growth.
                        </p>
                        {/* Social Links */}
                        <div className="flex justify-center gap-4 md:gap-6">
                            {socialLinks.map((social, index) => (
                                <Link 
                                    key={index}
                                    href={social.href}
                                    className="hover:text-pri-orange transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/40 flex items-center justify-center hover:border-pri-orange">
                                        {social.label === "Facebook" && (
                                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        {social.label === "Twitter" && (
                                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        )}
                                        {social.label === "YouTube" && (
                                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center md:text-right space-y-4 px-4">
                        <h2 className="text-xl md:text-2xl  mb-4 md:mb-6">Info</h2>
                        <div className="space-y-2 text-white/90 text-sm md:text-base">
                            <p>Tel / Fax: +91 11 40529573</p>
                            <p>Mobile: +91 9818598189 / +91 9811884519</p>
                            <p>Email: info@buddhisttour.com</p>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10 w-full">
                    <div className="flex justify-center items-center">
                        <p className="text-white/90 text-sm md:text-base text-center px-4">
                            © {new Date().getFullYear()} BuddhistTour. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;