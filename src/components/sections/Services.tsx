"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceCategories = [
    {
        id: "makeup",
        name: "Makeup Studio",
        services: [
            { name: "Party Makeup", price: "Custom Quote", desc: "Sophisticated styling for your special events and parties.", image: "https://images.unsplash.com/photo-1546804784-816ea73ec1fa?q=80&w=600&auto=format&fit=crop" },
            { name: "Reception Makeup", price: "Custom Quote", desc: "Elegant and flawless makeup designed for evening light.", image: "https://images.unsplash.com/photo-1516975080661-464971c50bf3?q=80&w=600&auto=format&fit=crop" },
            { name: "Mehandi & Bridal Stylists", price: "Custom Quote", desc: "Complete bridal and mehndi beauty solutions.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop" },
        ]
    },
    {
        id: "hair",
        name: "Hair & Care",
        services: [
            { name: "Expert Hair Cutting", price: "Consultation Required", desc: "Precision basic cutting and trimming.", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop" },
            { name: "Signature V & U Cuts", price: "Consultation Required", desc: "Specialty v-cuts, u-cuts, and advanced structural styling.", image: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e42?q=80&w=600&auto=format&fit=crop" },
            { name: "Hairstyling Services", price: "Consultation Required", desc: "Classic updos, hollywood waves, and custom occasion styling.", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop" },
        ]
    },
    {
        id: "skin",
        name: "Skin Clinic",
        services: [
            { name: "Waxing & Threading", price: "Consultation Required", desc: "Flawless hair removal, threading, and skin conditioning.", image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=600&auto=format&fit=crop" },
            { name: "Skin & Beauty Therapy", price: "Custom Package", desc: "Advanced skincare routines curated for all skin types.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop" },
            { name: "At-Home Services", price: "Custom Quote", desc: "Experience SLBA's premium salon services from the comfort of your home.", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop" },
        ]
    }
];

export default function Services() {
    const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
    const [hoveredService, setHoveredService] = useState<string | null>(null);

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
                                    className="grid grid-cols-1 gap-6"
                                >
                                    {cat.services.map((service, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            onMouseEnter={() => setHoveredService(service.name)}
                                            onMouseLeave={() => setHoveredService(null)}
                                            className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 border border-gold/10 hover:border-gold/50 transition-all duration-500 bg-black-matte/30 hover:bg-black-matte overflow-hidden cursor-pointer"
                                        >
                                            {/* Contextual Service Image Preview overlay */}
                                            <div
                                                className={`absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none ${hoveredService === service.name ? 'opacity-20' : 'opacity-0'}`}
                                            >
                                                <img src={service.image} alt={service.name} className="w-full h-full object-cover grayscale mix-blend-overlay" />
                                            </div>

                                            {/* Animated Background Reveal */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out z-0"></div>

                                            <div className="relative z-10 flex-1 md:pr-12">
                                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                                                    <h4 className="text-2xl font-serif text-ivory group-hover:text-gold transition-colors duration-300">{service.name}</h4>
                                                    <span className="hidden md:block w-12 h-px bg-gold/30 group-hover:bg-gold/80 transition-colors duration-300"></span>
                                                    <p className="text-xs tracking-[0.2em] uppercase text-gold/70">{service.price}</p>
                                                </div>

                                                {/* Animated Description expansion on hover */}
                                                <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                                                    <p className="text-sm font-light text-ivory/80 leading-relaxed mt-4 md:mt-2">{service.desc}</p>
                                                </div>
                                            </div>

                                            <div className="relative z-10 mt-6 md:mt-0 flex items-center shrink-0">
                                                <button className="flex items-center text-xs uppercase tracking-[0.2em] text-ivory group-hover:text-gold transition-colors duration-300">
                                                    <span className="mr-4 group-hover:tracking-[0.3em] transition-all">Reserve</span>
                                                    <span className="w-8 h-[1px] bg-ivory group-hover:bg-gold transition-all duration-300 group-hover:w-16"></span>
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
