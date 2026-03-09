"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, Loader2 } from "lucide-react";

type Message = {
    id: number;
    text: string;
    sender: "ai" | "user";
};

const predefinedResponses: Record<string, string> = {
    "bridal": "Our Signature Bridal package starts at ₹25,000. It includes HD/Airbrush makeup, luxury hair styling, and on-location assistance. Would you like to check our artists' availability?",
    "skin": "For a flawless glow, we recommend our 24K Gold Therapy or the Glass Skin Hydrafacial (Starting at ₹12,000). To give you the best advice, what is your primary skin concern?",
    "hair": "Our hair studio specializes in Balayage, intricate updos, and restorative Caviar Hair Spas. Cut and styling begin at ₹5,000. Shall we book a consultation?",
    "price": "Our luxury services range from ₹5,000 for advanced hair styling to custom packages starting at ₹25,000 for bridal. Let me know which service you are interested in for exact details.",
    "book": "Excellent. I can guide you through our smart booking system. Are you looking to book a bridal consultation, or a specific studio service?",
    "location": "Aura Bridal Studio is located in the heart of the luxury district. We also offer destination wedding services globally upon request.",
    "default": "I understand. To provide you with the most curated experience, could you tell me a little more about the occasion and your personal style preferences?"
};

const quickSuggestions = [
    "Bridal Packages",
    "Skin Therapy",
    "Hair Styling Pricing",
    "Book Appointment"
];

export default function AIConsultant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Welcome to Aura Bridal Studio. How can I assist you with your luxury beauty experience today?", sender: "ai" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = { id: Date.now(), text: inputValue, sender: "user" };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI thinking
        setTimeout(() => {
            const lowerInput = userMsg.text.toLowerCase();
            let aiResponseText = predefinedResponses["default"];

            // Simple keyword matching for demo
            if (lowerInput.includes("bridal") || lowerInput.includes("wedding")) aiResponseText = predefinedResponses["bridal"];
            else if (lowerInput.includes("skin") || lowerInput.includes("face") || lowerInput.includes("facial")) aiResponseText = predefinedResponses["skin"];
            else if (lowerInput.includes("hair") || lowerInput.includes("color") || lowerInput.includes("cut")) aiResponseText = predefinedResponses["hair"];
            else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("how much") || lowerInput.includes("pricing")) aiResponseText = predefinedResponses["price"];
            else if (lowerInput.includes("book") || lowerInput.includes("appointment") || lowerInput.includes("reserve")) aiResponseText = predefinedResponses["book"];
            else if (lowerInput.includes("where") || lowerInput.includes("location") || lowerInput.includes("address")) aiResponseText = predefinedResponses["location"];

            setMessages(prev => [...prev, { id: Date.now() + 1, text: aiResponseText, sender: "ai" }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-40 bg-gold text-black-matte p-4 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300 group"
            >
                <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
                {/* Notification dot */}
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-black-matte rounded-full animate-pulse"></span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-24 right-4 md:right-8 z-50 w-[calc(100vw-2rem)] md:w-[380px] bg-black-matte border border-gold/30 shadow-2xl overflow-hidden flex flex-col rounded-t-xl"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-gold/20 to-gold/5 border-b border-gold/20 p-4 flex justify-between items-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[40px] rounded-full pointer-events-none"></div>
                            <div className="flex items-center space-x-3 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black-matte shadow-lg">
                                    <Sparkles size={18} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-gold text-base tracking-wide">Aura Intelligence</h4>
                                    <p className="text-[9px] text-ivory/60 uppercase tracking-widest flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span> Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-ivory/50 hover:text-ivory transition-colors relative z-10 p-2"
                                aria-label="Close chat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="h-96 p-5 overflow-y-auto flex flex-col space-y-4 text-sm font-sans font-light bg-[#080808] scroll-smooth">
                            <AnimatePresence initial={false}>
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className={`p-3.5 max-w-[85%] border shadow-sm leading-relaxed ${msg.sender === "ai"
                                            ? "bg-gold/10 text-ivory rounded-tr-xl rounded-br-xl rounded-bl-xl border-gold/10 self-start"
                                            : "bg-white/5 text-ivory rounded-tl-xl rounded-bl-xl rounded-br-xl border-white/5 self-end text-right"
                                            }`}
                                    >
                                        {msg.text}
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-gold/5 text-gold/50 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl max-w-[50%] self-start flex items-center space-x-2 border border-gold/10"
                                    >
                                        <Loader2 size={16} className="animate-spin" />
                                        <span className="text-[10px] uppercase tracking-widest font-medium">Curating</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Suggestions (if no activity or initially) */}
                        {messages.length < 3 && !isTyping && (
                            <div className="bg-[#080808] px-4 pb-2 flex flex-wrap gap-2">
                                {quickSuggestions.map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        onClick={() => {
                                            setInputValue(suggestion);
                                            // Optional: immediately send it, but setting input allows user to edit
                                        }}
                                        className="text-[10px] uppercase tracking-widest text-gold/70 border border-gold/20 rounded-full px-3 py-1.5 hover:bg-gold/10 hover:text-gold transition-colors"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-4 border-t border-gold/20 bg-black-matte flex relative gap-2 items-center">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Inquire about our experiences..."
                                className="flex-1 bg-white/5 rounded-full border border-gold/20 text-ivory py-3 px-5 text-xs focus:outline-none focus:border-gold/60 focus:bg-white/10 transition-colors placeholder:text-ivory/30"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!inputValue.trim()}
                                className="w-10 h-10 rounded-full bg-gold text-black-matte flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 shrink-0"
                            >
                                <Send size={16} className={inputValue.trim() ? "translate-x-0.5" : ""} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
