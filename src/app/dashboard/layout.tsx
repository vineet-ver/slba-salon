import { ReactNode } from "react";
import Link from "next/link";
import { User, Calendar, History, Settings, LogOut, ChevronRight, Award, Clock } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const sidebarItems = [
        { icon: <User size={18} />, label: "Profile", href: "/dashboard" },
        { icon: <Calendar size={18} />, label: "Appointments", href: "/dashboard/appointments" },
        { icon: <Clock size={18} />, label: "History", href: "/dashboard/history" },
        { icon: <Award size={18} />, label: "SLBA Benefits", href: "/dashboard/benefits" },
        { icon: <Settings size={18} />, label: "Preferences", href: "/dashboard/settings" },
    ];

    return (
        <div className="min-h-screen bg-black-matte pt-24 pb-12">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gold/10 pb-6">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-2xl font-serif">
                            <span>AR</span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-serif text-ivory mb-1">Amelia Rossi</h1>
                            <p className="text-gold/70 text-xs uppercase tracking-widest flex items-center gap-2">
                                <Award size={14} className="text-gold" /> Gold Tier Member
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-0 flex gap-4">
                        <Link href="/#booking" className="bg-gold text-black-matte px-6 py-2 text-xs uppercase tracking-widest hover:bg-ivory transition-colors">
                            New Reservation
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Nav */}
                    <aside className="lg:w-64 shrink-0">
                        <nav className="flex flex-col gap-2">
                            {sidebarItems.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className={`flex items-center justify-between p-4 border text-sm transition-all duration-300 ${idx === 0
                                        ? "border-gold bg-gold/5 text-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                                        : "border-transparent text-ivory/60 hover:text-ivory hover:border-gold/30 hover:bg-white/5"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </div>
                                    <ChevronRight size={14} className={idx === 0 ? "opacity-100" : "opacity-0"} />
                                </Link>
                            ))}

                            <button className="flex items-center gap-4 p-4 mt-8 text-red-500/70 hover:text-red-500 text-sm transition-colors border border-transparent">
                                <LogOut size={18} />
                                <span>Sign Out</span>
                            </button>
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1">
                        {children}
                    </main>
                </div>

            </div>
        </div>
    );
}
