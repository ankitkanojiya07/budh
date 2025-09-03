'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

interface TourDetail {
    name: string;
    value: string;
    description?: string;
    duration?: string;
    highlights?: string[];
}

// Image mapping for different tour types - each tour gets a unique image from the new collection
const tourImages = {
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

// Default image for tours without specific mapping
const defaultTourImage = '/tour-package-header-images/1.jpg';

const toursDetails: TourDetail[] = [
    {
        name: 'Buddhist Circuit',
        value: 'buddhist_circuit',
        description: 'Explore the sacred sites of Buddha\'s life journey',
        duration: '8-12 days',
        highlights: ['Bodh Gaya', 'Sarnath', 'Kushinagar', 'Lumbini']
    },
    {
        name: 'Buddhist India',
        value: 'buddhist_india',
        description: 'Discover India\'s rich Buddhist heritage',
        duration: '10-15 days',
        highlights: ['Sanchi', 'Ajanta', 'Ellora', 'Nalanda']
    },
    {
        name: 'Buddhist Pilgrimage',
        value: 'buddhist_pilgrimage',
        description: 'A spiritual journey through sacred Buddhist sites',
        duration: '12-18 days',
        highlights: ['Bodh Gaya', 'Rajgir', 'Vaishali', 'Patna']
    },
    {
        name: 'Buddhist Tour',
        value: 'buddhist',
        description: 'Comprehensive exploration of Buddhist culture',
        duration: '7-14 days',
        highlights: ['Temples', 'Monasteries', 'Museums', 'Cultural Sites']
    },
    {
        name: 'Footstep of Buddha',
        value: 'footstep_of_buddha',
        description: 'Follow the path of enlightenment',
        duration: '15-20 days',
        highlights: ['Birth Place', 'Enlightenment', 'First Sermon', 'Parinirvana']
    },
    {
        name: 'Ganga Sailing',
        value: 'ganga_sailing',
        description: 'Spiritual journey along the sacred Ganges',
        duration: '5-8 days',
        highlights: ['Varanasi', 'Allahabad', 'Sarnath', 'River Ganga']
    },
    {
        name: 'Golden Triangle',
        value: 'golden_triangle',
        description: 'Classic tour of Delhi, Agra, and Jaipur',
        duration: '6-8 days',
        highlights: ['Taj Mahal', 'Red Fort', 'Amber Palace', 'City Palace']
    },
    {
        name: 'India Buddhist',
        value: 'india_buddhist',
        description: 'Deep dive into India\'s Buddhist traditions',
        duration: '10-12 days',
        highlights: ['Buddhist Centers', 'Meditation', 'Philosophy', 'Art']
    },
    {
        name: 'India Nepal Buddhist',
        value: 'india_nepal_buddhist',
        description: 'Cross-border Buddhist heritage exploration',
        duration: '12-16 days',
        highlights: ['Lumbini', 'Kathmandu', 'Bodh Gaya', 'Swayambhunath']
    },
    {
        name: 'Land of Buddha',
        value: 'land_of_buddha',
        description: 'Complete journey through Buddha\'s homeland',
        duration: '14-21 days',
        highlights: ['Birth to Death', 'All Major Sites', 'Deep Meditation', 'Cultural Immersion']
    },
    {
        name: 'Way to Enlightenment',
        value: 'way_to_enlightenment',
        description: 'Transformative spiritual journey',
        duration: '18-25 days',
        highlights: ['Meditation Retreats', 'Philosophy Study', 'Monastic Life', 'Self Discovery']
    }
];
export default function ToursPage() {
    const cardsRef = useRef<HTMLAnchorElement[]>([]);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Initial load animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(cardsRef.current,
                { opacity: 0, y: 80, scale: 0.9 },
                { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    duration: 1, 
                    stagger: 0.15, 
                    ease: "power3.out",
                    delay: 0.2
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-25 to-yellow-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-im-orange/5 to-pri-orange/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                <span className="block">Spiritual</span>
                <span className="block text-im-orange">Tour Packages</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Embark on transformative journeys through the sacred lands of
                Buddhism. Discover ancient wisdom, spiritual enlightenment, and
                cultural heritage.
              </p>
            </div>
          </div>
        </div>

        {/* Tour Package Cards Section */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
            {toursDetails.map((tour, i) => (
              <Link
                key={tour.value}
                href={`/tours/${tour.value}`}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-im-orange/20"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Section */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <img
                    src={
                      tourImages[tour.value as keyof typeof tourImages] ||
                      defaultTourImage
                    }
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/hero/buddha-statues.jpg";
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Duration badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-im-orange text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {tour.duration}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-im-orange/20 transition-opacity duration-300 ${
                      hoveredCard === i ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-im-orange transition-colors duration-300">
                      {tour.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-2">
                      {tour.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights?.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-im-orange/10 group-hover:text-im-orange transition-colors duration-300"
                        >
                          {highlight}
                        </span>
                      ))}
                      {tour.highlights && tour.highlights.length > 3 && (
                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-full">
                          +{tour.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <div className="inline-flex items-center text-im-orange font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span>Explore Journey</span>
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-im-orange/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-pri-orange/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
}