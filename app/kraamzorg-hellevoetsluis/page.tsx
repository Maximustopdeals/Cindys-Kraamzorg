import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Kraamzorg Hellevoetsluis | Persoonlijke zorg aan huis door Cindy",
  description:
    "Kraamzorg in Hellevoetsluis van Cindy: al 22 jaar ervaring, erkend door KCKZ. Zorg voor moeder en baby, borstvoedingsadvies en praktische hulp. Vraag vrijblijvend aan.",
  alternates: { canonical: "https://cindyskraamzorg.nl/kraamzorg-hellevoetsluis" },
};

const punten = [
    "Snel ter plaatse in heel Hellevoetsluis en Nieuwenhoorn",
    "Korte lijnen met verloskundigen uit de regio",
    "Thuisbevalling of poliklinisch: ik ben er zodra je baby er is",
    "Erkend door KCKZ en volledig vergoed uit het basispakket",
  ];

const faqs = [
    {
      q: "Hoe snel ben je bij mij in Hellevoetsluis?",
      a: "Omdat ik zelf in Hellevoetsluis woon, ben ik doorgaans binnen 15 tot 30 minuten bij je aan huis — ook 's nachts als dat nodig is.",
    },
    {
      q: "Begeleid je ook thuisbevallingen in Hellevoetsluis?",
      a: "Zeker. Bij een thuisbevalling in overleg met je verloskundige ben ik vanaf het moment van de bevalling aanwezig om direct over te nemen in de kraamzorg.",
    },
    {
      q: "Kan ik ook kraamzorg krijgen na een poliklinische bevalling?",
      a: "Ja, na een poliklinische (poli) bevalling kom ik je thuis opvangen. We stemmen vooraf af wanneer je naar huis mag en hoe laat ik er ben.",
    },
    {
      q: "Hoe vraag ik kraamzorg aan in Hellevoetsluis?",
      a: "Via het aanmeldformulier op deze website, telefonisch op 06-10890534 of per e-mail. Bij voorkeur meld je je vóór week 16 van je zwangerschap aan.",
    },
  ];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Kraamzorg in Hellevoetsluis",
  url: "https://cindyskraamzorg.nl/kraamzorg-hellevoetsluis",
  about: {
    "@type": "MedicalBusiness",
    name: "Cindy's Kraamzorg",
    telephone: "+31610890534",
    areaServed: { "@type": "City", name: "Hellevoetsluis" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Struytse Hoeck 106",
      postalCode: "3224 HB",
      addressLocality: "Hellevoetsluis",
      addressCountry: "NL",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cindyskraamzorg.nl/" },
      { "@type": "ListItem", position: 2, name: "Kraamzorg Hellevoetsluis", item: "https://cindyskraamzorg.nl/kraamzorg-hellevoetsluis" },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-16 pt-40">
        <Image
          src="/images/hero-hellevoetsluis.jpg"
          alt="Pasgeboren baby — kraamzorg in Hellevoetsluis"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-sand" />
        <div className="container-site relative">
          <p className="eyebrow mb-3 !text-blush">Werkgebied</p>
          <h1 className="h-serif max-w-3xl text-4xl text-white sm:text-5xl">
            Kraamzorg in Hellevoetsluis
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Persoonlijke kraamzorg aan huis, vanuit de eigen plaats. Cindy woont en werkt in Hellevoetsluis — dus altijd dichtbij als je haar nodig hebt.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Kraamzorg in Hellevoetsluis</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Jouw kraamverzorgende om de hoek
            </h2>
            <div className="divider-leaf mt-6 mb-6">✦</div>
            <div className="space-y-4 leading-relaxed">
              <p>
                Hellevoetsluis is de thuisbasis van Cindy's Kraamzorg. Vanuit de
                Struytse Hoeck ben ik binnen enkele minuten bij je aan huis — of
                je nu in de oude binnenstad woont, in Nieuw-Helvoet of aan de
                rand van de gemeente richting Nieuwenhoorn of Zuidland.
              </p>
              <p>
                Als ervaren kraamverzorgende ken ik de regio en de lokale
                verloskundigenpraktijken goed. Dat betekent korte lijnen: bij
                vragen of twijfel over het herstel of de baby schakelen we
                indien nodig direct met je verloskundige.
              </p>
              <p>
                Van de eerste controles na de thuisbevalling tot ondersteuning
                na een poliklinische bevalling in het ziekenhuis — ik zorg dat
                jij je kunt focussen op wat echt telt: je nieuwe kindje.
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {punten.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-sm text-terracotta">✦</span>
                  <span className="text-ink/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-blush/40" aria-hidden="true" />
            <Image
              src="/images/cindy-baby.jpg"
              alt="Cindy met een pasgeboren baby tijdens een kraamweek in Hellevoetsluis"
              width={900}
              height={1200}
              className="relative rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-site max-w-3xl">
          <div className="text-center">
            <p className="eyebrow mb-3">Goed om te weten</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Veelgestelde vragen over kraamzorg in Hellevoetsluis
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-white p-6 shadow-card open:shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-espresso [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-terracotta transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Woon je in Hellevoetsluis?"
        title="Meld je aan voor persoonlijke kraamzorg in je eigen plaats"
        description="De agenda vult zich snel — meld je tijdig aan voor een zorgeloze kraamweek."
      />
    </>
  );
}
