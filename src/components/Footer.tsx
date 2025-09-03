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
            { name: "Tabo Tour", link: "/tours/tabo-monastery" },
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
      <footer className="bg-[url('/hero2/1122.jpg')] text-white bg-cover bg-center bg-no-repeat bg-fixed pb-12 md:pb-20 pt-8 relative overflow-hidden">
        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="container mx-auto px-6 flex flex-col items-center justify-center relative z-10">
          {/* Tour Categories Section */}
          <div className="mt-12 md:mt-20 w-full md:w-[90%] lg:w-[80%] xl:w-[70%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
              {/* Our Tours */}
              <div className="px-4 py-6 rounded-2xl hover:bg-white/5 transition-all duration-500 group">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-orange-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl md:text-3xl text-orange-400 font-serif font-semibold">
                    Our Tours
                  </h3>
                </div>
                <ul className="space-y-3">
                  {tourCategories.ourTours.map((tour, index) => (
                    <li key={index} className="group/item">
                      <Link
                        href={tour.link}
                        className="text-sm md:text-base text-white hover:text-orange-300 transition-all duration-300 flex items-center group-hover/item:translate-x-2 cursor-pointer"
                      >
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-60 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                        {tour.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Packages */}
              <div className="px-4 py-6 rounded-2xl hover:bg-white/5 transition-all duration-500 group">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-orange-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl md:text-3xl text-orange-400 font-serif font-semibold">
                    Our Packages
                  </h3>
                </div>
                <ul className="space-y-3">
                  {tourCategories.ourPackages.map((package_, index) => (
                    <li key={index} className="group/item">
                      <Link
                        href={package_.link}
                        className="text-sm md:text-base text-white hover:text-orange-300 transition-all duration-300 flex items-center group-hover/item:translate-x-2 cursor-pointer"
                      >
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-60 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                        {package_.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best Tours */}
              <div className="px-4 py-6 rounded-2xl hover:bg-white/5 transition-all duration-500 group sm:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-orange-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl md:text-3xl text-orange-400 font-serif font-semibold">
                    Best Tours
                  </h3>
                </div>
                <ul className="space-y-3">
                  {tourCategories.bestTours.map((tour, index) => (
                    <li key={index} className="group/item">
                      <Link
                        href={tour.link}
                        className="text-sm md:text-base text-white hover:text-orange-300 transition-all duration-300 flex items-center group-hover/item:translate-x-2 cursor-pointer"
                      >
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-60 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                        {tour.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Main Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-16 md:mt-20 w-full max-w-7xl">
            {/* Address Section */}
            <div className="text-center lg:text-left px-6 py-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Address
                </h2>
              </div>
              <div className="space-y-3 text-sm md:text-base text-white">
                <p className="hover:text-orange-300 transition-colors duration-300">
                  B - 351, Lower Ground Floor
                </p>
                <p className="hover:text-orange-300 transition-colors duration-300">
                  Chittranjan Park
                </p>
                <p className="hover:text-orange-300 transition-colors duration-300">
                  New Delhi – 110019
                </p>
              </div>
            </div>

            {/* Center Logo and Description */}
            <div className="text-center space-y-6 lg:space-y-8 px-6 py-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group">
              <div className="flex justify-center">
                <div className="relative w-36 h-14 md:w-44 md:h-18 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/logo.png"
                    alt="BuddhistTour Logo"
                    fill
                    className="brightness-0 invert object-contain drop-shadow-lg"
                    sizes="(max-width: 768px) 144px, 176px"
                  />
                </div>
              </div>
              <p className="text-center max-w-md mx-auto text-white text-sm md:text-base leading-relaxed">
                Embark on a transformative journey through the sacred sites of
                Buddhism. Discover ancient wisdom, spiritual enlightenment, and
                cultural heritage with our expertly curated tours.
              </p>
              {/* Enhanced Social Links */}
              <div className="flex justify-center gap-4 md:gap-6">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="group/social"
                    aria-label={social.label}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:scale-110 transition-all duration-300 group-hover/social:shadow-lg group-hover/social:shadow-orange-500/25">
                      {social.label === "Facebook" && (
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6 text-white group-hover/social:text-white transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {social.label === "Twitter" && (
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6 text-white group-hover/social:text-white transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      )}
                      {social.label === "YouTube" && (
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6 text-white group-hover/social:text-white transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center lg:text-right space-y-6 px-6 py-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group">
              <div className="flex items-center justify-center lg:justify-end mb-6">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Contact Info
                </h2>
              </div>
              <div className="space-y-3 text-white/90 text-sm md:text-base">
                <p className="hover:text-orange-300 transition-colors duration-300 flex items-center justify-center lg:justify-end">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +91 11 40529573
                </p>
                <p className="hover:text-orange-300 transition-colors duration-300 flex items-center justify-center lg:justify-end">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  +91 9818598189
                </p>
                <p className="hover:text-orange-300 transition-colors duration-300 flex items-center justify-center lg:justify-end">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@buddhisttour.com
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Copyright Section */}
          <div className="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-white/20 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6">
              <p className="text-white text-sm md:text-base text-center md:text-left">
                © {new Date().getFullYear()} BuddhistTour. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span>Made with</span>
                <svg
                  className="w-4 h-4 text-red-500 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  By{" "}
                  <a href="https://www.linkedin.com/in/ankitkanojiya07/" className='font-semibold underline' target='_blank'>
                    Ankit
                  </a>{" "}
                  &{" "}
                  <a href="https://www.linkedin.com/in/sujeetkumar-tech/" className='font-semibold underline' target='_blank'>
                    Sujeet
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;