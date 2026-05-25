"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export type LightboxPhoto = { src: string; alt: string };

type Props = {
  photos: LightboxPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function GalleryLightbox({
  photos,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const isOpen = activeIndex !== null;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKey]);

  const photo = isOpen && activeIndex !== null ? photos[activeIndex] : null;
  const total = photos.length;

  return (
    <AnimatePresence>
      {isOpen && photo && (
        /* Backdrop — click anywhere to close */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(10,10,10,0.96)] backdrop-blur-sm"
          onClick={onClose}
          aria-label="Fermer la galerie"
          role="dialog"
          aria-modal="true"
        >
          {/* Photo — stops click-through */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[min(92vw,1100px)] h-[min(78vh,700px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 92vw, 1100px"
              priority
            />
          </motion.div>

          {/* ── Close button ────────────────────────────── */}
          <button
            onClick={onClose}
            aria-label="Fermer la galerie"
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-cream/[0.10] hover:bg-cream/[0.22] border border-cream/[0.20] text-cream transition-colors duration-150"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M1.5 1.5l12 12M13.5 1.5l-12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          {/* ── Prev button ─────────────────────────────── */}
          {activeIndex !== null && activeIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              aria-label="Photo précédente"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-cream/[0.10] hover:bg-cream/[0.22] border border-cream/[0.20] text-cream transition-colors duration-150"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* ── Next button ─────────────────────────────── */}
          {activeIndex !== null && activeIndex < total - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              aria-label="Photo suivante"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-cream/[0.10] hover:bg-cream/[0.22] border border-cream/[0.20] text-cream transition-colors duration-150"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* ── Counter ─────────────────────────────────── */}
          {activeIndex !== null && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-cream/[0.45] text-[12px] font-[600] tracking-[0.08em] pointer-events-none">
              {activeIndex + 1} / {total}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
