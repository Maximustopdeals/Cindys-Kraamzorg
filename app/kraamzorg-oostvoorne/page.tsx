import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Kraamzorg Oostvoorne | Liefdevolle kraamzorg aan huis op Flakkee",
  description:
    "Kraamzorg in Oostvoorne en omgeving door Cindy: persoonlijke begeleiding, borstvoedingsadvies en huishoudelijke hulp. Erkend door KCKZ. Vraag aan via het formulier.",
  alternates: { canonical: "https://cindyskraamzorg.nl/kraamzorg-oostvoorne" },
};

const punten = [
    "Ook bereikbaar voor Rockanje, Tinte en het buitengebied",
    "Eén vaste kraamverzorgende — geen wisselende gezichten",
    "Naadloze overdracht na ziekenhuis- of thuisbevalling",
    "Begeleiding van partner en oudere kinderen inbegrepen",
  ];

const faqs = [
    {
      q: "Bedien je ook Rockanje en Tinte?",
      a: "Ja, naast Oostvoorne werk ik ook in Rockanje, Tinte en omliggende kernen op de Voorne-Polder.",
    },
    {
      q: "Wat als ik in Spijkenisse of Rotterdam beval?",
      a: "Geen enkel probleem. We stemmen af wanneer je naar huis mag en ik sta klaar zodra je thuiskomt om de kraamzorg direct op te starten.",
    },
    {
      q: "Hulp bij oudere kinderen tijdens de kraamweek?",
      a: "Zeker — ook je peuter of kleuter wordt met liefde betrokken. Van een leuk ontbijt tot een verhaaltje, zodat jij kunt rusten met de baby.",
    },
    {
      q: "Hoe kan ik mij aanmelden voor kraamzorg in Oostvoorne?",
      a: "Via het aanmeldformulier, telefonisch op 06-10890534 of per e-mail op info@cindyskraamzorg.nl. Meld je bij voorkeur vóór week 16 aan.",
    },
  ];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Kraamzorg in Oostvoorne",
  url: "https://cindyskraamzorg.nl/kraamzorg-oostvoorne",
  about: {
    "@type": "MedicalBusiness",
    name: "Cindy's Kraamzorg",
    telephone: "+31610890534",
    areaServed: { "@type": "City", name: "Oostvoorne" },
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
      { "@type": "ListItem", position: 2, name: "Kraamzorg Oostvoorne", item: "https://cindyskraamzorg.nl/kraamzorg-oostvoorne" },
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
          src="/images/hero-oostvoorne.jpg"
          alt="Cindy met pasgeboren baby — kraamzorg in Oostvoorne"
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
            Kraamzorg in Oostvoorne
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Rust, ruimte en persoonlijke aandacht — precies wat je nodig hebt in de eerste week met je baby in Oostvoorne.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Kraamzorg in Oostvoorne</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Kraamzorg in het groene hart van Flakkee
            </h2>
            <div className="divider-leaf mt-6 mb-6">✦</div>
            <div className="space-y-4 leading-relaxed">
              <p>
                Oostvoorne ligt lekker landelijk: tussen de duinen, de
                Middelduinen en het oude kerkdorp. Een plek waar ruimte en rust
                centraal staan — en dat is precies de sfeer waarin je de eerste
                week met je baby wilt doorbrengen.
              </p>
              <p>
                Vanuit Hellevoetsluis rijd ik zo naar Oostvoorne via de N57.
                Ook voor gezinnen in Rockanje, Tinte en het buitengebied ben ik
                beschikbaar. Juist in deze dorpen is persoonlijke aandacht
                waardevol: je krijgt bij mij geen wisselende gezichten, maar
                één vaste kraamverzorgende die jullie gezin kent.
              </p>
              <p>
                Of je nu bevalt in het ziekenhuis in Spijkenisse of Rotterdam,
                of thuis bevalt met de verloskundige: ik zorg dat de overgang
                naar huis naadloos verloopt.
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
              src="/images/cindy-kinderen-2.jpg"
              alt="Cindy lachend met een pasgeboren baby op de arm in een warme huiselijke setting"
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
              Veelgestelde vragen over kraamzorg in Oostvoorne
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
        eyebrow="Woon je in Oostvoorne of Rockanje?"
        title="Eén vaste kraamverzorgende voor jullie hele kraamweek"
        description="Meld je aan en ervaar het verschil van écht persoonlijke zorg."
      />
    </>
  );
}
