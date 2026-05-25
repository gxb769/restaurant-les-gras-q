"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Initialises Lenis smooth scroll globally.
 * Mounted once inside the root layout — no wrapper div needed.
 * Also patches navbar anchor clicks so they use lenis.scrollTo().
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.68,
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic-out — snappy, not floaty
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.6,
    });

    // Expose globally so Navbar can call lenis.scrollTo()
    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      delete (window as Window & { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
