import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PHONE, PHONE_DISPLAY, EMAIL, ADDRESS, MAPS_URL, THEFORK_URL } from "@/lib/constants";

type Props = { dict: Dictionary };

export default function Contact({ dict }: Props) {
  const h = dict.hours;
  const c = dict.contact;
  const v = dict.visit;

  return (
    <section className="text-cream bg-cocoa py-[104px] pb-[84px] max-sm:py-[64px] max-sm:pb-[36px]" id="venir">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">

        <ScrollReveal className="grid grid-cols-[0.9fr_1.1fr] gap-[42px] items-end mb-11 max-md:grid-cols-1">
          <div>
            <div className="inline-flex items-center gap-[10px] text-gold-soft text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-3">
              {v.eyebrow}
            </div>
            <h2 className="font-serif text-cream font-bold leading-[0.94] text-[clamp(48px,7vw,88px)]">
              {v.title}
            </h2>
          </div>
          <p className="text-cream/[0.72] text-[17px] m-0 max-w-[610px]">{v.text}</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-[18px] items-stretch max-md:grid-cols-1">

          {/* Hours */}
          <ScrollReveal>
            <div className="flex flex-col h-full p-7 border border-cream/[0.16] rounded-lg bg-cream/[0.06] shadow-[0_20px_70px_rgba(0,0,0,0.13)]">
              <h3 className="font-serif text-gold-soft text-[38px] mb-[18px]">{h.title}</h3>
              <div className="grid gap-0">
                {h.days.map((d) => (
                  <div
                    key={d.name}
                    className="flex justify-between gap-[18px] py-[11px] border-b border-cream/[0.1] last:border-b-0 text-cream/[0.78] tabular-nums max-sm:grid max-sm:gap-1"
                  >
                    <strong className={["font-[600]", !d.hours ? "text-cream/40" : "text-cream"].join(" ")}>
                      {d.name}
                    </strong>
                    <span className={["text-right max-sm:text-left", !d.hours ? "text-cream/40 italic" : ""].join(" ")}>
                      {d.hours ?? h.closed}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col h-full p-7 border border-cream/[0.16] rounded-lg bg-cream/[0.06] shadow-[0_20px_70px_rgba(0,0,0,0.13)]">
              <h3 className="font-serif text-gold-soft text-[38px] mb-[18px]">{c.title}</h3>

              <div className="grid gap-3">
                <a
                  href={`tel:${PHONE}`}
                  aria-label={`Appeler le restaurant au ${PHONE_DISPLAY}`}
                  className="flex items-center min-h-[52px] px-4 rounded-lg bg-cream/[0.08] text-cream/[0.84] border border-cream/[0.08] hover:bg-cream/[0.14] hover:border-gold-soft/[0.3] hover:translate-x-[3px] transition-all duration-[180ms]"
                >
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center min-h-[52px] px-4 rounded-lg bg-cream/[0.08] text-cream/[0.84] border border-cream/[0.08] hover:bg-cream/[0.14] hover:border-gold-soft/[0.3] hover:translate-x-[3px] transition-all duration-[180ms]"
                >
                  {EMAIL}
                </a>
                <p className="flex items-center min-h-[52px] px-4 rounded-lg bg-cream/[0.08] text-cream/[0.82] border border-cream/[0.08] m-0 text-[14px]">
                  {ADDRESS}
                </p>
              </div>

              {/* Services */}
              <div aria-label="Services proposés" className="flex flex-wrap gap-[9px] mt-[20px]">
                {c.services.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-[8px] border border-gold-soft/[0.24] rounded-full text-gold-soft bg-gold-soft/[0.07] text-[13px] font-[700] leading-none"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Map embarquée */}
              <div className="flex-1 mt-[18px] rounded-lg overflow-hidden min-h-[230px]">
                <iframe
                  src="https://maps.google.com/maps?q=49.4859435,5.705279&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "230px", display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation du restaurant Les Gras Q"
                />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 min-h-[42px] px-4 rounded-lg bg-cream/[0.08] text-cream/[0.72] border border-cream/[0.08] hover:bg-cream/[0.14] hover:border-gold-soft/[0.3] transition-all duration-[180ms] text-[13px] font-[700]"
              >
                {c.mapLabel}
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                  <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
        {/* ── Final CTA + Private events row ─────────────────── */}
        <ScrollReveal className="mt-[48px] max-sm:mt-[36px]">
          <div className="grid grid-cols-[1fr_auto] gap-6 items-center p-7 rounded-xl bg-cream/[0.07] border border-cream/[0.12] max-md:grid-cols-1 max-md:text-center">
            <div>
              <p className="text-gold-soft/70 text-[11px] font-[900] tracking-[0.18em] uppercase mb-[10px]">
                {dict.cta.eyebrow}
              </p>
              <p className="font-serif text-cream font-[300] italic text-[clamp(20px,2.5vw,32px)] leading-[1.15]">
                {dict.cta.title}
              </p>
              <p className="text-cream/[0.50] text-[13px] mt-2">{dict.private.text}</p>
            </div>
            <div className="flex flex-col gap-3 shrink-0 max-md:flex-row max-md:justify-center flex-wrap">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-full text-[13px] font-[800] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold border border-white/20 transition-all duration-[200ms] hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(196,160,93,0.32)] active:translate-y-0 whitespace-nowrap"
              >
                {dict.cta.button}
              </a>
              <a
                href={THEFORK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-full text-[13px] font-[800] tracking-[0.05em] uppercase text-cream border border-cream/[0.25] bg-cream/[0.06] transition-all duration-[200ms] hover:-translate-y-[2px] hover:bg-cream/[0.12] active:translate-y-0 whitespace-nowrap"
              >
                TheFork
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
