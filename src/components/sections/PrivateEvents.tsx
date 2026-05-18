import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PHONE } from "@/lib/constants";

type Props = { dict: Dictionary };

export default function PrivateEvents({ dict }: Props) {
  const p = dict.private;

  return (
    <section className="bg-paper py-[104px] max-sm:py-[64px]">
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

        <ScrollReveal delay={0.1} className="grid grid-cols-2 gap-[14px] max-sm:grid-cols-1">
          {p.points.map((point, i) => {
            const icons = [
              // Groupe / événement
              <svg key="g" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M15 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM1 19c0-3.314 2.686-5 6-5h.5M21 19c0-3.314-2.686-5-6-5H9c-3.314 0-6 1.686-6 5" stroke="#C4A05D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              // Menu / liste
              <svg key="m" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><rect x="4" y="3" width="14" height="16" rx="2" stroke="#C4A05D" strokeWidth="1.5"/><path d="M8 8h6M8 12h6M8 16h4" stroke="#C4A05D" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              // Salle / terrasse
              <svg key="s" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M2 19h18M4 19V9l7-6 7 6v10" stroke="#C4A05D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="8" y="13" width="6" height="6" rx="1" stroke="#C4A05D" strokeWidth="1.5"/></svg>,
              // Téléphone / contact
              <svg key="t" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M5.2 3h3.6l1.8 4.5-2.25 1.35a10.8 10.8 0 0 0 4.8 4.8L14.5 11.4 19 13.2v3.6c0 .99-.81 1.8-1.8 1.8C8.34 18.6 3.4 13.66 3.4 5A1.8 1.8 0 0 1 5.2 3Z" stroke="#C4A05D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            ];
            return (
              <div
                key={i}
                className="flex flex-col gap-4 p-[22px] rounded-xl bg-cream shadow-[0_12px_36px_rgba(16,17,20,0.07)] border border-ink/[0.05] hover:shadow-[0_18px_48px_rgba(16,17,20,0.11)] hover:-translate-y-[2px] transition-all duration-200"
              >
                <span className="w-[42px] h-[42px] rounded-xl bg-gold/[0.08] border border-gold/[0.18] flex items-center justify-center shrink-0">
                  {icons[i]}
                </span>
                <p className="text-espresso text-[15px] font-[600] leading-snug m-0">
                  {point}
                </p>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
