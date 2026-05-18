import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Props = { dict: Dictionary };

const photos = [
  { src: "/assets/salle.jpg",    alt: "Salle du restaurant Les Gras Q", span: "row-span-2" },
  { src: "/assets/terrasse.jpg", alt: "Terrasse extérieure du restaurant" },
  { src: "/assets/cave-vin.jpg", alt: "Cave à vin du restaurant" },
  { src: "/assets/village.jpg",  alt: "Château de Cons-la-Grandville" },
  { src: "/assets/foie-gras.jpg",alt: "Cuisine et assiettes du Gras Q" },
];

export default function Gallery({ dict }: Props) {
  const g = dict.gallery;

  return (
    <section id="galerie" className="bg-paper py-[104px] max-sm:py-[60px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">

        <ScrollReveal className="grid grid-cols-[0.9fr_1.1fr] gap-[42px] items-end mb-11 max-md:grid-cols-1">
          <div>
            <div className="inline-flex items-center gap-[10px] text-gold text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-3">
              {g.eyebrow}
            </div>
            <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(48px,7vw,88px)]">
              {g.title}
            </h2>
          </div>
          <p className="text-ink/[0.72] text-[17px] m-0 max-w-[610px]">{g.text}</p>
        </ScrollReveal>

        {/* Desktop/tablet grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[580px] max-md:grid-cols-2 max-md:h-auto max-sm:hidden">
          {photos.map((p, i) => (
            <ScrollReveal
              key={p.src}
              delay={i * 0.07}
              className={[
                "relative overflow-hidden rounded-lg group bg-ink",
                p.span ?? "",
                i === 0 ? "max-md:h-[460px]" : "h-[280px] max-md:h-[220px]",
              ].join(" ")}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,17,20,0.5)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                <span className="text-cream/90 text-[13px] font-[700] tracking-[0.1em] uppercase">{g.tiles[i]}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: swipe carousel */}
        <div className="hidden max-sm:flex overflow-x-auto snap-x snap-mandatory gap-3 -mx-5 px-5 pb-3 no-scrollbar">
          {photos.map((p, i) => (
            <div key={p.src} className="snap-start shrink-0 w-[80vw] h-[260px] relative rounded-xl overflow-hidden bg-ink">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover"
                sizes="80vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(16,17,20,0.65)] to-transparent pt-10 p-4">
                <span className="text-cream text-[12px] font-[700] tracking-[0.12em] uppercase">{g.tiles[i]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
