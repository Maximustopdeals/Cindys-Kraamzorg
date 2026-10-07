import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

const pageUrl = "https://cindyskraamzorg.nl/kraamzorg-spijkenisse";

export const metadata: Metadata = {
  title: "Kraamzorg Spijkenisse | Persoonlijke kraamzorg van Cindy",
  description:
    "Persoonlijke kraamzorg in Spijkenisse van Cindy. 22 jaar ervaring, erkend door KCKZ en aandacht voor moeder, baby en gezin. Vraag kraamzorg aan.",
  alternates: {
    canonical: pageUrl,
  },
};

const punten = [
  "Kraamzorg in alle wijken van Spijkenisse",
  "Ook begeleiding rondom een poliklinische bevalling in Rotterdam",
  "Flexibele zorg afgestemd op jullie dagritme",
  "Persoonlijk zorgplan, afgestemd op jullie wensen",
];

const faqs = [
  {
    q: "Werk je in alle wijken van Spijkenisse?",
    a: "Ja, ik bied kraamzorg in heel Spijkenisse en de omliggende wijken. Samen bespreken we vooraf jullie wensen, zodat de zorg goed aansluit bij jullie gezin.",
  },
  {
    q: "Kun je kraamzorg bieden na een bevalling in het Maasstad Ziekenhuis?",
    a: "Ja. Het Maasstad Ziekenhuis bevindt zich in Rotterdam en biedt ook mogelijkheden voor een poliklinische bevalling. Wanneer jullie na de bevalling naar huis gaan, kan ik de kraamzorg thuis in Spijkenisse verzorgen.",
  },
  {
    q: "Kan de kraamzorg flexibel worden afgestemd?",
    a: "Ja. Als zelfstandig kraamverzorgende kan ik de zorg persoonlijk afstemmen op jullie situatie, wensen en dagritme. We bespreken samen wat jullie tijdens de kraamperiode nodig hebben.",
  },
  {
    q: "Hoe snel kan de kraamzorg na de bevalling starten?",
    a: "Neem na de bevalling zo snel mogelijk telefonisch of via WhatsApp contact met mij op. Ook 's nachts kun je mij bereiken. Vervolgens stem ik zo snel mogelijk met jullie af wanneer de kraamzorg kan starten.",
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://cindyskraamzorg.nl/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Kraamzorg Spijkenisse",
          item: pageUrl,
        },
      ],
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
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-16 pt-40">
        <Image
          src="/images/hero-spijkenisse.jpg"
          alt="Kraamverzorgende Cindy met een pasgeboren baby en peuter"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />

        <div
          className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-sand"
          aria-hidden="true"
        />

        <div className="container-site relative">
          <p className="eyebrow mb-3 !text-blush">
            Werkgebied
          </p>

          <h1 className="h-serif max-w-3xl text-4xl text-white sm:text-5xl">
            Kraamzorg in Spijkenisse
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Persoonlijke kraamzorg in Spijkenisse, met aandacht, rust en
            deskundige begeleiding voor een fijne start van jullie gezin.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">
              Kraamzorg in Spijkenisse
            </p>

            <h2 className="h-serif text-3xl sm:text-4xl">
              Persoonlijke kraamzorg voor gezinnen in Spijkenisse
            </h2>

            <div
              className="divider-leaf mb-6 mt-6"
              aria-hidden="true"
            >
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
                gezinnen in heel Spijkenisse. Ik neem de tijd om jullie
                wensen te leren kennen en stem mijn begeleiding af op wat
                jullie als gezin nodig hebben. Zo creëren we samen een
                rustige en fijne start voor ouders en kind.
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
                <li
                  key={punt}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-sm text-terracotta"
                    aria-hidden="true"
                  >
                    ✦
                  </span>

                  <span className="text-ink/80">
                    {punt}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-blush/40"
              aria-hidden="true"
            />

            <Image
              src="/images/cindy-baby-giraf.jpg"
              alt="Cindy met een pasgeboren baby"
              width={900}
              height={1200}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="relative rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-site max-w-3xl">
          <div className="text-center">
            <p className="eyebrow mb-3">
              Goed om te weten
            </p>

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
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-espresso [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>

                  <span
                    className="text-terracotta transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-ink/70">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        eyebrow="Woon je in Spijkenisse?"
        title="Vraag vandaag nog persoonlijke kraamzorg aan"
        description="Wil je kraamzorg in Spijkenisse aanvragen? Neem telefonisch of via WhatsApp contact op met Cindy en bespreek jullie wensen."
      />
    </>
  );
}
