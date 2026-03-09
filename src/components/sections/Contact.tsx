import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-24 bg-ivory text-black-matte border-t border-black-matte/5" id="contact">
            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Contact Info */}
                <div className="w-full lg:w-1/3">
                    <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6">Connect</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-black-matte leading-tight mb-12">
                        Visit <span className="italic text-gold">Aura</span>
                    </h3>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <MapPin className="text-gold shrink-0 mt-1" strokeWidth={1} />
                            <div>
                                <h4 className="font-serif text-xl mb-2">The Studio</h4>
                                <p className="text-black-matte/60 font-light text-sm leading-relaxed">
                                    123 Luxury Avenue, Penthouse Level<br />
                                    Beverly Hills, CA 90210
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Phone className="text-gold shrink-0 mt-1" strokeWidth={1} />
                            <div>
                                <h4 className="font-serif text-xl mb-2">Concierge</h4>
                                <p className="text-black-matte/60 font-light text-sm mb-1">+1 (800) 123-4567</p>
                                <p className="text-black-matte/40 font-light text-xs">WhatsApp Business Available</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Mail className="text-gold shrink-0 mt-1" strokeWidth={1} />
                            <div>
                                <h4 className="font-serif text-xl mb-2">Inquiries</h4>
                                <p className="text-black-matte/60 font-light text-sm">experiences@aurabridal.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Clock className="text-gold shrink-0 mt-1" strokeWidth={1} />
                            <div>
                                <h4 className="font-serif text-xl mb-2">Hours</h4>
                                <p className="text-black-matte/60 font-light text-sm">Tuesday - Sunday: 10AM - 8PM<br />Monday: Closed for VIP Events</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="w-full lg:w-2/3 h-[500px] bg-black-matte/5 relative group overflow-hidden border border-black-matte/10">
                    <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Beverly+Hills,CA&zoom=14&size=800x600&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&key=YOUR_API_KEY')] bg-cover bg-center grayscale opacity-80 group-hover:grayscale-0 transition-all duration-1000"></div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Custom Map Pin Placeholder */}
                        <div className="w-12 h-12 bg-gold text-black-matte flex items-center justify-center rounded-full shadow-2xl relative">
                            <h2 className="font-serif text-xs font-bold">AURA</h2>
                            <div className="absolute -bottom-2 border-t-8 border-x-8 border-transparent border-t-gold"></div>
                            {/* Pulse effect */}
                            <div className="absolute inset-0 rounded-full border border-gold animate-ping"></div>
                        </div>
                    </div>

                    {/* Overlay text since we don't have a real map key loaded */}
                    <div className="absolute bottom-6 left-6 bg-black-matte text-ivory p-4 shadow-xl backdrop-blur-md border border-gold/20">
                        <p className="text-xs uppercase tracking-[0.2em] text-gold mb-1">Global Flagship</p>
                        <p className="font-serif text-lg">Beverly Hills</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
