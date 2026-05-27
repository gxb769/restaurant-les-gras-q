"use client";

import { useEffect, useState } from "react";

/**
 * Rideau sombre qui descend puis remonte pour révéler la page.
 * Effet théâtral gastronomique — s'efface en 780ms au chargement initial.
 */
export default function PageTransition() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 60);
    const t2 = setTimeout(() => setPhase("done"), 900);
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
        transform: phase === "out" ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 780ms cubic-bezier(0.76, 0, 0.24, 1)",
        pointerEvents: "none",
      }}
    />
  );
}
