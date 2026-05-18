import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

type Props = { dict: Dictionary };

export default function Story({ dict }: Props) {
  const s = dict.story;

  return (
    <section className="bg-cream py-[104px]" id="histoire">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-2 gap-[52px] items-center max-md:grid-cols-1">

        {/* Image */}
        <div className="relative min-h-[620px] rounded-lg overflow-hidden shadow-[0_24px_80px_rgba(22,19,17,0.28)] group max-md:min-h-[460px]">
          <Image
            src="/assets/village.jpg"
            alt="Château de Cons-la-Grandville"
            fill
            className="object-cover transition-transform duration-[550ms] group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Bottom gradient + label */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,17,20,0.52)] to-transparent pointer-events-none" />
          <span className="absolute z-10 left-[22px] bottom-[22px] font-serif text-cream text-[44px] leading-none [text-shadow:0_6px_20px_rgba(0,0,0,0.4)] pointer-events-none">
            Cons-la-Grandville
          </span>
        </div>

        {/* Copy */}
        <div>
          <div className="inline-flex items-center gap-[10px] text-gold text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-5">
            {s.eyebrow}
          </div>
          <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(48px,7vw,86px)] mb-[22px]">
            {s.title}
          </h2>
          <p className="text-ink/[0.72] text-[18px] mb-[18px]">{s.p1}</p>
          <p className="text-ink/[0.72] text-[18px] mb-0">{s.p2}</p>

          <div className="mt-[30px] grid gap-[14px]">
            {s.timeline.map((t) => (
              <div
                key={t.date}
                className="grid grid-cols-[128px_1fr] gap-[22px] items-start pt-4 border-t border-ink/[0.12] max-sm:grid-cols-1 max-sm:gap-2"
              >
                <strong className="text-clay text-[13px] tracking-[0.12em] uppercase whitespace-nowrap">
                  {t.date}
                </strong>
                <span className="text-ink/[0.72]">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
