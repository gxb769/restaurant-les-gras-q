/**
 * Grain — subtle film-grain noise overlay.
 * Positioned fixed so it covers the entire viewport at all times.
 * pointer-events: none so it never blocks interactions.
 */
export default function Grain() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none"
      style={{
        zIndex: 9999,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        backgroundSize: "180px 180px",
        opacity: 0.038,
        mixBlendMode: "overlay",
      }}
    />
  );
}
