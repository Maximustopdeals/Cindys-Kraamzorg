import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Kraamzorg Hellevoetsluis | Persoonlijke zorg aan huis door Cindy",
  description:
    "Kraamzorg in Hellevoetsluis van Cindy: al 22 jaar ervaring, erkend door KCKZ. Zorg voor moeder en baby, borstvoedingsadvies en praktische hulp. Vraag vrijblijvend aan.",
  alternates: { canonical: "https://cindyskraamzorg.nl/kraamzorg-hellevoetsluis" },
};

const punten = [
  "Snel ter plaatse in heel Hellevoetsluis",
  "Korte lijnen met verloskundigen uit de regio",
  "Thuisbevalling of poliklinisch: ik ben er zodra je baby er is",
  "Erkend door KCKZ en volledig vergoed uit het basispakket",
];

const faqs = [
  {
    q: "Hoe snel ben je bij mij in Hellevoetsluis?",
    a: "Omdat ik zelf in Hellevoetsluis woon, ben ik doorgaans binnen 15 tot 30 minuten bij je aan huis ook 's nachts als dat nodig is.",
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
    a: "Via het aanmeldformulier op deze website, telefonisch op 06-10890534 of per e-mail. Bij voorkeur zodra je weet dat je zwanger bent, zo ben je verzekerd van een plek wanneer je die nodig hebt.",
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

      {/* ============ HERO — high-end ============ */}
      <section className="relative overflow-hidden bg-cream pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div
          className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blush/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-site relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-6">Werkgebied</p>

            <h1 className="h-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Kraamzorg in Hellevoetsluis
            </h1>

            <div className="my-8 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-terracotta/40" />
              <span className="text-terracotta">✦</span>
              <span className="h-px w-16 bg-terracotta/40" />
            </div>

            <p className="text-lg leading-relaxed text-ink/80 sm:text-xl">
              Persoonlijke kraamzorg aan huis, vanuit de eigen plaats. Cindy
              woont en werkt in Hellevoetsluis — dus altijd dichtbij als je
              haar nodig hebt.
            </p>
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3">Kraamzorg in Hellevoetsluis</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Jouw kraamverzorgende om de hoek
            </h2>
            <div className="divider-leaf mt-6 mb-6">✦</div>
            <div className="space-y-4 leading-relaxed">
              <p>
                Hellevoetsluis is de thuisbasis van Cindy&apos;s Kraamzorg. Vanuit de
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
        </div>
      </section>

      {/* ============ FAQ ============ */}
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
