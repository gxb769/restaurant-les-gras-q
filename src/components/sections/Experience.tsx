import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Props = { dict: Dictionary };

export default function Experience({ dict }: Props) {
  const e = dict.experience;

  return (
    <section className="bg-cream py-[104px]" id="experience">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-[0.85fr_1.15fr] gap-[54px] items-center max-md:grid-cols-1">

        {/* Stacked images */}
        <ScrollReveal className="relative min-h-[560px] max-md:aspect-[4/3] max-md:min-h-0">
          <div className="absolute w-[74%] h-[430px] left-0 top-0 rounded-lg overflow-hidden shadow-[0_24px_80px_rgba(22,19,17,0.28)] group max-sm:h-[320px]">
            <Image
              src="/assets/equipe.jpg"
              alt="Christelle et Gérald vous accueillent au restaurant Les Gras Q"
              fill
              className="object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-[1.05]"
              sizes="(max-width: 768px) 60vw, 35vw"
            />
          </div>
          <div className="absolute w-[58%] h-[330px] right-0 bottom-0 rounded-lg overflow-hidden border-[10px] border-cream shadow-[0_24px_80px_rgba(22,19,17,0.28)] group max-sm:h-[240px]">
            <Image
              src="/assets/terrasse.jpg"
              alt="Terrasse du restaurant Les Gras Q"
              fill
              className="object-cover object-[50%_45%] transition-transform duration-500 group-hover:scale-[1.05]"
              sizes="(max-width: 768px) 45vw, 25vw"
            />
          </div>
        </ScrollReveal>

        {/* Copy */}
        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-[10px] text-gold text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-5">
            {e.eyebrow}
          </div>
          <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(50px,7vw,92px)] mb-6">
            {e.title}
          </h2>
          <p className="text-ink/[0.72] text-[18px] mb-[18px]">{e.p1}</p>
          <p className="text-ink/[0.72] text-[18px] mb-0">{e.p2}</p>
          <blockquote className="mt-[30px] pl-[22px] border-l-2 border-gold font-serif italic font-[300] text-espresso/80 text-[clamp(22px,2.2vw,30px)] leading-[1.18] max-w-[520px] m-0">
            {e.quote}
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
