import { Video } from "lucide-react";

export default function MasterclassPlaceholder() {
    return (
        <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-black-matte text-ivory relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2500')] bg-cover bg-center opacity-10 blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-black-matte/80 to-transparent"></div>

            <div className="text-center relative z-10">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/30">
                    <Video size={32} className="text-gold" />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif mb-6">Master <span className="italic text-gold">The Craft</span></h1>
                <p className="text-ivory/80 text-lg md:text-xl font-light mb-12 max-w-3xl leading-relaxed">
                    Exclusive bridal makeup masterclasses taught by Saroj Sharma. Learn the secrets behind the luxury SLBA look. Sign up for early access to the upcoming digital curriculum.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="px-8 py-3 bg-gold text-black-matte text-xs uppercase tracking-widest hover:bg-ivory transition-colors">
                        Join Waitlist
                    </button>
                    <button className="px-8 py-3 outline outline-1 outline-gold/50 text-gold text-xs uppercase tracking-widest hover:bg-gold/10 transition-colors">
                        View Syllabus
                    </button>
                </div>
            </div>
        </div>
    );
}
