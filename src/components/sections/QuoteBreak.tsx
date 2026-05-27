import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

type Props = { dict: Dictionary };

export default function QuoteBreak({ dict }: Props) {
  return (
    <section className="relative py-[130px] max-sm:py-[80px] overflow-hidden text-cream text-center isolate">
      {/* Background image — fixed (CSS) parallax substitute: object-position shift via scroll is skipped
          for performance; static centred image with oversized inset prevents edge gaps */}
      <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <div style={{ position: "absolute", inset: "-12%" }}>
          <Image
            src="/assets/ambiance-resto.webp"
            alt=""
            fill
            className="object-cover object-[center_60%]"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[rgba(10,8,6,0.80)]" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(196,160,93,0.07) 0%, transparent 70%)" }}
      />

      <div className="w-[min(820px,calc(100%-40px))] mx-auto">
        <span className="block w-[48px] h-px bg-gold-soft mx-auto mb-8 opacity-50" aria-hidden="true" />
        <blockquote className="font-serif text-cream font-[300] italic leading-[1.10] text-[clamp(24px,4.5vw,60px)] m-0">
          &ldquo;{dict.cta.title}&rdquo;
        </blockquote>
        <span className="block w-[48px] h-px bg-gold-soft mx-auto mt-8 opacity-50" aria-hidden="true" />
        <p className="text-gold-soft/70 text-[12px] font-[800] tracking-[0.18em] uppercase mt-6">
          {dict.visit.eyebrow}
        </p>
      </div>
    </section>
  );
}
