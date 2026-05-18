"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** "up" (default) slides from below; "none" fades only */
  direction?: "up" | "none";
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-72px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === "up" ? 28 : 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
