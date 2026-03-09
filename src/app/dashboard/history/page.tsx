"use client";

import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";

export default function HistoryPage() {
    const history = [
        {
            id: 1,
            date: "Sept 12, 2024",
            service: "Caviar Hair Spa",
            notes: "Focused on deep hydration. Used Oribe Gold Lust oil. Formulated custom mask for porosity.",
            stylist: "Marcus Sterling",
            receipt: "#INV-8821"
        },
        {
            id: 2,
            date: "Aug 05, 2024",
            service: "Engagement Makeup Trial",
            notes: "Soft glam finish. Warm peach undertones. Avoided heavy contouring as requested.",
            stylist: "Elena Rostova",
            receipt: "#INV-8409"
        }
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end mb-6">
                <h2 className="text-3xl font-serif text-ivory">Aesthetic History</h2>
                <button className="text-[10px] uppercase tracking-widest text-gold/70 hover:text-gold transition-colors flex items-center gap-1.5">
                    <Download size={12} /> Export Records
                </button>
            </div>

            <div className="space-y-6">
                {history.map((record, i) => (
                    <motion.div
                        key={record.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-black-matte border-t border-b border-gold/10 p-6 md:p-8 flex flex-col lg:flex-row gap-6 hover:bg-white/5 transition-colors"
                    >
                        <div className="lg:w-1/4 shrink-0">
                            <p className="text-xs uppercase tracking-widest text-gold mb-1">{record.date}</p>
                            <h3 className="font-serif text-lg text-ivory mb-2">{record.service}</h3>
                            <p className="text-[10px] text-ivory/40 uppercase tracking-widest flex items-center gap-1"><Sparkles size={10} className="text-gold/50" /> {record.stylist}</p>
                        </div>

                        <div className="flex-1 border-l border-gold/10 pl-0 lg:pl-6 border-t lg:border-t-0 pt-4 lg:pt-0">
                            <h4 className="text-[10px] uppercase tracking-widest text-ivory/50 mb-2">Stylist Notes & Formulations</h4>
                            <p className="text-sm text-ivory/80 font-light leading-relaxed italic border-l-2 border-gold/30 pl-4">{record.notes}</p>
                        </div>

                        <div className="lg:w-32 shrink-0 flex flex-col justify-end items-start lg:items-end mt-4 lg:mt-0">
                            <button className="text-[10px] uppercase tracking-widest text-ivory border border-ivory/20 px-4 py-2 hover:bg-ivory hover:text-black-matte transition-colors w-full lg:w-auto text-center">
                                View Receipt
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
