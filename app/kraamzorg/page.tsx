import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { AANMELD_URL } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kraamzorg aan huis in Hellevoetsluis | Wat kan je verwachten?",
  description:
    "Alles over kraamzorg bij Cindy's Kraamzorg: wat doet een kraamverzorgende, welke uren heb je recht op en wat neemt Cindy uit handen? Lees het hier en vraag eenvoudig aan.",
};

const onderdelen = [
  {
    title: "Zorg voor moeder & baby",
    text: "Ik houd het herstel van de kraamvrouw en de gezondheid van je baby nauwlettend in de gaten: van controles tot het signaleren van geelzucht.",
  },
  {
    title: "Borstvoeding & voeding",
    text: "Persoonlijk borstvoedingsadvies en praktische begeleiding bij het voeden van je baby, afgestemd op wat voor jullie werkt.",
  },
  {
    title: "Babyverzorging",
    text: "Differentiëren, verschonen, baden en knuffelen, ik laat je stap voor stap zelfverzekerd worden in de verzorging van je kindje.",
  },
  {
    title: "Voorlichting & advies",
    text: "Gezinsvoorlichting over veilig slapen, signalen van je baby en alles wat je als nieuwe ouder wilt weten.",
  },
  {
    title: "Praktische hulp in huis",
    text: "Maaltijden bereiden, boodschappen doen en licht huishoudelijk werk zodat jij kunt rusten en genieten.",
  },
  {
    title: "Ook voor partner & gezin",
    text: "Oudere kinderen en je partner worden met liefde betrokken en ondersteund in deze nieuwe fase.",
  },
];

const stappen = [
  {
    nr: "1",
    title: "Aanmelden",
    text: "Vraag via het aanmeldformulier of per telefoon je kraamzorg aan, het liefst vóór week 16 van je zwangerschap.",
  },
  {
    nr: "2",
    title: "Kennismaking & zorgplan",
    text: "We bespreken jullie wensen en stellen samen een persoonlijk kraamzorgplan op.",
  },
  {
    nr: "3",
    title: "De kraamweek",
    text: "Ik ben er zodra je baby er is: met deskundige zorg, praktische hulp en een luisterend oor.",
  },
];

const faqs = [
  {
    q: "Hoeveel uren kraamzorg krijg ik?",
    a: "Dat hangt af van je situatie. Bij een eerste kind gaat het vaak om meer uren dan bij een tweede of derde kind. Samen met je zorgverzekeraar wordt bepaald welke indicatie passend is. Meld je tijdig aan, dan wordt dit allemaal duidelijk uitgelegd.",
  },
  {
    q: "Wanneer moet ik mij aanmelden?",
    a: "Ideaal is vóór de 16e week van je zwangerschap. Dan is de kans het grootst dat jouw voorkeursperiode en alle wensen goed ingepland kunnen worden.",
  },
  {
    q: "Wat doet een kraamverzorgende precies?",
    a: "Ik controleer de gezondheid van moeder en baby, help bij borstvoeding en babyverzorging, geef voorlichting en neem huishoudelijke taken uit handen. Zo kun jij herstellen en genieten.",
  },
  {
    q: "Is kraamzorg verzekerd?",
    a: "Ja, kraamzorg valt onder de basisverzekering. Afhankelijk van je polis betaal je mogelijk een eigen bijdrage. Via het aanmeldformulier wordt dit voor je geregeld.",
  },
];

export default function KraamzorgPage() {
  return (
    <>
      {/* ============ HERO — high-end ============ */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden lg:min-h-[75vh]">
        {/* Achtergrondfoto: baby op zachte deken */}
        <Image
          src="/images/baby-deken.png"
          alt="Pasgeboren baby op een zachte deken — kraamzorg aan huis in Hellevoetsluis"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />

        {/* Luxe gradient: donker links voor tekstleesbaarheid, transparant rechts */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/55 to-espresso/15" />
        {/* Subtiele warme gloed onderaan */}
        <div className="absolute inset-0 bg-gradient-to-t from-sand/80 via-transparent to-transparent" />

        {/* Content container: links uitgelijnd op desktop */}
        <div className="container-site relative z-10 py-24 lg:py-32">
          <div className="max-w-xl text-center sm:text-left">
            {/* Badge */}
            <p className="eyebrow animate-fade-in mb-6 !text-blush">
              Kraamzorg
            </p>

            {/* H1 */}
            <h1 className="h-serif animate-fade-up text-4xl leading-[1.1] text-white sm:text-5xl">
              Liefdevolle kraamzorg, volledig afgestemd op jullie gezin
            </h1>

            {/* Sierlijn */}
            <div className="my-8 h-px w-24 bg-blush/60 mx-auto sm:mx-0" />

            {/* Paragraaf */}
            <p className="animate-fade-up text-lg leading-relaxed text-white/90 [animation-delay:150ms]">
              De eerste week met je baby is magisch en intens. Ik neem je zorgen
              uit handen, zodat jij kunt genieten van deze kostbare dagen.
            </p>
          </div>
        </div>
      </section>

      {/* ============ ONDERDELEN ============ */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Wat kun je verwachten</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Zorg die verder gaat dan alleen de baby
            </h2>
            <p className="mt-4">
              Een goede kraamweek draait om het gezin als geheel. Dit neem ik
              allemaal voor je uit handen:
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {onderdelen.map((o) => (
              <article key={o.title} className="card-soft">
                <h3 className="h-serif mb-3 text-xl">{o.title}</h3>
                <p className="text-sm leading-relaxed text-ink/70">{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ IN 3 STAPPEN ============ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Zo simpel is het</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              In drie stappen naar een zorgeloze kraamweek
            </h2>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {stappen.map((s) => (
              <li key={s.nr} className="card-soft relative">
                <span className="h-serif absolute -top-5 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta text-2xl text-white shadow-card">
                  {s.nr}
                </span>
                <h3 className="h-serif mb-2 mt-4 text-xl">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink/70">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 text-center">
            <a href={AANMELD_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Start met stap 1: meld je aan
            </a>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-20 sm:py-24">
        <div className="container-site max-w-3xl">
          <div className="text-center">
            <p className="eyebrow mb-3">Veelgestelde vragen</p>
            <h2 className="h-serif text-3xl sm:text-4xl">Goed om te weten</h2>
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
        eyebrow="Gefeliciteerd met je zwangerschap!"
        title="Meld je zo vroeg mogelijk aan voor kraamzorg"
        description="Zodat je verzekerd bent van een plekje in jouw kraamtijd."
      />
    </>
  );
}
