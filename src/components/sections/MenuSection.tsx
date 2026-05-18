"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

const MENU_PDF = "/assets/menu-printemps.pdf";
const PHONE = "+33382256951";

type Props = { dict: Dictionary };

type TabKey = "all" | "starters" | "mains" | "desserts" | "wine";

export default function MenuSection({ dict }: Props) {
  const m = dict.menu;
  const mo = dict.moment;
  const [tab, setTab] = useState<TabKey>("all");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "all", label: m.tabs.all },
    { key: "starters", label: m.tabs.starters },
    { key: "mains", label: m.tabs.mains },
    { key: "desserts", label: m.tabs.desserts },
    { key: "wine", label: m.tabs.wine },
  ];

  const filtered =
    tab === "all" ? m.dishes : m.dishes.filter((d) => d.category === tab);

  return (
    <>
      {/* ── Hero menu band ── */}
      <section
        id="menu"
        className="relative bg-espresso text-cream py-[104px] overflow-hidden"
      >
        {/* Subtle color blobs */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(110deg,rgba(120,60,69,0.38),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(100,123,95,0.28),transparent_34%)]" />

        <div className="w-[min(1180px,calc(100%-40px))] mx-auto relative">
          {/* Section head */}
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-[42px] items-end mb-11 max-md:grid-cols-1">
            <div>
              <div className="inline-flex items-center gap-[10px] text-gold-soft text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-3">
                {m.eyebrow}
              </div>
              <h2 className="font-serif text-cream font-bold leading-[0.94] text-[clamp(48px,8vw,96px)]">
                {m.title}
              </h2>
            </div>
            <p className="text-cream/[0.72] text-[17px] m-0 max-w-[610px]">
              {m.text}
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={[
                  "px-4 py-2 rounded-full text-[12px] font-[800] tracking-[0.08em] uppercase border transition-all duration-[180ms]",
                  tab === key
                    ? "bg-gold-soft text-ink border-gold-soft"
                    : "text-cream/70 border-cream/[0.18] bg-cream/[0.07] hover:border-cream/30 hover:text-cream",
                ].join(" ")}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Dish grid */}
          <div className="grid grid-cols-3 gap-[18px] max-md:grid-cols-1">
            <AnimatePresence mode="popLayout">
              {filtered.map((dish) => (
                <motion.article
                  key={dish.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="relative min-h-[500px] flex flex-col justify-end rounded-lg overflow-hidden border border-cream/[0.15] bg-ink shadow-[0_22px_54px_rgba(0,0,0,0.18)] isolate group"
                >
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    className="object-cover -z-20 transition-transform duration-[550ms] group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[rgba(22,19,17,0.9)] to-[rgba(22,19,17,0.15)] via-[rgba(22,19,17,0.15)]" />
                  <div className="relative z-10 p-6 min-h-[178px]">
                    <span className="text-gold-soft text-[12px] font-[800] tracking-[0.15em] uppercase">
                      {dish.label}
                    </span>
                    <h3 className="font-serif text-cream text-[39px] leading-[0.94] mt-[10px]">
                      {dish.title}
                    </h3>
                    <p className="text-cream/[0.74] mt-3 mb-0">{dish.text}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Feature strip */}
          <div className="grid grid-cols-4 border-t border-b border-cream/[0.15] mt-[42px] max-sm:grid-cols-1">
            {dict.features.map((f, i) => (
              <div
                key={i}
                className="flex flex-col justify-center min-h-[126px] p-[22px] border-r border-cream/[0.15] last:border-r-0 max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0"
              >
                <strong className="block font-serif text-gold-soft text-[28px] leading-none">
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

      {/* ── Menu preview (à-la-carte readable list) ── */}
      <section className="bg-cream py-[104px]">
        <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-[0.9fr_1.1fr] gap-11 items-start max-md:grid-cols-1">
          {/* Sticky note */}
          <div className="sticky top-[110px] max-md:static">
            <div className="inline-flex items-center gap-[10px] text-gold text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-3">
              {mo.eyebrow}
            </div>
            <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(48px,7vw,88px)] mb-5">
              {mo.title}
            </h2>
            <p className="text-ink/[0.72] text-[18px] mb-[18px]">{mo.text}</p>
            <a
              href={MENU_PDF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-5 py-[14px] rounded-full text-[13px] font-[800] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold border border-white/20 transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
            >
              {mo.button}
            </a>
          </div>

          {/* Items list */}
          <div className="grid gap-[14px]">
            {mo.items.map((item) => (
              <article
                key={item.name}
                className="grid grid-cols-[1fr_auto] gap-[18px] p-5 border border-ink/[0.1] rounded-lg bg-white/[0.38] shadow-[0_14px_44px_rgba(16,17,20,0.07)] max-sm:grid-cols-1"
              >
                <div>
                  <h3 className="font-serif text-espresso text-[30px] leading-[0.94]">
                    {item.name}
                  </h3>
                  <p className="text-ink/[0.65] mt-2 mb-0">{item.description}</p>
                </div>
                <strong className="text-clay text-[13px] tracking-[0.12em] uppercase whitespace-nowrap self-start pt-1">
                  {item.category}
                </strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
