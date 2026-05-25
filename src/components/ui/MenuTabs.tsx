"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "@/lib/menuData";
import type { MenuCategory } from "@/lib/menuData";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

type Props = {
  labels: Dictionary["fullMenu"]["labels"];
};

const ORDER: MenuCategory["id"][] = [
  "formules",
  "entrees",
  "plats",
  "desserts",
  "boissons",
];

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 28 }),
  center: { opacity: 1, x: 0 },
  exit:  (dir: number) => ({ opacity: 0, x: dir * -28 }),
};

export default function MenuTabs({ labels }: Props) {
  const [active, setActive] = useState<MenuCategory["id"]>("formules");
  const [dir,    setDir]    = useState(1);

  function changeTab(id: MenuCategory["id"]) {
    const prev = ORDER.indexOf(active);
    const next = ORDER.indexOf(id);
    setDir(next >= prev ? 1 : -1);
    setActive(id);
  }

  const category = menuCategories.find((c) => c.id === active)!;

  return (
    <div>
      {/* ── Tab bar ─────────────────────────────────────── */}
      <div
        role="tablist"
        aria-label="Catégories du menu"
        className="flex items-end gap-0 border-b border-ink/[0.08] mb-8 overflow-x-auto no-scrollbar"
      >
        {ORDER.map((id) => (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            onClick={() => changeTab(id)}
            className={[
              "relative shrink-0 pb-3 px-[14px] text-[12px] font-[800] tracking-[0.10em] uppercase",
              "transition-colors duration-150 whitespace-nowrap focus-visible:outline-none",
              active === id
                ? "text-espresso"
                : "text-ink/[0.38] hover:text-ink/[0.65]",
            ].join(" ")}
          >
            {labels[id]}

            {active === id && (
              <motion.span
                layoutId="menu-tab-underline"
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gold rounded-full"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Tab content ─────────────────────────────────── */}
      <div role="tabpanel" style={{ minHeight: 260 }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {category.items.map((item, ii) => (
              <div
                key={item.name}
                className={[
                  "flex justify-between items-start gap-4 py-4 group/item",
                  "-mx-3 px-3 rounded transition-colors duration-150",
                  "hover:bg-ink/[0.02]",
                  ii < category.items.length - 1
                    ? "border-b border-ink/[0.07]"
                    : "",
                ].join(" ")}
              >
                <div className="min-w-0 flex-1">
                  {item.signature && (
                    <span className="inline-flex items-center gap-[5px] text-[9px] font-[900] tracking-[0.16em] uppercase text-gold border border-gold/35 bg-gold/[0.07] rounded-full px-3 py-[4px] mb-2">
                      ★ Signature du Chef
                    </span>
                  )}
                  <p
                    className={[
                      "font-serif text-espresso text-[21px] leading-snug m-0",
                      "group-hover/item:text-ink transition-colors",
                      item.signature ? "font-bold" : "",
                    ].join(" ")}
                  >
                    {item.name}
                  </p>
                  {item.detail && (
                    <p className="text-ink/45 text-[13px] m-0 mt-[3px] leading-snug">
                      {item.detail}
                    </p>
                  )}
                </div>

                <strong className="shrink-0 text-clay font-[700] text-[15px] tabular-nums mt-1">
                  {item.price}
                </strong>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
