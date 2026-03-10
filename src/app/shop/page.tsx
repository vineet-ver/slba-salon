import { ShoppingBag } from "lucide-react";

export default function ShopPlaceholder() {
    return (
        <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-black-matte text-ivory">
            <div className="text-center">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <ShoppingBag size={32} className="text-gold" />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif mb-6">SLBA <span className="italic text-gold">Boutique</span></h1>
                <p className="text-ivory/60 max-w-2xl mx-auto font-light">
                    The exclusive collection of luxury cosmetics, skincare, and beauty tools used by Saroj Sharma. Available for client purchase soon.
                </p>
                <button className="px-8 py-4 bg-gold text-black-matte text-xs uppercase tracking-widest hover:bg-ivory transition-colors">
                    Notify Me Upon Launch
                </button>
            </div>
        </div>
    );
}
