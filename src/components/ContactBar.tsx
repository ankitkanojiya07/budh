"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ContactBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const bardata = [
    {
      icn: "/contact/cicon1.png",
      title: "Reach Out Easily",
      desc: "Find all the necessary contact details to get in touch with us effortlessly.",
    },
    {
      icn: "/contact/cicon2.png",
      title: "General Info",
      desc: "Find answers to common queries and additional information about our services. ",
    },
    {
      icn: "/contact/cicon3.png",
      title: "Who We Are",
      desc: "Learn more about our company, our mission and our values",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = containerRef.current?.children;
    if (items) {
      gsap.from(items, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return (
    <div
      className={
        "w-full bg-[url('/hero2/117.jpg')] text-white bg-cover bg-center bg-no-repeat bg-fixed relative"
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className={"px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10"}>
        <div
          ref={containerRef}
          className={
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          }
        >
          {bardata &&
            bardata.map((item, i) => (
              <div
                key={i}
                className={
                  "flex flex-col items-center justify-center gap-4 text-center"
                }
              >
                <div className={"relative w-16 h-16 sm:w-20 sm:h-20"}>
                  <Image src={item.icn} fill alt={item.title} />
                </div>
                <h3 className={"text-xl font-bold md:text-2xl"}>{item.title}</h3>
                <p className={"text-sm -mt-4 md:text-base"}>{item.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
