"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function FloatingMobileBooking() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero section (approx 500px)
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Only render on client side to avoid hydration mismatch
    if (typeof window === 'undefined') return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:hidden shadow-[0_10px_30px_rgba(212,175,55,0.15)]"
                >
                    <Link href="/#booking" className="flex items-center justify-between bg-black-matte/90 backdrop-blur-md border border-gold/30 rounded-full p-2 pl-6 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors"></div>
                        <div className="flex items-center gap-3 relative z-10">
                            <Calendar size={18} className="text-gold" />
                            <span className="text-xs font-medium uppercase tracking-widest text-ivory">Reserve Appointment</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center relative z-10">
                            <ChevronRight size={18} className="text-black-matte" />
                        </div>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
