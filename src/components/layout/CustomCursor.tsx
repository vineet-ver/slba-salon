"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor({ children }: { children: React.ReactNode }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (hidden) setHidden(false);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Hide cursor when it leaves the window
        const handleDocumentMouseLeave = () => setHidden(true);

        window.addEventListener("mousemove", updateMousePosition);
        document.addEventListener("mouseleave", handleDocumentMouseLeave);
        document.addEventListener("mouseenter", () => setHidden(false));

        // Attach hover listeners to specific elements for the "enlarged" cursor effect
        const interactiveSelectors = 'a, button, input, textarea, select, [role="button"], .cursor-pointer';
        document.querySelectorAll(interactiveSelectors).forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        // MutationObserver to attach listeners to newly added elements (e.g., in a SPA)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "childList") {
                    document.querySelectorAll(interactiveSelectors).forEach((el) => {
                        // Avoid adding duplicate listeners
                        el.removeEventListener("mouseenter", handleMouseEnter);
                        el.removeEventListener("mouseleave", handleMouseLeave);
                        el.addEventListener("mouseenter", handleMouseEnter);
                        el.addEventListener("mouseleave", handleMouseLeave);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            document.removeEventListener("mouseleave", handleDocumentMouseLeave);
            document.removeEventListener("mouseenter", () => setHidden(false));
            document.querySelectorAll(interactiveSelectors).forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            observer.disconnect();
        };
    }, [hidden]);

    // Mobile check to completely disable custom cursor on touch devices to improve performance
    const isMobile = typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches;

    return (
        <>
            {children}
            {!isMobile && (
                <>
                    {/* The main core dot */}
                    <motion.div
                        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999] mix-blend-exclusion"
                        animate={{
                            x: mousePosition.x - 4,
                            y: mousePosition.y - 4,
                            scale: isHovering ? 0 : 1,
                            opacity: hidden ? 0 : 1
                        }}
                        transition={{
                            type: "tween",
                            ease: "backOut",
                            duration: 0.1
                        }}
                    />
                    {/* The outer following ring */}
                    <motion.div
                        className="fixed top-0 left-0 w-8 h-8 border border-gold/50 rounded-full pointer-events-none z-[9998] mix-blend-exclusion flex items-center justify-center"
                        animate={{
                            x: mousePosition.x - 16,
                            y: mousePosition.y - 16,
                            scale: isHovering ? 1.5 : 1,
                            opacity: hidden ? 0 : 1,
                            backgroundColor: isHovering ? "rgba(212,175,55,0.1)" : "transparent"
                        }}
                        transition={{
                            type: "tween",
                            ease: "backOut",
                            duration: 0.2
                        }}
                    >
                        {/* Optional inner content when hovering */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovering ? 1 : 0 }}
                            className="text-[6px] uppercase tracking-widest text-gold mt-[1px]"
                        >
                            Expand
                        </motion.div>
                    </motion.div>
                </>
            )}
        </>
    );
}
