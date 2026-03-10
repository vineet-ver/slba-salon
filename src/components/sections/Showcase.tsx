"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const portfolioImages = [
    { src: "/Ethereal-Glow.jfif", title: "Ethereal Glow" },
    { src: "/Modern-Muse.jfif", title: "Modern Muse" },
    { src: "/Royal-Radiance.jfif", title: "Royal Radiance" },
];

export default function Showcase() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;

        const items = container.current.querySelectorAll('.showcase-item');

        items.forEach((item, i) => {
            gsap.fromTo(
                item,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Parallax effect for image
            const img = item.querySelector('img');
            if (img) {
                gsap.to(img, {
                    y: "20%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
        });
    }, []);

    return (
        <section ref={container} className="py-24 bg-ivory text-black-matte" id="portfolio">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6">Signature Bridal</h2>
                        <h3 className="text-5xl md:text-6xl font-serif text-black-matte leading-tight">
                            Editorial <br /> <span className="italic text-gold">Perfection</span>
                        </h3>
                    </div>
                    <button className="group flex items-center gap-4 hover:gap-6 transition-all duration-300">
                        <span className="text-xs uppercase tracking-[0.2em] font-medium">View Full Portfolio</span>
                        <div className="w-12 h-px bg-black-matte group-hover:w-16 transition-all duration-300 relative">
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-black-matte rotate-45"></span>
                        </div>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                    {portfolioImages.map((item, i) => (
                        <div
                            key={i}
                            className={`showcase-item group cursor-pointer ${i === 1 ? 'md:mt-24' : ''} ${i === 2 ? 'md:mt-12' : ''}`}
                        >
                            <div className="relative w-full aspect-[3/4] overflow-hidden bg-black-matte/5">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black-matte/20 group-hover:bg-transparent transition-all duration-500" />
                            </div>
                            <div className="mt-8">
                                <span className="text-gold text-[10px] tracking-[0.3em] uppercase block mb-2">0{i + 1} / 03</span>
                                <h4 className="text-2xl font-serif">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
