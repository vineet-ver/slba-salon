"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor({ children }: { children: React.ReactNode }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        hover: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            scale: 1.5,
            backgroundColor: "rgba(212, 175, 55, 0.1)", // Gold with low opacity
            border: "1px solid rgba(212, 175, 55, 0.5)",
        },
    };

    return (
        <>
            {children}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold/50 pointer-events-none z-50 mix-blend-difference hidden md:block" // Hidden on touch devices
                variants={variants}
                animate={isHovered ? "hover" : "default"}
                transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gold rounded-full" />
            </motion.div>
        </>
    );
}
