"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DashboardOverview() {
    return (
        <div className="space-y-12">

            {/* Upcoming Appointment Card */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden border border-gold/30 bg-black-matte/50 p-6 md:p-10 group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[80px] pointer-events-none mr-[-50px] mt-[-50px]"></div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-gold px-3 py-1 text-black-matte text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                                <Sparkles size={12} /> Upcoming
                            </span>
                        </div>
                        <h2 className="text-3xl font-serif text-ivory mb-2">Signature Bridal Consultation</h2>
                        <p className="text-ivory/60 text-sm flex items-center gap-4 mb-6 md:mb-0">
                            <span className="flex items-center gap-1.5"><Calendar size={14} className="text-gold" /> Oct 15, 2024</span>
                            <span className="flex items-center gap-1.5"><Clock size={14} className="text-gold" /> 11:30 AM</span>
                            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gold" /> Global Atelier</span>
                        </p>
                    </div>

                    <div className="flex gap-4 shrink-0">
                        <button className="border border-ivory/30 text-ivory hover:border-ivory px-6 py-2.5 text-xs uppercase tracking-widest transition-colors">
                            Modify
                        </button>
                        <button className="bg-gold/10 text-gold border border-gold hover:bg-gold hover:text-black-matte px-6 py-2.5 text-xs uppercase tracking-widest transition-colors">
                            Check In
                        </button>
                    </div>
                </div>
            </motion.section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Personalized Recommendations */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h3 className="text-lg font-serif text-ivory mb-6 flex items-center justify-between">
                        <span>Curated For You</span>
                        <Link href="#" className="text-[10px] uppercase tracking-widest text-gold/70 hover:text-gold flex items-center">View All <ChevronRight size={12} className="ml-1" /></Link>
                    </h3>

                    <div className="space-y-4">
                        {[
                            { name: "24K Gold Therapy", desc: "Based on your recent aesthetic profile update.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&auto=format&fit=crop" },
                            { name: "Caviar Hair Spa", desc: "Recommended pre-bridal preparation step.", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=200&auto=format&fit=crop" }
                        ].map((rec, i) => (
                            <div key={i} className="flex gap-4 p-4 border border-gold/10 hover:border-gold/30 transition-colors bg-white/5 cursor-pointer group">
                                <img src={rec.img} alt={rec.name} className="w-20 h-20 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="flex flex-col justify-center">
                                    <h4 className="font-serif text-ivory group-hover:text-gold transition-colors">{rec.name}</h4>
                                    <p className="text-xs text-ivory/50 mt-1 line-clamp-2">{rec.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Aesthetic Journey / Rewards */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-lg font-serif text-ivory mb-6">SLBA Benefits Status</h3>

                    <div className="border border-gold/10 p-6 bg-gradient-to-br from-gold/5 to-transparent h-full">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gold/70 mb-1">Current Tier</p>
                                <p className="text-2xl font-serif text-gold">Gold Muse</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-serif text-ivory">4,250</p>
                                <p className="text-[10px] uppercase tracking-widest text-ivory/50 mt-1">SLBA Points</p>
                            </div>
                        </div>

                        <div className="space-y-2 mb-8">
                            <div className="flex justify-between text-[10px] uppercase tracking-widest text-ivory/50">
                                <span>Gold</span>
                                <span>Platinum</span>
                            </div>
                            <div className="h-1 w-full bg-white/10 relative">
                                <div className="absolute top-0 left-0 h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" style={{ width: '85%' }}></div>
                            </div>
                            <p className="text-[10px] text-zinc-400 text-right">750 pts to upgrade</p>
                        </div>

                        <button className="w-full border border-gold/30 py-3 text-xs uppercase tracking-widest text-gold hover:bg-gold hover:text-black-matte transition-colors">
                            Redeem Experiences
                        </button>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
