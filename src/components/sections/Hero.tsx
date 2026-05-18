import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

const PHONE = "+33382256951";
const MENU_PDF = "/assets/menu-printemps.pdf";

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
      />
      {/* Overlays */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[rgba(22,19,17,0.94)] via-[rgba(22,19,17,0.62)] to-[rgba(22,19,17,0.18)]" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[rgba(22,19,17,0.88)] via-[rgba(22,19,17,0.1)] to-[rgba(22,19,17,0.56)]" />

      <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-[1fr_330px] gap-[42px] items-end max-md:grid-cols-1">
        <div style={{ animation: "fade-up 800ms 200ms ease-out both" }}>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-[10px] text-gold-soft text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current">
            {h.eyebrow}
          </div>

          <h1 className="font-serif font-bold leading-[0.94] mt-5 text-[clamp(64px,12vw,164px)]">
            Restaurant Les Gras Q
          </h1>

          <p className="mt-6 text-cream/[0.82] text-[clamp(17px,2vw,22px)] max-w-[690px]">
            {h.text}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center min-h-[48px] px-5 py-[14px] rounded-full text-[13px] font-[800] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold border border-white/20 transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)] max-sm:w-full"
            >
              {h.callBtn}
            </a>
            <a
              href={MENU_PDF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-5 py-[14px] rounded-full text-[13px] font-[800] tracking-[0.05em] uppercase text-cream border border-cream/[0.28] bg-cream/[0.08] transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)] max-sm:w-full"
            >
              {h.menuBtn}
            </a>
          </div>

          {/* Quick info strip */}
          <div
            aria-label="Informations rapides"
            className="grid grid-cols-3 mt-11 border border-cream/[0.15] bg-cream/[0.08] backdrop-blur-[12px] rounded-lg overflow-hidden max-sm:grid-cols-1"
          >
            {[
              { label: q.addressLabel, value: q.addressValue },
              { label: q.todayLabel, value: q.todayText },
              { label: q.moodLabel, value: q.moodText },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-between min-h-[104px] p-[18px] border-r border-cream/[0.13] last:border-r-0 hover:bg-cream/[0.06] transition-colors max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0 max-sm:min-h-auto"
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
          className="border border-cream/[0.18] bg-[rgba(22,19,17,0.52)] backdrop-blur-[18px] rounded-lg p-5 shadow-[0_24px_80px_rgba(22,19,17,0.28)] relative overflow-hidden before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-gradient-to-b before:from-gold-soft before:to-wine max-md:max-w-[420px] max-sm:hidden"
          style={{ animation: "fade-up 800ms 400ms ease-out both" }}
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
