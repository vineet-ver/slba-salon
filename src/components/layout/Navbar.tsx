"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

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

                {/* Mobile Menu Button - simplified for layout setup */}
                <button className="md:hidden text-ivory p-2 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </motion.header>
    );
}
