import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

const pageUrl = "https://cindyskraamzorg.nl/kraamzorg-goeree-overflakkee";

export const metadata: Metadata = {
  metadataBase: new URL("https://cindyskraamzorg.nl"),
  title: "Kraamzorg Goeree-Overflakkee | Persoonlijke kraamzorg van Cindy",
  description:
    "Persoonlijke kraamzorg op Goeree-Overflakkee van Cindy. 23 jaar ervaring, erkend door KCKZ en aandacht voor moeder, baby en gezin. Vraag kraamzorg aan.",
  alternates: {
    canonical: "/kraamzorg-goeree-overflakkee",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/kraamzorg-goeree-overflakkee",
    siteName: "Cindy's Kraamzorg",
    title: "Kraamzorg Goeree-Overflakkee | Persoonlijke kraamzorg van Cindy",
    description:
      "Persoonlijke kraamzorg op Goeree-Overflakkee van Cindy. 23 jaar ervaring, erkend door KCKZ en aandacht voor moeder, baby en gezin.",
    images: [
      {
        url: "/images/og-goeree-overflakkee.jpg",
        width: 1200,
        height: 630,
        alt: "Kraamzorg op Goeree-Overflakkee — Cindy's Kraamzorg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraamzorg Goeree-Overflakkee | Persoonlijke kraamzorg van Cindy",
    description:
      "Persoonlijke kraamzorg op Goeree-Overflakkee van Cindy. 23 jaar ervaring, erkend door KCKZ.",
    images: ["/images/og-goeree-overflakkee.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const kernen = [
  "Middelharnis",
  "Sommelsdijk",
  "Dirksland",
  "Ouddorp",
  "Goedereede",
  "Oude-Tonge",
  "Nieuwe-Tonge",
  "Stellendam",
  "Melissant",
  "Herkingen",
  "Achthuizen",
  "Den Bommel",
  "Stad aan 't Haringvliet",
];

const punten = [
  "Kraamzorg op heel Goeree-Overflakkee",
  "Van Middelharnis tot Ouddorp en van Stellendam tot Oude-Tonge",
  "Korte lijnen met verloskundigen en het Van Weel-Bethesda Ziekenhuis",
  "Erkend door KCKZ en volledig vergoed uit het basispakket",
];

const faqs = [
  {
    q: "In welke kernen van Goeree-Overflakkee werk je?",
    a: "Ik bied kraamzorg op heel Goeree-Overflakkee: Middelharnis, Sommelsdijk, Dirksland, Ouddorp, Goedereede, Oude-Tonge, Nieuwe-Tonge, Stellendam, Melissant, Herkingen, Achthuizen, Den Bommel en Stad aan 't Haringvliet. Vooraf bespreken we jullie wensen en maken we duidelijke afspraken.",
  },
  {
    q: "Hoe snel ben je bij mij op Goeree-Overflakkee?",
    a: "Vanuit Hellevoetsluis rijd ik via de Haringvlietdam of via de A29 richting Goeree-Overflakkee. De exacte reistijd hangt af van je locatie op het eiland — reken op 30 tot 50 minuten. Ik plan de kraamzorg flexibel in, zodat ik er ben wanneer jij me nodig hebt, ook 's nachts als dat nodig is.",
  },
  {
    q: "Begeleid je ook thuisbevallingen op Goeree-Overflakkee?",
    a: "Ja, bij een thuisbevalling in overleg met je verloskundige ben ik vanaf het moment van de bevalling aanwezig om direct over te nemen in de kraamzorg. Bij een poliklinische bevalling in het Van Weel-Bethesda Ziekenhuis in Dirksland of in een ziekenhuis in Rotterdam kom ik je thuis opvangen zodra jullie naar huis mogen.",
  },
  {
    q: "Werk je samen met verloskundigen op het eiland?",
    a: "Ja, ik werk samen met verloskundigen uit de regio Goeree-Overflakkee. Bij vragen of twijfel over het herstel of de baby schakel ik indien nodig direct met je verloskundige — dat geeft rust en zekerheid.",
  },
  {
    q: "Hoe vraag ik kraamzorg aan op Goeree-Overflakkee?",
    a: "Via het aanmeldformulier op deze website, telefonisch op 06-10890534 of per WhatsApp. Bij voorkeur zodra je weet dat je zwanger bent, zo ben je verzekerd van een plek wanneer je die nodig hebt.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Kraamzorg op Goeree-Overflakkee",
      description:
        "Persoonlijke kraamzorg op Goeree-Overflakkee van Cindy, met deskundige begeleiding en praktische ondersteuning tijdens de kraamtijd.",
      inLanguage: "nl-NL",
      about: {
        "@id": `${pageUrl}#business`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${pageUrl}#business`,
      name: "Cindy's Kraamzorg",
      telephone: "+31610890534",
      url: "https://cindyskraamzorg.nl/",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Struytse Hoeck 106",
        postalCode: "3224 HB",
        addressLocality: "Hellevoetsluis",
        addressCountry: "NL",
      },
      areaServed: [
        { "@type": "Place", name: "Goeree-Overflakkee" },
        { "@type": "Place", name: "Middelharnis" },
        { "@type": "Place", name: "Sommelsdijk" },
        { "@type": "Place", name: "Dirksland" },
        { "@type": "Place", name: "Ouddorp" },
        { "@type": "Place", name: "Goedereede" },
        { "@type": "Place", name: "Oude-Tonge" },
        { "@type": "Place", name: "Stellendam" },
      ],
      serviceType: "Kraamzorg",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://cindyskraamzorg.nl/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Kraamzorg Goeree-Overflakkee",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
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
              Kraamzorg op Goeree-Overflakkee
            </h1>

            <div className="my-8 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-terracotta/40" />
              <span className="text-terracotta">✦</span>
              <span className="h-px w-16 bg-terracotta/40" />
            </div>

            <p className="text-lg leading-relaxed text-ink/80 sm:text-xl">
              Persoonlijke kraamzorg op Goeree-Overflakkee, met rust, aandacht
              en deskundige begeleiding voor een fijne start van jullie gezin.
            </p>
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3">Kraamzorg op Goeree-Overflakkee</p>

            <h2 className="h-serif text-3xl sm:text-4xl">
              Persoonlijke kraamzorg voor gezinnen op het eiland
            </h2>

            <div className="divider-leaf mb-6 mt-6" aria-hidden="true">
              ✦
            </div>

            <div className="space-y-4 leading-relaxed">
              <p>
                Ben je op zoek naar persoonlijke kraamzorg op Goeree-Overflakkee?
                Dan wil je vooral kunnen vertrouwen op iemand die rustig,
                deskundig en betrokken is. Tijdens de kraamtijd ondersteun ik
                jullie bij de verzorging van jullie baby en help ik jullie om
                samen jullie draai te vinden als gezin.
              </p>

              <p>
                Goeree-Overflakkee is een prachtig eiland met veel verschillende
                dorpen en stadjes. Of je nu woont in <strong>Middelharnis,
                Sommelsdijk, Dirksland, Ouddorp, Goedereede, Oude-Tonge,
                Nieuwe-Tonge, Stellendam, Melissant, Herkingen, Achthuizen,
                Den Bommel</strong> of <strong>Stad aan 't Haringvliet</strong> —
                ik kom bij jullie thuis. Ik neem de tijd om jullie wensen te
                leren kennen en stem mijn begeleiding af op wat jullie als
                gezin nodig hebben.
              </p>

              <p>
                Of je nu thuis bevalt of na een ziekenhuisbevalling naar huis
                gaat, ik zorg voor een rustige overgang naar de kraamperiode
                thuis. Ik werk samen met verloskundigen uit de regio en met
                het <strong>Van Weel-Bethesda Ziekenhuis</strong> in Dirksland.
                Ook gezinnen die in een Rotterdams ziekenhuis bevallen en
                daarna terugkeren naar het eiland kunnen bij mij terecht.
              </p>

              <p>
                Voor de bevalling maken we graag kennis. Zo weet je wie er
                straks bij jullie thuis komt en kunnen we vooraf bespreken wat
                jullie belangrijk vinden tijdens de kraamperiode.
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {punten.map((punt) => (
                <li key={punt} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-sm text-terracotta"
                    aria-hidden="true"
                  >
                    ✦
                  </span>

                  <span className="text-ink/80">{punt}</span>
                </li>
              ))}
            </ul>

            {/* Kernen-overzicht */}
            <div className="mt-12 rounded-2xl bg-cream p-6 sm:p-8">
              <h3 className="h-serif mb-4 text-xl">
                Kernen van Goeree-Overflakkee waar ik kom
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-ink/70">
                Van oost naar west — ik kom bij gezinnen thuis in alle kernen
                van het eiland:
              </p>
              <div className="flex flex-wrap gap-2">
                {kernen.map((kern) => (
                  <span
                    key={kern}
                    className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-espresso shadow-card"
                  >
                    {kern}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink/70">
                Woon je in een kern die er niet bij staat? Neem gerust contact
                op — ik kom op het hele eiland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-site max-w-3xl">
          <div className="text-center">
            <p className="eyebrow mb-3">Goed om te weten</p>

            <h2 className="h-serif text-3xl sm:text-4xl">
              Veelgestelde vragen over kraamzorg op Goeree-Overflakkee
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl bg-white p-6 shadow-card open:shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif text-lg text-espresso">
                    {faq.q}
                  </h3>

                  <span
                    className="text-terracotta transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-ink/70">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Woon je op Goeree-Overflakkee?"
        title="Vraag persoonlijke kraamzorg aan"
        description="Neem telefonisch of via WhatsApp contact op met Cindy en bespreek jullie wensen voor de kraamperiode."
      />
    </>
  );
}
