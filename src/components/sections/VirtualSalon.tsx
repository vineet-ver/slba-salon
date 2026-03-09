"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass } from "lucide-react";

export default function VirtualSalon() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    // Simple horizontal parallax to simulate looking around
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    return (
        <section ref={containerRef} className="py-32 bg-black-matte relative overflow-hidden" id="virtual-tour">
            <div className="container mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
                <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6 flex items-center justify-center gap-3">
                    <Compass size={16} /> 360° Experience
                </h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory leading-tight mb-6">
                    Step inside the <span className="italic text-gold">Sanctuary</span>
                </h3>
                <p className="text-ivory/60 font-sans font-light max-w-2xl mx-auto text-sm md:text-base">
                    An immersive glimpse into our flagship bridal atelier. Designed for ultimate privacy and profound relaxation.
                </p>
            </div>

            <motion.div
                style={{ scale, opacity }}
                className="w-full h-[60vh] md:h-[80vh] relative group cursor-ew-resize overflow-hidden"
            >
                {/* 
                  Using an ultra-wide panoramic image placeholder.
                  In a real advanced setup, this would be a WebGL sphere or Pannellum integration.
                  For this MVP, a very wide responsive parallax image creates the illusion. 
                */}
                <motion.div style={{ x }} className="absolute inset-0 w-[120%] h-full">
                    <img
                        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2500&auto=format&fit=crop"
                        alt="Virtual Salon Interior"
                        className="w-full h-full object-cover grayscale-[20%]"
                    />
                </motion.div>

                {/* Overlays to make it feel like an interactive module */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-transparent to-black-matte/50 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black-matte/80 backdrop-blur-md px-6 py-3 border border-gold/20 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                    <span className="text-ivory uppercase tracking-[0.2em] text-xs">Drag to explore securely</span>
                </div>
            </motion.div>
        </section>
    );
}
