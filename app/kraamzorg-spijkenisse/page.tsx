import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Kraamzorg Spijkenisse | Erkende kraamverzorging op de groene eilanden",
  description:
    "Kraamzorg in Spijkenisse van Cindy: 22 jaar ervaring, erkend door KCKZ. Persoonlijk zorgplan, borstvoedingsadvies en praktische hulp aan huis. Vraag aan!",
  alternates: { canonical: "https://cindyskraamzorg.nl/kraamzorg-spijkenisse" },
};

const punten = [
    "Alle wijken van Spijkenisse en de groene eilanden",
    "Direct beschikbaar na poliklinische bevalling in het Maasstad",
    "Flexibele tijden door het zelfstandig werken",
    "Persoonlijk zorgplan, samen opgesteld in overleg",
  ];

const faqs = [
    {
      q: "Werk je in alle wijken van Spijkenisse?",
      a: "Ja, ik werk in heel Spijkenisse: centrum, groene eilanden en alle omliggende wijken.",
    },
    {
      q: "Hoe zit het met parkeren in de nieuwbouwwijken?",
      a: "Geen issue — ik plan mijn aanrijtijd ruim en ben gewend aan elke wijk, dus ik ben op tijd bij je.",
    },
    {
      q: "Kan ik avonduren inplannen voor de kraamzorg?",
      a: "Ja, flexibiliteit is juist het voordeel van een zelfstandige kraamverzorgende. We stemmen het zorgplan af op jullie dagritme.",
    },
    {
      q: "Hoe snel na de bevalling kan de zorg starten?",
      a: "Direct. Bel of app me zodra de baby er is — ook 's nachts — en ik kom zo snel mogelijk naar je toe.",
    },
  ];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Kraamzorg in Spijkenisse",
  url: "https://cindyskraamzorg.nl/kraamzorg-spijkenisse",
  about: {
    "@type": "MedicalBusiness",
    name: "Cindy's Kraamzorg",
    telephone: "+31610890534",
    areaServed: { "@type": "City", name: "Spijkenisse" },
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
      { "@type": "ListItem", position: 2, name: "Kraamzorg Spijkenisse", item: "https://cindyskraamzorg.nl/kraamzorg-spijkenisse" },
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
          src="/images/hero-spijkenisse.jpg"
          alt="Kraamverzorgende Cindy met pasgeboren baby en peuter — kraamzorg in Spijkenisse"
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
            Kraamzorg in Spijkenisse
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Op de groene eilanden begint het ouderschap het liefst zorgeloos. Persoonlijke kraamzorg van Cindy, afgestemd op jouw gezin.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Kraamzorg in Spijkenisse</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Kraamzorg op de groene eilanden
            </h2>
            <div className="divider-leaf mt-6 mb-6">✦</div>
            <div className="space-y-4 leading-relaxed">
              <p>
                Spijkenisse groeit: jonge gezinnen, nieuwbouwwijken en de
                gezellige terrassen aan de Oude Maas. Voor wie hier woont, is
                het fijn om na de bevalling in het Maasstad Ziekenhuis direct
                thuis verder te kunnen met professionele ondersteuning.
              </p>
              <p>
                Ik werk in alle wijken van Spijkenisse — van het centrum tot
                de groene eilanden. Na een poliklinische bevalling sta ik klaar
                zodra je thuiskomt, met alles wat jij en je baby nodig hebben.
              </p>
              <p>
                Omdat ik als zelfstandige werk, ben ik flexibel in tijden en
                taken. Avonduren, extra borstvoedingsondersteuning of hulp bij
                het ritme van je baby: alles is bespreekbaar in jullie
                persoonlijke zorgplan.
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
              src="/images/cindy-baby-giraf.jpg"
              alt="Cindy met een pasgeboren baby in een babykamer in Spijkenisse"
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
              Veelgestelde vragen over kraamzorg in Spijkenisse
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
        eyebrow="Woon je in Spijkenisse?"
        title="Vraag vandaag nog persoonlijke kraamzorg aan"
        description="Bel, app of meld je online aan — Cindy staat voor je klaar op de groene eilanden."
      />
    </>
  );
}
