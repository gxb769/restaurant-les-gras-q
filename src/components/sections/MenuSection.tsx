"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { menuCategories } from "@/lib/menuData";

type Props = { dict: Dictionary };
type TabKey = "all" | "starters" | "mains" | "desserts" | "wine";

export default function MenuSection({ dict }: Props) {
  const m = dict.menu;
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
      {/* ── Photo card section with tab filter ── */}
      <section id="menu" className="relative bg-espresso text-cream py-[104px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(110deg,rgba(120,60,69,0.35),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(100,123,95,0.25),transparent_34%)]" />

        <div className="w-[min(1180px,calc(100%-40px))] mx-auto relative">

          <ScrollReveal className="grid grid-cols-[0.9fr_1.1fr] gap-[42px] items-end mb-11 max-md:grid-cols-1">
            <div>
              <div className="inline-flex items-center gap-[10px] text-gold-soft text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-3">
                {m.eyebrow}
              </div>
              <h2 className="font-serif text-cream font-bold leading-[0.94] text-[clamp(48px,8vw,96px)]">
                {m.title}
              </h2>
            </div>
            <p className="text-cream/[0.72] text-[17px] m-0 max-w-[610px]">{m.text}</p>
          </ScrollReveal>

          {/* Tab switcher */}
          <div role="tablist" aria-label="Catégories" className="flex flex-wrap gap-2 mb-8">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={[
                  "relative px-4 py-2 rounded-full text-[12px] font-[800] tracking-[0.08em] uppercase border transition-all duration-[200ms]",
                  tab === key
                    ? "bg-gold-soft text-ink border-gold-soft shadow-sm"
                    : "text-cream/70 border-cream/[0.18] bg-cream/[0.07] hover:border-cream/30 hover:text-cream hover:bg-cream/[0.12]",
                ].join(" ")}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Dish cards */}
          <div className="grid grid-cols-3 gap-[18px] max-md:grid-cols-1">
            <AnimatePresence mode="popLayout">
              {filtered.map((dish) => (
                <motion.article
                  key={dish.title}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative min-h-[480px] flex flex-col justify-end rounded-lg overflow-hidden border border-cream/[0.15] bg-ink shadow-[0_22px_54px_rgba(0,0,0,0.22)] isolate group"
                >
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    className="object-cover -z-20 transition-transform duration-[600ms] group-hover:scale-[1.07]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[rgba(16,17,20,0.92)] via-[rgba(16,17,20,0.15)] to-transparent" />
                  <div className="relative z-10 p-6">
                    <span className="text-gold-soft text-[11px] font-[800] tracking-[0.16em] uppercase">
                      {dish.label}
                    </span>
                    <h3 className="font-serif text-cream text-[36px] leading-[0.95] mt-[10px]">
                      {dish.title}
                    </h3>
                    <p className="text-cream/[0.72] mt-3 mb-0 text-[15px]">{dish.text}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Feature strip */}
          <div className="grid grid-cols-4 border-t border-b border-cream/[0.15] mt-[52px] max-sm:grid-cols-1">
            {dict.features.map((f, i) => (
              <div
                key={i}
                className="flex flex-col justify-center min-h-[120px] p-[22px] border-r border-cream/[0.15] last:border-r-0 max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0 hover:bg-cream/[0.04] transition-colors duration-150"
              >
                <strong className="block font-serif text-gold-soft text-[26px] leading-none">
                  {f.title}
                </strong>
                <span className="block mt-[7px] text-cream/[0.72] text-[14px]">
                  {f.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full HTML menu ── */}
      <section className="bg-cream py-[104px]">
        <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-[0.9fr_1.1fr] gap-[52px] items-start max-md:grid-cols-1">

          {/* Sticky title */}
          <ScrollReveal className="sticky top-[110px] max-md:static">
            <div className="inline-flex items-center gap-[10px] text-gold text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-3">
              {fm.eyebrow}
            </div>
            <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(48px,7vw,88px)] mb-5">
              {fm.title}
            </h2>
            <p className="text-ink/[0.58] text-[15px] leading-relaxed italic">{fm.note}</p>
          </ScrollReveal>

          {/* Menu categories */}
          <div className="grid gap-[36px]">
            {menuCategories.map((cat, ci) => (
              <ScrollReveal key={cat.id} delay={ci * 0.06}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-serif text-espresso text-[11px] font-bold tracking-[0.22em] uppercase opacity-60">
                    {fm.labels[cat.id]}
                  </span>
                  <span className="flex-1 h-px bg-ink/[0.12]" />
                </div>

                <div className="grid gap-0">
                  {cat.items.map((item, ii) => (
                    <div
                      key={item.name}
                      className={[
                        "flex justify-between items-baseline gap-4 py-[14px]",
                        ii < cat.items.length - 1 ? "border-b border-ink/[0.08]" : "",
                        "group/item hover:bg-ink/[0.02] px-3 -mx-3 rounded transition-colors duration-150",
                      ].join(" ")}
                    >
                      <div className="min-w-0">
                        <p className="font-serif text-espresso text-[22px] leading-snug m-0 group-hover/item:text-ink transition-colors duration-150">
                          {item.name}
                        </p>
                        {item.detail && (
                          <p className="text-ink/[0.55] text-[14px] m-0 mt-[2px]">{item.detail}</p>
                        )}
                      </div>
                      <strong className="shrink-0 text-clay font-[700] text-[15px] tabular-nums whitespace-nowrap">
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
