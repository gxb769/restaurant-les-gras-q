"use client";

import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import { PHONE } from "@/lib/constants";

type Props = { dict: Dictionary };

export default function Hero({ dict }: Props) {
  const h = dict.hero;
  const q = dict.quick;

  return (
    <header
      id="top"
      className="min-h-svh relative text-cream flex flex-col justify-end pt-[130px] pb-16 max-sm:pb-28 isolate overflow-hidden"
    >
      {/* Background — appetizing dish photo, LCP-priority, subtle settle-in on load */}
      <div
        className="absolute inset-0 -z-30 overflow-hidden"
        aria-hidden="true"
      >
        {/* Extra headroom (-15% inset) prevents white edges on small zoom/scroll */}
        <div
          style={{
            position: "absolute",
            inset: "-15%",
            animation: "hero-settle 1800ms ease-out both",
          }}
        >
          <Image
            src="/assets/dish-boeuf.jpg"
            alt="Plat signature du restaurant Les Gras Q"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Overlays — cinematic grounding for the dish photo */}
      <div className="absolute inset-0 -z-20 bg-[rgba(10,8,7,0.48)]" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[rgba(10,8,7,0.97)] via-[rgba(10,8,7,0.22)] to-[rgba(10,8,7,0.50)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_110%_60%_at_50%_100%,rgba(10,8,7,0.45),transparent)]" />

      <div className="w-[min(1180px,calc(100%-40px))] mx-auto w-full">

        {/* Eyebrow */}
        <div
          className="shimmer inline-flex items-center gap-[10px] text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-gold-soft"
          style={{ animation: "fade-up 700ms 80ms ease-out both" }}
        >
          {h.eyebrow}
        </div>

        {/* Title — word-by-word blur reveal */}
        <h1 className="font-serif font-[700] leading-[0.88] tracking-[-0.02em] mt-5 text-[clamp(72px,12vw,172px)] max-sm:text-[clamp(58px,17vw,140px)]">
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
          className="mt-5 text-gold-soft/90 text-[clamp(15px,1.5vw,20px)] font-[300] italic tracking-[0.04em] font-serif"
          style={{ animation: "fade-up 700ms 320ms ease-out both" }}
        >
          Cuisine française généreuse &amp; raffinée
        </p>

        {/* Description */}
        <p
          className="mt-4 text-cream/[0.68] text-[clamp(15px,1.6vw,18px)] max-w-[560px] leading-relaxed max-sm:hidden"
          style={{ animation: "fade-up 700ms 420ms ease-out both" }}
        >
          {h.text}
        </p>

        {/* CTA + rating — single row */}
        <div
          className="flex flex-wrap items-center gap-5 mt-9 max-sm:flex-col max-sm:items-start"
          style={{ animation: "fade-up 700ms 520ms ease-out both" }}
        >
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center min-h-[58px] px-10 py-[16px] rounded-full text-[14px] font-[900] tracking-[0.06em] uppercase text-[#211812] bg-gradient-to-br from-[#f5e4ba] to-gold shadow-[0_10px_36px_rgba(196,160,93,0.40)] transition-all duration-[200ms] hover:-translate-y-[3px] hover:shadow-[0_22px_56px_rgba(196,160,93,0.54)] active:translate-y-0 max-sm:w-full"
          >
            {h.callBtn}
          </a>

          {/* Google rating badge */}
          <div className="inline-flex items-center gap-[8px] px-[14px] py-[9px] rounded-full border border-cream/[0.14] bg-[rgba(10,8,7,0.55)] backdrop-blur-sm max-sm:w-full max-sm:justify-center">
            <span
              className="text-gold-soft text-[13px] leading-none tracking-[0.06em]"
              aria-hidden="true"
            >
              ★★★★<span className="opacity-40">★</span>
            </span>
            <span className="font-serif text-cream font-bold text-[17px] leading-none">4,4</span>
            <span className="text-cream/[0.38] text-[12px] leading-none">/5</span>
            <span className="w-px h-[13px] bg-cream/[0.18] mx-[2px]" aria-hidden="true" />
            <span className="text-cream/[0.55] text-[12px] font-[600] tracking-[0.01em]">
              480+ avis Google
            </span>
          </div>
        </div>

        {/* Quick info strip — desktop */}
        <div
          aria-label="Informations rapides"
          className="hidden sm:grid grid-cols-3 mt-12 border border-cream/[0.10] bg-[rgba(10,8,7,0.52)] backdrop-blur-[14px] rounded-xl overflow-hidden max-w-[680px]"
          style={{ animation: "fade-up 700ms 640ms ease-out both" }}
        >
          {[
            { label: q.addressLabel, value: q.addressValue },
            { label: q.todayLabel,   value: q.todayText },
            { label: q.moodLabel,    value: q.moodText },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between min-h-[90px] p-[18px] border-r border-cream/[0.08] last:border-r-0 hover:bg-cream/[0.04] transition-colors duration-150"
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

        {/* Mobile quick info */}
        <div
          className="sm:hidden flex items-center gap-5 mt-7 text-cream/[0.50] text-[12px] font-[600]"
          style={{ animation: "fade-up 700ms 600ms ease-out both" }}
        >
          <span className="flex items-center gap-[6px]">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M6.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M6.5 1C4.015 1 2 2.965 2 5.388c0 3.362 4.5 6.612 4.5 6.612S11 8.75 11 5.388C11 2.965 8.985 1 6.5 1Z" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
            Cons-la-Grandville
          </span>
          <span className="w-px h-3 bg-cream/[0.20]" aria-hidden="true" />
          <span className="flex items-center gap-[6px]">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M6.5 4v2.5l1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Midi &amp; soir
          </span>
        </div>
      </div>

      {/* Scroll chevron — mobile */}
      <a
        href="#experience"
        className="sm:hidden absolute bottom-[54px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[5px] text-cream/[0.38] hover:text-cream/60 transition-colors"
        style={{ animation: "fade-up 800ms 900ms ease-out both" }}
      >
        <span className="text-[9px] font-[800] tracking-[0.18em] uppercase">Découvrir</span>
        <span className="sr-only">— défiler vers le contenu</span>
        <svg
          width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"
          className="animate-bounce"
        >
          <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </header>
  );
}
