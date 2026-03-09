"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1606180598824-780caba11c15?q=80&w=1000&auto=format&fit=crop", type: "portrait" },
    { src: "https://images.unsplash.com/photo-1512496015851-a1cbf5856ebf?q=80&w=1000&auto=format&fit=crop", type: "landscape" },
    { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop", type: "portrait" },
    { src: "https://images.unsplash.com/photo-1542458428-fbab8cb1f4dd?q=80&w=1000&auto=format&fit=crop", type: "portrait" },
    { src: "https://images.unsplash.com/photo-1596704017254-8c886616fc68?q=80&w=1000&auto=format&fit=crop", type: "landscape" },
    { src: "https://images.unsplash.com/photo-1544607310-449e3cc43cda?q=80&w=1000&auto=format&fit=crop", type: "portrait" },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-24 bg-ivory text-black-matte border-t border-black-matte/10 relative" id="gallery">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6">Visual Story</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black-matte leading-tight">
                            Aura <span className="italic text-gold">Transformations</span>
                        </h3>
                    </div>
                    <p className="text-black-matte/60 font-sans font-light max-w-sm text-sm">
                        Explore our curated gallery of bridal transformations, editorial stylings, and pure artistry.
                    </p>
                </div>

                {/* CSS Grid Masonry */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="break-inside-avoid relative group cursor-pointer overflow-hidden border border-black-matte/5"
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <img
                                src={img.src}
                                alt="Gallery Transformation"
                                className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-black-matte/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <span className="text-ivory uppercase tracking-[0.2em] text-xs border border-ivory/50 px-4 py-2 backdrop-blur-sm">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black-matte/95 backdrop-blur-md p-4 md:p-12">
                    <button
                        className="absolute top-8 right-8 text-ivory/50 hover:text-ivory transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} strokeWidth={1} />
                    </button>

                    <motion.img
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        src={selectedImage}
                        alt="Expanded Gallery Image"
                        className="max-w-full max-h-full object-contain shadow-2xl"
                    />
                </div>
            )}
        </section>
    );
}
