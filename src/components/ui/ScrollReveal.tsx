"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "clip" | "image" | "none";
};

// CSS transition values per direction — no Framer Motion dependency
const HIDDEN: Record<string, React.CSSProperties> = {
  up:    { opacity: 0, transform: "translateY(36px)" },
  clip:  { clipPath: "inset(0 0 100% 0)", opacity: 1 },
  image: { opacity: 0, transform: "scale(1.04)", clipPath: "inset(0 0 12% 0)" },
  none:  { opacity: 0 },
};
const VISIBLE: React.CSSProperties = {
  opacity: 1, transform: "translateY(0) scale(1)", clipPath: "inset(0 0 0% 0)",
};
const DURATION: Record<string, number> = {
  up: 0.7, clip: 1.0, image: 0.9, none: 0.6,
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible on SSR — hide only after client mount to avoid CLS
  const [state, setState] = useState<"ssr" | "hidden" | "visible">("ssr");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Immediately mark as hidden (JS loaded, start from hidden state)
    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { rootMargin: "-80px 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dur = DURATION[direction];
  const ease = direction === "clip" || direction === "image"
    ? "cubic-bezier(0.16,1,0.3,1)"
    : "cubic-bezier(0.22,1,0.36,1)";

  const style: React.CSSProperties =
    state === "ssr"    ? {} :
    state === "hidden" ? HIDDEN[direction] :
    {
      ...VISIBLE,
      transition: `opacity ${dur}s ${ease} ${delay}s, transform ${dur}s ${ease} ${delay}s, clip-path ${dur}s ${ease} ${delay}s`,
    };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
