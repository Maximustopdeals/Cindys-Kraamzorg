import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

const pageUrl = "https://cindyskraamzorg.nl/kraamzorg-spijkenisse";

export const metadata: Metadata = {
  metadataBase: new URL("https://cindyskraamzorg.nl"),
  title: "Kraamzorg Spijkenisse | Persoonlijke kraamzorg van Cindy",
  description:
    "Persoonlijke kraamzorg in Spijkenisse van Cindy. 22 jaar ervaring, erkend door KCKZ en aandacht voor moeder, baby en gezin. Vraag kraamzorg aan.",
  alternates: {
    canonical: "/kraamzorg-spijkenisse",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/kraamzorg-spijkenisse",
    siteName: "Cindy's Kraamzorg",
    title: "Kraamzorg Spijkenisse | Persoonlijke kraamzorg van Cindy",
    description:
      "Persoonlijke kraamzorg in Spijkenisse van Cindy. 22 jaar ervaring, erkend door KCKZ en aandacht voor moeder, baby en gezin.",
    images: [
      {
        url: "/images/og-spijkenisse.jpg",
        width: 1200,
        height: 630,
        alt: "Kraamzorg in Spijkenisse — Cindy's Kraamzorg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraamzorg Spijkenisse | Persoonlijke kraamzorg van Cindy",
    description:
      "Persoonlijke kraamzorg in Spijkenisse van Cindy. 22 jaar ervaring, erkend door KCKZ.",
    images: ["/images/og-spijkenisse.jpg"],
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
  "Kraamzorg in Spijkenisse en directe omgeving",
  "Begeleiding rondom een bevalling in de regio",
  "Flexibele zorg, afgestemd op jullie dagritme",
  "Persoonlijk zorgplan, opgesteld in overleg",
];

const faqs = [
  {
    q: "In welke delen van Spijkenisse werk je?",
    a: "Ik bied kraamzorg in Spijkenisse en de directe omgeving. Samen bespreken we vooraf jullie wensen en stemmen we af wat past bij jullie gezin en situatie.",
  },
  {
    q: "Kun je kraamzorg bieden na een ziekenhuisbevalling?",
    a: "Ja, in veel gevallen is het mogelijk om na een ziekenhuisbevalling thuis kraamzorg te ontvangen. Tijdens een kennismakingsgesprek bespreken we jullie situatie en de mogelijkheden.",
  },
  {
    q: "Kan de kraamzorg flexibel worden afgestemd?",
    a: "Ja. Als zelfstandig kraamverzorgende kan ik de zorg persoonlijk afstemmen op jullie situatie, wensen en dagritme. We bespreken samen wat jullie tijdens de kraamperiode nodig hebben.",
  },
  {
    q: "Hoe vraag ik kraamzorg aan?",
    a: "Neem telefonisch of via WhatsApp contact met mij op. Tijdens een kennismakingsgesprek bespreken we jullie wensen en stemmen we de kraamzorg af op jullie situatie.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Kraamzorg in Spijkenisse",
      description:
        "Persoonlijke kraamzorg in Spijkenisse van Cindy, met deskundige begeleiding en praktische ondersteuning tijdens de kraamtijd.",
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
      areaServed: {
        "@type": "City",
        name: "Spijkenisse",
      },
      serviceType: "Kraamzorg",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cindyskraamzorg.nl/" },
        { "@type": "ListItem", position: 2, name: "Kraamzorg Spijkenisse", item: pageUrl },
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
              Kraamzorg in Spijkenisse
            </h1>

            <div className="my-8 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-terracotta/40" />
              <span className="text-terracotta">✦</span>
              <span className="h-px w-16 bg-terracotta/40" />
            </div>

            <p className="text-lg leading-relaxed text-ink/80 sm:text-xl">
              Persoonlijke kraamzorg in Spijkenisse, met aandacht, rust en
              deskundige begeleiding voor een fijne start van jullie gezin.
            </p>
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3">Kraamzorg in Spijkenisse</p>

            <h2 className="h-serif text-3xl sm:text-4xl">
              Persoonlijke kraamzorg voor gezinnen in Spijkenisse
            </h2>

            <div className="divider-leaf mb-6 mt-6" aria-hidden="true">
              ✦
            </div>

            <div className="space-y-4 leading-relaxed">
              <p>
                Ben je op zoek naar professionele en persoonlijke kraamzorg
                in Spijkenisse? Dan ben je bij Cindy&apos;s Kraamzorg aan het
                juiste adres. Tijdens de kraamtijd bied ik deskundige
                begeleiding, praktische ondersteuning en persoonlijke
                aandacht, zodat jullie met vertrouwen kunnen genieten van
                de eerste dagen met jullie baby.
              </p>

              <p>
                Als zelfstandig kraamverzorgende bied ik kraamzorg aan
                gezinnen in Spijkenisse en de directe omgeving. Ik neem de
                tijd om jullie wensen te leren kennen en stem mijn
                begeleiding af op wat jullie als gezin nodig hebben. Zo
                creëren we samen een rustige en fijne start voor ouders en
                kind.
              </p>

              <p>
                Of je nu voor het eerst ouder wordt of al ervaring hebt,
                met persoonlijke kraamzorg in Spijkenisse kunnen jullie
                rekenen op betrokken ondersteuning, deskundig advies en een
                vertrouwd gezicht tijdens een bijzondere periode.
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
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-site max-w-3xl">
          <div className="text-center">
            <p className="eyebrow mb-3">Goed om te weten</p>

            <h2 className="h-serif text-3xl sm:text-4xl">
              Veelgestelde vragen over kraamzorg in Spijkenisse
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
        eyebrow="Woon je in Spijkenisse?"
        title="Vraag vandaag nog persoonlijke kraamzorg aan"
        description="Wil je kraamzorg in Spijkenisse aanvragen? Neem telefonisch of via WhatsApp contact op met Cindy en bespreek jullie wensen."
      />
    </>
  );
}
