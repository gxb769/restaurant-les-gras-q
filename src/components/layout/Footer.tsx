import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import { PHONE, PHONE_DISPLAY, EMAIL, MAPS_URL } from "@/lib/constants";

type Props = { dict: Dictionary; lang: string };

export default function Footer({ dict, lang }: Props) {
  const f = dict.footer;
  const h = dict.hours;
  const c = dict.contact;

  return (
    <footer className="text-cream border-t border-cream/[0.06]">

      {/* Main footer content */}
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto py-16 max-sm:py-12">
        <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10">

          {/* Col 1: Identity + contact */}
          <div className="max-sm:order-2">
            <p className="text-gold text-[10px] font-[900] tracking-[0.22em] uppercase mb-3">Restaurant</p>
            <h2 className="font-serif text-cream text-[44px] font-bold leading-none mb-4">Les Gras Q</h2>
            <p className="text-cream/40 text-[13px] leading-[1.8] mb-6">
              Cuisine française traditionnelle<br />
              {f.address}
            </p>
            <a
              href={`tel:${PHONE}`}
              className="block text-gold-soft hover:text-gold text-[16px] font-[700] transition-colors duration-150 mb-1"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-cream/35 hover:text-cream/65 text-[13px] transition-colors duration-150"
            >
              {EMAIL}
            </a>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4 mt-6">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/lesgrasq/",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0" fill="currentColor" strokeWidth="2.5"/>
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/lesgrasq/",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ),
                },
                {
                  label: "TripAdvisor",
                  href: "https://www.tripadvisor.fr/Restaurant_Review-g2341428-d8126804-Reviews-Les_Gras_Q-Cons_la_Grandville_Meurthe_et_Moselle_Grand_Est.html",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.33 0 2.6.31 3.73.86L14 7.5C13.38 7.19 12.71 7 12 7s-1.38.19-2 .5L8.27 5.86C9.4 5.31 10.67 5 12 5zm-5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm8.5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-3-4.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"/>
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-cream/30 hover:text-gold-soft transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Hours */}
          <div className="max-sm:order-3">
            <p className="text-gold text-[10px] font-[900] tracking-[0.22em] uppercase mb-4">{h.title}</p>
            <div>
              {h.days.map((d) => (
                <div
                  key={d.name}
                  className="flex justify-between gap-4 py-[9px] border-b border-cream/[0.06] last:border-b-0"
                >
                  <span className={d.hours ? "text-cream/65 text-[13px]" : "text-cream/22 text-[13px]"}>
                    {d.name}
                  </span>
                  <span className={d.hours ? "text-cream/40 text-[12px] tabular-nums" : "text-cream/22 text-[12px] italic"}>
                    {d.hours ?? h.closed}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Reservation */}
          <div className="flex flex-col max-lg:col-span-2 max-sm:col-span-1 max-sm:order-1">
            <p className="text-gold text-[10px] font-[900] tracking-[0.22em] uppercase mb-4">
              {dict.visit.eyebrow}
            </p>
            <p className="text-cream/40 text-[13px] leading-[1.8] mb-8 flex-1">
              {dict.cta.text}
            </p>
            <div className="flex flex-col gap-3 max-sm:flex-row max-sm:flex-wrap">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center min-h-[52px] px-7 rounded-full text-[13px] font-[900] tracking-[0.06em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold shadow-[0_8px_28px_rgba(196,160,93,0.22)] transition-all duration-[200ms] hover:-translate-y-[2px] hover:shadow-[0_16px_44px_rgba(196,160,93,0.38)] active:translate-y-0"
              >
                {dict.cta.button}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-full text-[12px] font-[700] tracking-[0.05em] uppercase text-cream/45 border border-cream/[0.12] hover:text-cream/70 hover:border-cream/22 transition-all duration-[200ms]"
              >
                {c.mapLabel}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/[0.06]" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
        <div className="w-[min(1180px,calc(100%-40px))] mx-auto py-5 max-sm:pb-[84px] flex flex-wrap justify-between items-center gap-x-6 gap-y-3 text-[11px] text-cream/[0.25]">
          <span>{f.owner}</span>
          <nav aria-label="Liens légaux" className="flex items-center gap-5 flex-wrap">
            <Link
              href={`/${lang}/mentions-legales`}
              className="hover:text-cream/50 transition-colors duration-150"
            >
              Mentions légales
            </Link>
            <Link
              href={`/${lang}/politique-de-confidentialite`}
              className="hover:text-cream/50 transition-colors duration-150"
            >
              Politique de confidentialité
            </Link>
          </nav>
          <span>
            Réalisé par{" "}
            <a
              href="https://lumio.studio"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cream/50 underline underline-offset-[3px] transition-colors duration-150"
            >
              LUMIO — Gabin Delachenal
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
