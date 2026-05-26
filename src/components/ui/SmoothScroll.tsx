"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth scroll — cinematic config.
 * duration 1.4 + expo-out easing = lourd et naturel, pas floaty.
 * wheelMultiplier 0.85 = roue souris douce mais pas lente.
 * touch désactivé = la vitesse touch reste native (pas de lag mobile).
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      // expo out — accélération immédiate, décélération très progressive
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 0,   // touch reste 100% natif (pas de lag iOS)
    });

    // Supprime le scroll-behavior: smooth du CSS pour laisser Lenis gérer
    document.documentElement.style.setProperty("scroll-behavior", "auto");

    // Expose globally so Navbar can call lenis.scrollTo()
    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    let id: number;
    function raf(time: number) {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    }
    id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      document.documentElement.style.removeProperty("scroll-behavior");
      delete (window as Window & { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
