"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Interior() {
    const container = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={container} className="relative h-screen bg-black-matte overflow-hidden flex items-center justify-center">
            <motion.div
                style={{ scale, opacity }}
                className="absolute inset-0 w-full h-full"
            >
                <img
                    src="/Ethereal-Glow.jfif"
                    alt="Luxury Salon Interior"
                    className="w-full h-full object-cover grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-black-matte/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-transparent to-black-matte/80" />
            </motion.div>

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 className="text-gold uppercase tracking-[0.4em] text-sm font-medium mb-6">The Sanctuary</h2>
                    <h3 className="text-5xl md:text-7xl font-serif text-ivory mb-8">An Oasis of <span className="italic text-gold">Elegance</span></h3>
                    <p className="text-ivory/80 font-sans font-light max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed tracking-wide">
                        Step into our world. A meticulously designed haven where privacy meets opulence.
                        Enjoy complimentary champagne in our VIP bridal suites while our masters craft your perfect look.
                    </p>
                    <button className="px-8 py-4 border border-gold text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-black-matte transition-all duration-500">
                        Take Virtual Tour
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
