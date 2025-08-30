import React from 'react';
import Locations from "@/components/locations";

const Page = () => {
    return (
        <main className="pt-28 bg-gradient-to-b from-orange-50 via-amber-25 to-yellow-50">
            <div className="max-w-7xl mx-auto flex justify-center items-center flex-col py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-lg md:text-4xl font-cinzel-decorative mb-4 text-black font-semibold max-w-4xl">
                    Heritage Map
                </h2>
                <p id={'desc'} className="text-neutral-700 font-lora text-sm md:text-base max-w-3xl text-center">
                    Explore the Heritage Map to discover significant Buddhist sites, tracing Buddha’s journey from royal origins to enlightenment and compassion across the world.
                </p>
            </div>
            <div id={'heritage-map'} className="w-full">
                <Locations />
            </div>
        </main>
    );
};

export default Page;