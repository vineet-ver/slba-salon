"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ from, to, duration, suffix = "" }: { from: number, to: number, duration: number, suffix?: string }) => {
    const [count, setCount] = useState(from);
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!inView) return;

        let startTime: number | null = null;
        const updateCounter = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Easing function (easeOutExpo)
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(Math.floor(ease * (to - from) + from));

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    }, [inView, from, to, duration]);

    return <span ref={nodeRef}>{count}{suffix}</span>;
};

export default function Experience() {
    const stats = [
        { value: 5, suffix: "+", label: "Years of Master Artistry" },
        { value: 2000, suffix: "+", label: "Happy Clients" },
        { value: 1000, suffix: "+", label: "Bridal Transformations" },
        { value: 100, suffix: "%", label: "Satisfaction Guarantee" },
    ];

    return (
        <section className="py-24 bg-ivory text-black-matte relative overflow-hidden" id="experience">
            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">

                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-6">The Legacy</h2>
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-black-matte leading-tight mb-8">
                            A Decade of <br /> <span className="italic text-gold">Masterclass</span> Beauty
                        </h3>
                        <p className="text-black-matte/70 font-sans font-light text-sm md:text-base leading-relaxed mb-8 max-w-lg pr-4 md:pr-0">
                            Our flagship studio represents the pinnacle of bridal styling. We utilize only the world’s most exclusive cosmetics—Tom Ford, Charlotte Tilbury, Dior, and Chanel—to ensure a radiant, long-lasting finish that completely redefines luxury.
                        </p>
                        <img
                            src="/Modern-Muse.jfif"
                            alt="Luxury Cosmetics"
                            className="w-full h-48 object-cover grayscale opacity-80"
                        />
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2 grid grid-cols-2 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="border-t border-black-matte/10 pt-6"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold mb-2">
                                <AnimatedCounter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
                            </div>
                            <p className="text-xs uppercase tracking-[0.1em] font-medium text-black-matte/80">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
