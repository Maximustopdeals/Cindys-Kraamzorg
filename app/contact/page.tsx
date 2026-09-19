import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";
import CtaBand from "@/components/CtaBand";
import { AANMELD_URL } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact | Vraag kraamzorg aan in Hellevoetsluis",
  description:
    "Neem contact op met Cindy's Kraamzorg in Hellevoetsluis. Bel, app of vul het contactformulier in voor een kennismaking of aanmelding voor kraamzorg.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-16 pt-40">
        <Image
          src="/images/baby-roze.jpg"
          alt="Slapend pasgeboren baby'tje in roze omgeving"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-sand" />
        <div className="container-site relative">
          <p className="eyebrow mb-3 !text-blush">Contact</p>
          <h1 className="h-serif max-w-3xl text-4xl text-white sm:text-5xl">
            Neem de eerste stap naar een rustige kraamperiode
          </h1>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-2">
          {/* Info */}
          <div>
            <p className="eyebrow mb-3">Jouw kraamzorg</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Als nieuwe ouder wil je niets anders dan het beste
            </h2>
            <div className="divider-leaf mt-6 mb-6">✦</div>
            <div className="space-y-4 leading-relaxed">
              <p>
                De kraamperiode kan een uitdagende tijd zijn — zeker als je voor
                het eerst ouders wordt. Daarom sta ik, <strong>Cindy</strong>, als ervaren
                kraamverzorgende voor je klaar. Met persoonlijke aandacht help ik
                je op weg in het ouderschap: praktisch én emotioneel.
              </p>
              <p>
                <strong>Aanmelden is eenvoudig:</strong> vul het contactformulier in,
                stuur een WhatsApp of bel me direct. Ik kijk ernaar uit om je te
                begeleiden in dit nieuwe hoofdstuk.
              </p>
            </div>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+31610890534"
                className="card-soft flex items-center gap-4 !p-5 hover:!shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-terracotta">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink/50">Bel direct</span>
                  <span className="block font-serif text-lg text-espresso">06 - 10 89 05 34</span>
                </span>
              </a>

              <a
                href="https://wa.me/31610890534?text=Hallo%20Cindy%2C%20ik%20wil%20graag%20meer%20informatie%20over%20kraamzorg."
                target="_blank"
                rel="noopener noreferrer"
                className="card-soft flex items-center gap-4 !p-5 hover:!shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm4.45 13.95c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.95-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28z"/></svg>
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink/50">WhatsApp</span>
                  <span className="block font-serif text-lg text-espresso">Stuur een appje</span>
                </span>
              </a>

              <a
                href="mailto:info@cindyskraamzorg.nl"
                className="card-soft flex items-center gap-4 !p-5 hover:!shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-terracotta">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink/50">E-mail</span>
                  <span className="block font-serif text-lg text-espresso">info@cindyskraamzorg.nl</span>
                </span>
              </a>

              <div className="card-soft flex items-center gap-4 !p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-terracotta">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink/50">Werkgebied</span>
                  <span className="block font-serif text-lg text-espresso">
                    Hellevoetsluis, Brielle, Oostvoorne &amp; Spijkenisse
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Formulier */}
          <div className="card-soft !bg-white">
            <h2 className="h-serif mb-2 text-2xl">Vraag kraamzorg aan</h2>
            <p className="mb-6 text-sm text-ink/60">
              Vul het formulier in en Cindy neemt binnen 24 uur contact met je op.
              Liever direct aanmelden? Gebruik dan het{" "}
              <a href={AANMELD_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-terracotta hover:underline">
                aanmeldformulier
              </a>
              .
            </p>
            <ContactForm />
          </div>
        </div>

        {/* Kaart */}
        <div className="container-site mt-16">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src="/images/kaart-hellevoetsluis.png"
              alt="Kaart van het werkgebied van Cindy's Kraamzorg rond Hellevoetsluis, Brielle en Spijkenisse"
              width={900}
              height={627}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ onder het contactformulier */}
      <FaqSection />

      <CtaBand
        eyebrow="Laten we kennismaken"
        title="Bel, app of meld je direct aan — Cindy staat voor je klaar"
        description="Je hoort binnen 24 uur terug voor een vrijblijvend gesprek."
      />
    </>
  );
}
