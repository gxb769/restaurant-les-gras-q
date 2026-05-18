import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import { PHONE } from "@/lib/constants";

type Props = { dict: Dictionary };

export default function Hero({ dict }: Props) {
  const h = dict.hero;
  const q = dict.quick;

  return (
    <header
      id="top"
      className="min-h-svh relative text-cream grid items-end pt-[130px] pb-11 isolate overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-30 bg-[url('/assets/hero-restaurant.jpg')] bg-center bg-cover"
        style={{ animation: "hero-settle 1400ms ease-out both" }}
        role="img"
        aria-label="Salle du restaurant Les Gras Q"
      />
      {/* Overlays */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[rgba(16,17,20,0.97)] via-[rgba(16,17,20,0.72)] to-[rgba(16,17,20,0.22)]" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[rgba(16,17,20,0.95)] via-[rgba(16,17,20,0.12)] to-[rgba(16,17,20,0.58)]" />

      <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-[1fr_330px] gap-[42px] items-end max-md:grid-cols-1">

        {/* Main content */}
        <div style={{ animation: "fade-up 800ms 200ms ease-out both" }}>
          <div className="inline-flex items-center gap-[10px] text-gold-soft text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current">
            {h.eyebrow}
          </div>

          <h1 className="font-serif font-bold leading-[0.92] mt-5 text-[clamp(64px,11vw,156px)]">
            Restaurant<br />Les Gras Q
          </h1>

          <p className="mt-4 text-gold-soft text-[clamp(15px,1.6vw,19px)] font-[500] italic tracking-[0.02em]">
            Cuisine française généreuse &amp; raffinée
          </p>

          <p className="mt-4 text-cream/[0.78] text-[clamp(16px,1.8vw,20px)] max-w-[620px] leading-relaxed">
            {h.text}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-9">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center min-h-[56px] px-9 py-[16px] rounded-full text-[14px] font-[900] tracking-[0.06em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold shadow-[0_8px_32px_rgba(196,160,93,0.35)] transition-all duration-[200ms] hover:-translate-y-[3px] hover:shadow-[0_20px_54px_rgba(196,160,93,0.50)] active:translate-y-0 max-sm:w-full"
            >
              {h.callBtn}
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center min-h-[56px] px-8 py-[16px] rounded-full text-[14px] font-[800] tracking-[0.05em] uppercase text-cream border border-cream/[0.32] bg-cream/[0.08] backdrop-blur-sm transition-all duration-[200ms] hover:-translate-y-[2px] hover:bg-cream/[0.16] hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)] active:translate-y-0 max-sm:w-full"
            >
              {h.menuBtn}
            </a>
          </div>

          {/* Quick info strip */}
          <div
            aria-label="Informations rapides"
            className="grid grid-cols-3 mt-11 border border-cream/[0.14] bg-cream/[0.07] backdrop-blur-[12px] rounded-lg overflow-hidden max-sm:grid-cols-1"
          >
            {[
              { label: q.addressLabel, value: q.addressValue },
              { label: q.todayLabel,   value: q.todayText },
              { label: q.moodLabel,    value: q.moodText },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-between min-h-[104px] p-[18px] border-r border-cream/[0.12] last:border-r-0 hover:bg-cream/[0.06] transition-colors duration-150 max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0"
              >
                <span className="text-gold-soft text-[11px] font-[800] tracking-[0.14em] uppercase">
                  {item.label}
                </span>
                <strong className="block mt-[7px] text-cream text-[15px] font-[600]">
                  {item.value}
                </strong>
              </div>
            ))}
          </div>
        </div>

        {/* Panel */}
        <aside
          className="border border-cream/[0.18] bg-[rgba(16,17,20,0.52)] backdrop-blur-[18px] rounded-lg p-5 shadow-[0_24px_80px_rgba(16,17,20,0.28)] relative overflow-hidden before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-gradient-to-b before:from-gold-soft before:to-wine max-md:max-w-[420px] max-sm:hidden"
          style={{ animation: "fade-up 800ms 420ms ease-out both" }}
        >
          <p className="text-cream/[0.72] text-[14px] m-0">{h.panelLabel}</p>
          <strong className="block font-serif text-cream text-[34px] leading-none mt-2 mb-3">
            {h.panelTitle}
          </strong>
          <p className="text-cream/[0.72] text-[14px] m-0">{h.panelText}</p>
        </aside>
      </div>
    </header>
  );
}
