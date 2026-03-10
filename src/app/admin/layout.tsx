import { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, Users, CalendarDays, TrendingUp, Settings, LogOut, Bell } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    const sidebarItems = [
        { icon: <LayoutDashboard size={18} />, label: "Overview", href: "/admin" },
        { icon: <CalendarDays size={18} />, label: "Appointments", href: "/admin/appointments" },
        { icon: <Users size={18} />, label: "Clients CRM", href: "/admin/clients" },
        { icon: <TrendingUp size={18} />, label: "Revenue", href: "/admin/revenue" },
        { icon: <Settings size={18} />, label: "System", href: "/admin/settings" },
    ];

    return (
        <div className="min-h-screen bg-[#050505] flex text-ivory">
            {/* Sidebar */}
            <aside className="w-64 border-r border-gold/10 bg-black-matte flex flex-col hidden md:flex">
                <div className="p-6 border-b border-gold/10">
                    <Link href="/" className="font-serif text-2xl tracking-widest text-gold block text-center">SLBA</Link>
                    <p className="text-[9px] uppercase tracking-widest text-center text-ivory/50 mt-2">Admin Portal</p>
                </div>

                <nav className="p-4 flex-1 space-y-2 mt-4">
                    {sidebarItems.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            className={`flex items-center gap-4 p-4 text-sm transition-all duration-300 rounded-lg ${idx === 0
                                ? "bg-gold/10 text-gold shadow-[inset_2px_0_0_rgba(212,175,55,1)]"
                                : "text-ivory/60 hover:text-ivory hover:bg-white/5"
                                }`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-gold/10">
                    <button className="flex items-center gap-4 p-4 w-full text-red-500/70 hover:text-red-500 text-sm transition-colors hover:bg-red-500/10 rounded-lg">
                        <LogOut size={18} />
                        <span>Admin Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Topbar */}
                <header className="h-20 border-b border-gold/10 bg-black-matte/50 flex items-center justify-between px-8 shrink-0">
                    <h2 className="text-xl font-serif text-ivory">Dashboard Overview</h2>
                    <div className="flex items-center gap-6">
                        <button className="relative text-ivory/60 hover:text-ivory transition-colors">
                            <Bell size={20} />
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gold rounded-full border border-black-matte"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-gold/10">
                            <div className="w-8 h-8 rounded-full bg-ivory/10 flex items-center justify-center text-xs font-serif text-gold">
                                SA
                            </div>
                            <div className="hidden lg:block">
                                <p className="text-sm font-medium">System Admin</p>
                                <p className="text-[10px] text-ivory/40 uppercase tracking-widest">Master Access</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Scrollable Main Area */}
                <main className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-[#0a0a0a] to-[#050505]">
                    {children}
                </main>
            </div>
        </div>
    );
}
