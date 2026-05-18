import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

const PHONE = "+33382256951";
const EMAIL = "lesgrasq@orange.fr";

type Props = { dict: Dictionary["footer"] };

export default function Footer({ dict }: Props) {
  return (
    <footer className="py-7 bg-ink border-t border-cream/[0.12] text-cream/[0.64] text-[13px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto flex flex-wrap justify-between gap-[18px]">
        <span className="font-[500]">{dict.owner}</span>
        <span>{dict.address}</span>
        <a href={`tel:${PHONE}`} className="hover:text-gold-soft transition-colors">
          +33 3 82 25 69 51
        </a>
        <a href={`mailto:${EMAIL}`} className="hover:text-gold-soft transition-colors">
          {EMAIL}
        </a>
        <span className="text-cream/[0.42]">{dict.note}</span>
      </div>
    </footer>
  );
}
