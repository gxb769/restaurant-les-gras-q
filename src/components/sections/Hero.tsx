import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import { PHONE } from "@/lib/constants";

type Props = { dict: Dictionary };

export default function Hero({ dict }: Props) {
  const h = dict.hero;
  const q = dict.quick;

  return (
    <header
      id="top"
      className="min-h-svh relative text-cream grid items-end pt-[130px] pb-14 isolate overflow-hidden"
    >
      {/* Background image with slow zoom */}
      <div
        className="absolute inset-0 -z-30 bg-cover"
        style={{
          backgroundImage: "url('/assets/hero-restaurant.jpg')",
          backgroundPosition: "55% center",
          animation: "hero-settle 1800ms ease-out both",
        }}
        role="img"
        aria-label="Salle du restaurant Les Gras Q"
      />

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
            className="inline-flex items-center gap-[10px] text-gold-soft text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current"
            style={{ animation: "fade-up 700ms 80ms ease-out both" }}
          >
            {h.eyebrow}
          </div>

          {/* Title */}
          <h1
            className="font-serif font-bold leading-[0.90] mt-5 text-[clamp(64px,11vw,156px)] max-sm:text-[clamp(58px,18vw,156px)]"
            style={{ animation: "fade-up 800ms 200ms ease-out both" }}
          >
            Restaurant<br />Les Gras Q
          </h1>

          {/* Tagline */}
          <p
            className="mt-5 text-gold-soft/90 text-[clamp(15px,1.5vw,18px)] font-[500] italic tracking-[0.03em]"
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
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center min-h-[58px] px-10 py-[16px] rounded-full text-[14px] font-[900] tracking-[0.06em] uppercase text-[#211812] bg-gradient-to-br from-[#f5e4ba] to-gold shadow-[0_10px_36px_rgba(196,160,93,0.40)] transition-all duration-[200ms] hover:-translate-y-[3px] hover:shadow-[0_22px_56px_rgba(196,160,93,0.54)] active:translate-y-0 max-sm:w-full"
            >
              {h.callBtn}
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center min-h-[58px] px-8 py-[16px] rounded-full text-[14px] font-[800] tracking-[0.05em] uppercase text-cream border border-cream/[0.30] bg-cream/[0.07] backdrop-blur-sm transition-all duration-[200ms] hover:-translate-y-[2px] hover:bg-cream/[0.14] hover:border-cream/[0.40] hover:shadow-[0_16px_36px_rgba(0,0,0,0.20)] active:translate-y-0 max-sm:w-full"
            >
              {h.menuBtn}
            </a>
          </div>

          {/* Quick info strip — hidden on mobile for clean CTA focus */}
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

        {/* Panel */}
        <aside
          className="border border-cream/[0.16] bg-[rgba(16,17,20,0.54)] backdrop-blur-[20px] rounded-xl p-6 shadow-[0_24px_80px_rgba(16,17,20,0.32)] relative overflow-hidden before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-gradient-to-b before:from-gold-soft before:to-wine max-md:max-w-[420px] max-sm:hidden"
          style={{ animation: "fade-up 800ms 440ms ease-out both" }}
        >
          <p className="text-cream/[0.68] text-[13px] m-0">{h.panelLabel}</p>
          <strong className="block font-serif text-cream text-[34px] leading-none mt-3 mb-3">
            {h.panelTitle}
          </strong>
          <p className="text-cream/[0.68] text-[13px] m-0 leading-relaxed">{h.panelText}</p>
        </aside>
      </div>
    </header>
  );
}
