"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";

// ─── Formspree endpoint — replace XXXXXXXX with the real form ID after signup ───
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwzgakq";

type Step = "form" | "sending" | "success" | "error";

interface Props {
  open: boolean;
  onClose: () => void;
}

const OCCASIONS = [
  "Déjeuner d'affaires",
  "Dîner romantique",
  "Anniversaire",
  "Repas de famille",
  "Autre",
];

export default function ReservationModal({ open, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState<Step>("form");

  // Lock body scroll while modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Small delay so the animation finishes before we steal focus
      const t = setTimeout(() => firstFocusableRef.current?.focus(), 100);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [open]);

  // Reset form when modal closes
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setStep("form"), 400);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Escape key closes
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStep("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStep("success");
      } else {
        setStep("error");
      }
    } catch {
      setStep("error");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            ref={overlayRef}
            className="fixed inset-0 z-[9990] bg-[rgba(10,8,7,0.85)] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Réservation en ligne"
            className="fixed inset-x-4 bottom-0 top-[5vh] sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[9991] w-full sm:max-w-[540px] sm:max-h-[90vh] overflow-y-auto rounded-t-[20px] sm:rounded-[20px] bg-[#0e0c0b] border border-[rgba(196,160,93,0.18)] shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 pt-6 pb-4 bg-[#0e0c0b] border-b border-[rgba(196,160,93,0.10)]">
              <div>
                <p className="text-[10px] font-[800] tracking-[0.18em] uppercase text-gold-soft/60 mb-[3px]">
                  Les Gras Q
                </p>
                <h2 className="font-serif text-cream text-[22px] font-[600] leading-none">
                  Réservation en ligne
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Fermer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-cream/[0.15] text-cream/[0.50] hover:text-cream hover:border-cream/[0.30] transition-colors duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="px-6 py-6">
              {/* ─── Form state ─── */}
              {(step === "form" || step === "sending") && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name */}
                  <FormField label="Votre nom" required>
                    <input
                      ref={firstFocusableRef}
                      name="name"
                      type="text"
                      placeholder="Jean Dupont"
                      required
                      autoComplete="name"
                      className={inputCls}
                    />
                  </FormField>

                  {/* Phone or Email */}
                  <FormField label="Téléphone ou email" required>
                    <input
                      name="contact"
                      type="text"
                      placeholder="+33 6 12 34 56 78 ou jean@email.fr"
                      required
                      className={inputCls}
                    />
                  </FormField>

                  {/* Date + Time — side by side */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField label="Date" required>
                      <input
                        name="date"
                        type="date"
                        required
                        min={getTomorrow()}
                        className={inputCls}
                      />
                    </FormField>
                    <FormField label="Heure" required>
                      <select name="time" required className={inputCls}>
                        <option value="">—</option>
                        {TIME_SLOTS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  {/* Party size + Occasion */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField label="Nombre de couverts" required>
                      <select name="guests" required className={inputCls}>
                        <option value="">—</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? "personne" : "personnes"}</option>
                        ))}
                        <option value="13+">13 personnes et plus</option>
                      </select>
                    </FormField>
                    <FormField label="Occasion">
                      <select name="occasion" className={inputCls}>
                        <option value="">—</option>
                        {OCCASIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  {/* Message */}
                  <FormField label="Demandes particulières">
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Allergie, chaise haute, disposition de table, bouteille à l'avance…"
                      className={`${inputCls} resize-none`}
                    />
                  </FormField>

                  {/* Hidden honeypot (anti-spam) */}
                  <input type="text" name="_gotcha" style={{ display: "none" }} />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={step === "sending"}
                    className="mt-1 flex items-center justify-center gap-2 min-h-[52px] w-full rounded-full text-[13px] font-[900] tracking-[0.06em] uppercase text-[#211812] bg-gradient-to-br from-[#f5e4ba] to-gold shadow-[0_10px_36px_rgba(196,160,93,0.35)] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_22px_56px_rgba(196,160,93,0.50)] active:translate-y-0"
                  >
                    {step === "sending" ? (
                      <>
                        <Spinner />
                        Envoi en cours…
                      </>
                    ) : (
                      "Envoyer ma demande"
                    )}
                  </button>

                  {/* Fallback phone link */}
                  <p className="text-center text-cream/[0.38] text-[12px] leading-relaxed">
                    Vous préférez appeler ?{" "}
                    <a href={`tel:${PHONE}`} className="text-gold-soft/80 hover:text-gold-soft underline underline-offset-[3px] transition-colors">
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                </form>
              )}

              {/* ─── Success state ─── */}
              {step === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8 gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-[rgba(196,160,93,0.12)] border border-gold/30 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M5 14l7 7 11-11" stroke="#C4A05D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-cream text-[22px] font-[600] mb-2">
                      Demande envoyée !
                    </h3>
                    <p className="text-cream/[0.60] text-[14px] leading-relaxed max-w-[320px]">
                      Le restaurant vous recontactera pour confirmer votre réservation.
                      En cas d&apos;urgence, appelez directement le{" "}
                      <a href={`tel:${PHONE}`} className="text-gold-soft underline underline-offset-[3px]">
                        {PHONE_DISPLAY}
                      </a>.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="mt-2 inline-flex items-center justify-center min-h-[46px] px-8 rounded-full border border-gold/30 text-gold-soft text-[13px] font-[700] tracking-[0.05em] hover:bg-gold/[0.08] transition-colors duration-150"
                  >
                    Fermer
                  </button>
                </motion.div>
              )}

              {/* ─── Error state ─── */}
              {step === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8 gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-[rgba(255,80,80,0.08)] border border-red-500/20 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M14 8v7M14 19v1" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round"/>
                      <circle cx="14" cy="14" r="11" stroke="#ef4444" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-cream text-[22px] font-[600] mb-2">
                      Oups, une erreur
                    </h3>
                    <p className="text-cream/[0.60] text-[14px] leading-relaxed max-w-[320px]">
                      L&apos;envoi a échoué. Appelez directement le{" "}
                      <a href={`tel:${PHONE}`} className="text-gold-soft underline underline-offset-[3px]">
                        {PHONE_DISPLAY}
                      </a>{" "}
                      pour réserver.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep("form")}
                      className="inline-flex items-center justify-center min-h-[46px] px-8 rounded-full bg-gold/[0.10] border border-gold/30 text-gold-soft text-[13px] font-[700] tracking-[0.05em] hover:bg-gold/[0.18] transition-colors duration-150"
                    >
                      Réessayer
                    </button>
                    <button
                      onClick={onClose}
                      className="inline-flex items-center justify-center min-h-[46px] px-6 rounded-full border border-cream/[0.15] text-cream/[0.50] text-[13px] font-[700] hover:border-cream/[0.30] transition-colors duration-150"
                    >
                      Fermer
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-[7px]">
      <span className="text-[11px] font-[700] tracking-[0.10em] uppercase text-cream/[0.50]">
        {label}
        {required && <span className="text-gold-soft ml-1" aria-hidden="true">*</span>}
      </span>
      {children}
    </label>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3"/>
      <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function getTomorrow(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

// Lunch + dinner time slots
const TIME_SLOTS = [
  "12:00", "12:15", "12:30", "12:45",
  "13:00", "13:15", "13:30", "13:45",
  "19:00", "19:15", "19:30", "19:45",
  "20:00", "20:15", "20:30", "20:45",
  "21:00",
];

const inputCls =
  "w-full min-h-[46px] px-4 py-[11px] rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(196,160,93,0.18)] text-cream text-[14px] placeholder:text-cream/[0.28] focus:outline-none focus:border-gold/50 focus:bg-[rgba(196,160,93,0.06)] transition-colors duration-150 appearance-none";
