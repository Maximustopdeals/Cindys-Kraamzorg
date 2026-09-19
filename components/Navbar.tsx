'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const AANMELD_URL =
  "https://cindyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame";

const links = [
  { href: "/", label: "Home" },
  { href: "/kraamzorg", label: "Kraamzorg" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

const werkgebieden = [
  { href: "/kraamzorg-hellevoetsluis", label: "Hellevoetsluis" },
  { href: "/kraamzorg-brielle", label: "Brielle" },
  { href: "/kraamzorg-oostvoorne", label: "Oostvoorne" },
  { href: "/kraamzorg-spijkenisse", label: "Spijkenisse" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [wbOpen, setWbOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setWbOpen(false);
  }, [pathname]);

  const inWerkgebied = werkgebieden.some((w) => pathname.startsWith(w.href));

  const linkColor = (active: boolean) =>
    `text-sm font-semibold uppercase tracking-wider transition-colors ${
      active
        ? "text-terracotta"
        : scrolled
          ? "text-espresso hover:text-terracotta"
          : "text-white hover:text-blush"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-sand/95 shadow-card backdrop-blur-md"
          : "bg-gradient-to-b from-black/30 to-transparent"
      }`}
    >
      <nav
        className="container-site flex items-center justify-between py-3"
        aria-label="Hoofdnavigatie"
      >
        <Link href="/" className="relative z-10 flex items-center gap-3" aria-label="Cindy's Kraamzorg - Home">
          <Image
            src="/images/logo-badge.png"
            alt="Logo Cindy's Kraamzorg"
            width={469}
            height={320}
            className="h-14 w-auto rounded-2xl shadow-card sm:h-16"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.slice(0, 2).map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkColor(link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))}>
                {link.label}
              </Link>
            </li>
          ))}

          {/* Werkgebieden dropdown */}
          <li className="relative" onMouseLeave={() => setWbOpen(false)}>
            <button
              type="button"
              onMouseEnter={() => setWbOpen(true)}
              onClick={() => setWbOpen((v) => !v)}
              aria-expanded={wbOpen}
              className={`${linkColor(inWerkgebied)} flex items-center gap-1.5`}
            >
              Werkgebieden
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${wbOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {wbOpen && (
            <div
              className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3"
            >
              <ul className="overflow-hidden rounded-2xl bg-white p-2 shadow-soft">
                {werkgebieden.map((w) => (
                  <li key={w.href}>
                    <Link
                      href={w.href}
                      className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                        pathname === w.href
                          ? "bg-cream text-terracotta"
                          : "text-espresso hover:bg-cream hover:text-terracotta"
                      }`}
                    >
                      Kraamzorg {w.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            )}
          </li>

          {links.slice(2).map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkColor(pathname.startsWith(link.href))}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={AANMELD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-5 !py-2.5 text-xs"
            >
              Meld je aan
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            scrolled || open ? "text-espresso" : "text-white"
          }`}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
      <div
        className="overflow-hidden lg:hidden"
      >
        <ul className="container-site flex flex-col gap-1 pb-6">
          {links.slice(0, 2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block rounded-xl px-4 py-3 font-serif text-lg ${
                  pathname === link.href ? "bg-cream text-terracotta" : "text-espresso hover:bg-cream"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Werkgebieden uitklapbaar (mobiel) */}
          <li>
            <button
              type="button"
              onClick={() => setWbOpen((v) => !v)}
              aria-expanded={wbOpen}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-serif text-lg text-espresso hover:bg-cream"
            >
              Werkgebieden
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${wbOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {wbOpen && (
            <div>
              <ul className="ml-4 space-y-1 py-1">
                {werkgebieden.map((w) => (
                  <li key={w.href}>
                    <Link
                      href={w.href}
                      className={`block rounded-xl px-4 py-2.5 text-base ${
                        pathname === w.href ? "bg-cream text-terracotta" : "text-espresso/80 hover:bg-cream"
                      }`}
                    >
                      Kraamzorg {w.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            )}
          </li>

          {links.slice(2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block rounded-xl px-4 py-3 font-serif text-lg ${
                  pathname.startsWith(link.href) ? "bg-cream text-terracotta" : "text-espresso hover:bg-cream"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a href={AANMELD_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              Kraamzorg aanvragen
            </a>
          </li>
        </ul>
      </div>
      )}
    </header>
  );
}
