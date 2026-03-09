"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceCategories = [
    {
        id: "makeup",
        name: "Makeup Studio",
        services: [
            { name: "Signature Bridal", price: "Starting at ₹25,000", desc: "Flawless HD/Airbrush makeup with luxury international products." },
            { name: "Engagement & Reception", price: "Starting at ₹15,000", desc: "Elegant styling tailored to your pre-wedding events." },
            { name: "Party Glamour", price: "Starting at ₹8,000", desc: "Sophisticated editorial looks for special occasions." },
        ]
    },
    {
        id: "hair",
        name: "Hair Studio",
        services: [
            { name: "Luxury Styling & Updos", price: "Starting at ₹5,000", desc: "Intricate structural styling and classic Hollywood waves." },
            { name: "Advanced Color Mapping", price: "Starting at ₹8,000", desc: "Balayage, babylights, and bespoke color formulation." },
            { name: "Caviar Hair Spa", price: "Starting at ₹4,000", desc: "Deep restorative treatment utilizing premium marine extracts." },
        ]
    },
    {
        id: "skin",
        name: "Skin Academy",
        services: [
            { name: "Glass Skin Hydrafacial", price: "Starting at ₹12,000", desc: "Medical-grade resurfacing for an illuminated, poreless finish." },
            { name: "24K Gold Therapy", price: "Starting at ₹15,000", desc: "Anti-aging infusion utilizing pure 24K gold nano-particles." },
            { name: "Bridal Skin Prep Program", price: "Custom Package", desc: "A 3-month comprehensive dermatology and aesthetic journey." },
        ]
    }
];

export default function Services() {
    const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

    return (
        <section className="py-24 bg-black-matte border-t border-gold/10 relative overflow-hidden" id="services">
            {/* Background elements */}
            <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold/5 opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-4">The Atelier</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-ivory">Curated <span className="italic text-gold">Experiences</span></h3>
                </div>

                <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar space-x-6 md:space-x-16 mb-12 border-b border-gold/20 pb-1">
                    {serviceCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`pb-4 text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 relative whitespace-nowrap shrink-0 ${activeCategory === cat.id ? "text-gold font-medium" : "text-ivory/50 hover:text-ivory"
                                }`}
                        >
                            {cat.name}
                            {activeCategory === cat.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {serviceCategories.map((cat) => (
                            cat.id === activeCategory && (
                                <motion.div
                                    key={cat.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                                >
                                    {cat.services.map((service, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className="group relative p-8 border border-gold/10 hover:border-gold/50 transition-colors duration-500 bg-black-matte/50 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

                                            <div className="relative z-10">
                                                <h4 className="text-xl font-serif text-ivory mb-2 group-hover:text-gold transition-colors duration-300">{service.name}</h4>
                                                <p className="text-xs uppercase tracking-wider text-gold/70 mb-4">{service.price}</p>
                                                <p className="text-sm font-light text-ivory/60 leading-relaxed mb-8">{service.desc}</p>

                                                <button className="flex items-center text-xs uppercase tracking-[0.2em] text-ivory group-hover:text-gold transition-colors duration-300">
                                                    <span className="mr-4">Reserve</span>
                                                    <span className="w-8 h-[1px] bg-ivory group-hover:bg-gold transition-all duration-300 group-hover:w-12"></span>
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
