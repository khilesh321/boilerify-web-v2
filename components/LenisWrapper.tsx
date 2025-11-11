"use client";

import ReactLenis from "lenis/react";
import type { LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";

interface LenisWrapperProps {
  children: React.ReactNode;
}

export default function LenisWrapper({ children }: LenisWrapperProps) {
  const lenisRef = useRef<LenisRef>(null);

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
      {children}
    </ReactLenis>
  );
}
