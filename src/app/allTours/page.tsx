"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { IconSearch, IconMapPin, IconCalendar } from "@tabler/icons-react";

import {
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
  tawang_data,
} from "@/content-data/trips-data/tirpDataImporter";

const AllToursPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const allTours = [
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
    tawang_data,
  ];

  const formatTourLink = (name: string) => {
    return name.toLowerCase().split(" ").join("-").replace("-tour", "");
  };

  const filteredTours = allTours.filter((tour) => {
    return (
      tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (tour.mainDesc &&
        tour.mainDesc.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-dim-pink via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[url('/contact/c1.jpg')] bg-cover bg-center bg-no-repeat h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-pri-orange"></div>
            <IconMapPin className="w-6 h-6 text-pri-orange" />
            <div className="w-12 h-0.5 bg-pri-orange"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold mb-6 leading-tight">
            Explore All Journeys
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto font-lora leading-relaxed opacity-90">
            Discover our curated collection of spiritual journeys and cultural
            experiences across India and Nepal
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-pri-orange">
            <IconCalendar className="w-5 h-5" />
            <span className="text-sm font-medium">Available Year Round</span>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-pri-brown mb-4">
              Find Your Perfect Journey
            </h2>
            <p className="text-gray-600 font-lora">
              Search through our collection of spiritual and cultural experiences
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <IconSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search destinations like Ajanta Ellora, Bodh Gaya, Sarnath..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pri-orange focus:border-pri-orange transition-all duration-300 bg-white shadow-sm hover:shadow-md"
            />
          </div>
          
          {searchTerm && (
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600">
                Showing {filteredTours.length} of {allTours.length} tours
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Tours Grid Section */}
      <div
        ref={containerRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        {filteredTours.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <IconSearch className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-cinzel font-bold text-gray-600 mb-2">
                No tours found
              </h3>
              <p className="text-gray-500 font-lora">
                Try adjusting your search terms or browse all available tours
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTours.map((tour, index) => (
              <Link
                href={`/tours/${formatTourLink(tour.name)}`}
                key={index}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-pri-orange focus:ring-offset-2"
              >
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-2xl">
                  <img
                    src={
                      tour.image
                        ? `/${tour.image}`
                        : "/popular-tour/ellora-pic.jpg"
                    }
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Tour badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-pri-orange text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Spiritual
                    </span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-cinzel font-bold text-pri-brown mb-3 group-hover:text-pri-orange transition-colors duration-300 line-clamp-2">
                    {tour.name}
                  </h3>
                  
                  {tour.mainDesc && (
                    <p className="text-gray-600 font-lora text-sm line-clamp-3 mb-4 leading-relaxed">
                      {tour.mainDesc}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-pri-orange">
                      <IconMapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">Explore</span>
                    </div>
                    <div className="text-pri-orange group-hover:translate-x-1 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllToursPage;
