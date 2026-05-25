"use client";

import { useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GalleryLightbox from "@/components/ui/GalleryLightbox";

type Props = { dict: Dictionary };

const photos = [
  { src: "/assets/salle.jpg",          alt: "Salle du restaurant Les Gras Q" },
  { src: "/assets/village.jpg",        alt: "Château de Cons-la-Grandville" },
  { src: "/assets/terrasse.jpg",       alt: "Terrasse extérieure du restaurant" },
  { src: "/assets/foie-gras.jpg",      alt: "Foie gras maison" },
  { src: "/assets/cave-vin.jpg",       alt: "Cave à vin du restaurant" },
  { src: "/assets/ambiance-resto.jpg", alt: "Ambiance chaleureuse du restaurant" },
];

function PhotoTile({
  photo,
  index,
  onClick,
  className = "",
  objectPosition = "center",
  delay = 0,
}: {
  photo: typeof photos[0];
  index: number;
  onClick: (i: number) => void;
  className?: string;
  objectPosition?: string;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay} className={`relative overflow-hidden rounded-xl group cursor-zoom-in bg-espresso ${className}`}>
      <button
        onClick={() => onClick(index)}
        aria-label={`Agrandir : ${photo.alt}`}
        className="absolute inset-0 z-10 focus-visible:ring-2 focus-visible:ring-gold-soft focus-visible:ring-inset"
      />
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        style={{ objectPosition }}
        sizes="(max-width: 768px) 90vw, 50vw"
      />
      {/* Hover reveal */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,17,20,0.65)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5 pointer-events-none">
        <span className="text-cream/90 text-[11px] font-[900] tracking-[0.14em] uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
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
    <section id="galerie" className="bg-cream py-[104px] max-sm:py-[60px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">

        {/* Header */}
        <div className="mb-14 max-sm:mb-10">
          <ScrollReveal>
            <div className="flex items-baseline gap-[12px] mb-4">
              <span className="font-serif text-gold/50 text-[13px] font-[300] italic">02</span>
              <span className="w-6 h-px bg-gold/30 self-center shrink-0" aria-hidden="true" />
              <span className="text-gold text-[11px] font-[900] tracking-[0.20em] uppercase">{g.eyebrow}</span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-[1fr_auto] gap-10 items-end max-md:grid-cols-1 max-md:gap-4">
            <ScrollReveal direction="clip" delay={0.08}>
              <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(52px,7vw,96px)] m-0">
                {g.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.18} className="max-w-[440px]">
              <p className="text-ink/[0.58] text-[16px] leading-relaxed m-0">{g.text}</p>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Desktop editorial mosaic ─────────────────── */}
        <div className="max-sm:hidden space-y-3">

          {/* Row 1 — hero + 2 stacked */}
          <div className="grid grid-cols-[1.55fr_1fr] gap-3 h-[500px]">
            <PhotoTile photo={photos[0]} index={0} onClick={open} objectPosition="50% 40%" delay={0} />
            <div className="grid grid-rows-2 gap-3">
              <PhotoTile photo={photos[1]} index={1} onClick={open} objectPosition="50% 70%" delay={0.08} />
              <PhotoTile photo={photos[2]} index={2} onClick={open} objectPosition="50% 55%" delay={0.14} />
            </div>
          </div>

          {/* Row 2 — 3 equal */}
          <div className="grid grid-cols-3 gap-3 h-[280px]">
            <PhotoTile photo={photos[3]} index={3} onClick={open} objectPosition="50% 30%" delay={0.06} />
            <PhotoTile photo={photos[4]} index={4} onClick={open} objectPosition="50% 45%" delay={0.12} />
            <PhotoTile photo={photos[5]} index={5} onClick={open} objectPosition="50% 50%" delay={0.18} />
          </div>
        </div>

        {/* ── Mobile swipe carousel ───────────────────── */}
        <div className="hidden max-sm:flex overflow-x-auto snap-x snap-mandatory gap-3 -mx-5 px-5 pb-3 no-scrollbar">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => open(i)}
              aria-label={`Agrandir : ${p.alt}`}
              className="snap-start shrink-0 w-[80vw] h-[280px] relative rounded-xl overflow-hidden bg-espresso cursor-zoom-in"
            >
              <Image
                src={p.src} alt={p.alt} fill
                className="object-cover"
                sizes="80vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(16,17,20,0.65)] to-transparent pt-10 p-4">
                <span className="text-cream text-[11px] font-[900] tracking-[0.12em] uppercase">{g.tiles[i] ?? p.alt}</span>
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
