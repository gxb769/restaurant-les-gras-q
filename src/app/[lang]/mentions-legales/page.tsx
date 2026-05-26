import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n/getDictionary";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Restaurant Les Gras Q",
  description: "Mentions légales du site internet du restaurant Les Gras Q à Cons-la-Grandville.",
  robots: { index: false },
};

export default async function MentionsLegales({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <main id="main-content" className="bg-cream min-h-screen pt-[120px] pb-[80px]">
      <div className="w-[min(760px,calc(100%-40px))] mx-auto">

        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-ink/40 text-[13px] font-[600] hover:text-ink/70 transition-colors duration-150 mb-10"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Retour
        </Link>

        <h1 className="font-serif text-espresso font-bold text-[clamp(36px,6vw,64px)] leading-[0.94] mb-10">
          Mentions légales
        </h1>

        <div className="prose prose-ink space-y-8 text-ink/70 text-[16px] leading-relaxed">

          <section>
            <h2 className="font-serif text-espresso text-[24px] font-bold mb-3">Éditeur du site</h2>
            <p>
              <strong className="text-espresso">Restaurant Les Gras Q</strong><br />
              32 Rue de Longwy, 54870 Cons-la-Grandville, France<br />
              Téléphone : <a href="tel:+33382466317" className="text-gold hover:text-gold-soft transition-colors">03 82 46 63 17</a><br />
              Email : <a href="mailto:lesgrasq@orange.fr" className="text-gold hover:text-gold-soft transition-colors">lesgrasq@orange.fr</a>
            </p>
            <p className="mt-3 text-ink/50 text-[14px]">
              SIRET : <em>[à compléter]</em>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-espresso text-[24px] font-bold mb-3">Hébergement</h2>
            <p>
              Ce site est hébergé par <strong className="text-espresso">Hostinger International Ltd.</strong><br />
              61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
              <a href="https://www.hostinger.fr" target="_blank" rel="noreferrer" className="text-gold hover:text-gold-soft transition-colors">www.hostinger.fr</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-espresso text-[24px] font-bold mb-3">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, photographies, logo, design) est protégé par le droit d&apos;auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite de l&apos;éditeur.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-espresso text-[24px] font-bold mb-3">Responsabilité</h2>
            <p>
              Les informations publiées sur ce site sont fournies à titre indicatif. Le restaurant se réserve le droit de modifier ses horaires, menus et tarifs sans préavis. Pour toute information confirmée, veuillez contacter directement le restaurant.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-espresso text-[24px] font-bold mb-3">Données personnelles</h2>
            <p>
              Ce site est susceptible de collecter des données de navigation à des fins statistiques via Google Analytics.
              Consultez notre{" "}
              <Link href={`/${lang}/politique-de-confidentialite`} className="text-gold hover:text-gold-soft transition-colors underline underline-offset-[3px]">
                Politique de confidentialité
              </Link>{" "}
              pour en savoir plus.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-espresso text-[24px] font-bold mb-3">Cookies</h2>
            <p>
              Ce site utilise des cookies analytiques (Google Analytics). Vous pouvez accepter ou refuser leur dépôt via la bannière présente lors de votre première visite. Vous pouvez modifier votre choix à tout moment en effaçant les cookies de votre navigateur.
            </p>
          </section>

          <p className="text-ink/35 text-[13px] pt-6 border-t border-ink/[0.08]">
            Dernière mise à jour : mai 2026
          </p>
          <p className="text-ink/30 text-[12px]">
            Site réalisé par{" "}
            <a
              href="https://lumio.studio"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-[3px] hover:text-ink/55 transition-colors duration-150"
            >
              LUMIO — Gabin Delachenal
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
