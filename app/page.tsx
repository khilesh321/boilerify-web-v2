"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StackSection from "@/components/StackSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyBoilerifySection from "@/components/WhyBoilerifySection";
import DocsSection from "@/components/DocsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ReactLenis from "lenis/react";
import { useEffect, useRef } from "react";

export default function Home() {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time);
    }

    const raf = (time: number) => {
      update(time);
      requestAnimationFrame(raf);
    };

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Grid Background */}
        <div className="fixed inset-0 grid-background opacity-100 pointer-events-none" />
        
        {/* Gradient Orbs */}
        <div className="fixed top-0 left-0 md:left-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-0 right-0 md:right-1/4 w-64 h-64 md:w-96 md:h-96 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Components */}
        <Navbar />
        <HeroSection />
        <StackSection />
        <HowItWorksSection />
        <WhyBoilerifySection />
        <DocsSection />
        <CTASection />
        <Footer />
      </div>
    </ReactLenis>
  );
}
