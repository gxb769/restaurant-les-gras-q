import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

const PHONE = "+33382256951";

type Props = { dict: Dictionary };

export default function PrivateEvents({ dict }: Props) {
  const p = dict.private;

  return (
    <section className="bg-paper py-[104px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto grid grid-cols-2 gap-11 items-stretch max-md:grid-cols-1">

        <div className="flex flex-col justify-between p-[30px] rounded-lg bg-cream shadow-[0_18px_54px_rgba(16,17,20,0.08)]">
          <div>
            <div className="inline-flex items-center gap-[10px] text-gold text-[12px] font-[800] tracking-[0.18em] uppercase before:content-[''] before:w-[34px] before:h-px before:bg-current mb-4">
              {p.eyebrow}
            </div>
            <h2 className="font-serif text-espresso font-bold leading-[0.94] text-[clamp(48px,7vw,88px)] mb-5">
              {p.title}
            </h2>
            <p className="text-ink/[0.72] text-[18px]">{p.text}</p>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="mt-6 inline-flex items-center justify-center min-h-[48px] px-5 py-[14px] rounded-full text-[13px] font-[800] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold border border-white/20 transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)] self-start"
          >
            {p.button}
          </a>
        </div>

        <div className="flex flex-col justify-center p-[30px] rounded-lg bg-cream shadow-[0_18px_54px_rgba(16,17,20,0.08)]">
          <div className="grid gap-3">
            {p.points.map((point) => (
              <div
                key={point}
                className="py-[14px] border-t border-ink/[0.12] text-ink/[0.72] first:border-t-0"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
