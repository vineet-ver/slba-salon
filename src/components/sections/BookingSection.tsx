"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, ChevronRight, Check } from "lucide-react";

const steps = ["Service", "Stylist", "Date & Time", "Details"];

export default function BookingSection() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedService, setSelectedService] = useState("");

    const nextStep = () => setCurrentStep(Math.min(currentStep + 1, 4));
    const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 1));

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

                    {/* Step Content Area */}
                    <div className="min-h-[300px] relative">
                        <AnimatePresence mode="wait">
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                    {["Bridal Makeup", "Party Styling", "Hair Color & Spa", "Luxury Facial", "Consultation"].map((srv) => (
                                        <button
                                            key={srv}
                                            onClick={() => setSelectedService(srv)}
                                            className={`p-6 border text-left transition-all duration-300 ${selectedService === srv
                                                ? "border-gold bg-gold/5"
                                                : "border-gold/10 hover:border-gold/50 bg-transparent"
                                                }`}
                                        >
                                            <h4 className="text-ivory font-serif text-lg mb-1">{srv}</h4>
                                            <p className="text-gold/60 text-xs tracking-widest uppercase">Select</p>
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                >
                                    {[
                                        { name: "Elena Rostova", role: "Lead Director", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
                                        { name: "Marcus Sterling", role: "Senior Stylist", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" },
                                        { name: "Any Available Stylist", role: "Aura Team", img: "" }
                                    ].map((stylist, i) => (
                                        <button key={i} className="p-6 border border-gold/10 hover:border-gold/50 flex flex-col items-center text-center transition-colors">
                                            {stylist.img ? (
                                                <img src={stylist.img} alt={stylist.name} className="w-16 h-16 rounded-full object-cover mb-4 grayscale hover:grayscale-0 transition-all" />
                                            ) : (
                                                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4"><User /></div>
                                            )}
                                            <h4 className="text-ivory font-serif">{stylist.name}</h4>
                                            <p className="text-gold/60 text-[10px] uppercase tracking-widest mt-1">{stylist.role}</p>
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {currentStep === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex flex-col md:flex-row gap-8"
                                >
                                    <div className="flex-1 p-8 border border-gold/10 flex flex-col items-center justify-center text-ivory/50 cursor-pointer hover:border-gold/50 hover:text-gold transition-colors">
                                        <Calendar size={32} className="mb-4" strokeWidth={1} />
                                        <p className="font-serif text-lg">Select Date</p>
                                        <p className="text-xs tracking-widest uppercase mt-2">Interactive Calendar UI</p>
                                    </div>
                                    <div className="flex-1 p-8 border border-gold/10 flex flex-col items-center justify-center text-ivory/50 cursor-pointer hover:border-gold/50 hover:text-gold transition-colors">
                                        <Clock size={32} className="mb-4" strokeWidth={1} />
                                        <p className="font-serif text-lg">Select Time</p>
                                        <p className="text-xs tracking-widest uppercase mt-2">Available Slots UI</p>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6 max-w-xl mx-auto"
                                >
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
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
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

                </div>
            </div>
        </section>
    );
}
