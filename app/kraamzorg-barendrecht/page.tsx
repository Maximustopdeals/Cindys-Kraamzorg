import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

const pageUrl = "https://cindyskraamzorg.nl/kraamzorg-barendrecht";

export const metadata: Metadata = {
  metadataBase: new URL("https://cindyskraamzorg.nl"),
  title: "Kraamzorg Barendrecht | Persoonlijke kraamzorg van Cindy",
  description:
    "Persoonlijke kraamzorg in Barendrecht van Cindy. 23 jaar ervaring, erkend door KCKZ en aandacht voor moeder, baby en gezin. Vraag kraamzorg aan.",
  alternates: {
    canonical: "/kraamzorg-barendrecht",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/kraamzorg-barendrecht",
    siteName: "Cindy's Kraamzorg",
    title: "Kraamzorg Barendrecht | Persoonlijke kraamzorg van Cindy",
    description:
      "Persoonlijke kraamzorg in Barendrecht van Cindy. 23 jaar ervaring, erkend door KCKZ en aandacht voor moeder, baby en gezin.",
    images: [
      {
        url: "/images/og-barendrecht.jpg",
        width: 1200,
        height: 630,
        alt: "Kraamzorg in Barendrecht — Cindy's Kraamzorg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraamzorg Barendrecht | Persoonlijke kraamzorg van Cindy",
    description:
      "Persoonlijke kraamzorg in Barendrecht van Cindy. 23 jaar ervaring, erkend door KCKZ.",
    images: ["/images/og-barendrecht.jpg"],
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

const punten = [
  "Kraamzorg in Barendrecht en directe omgeving",
  "Korte lijnen met verloskundigen uit de regio",
  "Ook begeleiding na een bevalling in het ziekenhuis in Rotterdam",
  "Erkend door KCKZ en volledig vergoed uit het basispakket",
];

const faqs = [
  {
    q: "In welke wijken van Barendrecht werk je?",
    a: "Ik bied kraamzorg in heel Barendrecht: van de oude dorpskern tot de nieuwbouwwijken zoals Carnisselande en Waterkant. Of je nu in een appartement woont of in een eengezinswoning — ik kom bij je thuis. Vooraf bespreken we jullie wensen en maken we duidelijke afspraken.",
  },
  {
    q: "Hoe snel ben je bij mij in Barendrecht?",
    a: "Vanuit Hellevoetsluis ben ik doorgaans binnen 25 tot 35 minuten bij je aan huis. Ik plan de kraamzorg flexibel in, zodat ik er ben wanneer jij me nodig hebt — ook 's nachts als dat nodig is.",
  },
  {
    q: "Begeleid je ook thuisbevallingen in Barendrecht?",
    a: "Ja, bij een thuisbevalling in overleg met je verloskundige ben ik vanaf het moment van de bevalling aanwezig om direct over te nemen in de kraamzorg. Bij een poliklinische bevalling in het ziekenhuis kom ik je thuis opvangen zodra jullie naar huis mogen.",
  },
  {
    q: "Werk je samen met verloskundigen uit de regio?",
    a: "Ja, ik werk samen met verloskundigen uit Barendrecht en de wijde omgeving van Rotterdam-Zuid. Bij vragen of twijfel over het herstel of de baby schakel ik indien nodig direct met je verloskundige — dat geeft rust en zekerheid.",
  },
  {
    q: "Hoe vraag ik kraamzorg aan in Barendrecht?",
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
      name: "Kraamzorg in Barendrecht",
      description:
        "Persoonlijke kraamzorg in Barendrecht van Cindy, met deskundige begeleiding en praktische ondersteuning tijdens de kraamtijd.",
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
        { "@type": "City", name: "Barendrecht" },
        { "@type": "Place", name: "Carnisselande" },
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
          name: "Kraamzorg Barendrecht",
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
              Kraamzorg in Barendrecht
            </h1>

            <div className="my-8 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-terracotta/40" />
              <span className="text-terracotta">✦</span>
              <span className="h-px w-16 bg-terracotta/40" />
            </div>

            <p className="text-lg leading-relaxed text-ink/80 sm:text-xl">
              Persoonlijke kraamzorg in Barendrecht, met rust, aandacht en
              deskundige begeleiding voor een fijne start van jullie gezin.
            </p>
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3">Kraamzorg in Barendrecht</p>

            <h2 className="h-serif text-3xl sm:text-4xl">
              Persoonlijke kraamzorg voor gezinnen in Barendrecht
            </h2>

            <div className="divider-leaf mb-6 mt-6" aria-hidden="true">
              ✦
            </div>

            <div className="space-y-4 leading-relaxed">
              <p>
                Ben je op zoek naar persoonlijke kraamzorg in Barendrecht? Dan
                wil je vooral kunnen vertrouwen op iemand die rustig,
                deskundig en betrokken is. Tijdens de kraamtijd ondersteun ik
                jullie bij de verzorging van jullie baby en help ik jullie om
                samen jullie draai te vinden als gezin.
              </p>

              <p>
                Barendrecht is een fijne plek om een gezin te starten: groen,
                ruim opgezet en toch dichtbij Rotterdam. Of je nu woont in de
                oude dorpskern, in de nieuwbouwwijken van
                <strong> Carnisselande</strong>, of aan de rand richting
                Ridderkerk — ik kom bij jullie thuis. Ik neem de tijd om jullie
                wensen te leren kennen en stem mijn begeleiding af op wat
                jullie als gezin nodig hebben.
              </p>

              <p>
                Of je nu thuis bevalt of na een ziekenhuisbevalling naar huis
                gaat, ik zorg voor een rustige overgang naar de kraamperiode
                thuis. Het Maasstad Ziekenhuis en het Ikazia Ziekenhuis in
                Rotterdam bieden bijvoorbeeld de mogelijkheid om zonder
                medische indicatie te bevallen met de eigen verloskundige en
                een persoonlijke kraamverzorgende. Wanneer jullie daarna naar
                huis mogen, kan de kraamzorg thuis in Barendrecht worden
                voortgezet.
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

            {/* Buurgemeenten-overzicht */}
            <div className="mt-12 rounded-2xl bg-cream p-6 sm:p-8">
              <h3 className="h-serif mb-4 text-xl">
                Ook in de buurt van Barendrecht
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-ink/70">
                Naast Barendrecht bied ik kraamzorg in de bredere regio rond
                Rotterdam-Zuid. Denk aan:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Rhoon",
                  "Poortugaal",
                  "Rotterdam-Zuid",
                  "Ridderkerk",
                  "Zwijndrecht",
                  "Spijkenisse",
                  "Hellevoetsluis",
                ].map((plaats) => (
                  <span
                    key={plaats}
                    className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-espresso shadow-card"
                  >
                    {plaats}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink/70">
                Woon je niet in één van deze plaatsen? Neem gerust contact op
                voor de mogelijkheden — in overleg is veel bespreekbaar.
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
              Veelgestelde vragen over kraamzorg in Barendrecht
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
        eyebrow="Woon je in Barendrecht?"
        title="Vraag persoonlijke kraamzorg aan"
        description="Neem telefonisch of via WhatsApp contact op met Cindy en bespreek jullie wensen voor de kraamperiode."
      />
    </>
  );
}
