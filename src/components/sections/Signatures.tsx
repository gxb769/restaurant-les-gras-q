import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PHONE } from "@/lib/constants";

type Props = { dict: Dictionary };

const DISH_META = [
  { photo: "/assets/dish-entree.jpg", price: "14€", num: "01" },
  { photo: "/assets/dish-bar.jpg",    price: "22€", num: "02" },
  { photo: "/assets/dish-boeuf.jpg",  price: "20€", num: "03" },
  { photo: "/assets/dish-dessert.jpg",price: "7€",  num: "04" },
];

export default function Signatures({ dict }: Props) {
  const m = dict.menu;
  const dishes = m.dishes.slice(0, 4);

  return (
    <section className="bg-espresso" id="signatures">

      {/* Section header */}
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto pt-[104px] pb-16">
        <ScrollReveal>
          <div className="inline-flex items-center gap-[10px] text-gold-soft text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-5">
            Signatures du Chef
          </div>
          <h2 className="font-serif text-cream font-bold leading-[0.92] text-[clamp(52px,7vw,100px)] m-0">
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
                    "px-14 py-16 max-md:px-7 max-md:py-10",
                    "max-md:order-2",
                    reversed ? "md:order-1" : "md:order-2",
                  ].join(" ")}
                >
                  {/* Decorative number watermark */}
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 -translate-y-1/2 right-2 font-serif text-cream/[0.04] text-[200px] leading-none font-bold select-none pointer-events-none"
                  >
                    {num}
                  </span>

                  {/* Category */}
                  <span className="inline-flex items-center gap-[10px] text-gold-soft text-[11px] font-[900] tracking-[0.20em] uppercase mb-5">
                    <span className="w-6 h-px bg-gold-soft shrink-0" aria-hidden="true" />
                    {dish.label}
                  </span>

                  {/* Dish name */}
                  <h3 className="font-serif text-cream font-bold leading-[0.96] text-[clamp(34px,3.4vw,58px)] m-0 mb-5">
                    {dish.title}
                  </h3>

                  {/* Description */}
                  <p className="text-cream/[0.58] text-[17px] leading-relaxed m-0 mb-8 max-w-[420px]">
                    {dish.text}
                  </p>

                  {/* Price */}
                  <span className="font-serif text-gold-soft text-[34px] font-bold leading-none">
                    {price}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Bottom strip */}
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto py-12 flex items-center justify-between gap-8 max-sm:flex-col max-sm:items-start max-sm:gap-5">
        <p className="text-cream/[0.45] text-[14px] m-0 max-w-[520px] leading-relaxed">
          {m.text}
        </p>
        <a
          href={`tel:${PHONE}`}
          className="shrink-0 inline-flex items-center justify-center min-h-[52px] px-8 py-[14px] rounded-full text-[13px] font-[900] tracking-[0.06em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold shadow-[0_8px_30px_rgba(196,160,93,0.28)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(196,160,93,0.42)] active:translate-y-0"
        >
          {dict.cta.button}
        </a>
      </div>

    </section>
  );
}
