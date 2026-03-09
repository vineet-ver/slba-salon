import { Instagram as IgIcon } from "lucide-react";

// Placeholder for Instagram grid
const igPosts = [
    "https://images.unsplash.com/photo-1542458428-fbab8cb1f4dd?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606180598824-780caba11c15?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512496015851-a1cbf5856ebf?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596704017254-8c886616fc68?q=80&w=600&auto=format&fit=crop",
];

export default function Instagram() {
    return (
        <section className="py-24 bg-black-matte border-t border-gold/5" id="social">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 flex items-center gap-2">
                            <IgIcon size={16} /> @AuraBridal
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-serif text-ivory leading-tight">
                            Join The <span className="italic text-gold">Aura</span> List
                        </h3>
                    </div>
                    <a href="#" className="flex items-center text-xs uppercase tracking-[0.2em] text-ivory hover:text-gold transition-colors duration-300 group">
                        <span className="mr-4">Follow Us</span>
                        <span className="w-12 h-[1px] bg-ivory group-hover:bg-gold overflow-hidden relative">
                            <span className="absolute top-0 right-0 w-2 h-0.5 bg-ivory group-hover:bg-gold rotate-45 origin-right"></span>
                        </span>
                    </a>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    {igPosts.map((post, i) => (
                        <a
                            key={i}
                            href="#"
                            className={`group relative overflow-hidden aspect-square ${i === 4 ? 'hidden lg:block' : ''}`}
                        >
                            <img
                                src={post}
                                alt="Instagram Post"
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black-matte/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                <IgIcon className="text-ivory w-8 h-8 scale-50 group-hover:scale-100 transition-transform duration-500 ease-out" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
