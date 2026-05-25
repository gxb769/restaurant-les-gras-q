import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n/getDictionary";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Restaurant Les Gras Q",
  description: "Politique de confidentialité et gestion des données personnelles du restaurant Les Gras Q.",
  robots: { index: false },
};

export default async function PolitiqueConfidentialite({
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

        <h1 className="font-serif text-espresso font-bold text-[clamp(36px,6vw,60px)] leading-[0.94] mb-10">
          Politique de confidentialité
        </h1>

        <div className="space-y-8 text-ink/70 text-[16px] leading-relaxed">

          <section>
            <h2 className="font-serif text-espresso text-[24px] font-bold mb-3">Responsable du traitement</h2>
            <p>
              Restaurant Les Gras Q — 32 Rue de Longwy, 54870 Cons-la-Grandville<br />
              Contact : <a href="mailto:lesgrasq@orange.fr" className="text-gold hover:text-gold-soft transition-colors">lesgrasq@orange.fr</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-espresso text-[24px] font-bold mb-3">Données collectées</h2>
            <p>Ce site peut collecter les données suivantes :</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-espresso font-[600]">Données de navigation</strong> : adresse IP anonymisée, pages visitées, durée de session — via Google Analytics 4 (uniquement avec votre consentement)</li>
              <li><strong className="text-espresso font-[600]">Cookies techniques</strong> : mémorisation de votre choix de consentement (localStorage)</li>
            </ul>
            <p className="mt-3">
              Aucune donnée personnelle identifiable (nom, email, téléphone) n&apos;est collectée automatiquement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-espresso text-[24px] font-bold mb-3">Google Analytics 4</h2>
            <p>
              Avec votre accord, ce site utilise Google Analytics 4 (Google LLC, États-Unis) pour mesurer l&apos;audience. Les données sont anonymisées (<code className="bg-ink/[0.06] px-1 py-[2px] rounded text-[14px]">anonymize_ip: true</code>) et aucune donnée n&apos;est transmise à des tiers à des fins publicitaires.
            </p>
            <p className="mt-3">
              Google est soumis au Privacy Shield UE-États-Unis.{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-gold hover:text-gold-soft transition-colors underline underline-offset-[3px]">
                Politique de confidentialité de Google
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-espresso text-[24px] font-bold mb-3">Durée de conservation</h2>
            <p>
              Les données analytiques sont conservées <strong className="text-espresso font-[600]">14 mois</strong> dans Google Analytics, conformément au paramétrage par défaut conforme RGPD.
              Votre choix de consentement est conservé en local sur votre appareil jusqu&apos;à la suppression des cookies de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-espresso text-[24px] font-bold mb-3">Vos droits (RGPD)</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-espresso font-[600]">Droit d&apos;accès</strong> : consulter vos données</li>
              <li><strong className="text-espresso font-[600]">Droit de rectification</strong> : corriger des données inexactes</li>
              <li><strong className="text-espresso font-[600]">Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
              <li><strong className="text-espresso font-[600]">Droit d&apos;opposition</strong> : refuser le traitement analytique</li>
              <li><strong className="text-espresso font-[600]">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:lesgrasq@orange.fr" className="text-gold hover:text-gold-soft transition-colors">lesgrasq@orange.fr</a>.
              Vous pouvez également déposer une réclamation auprès de la{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noreferrer" className="text-gold hover:text-gold-soft transition-colors underline underline-offset-[3px]">CNIL</a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-espresso text-[24px] font-bold mb-3">Gestion des cookies</h2>
            <p>
              Vous pouvez retirer votre consentement à tout moment en effaçant les cookies de votre navigateur (rubrique &laquo;&nbsp;Confidentialité&nbsp;&raquo; ou &laquo;&nbsp;Historique&nbsp;&raquo; des paramètres de votre navigateur). La prochaine visite affichera à nouveau la bannière de consentement.
            </p>
          </section>

          <p className="text-ink/35 text-[13px] pt-6 border-t border-ink/[0.08]">
            Dernière mise à jour : mai 2026
          </p>
        </div>
      </div>
    </main>
  );
}
