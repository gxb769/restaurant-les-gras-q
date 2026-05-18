import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PHONE } from "@/lib/constants";

type Props = { dict: Dictionary };

export default function PrivateEvents({ dict }: Props) {
  const p = dict.private;

  return (
    <section className="bg-paper py-[104px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-2 gap-11 items-stretch max-md:grid-cols-1">

        <ScrollReveal className="flex flex-col justify-between p-[30px] rounded-lg bg-cream shadow-[0_18px_54px_rgba(16,17,20,0.08)]">
          <div>
            <div className="inline-flex items-center gap-[10px] text-gold text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-4">
              {p.eyebrow}
            </div>
            <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(48px,7vw,88px)] mb-5">
              {p.title}
            </h2>
            <p className="text-ink/[0.72] text-[18px]">{p.text}</p>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="mt-6 inline-flex items-center justify-center min-h-[48px] px-5 py-[14px] rounded-full text-[13px] font-[800] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold border border-white/20 transition-all duration-[200ms] hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(196,160,93,0.32)] active:translate-y-0 self-start"
          >
            {p.button}
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="flex flex-col justify-center p-[30px] rounded-lg bg-cream shadow-[0_18px_54px_rgba(16,17,20,0.08)]">
          <div className="grid gap-0">
            {p.points.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-[16px] border-t border-ink/[0.1] first:border-t-0 text-ink/[0.74]"
              >
                <span className="mt-[3px] shrink-0 w-[6px] h-[6px] rounded-full bg-gold" aria-hidden="true" />
                {point}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
