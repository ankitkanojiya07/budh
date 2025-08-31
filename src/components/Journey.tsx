import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const sectionRenderer = (data: any) => {
    return (
        <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col gap-6 h-full">
            {/* Image Section */}
            <div className="relative h-48 sm:h-56 lg:h-64 w-full flex-shrink-0">
                <Image
                    src={data.imgSrc}
                    alt={data.mainHeadingL1}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-4 flex-grow text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold  bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 bg-clip-text text-transparent font-serif mb-2 leading-tight">
                    {data.mainHeadingL1} {data.mainHeadingL2}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed flex-grow">
                    {data.desc}
                </p>
                
                <button className="w-full bg-im-orange text-white font-medium py-2 px-4 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 cursor-pointer mt-auto">
                    {data.btnText}
                </button>
            </div>
        </div>
    );
}

const Journey = () => {
    const data = {
        journeyData: {
           smallHeading: "Journey to Inner Peace",
            mainHeadingL1: "Discover Serenity",
            mainHeadingL2: "& Wisdom",
            desc: "Join us as we explore the timeless teachings of the Buddha, cultivating mindfulness, compassion, and inner peace. Through meditation, study, and community, discover the beauty of living in harmony with yourself and the world around you.",
            btnText: "Begin Your Journey",
            imgSrc: "/hero2/p8.jpg",
        },
        discoverData: {
            smallHeading: "Discover Peace, Purpose, and Community",
            mainHeadingL1: "Journey of",
            mainHeadingL2: "Mindfulness",
            desc: "Spirituality not just helps you rediscover yourself but also unearth the nuances of daily life. While people choose divergent paths to awaken their higher self, traveling acts one of the best catalysts.",
            btnText: "Start Now",
            imgSrc: "/hero2/p5.jpg",
        }
    };

    return (
        <div className={"bg-dim-pink w-full font-cormorant p-4 py-24"}>
            <div className="w-full px-4 sm:px-6 overflow-hidden">
                <div className="mx-auto max-w-7xl mb-8 px-2 sm:px-4 lg:px-6">
                    <h2 className="text-3xl text-left sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 bg-clip-text text-transparent font-serif">
                        Discover Your Path
                    </h2>
                    <p className="">
                        Embark on a journey of self-discovery and mindfulness.
                    </p>
                </div>
            </div>
            <section className={"w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 justify-items-center max-w-6xl mx-auto"}>
                {/* Journey Section */}
                {sectionRenderer(data.journeyData)}
                {/* Discover Section */}
                {sectionRenderer(data.discoverData)}
            </section>
        </div>
    );
};

export default Journey;