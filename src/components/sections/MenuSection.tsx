import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { menuCategories } from "@/lib/menuData";
import { PHONE } from "@/lib/constants";

type Props = { dict: Dictionary };

export default function MenuSection({ dict }: Props) {
  const fm = dict.fullMenu;

  return (
    <section id="menu" className="bg-cream py-[104px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">

        {/* Grid: sticky title + menu list */}
        <div className="grid grid-cols-[1fr_1.2fr] gap-[60px] items-start max-md:grid-cols-1">

          {/* Sticky title column */}
          <ScrollReveal className="sticky top-[100px] max-md:static">
            <p className="inline-flex items-center gap-3 text-gold text-[11px] font-[900] tracking-[0.22em] uppercase mb-4 before:content-[''] before:block before:w-8 before:h-px before:bg-gold">
              {fm.eyebrow}
            </p>
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

          {/* Menu list */}
          <div className="flex flex-col gap-10">
            {menuCategories.map((cat, ci) => (
              <ScrollReveal key={cat.id} delay={ci * 0.07}>

                {/* Category header */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif text-espresso/50 text-[11px] font-black tracking-[0.26em] uppercase whitespace-nowrap">
                    {fm.labels[cat.id]}
                  </span>
                  <span className="flex-1 h-px bg-ink/[0.10]" />
                </div>

                {/* Dishes */}
                <div>
                  {cat.items.map((item, ii) => (
                    <div
                      key={item.name}
                      className={[
                        "flex justify-between items-start gap-4 group/item",
                        "-mx-3 px-3 rounded transition-colors duration-150 hover:bg-ink/[0.02]",
                        item.signature ? "py-5" : "py-4",
                        ii < cat.items.length - 1 ? "border-b border-ink/[0.07]" : "",
                      ].join(" ")}
                    >
                      <div className="min-w-0 flex-1">
                        {item.signature && (
                          <span className="inline-flex items-center gap-[5px] text-[9px] font-[900] tracking-[0.16em] uppercase text-gold border border-gold/35 bg-gold/[0.07] rounded-full px-3 py-[4px] mb-2">
                            ⭐ Signature du Chef
                          </span>
                        )}
                        <p className={[
                          "font-serif text-espresso text-[21px] leading-snug m-0 group-hover/item:text-ink transition-colors",
                          item.signature ? "font-bold" : "",
                        ].join(" ")}>
                          {item.name}
                        </p>
                        {item.detail && (
                          <p className="text-ink/45 text-[13px] m-0 mt-[3px] leading-snug">{item.detail}</p>
                        )}
                      </div>
                      {item.signature && item.photo ? (
                        <div className="shrink-0 flex flex-col items-end gap-2">
                          <strong className="text-clay font-[700] text-[15px] tabular-nums">
                            {item.price}
                          </strong>
                          <div className="relative w-[96px] h-[72px] rounded-lg overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.14)]">
                            <Image
                              src={item.photo}
                              alt={item.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover/item:scale-[1.06]"
                              sizes="96px"
                            />
                          </div>
                        </div>
                      ) : (
                        <strong className="shrink-0 text-clay font-[700] text-[15px] tabular-nums mt-1">
                          {item.price}
                        </strong>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Trust/features strip */}
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
    </section>
  );
}
