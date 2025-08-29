'use client';
import {useRef, useState} from 'react';
import Link from 'next/link';

import {ajantaelora_data,bodhgaay_data,sarnath_data, kapilvastu_data, rajgir_data, nalanda_data, varanasi_data, lumbini_data, kushinagar_data, sravasti_data, vaishali_data, sankisa_data, sikkim_data, ladakh_data, tabo_data, tawang_data} from '@/content-data/trips-data/tirpDataImporter';
const AllToursPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
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
        tawang_data
    ];

    const formatTourLink = (name: string) => {
        return name.toLowerCase().split(' ').join('-').replace('-tour', '');
    };

    const filteredTours = allTours.filter(tour => {
        return tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (tour.mainDesc && tour.mainDesc.toLowerCase().includes(searchTerm.toLowerCase()));
    });


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative bg-[url('/contact/c1.jpg')] bg-cover bg-center font-bold text-center py-8 sm:py-12 md:py-16 lg:py-20 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Explore All Tours</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal">
                        Discover our curated collection of spiritual journeys and cultural experiences across India and Nepal
                    </p>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <label className={"text-[1.4vw] text-im-orange"} htmlFor={'ts'}>Search Tours</label>
                                <input
                                    id={'ts'}
                                    type="text"
                                    placeholder="Ajanta Ellora..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full p-4 outline-none border border-im-orange focus:ring-2 focus:ring-pri-orange focus:border-transparent transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tours Grid Section */}
            <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 w-full">
                    {filteredTours.map((tour, index) => (
                        <Link 
                            href={`/tours/${formatTourLink(tour.name)}`}
                            key={index} 
                            className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                        >
                            {/* Image Section */}
                            <div className="relative sm:h-[40vh] md:h-[75vh] overflow-hidden rounded-lg">
                                <img 
                                    src={tour.image ? `/${tour.image}` : "/popular-tour/ellora-pic.jpg"} 
                                    alt={tour.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* Dark overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                            </div>
                            {/* Title overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <Link href={`/tours/${formatTourLink(tour.name)}`} className="block">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white text-center uppercase tracking-wide">
                                        {tour.name}
                                    </h3>
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllToursPage;
