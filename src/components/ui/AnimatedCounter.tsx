"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { useInView } from "framer-motion";

type Props = {
  /** The numeric target, e.g. 4.4 or 480 */
  to: number;
  /** Number of decimal places shown, e.g. 1 for "4,4" */
  decimals?: number;
  /** Delay before counting starts (seconds) */
  delay?: number;
  className?: string;
};

/**
 * Counts from 0 to `to` when scrolled into view.
 * Uses Framer Motion spring physics for an organic feel.
 * Decimal separator is a comma (French convention).
 */
export default function AnimatedCounter({ to, decimals = 0, delay = 0, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18, mass: 1 });
  const display = useTransform(spring, (v) =>
    v.toFixed(decimals).replace(".", ",")
  );

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      motionVal.set(to);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, to, delay, motionVal]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
