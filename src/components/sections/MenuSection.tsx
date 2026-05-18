"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { menuCategories } from "@/lib/menuData";

type Props = { dict: Dictionary };
type TabKey = "all" | "starters" | "mains" | "desserts" | "wine";

const GLOW: Record<string, string> = {
  starters: "from-[rgba(196,160,93,0.10)]",
  mains:    "from-[rgba(120,60,69,0.14)]",
  desserts: "from-[rgba(100,123,95,0.10)]",
  wine:     "from-[rgba(90,70,120,0.12)]",
};

export default function MenuSection({ dict }: Props) {
  const m  = dict.menu;
  const fm = dict.fullMenu;
  const [tab, setTab] = useState<TabKey>("all");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "all",      label: m.tabs.all },
    { key: "starters", label: m.tabs.starters },
    { key: "mains",    label: m.tabs.mains },
    { key: "desserts", label: m.tabs.desserts },
    { key: "wine",     label: m.tabs.wine },
  ];

  const filtered = tab === "all" ? m.dishes : m.dishes.filter((d) => d.category === tab);

  return (
    <>
      {/* ────────────────────── LES SIGNATURES ────────────────────── */}
      <section id="menu" className="relative bg-espresso text-cream py-[104px] overflow-hidden">

        {/* Ambient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 w-[640px] h-[640px] rounded-full bg-[radial-gradient(circle,rgba(196,160,93,0.07),transparent_60%)]" />
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(120,60,69,0.10),transparent_60%)]" />
        </div>

        <div className="relative w-[min(1180px,calc(100%-40px))] mx-auto">

          {/* ── Header ── */}
          <ScrollReveal className="grid grid-cols-[1fr_1fr] gap-12 items-end mb-14 max-md:grid-cols-1 max-md:gap-6">
            <div>
              <p className="inline-flex items-center gap-3 text-gold text-[11px] font-[900] tracking-[0.22em] uppercase mb-4 before:content-[''] before:block before:w-8 before:h-px before:bg-gold">
                {m.eyebrow}
              </p>
              <h2 className="font-serif text-cream font-bold leading-[0.92] text-[clamp(52px,8vw,100px)] m-0">
                {m.title}
              </h2>
            </div>
            <p className="text-cream/60 text-[17px] leading-[1.7] m-0 self-end pb-1">
              {m.text}
            </p>
          </ScrollReveal>

          {/* ── Tabs ── */}
          <div role="tablist" aria-label="Catégories" className="flex flex-wrap gap-2 mb-10">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={[
                  "px-5 py-2 rounded-full text-[11px] font-[900] tracking-[0.12em] uppercase transition-all duration-200",
                  tab === key
                    ? "bg-gold text-ink shadow-[0_4px_20px_rgba(196,160,93,0.30)]"
                    : "text-cream/50 border border-cream/[0.14] hover:text-cream hover:border-cream/30 hover:bg-cream/[0.06]",
                ].join(" ")}
              >
                {label}
              </button>
            ))}
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <AnimatePresence mode="popLayout">
              {filtered.map((dish, i) => (
                <motion.article
                  key={dish.title}
                  layout
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.32, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] }}
                  className={[
                    "group relative flex flex-col p-8 rounded-2xl border border-cream/[0.09] overflow-hidden cursor-default",
                    "bg-gradient-to-br to-cream/[0.015]",
                    GLOW[dish.category] ?? "from-cream/[0.04]",
                    "hover:border-gold/20 hover:shadow-[inset_0_0_40px_rgba(196,160,93,0.04)] transition-all duration-300",
                  ].join(" ")}
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(196,160,93,0.07),transparent_70%)]" />

                  {/* Gold rule */}
                  <span className="block h-px w-7 bg-gold/70 mb-7 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />

                  {/* Category */}
                  <span className="text-gold/80 text-[10px] font-[900] tracking-[0.24em] uppercase mb-3">
                    {dish.label}
                  </span>

                  {/* Name */}
                  <h3 className="font-serif text-cream font-bold leading-[1.04] text-[clamp(26px,2.6vw,36px)] mb-5 flex-1">
                    {dish.title}
                  </h3>

                  {/* Separator */}
                  <div className="w-full h-px bg-gradient-to-r from-cream/[0.12] to-transparent mb-5" />

                  {/* Description */}
                  <p className="text-cream/50 text-[14px] leading-[1.7] italic m-0">
                    {dish.text}
                  </p>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* ── Feature strip ── */}
          <div className="grid grid-cols-4 border-t border-b border-cream/[0.10] mt-16 max-sm:grid-cols-2">
            {dict.features.map((f, i) => (
              <div
                key={i}
                className={[
                  "flex flex-col justify-center min-h-[112px] px-7 py-5",
                  "border-r border-cream/[0.10] last:border-r-0",
                  "max-sm:border-b max-sm:[&:nth-child(2)]:border-r-0 max-sm:last:border-b-0",
                  "hover:bg-cream/[0.03] transition-colors duration-150",
                ].join(" ")}
              >
                <strong className="block font-serif text-gold text-[22px] leading-none mb-2">
                  {f.title}
                </strong>
                <span className="text-cream/55 text-[13px] leading-snug">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── CARTE COMPLÈTE ────────────────────── */}
      <section className="bg-cream py-[104px]">
        <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-[1fr_1.2fr] gap-[60px] items-start max-md:grid-cols-1">

          {/* Sticky title */}
          <ScrollReveal className="sticky top-[100px] max-md:static">
            <p className="inline-flex items-center gap-3 text-gold text-[11px] font-[900] tracking-[0.22em] uppercase mb-4 before:content-[''] before:block before:w-8 before:h-px before:bg-gold">
              {fm.eyebrow}
            </p>
            <h2 className="font-serif text-espresso font-bold leading-[0.92] text-[clamp(48px,6vw,82px)] mb-5">
              {fm.title}
            </h2>
            <p className="text-ink/50 text-[14px] leading-relaxed italic">{fm.note}</p>
          </ScrollReveal>

          {/* Menu list */}
          <div className="flex flex-col gap-10">
            {menuCategories.map((cat, ci) => (
              <ScrollReveal key={cat.id} delay={ci * 0.07}>
                {/* Category header */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif text-espresso/50 text-[11px] font-black tracking-[0.26em] uppercase whitespace-nowrap">
                    {fm.labels[cat.id]}
                  </span>
                  <span className="flex-1 h-px bg-ink/[0.10]" />
                </div>

                {/* Dishes */}
                <div>
                  {cat.items.map((item, ii) => (
                    <div
                      key={item.name}
                      className={[
                        "flex justify-between items-baseline gap-4 py-4 group/item",
                        "-mx-3 px-3 rounded transition-colors duration-150 hover:bg-ink/[0.02]",
                        ii < cat.items.length - 1 ? "border-b border-ink/[0.07]" : "",
                      ].join(" ")}
                    >
                      <div className="min-w-0">
                        <p className="font-serif text-espresso text-[21px] leading-snug m-0 group-hover/item:text-ink transition-colors">
                          {item.name}
                        </p>
                        {item.detail && (
                          <p className="text-ink/45 text-[13px] m-0 mt-[3px] leading-snug">{item.detail}</p>
                        )}
                      </div>
                      <strong className="shrink-0 text-clay font-[700] text-[15px] tabular-nums">
                        {item.price}
                      </strong>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
