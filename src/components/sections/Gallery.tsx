"use client";

import { useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import dynamic from "next/dynamic";
// GalleryLightbox charge des animations complexes — lazy load car toujours sous le fold
const GalleryLightbox = dynamic(() => import("@/components/ui/GalleryLightbox"), { ssr: false });

type Props = { dict: Dictionary };

const photos = [
  { src: "/assets/dish-boeuf.webp",       alt: "Joue de bœuf braisée",         pos: "center" },
  { src: "/assets/dish-entree.webp",      alt: "Mise en bouche du chef",        pos: "50% 40%" },
  { src: "/assets/dish-bar.webp",         alt: "Bar de ligne, sauce vierge",    pos: "center" },
  { src: "/assets/dish-dessert.webp",     alt: "Dessert maison",                pos: "center" },
  { src: "/assets/salle.webp",            alt: "Salle du restaurant Les Gras Q",pos: "50% 40%" },
  { src: "/assets/terrasse.webp",         alt: "Terrasse estivale",             pos: "50% 55%" },
  { src: "/assets/equipe.webp",           alt: "Christelle & Gérald",           pos: "50% 35%" },
  { src: "/assets/cave-vin.webp",         alt: "Cave à vins",                   pos: "50% 45%" },
  { src: "/assets/village.webp",          alt: "Château de Cons-la-Grandville", pos: "50% 70%" },
  { src: "/assets/hero-restaurant.webp",  alt: "Restaurant Les Gras Q",         pos: "50% 40%" },
];

function PhotoTile({
  photo,
  index,
  onClick,
  className = "",
  delay = 0,
}: {
  photo: typeof photos[0];
  index: number;
  onClick: (i: number) => void;
  className?: string;
  delay?: number;
}) {
  return (
    <ScrollReveal
      delay={delay}
      className={`relative overflow-hidden rounded-xl group cursor-zoom-in bg-[#141210] ${className}`}
    >
      <button
        onClick={() => onClick(index)}
        aria-label={`Agrandir : ${photo.alt}`}
        className="absolute inset-0 z-10 focus-visible:ring-2 focus-visible:ring-gold-soft focus-visible:ring-inset"
      />
      <Image
        src={photo.src}
        alt=""
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        style={{ objectPosition: photo.pos }}
        sizes="(max-width: 768px) 90vw, 50vw"
      />
      {/* Hover label */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,8,7,0.72)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 pointer-events-none">
        <span className="text-cream/90 text-[11px] font-[900] tracking-[0.14em] uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {photo.alt}
        </span>
      </div>
    </ScrollReveal>
  );
}

export default function Gallery({ dict }: Props) {
  const g = dict.gallery;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open  = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev  = () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const next  = () => setLightboxIndex((i) => (i !== null && i < photos.length - 1 ? i + 1 : i));

  return (
    <section id="galerie" className="py-[104px] max-sm:py-[60px] relative overflow-hidden">
      {/* Ambient gold glow — coin bas gauche */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_0%_100%,rgba(201,168,76,0.06),transparent)] pointer-events-none" aria-hidden="true" />

      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">

        {/* Header */}
        <div className="mb-14 max-sm:mb-10">
          <ScrollReveal>
            <div className="flex items-baseline gap-[12px] mb-4">
              <span className="font-serif text-gold-soft/50 text-[13px] font-[300] italic">02</span>
              <span className="w-6 h-px bg-gold-soft/30 self-center shrink-0" aria-hidden="true" />
              <span className="text-gold-soft text-[11px] font-[900] tracking-[0.20em] uppercase">{g.eyebrow}</span>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-[1fr_auto] gap-10 items-end max-md:grid-cols-1 max-md:gap-4">
            <ScrollReveal direction="clip" delay={0.08}>
              <h2 className="font-serif text-cream font-bold leading-[0.90] tracking-[-0.015em] text-[clamp(56px,8vw,108px)] m-0">
                {g.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.18} className="max-w-[440px]">
              <p className="text-cream/[0.60] text-[16px] leading-relaxed m-0">{g.text}</p>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Desktop editorial mosaic — 10 photos ─── */}
        <div className="max-sm:hidden space-y-3">

          {/* Row 1: big left (p0) + 2 stacked right (p1, p2) */}
          <div className="grid grid-cols-[1.55fr_1fr] gap-3 h-[500px]">
            <PhotoTile photo={photos[0]} index={0} onClick={open} delay={0} />
            <div className="grid grid-rows-2 gap-3">
              <PhotoTile photo={photos[1]} index={1} onClick={open} delay={0.08} />
              <PhotoTile photo={photos[2]} index={2} onClick={open} delay={0.14} />
            </div>
          </div>

          {/* Row 2: 3 equal (p3, p4, p5) */}
          <div className="grid grid-cols-3 gap-3 h-[290px]">
            <PhotoTile photo={photos[3]} index={3} onClick={open} delay={0.06} />
            <PhotoTile photo={photos[4]} index={4} onClick={open} delay={0.12} />
            <PhotoTile photo={photos[5]} index={5} onClick={open} delay={0.18} />
          </div>

          {/* Row 3: medium left (p6) + big right (p7) */}
          <div className="grid grid-cols-[1fr_1.4fr] gap-3 h-[340px]">
            <PhotoTile photo={photos[6]} index={6} onClick={open} delay={0.05} />
            <PhotoTile photo={photos[7]} index={7} onClick={open} delay={0.11} />
          </div>

          {/* Row 4: big left (p8) + small right (p9) */}
          <div className="grid grid-cols-[1.4fr_1fr] gap-3 h-[280px]">
            <PhotoTile photo={photos[8]} index={8} onClick={open} delay={0.07} />
            <PhotoTile photo={photos[9]} index={9} onClick={open} delay={0.13} />
          </div>
        </div>

        {/* ── Mobile swipe carousel ─────────────────── */}
        <div className="hidden max-sm:flex overflow-x-auto snap-x snap-mandatory gap-3 -mx-5 px-5 pb-3 no-scrollbar">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => open(i)}
              aria-label={`Agrandir : ${p.alt}`}
              className="snap-start shrink-0 w-[80vw] h-[280px] relative rounded-xl overflow-hidden bg-[#141210] cursor-zoom-in"
            >
              <Image
                src={p.src} alt="" fill
                className="object-cover"
                style={{ objectPosition: p.pos }}
                sizes="80vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(10,8,7,0.72)] to-transparent pt-10 p-4">
                <span className="text-cream text-[11px] font-[900] tracking-[0.12em] uppercase">{p.alt}</span>
              </div>
            </button>
          ))}
        </div>

      </div>

      <GalleryLightbox
        photos={photos}
        activeIndex={lightboxIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}
