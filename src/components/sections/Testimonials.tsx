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
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
        text: "I flew the Aura team to Italy for my wedding, and it was the best decision I made. The level of luxury, calm energy, and absolute perfection in their styling made me feel like royalty."
    },
    {
        name: "Amara Singh",
        event: "Royal Heritage Wedding",
        image: "https://images.unsplash.com/photo-1620052733979-5e26cb3b94fc?q=80&w=200&auto=format&fit=crop",
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
        <section className="py-24 bg-ivory text-black-matte border-t border-black-matte/10 relative overflow-hidden" id="testimonials">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">Client Diaries</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-black-matte">Words of <span className="italic text-gold">Adoration</span></h3>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold/10 z-0">
                        <Quote size={120} />
                    </div>

                    <div className="min-h-[300px] flex items-center justify-center relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="text-center flex flex-col items-center"
                            >
                                <div className="flex space-x-1 text-gold mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-xl md:text-3xl font-serif leading-relaxed mb-10 text-black-matte/90">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                <div className="flex items-center space-x-4">
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        className="w-12 h-12 rounded-full object-cover border border-gold/30"
                                    />
                                    <div className="text-left">
                                        <h4 className="text-sm font-medium tracking-wide">{testimonials[currentIndex].name}</h4>
                                        <p className="text-xs text-black-matte/50 uppercase tracking-widest">{testimonials[currentIndex].event}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center items-center space-x-8 mt-12">
                        <button onClick={prev} className="w-10 h-10 rounded-full border border-black-matte/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300">
                            <ChevronLeft size={20} strokeWidth={1} />
                        </button>
                        <div className="flex space-x-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setAutoplay(false); setCurrentIndex(i); }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-gold w-6' : 'bg-black-matte/20'}`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                        <button onClick={next} className="w-10 h-10 rounded-full border border-black-matte/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300">
                            <ChevronRight size={20} strokeWidth={1} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
