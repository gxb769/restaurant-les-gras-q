import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

const SLUURPY_URL =
  "https://www.sluurpy.fr/cons-la-grandville/restaurant/2108380/les-gras-q/reviews";

type Props = { dict: Dictionary };

export default function Reviews({ dict }: Props) {
  const r = dict.reviews;

  return (
    <section className="bg-espresso text-cream py-[104px]" id="avis">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto">

        <div className="grid grid-cols-[0.9fr_1.1fr] gap-[42px] items-end mb-11 max-md:grid-cols-1">
          <div>
            <div className="inline-flex items-center gap-[10px] text-gold-soft text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-3">
              {r.eyebrow}
            </div>
            <h2 className="font-serif text-cream font-bold leading-[0.94] text-[clamp(48px,7vw,88px)]">
              {r.title}
            </h2>
          </div>
          <p className="text-cream/[0.72] text-[17px] m-0 max-w-[610px]">{r.text}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {r.items.map((item) => (
            <article
              key={item.author}
              className="flex flex-col justify-between min-h-[300px] p-6 border border-cream/[0.15] rounded-lg bg-cream/[0.06]"
            >
              <div>
                <div className="text-gold-soft tracking-[0.08em] text-[14px]">★★★★★</div>
                <p className="text-cream/[0.82] text-[17px] mt-5 mb-5">{item.text}</p>
              </div>
              <strong className="text-gold-soft text-[13px] tracking-[0.12em] uppercase">
                {item.author}
              </strong>
            </article>
          ))}
        </div>

        <p className="mt-[18px] text-cream/[0.58] text-[13px]">
          {r.source}{" "}
          <a
            href={SLUURPY_URL}
            target="_blank"
            rel="noreferrer"
            className="text-gold-soft underline underline-offset-[3px]"
          >
            {r.sourceLink}
          </a>
        </p>
      </div>
    </section>
  );
}
