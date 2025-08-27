"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  circleImg: string;
  img: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeCircles, setActiveCircles] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Create scroll-driven transforms for each card
  const cardTransforms = data.map((_, index) => {
    const startProgress = index / data.length;
    const endProgress = Math.min((index + 1) / data.length, 1);

    return {
      opacity: useTransform(
        scrollYProgress,
        [startProgress - 0.1, startProgress + 0.1],
        [0, 1]
      ),
      x: useTransform(
        scrollYProgress,
        [startProgress - 0.1, startProgress + 0.1],
        [index % 2 === 0 ? 50 : -50, 0]
      ),
      scale: useTransform(
        scrollYProgress,
        [startProgress - 0.1, startProgress, startProgress + 0.2],
        [0.8, 1, 1]
      ),
    };
  });

  // Track which circles should glow based on line progress
  useMotionValueEvent(heightTransform, "change", (latest) => {
    const newActiveCircles = new Set<number>();
    const itemHeight = height / data.length;

    data.forEach((_, index) => {
      const circlePosition = (index + 0.5) * itemHeight;
      if (latest >= circlePosition - 300) {
        newActiveCircles.add(index);
      }
    });

    setActiveCircles(newActiveCircles);
  });

  // Floating lotus petals animation
  // const FloatingLotus = ({ delay = 0 }) => (
  //   <motion.div
  //     className="absolute opacity-20"
  //     initial={{ opacity: 0, y: 100, rotate: 0 }}
  //     animate={{
  //       opacity: [0, 0.3, 0],
  //       y: [-100, -200, -300],
  //       rotate: [0, 180, 360],
  //       x: [0, 50, -30, 0],
  //     }}
  //     transition={{
  //       duration: 12,
  //       repeat: Infinity,
  //       delay,
  //       ease: "easeInOut",
  //     }}
  //     style={{
  //       left: `${Math.random() * 100}%`,
  //       top: `${Math.random() * 100}%`,
  //     }}
  //   >
  //     <div className="w-6 h-6 bg-gradient-to-br from-orange-200 to-amber-300 rounded-full transform rotate-45">
  //       <div className="w-3 h-3 bg-gradient-to-br from-orange-300 to-amber-400 rounded-full absolute top-1 left-1"></div>
  //     </div>
  //   </motion.div>
  // );

  return (
    <div className="w-full bg-gradient-to-b from-orange-50 via-amber-25 to-yellow-50 font-sans md:px-10 relative overflow-hidden" ref={containerRef}>
      {/* Floating lotus petals */}
      {/* {[...Array(8)].map((_, i) => (
        <FloatingLotus key={i} delay={i * 2} />
      ))}
       */}
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-200 via-transparent to-transparent"></div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 relative"
            >
              {/* Desktop Layout - Alternating */}
              <>
                {/* Left side content (for odd indices) */}
                {!isEven && (
                  <div className="grid grid-cols-2 w-full">
                    <div className="z-40 relative">
                      <motion.div
                        className="z-40 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: "-100px", once: true }}
                        transition={{
                          delay: index * 0.15,
                          type: "spring",
                        }}
                      >
                        {/* Decorative lotus element */}
                        <h3 className="text-xl md:text-5xl font-bold bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 bg-clip-text text-transparent mb-4 font-serif">
                          {item.title}
                        </h3>
                      </motion.div>
                      <motion.div
                        className="mt-4 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 relative overflow-hidden"
                        initial={{ opacity: 0, x: -50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                          type: "spring",
                          delay: index * 0.1,
                        }}
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 20px 40px rgba(251, 191, 36, 0.15)",
                        }}
                      >
                        {/* Subtle inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-amber-100/30 rounded-2xl"></div>
                        <div className="relative z-10">{item.content}</div>
                        {/* Corner decoration */}
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-orange-300 opacity-50"></div>
                      </motion.div>
                    </div>
                    <motion.div
                      className="w-full h-full"
                      initial={{ opacity: 0, x: 30 }}
                      style={{
                        marginLeft: "80px",
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ margin: "-100px", once: true }}
                      transition={{
                        type: "spring",
                        delay: index * 0.15,
                      }}
                    >
                      <div className="size-full">
                        <Image
                          src={item.img}
                          alt={item.title}
                          // layout="responsive"
                          width={500}
                          height={300}
                          className="rounded-2xl size-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Center line and circle - Enhanced Buddhist Style */}
                <div
                  className={
                    isEven
                      ? "sticky left-1/2 z-50 size-16  -translate-x-1/2"
                      : "sticky right-1/2 z-50 size-16  translate-x-1/2"
                  }
                >
                  <motion.div
                    className="relative h-16 w-16 flex items-center justify-center"
                    animate={{
                      scale: index === 0 ? 1 : activeCircles.has(index) ? 1 : 0,
                    }}
                    initial={{ scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    {/* Outer ring - Dharma wheel inspired */}
                    <motion.div
                      className={`absolute inset-0 rounded-full border-4 transition-all duration-500 ${
                        activeCircles.has(index)
                          ? "border-gradient-to-r from-orange-400 via-amber-500 to-orange-600 shadow-[0_0_30px_rgba(251,191,36,0.6)]"
                          : "border-orange-200"
                      }`}
                      animate={{
                        borderColor: activeCircles.has(index)
                          ? ["#fb923c", "#f59e0b", "#ea580c", "#fb923c"]
                          : "#fed7aa",
                        scale: activeCircles.has(index) ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 3,
                        repeat: activeCircles.has(index) ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Inner circle - Lotus inspired */}
                    <div className="size-12">
                      <Image
                        src={item.circleImg}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="rounded-full object-cover shadow-lg size-full"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Right side content (for even indices) */}
                {isEven && (
                  <div className="grid grid-cols-2 w-full">
                    <motion.div
                      className="w-full h-full"
                      initial={{ opacity: 0, x: -30 }}
                      style={{
                        marginLeft: "-80px",
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ margin: "-100px", once: true }}
                      transition={{
                        type: "spring",
                        delay: index * 0.15,
                      }}
                    >
                      <div className="size-full">
                        <Image
                          src={item.img}
                          alt={item.title}
                          // layout="responsive"
                          width={500}
                          height={300}
                          className="rounded-2xl size-full object-cover"
                        />
                      </div>
                    </motion.div>
                    <div className="flex-1 w-full pl-4">
                      <motion.div
                        className="z-40 relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: "-100px", once: true }}
                        transition={{
                          // duration: 0.8,
                          type: "spring",
                          delay: index * 0.15,
                          // ease: "easeOut",
                        }}
                      >
                        <h3 className="text-xl md:text-5xl font-bold bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 bg-clip-text text-transparent mb-4 font-serif">
                          {item.title}
                        </h3>
                      </motion.div>
                      <motion.div
                        className="mt-4 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 relative overflow-hidden hover:shadow-[0_20px_40px_rgba(251,191,36,0.15)] hover:scale-105 transition-[scale,box-shadow]"
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                          type: "spring",
                          delay: index * 0.1,
                        }}
                      >
                        {/* Subtle inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-orange-100/30 to-amber-100/30 rounded-2xl"></div>
                        <div className="relative z-10 right-card-buddha-life">
                          {item.content}
                        </div>
                        {/* Corner decoration */}
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-orange-300 opacity-50"></div>
                      </motion.div>
                    </div>
                  </div>
                )}
              </>

              {/* Mobile Layout - Enhanced */}
              <div className="flex md:hidden w-full">
                <div className="sticky flex items-center top-40 z-40 self-start">
                  <motion.div
                    className="relative h-12 w-12 flex items-center justify-center mr-4"
                    animate={{
                      rotate: activeCircles.has(index) ? [0, 360] : 0,
                    }}
                    transition={{
                      duration: activeCircles.has(index) ? 15 : 0,
                      repeat: activeCircles.has(index) ? Infinity : 0,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      className={`h-12 w-12 rounded-full bg-gradient-to-br from-white to-orange-50 flex items-center justify-center transition-all duration-500 ${
                        activeCircles.has(index)
                          ? "shadow-[0_0_20px_rgba(251,191,36,0.8)]"
                          : "shadow-lg"
                      }`}
                      animate={{
                        scale: activeCircles.has(index) ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: activeCircles.has(index) ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.div
                        className={`h-6 w-6 rounded-full border-2 transition-all duration-500 ${
                          activeCircles.has(index)
                            ? "bg-gradient-to-br from-orange-400 to-amber-500 border-orange-300"
                            : "bg-gradient-to-br from-orange-200 to-amber-300 border-orange-300"
                        }`}
                      />
                    </motion.div>
                  </motion.div>
                </div>

                <div className="flex-1">
                  <motion.div
                    className="sticky top-40 z-40"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent mb-4 font-serif">
                      {item.title}
                    </h3>
                  </motion.div>
                  <motion.div
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-orange-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    {item.content}
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Enhanced Timeline Line with Buddhist colors */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 overflow-hidden w-1 bg-gradient-to-b from-transparent from-[0%] via-orange-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-1 bg-gradient-to-t from-orange-500 via-amber-500 to-orange-400 from-[0%] via-[50%] rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"
            animate={{
              boxShadow: [
                "0 0 10px rgba(251,191,36,0.5)",
                "0 0 20px rgba(251,191,36,0.8)",
                "0 0 10px rgba(251,191,36,0.5)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "anticipate"
            }}
          />
        </div>
      </div>
    </div>
  );
};