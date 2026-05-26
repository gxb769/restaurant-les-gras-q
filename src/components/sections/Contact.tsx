import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PHONE, PHONE_DISPLAY, EMAIL, ADDRESS, MAPS_URL } from "@/lib/constants";

type Props = { dict: Dictionary };

export default function Contact({ dict }: Props) {
  const h = dict.hours;
  const c = dict.contact;
  const v = dict.visit;

  return (
    <section className="text-cream py-[104px] pb-0 max-sm:py-[64px] relative overflow-hidden border-t border-cream/[0.05]" id="venir">
      {/* Warm gold glow — halo final de page */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(201,168,76,0.07),transparent)] pointer-events-none" aria-hidden="true" />

      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">

        {/* ── Section header ────────────────────────────────── */}
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-[42px] items-end mb-14 max-md:grid-cols-1">
          <div>
            <ScrollReveal>
              <div className="flex items-baseline gap-[12px] mb-3">
                <span className="font-serif text-gold-soft/50 text-[13px] font-[300] italic">04</span>
                <span className="w-6 h-px bg-gold-soft/30 self-center shrink-0" aria-hidden="true" />
                <span className="text-gold-soft text-[11px] font-[900] tracking-[0.20em] uppercase">{v.eyebrow}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="clip" delay={0.08}>
              <h2 className="font-serif text-cream font-bold leading-[0.90] tracking-[-0.015em] text-[clamp(52px,7.5vw,96px)]">
                {v.title}
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.14}>
            <p className="text-cream/[0.72] text-[17px] m-0 max-w-[610px]">{v.text}</p>
          </ScrollReveal>
        </div>

        {/* ── Main grid: [3fr 2fr] ──────────────────────────── */}
        <div className="grid grid-cols-[3fr_2fr] gap-[52px] items-start max-md:grid-cols-1">

          {/* Hours — no card, clean rows directly on the bg */}
          <ScrollReveal>
            <h3 className="font-serif text-gold-soft text-[32px] mb-[22px] leading-none">{h.title}</h3>
            <div>
              {h.days.map((d, i) => (
                <div
                  key={d.name}
                  className={[
                    "flex justify-between gap-5 py-[13px] tabular-nums",
                    i < h.days.length - 1 ? "border-b border-cream/[0.08]" : "",
                  ].join(" ")}
                >
                  <strong className={[
                    "text-[15px] font-[600] tracking-[0.01em]",
                    !d.hours ? "text-cream/[0.32]" : "text-cream",
                  ].join(" ")}>
                    {d.name}
                  </strong>
                  <span className={[
                    "text-[15px] text-right",
                    !d.hours ? "text-cream/[0.32] italic" : "text-cream/[0.78]",
                  ].join(" ")}>
                    {d.hours ?? h.closed}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact sidebar */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-0">

              {/* Big phone */}
              <a
                href={`tel:${PHONE}`}
                aria-label={`Appeler le restaurant au ${PHONE_DISPLAY}`}
                className="group block mb-6"
              >
                <span className="block text-gold-soft/50 text-[10px] font-[900] tracking-[0.18em] uppercase mb-2">
                  Téléphone
                </span>
                <span className="font-serif text-cream text-[clamp(22px,2.8vw,32px)] leading-none group-hover:text-gold-soft transition-colors duration-200">
                  {PHONE_DISPLAY}
                </span>
              </a>

              {/* Divider */}
              <span className="block w-full h-px bg-cream/[0.10] mb-6" aria-hidden="true" />

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="group flex flex-col mb-5 hover:text-gold-soft transition-colors duration-200"
              >
                <span className="text-cream/[0.40] text-[10px] font-[900] tracking-[0.18em] uppercase mb-[5px]">
                  Email
                </span>
                <span className="text-cream/[0.78] text-[14px]">{EMAIL}</span>
              </a>

              {/* Address */}
              <p className="m-0 mb-6">
                <span className="block text-cream/[0.40] text-[10px] font-[900] tracking-[0.18em] uppercase mb-[5px]">
                  Adresse
                </span>
                <span className="text-cream/[0.78] text-[14px] leading-snug">{ADDRESS}</span>
              </p>

              {/* Service tags */}
              <div aria-label="Services proposés" className="flex flex-wrap gap-[8px] mb-7">
                {c.services.map((s) => (
                  <span
                    key={s}
                    className="px-[10px] py-[6px] border border-gold-soft/[0.20] rounded-full text-gold-soft/80 bg-gold-soft/[0.06] text-[12px] font-[700] leading-none"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-[10px]">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center min-h-[50px] px-6 rounded-full text-[13px] font-[800] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold border border-white/20 transition-all duration-[200ms] hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(196,160,93,0.32)] active:translate-y-0"
                >
                  {dict.cta.button}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Private events tagline ────────────────────────── */}
        <ScrollReveal className="mt-[52px] max-sm:mt-[36px]">
          <div className="flex items-center gap-6 py-6 border-t border-cream/[0.08] max-sm:flex-col max-sm:items-start">
            <p className="font-serif text-cream/[0.55] font-[300] italic text-[clamp(16px,2vw,22px)] leading-[1.3] m-0 flex-1">
              {dict.cta.title}
            </p>
            <span className="text-cream/[0.28] text-[13px] leading-relaxed max-w-[340px] shrink-0">
              {dict.private.text}
            </span>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Full-width map ────────────────────────────────── */}
      <ScrollReveal className="mt-[52px] max-sm:mt-[36px]">
        <div className="relative w-full h-[320px] max-sm:h-[220px] overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Les+Gras+Q,+32+Rue+de+Longwy,+54870+Cons-la-Grandville&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation du restaurant Les Gras Q"
          />
          {/* Top gradient fade from section bg into map */}
          <div
            className="absolute inset-x-0 top-0 h-[60px] pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #0a0807, transparent)" }}
          />
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 min-h-[48px] bg-[rgba(10,8,7,0.80)] text-cream/[0.60] text-[13px] font-[700] tracking-[0.04em] hover:text-gold-soft hover:bg-[rgba(10,8,7,0.95)] transition-all duration-[180ms]"
        >
          {c.mapLabel}
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </ScrollReveal>

    </section>
  );
}
