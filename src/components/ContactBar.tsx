'use client';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const ContactBar = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    const bardata = [{
        icn: "/contact/cicon1.png",
        title: "Reach Out Easily", 
        desc: "Find all the necessary contact details to get in touch with us effortlessly."
    }, {
        icn: "/contact/cicon2.png",
        title: "General Info",
        desc: "Find answers to common queries and additional information about our services. "
    }, {
        icn: "/contact/cicon3.png",
        title: "Who We Are",
        desc: "Learn more about our company, our mission and our values"
    }]

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
                    toggleActions: "play none none reverse"
                }
            });
        }
    }, []);

    return (
        <div ref={containerRef} className={"w-[dvw] p-6 py-36 hidden md:flex items-center justify-center gap-6 bg-[url('/tour-package-header-images/2.jpeg')] text-white bg-cover bg-center bg-no-repeat bg-fixed"}>
            {
                bardata && bardata.map((item,i) => (
                    <div key={i} className={"flex flex-col items-center justify-center gap-4 text-center w-[30vw]"}>
                        <div className={"relative w-20 h-20"}>
                            <Image src={item.icn} fill alt={item.title}/>
                        </div>
                        <h3 className={"text-2xl"}>{item.title}</h3>
                        <p className={"text-lg"}>{item.desc}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ContactBar;