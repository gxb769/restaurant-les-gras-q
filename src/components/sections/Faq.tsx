"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Props = { dict: Dictionary };

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={[
      "border rounded-xl overflow-hidden transition-all duration-300",
      open
        ? "border-gold/25 shadow-[0_4px_24px_rgba(196,160,93,0.08)]"
        : "border-ink/[0.09] hover:border-gold/15 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]",
    ].join(" ")}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full px-6 py-[20px] text-left text-espresso font-[700] text-[15px] flex justify-between items-center gap-4 select-none transition-colors duration-150 hover:bg-ink/[0.02]"
      >
        <span className={open ? "text-espresso" : "text-espresso/90"}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 w-[28px] h-[28px] rounded-full border border-gold/30 flex items-center justify-center text-[18px] leading-none text-gold bg-gold/[0.04] flex-shrink-0"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-6 pb-6 pt-0 m-0 text-ink/[0.62] text-[14px] leading-relaxed border-t border-ink/[0.05]">
              <span className="block pt-4">{a}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq({ dict }: Props) {
  const f = dict.faq;

  return (
    <section className="bg-cream py-[120px] max-sm:py-[64px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-[0.8fr_1.2fr] gap-14 max-md:grid-cols-1">

        <ScrollReveal>
          <div className="inline-flex items-center gap-[10px] text-gold text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-5">
            {f.eyebrow}
          </div>
          <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(44px,6vw,82px)] mb-6">
            {f.title}
          </h2>
          <p className="text-ink/[0.62] text-[17px] leading-relaxed">{f.text}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="flex flex-col gap-3 content-start">
          {f.items.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
