import { Instagram as IgIcon } from "lucide-react";

// Placeholder for Instagram grid
const igPosts = [
    "/pretty-brides.jfif",
    "/sweety.png",
    "/farshi.jfif",
    "/bridal2.jfif",
    "/Ethereal-Glow.jfif",
];

export default function Instagram() {
    // Duplicate array multiple times for infinite scrolling effect
    const marqueeImages = [...igPosts, ...igPosts, ...igPosts, ...igPosts];

    return (
        <section className="py-24 bg-black-matte border-t border-gold/10 relative overflow-hidden" id="social">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 mb-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <h2 className="text-3xl font-serif mb-4 flex items-center justify-center gap-2">
                            <IgIcon size={24} /> @SLBA_Official
                        </h2>
                        <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ivory/60 font-medium">
                            The <span className="italic text-gold">SLBA</span> List
                        </h3>
                    </div>
                    <a href="#" className="flex items-center text-xs uppercase tracking-[0.2em] text-ivory hover:text-gold transition-colors duration-300 group">
                        <span className="mr-4">Explore Gallery</span>
                        <span className="w-12 h-[1px] bg-ivory group-hover:bg-gold overflow-hidden relative">
                            <span className="absolute top-0 right-0 w-2 h-0.5 bg-ivory group-hover:bg-gold rotate-45 origin-right"></span>
                        </span>
                    </a>
                </div>
            </div>

            {/* Infinite Marquee Wrapper */}
            <div className="relative w-full overflow-hidden flex py-8 group">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        animation: marquee 30s linear infinite;
                    }
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                `}} />

                <div className="flex animate-marquee gap-4 px-2 w-max">
                    {marqueeImages.map((post, i) => (
                        <a
                            key={i}
                            href="#"
                            className="relative overflow-hidden w-64 md:w-80 h-80 md:h-[400px] shrink-0 group/card cursor-pointer"
                        >
                            <img
                                src={post}
                                alt="Instagram Post"
                                className="w-full h-full object-cover scale-100 group-hover/card:scale-110 transition-transform duration-[1.5s] ease-out brightness-75 group-hover/card:brightness-100"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black-matte/80 via-transparent to-black-matte/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
                                <div className="self-end bg-black-matte/50 backdrop-blur-md border border-gold/30 rounded-full p-2 translate-y-[-20px] group-hover/card:translate-y-0 transition-transform duration-500">
                                    <IgIcon className="text-ivory w-4 h-4" />
                                </div>
                                <div className="translate-y-[20px] group-hover/card:translate-y-0 transition-transform duration-500">
                                    <p className="text-xs text-gold uppercase tracking-widest mb-1">Shop The Look</p>
                                    <h4 className="text-ivory font-serif">Bridal Glamour</h4>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
