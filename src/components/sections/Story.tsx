"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Story() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    // Deep parallax layers - enhanced for cinematic depth
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
    const imageY1 = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
    const imageY2 = useTransform(scrollYProgress, [0, 1], ["-20%", "40%"]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    useEffect(() => {
        if (!container.current) return;
        const lines = container.current.querySelectorAll('.story-line');

        gsap.fromTo(
            lines,
            { y: 50, opacity: 0, rotateX: -20 },
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 1.5,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 60%",
                    end: "center center",
                    scrub: false,
                    toggleActions: "play none none reverse",
                }
            }
        );
    }, []);

    return (
        <section
            ref={container}
            className="relative h-[150vh] md:h-[200vh] bg-black-matte overflow-hidden"
            id="story"
        >
            {/* Massive Background Text Parallax */}
            <motion.div
                style={{ y: bgY }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[20vw] font-serif font-bold text-ivory/[0.015] whitespace-nowrap pointer-events-none z-0"
            >
                A U R A
            </motion.div>

            {/* Floating Editorial Imagery */}
            <motion.div
                style={{ y: imageY1, scale: imageScale, opacity: opacityFade }}
                className="absolute top-[10%] left-[5%] md:left-[10%] w-[40vw] md:w-[25vw] aspect-[3/4] z-0 overflow-hidden opacity-40 mix-blend-lighten"
            >
                <img
                    src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000&auto=format&fit=crop"
                    alt="Editorial Detail"
                    className="w-full h-full object-cover grayscale brightness-75 contrast-125"
                />
            </motion.div>

            <motion.div
                style={{ y: imageY2, opacity: opacityFade }}
                className="absolute bottom-[20%] right-[5%] md:right-[15%] w-[35vw] md:w-[20vw] aspect-square z-0 overflow-hidden opacity-30 mix-blend-lighten"
            >
                <img
                    src="https://images.unsplash.com/photo-1516975080661-464971c50bf3?q=80&w=1000&auto=format&fit=crop"
                    alt="Editorial Texture"
                    className="w-full h-full object-cover grayscale brightness-75 sepia-[.2]"
                />
            </motion.div>

            {/* Content Layer */}
            <motion.div
                style={{ y: textY }}
                className="container mx-auto px-6 h-full relative z-10 flex flex-col items-center justify-center text-center"
            >
                <div className="w-px h-32 bg-gold mb-16 origin-top animate-pulse"></div>

                <h2 className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-medium mb-10 opacity-80">Prologue</h2>

                <div className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-tight text-ivory max-w-5xl mx-auto">
                    <div className="overflow-hidden py-1"><p className="story-line">True luxury is not</p></div>
                    <div className="overflow-hidden py-1"><p className="story-line">just seen, but <span className="italic text-gold font-light font-sans tracking-tight">experienced</span></p></div>
                    <div className="overflow-hidden py-1"><p className="story-line">in every breathless detail.</p></div>
                </div>

                <div className="mt-20 overflow-hidden relative">
                    {/* Glowing blur behind text */}
                    <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full scale-150 pointer-events-none"></div>

                    <p className="story-line relative z-10 text-ivory/60 font-sans font-light max-w-2xl mx-auto text-sm md:text-base leading-relaxed tracking-widest drop-shadow-lg">
                        Step into an editorial world of pristine aesthetics. Our atelier transcends standard beauty, delivering a celebrity-level digital styling journey designed for the modern muse.
                    </p>
                </div>

                <div className="w-32 h-px bg-gold mt-24 opacity-30"></div>
            </motion.div>
        </section>
    );
}
