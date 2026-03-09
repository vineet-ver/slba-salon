"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send } from "lucide-react";

export default function AIConsultant() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-40 bg-gold text-black-matte p-4 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300"
            >
                <Sparkles size={24} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-24 right-4 md:right-8 z-50 w-[calc(100vw-2rem)] md:w-[350px] bg-black-matte border border-gold/30 shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-gold/10 border-b border-gold/20 p-4 flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-black-matte">
                                    <Sparkles size={16} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-gold text-sm">Aura Beauty AI</h4>
                                    <p className="text-[10px] text-ivory/60 uppercase tracking-widest">Virtual Consultant</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-ivory/50 hover:text-ivory transition-colors"
                                aria-label="Close chat"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="h-80 p-4 overflow-y-auto flex flex-col space-y-4 text-sm font-sans font-light bg-[#0a0a0a]">
                            <div className="bg-gold/10 text-ivory p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg max-w-[85%] border border-gold/5">
                                Welcome to Aura Bridal Studio. How can I assist you with your luxury beauty experience today?
                            </div>
                            <div className="bg-white/5 text-ivory p-3 rounded-tl-lg rounded-bl-lg rounded-br-lg max-w-[85%] self-end">
                                I'd like to know more about the Bridal Signature package.
                            </div>
                            <div className="bg-gold/10 text-ivory p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg max-w-[85%] border border-gold/5">
                                Our Bridal Signature package (starting at ₹25,000) is our finest offering. It includes HD/Airbrush makeup from our lead directors, luxury structural hair styling, and personalized on-location assistance. Would you like to check availability?
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-gold/20 bg-black-matte flex relative">
                            <input
                                type="text"
                                placeholder="Ask about our services..."
                                className="w-full bg-transparent border-b border-gold/30 text-ivory py-2 pr-10 text-xs focus:outline-none focus:border-gold placeholder:text-ivory/30"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gold hover:text-ivory transition-colors">
                                <Send size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
