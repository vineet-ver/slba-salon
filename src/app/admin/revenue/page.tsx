"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, DollarSign, CreditCard, Activity, ArrowUpRight } from "lucide-react";

export default function AdminRevenuePage() {

    // Mock data for charts
    const monthlyRevenue = [
        { month: 'Jan', value: 3.2 }, { month: 'Feb', value: 3.8 }, { month: 'Mar', value: 4.1 },
        { month: 'Apr', value: 4.5 }, { month: 'May', value: 4.2 }, { month: 'Jun', value: 5.0 },
        { month: 'Jul', value: 5.4 }, { month: 'Aug', value: 6.1 }, { month: 'Sep', value: 5.8 },
        { month: 'Oct', value: 6.5 }
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-2xl font-serif text-ivory">Financial Insights & CRM Analytics</h2>
                <div className="flex gap-4 bg-black-matte border border-gold/10 p-1 rounded">
                    <button className="px-4 py-1.5 text-xs uppercase tracking-widest text-black-matte bg-gold rounded">MTD</button>
                    <button className="px-4 py-1.5 text-xs uppercase tracking-widest text-ivory/60 hover:text-ivory transition-colors">YTD</button>
                    <button className="px-4 py-1.5 text-xs uppercase tracking-widest text-ivory/60 hover:text-ivory transition-colors">All Time</button>
                </div>
            </div>

            {/* Top Level KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-white/5 border border-gold/10 rounded-xl relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl"></div>
                    <p className="text-xs uppercase tracking-widest text-ivory/50 mb-2 flex items-center gap-2"><DollarSign size={14} /> Total Revenue</p>
                    <h3 className="text-4xl font-serif text-ivory mb-2">₹42.5L</h3>
                    <p className="text-xs text-green-400 flex items-center gap-1"><TrendingUp size={12} /> +18.2% vs previous period</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 bg-white/5 border border-gold/10 rounded-xl relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl"></div>
                    <p className="text-xs uppercase tracking-widest text-ivory/50 mb-2 flex items-center gap-2"><CreditCard size={14} /> Average Ticket Size</p>
                    <h3 className="text-4xl font-serif text-ivory mb-2">₹18,400</h3>
                    <p className="text-xs text-green-400 flex items-center gap-1"><TrendingUp size={12} /> +5.1% vs previous period</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-6 bg-white/5 border border-gold/10 rounded-xl relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
                    <p className="text-xs uppercase tracking-widest text-ivory/50 mb-2 flex items-center gap-2"><Activity size={14} /> Client Churn Rate</p>
                    <h3 className="text-4xl font-serif text-ivory mb-2">4.2%</h3>
                    <p className="text-xs text-red-400 flex items-center gap-1"><TrendingDown size={12} /> -1.5% vs previous period</p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Revenue Graph Placeholder */}
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="p-6 bg-black-matte border border-gold/10 rounded-xl">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-lg font-serif text-ivory mb-1">Revenue Growth</h3>
                            <p className="text-xs text-ivory/40 uppercase tracking-widest">Year to Date (in Lakhs)</p>
                        </div>
                        <button className="text-[10px] text-gold border border-gold/30 px-3 py-1 rounded hover:bg-gold/10 transition-colors">Download Report</button>
                    </div>

                    {/* Simulated Bar Chart */}
                    <div className="h-64 flex items-end gap-2 md:gap-4 w-full">
                        {monthlyRevenue.map((data, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end items-center group">
                                <span className="text-[10px] text-ivory/0 group-hover:text-gold transition-colors mb-2 opacity-0 group-hover:opacity-100">{data.value}L</span>
                                <div
                                    className="w-full bg-gold/20 group-hover:bg-gold/80 transition-all rounded-t-sm relative"
                                    style={{ height: `${(data.value / 7) * 100}%` }}
                                >
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-ivory/20"></div>
                                </div>
                                <span className="text-[10px] text-ivory/40 mt-3">{data.month}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Revenue Breakdown */}
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="p-6 bg-black-matte border border-gold/10 rounded-xl">
                    <h3 className="text-lg font-serif text-ivory mb-6">Revenue by Category</h3>

                    <div className="space-y-6">
                        {[
                            { name: "Bridal Packages", value: 45, color: "bg-gold" },
                            { name: "Premium Facials", value: 25, color: "bg-white/70" },
                            { name: "Hair Coloring & Spa", value: 20, color: "bg-white/40" },
                            { name: "Retail Products", value: 10, color: "bg-white/10" }
                        ].map((cat, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-ivory/80">{cat.name}</span>
                                    <span className="text-gold font-mono">{cat.value}%</span>
                                </div>
                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${cat.value}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                        className={`h-full ${cat.color}`}
                                    ></motion.div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 border border-gold/20 bg-gold/5 rounded flex items-center justify-between group cursor-pointer hover:bg-gold/10 transition-colors">
                        <div>
                            <p className="text-sm font-serif text-gold mb-1">Identify Upsell Opportunities</p>
                            <p className="text-xs text-ivory/60 line-clamp-1">AI analyzing client purchasing patterns...</p>
                        </div>
                        <ArrowUpRight className="text-gold opacity-50 group-hover:opacity-100 transition-opacity" size={20} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
