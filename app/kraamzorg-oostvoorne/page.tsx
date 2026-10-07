```tsx
import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

const pageUrl = "https://cindyskraamzorg.nl/kraamzorg-oostvoorne";

export const metadata: Metadata = {
  title: "Kraamzorg Oostvoorne | Persoonlijke kraamzorg van Cindy",
  description:
    "Persoonlijke kraamzorg in Oostvoorne van Cindy. 22 jaar ervaring, erkend door KCKZ en aandacht voor moeder, baby en gezin. Vraag kraamzorg aan.",
  alternates: {
    canonical: pageUrl,
  },
};

const punten = [
  "Kraamzorg in Oostvoorne en omgeving",
  "Ook beschikbaar voor gezinnen in Rockanje en Tinte",
  "Eén vaste kraamverzorgende tijdens de kraamperiode",
  "Persoonlijke begeleiding voor moeder, baby en gezin",
];

const faqs = [
  {
    q: "Bied je ook kraamzorg in Rockanje en Tinte?",
    a: "Ja, naast Oostvoorne bied ik ook kraamzorg in Rockanje, Tinte en de omliggende omgeving. Vooraf bespreken we jullie wensen en maken we duidelijke afspraken over de kraamzorg.",
  },
  {
    q: "Kun je kraamzorg bieden na een bevalling in Rotterdam?",
    a: "Ja. Wanneer je bijvoorbeeld in het Maasstad Ziekenhuis in Rotterdam bevalt en daarna naar huis mag, kan de kraamzorg bij jullie thuis in Oostvoorne worden voortgezet.",
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
      name: "Kraamzorg in Oostvoorne",
      description:
        "Persoonlijke kraamzorg in Oostvoorne van Cindy, met deskundige begeleiding en praktische ondersteuning tijdens de kraamtijd.",
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
        {
          "@type": "Place",
          name: "Oostvoorne",
        },
        {
          "@type": "Place",
          name: "Rockanje",
        },
        {
          "@type": "Place",
          name: "Tinte",
        },
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
          name: "Kraamzorg Oostvoorne",
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
          src="/images/hero-oostvoorne.jpg"
          alt="Cindy met een pasgeboren baby"
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
            Kraamzorg in Oostvoorne
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Persoonlijke kraamzorg in Oostvoorne, met rust, aandacht en
            deskundige begeleiding tijdens de eerste bijzondere dagen met
            jullie baby.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">
              Kraamzorg in Oostvoorne
            </p>

            <h2 className="h-serif text-3xl sm:text-4xl">
              Persoonlijke kraamzorg in Oostvoorne
            </h2>

            <div
              className="divider-leaf mb-6 mt-6"
              aria-hidden="true"
            >
              ✦
            </div>

            <div className="space-y-4 leading-relaxed">
              <p>
                Ben je op zoek naar persoonlijke kraamzorg in Oostvoorne?
                Dan wil je vooral kunnen vertrouwen op iemand die rustig,
                deskundig en betrokken is. Tijdens de kraamtijd ondersteun ik
                jullie bij de verzorging van jullie baby en help ik jullie om
                samen jullie draai te vinden als gezin.
              </p>

              <p>
                Als zelfstandig kraamverzorgende kom ik bij jullie thuis in
                Oostvoorne. Ook gezinnen in Rockanje, Tinte en de omliggende
                omgeving kunnen bij mij terecht. Ik neem de tijd om jullie
                situatie en wensen te leren kennen, zodat de begeleiding
                aansluit bij wat jullie nodig hebben.
              </p>

              <p>
                Of je nu thuis bevalt of na een ziekenhuisbevalling naar
                huis gaat, ik zorg voor een rustige overgang naar de
                kraamperiode thuis. Het Maasstad Ziekenhuis in Rotterdam
                biedt bijvoorbeeld de mogelijkheid om zonder medische
                indicatie te bevallen met de eigen verloskundige en een
                persoonlijke kraamverzorgende. Wanneer jullie daarna naar
                huis mogen, kan de kraamzorg thuis in Oostvoorne worden
                voortgezet.
              </p>

              <p>
                Voor de bevalling maken we graag kennis. Zo weet je wie er
                straks bij jullie thuis komt en kunnen we vooraf bespreken
                wat jullie belangrijk vinden tijdens de kraamperiode.
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
              src="/images/cindy-kinderen-2.jpg"
              alt="Cindy met een pasgeboren baby tijdens een kraamweek"
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
              Veelgestelde vragen over kraamzorg in Oostvoorne
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
        eyebrow="Woon je in Oostvoorne of omgeving?"
        title="Vraag persoonlijke kraamzorg aan"
        description="Neem telefonisch of via WhatsApp contact op met Cindy en bespreek jullie wensen voor de kraamperiode."
      />
    </>
  );
}
```
