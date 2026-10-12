import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";

const pageUrl = "https://cindyskraamzorg.nl/werkgebieden";

export const metadata: Metadata = {
  metadataBase: new URL("https://cindyskraamzorg.nl"),
  title: "Werkgebieden | Kraamzorg in Zuid-Holland door Cindy",
  description:
    "Cindy's Kraamzorg is actief in Hellevoetsluis, Brielle, Voorne aan Zee, Spijkenisse, Rhoon & Poortugaal, Barendrecht, Rotterdam-Zuid en Goeree-Overflakkee. Bekijk jouw regio.",
  alternates: {
    canonical: "/werkgebieden",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/werkgebieden",
    siteName: "Cindy's Kraamzorg",
    title: "Werkgebieden | Kraamzorg in Zuid-Holland door Cindy",
    description:
      "Cindy's Kraamzorg is actief in Hellevoetsluis, Brielle, Voorne aan Zee, Spijkenisse, Rhoon & Poortugaal, Barendrecht, Rotterdam-Zuid en Goeree-Overflakkee.",
    images: [
      {
        url: "/images/og-werkgebieden.jpg",
        width: 1200,
        height: 630,
        alt: "Werkgebieden van Cindy's Kraamzorg in Zuid-Holland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Werkgebieden | Kraamzorg in Zuid-Holland door Cindy",
    description:
      "Cindy's Kraamzorg is actief in Hellevoetsluis, Brielle, Voorne aan Zee, Spijkenisse, Rhoon & Poortugaal, Barendrecht, Rotterdam-Zuid en Goeree-Overflakkee.",
    images: ["/images/og-werkgebieden.jpg"],
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

type Werkgebied = {
  name: string;
  href: string;
  description: string;
  plaatsen: string;
  regio: string;
};

const werkgebieden: Werkgebied[] = [
  {
    name: "Hellevoetsluis",
    href: "/kraamzorg-hellevoetsluis",
    description:
      "Jouw vertrouwde kraamverzorgende in de eigen plaats — snel bij je aan huis.",
    plaatsen:
      "Nieuw-Helvoet · Nieuwenhoorn · Kooistee · Den Bonsen Hoek",
    regio: "Voorne-Putten",
  },
  {
    name: "Brielle",
    href: "/kraamzorg-brielle",
    description:
      "Persoonlijke kraamzorg in de vestingstad, afgestemd op jouw gezin.",
    plaatsen: "Vierpolders · Zwartewaal · Rugge",
    regio: "Voorne-Putten",
  },
  {
    name: "Voorne aan Zee",
    href: "/kraamzorg-oostvoorne",
    description:
      "Liefdevolle begeleiding in Oostvoorne, Rockanje, Tinte en omgeving.",
    plaatsen:
      "Oostvoorne · Rockanje · Tinte · Oudenhoorn",
    regio: "Voorne-Putten",
  },
  {
    name: "Spijkenisse",
    href: "/kraamzorg-spijkenisse",
    description:
      "Professionele zorg en praktische hulp op de groene eilanden.",
    plaatsen: "Spijkenisse · Vriesland · Hekelingen",
    regio: "Voorne-Putten",
  },
  {
    name: "Rhoon & Poortugaal",
    href: "/kraamzorg-rhoon-poortugaal",
    description:
      "Ook beschikbaar in de gemeente Albrandswaard, net onder Rotterdam.",
    plaatsen: "Rhoon · Poortugaal · Portland",
    regio: "Rotterdam-Zuid",
  },
  {
    name: "Barendrecht",
    href: "/kraamzorg-barendrecht",
    description:
      "Persoonlijke kraamzorg voor gezinnen in Barendrecht en omgeving.",
    plaatsen: "Carnisselande · Smitshoek · Buitenoord",
    regio: "Rotterdam-Zuid",
  },
  {
    name: "Rotterdam-Zuid",
    href: "/kraamzorg-rotterdam-zuid",
    description:
      "Van Charlois tot IJsselmonde en van Feijenoord tot Hoogvliet.",
    plaatsen:
      "Charlois · Feijenoord · IJsselmonde · Hoogvliet · Pernis",
    regio: "Rotterdam-Zuid",
  },
  {
    name: "Goeree-Overflakkee",
    href: "/kraamzorg-goeree-overflakkee",
    description:
      "Persoonlijke kraamzorg op het hele eiland — van oost naar west.",
    plaatsen:
      "Middelharnis · Sommelsdijk · Dirksland · Ouddorp · Stellendam",
    regio: "Zuid-Hollandse Eilanden",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Werkgebieden van Cindy's Kraamzorg",
      description:
        "Overzicht van alle werkgebieden waar Cindy's Kraamzorg actief is, van Voorne-Putten tot Goeree-Overflakkee en Rotterdam-Zuid.",
      inLanguage: "nl-NL",
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
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
          name: "Werkgebieden",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function WerkgebiedenPage() {
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
            <p className="eyebrow mb-6">Werkgebieden</p>

            <h1 className="h-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Persoonlijke kraamzorg in jouw regio
            </h1>

            <div className="my-8 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-terracotta/40" />
              <span className="text-terracotta">✦</span>
              <span className="h-px w-16 bg-terracotta/40" />
            </div>

            <p className="text-lg leading-relaxed text-ink/80 sm:text-xl">
              Van Voorne-Putten tot Goeree-Overflakkee en van Rotterdam-Zuid
              tot de Zuid-Hollandse eilanden — Cindy&apos;s Kraamzorg is
              actief in heel Zuid-Holland.
            </p>
          </div>
        </div>
      </section>

      {/* ============ WERKGEBIEDEN GRID ============ */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {werkgebieden.map((gebied) => (
              <Link
                key={gebied.href}
                href={gebied.href}
                className="card-soft group flex flex-col transition-all hover:-translate-y-1 hover:!shadow-soft"
              >
                {/* Regio-label */}
                <span className="mb-4 inline-flex w-fit rounded-full bg-cream px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-terracotta">
                  {gebied.regio}
                </span>

                {/* Naam */}
                <h2 className="h-serif mb-3 text-2xl text-espresso transition-colors group-hover:text-terracotta">
                  {gebied.name}
                </h2>

                {/* Beschrijving */}
                <p className="mb-5 text-sm leading-relaxed text-ink/70">
                  {gebied.description}
                </p>

                {/* Plaatsen */}
                <div className="mb-6 mt-auto border-t border-ink/10 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/40">
                    Inclusief
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/60">
                    {gebied.plaatsen}
                  </p>
                </div>

                {/* Link-arrow */}
                <div className="flex items-center gap-2 text-sm font-semibold text-terracotta">
                  <span>Bekijk kraamzorg in {gebied.name}</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Extra info onder het grid */}
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="text-sm leading-relaxed text-ink/70">
              Woon je niet in één van deze regio&apos;s? Neem gerust{" "}
              <Link
                href="/contact"
                className="font-semibold text-terracotta hover:underline"
              >
                contact met me op
              </Link>{" "}
              — in overleg is vaak meer mogelijk dan je denkt.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Klaar voor de start?"
        title="Vraag persoonlijke kraamzorg aan in jouw regio"
        description="Meld je tijdig aan — dan is jouw plek gegarandeerd en kunnen we samen het perfecte zorgplan samenstellen."
      />
    </>
  );
}
