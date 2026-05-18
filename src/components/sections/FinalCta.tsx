import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PHONE } from "@/lib/constants";

type Props = { dict: Dictionary };

export default function FinalCta({ dict }: Props) {
  const c = dict.cta;

  return (
    <section className="text-cream bg-ink py-[90px] text-center">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">
        <ScrollReveal>
          <div className="inline-flex items-center gap-[10px] text-gold-soft text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-5">
            {c.eyebrow}
          </div>
          <h2 className="font-serif font-bold leading-[0.94] text-[clamp(52px,8vw,108px)] max-w-[900px] mx-auto">
            {c.title}
          </h2>
          <p className="max-w-[560px] mx-auto mt-[22px] mb-[34px] text-cream/[0.72] text-[18px] leading-relaxed">
            {c.text}
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center min-h-[52px] px-7 py-[14px] rounded-full text-[14px] font-[800] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold border border-white/20 transition-all duration-[200ms] hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(196,160,93,0.38)] active:translate-y-0"
          >
            {c.button}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
