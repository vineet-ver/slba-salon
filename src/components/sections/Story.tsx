"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Make sure to register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Story() {
    const container = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!container.current || !textRef.current) return;

        // Split text into words manually or use simple line masking for luxury effect
        const lines = textRef.current.querySelectorAll('.story-line');

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
                    start: "top 70%",
                    end: "center center",
                    scrub: false,
                    toggleActions: "play none none reverse",
                }
            }
        );

        gsap.fromTo(
            ".story-accent",
            { scaleX: 0, transformOrigin: "left center" },
            {
                scaleX: 1,
                duration: 1.5,
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section
            ref={container}
            className="py-32 md:py-48 px-6 bg-black-matte relative overflow-hidden"
        >
            {/* Decorative large text behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-bold text-ivory/[0.02] whitespace-nowrap pointer-events-none z-0">
                ARTISTRY
            </div>

            <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center text-center">
                <div className="story-accent w-px h-24 bg-gold mb-12"></div>

                <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-8">The Philosophy</h2>

                <div ref={textRef} className="font-serif text-3xl md:text-5xl leading-tight md:leading-snug text-ivory">
                    <div className="overflow-hidden py-1"><p className="story-line">We believe your beauty should be</p></div>
                    <div className="overflow-hidden py-1"><p className="story-line">as <span className="italic text-gold">captivating</span> and <span className="italic text-gold">unique</span></p></div>
                    <div className="overflow-hidden py-1"><p className="story-line">as your love story.</p></div>
                </div>

                <div className="mt-16 overflow-hidden">
                    <p className="story-line text-ivory/60 font-sans font-light max-w-2xl mx-auto text-sm md:text-base leading-relaxed tracking-wide">
                        Our atelier brings global luxury standards to your bridal experience. With over a decade of celebrity styling and editorial excellence, we craft flawless, camera-ready perfection that naturally enhances your deepest elegance.
                    </p>
                </div>

                <div className="story-accent w-24 h-px bg-gold mt-16"></div>
            </div>
        </section>
    );
}
