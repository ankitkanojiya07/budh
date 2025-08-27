import HeroCarousel from "@/components/HeroCarousel";

const Hero2 = () => {
    const CrouselImages= [
        {
            id: "1",
            title: "Image 1",
            desc: "This is a sample description of the Image 1",
            img: "/hero2/p1.jpg",
        },
        {
            id: "2",
            title: "Image 2",
            desc: "This is a sample description of the Image 2",
            img: "/hero2/p2.jpg",
        },
        {
            id: "3",
            title: "Image 3",
            desc: "This is a sample description of the Image 3",
            img: "/hero2/p3.jpg",
        },
        {
            id: "4",
            title: "Image 4",
            desc: "This is a sample description of the Image 4",
            img: "/hero2/p4.jpg",
        },
        {
            id: "5",
            title: "Image 5",
            desc: "This is a sample description of the Image 5",
            img: "/hero2/p5.jpg",
        },
        {
            id: "6",
            title: "Image 6",
            desc: "This is a sample description of the Image 6",
            img: "/hero2/p6.jpg",
        },
        {
            id: "7",
            title: "Image 7",
            desc: "This is a sample description of the Image 7",
            img: "/hero2/p7.jpg",
        },
        {
            id: "8",
            title: "Image 8",
            desc: "This is a sample description of the Image 8",
            img: "/hero2/p8.jpg",
        }
    ];

    return (
        <section className={"w-screen h-screen flex items-center"}>
            <HeroCarousel carouselData={CrouselImages} />
        </section>
    )
}

export default Hero2;
