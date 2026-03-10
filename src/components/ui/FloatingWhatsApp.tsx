"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
    const phoneNumber = "+917011559575"; // Saroj Sharma WhatsApp
    const message = encodeURIComponent("Hello! I would like to inquire about services at SLBA - Saroj Luxe Beauty Atelier.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 left-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-110 hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all duration-300 group flex items-center justify-center cursor-pointer"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
            <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-black-matte border border-gold/20 text-ivory text-[10px] uppercase tracking-widest px-3 py-2 rounded-md whitespace-nowrap transition-all duration-300 pointer-events-none transform -translate-x-2 group-hover:translate-x-0">
                Chat with us
            </span>
        </a>
    );
}
