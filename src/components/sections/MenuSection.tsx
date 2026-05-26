import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MenuTabs from "@/components/ui/MenuTabs";
import { PHONE } from "@/lib/constants";

type Props = { dict: Dictionary };

const DISH_META = [
  { photo: "/assets/dish-entree.jpg", price: "14€", num: "01" },
  { photo: "/assets/dish-bar.jpg",    price: "22€", num: "02" },
  { photo: "/assets/dish-boeuf.jpg",  price: "20€", num: "03" },
  { photo: "/assets/dish-dessert.jpg",price: "7€",  num: "04" },
];

export default function MenuSection({ dict }: Props) {
  const fm = dict.fullMenu;
  const m = dict.menu;
  const dishes = m.dishes.slice(0, 4);

  return (
    <section id="menu">

      {/* Gradient bridge: previous cream section → espresso */}
      <div className="h-20 bg-gradient-to-b from-cream to-espresso" aria-hidden="true" />

      {/* ══════════════════════════════
          SIGNATURES — fond sombre
      ══════════════════════════════ */}
      <div className="bg-espresso">

        {/* Header */}
        <div className="w-[min(1180px,calc(100%-40px))] mx-auto pt-[104px] pb-16 max-sm:pt-[64px] max-sm:pb-10">
          <ScrollReveal>
            <div className="flex items-baseline gap-[12px] mb-5">
              <span className="font-serif text-gold-soft/50 text-[13px] font-[300] italic">01</span>
              <span className="w-6 h-px bg-gold-soft/30 self-center shrink-0" aria-hidden="true" />
              <span className="text-gold-soft text-[11px] font-[900] tracking-[0.20em] uppercase">Signatures du Chef</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="clip" delay={0.08}>
            <h2 className="font-serif text-cream font-bold leading-[0.90] tracking-[-0.015em] text-[clamp(56px,8vw,110px)] m-0">
              {m.title}
            </h2>
          </ScrollReveal>
        </div>

        {/* Alternating dish rows */}
        <div className="border-t border-cream/[0.07]">
          {dishes.map((dish, i) => {
            const { photo, price, num } = DISH_META[i];
            const reversed = i % 2 === 1;

            return (
              <ScrollReveal key={dish.title}>
                <div className="flex items-stretch border-b border-cream/[0.07] max-md:flex-col">

                  {/* Photo */}
                  <div
                    className={[
                      "relative overflow-hidden group",
                      "md:w-[56%] min-h-[500px]",
                      "max-md:w-full max-md:min-h-0 max-md:aspect-[4/3]",
                      "max-md:order-1",
                      reversed ? "md:order-2" : "md:order-1",
                    ].join(" ")}
                  >
                    <Image
                      src={photo}
                      alt={dish.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, 56vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: reversed
                          ? "linear-gradient(to left, rgba(22,18,14,0.42) 0%, transparent 55%)"
                          : "linear-gradient(to right, rgba(22,18,14,0.42) 0%, transparent 55%)",
                      }}
                    />
                  </div>

                  {/* Text */}
                  <div
                    className={[
                      "relative flex-1 flex flex-col justify-center overflow-hidden",
                      "px-14 py-16 max-md:px-7 max-md:py-10 max-sm:px-5 max-sm:py-8",
                      "max-md:order-2",
                      reversed ? "md:order-1" : "md:order-2",
                    ].join(" ")}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 -translate-y-1/2 right-2 font-serif text-cream/[0.04] text-[200px] leading-none font-bold select-none pointer-events-none max-md:hidden"
                    >
                      {num}
                    </span>
                    <span className="inline-flex items-center gap-[10px] text-gold-soft text-[11px] font-[900] tracking-[0.20em] uppercase mb-5">
                      <span className="w-6 h-px bg-gold-soft shrink-0" aria-hidden="true" />
                      {dish.label}
                    </span>
                    <h3 className="font-serif text-cream font-bold leading-[0.96] text-[clamp(34px,3.4vw,58px)] m-0 mb-5">
                      {dish.title}
                    </h3>
                    <p className="text-cream/[0.76] text-[17px] leading-relaxed m-0 mb-8 max-w-[420px]">
                      {dish.text}
                    </p>
                    <span className="font-serif text-gold-soft text-[34px] font-bold leading-none">
                      {price}
                    </span>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Separator to full menu */}
        <div className="w-[min(1180px,calc(100%-40px))] mx-auto py-10 flex items-center gap-5">
          <span className="flex-1 h-px bg-cream/[0.08]" />
          <span className="text-cream/[0.30] text-[11px] font-[800] tracking-[0.20em] uppercase">
            {fm.eyebrow}
          </span>
          <span className="flex-1 h-px bg-cream/[0.08]" />
        </div>
      </div>

      {/* Gradient bridge: espresso → cream */}
      <div className="h-20 bg-gradient-to-b from-espresso to-cream" aria-hidden="true" />

      {/* ══════════════════════════════
          CARTE COMPLÈTE — fond crème
      ══════════════════════════════ */}
      <div className="bg-cream py-[80px] max-sm:py-[52px]">
        <div className="w-[min(1180px,calc(100%-40px))] mx-auto">

          <div className="grid grid-cols-[1fr_1.2fr] gap-[60px] items-start max-md:grid-cols-1">

            {/* Sticky title */}
            <ScrollReveal className="sticky top-[100px] max-md:static">
              <h2 className="font-serif text-espresso font-bold leading-[0.92] text-[clamp(48px,6vw,82px)] mb-5">
                {fm.title}
              </h2>
              <p className="text-ink/50 text-[14px] leading-relaxed italic mb-8">{fm.note}</p>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center min-h-[52px] px-7 py-[14px] rounded-full text-[14px] font-[900] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold shadow-[0_8px_30px_rgba(196,160,93,0.25)] transition-all duration-[200ms] hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(196,160,93,0.40)] active:translate-y-0 max-sm:w-full"
              >
                {dict.cta.button}
              </a>
            </ScrollReveal>

            {/* Menu list — onglets animés par catégorie */}
            <ScrollReveal>
              <MenuTabs labels={fm.labels} />
            </ScrollReveal>

          </div>

          {/* Trust strip */}
          <div className="grid grid-cols-4 border-t border-b border-ink/[0.08] mt-16 max-sm:grid-cols-2">
            {dict.features.map((f, i) => (
              <div
                key={i}
                className={[
                  "flex flex-col justify-center min-h-[112px] px-7 py-5",
                  "border-r border-ink/[0.08] last:border-r-0",
                  "max-sm:border-b max-sm:[&:nth-child(2)]:border-r-0 max-sm:last:border-b-0",
                  "hover:bg-ink/[0.02] transition-colors duration-150",
                ].join(" ")}
              >
                <strong className="block font-serif text-gold text-[19px] leading-tight mb-2">
                  {f.title}
                </strong>
                <span className="text-ink/55 text-[13px] leading-snug">{f.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
