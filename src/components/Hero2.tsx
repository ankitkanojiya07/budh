import HeroCarousel from "@/components/HeroCarousel";

const Hero2 = () => {
  const CrouselImages = [
    {
      id: "2",
      title: "Uposatha",
      desc: "The four monthly holy days of ancient Buddhism, called uposatha",
      img: "/hero2/111.jpg",
    },
    {
      id: "3",
      title: "Anniversaries",
      desc: "The three major events of the Buddha’s life—his birth, enlightenment, and entrance into final nirvana (parinibbana)—are commemorated in all Buddhist countries",
      img: "/hero2/112.jpg",
    },
    {
      id: "4",
      title: "Vasa",
      desc: "The three-month rainy-season retreat from July to October, are two of the major festivals of the year among Theravada Buddhists",
      img: "/hero2/113.jpg",
    },
    {
      id: "5",
      title: "Theravada",
      desc: "Theravada (Pali: “Way of the Elders”), or Sthaviravada (Sanskrit), emerged as one of the Hinayana (Sanskrit: “Lesser Vehicle”) schools, traditionally numbered at 18, of early Buddhism. ",
      img: "/hero2/114.jpg",
    },
    // {
    //   id: "5",
    //   title: "Silent Contemplation",
    //   desc: "Capturing the essence of deep meditation and mindfulness — a perfect reminder of Lord Buddha’s teachings on self-awareness.",
    //   img: "/hero2/buddh_5.jpeg",
    // },
    // {
    //   id: "8",
    //   title: "Pilgrimage to Peace",
    //   desc: "A timeless scene reflecting Buddhist pilgrimage sites, blending cultural heritage with a journey of inner peace for seekers and travelers.",
    //   img: "/hero2/buddh_8.jpeg",
    // },
  ];

  return (
    <section className={"w-screen h-screen flex items-center"}>
      <HeroCarousel carouselData={CrouselImages} />
    </section>
  );
};

export default Hero2;
