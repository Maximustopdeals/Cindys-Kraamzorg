import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

const pageUrl = "https://cindyskraamzorg.nl/kraamzorg-brielle";

export const metadata: Metadata = {
  title: "Kraamzorg Brielle | Persoonlijke kraamzorg van Cindy",
  description:
    "Persoonlijke kraamzorg in Brielle van Cindy. 22 jaar ervaring, erkend door KCKZ en aandacht voor moeder, baby en gezin. Vraag kraamzorg aan.",
  alternates: {
    canonical: pageUrl,
  },
};

const punten = [
  "Kraamzorg in Brielle en omgeving",
  "Ook begeleiding rondom een poliklinische bevalling in Rotterdam",
  "Flexibele zorg afgestemd op jullie dagritme",
  "Persoonlijk zorgplan, afgestemd op jullie wensen",
];

const faqs = [
  {
    q: "Bied je ook kraamzorg in Vierpolders en Zwartewaal?",
    a: "Ja, ik bied kraamzorg in Brielle en de omliggende plaatsen, waaronder Vierpolders en Zwartewaal. Vooraf bespreken we jullie wensen en de praktische afspraken rondom de kraamzorg.",
  },
  {
    q: "Kun je kraamzorg bieden na een bevalling in het Maasstad Ziekenhuis?",
    a: "Ja. Het Maasstad Ziekenhuis staat in Rotterdam en is er ook voor aanstaande ouders uit de omgeving. Na een ziekenhuisbevalling kan de kraamzorg, wanneer jullie naar huis mogen, bij jullie thuis in Brielle worden voortgezet.",
  },
  {
    q: "Kan ik vooraf kennismaken met Cindy?",
    a: "Zeker. Ik vind het prettig om vooraf kennis te maken. Tijdens een persoonlijk gesprek bespreken we jullie wensen, de kraamperiode en wat jullie van mij kunnen verwachten.",
  },
  {
    q: "Wat als mijn baby eerder komt dan verwacht?",
    a: "Neem na de bevalling zo snel mogelijk telefonisch of via WhatsApp contact met mij op. Ook wanneer de bevalling eerder begint dan verwacht, bespreken we zo snel mogelijk wanneer de kraamzorg bij jullie thuis kan starten.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Kraamzorg in Brielle",
      description:
        "Persoonlijke kraamzorg in Brielle van Cindy, met deskundige begeleiding en praktische ondersteuning tijdens de kraamtijd.",
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
      areaServed: [
        { "@type": "City", name: "Brielle" },
        { "@type": "Place", name: "Vierpolders" },
        { "@type": "Place", name: "Zwartewaal" },
      ],
      serviceType: "Kraamzorg",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cindyskraamzorg.nl/" },
        { "@type": "ListItem", position: 2, name: "Kraamzorg Brielle", item: pageUrl },
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
              Kraamzorg in Brielle
            </h1>

            <div className="my-8 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-terracotta/40" />
              <span className="text-terracotta">✦</span>
              <span className="h-px w-16 bg-terracotta/40" />
            </div>

            <p className="text-lg leading-relaxed text-ink/80 sm:text-xl">
              Persoonlijke kraamzorg in Brielle, met aandacht, rust en
              deskundige begeleiding voor een fijne start van jullie gezin.
            </p>
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3">Kraamzorg in Brielle</p>

            <h2 className="h-serif text-3xl sm:text-4xl">
              Persoonlijke kraamzorg voor gezinnen in Brielle
            </h2>

            <div className="divider-leaf mb-6 mt-6" aria-hidden="true">
              ✦
            </div>

            <div className="space-y-4 leading-relaxed">
              <p>
                Ben je op zoek naar professionele en persoonlijke kraamzorg
                in Brielle? Dan ben je bij Cindy&apos;s Kraamzorg aan het
                juiste adres. Tijdens de kraamtijd bied ik deskundige
                begeleiding, praktische ondersteuning en persoonlijke
                aandacht, zodat jullie met vertrouwen kunnen genieten van
                de eerste dagen met jullie baby.
              </p>

              <p>
                Als zelfstandig kraamverzorgende kom ik bij gezinnen thuis
                in Brielle en omgeving. Ik neem de tijd om jullie wensen te
                leren kennen en stem mijn begeleiding af op wat jullie als
                gezin nodig hebben. Zo zorgen we samen voor een rustige en
                vertrouwde start na de geboorte.
              </p>

              <p>
                Brielle heeft een eigen karakter en een mooie historische
                omgeving. Voor de kraamzorg maakt het vooral verschil dat
                jullie weten wie er bij jullie thuis komt. Daarom vind ik
                een persoonlijke kennismaking vooraf belangrijk. Zo weten
                jullie wat jullie van mij kunnen verwachten en kunnen we
                de zorg goed voorbereiden.
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
              Veelgestelde vragen over kraamzorg in Brielle
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

                <p className="mt-4 leading-relaxed text-ink/70">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CtaBand
        eyebrow="Woon je in Brielle?"
        title="Vraag vandaag nog persoonlijke kraamzorg aan"
        description="Wil je kraamzorg in Brielle aanvragen? Neem telefonisch of via WhatsApp contact op met Cindy en bespreek jullie wensen."
      />
    </>
  );
}
