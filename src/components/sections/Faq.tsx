"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Props = { dict: Dictionary };

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-ink/[0.1] rounded-lg bg-white/[0.38] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full px-5 py-[18px] text-left text-espresso font-[800] flex justify-between items-center gap-4 select-none hover:bg-ink/[0.03] transition-colors duration-150"
      >
        <span>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 text-[20px] leading-none text-gold"
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
            <p className="px-5 pb-5 pt-1 m-0 text-ink/[0.68] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq({ dict }: Props) {
  const f = dict.faq;

  return (
    <section className="bg-cream py-[104px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-[0.8fr_1.2fr] gap-11 max-md:grid-cols-1">

        <ScrollReveal>
          <div className="inline-flex items-center gap-[10px] text-gold text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-4">
            {f.eyebrow}
          </div>
          <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(48px,7vw,88px)] mb-5">
            {f.title}
          </h2>
          <p className="text-ink/[0.72] text-[18px]">{f.text}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="grid gap-3 content-start">
          {f.items.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
