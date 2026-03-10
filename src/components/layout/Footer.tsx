import Link from "next/link";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black-matte border-t border-gold/10 pt-24 pb-12 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-gold/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-4xl font-serif tracking-[0.2em] text-gold mb-2">S L B A</h2>
                        <h3 className="text-xs uppercase tracking-widest text-gold/80 mb-6">Saroj Luxe Beauty Atelier</h3>
                        <p className="text-ivory/60 text-sm leading-relaxed mb-6 font-sans font-light">
                            Where elegance meets flawless artistry by Saroj Sharma. A global luxury bridal makeup and styling experience for the modern bride.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/sweetyysharma2192?igsh=bGtyaHNsNzV5dGJh" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-ivory hover:border-gold hover:text-gold transition-all duration-300">
                                <Instagram size={18} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-ivory hover:border-gold hover:text-gold transition-all duration-300">
                                <Facebook size={18} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-ivory hover:border-gold hover:text-gold transition-all duration-300">
                                <Twitter size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm tracking-widest uppercase text-ivory mb-6 font-medium">Explore</h3>
                        <ul className="space-y-4">
                            {["Home", "Signature Bridal", "Services", "Portfolio", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-ivory/60 hover:text-gold text-sm transition-colors duration-300 block w-max">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm tracking-widest uppercase text-ivory mb-6 font-medium">Contact</h3>
                        <ul className="space-y-4 text-ivory/60 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} strokeWidth={1.5} className="text-gold shrink-0 mt-0.5" />
                                <span>Najafgarh, Dwarka, Noida, South West Delhi</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} strokeWidth={1.5} className="text-gold shrink-0" />
                                <span>+91 70115 59575</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} strokeWidth={1.5} className="text-gold shrink-0" />
                                <span>sweetysharma24215@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-sm tracking-widest uppercase text-ivory mb-6 font-medium">Exclusive Offers</h3>
                        <p className="text-ivory/60 text-sm mb-4 font-light">Subscribe to receive exclusive beauty insights and private invitations.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-transparent border-b border-gold/30 text-ivory text-sm py-3 px-0 focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-ivory/30"
                            />
                            <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gold uppercase tracking-widest text-xs hover:text-ivory transition-colors duration-300">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between relative z-10">
                    <p className="text-ivory/40 text-xs font-light mb-4 md:mb-0">
                        © {new Date().getFullYear()} SLBA - Saroj Luxe Beauty Atelier. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-xs text-ivory/40">
                        <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
