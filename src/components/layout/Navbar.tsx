"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import type { Locale } from "@/lib/i18n/getDictionary";
import { PHONE } from "@/lib/constants";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "lu", label: "LU" },
  { code: "de", label: "DE" },
];

type Props = { dict: Dictionary["nav"]; lang: Locale };

export default function Navbar({ dict, lang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false); // controls opacity (for exit fade)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) handleClose(); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Mount overlay → next frame set visible (triggers CSS fade-in)
  const handleOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
    requestAnimationFrame(() => setVisible(true));
  };

  // Fade-out → then unmount
  const handleClose = () => {
    setVisible(false);
    closeTimer.current = setTimeout(() => setOpen(false), 220);
  };

  // Custom ease-out-quart scroll
  const scrollTo = (hash: string) => {
    const id = hash.replace("#", "");
    const el = id === "top" ? document.body : document.getElementById(id);
    if (!el) return;
    const start = window.pageYOffset;
    const target = id === "top" ? 0 : el.getBoundingClientRect().top + window.pageYOffset - 88;
    const distance = target - start;
    const duration = Math.min(Math.abs(distance) * 0.35, 600);
    let startTime: number | null = null;
    const ease = (t: number) => 1 - Math.pow(1 - t, 4);
    const step = (now: number) => {
      if (!startTime) startTime = now;
      const t = ease(Math.min((now - startTime) / duration, 1));
      window.scrollTo(0, start + distance * t);
      if ((now - startTime) < duration) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const links = [
    { href: "#top",      label: dict.home },
    { href: "#carte",    label: dict.menu },
    { href: "#galerie",  label: dict.gallery },
    { href: "#avis",     label: dict.reviews },
    { href: "#venir",    label: dict.access },
  ];

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Navigation principale"
        className="fixed inset-x-0 top-[18px] z-50 pointer-events-none"
      >
        <div
          className={[
            "mx-auto flex items-center justify-between gap-[18px] pointer-events-auto",
            "w-[min(1180px,calc(100%-32px))] px-[10px] pl-4 rounded-full",
            "border backdrop-blur-[18px] text-cream",
            "transition-all duration-[260ms] ease-in-out",
            scrolled
              ? "py-2 bg-ink/[0.82] border-gold-soft/[0.22] shadow-[0_16px_48px_rgba(0,0,0,0.32)]"
              : "py-[10px] bg-[rgba(22,19,17,0.48)] border-cream/[0.18] shadow-[0_18px_60px_rgba(0,0,0,0.22)]",
          ].join(" ")}
        >
          {/* Brand */}
          <Link
            href={`/${lang}#top`}
            className="flex items-center gap-3 min-w-0 shrink-0 group min-h-[44px]"
          >
            <Image
              src="/assets/logo-gras-q.jpg"
              alt=""
              aria-hidden="true"
              width={38}
              height={38}
              className="rounded-full object-cover border border-gold-soft/55 shadow-[0_0_0_4px_rgba(234,216,168,0.08)] transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-serif text-[22px] font-bold whitespace-nowrap leading-none">
              Les Gras Q
            </span>
            <span className="sr-only">— Accueil</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-[2px] text-[13px] font-[800] tracking-[0.02em]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleClose(); scrollTo(l.href); }}
                className="relative px-3 py-[10px] rounded-full text-cream/[0.78] hover:text-cream transition-colors duration-[180ms] after:absolute after:bottom-[6px] after:left-3 after:right-3 after:h-px after:bg-gold-soft after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-[220ms]"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right tools */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Lang switcher — desktop only */}
            <div
              role="group"
              aria-label="Langue"
              className="hidden sm:flex items-center p-[3px] border border-cream/[0.16] rounded-full bg-cream/[0.07]"
            >
              {LOCALES.map(({ code, label }) => (
                <Link
                  key={code}
                  href={`/${code}`}
                  aria-label={`Langue : ${label}`}
                  aria-current={lang === code ? "true" : undefined}
                  className={[
                    "min-w-[36px] h-8 rounded-full text-[12px] font-[800] text-center leading-8 transition-all duration-[180ms]",
                    lang === code
                      ? "bg-gold-soft shadow-sm"
                      : "text-cream/70 hover:text-cream hover:bg-cream/[0.08]",
                  ].join(" ")}
                  style={lang === code ? { color: "#211812" } : undefined}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Reserve CTA — desktop */}
            <a
              href={`tel:${PHONE}`}
              className="hidden sm:inline-flex items-center justify-center min-h-[40px] px-5 rounded-full text-[13px] font-[800] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold border border-white/20 transition-all duration-[200ms] hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(196,160,93,0.3)] active:translate-y-0"
            >
              {dict.reserve}
            </a>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => open ? handleClose() : handleOpen()}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="md:hidden flex flex-col justify-center items-center w-[44px] h-[44px] gap-[5px] border border-gold-soft/30 rounded-full bg-ink/70 hover:bg-ink/90 transition-colors duration-150"
            >
              <span
                className={[
                  "block w-[18px] h-[2px] rounded-full bg-gold-soft origin-center transition-all duration-[200ms]",
                  open ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block w-[18px] h-[2px] rounded-full bg-gold-soft origin-center transition-all duration-[200ms]",
                  open ? "opacity-0 scale-x-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block w-[18px] h-[2px] rounded-full bg-gold-soft origin-center transition-all duration-[200ms]",
                  open ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Full-screen mobile overlay menu ─────────────────── */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className="fixed inset-0 z-40 md:hidden flex flex-col"
          style={{
            background: "rgba(10,8,7,0.97)",
            backdropFilter: "blur(22px)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        >
          {/* Ambient gold glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(201,168,76,0.10), transparent)",
            }}
            aria-hidden="true"
          />

          {/* Nav links — centered vertically */}
          <nav className="flex-1 flex flex-col justify-center px-8 pt-24 pb-8 gap-[3px]">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClose();
                  setTimeout(() => scrollTo(l.href), 240);
                }}
                style={{
                  animation: `navLinkIn 0.38s ${i * 0.06 + 0.06}s cubic-bezier(0.22,1,0.36,1) both`,
                }}
                className="group flex items-center justify-between py-5 border-b border-cream/[0.07] last:border-b-0"
              >
                <span className="font-serif text-cream text-[clamp(2rem,9vw,3rem)] font-bold leading-none tracking-tight group-hover:text-gold-soft transition-colors duration-200">
                  {l.label}
                </span>
                <span
                  className="text-gold-soft/50 text-[22px] leading-none"
                  style={{
                    animation: `navLinkIn 0.3s ${i * 0.06 + 0.21}s ease-out both`,
                  }}
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            ))}
          </nav>

          {/* Bottom — CTA + lang switcher */}
          <div
            className="px-8 flex flex-col gap-4"
            style={{
              paddingBottom: "max(2.5rem, env(safe-area-inset-bottom, 2.5rem))",
              animation: `fade-up 0.35s ${links.length * 0.06 + 0.11}s ease-out both`,
            }}
          >
            <a
              href={`tel:${PHONE}`}
              onClick={() => handleClose()}
              className="flex items-center justify-center min-h-[56px] rounded-full text-[14px] font-[900] tracking-[0.06em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold shadow-[0_8px_32px_rgba(201,168,76,0.28)] active:scale-[0.97] transition-transform duration-100"
            >
              {dict.reserve}
            </a>

            <div
              role="group"
              aria-label="Langue"
              className="flex items-center justify-center gap-2"
            >
              {LOCALES.map(({ code, label }) => (
                <Link
                  key={code}
                  href={`/${code}`}
                  onClick={() => handleClose()}
                  aria-label={`Langue : ${label}`}
                  aria-current={lang === code ? "true" : undefined}
                  className={[
                    "min-w-[52px] py-3 rounded-full text-[12px] font-[800] text-center transition-all duration-[180ms]",
                    lang === code
                      ? "bg-gold-soft/[0.18] text-gold-soft border border-gold-soft/30"
                      : "text-cream/[0.50] hover:text-cream border border-cream/[0.10] hover:border-cream/[0.25]",
                  ].join(" ")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
