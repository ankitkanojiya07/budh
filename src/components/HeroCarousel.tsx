"use client";
import { useEffect, useRef, useState } from "react";
import { useGSAP, gsap } from "@/utils/gsapUtil";

/* Overlay component to add a semi-transparent layer over images */
const Overlay = ({
  opacity = 50,
  className = "",
}: {
  opacity?: number;
  className?: string;
}) => (
  <div
    className={`absolute inset-0 bg-black z-10 ${className}`}
    style={{ opacity: opacity / 100 }}
    aria-hidden="true"
  />
);

interface IHeroCarouselProps {
  id: string;
  img: string;
  title: string;
  desc: string;
}

const HeroCarousel = ({
  carouselData,
}: {
  carouselData: IHeroCarouselProps[];
}) => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [clickedEventId, setClickedEventId] = useState<String>("4");
  const [animateDesc, setAnimateDesc] = useState<String>("4");
  const descriptionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const pictureChangeTime = 4;

  useEffect(() => {
    descriptionRefs.current = descriptionRefs.current.slice(
      0,
      carouselData.length
    );
  }, [carouselData]);

  /*    useGSAP(() => {
        gsap.from(imageRefs.current, {
            opacity: 0,
            y: 100,
            duration: 2,
            ease: "power2.out",
            stagger: 0.2,
        });
    }, []);*/

  /*    useGSAP(() => {
        descriptionRefs.current.forEach((ref, index) => {
            if (ref && carouselData[index].id === clickedEventId) {
                gsap.from(ref,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out"
                    }
                );
            }
        });
    }, [clickedEventId]);*/

  const handleEventClick = (id: String) => {
    setClickedEventId(id);
    setAnimateDesc(id);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextImageIndex =
        carouselData.findIndex((event) => event.id === clickedEventId) + 1;
      const nextId =
        nextImageIndex >= carouselData.length
          ? carouselData[0].id
          : carouselData[nextImageIndex].id;
      handleEventClick(nextId);
    }, pictureChangeTime * 1000);

    return () => clearInterval(timer);
  }, [clickedEventId, carouselData]);

  return (
    <div className="w-full h-full flex">
      <div
        id="slider-panel"
        ref={panelRef}
        className="flex overflow-hidden no-scrollbar"
      >
        {carouselData.map((carousel, index) => (
          <div
            key={carousel.id}
            onClick={() => handleEventClick(carousel.id)}
            className={`overflow-hidden event-block relative flex-shrink-0 ${
              clickedEventId === carousel.id
                ? "w-screen h-[100vh]"
                : "w-0 h-[100vh]"
            } flex items-center justify-center transition-all duration-500 ease-in-out`}
          >
            <img
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              src={carousel.img}
              alt={carousel.title}
              className="object-cover object-center w-full h-full relative z-0"
            />
            <Overlay opacity={30} className="bg-blend-overlay" />
            <div
              ref={(el) => {
                descriptionRefs.current[index] = el;
              }}
              className={
                clickedEventId === carousel.id
                  ? "absolute transition-all delay-100 text-center z-20"
                  : "hidden"
              }
            >
              <h3
                className={"text-6xl font-bold"}
                style={{
                  color: "#c8693a",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                {carousel.title}
              </h3>
              <p
                style={{
                  color: "#c8693a",
                  //   WebkitTextStroke: "0.1px white",
                  fontWeight: "bolder",
                }}
              >
                {carousel.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
