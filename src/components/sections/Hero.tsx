"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    useEffect(() => {
        // Initial GSAP animation for text appearance
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
            ".hero-text-line",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, delay: 0.5 }
        ).fromTo(
            ".hero-subtext",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=1"
        ).fromTo(
            ".hero-cta",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=0.8"
        );
    }, []);

    return (
        <section
            ref={container}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Background with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
            >
                {/* We use a high quality unsplash image for the bridal aesthetic */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1595954421406-8b29ce818c32?q=80&w=2074&auto=format&fit=crop')", // Beautiful bridal/jewelry shot
                    }}
                />
                {/* Luxury Overlays: Gradient and Grain */}
                <div className="absolute inset-0 bg-black-matte/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-transparent to-black-matte/60" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            </motion.div>

            {/* Floating Particles/Dust (Simplified) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gold/30 blur-[1px]"
                        style={{
                            width: Math.random() * 4 + 1 + "px",
                            height: Math.random() * 4 + 1 + "px",
                            left: Math.random() * 100 + "%",
                            top: Math.random() * 100 + "%",
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20"
            >
                <div className="overflow-hidden py-2 mb-2">
                    <span className="hero-text-line block text-gold tracking-[0.3em] text-xs md:text-sm uppercase mb-4 font-medium">Global Luxury Bridal Studio</span>
                </div>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.1] mb-8">
                    <div className="overflow-hidden py-1"><span className="hero-text-line block">LUXURY BRIDAL</span></div>
                    <div className="overflow-hidden py-1"><span className="hero-text-line block italic font-light text-gold text-glow">BEAUTY EXPERIENCE</span></div>
                </h1>

                <p className="hero-subtext text-ivory/80 font-sans font-light text-base md:text-lg max-w-2xl mx-auto mb-12 tracking-wide">
                    Where elegance meets flawless artistry. A highly curated, celebrity-level digital styling experience designed for the modern bride.
                </p>

                <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="px-8 py-4 bg-gold text-black-matte text-xs tracking-[0.2em] uppercase font-medium hover:bg-ivory hover:text-black-matte transition-all duration-500 min-w-[240px]">
                        Book Luxury Appointment
                    </button>
                    <button className="px-8 py-4 border border-gold/50 text-ivory text-xs tracking-[0.2em] uppercase font-medium hover:border-gold hover:text-gold transition-all duration-500 min-w-[240px] relative overflow-hidden group">
                        <span className="relative z-10">Explore Portfolio</span>
                        <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
                    </button>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
            >
                <span className="text-gold/60 text-[10px] uppercase tracking-[0.3em] mb-4">Discover</span>
                <div className="w-[1px] h-16 bg-gold/20 relative overflow-hidden">
                    <motion.div
                        className="w-full h-1/2 bg-gold absolute top-0"
                        animate={{ top: ["-50%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "circInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
