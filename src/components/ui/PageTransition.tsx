"use client";

import { useEffect, useState } from "react";

/**
 * Rideau sombre qui s'efface rapidement pour révéler la page.
 * Durée réduite à 300ms pour ne pas pénaliser le LCP.
 */
export default function PageTransition() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 20);
    const t2 = setTimeout(() => setPhase("done"), 360);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        background: "#0a0807",
        opacity: phase === "out" ? 0 : 1,
        transition: "opacity 300ms ease-out",
        pointerEvents: "none",
      }}
    />
  );
}
