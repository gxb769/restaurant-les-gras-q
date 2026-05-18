import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

const PHONE = "+33382256951";
const PHONE_DISPLAY = "+33 3 82 25 69 51";
const EMAIL = "lesgrasq@orange.fr";
const ADDRESS = "Rue de Longwy 32, 54870 Cons-la-Grandville, France";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rue%20de%20Longwy%2032%2054870%20Cons-la-Grandville%20France";

type Props = { dict: Dictionary };

export default function Contact({ dict }: Props) {
  const h = dict.hours;
  const c = dict.contact;
  const v = dict.visit;

  return (
    <section className="text-cream bg-cocoa py-[104px] pb-[84px]" id="venir">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">

        {/* Head */}
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-[42px] items-end mb-11 max-md:grid-cols-1">
          <div>
            <div className="inline-flex items-center gap-[10px] text-gold-soft text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-3">
              {v.eyebrow}
            </div>
            <h2 className="font-serif text-cream font-bold leading-[0.94] text-[clamp(48px,7vw,88px)]">
              {v.title}
            </h2>
          </div>
          <p className="text-cream/[0.72] text-[17px] m-0 max-w-[610px]">{v.text}</p>
        </div>

        {/* Panels */}
        <div className="grid grid-cols-2 gap-[18px] items-stretch max-md:grid-cols-1">

          {/* Hours */}
          <div className="flex flex-col p-7 border border-cream/[0.16] rounded-lg bg-cream/[0.06] shadow-[0_20px_70px_rgba(0,0,0,0.13)]">
            <h3 className="font-serif text-gold-soft text-[40px] mb-[18px]">{h.title}</h3>
            <div className="grid gap-2">
              {h.days.map((d) => (
                <div
                  key={d.name}
                  className="flex justify-between gap-[18px] py-[11px] border-b border-cream/[0.11] last:border-b-0 text-cream/[0.8] tabular-nums max-sm:grid max-sm:gap-1"
                >
                  <strong className="text-cream font-[600]">{d.name}</strong>
                  <span className="text-right max-sm:text-left">
                    {d.hours ?? h.closed}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col p-7 border border-cream/[0.16] rounded-lg bg-cream/[0.06] shadow-[0_20px_70px_rgba(0,0,0,0.13)]">
            <h3 className="font-serif text-gold-soft text-[40px] mb-[18px]">{c.title}</h3>

            <div className="grid gap-4">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center min-h-[58px] px-4 rounded-lg bg-cream/[0.08] text-cream/[0.82] border border-cream/[0.08] hover:bg-cream/[0.12] hover:border-gold-soft/[0.22] hover:translate-x-[3px] transition-all duration-[180ms]"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center min-h-[58px] px-4 rounded-lg bg-cream/[0.08] text-cream/[0.82] border border-cream/[0.08] hover:bg-cream/[0.12] hover:border-gold-soft/[0.22] hover:translate-x-[3px] transition-all duration-[180ms]"
              >
                {EMAIL}
              </a>
              <p className="flex items-center min-h-[58px] px-4 rounded-lg bg-cream/[0.08] text-cream/[0.82] border border-cream/[0.08] m-0">
                {ADDRESS}
              </p>
            </div>

            {/* Services */}
            <div aria-label="Services" className="flex flex-wrap gap-[10px] mt-[22px]">
              {c.services.map((s) => (
                <span
                  key={s}
                  className="px-3 py-[9px] border border-gold-soft/[0.24] rounded-full text-gold-soft bg-gold-soft/[0.08] text-[13px] font-[700] leading-none"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Map card */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-h-[250px] mt-[18px] rounded-lg overflow-hidden bg-[linear-gradient(135deg,rgba(31,45,41,0.94),rgba(120,60,69,0.74)),url('/assets/village.jpg')] bg-center bg-cover grid items-end p-6 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(0,0,0,0.2)] transition-all duration-[180ms]"
            >
              <div>
                <span className="text-cream/[0.78] text-[14px]">{c.mapLabel}</span>
                <strong className="block font-serif text-cream text-[36px] leading-none mt-1">
                  Cons-la-Grandville
                </strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
