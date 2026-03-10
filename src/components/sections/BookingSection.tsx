"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, ChevronRight, Check } from "lucide-react";

const steps = ["Service", "Stylist", "Date & Time", "Details"];

export default function BookingSection() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedService, setSelectedService] = useState("");
    const [selectedStylist, setSelectedStylist] = useState("");
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);

    const nextStep = () => {
        if (currentStep === 4) {
            setIsConfirmed(true);
            return;
        }
        setCurrentStep(Math.min(currentStep + 1, 4));
    }
    const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 1));

    // Mock dates for calendar
    const today = new Date();
    const mockDates = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(today);
        d.setDate(today.getDate() + i + 1);
        return {
            id: i,
            day: d.toLocaleDateString('en-US', { weekday: 'short' }),
            date: d.getDate(),
            month: d.toLocaleDateString('en-US', { month: 'short' })
        };
    });

    const mockTimes = ["10:00 AM", "11:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"];

    return (
        <section className="py-24 bg-black-matte border-t border-gold/10 relative overflow-hidden" id="booking">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">Reservations</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-ivory">Book Your <span className="italic text-gold">Experience</span></h3>
                </div>

                <div className="bg-black-matte/80 border border-gold/20 p-8 md:p-12 backdrop-blur-md shadow-2xl relative">

                    {/* Progress Indicator */}
                    {!isConfirmed ? (
                        <div className="flex justify-between items-center mb-12 relative">
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gold/10 -z-10"></div>
                            <div
                                className="absolute top-1/2 left-0 h-[2px] bg-gold -z-10 transition-all duration-500 ease-out"
                                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                            ></div>

                            {steps.map((step, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-serif transition-colors duration-500 bg-black-matte border ${currentStep > i + 1 ? "border-gold text-gold" :
                                        currentStep === i + 1 ? "border-gold bg-gold text-black-matte" :
                                            "border-gold/30 text-gold/30"
                                        }`}>
                                        {currentStep > i + 1 ? <Check size={16} /> : i + 1}
                                    </div>
                                    <span className={`text-[10px] uppercase tracking-widest mt-3 transition-colors duration-500 ${currentStep >= i + 1 ? "text-gold" : "text-black-matte/40"
                                        }`}>{step}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center mb-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-20 h-20 rounded-full bg-gold/10 border border-gold flex items-center justify-center mx-auto mb-6 text-gold"
                            >
                                <Check size={32} />
                            </motion.div>
                            <h4 className="font-serif text-3xl text-gold mb-2">Reservation Confirmed</h4>
                            <p className="text-ivory/60 text-sm">Your luxury experience awaits. A confirmation has been sent.</p>
                        </div>
                    )}

                    {/* Step Content Area */}
                    <div className="min-h-[300px] relative">
                        <AnimatePresence mode="wait">
                            {currentStep === 1 && !isConfirmed && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                    {[
                                        { name: "Bridal Makeup", duration: "180 min", price: "₹25,000+" },
                                        { name: "Party Styling", duration: "90 min", price: "₹8,000+" },
                                        { name: "Hair Color & Spa", duration: "120 min", price: "₹12,000+" },
                                        { name: "Luxury Facial", duration: "60 min", price: "₹15,000+" },
                                        { name: "Consultation", duration: "30 min", price: "Complimentary" }
                                    ].map((srv) => (
                                        <button
                                            key={srv.name}
                                            onClick={() => setSelectedService(srv.name)}
                                            className={`p-6 border text-left transition-all duration-300 flex flex-col justify-between h-32 ${selectedService === srv.name
                                                ? "border-gold bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                                                : "border-gold/10 hover:border-gold/50 bg-transparent"
                                                }`}
                                        >
                                            <div className="flex justify-between items-start">
                                                <h4 className="text-ivory font-serif text-lg leading-tight w-2/3">{srv.name}</h4>
                                                {selectedService === srv.name && <Check size={16} className="text-gold" />}
                                            </div>
                                            <div className="flex justify-between items-end mt-4">
                                                <p className="text-ivory/50 text-[10px] tracking-widest uppercase">{srv.duration}</p>
                                                <p className="text-gold/80 text-[10px] tracking-widest uppercase font-medium">{srv.price}</p>
                                            </div>
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {currentStep === 2 && !isConfirmed && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                >
                                    {[
                                        { name: "Saroj Sharma", role: "Lead Director", img: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e42?q=80&w=200&auto=format&fit=crop" },
                                        { name: "Marcus Sterling", role: "Senior Stylist", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" },
                                        { name: "Any Stylist", role: "SLBA Team", img: "" }
                                    ].map((stylist, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedStylist(stylist.name)}
                                            className={`p-6 border flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden ${selectedStylist === stylist.name ? "border-gold bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.1)]" : "border-gold/10 hover:border-gold/50"}`}
                                        >
                                            {selectedStylist === stylist.name && <div className="absolute top-4 right-4 text-gold"><Check size={14} /></div>}
                                            {stylist.img ? (
                                                <img src={stylist.img} alt={stylist.name} className={`w-16 h-16 rounded-full object-cover mb-4 transition-all duration-500 ${selectedStylist === stylist.name ? "grayscale-0 ring-2 ring-gold ring-offset-2 ring-offset-black-matte" : "grayscale opacity-80"}`} />
                                            ) : (
                                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${selectedStylist === stylist.name ? "bg-gold/20 text-gold ring-2 ring-gold ring-offset-2 ring-offset-black-matte" : "bg-gold/5 text-gold/50"}`}><User size={24} /></div>
                                            )}
                                            <h4 className={`text-ivory font-serif transition-colors ${selectedStylist === stylist.name ? "text-gold" : ""}`}>{stylist.name}</h4>
                                            <p className="text-ivory/50 text-[10px] uppercase tracking-widest mt-1">{stylist.role}</p>
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {currentStep === 3 && !isConfirmed && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex flex-col gap-8"
                                >
                                    {/* Date Selection Horizontal Scroll */}
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-widest text-gold mb-4 flex items-center gap-2"><Calendar size={12} /> Select Date in {today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h4>
                                        <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4 border-b border-gold/10">
                                            {mockDates.map((md) => (
                                                <button
                                                    key={md.id}
                                                    onClick={() => setSelectedDate(md.id)}
                                                    className={`shrink-0 flex flex-col items-center justify-center w-20 h-24 border transition-all duration-300 ${selectedDate === md.id ? "border-gold bg-gold/10" : "border-gold/10 hover:border-gold/50"}`}
                                                >
                                                    <span className="text-[10px] uppercase tracking-widest text-ivory/50 mb-1">{md.day}</span>
                                                    <span className={`font-serif text-2xl mb-1 ${selectedDate === md.id ? "text-gold" : "text-ivory"}`}>{md.date}</span>
                                                    <span className="text-[9px] uppercase tracking-widest text-ivory/30">{md.month}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Time Slots Grid */}
                                    <AnimatePresence>
                                        {selectedDate !== null && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <h4 className="text-[10px] uppercase tracking-widest text-gold mb-4 flex items-center gap-2"><Clock size={12} /> Available Time Slots</h4>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    {mockTimes.map((time) => (
                                                        <button
                                                            key={time}
                                                            onClick={() => setSelectedTime(time)}
                                                            className={`py-3 border text-xs tracking-widest transition-all duration-300 ${selectedTime === time ? "border-gold bg-gold text-black-matte font-medium" : "border-gold/20 text-ivory hover:border-gold hover:text-gold"}`}
                                                        >
                                                            {time}
                                                        </button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )}

                            {currentStep === 4 && !isConfirmed && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex flex-col lg:flex-row gap-12"
                                >
                                    <div className="flex-1 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="text-[10px] uppercase tracking-widest text-gold mb-2 block">First Name</label>
                                                <input type="text" className="w-full bg-transparent border-b border-gold/30 text-ivory py-2 focus:outline-none focus:border-gold" />
                                            </div>
                                            <div>
                                                <label className="text-[10px] uppercase tracking-widest text-gold mb-2 block">Last Name</label>
                                                <input type="text" className="w-full bg-transparent border-b border-gold/30 text-ivory py-2 focus:outline-none focus:border-gold" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-widest text-gold mb-2 block">Email Address</label>
                                            <input type="email" className="w-full bg-transparent border-b border-gold/30 text-ivory py-2 focus:outline-none focus:border-gold" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-widest text-gold mb-2 block">Special Requests</label>
                                            <textarea className="w-full bg-transparent border-b border-gold/30 text-ivory py-2 focus:outline-none focus:border-gold resize-none h-20"></textarea>
                                        </div>
                                    </div>

                                    <div className="lg:w-1/3 bg-gold/5 border border-gold/10 p-6 flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-ivory font-serif text-lg mb-6 border-b border-gold/20 pb-4">Booking Summary</h4>

                                            <div className="space-y-4">
                                                <div className="flex justify-between items-start">
                                                    <span className="text-gold/60 text-xs uppercase tracking-widest">Service</span>
                                                    <span className="text-ivory text-sm text-right">{selectedService || "Not Selected"}</span>
                                                </div>
                                                <div className="flex justify-between items-start">
                                                    <span className="text-gold/60 text-xs uppercase tracking-widest">Stylist</span>
                                                    <span className="text-ivory text-sm text-right">{selectedStylist || "Not Selected"}</span>
                                                </div>
                                                <div className="flex justify-between items-start">
                                                    <span className="text-gold/60 text-xs uppercase tracking-widest">Date & Time</span>
                                                    <span className="text-ivory text-sm text-right">
                                                        {selectedDate !== null ? mockDates.find(d => d.id === selectedDate)?.month + " " + mockDates.find(d => d.id === selectedDate)?.date : "Not Selected"}
                                                        {selectedTime ? `, ${selectedTime}` : ""}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    {!isConfirmed && (
                        <div className="flex justify-between mt-12 pt-8 border-t border-gold/10">
                            <button
                                onClick={prevStep}
                                className={`text-xs uppercase tracking-[0.2em] transition-colors ${currentStep === 1 ? 'text-transparent pointer-events-none' : 'text-ivory/60 hover:text-ivory'}`}
                            >
                                Back
                            </button>
                            <button
                                onClick={nextStep}
                                className="flex items-center text-xs uppercase tracking-[0.2em] bg-gold text-black-matte px-8 py-3 hover:bg-ivory transition-colors"
                            >
                                {currentStep === 4 ? "Confirm Booking" : "Continue"} <ChevronRight size={14} className="ml-2" />
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
