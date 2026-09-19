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
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-16 pt-40">
        <Image
          src="/images/baby-buiten.jpg"
          alt="Glimlachende baby buiten in het zonnetje"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-sand" />
        <div className="container-site relative">
          <p className="eyebrow mb-3 !text-blush">Reviews</p>
          <h1 className="h-serif max-w-3xl text-4xl text-white sm:text-5xl">
            Jouw stem telt
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Deel je ervaring met Cindy's Kraamzorg en help andere ouders de juiste
            keuze te maken.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Ervaringen</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Wat ouders zeggen over Cindy's Kraamzorg
            </h2>
            <p className="mt-4">
              Was jij tevreden over Cindy's Kraamzorg uit Hellevoetsluis? Laat
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
