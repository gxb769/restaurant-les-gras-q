import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SLUURPY_URL } from "@/lib/constants";

type Props = { dict: Dictionary };

export default function Reviews({ dict }: Props) {
  const r = dict.reviews;

  return (
    <section className="bg-espresso text-cream py-[104px]" id="avis">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">

        <ScrollReveal className="grid grid-cols-[0.9fr_1.1fr] gap-[42px] items-end mb-11 max-md:grid-cols-1">
          <div>
            <div className="inline-flex items-center gap-[10px] text-gold-soft text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-3">
              {r.eyebrow}
            </div>
            <h2 className="font-serif text-cream font-bold leading-[0.94] text-[clamp(48px,7vw,88px)]">
              {r.title}
            </h2>
          </div>
          <p className="text-cream/[0.72] text-[17px] m-0 max-w-[610px]">{r.text}</p>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {r.items.map((item, i) => (
            <ScrollReveal key={item.author} delay={i * 0.08}>
              <article className="flex flex-col justify-between min-h-[280px] h-full p-6 border border-cream/[0.14] rounded-lg bg-cream/[0.06] hover:bg-cream/[0.09] hover:-translate-y-[2px] hover:border-cream/[0.22] transition-all duration-200">
                <div>
                  <div className="text-gold-soft tracking-[0.08em] text-[14px]" aria-label="5 étoiles">
                    ★★★★★
                  </div>
                  <p className="text-cream/[0.84] text-[17px] mt-4 mb-4 leading-relaxed">{item.text}</p>
                </div>
                <strong className="text-gold-soft text-[13px] tracking-[0.12em] uppercase">
                  {item.author}
                </strong>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-[18px] text-cream/[0.55] text-[13px]">
          {r.source}{" "}
          <a
            href={SLUURPY_URL}
            target="_blank"
            rel="noreferrer"
            className="text-gold-soft underline underline-offset-[3px] hover:text-gold transition-colors duration-150"
          >
            {r.sourceLink}
          </a>
        </p>
      </div>
    </section>
  );
}
