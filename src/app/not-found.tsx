import Link from "next/link";

/**
 * Global 404 — shown when no [lang] segment matches.
 * Branded, dark, minimal. Directs back to /fr.
 */
export default function NotFound() {
  return (
    <html lang="fr">
      <body style={{ margin: 0, background: "#101114", color: "#f7f4ed", fontFamily: "Georgia, serif" }}>
        <div
          style={{
            minHeight: "100svh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "40px 20px",
          }}
        >
          {/* Decorative number */}
          <span
            aria-hidden="true"
            style={{
              fontSize: "clamp(100px, 22vw, 220px)",
              fontWeight: 700,
              lineHeight: 1,
              color: "rgba(196,160,93,0.12)",
              letterSpacing: "-0.04em",
              userSelect: "none",
            }}
          >
            404
          </span>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 500,
              lineHeight: 1.05,
              margin: "0 0 16px",
              marginTop: "-20px",
              color: "#f7f4ed",
            }}
          >
            Page introuvable
          </h1>

          <p
            style={{
              color: "rgba(247,244,237,0.52)",
              fontSize: "17px",
              maxWidth: "420px",
              lineHeight: 1.6,
              margin: "0 0 40px",
            }}
          >
            Cette page n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil pour retrouver notre menu, nos horaires et nous contacter.
          </p>

          <Link
            href="/fr"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "52px",
              padding: "0 32px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 900,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "#211812",
              background: "linear-gradient(135deg, #f3dfb2, #c4a05d)",
              boxShadow: "0 10px 36px rgba(196,160,93,0.35)",
            }}
          >
            Retour à l&apos;accueil
          </Link>

          <p
            style={{
              marginTop: "48px",
              color: "rgba(247,244,237,0.22)",
              fontSize: "12px",
              fontFamily: "Arial, sans-serif",
              fontStyle: "italic",
            }}
          >
            Restaurant Les Gras Q — Cons-la-Grandville
          </p>
        </div>
      </body>
    </html>
  );
}
