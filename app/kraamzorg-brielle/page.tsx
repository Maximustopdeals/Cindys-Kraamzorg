import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Kraamzorg Brielle | Persoonlijke kraamverzorging in de vestingstad",
  description:
    "Op zoek naar kraamzorg in Brielle? Cindy verzorgt moeder en baby met ruim 22 jaar ervaring. Erkend door KCKZ, volledig vergoed. Vraag vrijblijvend aan.",
  alternates: { canonical: "https://cindyskraamzorg.nl/kraamzorg-brielle" },
};

const punten = [
    "Werkzaam in heel de gemeente Brielle, van centrum tot Vierpolders",
    "Kennismaking vóór de bevalling, zodat je vertrouwd bent",
    "Begeleiding bij borstvoeding en babyverzorging",
    "Praktische hulp in huis: koken, wassen en opruimen",
  ];

const faqs = [
    {
      q: "Kom je ook in Vierpolders en Zwartewaal?",
      a: "Ja, ik werk in de hele gemeente Brielle, dus ook in Vierpolders, Zwartewaal en de omliggende kernen.",
    },
    {
      q: "Hoe lang duurt de kraamweek?",
      a: "Dat hangt af van je indicatie. Vaak is de zorg 8 uur per dag verdeeld over ongeveer een week, afgestemd op jullie wensen.",
    },
    {
      q: "Kan ik vooraf kennismaken?",
      a: "Zeker, dat vind ik zelfs prettig. Tijdens een vrijblijvend gesprek bespreken we jullie wensen en stellen we samen het zorgplan op.",
    },
    {
      q: "Wat als mijn baby eerder komt dan gepland?",
      a: "Geen probleem — bel me direct en ik schakel zo snel mogelijk. Flexibiliteit is juist het voordeel van een zelfstandige kraamverzorgende.",
    },
  ];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Kraamzorg in Brielle",
  url: "https://cindyskraamzorg.nl/kraamzorg-brielle",
  about: {
    "@type": "MedicalBusiness",
    name: "Cindy's Kraamzorg",
    telephone: "+31610890534",
    areaServed: { "@type": "City", name: "Brielle" },
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
      { "@type": "ListItem", position: 2, name: "Kraamzorg Brielle", item: "https://cindyskraamzorg.nl/kraamzorg-brielle" },
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
          src="/images/hero-brielle.jpg"
          alt="Vrolijke baby — kraamzorg in Brielle"
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
            Kraamzorg in Brielle
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            In de mooiste vestingstad van Zuid-Holland verdien je een rustige start. Persoonlijke kraamzorg van Cindy, erkend door KCKZ.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Kraamzorg in Brielle</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Kraamzorg in de vestingstad Brielle
            </h2>
            <div className="divider-leaf mt-6 mb-6">✦</div>
            <div className="space-y-4 leading-relaxed">
              <p>
                Brielle is een stad met karakter: de historische vestingwallen,
                het Marktveld en gezinnen die genieten van het water aan de
                Brielse Maas. Precies in zo'n bijzondere omgeving wil je de
                eerste week met je baby zorgeloos kunnen doorbrengen.
              </p>
              <p>
                Als kraamverzorgende kom ik graag naar Brielle. Van Vierpolders
                tot Zwartewaal: waar je ook woont in de gemeente, ik stem de
                zorg volledig af op jullie situatie — in het oude centrum, in
                een nieuwbouwwijk of juist landelijk aan de rand van de polders.
              </p>
              <p>
                Voor je bevalling plannen we een kennismakingsgesprek. Zo weet
                je precies wie er na de geboorte bij je over de vloer komt en
                wat je kunt verwachten.
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
              src="/images/cindy-gezin.jpg"
              alt="Cindy samen met een pasgeboren baby en peuter tijdens een kraamweek"
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
              Veelgestelde vragen over kraamzorg in Brielle
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
        eyebrow="Woon je in Brielle?"
        title="Plan een vrijblijvende kennismaking in de vestingstad"
        description="Bel of app en ontdek hoe Cindy jullie eerste week als gezin rustig maakt."
      />
    </>
  );
}
