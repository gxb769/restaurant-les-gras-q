"use client";

import { useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GalleryLightbox from "@/components/ui/GalleryLightbox";

type Props = { dict: Dictionary };

const photos = [
  { src: "/assets/salle.jpg",          alt: "Salle du restaurant Les Gras Q",      span: "row-span-2" },
  { src: "/assets/terrasse.jpg",       alt: "Terrasse extérieure du restaurant" },
  { src: "/assets/cave-vin.jpg",       alt: "Cave à vin du restaurant" },
  { src: "/assets/village.jpg",        alt: "Château de Cons-la-Grandville" },
  { src: "/assets/foie-gras.jpg",      alt: "Foie gras maison" },
  { src: "/assets/ambiance-resto.jpg", alt: "Ambiance chaleureuse du restaurant" },
];

export default function Gallery({ dict }: Props) {
  const g = dict.gallery;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox  = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto     = () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const nextPhoto     = () => setLightboxIndex((i) => (i !== null && i < photos.length - 1 ? i + 1 : i));

  return (
    <section id="galerie" className="bg-paper py-[104px] max-sm:py-[60px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">

        <div className="grid grid-cols-[0.9fr_1.1fr] gap-[42px] items-end mb-11 max-md:grid-cols-1">
          <div>
            <ScrollReveal>
              <div className="flex items-baseline gap-[12px] mb-3">
                <span className="font-serif text-gold/50 text-[13px] font-[300] italic">02</span>
                <span className="w-6 h-px bg-gold/30 self-center shrink-0" aria-hidden="true" />
                <span className="text-gold text-[11px] font-[900] tracking-[0.20em] uppercase">{g.eyebrow}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="clip" delay={0.08}>
              <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(48px,7vw,88px)]">
                {g.title}
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.14}>
            <p className="text-ink/[0.72] text-[17px] m-0 max-w-[610px]">{g.text}</p>
          </ScrollReveal>
        </div>

        {/* ── Desktop/tablet grid ─────────────────────── */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[580px] max-md:grid-cols-2 max-md:h-auto max-sm:hidden">
          {photos.map((p, i) => (
            <ScrollReveal
              key={p.src}
              delay={i * 0.07}
              className={[
                "relative overflow-hidden rounded-lg group bg-ink cursor-zoom-in",
                p.span ?? "",
                i === 0 ? "max-md:h-[460px]" : "h-[280px] max-md:h-[220px]",
              ].join(" ")}
            >
              {/* Clickable overlay — covers full tile */}
              <button
                onClick={() => openLightbox(i)}
                aria-label={`Agrandir : ${p.alt}`}
                className="absolute inset-0 z-10 focus-visible:ring-2 focus-visible:ring-gold-soft"
              />

              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                {/* Magnifier icon */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-cream/[0.18] border border-cream/[0.35] backdrop-blur-sm flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="6.5" cy="6.5" r="4.5" stroke="white" strokeWidth="1.6" />
                    <path d="M10 10l3.5 3.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M4.5 6.5h4M6.5 4.5v4" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Label on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,17,20,0.55)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                <span className="text-cream/90 text-[13px] font-[700] tracking-[0.1em] uppercase">
                  {g.tiles[i] ?? p.alt}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Mobile swipe carousel ───────────────────── */}
        <div className="hidden max-sm:flex overflow-x-auto snap-x snap-mandatory gap-3 -mx-5 px-5 pb-3 no-scrollbar">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => openLightbox(i)}
              aria-label={`Agrandir : ${p.alt}`}
              className="snap-start shrink-0 w-[80vw] h-[260px] relative rounded-xl overflow-hidden bg-ink cursor-zoom-in"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover"
                sizes="80vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(16,17,20,0.65)] to-transparent pt-10 p-4">
                <span className="text-cream text-[12px] font-[700] tracking-[0.12em] uppercase">
                  {g.tiles[i] ?? p.alt}
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* ── Lightbox ─────────────────────────────────── */}
      <GalleryLightbox
        photos={photos}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevPhoto}
        onNext={nextPhoto}
      />
    </section>
  );
}
