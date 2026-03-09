"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Victoria Beckham",
        event: "Met Gala 2025",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        text: "The sheer professionalism and artistry at Aura is unmatched. They understood exactly what I needed for the red carpet. Completely flawless execution that lasted beautifully through the entire night."
    },
    {
        name: "Sophia Kensington",
        event: "Destination Wedding in Lake Como",
        image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=200&auto=format&fit=crop",
        text: "I flew the Aura team to Italy for my wedding, and it was the best decision I made. The level of luxury, calm energy, and absolute perfection in their styling made me feel like royalty."
    },
    {
        name: "Amara Singh",
        event: "Royal Heritage Wedding",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=200&auto=format&fit=crop",
        text: "Incorporating traditional heavy jewelry with a modern luxury makeup look was challenging, but Aura delivered beyond expectations. The skin looked like glass, and the eye work was simply mesmerizing."
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [autoplay]);

    const next = () => {
        setAutoplay(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setAutoplay(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-[#0a0a0a] border-t border-gold/10 relative overflow-hidden" id="testimonials">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content & Controls */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center min-h-[400px]">
                        <div className="flex space-x-1 text-gold mb-10">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill="currentColor" />
                            ))}
                        </div>

                        <div className="relative">
                            <Quote size={80} className="absolute -top-10 -left-6 text-gold/10 z-0" />
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative z-10"
                                >
                                    <p className="text-2xl md:text-4xl font-serif text-ivory leading-tight mb-8">
                                        "{testimonials[currentIndex].text}"
                                    </p>
                                    <div className="pb-8 border-b border-gold/10">
                                        <h4 className="text-gold font-serif text-xl tracking-wide uppercase mb-1">{testimonials[currentIndex].name}</h4>
                                        <p className="text-[10px] text-ivory/50 uppercase tracking-widest">{testimonials[currentIndex].event}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Custom Navigation */}
                        <div className="flex items-center space-x-6 mt-10">
                            <button onClick={prev} className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black-matte text-gold transition-colors duration-500 group">
                                <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <span className="text-xs font-mono text-ivory/40">
                                0{currentIndex + 1} <span className="mx-2 text-gold/30">/</span> 0{testimonials.length}
                            </span>
                            <button onClick={next} className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black-matte text-gold transition-colors duration-500 group">
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Editorial Image */}
                    <div className="order-1 lg:order-2 relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-sm group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        {/* Overlay Gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black-matte/80 via-transparent to-transparent"></div>
                    </div>

                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-gold/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
        </section>
    );
}
