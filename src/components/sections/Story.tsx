import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Props = { dict: Dictionary };

export default function Story({ dict }: Props) {
  const s = dict.story;

  return (
    <section className="bg-cream py-[104px] max-sm:py-[64px] relative overflow-hidden" id="histoire">
      {/* village.jpg en filigrane — texture organique derrière le fond crème */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/assets/village.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(244,241,231,0.93)]" />
      </div>
      {/* Vignette latérale douce */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_120%_100%_at_50%_50%,transparent_40%,rgba(244,241,231,0.6)_100%)]" aria-hidden="true" />

      <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-2 gap-[52px] items-center max-md:grid-cols-1">

        <ScrollReveal direction="image" className="relative min-h-[620px] max-md:min-h-0 max-md:aspect-[3/2] rounded-lg overflow-hidden shadow-[0_24px_80px_rgba(22,19,17,0.28)] group">
          <Image
            src="/assets/village.jpg"
            alt="Château de Cons-la-Grandville, village du restaurant Les Gras Q"
            fill
            className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,17,20,0.54)] to-transparent pointer-events-none" />
          <span className="absolute z-10 left-[22px] bottom-[22px] font-serif text-cream text-[44px] leading-none [text-shadow:0_6px_20px_rgba(0,0,0,0.4)] pointer-events-none">
            Cons-la-Grandville
          </span>
        </ScrollReveal>

        <div>
          <ScrollReveal delay={0.12}>
            <div className="flex items-baseline gap-[12px] mb-5">
              <span className="font-serif text-gold/50 text-[13px] font-[300] italic">03</span>
              <span className="w-6 h-px bg-gold/30 self-center shrink-0" aria-hidden="true" />
              <span className="text-gold text-[11px] font-[900] tracking-[0.20em] uppercase">{s.eyebrow}</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="clip" delay={0.18}>
            <h2 className="font-serif text-espresso font-bold leading-[0.90] tracking-[-0.015em] text-[clamp(52px,7.5vw,96px)] mb-[22px]">
              {s.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <p className="text-ink/[0.72] text-[18px] mb-[18px]">{s.p1}</p>
            <p className="text-ink/[0.72] text-[18px] mb-0">{s.p2}</p>
          </ScrollReveal>

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
