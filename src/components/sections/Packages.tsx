"use client";

import { motion } from "framer-motion";

const packages = [
    {
        name: "Pre-Wedding Beauty",
        price: "₹12,000+",
        desc: "A comprehensive preparation regimen for flawless skin and hair ahead of your grand day.",
        features: [
            "Advanced Skincare Consultation",
            "Hydrafacial & Derma-planing",
            "Hair Spa & Trim",
            "Trial Makeup Session"
        ],
        popular: false
    },
    {
        name: "Bridal Signature",
        price: "₹25,000+",
        desc: "Our flagship luxury service for the ultimate celebrity-level bridal styling experience.",
        features: [
            "HD/Airbrush Bridal Makeup",
            "Premium Structural Hair Styling",
            "Luxury Mink Lashes & Accessories",
            "On-Location Dressing Assistance",
            "Touch-up Kit Inclusion"
        ],
        popular: true
    },
    {
        name: "Luxury Skin Treatment",
        price: "₹18,000+",
        desc: "Intensive 24K gold and caviar-infused treatments for a radiant, lit-from-within glow.",
        features: [
            "24K Gold Nano-Therapy",
            "Caviar Firming Mask",
            "LED Light Therapy",
            "Bespoke Serum Infusion"
        ],
        popular: false
    }
];

export default function Packages() {
    return (
        <section className="py-24 bg-black-matte relative overflow-hidden" id="packages">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-4">Curated Offerings</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-ivory">Exclusive <span className="italic text-gold">Packages</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className={`relative bg-black-matte p-8 md:p-10 border transition-all duration-500 overflow-hidden group ${pkg.popular
                                ? "border-gold md:-translate-y-4 box-glow"
                                : "border-gold/10 hover:border-gold/40"
                                }`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 right-0 bg-gold text-black-matte text-[10px] uppercase tracking-widest px-4 py-1 font-bold z-10">
                                    Highly Requested
                                </div>
                            )}

                            <h4 className="text-xl md:text-2xl font-serif text-ivory mb-2 mt-4 md:mt-0">{pkg.name}</h4>
                            <p className="text-gold text-lg md:text-xl font-medium mb-6">{pkg.price}</p>
                            <p className="text-ivory/60 text-xs md:text-sm font-light mb-8 leading-relaxed md:h-16">{pkg.desc}</p>

                            <ul className="mb-10 space-y-4">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-gold mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                                        <span className="text-ivory/80 text-sm font-light">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${pkg.popular
                                    ? "bg-gold text-black-matte hover:bg-ivory"
                                    : "border border-gold text-gold hover:bg-gold hover:text-black-matte"
                                    }`}
                            >
                                Inquire Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
