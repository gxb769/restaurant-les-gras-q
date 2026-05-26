"use client";

import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { SLUURPY_URL, MAPS_URL } from "@/lib/constants";

type Props = { dict: Dictionary };

export default function Reviews({ dict }: Props) {
  const r = dict.reviews;

  return (
    <section className="text-cream relative overflow-hidden border-t border-cream/[0.05]" id="avis">
      {/* Ambient gold glow centrale */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(201,168,76,0.05),transparent)] pointer-events-none" aria-hidden="true" />
      <div className="py-[84px] max-sm:py-[52px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">

        <div className="grid grid-cols-[0.9fr_1.1fr] gap-[42px] items-end mb-11 max-md:grid-cols-1">
          <div>
            <ScrollReveal>
              <div className="flex items-baseline gap-[12px] mb-3">
                <span className="font-serif text-gold-soft/50 text-[13px] font-[300] italic">04</span>
                <span className="w-6 h-px bg-gold-soft/30 self-center shrink-0" aria-hidden="true" />
                <span className="text-gold-soft text-[11px] font-[900] tracking-[0.20em] uppercase">{r.eyebrow}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="clip" delay={0.08}>
              <h2 className="font-serif text-cream font-bold leading-[0.90] tracking-[-0.015em] text-[clamp(52px,7.5vw,96px)]">
                {r.title}
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.14}>
            <p className="text-cream/[0.72] text-[17px] m-0 max-w-[610px]">{r.text}</p>
          </ScrollReveal>
        </div>

        {/* Google rating showcase */}
        <ScrollReveal className="mb-8">
          <div className="flex items-center justify-between gap-6 p-6 border border-cream/[0.10] rounded-2xl bg-cream/[0.05] max-sm:flex-col max-sm:text-center max-sm:gap-5">
            <div className="flex items-center gap-5 max-sm:flex-col max-sm:items-center max-sm:gap-3">
              <AnimatedCounter
                to={4.4}
                decimals={1}
                className="font-serif text-cream font-bold text-[76px] leading-none tracking-tight"
              />
              <div>
                <div className="text-gold-soft text-[20px] leading-none tracking-[0.08em]" aria-label="4,4 étoiles sur 5">
                  ★★★★<span className="opacity-40">★</span>
                </div>
                <p className="text-cream/[0.55] text-[13px] mt-[6px] m-0 leading-tight">
                  Note Google<br />
                  <span className="text-cream/[0.35]">
                    <AnimatedCounter to={480} className="inline" />+ avis vérifiés
                  </span>
                </p>
              </div>
              <div className="w-px h-12 bg-cream/[0.10] max-sm:hidden" aria-hidden="true" />
              <p className="text-cream/[0.52] text-[13px] max-w-[260px] leading-relaxed m-0 max-sm:hidden">
                Note observée sur plusieurs plateformes publiques, dont Google.
              </p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-2 min-h-[42px] px-5 py-[10px] rounded-full border border-cream/[0.22] text-cream/[0.80] text-[13px] font-[700] tracking-[0.04em] hover:bg-cream/[0.10] hover:border-cream/[0.36] hover:-translate-y-[2px] transition-all duration-150"
            >
              Laisser un avis
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </ScrollReveal>

        {/* Desktop/tablet grid — 2 cols + dernier full-width si impair */}
        <div className="grid grid-cols-2 gap-4 max-sm:hidden md:grid-cols-3">
          {r.items.map((item, i) => (
            <ScrollReveal key={item.author} delay={i * 0.06}>
              <article className="flex flex-col justify-between min-h-[220px] h-full p-6 border border-cream/[0.14] rounded-lg bg-cream/[0.06] hover:bg-cream/[0.09] hover:-translate-y-[2px] hover:border-cream/[0.22] transition-all duration-200">
                <div>
                  <div className="text-gold-soft tracking-[0.08em] text-[13px]" aria-label="5 étoiles">★★★★★</div>
                  <p className="text-cream/[0.84] text-[16px] mt-3 mb-4 leading-relaxed">{item.text}</p>
                </div>
                <strong className="text-gold-soft text-[12px] tracking-[0.12em] uppercase">{item.author}</strong>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: swipe carousel */}
        <div className="hidden max-sm:flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-5 px-5 pb-4 no-scrollbar">
          {r.items.map((item) => (
            <article key={item.author} className="snap-start shrink-0 w-[84vw] flex flex-col justify-between p-6 border border-cream/[0.14] rounded-xl bg-cream/[0.06]">
              <div>
                <div className="text-gold-soft tracking-[0.08em] text-[14px]" aria-label="5 étoiles">★★★★★</div>
                <p className="text-cream/[0.84] text-[17px] mt-4 mb-5 leading-relaxed">{item.text}</p>
              </div>
              <strong className="text-gold-soft text-[13px] tracking-[0.12em] uppercase">{item.author}</strong>
            </article>
          ))}
        </div>

        <p className="mt-[18px] text-cream/[0.55] text-[13px]">
          {r.source}{" "}
          <a
            href={SLUURPY_URL}
            target="_blank"
            rel="noreferrer"
            className="text-gold-soft underline underline-offset-[3px] hover:text-gold transition-colors duration-150"
          >
            {r.sourceLink}
          </a>
        </p>
      </div>
      </div>
    </section>
  );
}
