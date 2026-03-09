import { Gem } from "lucide-react";

export default function MembershipPlaceholder() {
    return (
        <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-black-matte text-ivory">
            <div className="text-center">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 outline outline-offset-4 outline-1 outline-gold/20">
                    <Gem size={32} className="text-gold" />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif mb-6">Aura <span className="italic text-gold">Society</span></h1>
                <p className="text-ivory/60 max-w-lg mx-auto mb-10 leading-relaxed text-sm">
                    An invite-only membership for our most distinguished clientele. Includes priority bookings, complementary monthly touch-ups, and access to unreleased product lines.
                </p>
                <button className="px-8 py-4 bg-white/5 border border-gold/50 text-gold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-gold transition-all">
                    Request Invitation
                </button>
            </div>
        </div>
    );
}
