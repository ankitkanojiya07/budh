import HeroCarousel from "@/components/HeroCarousel";

const Hero2 = () => {
  const CrouselImages = [
    {
      id: "2",
      title: "Meditation under the Bodhi Tree",
      desc: "A serene view symbolizing the place where Lord Buddha attained enlightenment, inspiring peace and inner reflection for travelers.",
      img: "/hero2/1.jpeg",
    },
    {
      id: "2",
      title: "Meditation under the Bodhi Tree",
      desc: "A serene view symbolizing the place where Lord Buddha attained enlightenment, inspiring peace and inner reflection for travelers.",
      img: "/hero2/buddh_2.jpeg",
    },
    {
      id: "3",
      title: "Path of Tranquility",
      desc: "Depicting the calm spiritual pathways followed by Buddhist monks, inviting visitors to walk the same steps of wisdom and mindfulness.",
      img: "/hero2/buddh_3.jpeg",
    },
    {
      id: "4",
      title: "Sacred Stupa Journey",
      desc: "A sacred stupa representing Buddhist faith, devotion, and the spiritual pilgrimage that draws travelers from across the world.",
      img: "/hero2/buddh_4.jpeg",
    },
    {
      id: "5",
      title: "Silent Contemplation",
      desc: "Capturing the essence of deep meditation and mindfulness — a perfect reminder of Lord Buddha’s teachings on self-awareness.",
      img: "/hero2/buddh_5.jpeg",
    },
    {
      id: "8",
      title: "Pilgrimage to Peace",
      desc: "A timeless scene reflecting Buddhist pilgrimage sites, blending cultural heritage with a journey of inner peace for seekers and travelers.",
      img: "/hero2/buddh_8.jpeg",
    },
  ];

  return (
    <section className={"w-screen h-screen flex items-center"}>
      <HeroCarousel carouselData={CrouselImages} />
    </section>
  );
};

export default Hero2;
