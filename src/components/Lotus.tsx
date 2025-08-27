"use client";
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Lotus = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const petalsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {

    }, []);

    const leftPetals = [
        { src: "/lotus/lotus-petal-light.png", className: "scale-100" },
        { src: "/lotus/lotus-petal-dark.png", className: "scale-100" },
    ];

    const rightPetals = [
        { src: "/lotus/lotus-petal-darkest.png", className: "scale-100" },
        { src: "/lotus/lotus-petal-light.png", className: "scale-100" },
    ];

    return (
        <div>This is lotus</div>
    );
};

export default Lotus;