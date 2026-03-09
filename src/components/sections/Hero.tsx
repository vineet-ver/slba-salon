"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Lightformer, PerspectiveCamera, OrbitControls, useGLTF, Text } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    useEffect(() => {
        // Initial GSAP animation for text appearance
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
            ".hero-text-line",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, delay: 0.5 }
        ).fromTo(
            ".hero-subtext",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=1"
        ).fromTo(
            ".hero-cta",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=0.8"
        );
    }, []);

    return (
        <section
            ref={container}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black-matte"
        >
            {/* 3D Canvas Background */}
            <div className="absolute inset-0 z-0">
                <Canvas shadows camera={{ position: [0, 0, 8], fov: 35 }}>
                    <color attach="background" args={['#0F0F0F']} />

                    {/* Lighting Setup */}
                    <ambientLight intensity={0.6} />
                    <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} castShadow />
                    <pointLight position={[-10, -5, -10]} intensity={1} color="#D4AF37" />
                    <directionalLight position={[0, 10, 5]} intensity={0.5} color="#FFD1DC" />

                    {/* Luxury Lipstick Object */}
                    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
                        <group position={[-2.5, 1, -2]} scale={0.7} rotation={[0.5, 0.5, 0]}>
                            {/* Lipstick Base (Gold) */}
                            <mesh position={[0, -0.8, 0]} castShadow receiveShadow>
                                <cylinderGeometry args={[0.4, 0.4, 1.2, 32]} />
                                <meshPhysicalMaterial color="#D4AF37" metalness={1} roughness={0.1} clearcoat={1} clearcoatRoughness={0.1} />
                            </mesh>
                            {/* Lipstick Color (Deep Red/Rose) */}
                            <mesh position={[0, 0.5, 0]} castShadow>
                                <cylinderGeometry args={[0.35, 0.35, 1, 32]} />
                                <meshPhysicalMaterial color="#800020" metalness={0.1} roughness={0.4} clearcoat={0.5} />
                            </mesh>
                            {/* Lipstick Tip */}
                            <mesh position={[0, 1.1, 0]} rotation={[0, 0, -0.4]} castShadow>
                                <cylinderGeometry args={[0.35, 0.35, 0.4, 32]} />
                                <meshPhysicalMaterial color="#800020" metalness={0.1} roughness={0.4} clearcoat={0.5} />
                            </mesh>
                        </group>
                    </Float>

                    {/* Luxury Perfume Bottle Object */}
                    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                        <group position={[2.5, -0.5, -3]} scale={0.9} rotation={[-0.2, -0.5, 0.1]}>
                            {/* Glass Bottle */}
                            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                                <boxGeometry args={[1.5, 2, 0.8]} />
                                <meshPhysicalMaterial
                                    color="#FFFFF0"
                                    metalness={0.1}
                                    roughness={0.05}
                                    transmission={0.95} // High transmission for glass
                                    thickness={0.5}
                                    ior={1.52}
                                />
                            </mesh>
                            {/* Perfume Liquid Inner */}
                            <mesh position={[0, -0.2, 0]} scale={[0.9, 0.8, 0.8]}>
                                <boxGeometry args={[1.5, 2, 0.8]} />
                                <meshPhysicalMaterial color="#FFD1DC" transmission={0.5} opacity={0.6} transparent roughness={0} />
                            </mesh>
                            {/* Gold Cap */}
                            <mesh position={[0, 1.2, 0]} castShadow>
                                <cylinderGeometry args={[0.3, 0.3, 0.4, 32]} />
                                <meshPhysicalMaterial color="#D4AF37" metalness={1} roughness={0.1} />
                            </mesh>
                            <mesh position={[0, 1.6, 0]} castShadow>
                                <sphereGeometry args={[0.4, 32, 32]} />
                                <meshPhysicalMaterial color="#FFFFFF" metalness={0.1} roughness={0.1} clearcoat={1} transmission={0.2} />
                            </mesh>
                        </group>
                    </Float>

                    {/* Luxury Compact Powder Object */}
                    <Float speed={1} rotationIntensity={0.8} floatIntensity={1.2}>
                        <group position={[0, -2.5, -4]} scale={1.2} rotation={[1.2, 0, 0]}>
                            {/* Outer Case (Matte Black) */}
                            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                                <cylinderGeometry args={[1.5, 1.5, 0.2, 64]} />
                                <meshPhysicalMaterial color="#0F0F0F" metalness={0.2} roughness={0.8} clearcoat={0.1} />
                            </mesh>
                            {/* Gold Rim */}
                            <mesh position={[0, 0.1, 0]}>
                                <torusGeometry args={[1.4, 0.05, 16, 100]} />
                                <meshPhysicalMaterial color="#D4AF37" metalness={1} roughness={0.1} />
                            </mesh>
                            {/* Powder Inner */}
                            <mesh position={[0, 0.11, 0]}>
                                <cylinderGeometry args={[1.2, 1.2, 0.02, 64]} />
                                <meshPhysicalMaterial color="#E6D5C3" metalness={0} roughness={1} />
                            </mesh>
                        </group>
                    </Float>

                    {/* Environment styling */}
                    <Environment preset="studio">
                        <Lightformer intensity={3} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
                        <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} color="#D4AF37" />
                    </Environment>

                    {/* Add subtle camera movement based on mouse */}
                    <MouseCameraMovement />
                </Canvas>
            </div>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-transparent to-black-matte/40 z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none z-0" />

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20 pointer-events-none"
            >
                <div className="overflow-hidden py-2 mb-2">
                    <span className="hero-text-line block text-gold tracking-[0.3em] text-xs md:text-sm uppercase mb-4 font-medium">Global Luxury Bridal Studio</span>
                </div>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.1] mb-8 pointer-events-auto">
                    <div className="overflow-hidden py-1"><span className="hero-text-line block">LUXURY BRIDAL</span></div>
                    <div className="overflow-hidden py-1"><span className="hero-text-line block italic font-light text-gold text-glow">BEAUTY EXPERIENCE</span></div>
                </h1>

                <p className="hero-subtext text-ivory/80 font-sans font-light text-base md:text-lg max-w-2xl mx-auto mb-12 tracking-wide pointer-events-auto">
                    Where elegance meets flawless artistry. A highly curated, celebrity-level digital styling experience designed for the modern bride.
                </p>

                <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto">
                    <a href="#booking" className="px-8 py-4 bg-gold text-black-matte text-xs tracking-[0.2em] uppercase font-medium hover:bg-ivory hover:text-black-matte transition-all duration-500 min-w-[240px]">
                        Book Luxury Appointment
                    </a>
                    <a href="#portfolio" className="px-8 py-4 border border-gold/50 text-ivory text-xs tracking-[0.2em] uppercase font-medium hover:border-gold hover:text-gold transition-all duration-500 min-w-[240px] relative overflow-hidden group">
                        <span className="relative z-10">Explore Portfolio</span>
                        <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
                    </a>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
            >
                <span className="text-gold/60 text-[10px] uppercase tracking-[0.3em] mb-4">Discover</span>
                <div className="w-[1px] h-16 bg-gold/20 relative overflow-hidden">
                    <motion.div
                        className="w-full h-1/2 bg-gold absolute top-0"
                        animate={{ top: ["-50%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "circInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}

// Subtle camera movement responsive to mouse pointer
function MouseCameraMovement() {
    useFrame((state) => {
        // Linear interpolation for smooth tracking
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, (state.mouse.x * 0.5), 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (state.mouse.y * 0.5), 0.05);
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}
