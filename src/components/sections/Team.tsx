"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Instagram } from "lucide-react";

const teamMembers = [
    {
        name: "Elena Rostova",
        role: "Lead Bridal Director",
        exp: "15+ Years",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Marcus Sterling",
        role: "Senior Hair Architect",
        exp: "12+ Years",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Isabella Chen",
        role: "Dermatology Aesthetics",
        exp: "10+ Years",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
    }
];

function TeamCard({ member }: { member: typeof teamMembers[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative bg-black-matte border border-gold/10 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative w-full aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={member.image} alt={member.name} className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-black-matte/20 to-transparent opacity-80" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-gold text-[10px] uppercase tracking-[0.2em] mb-2">{member.role}</p>
                        <h4 className="text-2xl font-serif text-ivory mb-1">{member.name}</h4>
                        <p className="text-ivory/50 text-xs tracking-wider">{member.exp} Experience</p>
                    </div>
                    <button className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-ivory hover:bg-gold hover:text-black-matte transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                        <Instagram size={18} strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <section className="py-24 bg-black-matte relative" id="team">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-4">The Masters</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-ivory">World-Class <span className="italic text-gold">Artisans</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                        >
                            <TeamCard member={member} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
