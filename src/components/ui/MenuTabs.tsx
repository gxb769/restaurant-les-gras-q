"use client";

import { useState } from "react";
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

  // CSS keyframe name switches direction based on tab navigation direction
  const animName = dir > 0 ? "tabSlideInRight" : "tabSlideInLeft";

  return (
    <div>
      {/* ── Tab bar ─────────────────────────────────────── */}
      <div
        role="tablist"
        aria-label="Catégories du menu"
        className="flex items-end gap-0 border-b border-cream/[0.10] mb-8 overflow-x-auto no-scrollbar"
      >
        {ORDER.map((id) => (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            onClick={() => changeTab(id)}
            className={[
              "relative shrink-0 inline-flex items-end min-h-[44px] pb-[10px] px-[14px] text-[12px] font-[800] tracking-[0.10em] uppercase",
              "transition-colors duration-150 whitespace-nowrap focus-visible:outline-none",
              active === id
                ? "text-cream"
                : "text-cream/[0.35] hover:text-cream/[0.65]",
            ].join(" ")}
          >
            {labels[id]}

            <span
              className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gold rounded-full transition-opacity duration-150"
              style={{ opacity: active === id ? 1 : 0 }}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>

      {/* ── Tab content — key change remounts → CSS animation replays ─── */}
      <div role="tabpanel" style={{ minHeight: 260, overflow: "hidden" }}>
        <div
          key={active}
          style={{ animation: `${animName} 0.25s cubic-bezier(0.22,1,0.36,1) both` }}
        >
          {category.items.map((item, ii) => (
            <div
              key={item.name}
              className={[
                "flex justify-between items-start gap-4 py-4 group/item",
                "-mx-3 px-3 rounded transition-colors duration-150",
                "hover:bg-cream/[0.04]",
                ii < category.items.length - 1
                  ? "border-b border-cream/[0.07]"
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
                    "font-serif text-cream text-[21px] leading-snug m-0",
                    "group-hover/item:text-cream transition-colors",
                    item.signature ? "font-bold" : "",
                  ].join(" ")}
                >
                  {item.name}
                </p>
                {item.detail && (
                  <p className="text-cream/45 text-[13px] m-0 mt-[3px] leading-snug">
                    {item.detail}
                  </p>
                )}
              </div>

              <strong className="shrink-0 text-clay font-[700] text-[15px] tabular-nums mt-1">
                {item.price}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
