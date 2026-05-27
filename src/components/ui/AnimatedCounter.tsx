"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** The numeric target, e.g. 4.4 or 480 */
  to: number;
  /** Number of decimal places shown, e.g. 1 for "4,4" */
  decimals?: number;
  /** Delay before counting starts (seconds) */
  delay?: number;
  className?: string;
};

/** Ease-out cubic — snappy start, gentle landing */
function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Counts from 0 to `to` when scrolled into view.
 * Uses native IntersectionObserver + requestAnimationFrame — zero runtime overhead.
 * Decimal separator is a comma (French convention).
 */
export default function AnimatedCounter({ to, decimals = 0, delay = 0, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const DURATION = 1400; // ms — matches previous spring feel

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        let startTime: number | null = null;
        const delayMs = delay * 1000;

        const tick = (now: number) => {
          if (startTime === null) startTime = now;
          const elapsed = now - startTime - delayMs;
          if (elapsed < 0) {
            rafRef.current = requestAnimationFrame(tick);
            return;
          }
          const progress = Math.min(elapsed / DURATION, 1);
          setValue(to * easeOut(progress));
          if (progress < 1) {
            rafRef.current = requestAnimationFrame(tick);
          } else {
            setValue(to); // ensure exact final value
          }
        };

        rafRef.current = requestAnimationFrame(tick);
      },
      { rootMargin: "-80px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [to, delay]);

  return (
    <span ref={ref} className={className}>
      {value.toFixed(decimals).replace(".", ",")}
    </span>
  );
}
