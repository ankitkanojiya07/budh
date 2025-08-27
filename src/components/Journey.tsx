import React from 'react';

const sectionRenderer = (data: any, isImageLeft: boolean) => {
    return (
        <div className={`min-w-full w-full flex flex-col lg:flex-row ${isImageLeft ? 'lg:flex-row-reverse' : ''} w-full`}>
            {/* Left Section - Content */}
            <div id={"j-left"} className={`bg-dim-pink w-full lg:w-1/2 p-8 flex flex-col justify-center gap-4 order-1 lg:order-1`}>
                <p className={"text-base md:text-lg lg:text-xl"}>{data.smallHeading}</p>
                <h2 className={"bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 bg-clip-text text-transparent mb-4 font-serif text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold"}>{data.mainHeadingL1} <br /> {data.mainHeadingL2}</h2>
                <div>
                    <p className={"text-justify mb-4 md:mb-6 text-medium w-full lg:w-[90%] lg:pr-6"}>{data.desc}</p>
                    <button className={"px-4 md:px-6 py-2 text-base text-white bg-im-orange cursor-pointer hover:bg-im-orange/90 transition-colors duration-300"}>{data.btnText}</button>
                </div>
            </div>
            {/* Right Section - image */}
            <div id={"j-right"} className={"w-full lg:w-1/2 order-2 lg:order-2"}>
                <div className="w-full aspect-[16/9]">
                    <img src={data.imgSrc} className={"w-full h-full object-cover"} alt={data.smallHeading}/>
                </div>
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
        <div className={"w-full min-h-screen font-cormorant"}>
            {/* Journey Section */}
            {sectionRenderer(data.journeyData,false)}
            {/* Discover Section */}
            {sectionRenderer(data.discoverData,true)}
        </div>
    );
};

export default Journey;