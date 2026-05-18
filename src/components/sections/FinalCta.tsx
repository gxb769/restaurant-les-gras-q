import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

const PHONE = "+33382256951";

type Props = { dict: Dictionary };

export default function FinalCta({ dict }: Props) {
  const c = dict.cta;

  return (
    <section className="text-cream bg-ink py-[84px] text-center">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">
        <div className="inline-flex items-center gap-[10px] text-gold-soft text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-5">
          {c.eyebrow}
        </div>
        <h2 className="font-serif font-bold leading-[0.94] text-[clamp(52px,8vw,108px)] max-w-[900px] mx-auto">
          {c.title}
        </h2>
        <p className="max-w-[580px] mx-auto mt-[22px] mb-[30px] text-cream/[0.72] text-[18px]">
          {c.text}
        </p>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center justify-center min-h-[48px] px-5 py-[14px] rounded-full text-[13px] font-[800] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold border border-white/20 transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
        >
          {c.button}
        </a>
      </div>
    </section>
  );
}
