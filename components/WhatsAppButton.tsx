'use client';

import { useEffect, useState } from "react";

const PHONE = "31610890534";
const MESSAGE = encodeURIComponent(
  "Hallo Cindy, ik wil graag meer informatie over kraamzorg."
);

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.07 8.07 0 0 1-1.24-4.28c0-4.47 3.64-8.11 8.12-8.11 4.47 0 8.11 3.64 8.11 8.11s-3.6 8.12-8.07 8.12zm4.45-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.95-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } transition-all duration-500`}
    >
      {/* Chat-paneel — wordt pas in de DOM gezet als de chat open is,
          zodat een gesloten paneel nooit klikken kan blokkeren */}
      {open && (
      <div
        className="w-[320px] max-w-[calc(100vw-3rem)] origin-bottom-right overflow-hidden rounded-2xl border border-espresso/10 bg-white shadow-soft sm:w-[360px]"
        role="dialog"
        aria-label="WhatsApp chat met Cindy's Kraamzorg"
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-espresso/10 bg-sand px-5 py-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
            <WhatsAppIcon size={24} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-serif text-lg font-bold uppercase tracking-wide text-espresso">
              Cindy's Kraamzorg
            </p>
            <p className="flex items-center gap-1.5 text-xs font-medium text-[#25D366]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#25D366]" />
              Online
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Chat sluiten"
            className="flex h-9 w-9 items-center justify-center rounded-full text-espresso/60 transition hover:bg-cream hover:text-espresso"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Bericht */}
        <div className="bg-[#E7DED2]/40 px-5 py-6">
          <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white p-4 text-[15px] leading-relaxed text-ink shadow-card">
            Hallo! Hoe kan ik je helpen met een zorgeloze kraamweek?
          </div>
        </div>

        {/* CTA */}
        <div className="px-5 pb-5">
          <a
            href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
          >
            <WhatsAppIcon size={18} />
            Start chat
          </a>
        </div>
      </div>
      )}

      {/* Zwevende knop */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "WhatsApp-chat sluiten" : "Open WhatsApp-chat met Cindy's Kraamzorg"}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform duration-300 hover:scale-105"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <WhatsAppIcon size={28} />
        )}
      </button>
    </div>
  );
}
