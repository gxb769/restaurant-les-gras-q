"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** "up" — fade + rise (default) | "clip" — clip-path wipe from bottom | "none" — fade only */
  direction?: "up" | "clip" | "none";
};

const variants = {
  up: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  clip: {
    hidden: { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
    visible: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px 0px" }}
      variants={variants[direction]}
      transition={{
        duration: direction === "clip" ? 0.6 : 0.45,
        delay,
        ease: direction === "clip" ? [0.16, 1, 0.3, 1] : [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
