"use client";

import { motion } from "framer-motion";
import { Search, Filter, MoreVertical, Star, ShieldAlert } from "lucide-react";

export default function AdminClientsPage() {
    const clients = [
        { id: "CL-901", name: "Amelia Rossi", tier: "Gold Muse", spent: "₹8.5L", visits: 14, lastVisit: "Oct 15, 2024", risk: "Low" },
        { id: "CL-902", name: "Sophia Chen", tier: "Platinum Icon", spent: "₹12.2L", visits: 22, lastVisit: "Oct 22, 2024", risk: "Low" },
        { id: "CL-903", name: "Isabella V.", tier: "Silver Status", spent: "₹2.1L", visits: 4, lastVisit: "Sep 10, 2024", risk: "Medium" },
        { id: "CL-904", name: "Olivia P.", tier: "Gold Muse", spent: "₹6.8L", visits: 11, lastVisit: "Oct 01, 2024", risk: "Low" },
        { id: "CL-905", name: "Mia Wong", tier: "Aura Starter", spent: "₹45K", visits: 1, lastVisit: "Aug 20, 2024", risk: "High" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-2xl font-serif text-ivory">Client Directory CRM</h2>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gold text-black-matte hover:bg-ivory transition-colors text-xs uppercase tracking-widest rounded">
                        Export CRM Data
                    </button>
                </div>
            </div>

            <div className="bg-white/5 border border-gold/10 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gold/10 flex flex-col sm:flex-row gap-4 justify-between bg-black-matte/30">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory/40" size={16} />
                        <input type="text" placeholder="Search by name, tier, or ID..." className="w-full bg-black-matte border border-gold/20 rounded pl-10 pr-4 py-2 text-sm text-ivory focus:outline-none focus:border-gold/50" />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gold/20 text-ivory/70 hover:text-ivory hover:border-gold/50 transition-colors text-sm rounded bg-black-matte">
                        <Filter size={16} /> Filter Segment
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-ivory/70">
                        <thead className="bg-black-matte/50 text-[10px] uppercase tracking-widest text-gold/80 border-b border-gold/10">
                            <tr>
                                <th className="px-6 py-4 font-normal">Client Name</th>
                                <th className="px-6 py-4 font-normal">Aura Tier</th>
                                <th className="px-6 py-4 font-normal">LTV (Lifetime Value)</th>
                                <th className="px-6 py-4 font-normal">Total Visits</th>
                                <th className="px-6 py-4 font-normal">Last Aesthetic Visit</th>
                                <th className="px-6 py-4 font-normal">Churn Risk</th>
                                <th className="px-6 py-4 font-normal text-right">Profile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client, i) => (
                                <motion.tr
                                    key={client.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                                >
                                    <td className="px-6 py-4 font-medium text-ivory">
                                        <div className="flex flex-col">
                                            <span>{client.name}</span>
                                            <span className="text-xs font-mono text-ivory/40">{client.id}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`flex items-center gap-1.5 text-xs ${client.tier.includes('Platinum') ? "text-stone-300" :
                                                client.tier.includes('Gold') ? "text-gold" :
                                                    "text-zinc-400"
                                            }`}>
                                            <Star size={12} className={client.tier.includes('Gold') || client.tier.includes('Platinum') ? "fill-current" : ""} /> {client.tier}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-emerald-400/80 font-mono">{client.spent}</td>
                                    <td className="px-6 py-4">{client.visits}</td>
                                    <td className="px-6 py-4">{client.lastVisit}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] uppercase tracking-widest px-2 py-1 flex items-center gap-1 w-max rounded-full ${client.risk === "Low" ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20" :
                                                client.risk === "Medium" ? "text-yellow-400 bg-yellow-500/10 border border-yellow-500/20" :
                                                    "text-red-400 bg-red-500/10 border border-red-500/20"
                                            }`}>
                                            {client.risk === "High" && <ShieldAlert size={10} />} {client.risk}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-ivory border border-ivory/20 px-3 py-1.5 text-xs hover:border-gold hover:text-gold transition-colors rounded">
                                            View
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
