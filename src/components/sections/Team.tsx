import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Props = { dict: Dictionary };

export default function Team({ dict }: Props) {
  const t = dict.team;

  return (
    <section className="bg-paper py-[104px] max-sm:py-[64px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-2 gap-11 items-center max-md:grid-cols-1">

        <ScrollReveal className="relative min-h-[520px] max-md:min-h-0 max-md:aspect-[4/3] rounded-lg overflow-hidden shadow-[0_24px_80px_rgba(22,19,17,0.28)] group">
          <Image
            src="/assets/equipe.jpg"
            alt="L'équipe du restaurant Les Gras Q — Christelle, Gérald et Thomas"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-[10px] text-gold text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-5">
            {t.eyebrow}
          </div>
          <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(48px,7vw,88px)] mb-5">
            {t.title}
          </h2>
          <p className="text-ink/[0.72] text-[18px] mb-6">{t.text}</p>

          <div className="grid grid-cols-3 gap-3 mt-6 max-sm:grid-cols-1">
            {t.members.map((m) => (
              <div
                key={m.name}
                className="min-h-[138px] p-[18px] border border-ink/[0.1] rounded-lg bg-cream/[0.72] hover:bg-cream hover:border-gold/[0.3] hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(16,17,20,0.08)] transition-all duration-200"
              >
                <strong className="block font-serif text-espresso text-[28px] leading-none">
                  {m.name}
                </strong>
                <span className="block mt-[10px] text-ink/[0.68] text-[14px]">
                  {m.role}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
