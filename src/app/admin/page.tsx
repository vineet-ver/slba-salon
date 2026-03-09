"use client";

import { motion } from "framer-motion";
import { Users, Calendar, TrendingUp, Sparkles, ArrowUpRight, Clock } from "lucide-react";

export default function AdminDashboardOverview() {
    const stats = [
        { label: "Today's Appointments", value: "14", change: "+2 from yesterday", icon: <Calendar size={20} /> },
        { label: "Revenue (MTD)", value: "₹4.2L", change: "+15% vs last month", icon: <TrendingUp size={20} /> },
        { label: "New Clients", value: "28", change: "+5 this week", icon: <Users size={20} /> },
        { label: "Top Service", value: "Bridal", change: "86% booking rate", icon: <Sparkles size={20} /> },
    ];

    const upcomingAppointments = [
        { time: "10:00 AM", client: "Amelia Rossi", service: "Signature Bridal Consult", status: "Confirmed", stylist: "Elena R." },
        { time: "11:30 AM", client: "Sophia Chen", service: "Glass Skin Hydrafacial", status: "Checked In", stylist: "Dr. Anya" },
        { time: "01:00 PM", client: "Isabella V.", service: "Caviar Hair Spa", status: "Pending", stylist: "Marcus S." },
        { time: "03:00 PM", client: "Olivia P.", service: "Engagement Styling", status: "Confirmed", stylist: "Elena R." },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-8">

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/5 border border-gold/10 p-6 rounded-xl relative overflow-hidden group hover:border-gold/30 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-gold transform group-hover:scale-110">
                            {stat.icon}
                        </div>
                        <p className="text-xs uppercase tracking-widest text-ivory/50 mb-2">{stat.label}</p>
                        <h3 className="text-3xl font-serif text-ivory mb-4">{stat.value}</h3>
                        <p className="text-[10px] uppercase tracking-wider text-green-400/80 flex items-center gap-1">
                            <ArrowUpRight size={12} /> {stat.change}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* Today's Schedule Area */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="xl:col-span-2 bg-white/5 border border-gold/10 rounded-xl p-6 md:p-8"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-serif text-ivory">Today's Schedule</h3>
                        <button className="text-xs uppercase tracking-widest text-gold hover:text-ivory transition-colors">View Calendar</button>
                    </div>

                    <div className="space-y-4">
                        {upcomingAppointments.map((apt, i) => (
                            <div key={i} className="flex items-center justify-between p-4 border border-white/5 hover:border-gold/20 bg-black-matte rounded-lg transition-colors group">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 text-center shrink-0">
                                        <p className="text-sm font-medium text-gold flex items-center justify-center gap-1.5"><Clock size={12} />{apt.time}</p>
                                    </div>
                                    <div className="hidden md:block w-px h-10 bg-white/10"></div>
                                    <div>
                                        <h4 className="text-ivory font-medium">{apt.client}</h4>
                                        <p className="text-xs text-ivory/50 mt-1">{apt.service} • {apt.stylist}</p>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <span className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full ${apt.status === "Confirmed" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                                            apt.status === "Checked In" ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                                                "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                                        }`}>
                                        {apt.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Quick Actions / Activity */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-xl p-6 md:p-8">
                        <h3 className="text-xl font-serif text-gold mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <button className="w-full text-left p-4 bg-black-matte/50 hover:bg-black-matte border border-gold/10 hover:border-gold/50 rounded-lg text-sm transition-all text-ivory flex justify-between items-center group">
                                New Walk-in Reservation <ArrowUpRight size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                            <button className="w-full text-left p-4 bg-black-matte/50 hover:bg-black-matte border border-gold/10 hover:border-gold/50 rounded-lg text-sm transition-all text-ivory flex justify-between items-center group">
                                Update Stylist Roster <ArrowUpRight size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                            <button className="w-full text-left p-4 bg-black-matte/50 hover:bg-black-matte border border-gold/10 hover:border-gold/50 rounded-lg text-sm transition-all text-ivory flex justify-between items-center group">
                                Generate Daily Report <ArrowUpRight size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
