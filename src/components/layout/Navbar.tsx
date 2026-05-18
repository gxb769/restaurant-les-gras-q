"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import type { Locale } from "@/lib/i18n/getDictionary";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "lu", label: "LU" },
  { code: "de", label: "DE" },
];

const PHONE = "+33382256951";

type Props = { dict: Dictionary["nav"]; lang: Locale };

export default function Navbar({ dict, lang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const links = [
    { href: "#top", label: dict.home },
    { href: "#experience", label: dict.experience },
    { href: "#menu", label: dict.menu },
    { href: "#galerie", label: dict.gallery },
    { href: "#histoire", label: dict.story },
    { href: "#avis", label: dict.reviews },
    { href: "#venir", label: dict.access },
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
          "transition-all duration-[220ms] ease-in-out",
          scrolled
            ? "py-2 bg-ink/[0.76] border-gold-soft/[0.22] shadow-[0_16px_48px_rgba(0,0,0,0.28)]"
            : "py-[10px] bg-[rgba(22,19,17,0.48)] border-cream/[0.18] shadow-[0_18px_60px_rgba(0,0,0,0.22)]",
        ].join(" ")}
      >
        {/* Brand */}
        <Link
          href={`/${lang}#top`}
          className="flex items-center gap-3 min-w-0 shrink-0"
          aria-label="Restaurant Les Gras Q"
        >
          <Image
            src="/assets/logo-gras-q.jpg"
            alt=""
            width={38}
            height={38}
            className="rounded-full object-cover border border-gold-soft/55 shadow-[0_0_0_4px_rgba(234,216,168,0.08)]"
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
              className="px-3 py-[10px] rounded-full text-cream/[0.78] hover:bg-cream/[0.1] hover:text-cream transition-colors duration-[180ms]"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Tools */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Lang switcher */}
          <div
            aria-label="Choix de la langue"
            className="flex items-center p-[3px] border border-cream/[0.16] rounded-full bg-cream/[0.07]"
          >
            {LOCALES.map(({ code, label }) => (
              <Link
                key={code}
                href={`/${code}`}
                className={[
                  "min-w-[36px] h-8 rounded-full text-[12px] font-[800] text-center leading-8 transition-colors duration-[180ms]",
                  lang === code
                    ? "bg-gold-soft text-ink"
                    : "text-cream/70 hover:text-cream",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Reserve CTA */}
          <a
            href={`tel:${PHONE}`}
            className="hidden sm:inline-flex items-center justify-center min-h-[48px] px-5 py-[14px] rounded-full text-[13px] font-[800] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold border border-white/20 transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
          >
            {dict.reserve}
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Fermer" : "Menu"}
            className="md:hidden flex flex-col justify-center items-center w-[42px] h-[42px] gap-1 border border-cream/[0.16] rounded-full bg-cream/[0.07]"
          >
            <span
              className={`block w-[17px] h-[2px] rounded-full bg-cream transition-transform duration-[180ms] ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-[17px] h-[2px] rounded-full bg-cream transition-transform duration-[180ms] ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`block w-[17px] h-[2px] rounded-full bg-cream transition-transform duration-[180ms] ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[calc(100%+10px)] left-3 right-3 md:hidden grid gap-[6px] p-[10px] border border-cream/[0.16] rounded-[18px] bg-ink/[0.92] backdrop-blur-[18px] shadow-[0_22px_70px_rgba(0,0,0,0.32)] pointer-events-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="w-full px-[14px] py-3 rounded-full text-[13px] font-[800] text-cream/[0.78] hover:bg-cream/[0.1] hover:text-cream transition-colors duration-[180ms]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE}`}
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center justify-center min-h-[48px] px-5 rounded-full text-[13px] font-[800] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold"
          >
            {dict.reserve}
          </a>
        </div>
      )}
    </nav>
  );
}
