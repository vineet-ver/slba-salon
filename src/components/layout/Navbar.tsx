"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${isScrolled
                ? "bg-black-matte/80 backdrop-blur-md border-b border-gold/10 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group">
                    <h1 className="text-2xl md:text-3xl font-serif tracking-[0.2em] text-ivory group-hover:text-gold transition-colors duration-300">
                        A U R A
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-10">
                    {["Services", "Portfolio", "Experience", "Team"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm tracking-widest uppercase text-ivory/80 hover:text-gold transition-colors duration-300 relative group overflow-hidden"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="#booking"
                        className="px-6 py-3 border border-gold text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-black-matte transition-all duration-300 relative overflow-hidden group block"
                    >
                        <span className="relative z-10">Book Appointment</span>
                        <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                    </Link>
                </div>

                {/* Mobile Menu Button  */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-ivory p-2 focus:outline-none z-50 relative"
                >
                    <div className="w-6 h-5 flex flex-col justify-between items-end">
                        <span className={`h-[1px] bg-ivory transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[10px]' : 'w-6'}`}></span>
                        <span className={`h-[1px] bg-ivory transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                        <span className={`h-[1px] bg-ivory transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[10px]' : 'w-5'}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={{
                    open: { x: 0, opacity: 1 },
                    closed: { x: "100%", opacity: 0 }
                }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 bg-black-matte z-40 md:hidden flex flex-col items-center justify-center"
            >
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />

                <nav className="flex flex-col items-center space-y-8 relative z-10">
                    {["Services", "Portfolio", "Experience", "Team"].map((item, i) => (
                        <motion.div
                            key={item}
                            variants={{
                                open: { opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.1 } },
                                closed: { opacity: 0, y: 20 }
                            }}
                        >
                            <Link
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-serif text-ivory hover:text-gold transition-colors duration-300"
                            >
                                {item}
                            </Link>
                        </motion.div>
                    ))}

                    <motion.div
                        variants={{
                            open: { opacity: 1, y: 0, transition: { delay: 0.6 } },
                            closed: { opacity: 0, y: 20 }
                        }}
                        className="mt-8 pt-8 border-t border-gold/20 w-full text-center"
                    >
                        <Link
                            href="#booking"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="inline-block px-8 py-4 bg-gold text-black-matte text-xs tracking-widest uppercase font-medium hover:bg-ivory transition-colors duration-300"
                        >
                            Book Appointment
                        </Link>
                    </motion.div>
                </nav>
            </motion.div>
        </motion.header>
    );
}
