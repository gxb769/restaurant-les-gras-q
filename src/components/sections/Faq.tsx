import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

type Props = { dict: Dictionary };

export default function Faq({ dict }: Props) {
  const f = dict.faq;

  return (
    <section className="bg-cream py-[104px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-[0.8fr_1.2fr] gap-11 max-md:grid-cols-1">

        <div>
          <div className="inline-flex items-center gap-[10px] text-gold text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-4">
            {f.eyebrow}
          </div>
          <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(48px,7vw,88px)] mb-5">
            {f.title}
          </h2>
          <p className="text-ink/[0.72] text-[18px]">{f.text}</p>
        </div>

        <div className="grid gap-3">
          {f.items.map((item) => (
            <details
              key={item.q}
              className="border border-ink/[0.1] rounded-lg bg-white/[0.38] overflow-hidden group"
            >
              <summary className="cursor-pointer px-5 py-[18px] text-espresso font-[800] list-none flex justify-between items-center gap-3 select-none">
                {item.q}
                <span className="shrink-0 text-[18px] text-gold transition-transform duration-[180ms] group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-5 pb-[18px] m-0 text-ink/[0.68]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
