import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-24 bg-ivory text-black-matte border-t border-black-matte/5" id="contact">
            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Contact Info */}
                <div className="w-full lg:w-1/3">
                    <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6">Connect</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-black-matte leading-tight mb-12">
                        Visit <span className="italic text-gold">SLBA</span>
                    </h3>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <MapPin className="text-gold shrink-0 mt-1" strokeWidth={1} />
                            <div>
                                <h4 className="font-serif text-xl mb-2">Location</h4>
                                <p className="text-black-matte/60 font-light text-sm leading-relaxed">
                                    Najafgarh, Dwarka, Noida,<br />
                                    South West Delhi
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Phone className="text-gold shrink-0 mt-1" strokeWidth={1} />
                            <div>
                                <h4 className="font-serif text-xl mb-2">Concierge</h4>
                                <p className="text-black-matte/60 font-light text-sm mb-1">+91 70115 59575</p>
                                <p className="text-black-matte/40 font-light text-xs">WhatsApp Available</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Mail className="text-gold shrink-0 mt-1" strokeWidth={1} />
                            <div>
                                <h4 className="font-serif text-xl mb-2">Inquiries</h4>
                                <p className="text-black-matte/60 font-light text-sm">sweetysharma24215@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Clock className="text-gold shrink-0 mt-1" strokeWidth={1} />
                            <div>
                                <h4 className="font-serif text-xl mb-2">Working Hours</h4>
                                <p className="text-black-matte/60 font-light text-sm">Mon - Sat: 10AM - 6PM, 7PM - 9PM<br />Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Integration */}
                <div className="w-full lg:w-2/3 h-[500px] relative overflow-hidden border border-black-matte/10 group">
                    <iframe
                        title="SLBA Location"
                        src="https://maps.google.com/maps?q=Najafgarh,+Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                    ></iframe>

                    <div className="absolute bottom-6 left-6 bg-black-matte text-ivory p-4 shadow-xl backdrop-blur-md border border-gold/20 pointer-events-none">
                        <p className="text-xs uppercase tracking-[0.2em] text-gold mb-1">South West Delhi</p>
                        <p className="font-serif text-lg">Najafgarh</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
