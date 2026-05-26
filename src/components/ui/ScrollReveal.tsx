"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /**
   * "up"    — fade + rise douce (texte corps, badges, cartes)
   * "clip"  — clip-path wipe depuis le bas sans opacity (titres H2/H3 — signature gastronomique)
   * "image" — scale-in + fade pour les photos
   * "none"  — opacity seule
   */
  direction?: "up" | "clip" | "image" | "none";
};

const variants = {
  up: {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  // Curtain lift — le texte monte à travers un masque, aucun fade
  // inset(100% 0 0 0) → inset(0 0 0 0) : le bas clip disparaît, le texte monte
  clip: {
    hidden: { clipPath: "inset(0 0 100% 0)", opacity: 1 },
    visible: { clipPath: "inset(0 0 0% 0)",   opacity: 1 },
  },
  // Photo reveal : légère montée + déclip depuis le bas
  image: {
    hidden: { clipPath: "inset(0 0 12% 0)", opacity: 0, scale: 1.04 },
    visible: { clipPath: "inset(0 0 0% 0)",  opacity: 1, scale: 1    },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

const timings = {
  up:    { duration: 0.7,  ease: [0.22, 1, 0.36, 1] as const },
  clip:  { duration: 1.0,  ease: [0.16, 1, 0.3,  1] as const }, // expo out — lourd et cinématique
  image: { duration: 0.9,  ease: [0.16, 1, 0.3,  1] as const },
  none:  { duration: 0.6,  ease: [0.22, 1, 0.36, 1] as const },
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: Props) {
  const { duration, ease } = timings[direction];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px 0px" }}
      variants={variants[direction]}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
