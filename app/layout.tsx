import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://cindyskraamzorg.nl";
const GTM_ID = "GTM-WB3H7L6W";
const GSC_VERIFICATION = "bZMH29-zUkxhgUpckwCuQda3KhoctoXtn7l2ZJaJNN8";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cindy's Kraamzorg | Persoonlijke kraamzorg in Hellevoetsluis & Zuid-Holland",
    template: "%s | Cindy's Kraamzorg",
  },
  description:
    "Cindy's Kraamzorg biedt liefdevolle, professionele kraamzorg aan huis in Hellevoetsluis, Brielle, Oostvoorne en Spijkenisse. Al 22 jaar ervaring, erkend door KCKZ. Vraag vandaag nog je kraamzorg aan.",
  keywords: [
    "kraamzorg Hellevoetsluis",
    "kraamverzorgende Hellevoetsluis",
    "kraamzorg Brielle",
    "kraamzorg Spijkenisse",
    "kraamzorg Oostvoorne",
    "kraamzorg Zuid-Holland",
    "kraamverzorgende",
    "kraamweek",
    "borstvoedingsadvies",
  ],
  verification: {
    google: GSC_VERIFICATION,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE_URL,
    siteName: "Cindy's Kraamzorg",
    title: "Cindy's Kraamzorg | Persoonlijke kraamzorg in Hellevoetsluis",
    description:
      "Liefdevolle, professionele kraamzorg aan huis. Al 22 jaar ervaring, erkend door KCKZ.",
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1920,
        height: 1280,
        alt: "Pasgeboren baby bij Cindy's Kraamzorg in Hellevoetsluis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cindy's Kraamzorg | Persoonlijke kraamzorg in Hellevoetsluis",
    description:
      "Liefdevolle, professionele kraamzorg aan huis. Al 22 jaar ervaring, erkend door KCKZ.",
    images: ["/images/hero-home.jpg"],
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
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": SITE_URL,
  name: "Cindy's Kraamzorg",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/hero-home.jpg`,
  description:
    "Persoonlijke, liefdevolle kraamzorg aan huis in Hellevoetsluis en omgeving. Al 22 jaar ervaring, erkend door KCKZ.",
  telephone: "+31610890534",
  email: "info@cindyskraamzorg.nl",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Struytse Hoeck 106",
    postalCode: "3224 HB",
    addressLocality: "Hellevoetsluis",
    addressRegion: "Zuid-Holland",
    addressCountry: "NL",
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.8456, longitude: 4.1345 },
  areaServed: [
    { "@type": "City", name: "Hellevoetsluis" },
    { "@type": "City", name: "Brielle" },
    { "@type": "City", name: "Oostvoorne" },
    { "@type": "City", name: "Spijkenisse" },
  ],
  founder: {
    "@type": "Person",
    name: "Cindy Koppenaal Steeg",
    jobTitle: "Kraamverzorgende",
  },
  hasCredential: "KCKZ gecertificeerd (nr. 210125)",
  identifier: { "@type": "PropertyValue", name: "KvK-nummer", value: "93392230" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
