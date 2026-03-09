"use client";

import { motion } from "framer-motion";
import { Plus, Search, Filter, MoreVertical, Calendar } from "lucide-react";

export default function AdminAppointmentsPage() {
    const appointments = [
        { id: "APT-1042", client: "Amelia Rossi", service: "Signature Bridal Consult", date: "Today", time: "10:00 AM", stylist: "Elena R.", status: "Confirmed", amount: "Complimentary" },
        { id: "APT-1043", client: "Sophia Chen", service: "Glass Skin Hydrafacial", date: "Today", time: "11:30 AM", stylist: "Dr. Anya", status: "Checked In", amount: "₹15,000" },
        { id: "APT-1044", client: "Isabella V.", service: "Caviar Hair Spa", date: "Today", time: "01:00 PM", stylist: "Marcus S.", status: "Pending", amount: "₹8,500" },
        { id: "APT-1045", client: "Olivia P.", service: "Engagement Styling", date: "Today", time: "03:00 PM", stylist: "Elena R.", status: "Confirmed", amount: "₹25,000" },
        { id: "APT-1046", client: "Mia Wong", service: "24K Gold Therapy", date: "Tomorrow", time: "10:00 AM", stylist: "Dr. Anya", status: "Confirmed", amount: "₹20,000" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-2xl font-serif text-ivory">Appointments Management</h2>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gold/30 text-gold hover:bg-gold/10 transition-colors text-xs uppercase tracking-widest rounded">
                        <Calendar size={14} /> Schedule View
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gold text-black-matte hover:bg-ivory transition-colors text-xs uppercase tracking-widest rounded">
                        <Plus size={14} /> New Booking
                    </button>
                </div>
            </div>

            <div className="bg-white/5 border border-gold/10 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gold/10 flex flex-col sm:flex-row gap-4 justify-between bg-black-matte/30">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory/40" size={16} />
                        <input type="text" placeholder="Search client, service, or abstract ID..." className="w-full bg-black-matte border border-gold/20 rounded pl-10 pr-4 py-2 text-sm text-ivory focus:outline-none focus:border-gold/50" />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gold/20 text-ivory/70 hover:text-ivory hover:border-gold/50 transition-colors text-sm rounded bg-black-matte">
                        <Filter size={16} /> Filter
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-ivory/70">
                        <thead className="bg-black-matte/50 text-[10px] uppercase tracking-widest text-gold/80 border-b border-gold/10">
                            <tr>
                                <th className="px-6 py-4 font-normal">Booking ID</th>
                                <th className="px-6 py-4 font-normal">Client Phase</th>
                                <th className="px-6 py-4 font-normal">Service Details</th>
                                <th className="px-6 py-4 font-normal">Date & Time</th>
                                <th className="px-6 py-4 font-normal">Expert</th>
                                <th className="px-6 py-4 font-normal">Status</th>
                                <th className="px-6 py-4 font-normal text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((apt, i) => (
                                <motion.tr
                                    key={apt.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                                >
                                    <td className="px-6 py-4 font-mono text-xs">{apt.id}</td>
                                    <td className="px-6 py-4 font-medium text-ivory">{apt.client}</td>
                                    <td className="px-6 py-4 text-ivory/60">{apt.service}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span>{apt.date}</span>
                                            <span className="text-xs text-gold/60">{apt.time}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{apt.stylist}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full ${apt.status === "Confirmed" ? "text-blue-400 bg-blue-500/10 border border-blue-500/20" :
                                                apt.status === "Checked In" ? "text-green-400 bg-green-500/10 border border-green-500/20" :
                                                    "text-yellow-400 bg-yellow-500/10 border border-yellow-500/20"
                                            }`}>
                                            {apt.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-ivory/40 hover:text-gold transition-colors p-1">
                                            <MoreVertical size={16} />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
