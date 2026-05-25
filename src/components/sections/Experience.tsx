import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Props = { dict: Dictionary };

export default function Experience({ dict }: Props) {
  const e = dict.experience;
  const t = dict.team;

  return (
    <section className="bg-cream py-[104px] max-sm:py-[64px]" id="experience">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">

        {/* Opening pull-quote — full width, no eyebrow */}
        <ScrollReveal className="mb-[72px] max-md:mb-[48px]">
          <p className="font-serif text-espresso italic font-[300] leading-[1.08] text-[clamp(28px,4vw,52px)] max-w-[820px]">
            &ldquo;{e.quote.replace(/«\s?|»/g, "").replace(/"/g, "")}&rdquo;
          </p>
        </ScrollReveal>

        {/* Two-col: images left, copy right */}
        <div className="grid grid-cols-[0.85fr_1.15fr] gap-[54px] items-center max-md:grid-cols-1">

          {/* Stacked images — desktop/tablet */}
          <ScrollReveal className="relative min-h-[520px] max-md:aspect-[4/3] max-md:min-h-0 max-sm:hidden">
            <div className="absolute w-[74%] h-[400px] left-0 top-0 rounded-lg overflow-hidden shadow-[0_24px_80px_rgba(22,19,17,0.28)] group">
              <Image
                src="/assets/equipe.jpg"
                alt="Christelle et Gérald vous accueillent au restaurant Les Gras Q"
                fill
                className="object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 60vw, 35vw"
              />
            </div>
            <div className="absolute w-[58%] h-[310px] right-0 bottom-0 rounded-lg overflow-hidden border-[10px] border-cream shadow-[0_24px_80px_rgba(22,19,17,0.28)] group">
              <Image
                src="/assets/terrasse.jpg"
                alt="Terrasse du restaurant Les Gras Q"
                fill
                className="object-cover object-[50%_45%] transition-transform duration-500 group-hover:scale-[1.05]"
                sizes="25vw"
              />
            </div>
          </ScrollReveal>

          {/* Single image — mobile */}
          <ScrollReveal className="hidden max-sm:block relative aspect-[4/3] rounded-xl overflow-hidden shadow-[0_24px_80px_rgba(22,19,17,0.28)]">
            <Image
              src="/assets/equipe.jpg"
              alt="L'équipe du restaurant Les Gras Q"
              fill
              className="object-cover object-[50%_35%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,17,20,0.60)] via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="block font-serif text-cream text-[26px] leading-tight">Christelle &amp; Gérald</span>
              <span className="block text-gold-soft text-[11px] font-[900] tracking-[0.16em] uppercase mt-1">L&apos;équipe de la maison</span>
            </div>
          </ScrollReveal>

          {/* Copy */}
          <div>
            <ScrollReveal direction="clip" delay={0.08}>
              <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(44px,6vw,80px)] mb-6">
                {e.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <p className="text-ink/[0.72] text-[18px] mb-[18px]">{e.p1}</p>
              <p className="text-ink/[0.72] text-[18px] mb-0">{e.p2}</p>
            </ScrollReveal>

            {/* Team — inline, no cards */}
            <div className="mt-[36px] pt-[28px] border-t border-ink/[0.10]">
              <p className="text-ink/[0.42] text-[11px] font-[900] tracking-[0.18em] uppercase mb-[14px]">
                {t.eyebrow}
              </p>
              <div className="flex items-center gap-[28px] flex-wrap">
                {t.members.map((m, i) => (
                  <div key={m.name} className="flex items-center gap-[16px]">
                    {i > 0 && <span className="w-px h-8 bg-ink/[0.12]" aria-hidden="true" />}
                    <div>
                      <strong className="block font-serif text-espresso text-[22px] leading-none">{m.name}</strong>
                      <span className="block text-ink/[0.50] text-[12px] mt-[4px]">{m.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
