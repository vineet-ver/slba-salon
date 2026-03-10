"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, SlidersHorizontal, ArrowLeftRight } from "lucide-react";

const categories = ["All", "Bridal", "Editorial", "Glamour"];

const galleryImages = [
    { id: 1, category: "Bridal", afterSrc: "/Ethereal-Glow.jpg", beforeSrc: "/Ethereal-Glow.jpg" },
    { id: 2, category: "Editorial", afterSrc: "thai-glam-makeup.jfif", beforeSrc: "/thai-glam-makeup.jfif" },
    { id: 3, category: "Bridal", afterSrc: "/bridal.jfif", beforeSrc: "/bridal.jfif" },
    { id: 4, category: "Glamour", afterSrc: "/farshi.jfif", beforeSrc: "/farshi.jfif" },
    { id: 5, category: "Editorial", afterSrc: "/pretty-brides.jfif", beforeSrc: "/pretty-brides.jfif" },
    { id: 6, category: "Glamour", afterSrc: "/bridal2.jfif", beforeSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
    const [filter, setFilter] = useState("All");
    const [sliderPos, setSliderPos] = useState(50); // For Before/After slider inside lightbox
    const [isHoveringLightbox, setIsHoveringLightbox] = useState(false);

    const filteredImages = filter === "All" ? galleryImages : galleryImages.filter(img => img.category === filter);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isHoveringLightbox) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        setSliderPos((x / rect.width) * 100);
    };

    return (
        <section className="py-24 bg-ivory text-black-matte border-t border-black-matte/10 relative" id="gallery">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div>
                        <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6">Visual Story</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black-matte leading-tight">
                            The <span className="italic text-gold">Transformations</span>
                        </h3>
                    </div>
                    <p className="text-black-matte/60 font-sans font-light max-w-sm text-sm">
                        Witness the artistry. Drag the slider in the expanded view to experience the before & after journey.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex items-center space-x-6 mb-12 overflow-x-auto no-scrollbar pb-2">
                    <SlidersHorizontal size={16} className="text-gold shrink-0" />
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 whitespace-nowrap ${filter === cat ? "text-black-matte font-medium" : "text-black-matte/40 hover:text-black-matte/80"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence>
                        {filteredImages.map((img) => (
                            <motion.div
                                key={img.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="break-inside-avoid relative group cursor-pointer overflow-hidden border border-black-matte/5 bg-black-matte/5"
                                onClick={() => { setSelectedImage(img); setSliderPos(50); }}
                            >
                                <img
                                    src={img.afterSrc}
                                    alt="Transformation After"
                                    className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black-matte/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center backdrop-blur-[2px]">
                                    <ArrowLeftRight className="text-ivory mb-3 transform group-hover:scale-110 transition-transform duration-500" size={24} strokeWidth={1} />
                                    <span className="text-ivory uppercase tracking-[0.2em] text-[10px] border border-ivory/50 px-4 py-2 hover:bg-ivory hover:text-black-matte transition-colors duration-300">View Before & After</span>
                                </div>
                                <div className="absolute bottom-4 left-4 text-ivory text-[10px] uppercase tracking-widest bg-black-matte/50 px-3 py-1 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {img.category}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Interactive Before/After Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black-matte/95 backdrop-blur-md p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 bg-black-matte border border-gold/30 flex items-center justify-center rounded-full text-ivory hover:text-gold hover:border-gold transition-all duration-300 z-[200] cursor-pointer shadow-2xl"
                            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                        >
                            <X size={20} strokeWidth={2} />
                        </button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="relative w-full max-w-4xl max-h-[80vh] aspect-[4/3] md:aspect-[16/9] overflow-hidden shadow-2xl cursor-ew-resize select-none"
                            onMouseEnter={() => setIsHoveringLightbox(true)}
                            onMouseLeave={() => setIsHoveringLightbox(false)}
                            onMouseMove={handleMouseMove}
                            onClick={(e) => e.stopPropagation()}
                            onTouchMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
                                setSliderPos((x / rect.width) * 100);
                            }}
                        >
                            {/* Before Image (underneath) */}
                            <img
                                src={selectedImage.beforeSrc}
                                alt="Before"
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
                            />

                            {/* After Image (on top, clipped) */}
                            <img
                                src={selectedImage.afterSrc}
                                alt="After"
                                className="absolute inset-0 w-full h-full object-cover shadow-[2px_0_10px_rgba(0,0,0,0.5)] border-r-2 border-gold"
                                style={{
                                    clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
                                }}
                            />

                            {/* Slider Handle UI */}
                            <div
                                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-black-matte rounded-full flex items-center justify-center border-2 border-gold shadow-xl pointer-events-none"
                                style={{ left: `${sliderPos}%` }}
                            >
                                <ArrowLeftRight size={16} className="text-gold" />
                            </div>

                            <div className="absolute top-4 left-4 bg-black-matte/80 text-ivory/60 text-xs px-3 py-1 backdrop-blur-md uppercase tracking-widest border border-gold/20">
                                Before
                            </div>
                            <div className="absolute top-4 right-4 bg-black-matte/80 text-gold text-xs px-3 py-1 backdrop-blur-md uppercase tracking-widest border border-gold/50">
                                After
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
