"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import { PHONE } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

type Props = { dict: Dictionary };

export default function Hero({ dict }: Props) {
  const { scrollYProgress } = useScroll();
  // Background drifts upward by 15% of its own height as the user scrolls
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const h = dict.hero;
  const q = dict.quick;

  return (
    <header
      id="top"
      className="min-h-svh relative text-cream grid items-end pt-[130px] pb-14 max-sm:pb-28 isolate overflow-hidden"
    >
      {/* Background image — Next/Image for LCP priority preload */}
      <motion.div
        className="absolute inset-0 -z-30 overflow-hidden"
        style={{ y: bgY, scale: 1.18, animation: "hero-settle 1800ms ease-out both" }}
        aria-hidden="true"
      >
        <Image
          src="/assets/hero-restaurant.jpg"
          alt="Salle du restaurant Les Gras Q"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-[55%_center]"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay 1 — left gradient for text contrast */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[rgba(16,17,20,0.97)] via-[rgba(16,17,20,0.74)] to-[rgba(16,17,20,0.18)]" />
      {/* Overlay 2 — bottom gradient for grounding */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[rgba(16,17,20,0.96)] via-[rgba(16,17,20,0.14)] to-[rgba(16,17,20,0.54)]" />
      {/* Overlay 3 — radial cinematic depth vignette */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_72%_42%,transparent_18%,rgba(16,17,20,0.46)_80%)]" />

      <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-[1fr_330px] gap-[42px] items-end max-md:grid-cols-1">

        {/* Main content — staggered load animations */}
        <div>
          {/* Eyebrow */}
          <div
            className="shimmer inline-flex items-center gap-[10px] text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-gold-soft"
            style={{ animation: "fade-up 700ms 80ms ease-out both" }}
          >
            {h.eyebrow}
          </div>

          {/* Title — line-by-line blur-in */}
          <h1 className="font-serif font-[500] leading-[0.90] mt-5 text-[clamp(64px,11vw,156px)] max-sm:text-[clamp(54px,17vw,156px)]">
            <span
              className="block"
              style={{ animation: "blur-in 900ms 200ms ease-out both" }}
            >
              Restaurant
            </span>
            <span
              className="block"
              style={{ animation: "blur-in 900ms 380ms ease-out both" }}
            >
              Les Gras Q
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="mt-5 text-gold-soft/90 text-[clamp(15px,1.5vw,19px)] font-[300] italic tracking-[0.04em] font-serif"
            style={{ animation: "fade-up 700ms 320ms ease-out both" }}
          >
            Cuisine française généreuse &amp; raffinée
          </p>

          {/* Description */}
          <p
            className="mt-4 text-cream/[0.72] text-[clamp(15px,1.7vw,19px)] max-w-[600px] leading-relaxed max-sm:hidden"
            style={{ animation: "fade-up 700ms 420ms ease-out both" }}
          >
            {h.text}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 mt-9"
            style={{ animation: "fade-up 700ms 520ms ease-out both" }}
          >
            <MagneticButton strength={0.25}>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center min-h-[58px] px-10 py-[16px] rounded-full text-[14px] font-[900] tracking-[0.06em] uppercase text-[#211812] bg-gradient-to-br from-[#f5e4ba] to-gold shadow-[0_10px_36px_rgba(196,160,93,0.40)] transition-all duration-[200ms] hover:-translate-y-[3px] hover:shadow-[0_22px_56px_rgba(196,160,93,0.54)] active:translate-y-0 max-sm:w-full"
              >
                {h.callBtn}
              </a>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <a
                href="#menu"
                className="inline-flex items-center justify-center min-h-[58px] px-8 py-[16px] rounded-full text-[14px] font-[800] tracking-[0.05em] uppercase text-cream border border-cream/[0.30] bg-cream/[0.07] backdrop-blur-sm transition-all duration-[200ms] hover:-translate-y-[2px] hover:bg-cream/[0.14] hover:border-cream/[0.40] hover:shadow-[0_16px_36px_rgba(0,0,0,0.20)] active:translate-y-0 max-sm:w-full"
              >
                {h.menuBtn}
              </a>
            </MagneticButton>
          </div>

          {/* Google rating badge */}
          <div
            className="inline-flex items-center gap-[8px] mt-5 px-[14px] py-[9px] rounded-full border border-cream/[0.16] bg-[rgba(16,17,20,0.52)] backdrop-blur-sm max-sm:w-full max-sm:justify-center"
            style={{ animation: "fade-up 700ms 600ms ease-out both" }}
          >
            <span
              className="text-gold-soft text-[13px] leading-none tracking-[0.06em]"
              aria-hidden="true"
            >
              ★★★★<span className="opacity-40">★</span>
            </span>
            <span className="font-serif text-cream font-bold text-[17px] leading-none">
              4,4
            </span>
            <span className="text-cream/[0.38] text-[12px] leading-none">/5</span>
            <span
              className="w-px h-[13px] bg-cream/[0.18] mx-[2px]"
              aria-hidden="true"
            />
            <span className="text-cream/[0.58] text-[12px] font-[600] tracking-[0.01em]">
              480+ avis Google
            </span>
          </div>

          {/* Mobile quick info strip */}
          <div
            className="sm:hidden flex items-center gap-5 mt-7 text-cream/[0.52] text-[12px] font-[600]"
            style={{ animation: "fade-up 700ms 600ms ease-out both" }}
          >
            <span className="flex items-center gap-[6px]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M6.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.2"/><path d="M6.5 1C4.015 1 2 2.965 2 5.388c0 3.362 4.5 6.612 4.5 6.612S11 8.75 11 5.388C11 2.965 8.985 1 6.5 1Z" stroke="currentColor" strokeWidth="1.2"/></svg>
              Cons-la-Grandville
            </span>
            <span className="w-px h-3 bg-cream/[0.20]" aria-hidden="true" />
            <span className="flex items-center gap-[6px]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6.5 4v2.5l1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              Midi &amp; soir
            </span>
          </div>

          {/* Quick info strip — desktop/tablet */}
          <div
            aria-label="Informations rapides"
            className="hidden sm:grid grid-cols-3 mt-12 border border-cream/[0.13] bg-cream/[0.06] backdrop-blur-[12px] rounded-xl overflow-hidden"
            style={{ animation: "fade-up 700ms 640ms ease-out both" }}
          >
            {[
              { label: q.addressLabel, value: q.addressValue },
              { label: q.todayLabel,   value: q.todayText },
              { label: q.moodLabel,    value: q.moodText },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-between min-h-[100px] p-[18px] border-r border-cream/[0.10] last:border-r-0 hover:bg-cream/[0.05] transition-colors duration-150"
              >
                <span className="text-gold-soft text-[10px] font-[800] tracking-[0.16em] uppercase">
                  {item.label}
                </span>
                <strong className="block mt-[7px] text-cream text-[14px] font-[600] leading-snug">
                  {item.value}
                </strong>
              </div>
            ))}
          </div>
        </div>

      {/* Scroll chevron — mobile only */}
      <a
        href="#experience"
        aria-label="Défiler vers le contenu"
        className="sm:hidden absolute bottom-[78px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[5px] text-cream/[0.38] hover:text-cream/60 transition-colors"
        style={{ animation: "fade-up 800ms 900ms ease-out both" }}
      >
        <span className="text-[9px] font-[800] tracking-[0.18em] uppercase">Découvrir</span>
        <svg
          width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"
          className="animate-bounce"
        >
          <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

        {/* Panel */}
        <aside
          className="border border-cream/[0.16] bg-[rgba(16,17,20,0.54)] backdrop-blur-[20px] rounded-xl p-6 shadow-[0_24px_80px_rgba(16,17,20,0.32)] relative overflow-hidden before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-gradient-to-b before:from-gold-soft before:to-wine max-md:max-w-[420px] max-sm:hidden"
          style={{ animation: "fade-up 800ms 440ms ease-out both" }}
        >
          {/* Food photo */}
          <div className="relative w-full h-[160px] rounded-lg overflow-hidden mb-4 -mx-0">
            <Image
              src="/assets/dish-entree.jpg"
              alt="Plat signature du chef"
              fill
              priority
              className="object-cover object-center"
              sizes="330px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,17,20,0.55)] to-transparent" />
            <span className="absolute bottom-3 left-4 text-[10px] font-[800] tracking-[0.14em] uppercase text-gold-soft">
              {h.panelLabel}
            </span>
          </div>
          <strong className="block font-serif text-cream text-[28px] leading-none mb-3">
            {h.panelTitle}
          </strong>
          <p className="text-cream/[0.68] text-[13px] m-0 leading-relaxed">{h.panelText}</p>
        </aside>
      </div>
    </header>
  );
}
