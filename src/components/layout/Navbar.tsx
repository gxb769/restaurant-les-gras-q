"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { href: "#top",      label: dict.home },
    { href: "#experience", label: dict.experience },
    { href: "#menu",     label: dict.menu },
    { href: "#galerie",  label: dict.gallery },
    { href: "#histoire", label: dict.story },
    { href: "#avis",     label: dict.reviews },
    { href: "#venir",    label: dict.access },
  ];

  return (
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
          className="flex items-center gap-3 min-w-0 shrink-0 group"
          aria-label="Restaurant Les Gras Q — Accueil"
        >
          <Image
            src="/assets/logo-gras-q.jpg"
            alt="Logo Restaurant Les Gras Q"
            width={38}
            height={38}
            className="rounded-full object-cover border border-gold-soft/55 shadow-[0_0_0_4px_rgba(234,216,168,0.08)] transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-serif text-[22px] font-bold whitespace-nowrap leading-none">
            Les Gras Q
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-[2px] text-[13px] font-[800] tracking-[0.02em]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
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
                    ? "bg-gold-soft text-ink shadow-sm"
                    : "text-cream/70 hover:text-cream hover:bg-cream/[0.08]",
                ].join(" ")}
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
            onClick={() => setOpen((o) => !o)}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+10px)] left-3 right-3 md:hidden grid gap-[5px] p-[10px] border border-gold-soft/20 rounded-[18px] bg-[#0f1013] shadow-[0_22px_70px_rgba(0,0,0,0.5)] pointer-events-auto"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="w-full px-[14px] py-[13px] rounded-full text-[14px] font-[800] text-cream hover:bg-cream/[0.10] transition-colors duration-[150ms]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE}`}
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center min-h-[50px] px-5 rounded-full text-[13px] font-[800] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold"
            >
              {dict.reserve}
            </a>
            {/* Lang switcher inside mobile menu */}
            <div className="flex items-center gap-[3px] mt-1 pt-3 border-t border-cream/[0.08] px-1">
              {LOCALES.map(({ code, label }) => (
                <Link
                  key={code}
                  href={`/${code}`}
                  onClick={() => setOpen(false)}
                  aria-label={`Langue : ${label}`}
                  aria-current={lang === code ? "true" : undefined}
                  className={[
                    "flex-1 py-[10px] rounded-xl text-[12px] font-[800] text-center transition-all duration-[180ms]",
                    lang === code
                      ? "bg-gold-soft/[0.18] text-gold-soft"
                      : "text-cream/[0.65] hover:text-cream hover:bg-cream/[0.08]",
                  ].join(" ")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
