"use client";

import { useEffect, useState } from "react";
import { PHONE, THEFORK_URL } from "@/lib/constants";

type Props = { callLabel: string; forkLabel: string };

export default function MobileBottomBar({ callLabel, forkLabel }: Props) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const check = () => setShown(window.scrollY > 300);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <div
      className={[
        "fixed inset-x-0 bottom-0 z-[80] sm:hidden",
        "transition-transform duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        shown ? "translate-y-0" : "translate-y-full",
      ].join(" ")}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-hidden={!shown}
    >
      <div className="mx-3 mb-3 p-[5px] flex gap-[5px] bg-ink/[0.88] backdrop-blur-[22px] border border-cream/[0.14] rounded-full shadow-[0_24px_64px_rgba(0,0,0,0.42)]">
        <a
          href={`tel:${PHONE}`}
          className="flex-1 flex items-center justify-center min-h-[50px] rounded-full text-[#211812] bg-gradient-to-r from-[#f5e4ba] to-gold text-[13px] font-[900] tracking-[0.06em] uppercase shadow-[0_4px_16px_rgba(196,160,93,0.28)] active:scale-[0.97] transition-transform duration-100"
        >
          {callLabel}
        </a>
        <a
          href={THEFORK_URL}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center min-h-[50px] rounded-full border border-cream/[0.20] text-cream/[0.88] text-[13px] font-[800] tracking-[0.04em] uppercase active:scale-[0.97] transition-transform duration-100"
        >
          {forkLabel}
        </a>
      </div>
    </div>
  );
}
