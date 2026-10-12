import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

const pageUrl = "https://cindyskraamzorg.nl/kraamzorg-oostvoorne";

export const metadata: Metadata = {
  metadataBase: new URL("https://cindyskraamzorg.nl"),
  title: "Kraamzorg Voorne aan Zee | Persoonlijke kraamzorg van Cindy",
  description:
    "Persoonlijke kraamzorg in Voorne aan Zee van Cindy. 23 jaar ervaring, erkend door KCKZ, beschikbaar in Oostvoorne, Rockanje, Tinte, Vierpolders en heel Voorne aan Zee.",
  alternates: {
    canonical: "/kraamzorg-oostvoorne",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/kraamzorg-oostvoorne",
    siteName: "Cindy's Kraamzorg",
    title: "Kraamzorg Voorne aan Zee | Persoonlijke kraamzorg van Cindy",
    description:
      "Persoonlijke kraamzorg in Voorne aan Zee van Cindy. 23 jaar ervaring, erkend door KCKZ en aandacht voor moeder, baby en gezin.",
    images: [
      {
        url: "/images/og-voorne-aan-zee.jpg",
        width: 1200,
        height: 630,
        alt: "Kraamzorg in Voorne aan Zee — Cindy's Kraamzorg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraamzorg Voorne aan Zee | Persoonlijke kraamzorg van Cindy",
    description:
      "Persoonlijke kraamzorg in Voorne aan Zee van Cindy. 23 jaar ervaring, erkend door KCKZ.",
    images: ["/images/og-voorne-aan-zee.jpg"],
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
  { name: "Oostvoorne", type: "Dorp" },
  { name: "Rockanje", type: "Dorp" },
  { name: "Tinte", type: "Dorp" },
  { name: "Vierpolders", type: "Dorp" },
  { name: "Zwartewaal", type: "Dorp" },
  { name: "Nieuwenhoorn", type: "Dorp" },
  { name: "Nieuw-Helvoet", type: "Dorp" },
  { name: "Oudenhoorn", type: "Dorp" },
];

const punten = [
  "Kraamzorg in heel Voorne aan Zee",
  "Ook beschikbaar in Rockanje, Tinte, Vierpolders en Zwartewaal",
  "Eén vaste kraamverzorgende tijdens de kraamperiode",
  "Persoonlijke begeleiding voor moeder, baby en gezin",
];

const faqs = [
  {
    q: "In welke kernen van Voorne aan Zee werk je?",
    a: "Ik bied kraamzorg in heel Voorne aan Zee: Oostvoorne, Rockanje, Tinte, Vierpolders, Zwartewaal, Nieuwenhoorn, Nieuw-Helvoet en Oudenhoorn. Vooraf bespreken we jullie wensen en maken we duidelijke afspraken over de kraamzorg.",
  },
  {
    q: "Kun je kraamzorg bieden na een bevalling in Rotterdam?",
    a: "Ja. Wanneer je bijvoorbeeld in het Maasstad Ziekenhuis in Rotterdam bevalt en daarna naar huis mag, kan de kraamzorg bij jullie thuis in Voorne aan Zee worden voortgezet.",
  },
  {
    q: "Wat als ik in het ziekenhuis in Spijkenisse beval?",
    a: "Ook dat is mogelijk. Na de bevalling stemmen we af wanneer jullie naar huis mogen en wanneer de kraamzorg thuis kan starten. Zo sluit de zorg goed aan op jullie situatie.",
  },
  {
    q: "Is er ook aandacht voor mijn partner en oudere kinderen?",
    a: "Zeker. De kraamperiode draait niet alleen om de baby. Ook je partner en eventuele oudere kinderen worden betrokken bij de nieuwe gezinssituatie. Ik geef uitleg, bied praktische ondersteuning en help jullie om samen een fijne start te maken.",
  },
  {
    q: "Wanneer kan ik kraamzorg aanvragen?",
    a: "Het is verstandig om kraamzorg al tijdens de zwangerschap te regelen. Zo is er voldoende tijd om kennis te maken en jullie wensen te bespreken. Na de bevalling nemen jullie zo snel mogelijk contact met mij op om de start van de kraamzorg af te stemmen.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Kraamzorg in Voorne aan Zee",
      description:
        "Persoonlijke kraamzorg in Voorne aan Zee van Cindy, met deskundige begeleiding en praktische ondersteuning tijdens de kraamtijd.",
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
        { "@type": "Place", name: "Oostvoorne" },
        { "@type": "Place", name: "Rockanje" },
        { "@type": "Place", name: "Tinte" },
        { "@type": "Place", name: "Vierpolders" },
        { "@type": "Place", name: "Zwartewaal" },
        { "@type": "Place", name: "Nieuwenhoorn" },
        { "@type": "Place", name: "Nieuw-Helvoet" },
        { "@type": "Place", name: "Oudenhoorn" },
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
          name: "Kraamzorg Voorne aan Zee",
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
              Kraamzorg in Voorne aan Zee
            </h1>

            <div className="my-8 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-terracotta/40" />
              <span className="text-terracotta">✦</span>
              <span className="h-px w-16 bg-terracotta/40" />
            </div>

            <p className="text-lg leading-relaxed text-ink/80 sm:text-xl">
              Persoonlijke kraamzorg in Oostvoorne, Rockanje, Tinte en alle
              andere kernen van Voorne aan Zee. Met rust, aandacht en
              deskundige begeleiding tijdens de eerste bijzondere dagen met
              jullie baby.
            </p>
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3">Kraamzorg in Voorne aan Zee</p>

            <h2 className="h-serif text-3xl sm:text-4xl">
              Persoonlijke kraamzorg in jouw kern
            </h2>

            <div className="divider-leaf mb-6 mt-6" aria-hidden="true">
              ✦
            </div>

            <div className="space-y-4 leading-relaxed">
              <p>
                Ben je op zoek naar persoonlijke kraamzorg in de gemeente
                Voorne aan Zee? Dan wil je vooral kunnen vertrouwen op iemand
                die rustig, deskundig en betrokken is. Tijdens de kraamtijd
                ondersteun ik jullie bij de verzorging van jullie baby en help
                ik jullie om samen jullie draai te vinden als gezin.
              </p>

              <p>
                Als zelfstandig kraamverzorgende kom ik bij jullie thuis in
                alle kernen van Voorne aan Zee: <strong>Oostvoorne,
                Rockanje, Tinte, Vierpolders, Zwartewaal, Nieuwenhoorn,
                Nieuw-Helvoet en Oudenhoorn</strong>. Ik neem de tijd om jullie
                situatie en wensen te leren kennen, zodat de begeleiding
                aansluit bij wat jullie nodig hebben.
              </p>

              <p>
                Of je nu thuis bevalt of na een ziekenhuisbevalling naar huis
                gaat, ik zorg voor een rustige overgang naar de kraamperiode
                thuis. Het Maasstad Ziekenhuis in Rotterdam biedt bijvoorbeeld
                de mogelijkheid om zonder medische indicatie te bevallen met
                de eigen verloskundige en een persoonlijke kraamverzorgende.
                Wanneer jullie daarna naar huis mogen, kan de kraamzorg thuis
                in Voorne aan Zee worden voortgezet.
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
                Alle kernen van Voorne aan Zee
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-ink/70">
                De gemeente Voorne aan Zee is per 1 januari 2023 ontstaan uit
                de fusie van Brielle, Hellevoetsluis en Westvoorne. Ik kom bij
                gezinnen thuis in alle onderstaande kernen:
              </p>
              <div className="flex flex-wrap gap-2">
                {kernen.map((kern) => (
                  <span
                    key={kern.name}
                    className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-espresso shadow-card"
                  >
                    {kern.name}
                  </span>
                ))}
              </div>
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
              Veelgestelde vragen over kraamzorg in Voorne aan Zee
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
        eyebrow="Woon je in Voorne aan Zee?"
        title="Vraag persoonlijke kraamzorg aan"
        description="Neem telefonisch of via WhatsApp contact op met Cindy en bespreek jullie wensen voor de kraamperiode."
      />
    </>
  );
}
