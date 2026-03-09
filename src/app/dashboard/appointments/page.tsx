"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, MoreHorizontal } from "lucide-react";

export default function AppointmentsPage() {
    const appointments = [
        {
            id: 1,
            title: "Signature Bridal Consultation",
            date: "Oct 15, 2024",
            time: "11:30 AM",
            location: "Global Atelier (Suite 3)",
            stylist: "Elena Rostova",
            status: "Upcoming",
            price: "Complimentary"
        },
        {
            id: 2,
            title: "Pre-Bridal Glass Skin Hydrafacial",
            date: "Oct 22, 2024",
            time: "2:00 PM",
            location: "Skin Academy (Room B)",
            stylist: "Dr. Anya",
            status: "Upcoming",
            price: "₹12,000"
        }
    ];

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-serif text-ivory mb-6">Your Reservations</h2>

            <div className="space-y-4">
                {appointments.map((apt, i) => (
                    <motion.div
                        key={apt.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/5 border border-gold/10 p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-gold/30 transition-colors group"
                    >
                        <div className="flex-1 mb-6 md:mb-0">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] uppercase tracking-widest text-gold bg-gold/10 px-2 py-1">{apt.status}</span>
                                <span className="text-ivory/50 text-[10px] uppercase tracking-widest">With {apt.stylist}</span>
                            </div>
                            <h3 className="text-xl font-serif text-ivory mb-2">{apt.title}</h3>
                            <div className="flex flex-wrap gap-4 text-xs text-ivory/60">
                                <span className="flex items-center gap-1.5"><Calendar size={14} className="text-gold/70" /> {apt.date}</span>
                                <span className="flex items-center gap-1.5"><Clock size={14} className="text-gold/70" /> {apt.time}</span>
                                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gold/70" /> {apt.location}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t border-gold/10 md:border-none pt-4 md:pt-0">
                            <div className="text-left md:text-right mr-4">
                                <p className="text-[10px] uppercase tracking-widest text-gold/50 mb-1">Estimated</p>
                                <p className="text-ivory font-serif">{apt.price}</p>
                            </div>
                            <button className="p-2 text-ivory/50 hover:text-gold transition-colors border border-transparent hover:border-gold/30 rounded-full">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <button className="w-full md:w-auto border border-gold border-dashed p-6 text-center text-ivory/50 hover:text-gold hover:bg-gold/5 hover:border-solid transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                <Calendar size={16} /> Book New Experience
            </button>

        </div>
    );
}
