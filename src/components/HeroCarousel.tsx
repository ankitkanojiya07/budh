"use client";
import { useEffect, useRef, useState } from "react";
import { useGSAP, gsap } from "@/utils/gsapUtil";
import { useIsMobile } from "@/hook/use-is-moble";

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
  const isMobile = useIsMobile();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

  // Touch handlers for mobile swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe || isRightSwipe) {
      const currentIndex = carouselData.findIndex((event) => event.id === clickedEventId);
      let nextIndex;
      
      if (isLeftSwipe) {
        nextIndex = currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
      } else {
        nextIndex = currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1;
      }
      
      handleEventClick(carouselData[nextIndex].id);
    }
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
        className="flex overflow-hidden no-scrollbar relative w-full h-full"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {carouselData.map((carousel, index) => (
          <div
            key={carousel.id}
            onClick={() => handleEventClick(carousel.id)}
            className={`overflow-hidden event-block relative flex-shrink-0 ${
              clickedEventId === carousel.id
                ? "w-full h-full"
                : "w-0 h-full"
            } flex items-center justify-center transition-all duration-500 ease-in-out`}
            style={{
              minWidth: clickedEventId === carousel.id ? '100%' : '0%',
              maxWidth: clickedEventId === carousel.id ? '100%' : '0%',
              flex: clickedEventId === carousel.id ? '1 1 100%' : '0 0 0%'
            }}
          >
            <img
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              src={carousel.img}
              alt={carousel.title}
              className="object-cover object-center w-full h-full relative z-0"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <Overlay opacity={30} className="bg-blend-overlay" />
            <div
              ref={(el) => {
                descriptionRefs.current[index] = el;
              }}
              className={
                clickedEventId === carousel.id
                  ? "absolute transition-all delay-100 text-center z-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl mx-auto"
                  : "hidden"
              }
            >
              <h3
                className={"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4"}
                style={{
                  color: "#c8693a",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                {carousel.title}
              </h3>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
                style={{
                  color: "#c8693a",
                  fontWeight: "bold",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                }}
              >
                {carousel.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation indicators for mobile */}
      {isMobile && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {carouselData.map((carousel) => (
            <button
              key={carousel.id}
              onClick={() => handleEventClick(carousel.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                clickedEventId === carousel.id
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${carousel.title}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
