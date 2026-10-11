import type { Metadata } from "next";
import Image from "next/image";
import ElfsightReviews from "@/components/ElfsightReviews";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Reviews | Wat ouders zeggen over Cindy's Kraamzorg",
  description:
    "Lees de ervaringen van ouders uit Hellevoetsluis en omgeving met Cindy's Kraamzorg. Deel ook jouw ervaring en help andere ouders.",
};

const REVIEW_URL =
  "https://www.google.com/maps/search/?api=1&query=Cindy's+Kraamzorg+Hellevoetsluis";

export default function ReviewsPage() {
  return (
    <>
      {/* ============ HERO — high-end ============ */}
      <section className="relative flex min-h-[65vh] items-center overflow-hidden lg:min-h-[70vh]">
        {/* Achtergrondfoto: Cindy met baby + zusje op de commode */}
        <Image
          src="/images/cindy-reviews-hero.webp"
          alt="Cindy van Cindy's Kraamzorg met pasgeboren baby en zusje — reviews"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[75%_30%] lg:object-right"
        />

        {/* Luxe gradient — donker links voor tekstleesbaarheid */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/55 to-espresso/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-sand/80 via-transparent to-transparent" />

        <div className="container-site relative z-10 py-24 lg:py-32">
          <div className="max-w-xl text-center sm:text-left">
            {/* Badge */}
            <p className="eyebrow animate-fade-in mb-6 !text-blush">
              Reviews
            </p>

            {/* H1 */}
            <h1 className="h-serif animate-fade-up text-4xl leading-[1.1] text-white sm:text-5xl">
              Jouw stem telt
            </h1>

            {/* Sierlijn */}
            <div className="my-8 h-px w-24 bg-blush/60 mx-auto sm:mx-0" />

            {/* Paragraaf */}
            <p className="animate-fade-up text-lg leading-relaxed text-white/90 [animation-delay:150ms]">
              Deel je ervaring met Cindy&apos;s Kraamzorg en help andere ouders
              de juiste keuze te maken.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Ervaringen</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Wat ouders zeggen over Cindy&apos;s Kraamzorg
            </h2>
            <p className="mt-4">
              Was jij tevreden over Cindy&apos;s Kraamzorg uit Hellevoetsluis? Laat
              je review achter en help andere ouders de weg te vinden naar
              liefdevolle, professionele kraamzorg. Bedankt voor je steun!
            </p>
            <a
              href={REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Schrijf een Google review
            </a>
          </div>
          <div className="mt-14">
            <ElfsightReviews />
          </div>
          <p className="mt-8 text-center text-xs text-ink/50">
            Je review wordt veilig verwerkt via Google &amp; Elfsight.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Overtuigd?"
        title="Ook jij verdient een rustige, liefdevolle kraamweek"
        description="Sluit je aan bij de meer dan honderd gezinnen die Cindy je voor gingen."
      />
    </>
  );
}
