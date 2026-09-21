import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { AANMELD_URL } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Cindy's Kraamzorg | Persoonlijke kraamzorg in Hellevoetsluis & Zuid-Holland",
  description:
    "Kraamzorg met rust, liefde en 22 jaar ervaring. Erkend door KCKZ. Actief in Hellevoetsluis, Brielle, Oostvoorne en Spijkenisse. Vraag je kraamzorg eenvoudig online aan.",
};

const regios = [
  {
    name: "Hellevoetsluis",
    href: "/kraamzorg-hellevoetsluis",
    text: "Jouw vertrouwde kraamverzorgende in de eigen plaats, snel bij je aan huis.",
  },
  {
    name: "Brielle",
    href: "/kraamzorg-brielle",
    text: "Persoonlijke kraamzorg in de vestingstad, afgestemd op jouw gezin.",
  },
  {
    name: "Oostvoorne",
    href: "/kraamzorg-oostvoorne",
    text: "Liefdevolle begeleiding in de eerste dagen, gewoon bij jou thuis.",
  },
  {
    name: "Spijkenisse",
    href: "/kraamzorg-spijkenisse",
    text: "Professionele zorg en praktische hulp op de groene eilanden.",
  },
];

const diensten = [
  {
    title: "Kraamzorg op maat",
    text: "Een persoonlijk zorgplan, volledig afgestemd op jouw wensen, gezin en situatie.",
    cta: { href: "/kraamzorg", label: "Lees meer" },
  },
  {
    title: "Deskundig advies",
    text: "Vragen over zwangerschap, bevalling of borstvoeding? Je krijgt altijd een eerlijk, professioneel antwoord.",
    cta: { href: "/contact", label: "Contact opnemen" },
  },
  {
    title: "Maak kennis met Cindy",
    text: "Erkend door KCKZ, ruim 22 jaar ervaring en een hart voor gezinnen. Leer Cindy kennen.",
    cta: { href: "/over-mij", label: "Over mij" },
  },
];

const stats = [
  { value: "22+", label: "Jaar ervaring" },
  { value: "100+", label: "Gezinnen verzorgd" },
  { value: "24/7", label: "Voor jou beschikbaar" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-home.jpg"
          alt="Pasgeboren baby met roze bloem — Cindy's Kraamzorg Hellevoetsluis"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/30 to-sand" />
        <div className="container-site relative z-10 pb-24 pt-36 text-center">
          <p className="eyebrow animate-fade-in mb-4 !text-blush">
            Persoonlijk &amp; professioneel
          </p>
          <h1 className="h-serif animate-fade-up mx-auto max-w-3xl text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Kraamzorg met rust, liefde &amp; ervaring in Hellevoetsluis
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-white/90 [animation-delay:150ms]">
            Bij Cindy's Kraamzorg draait alles om jouw vertrouwen en comfort.
            Met ruim 22 jaar ervaring begeleid ik jullie eerste dagen als gezin,
            warm, deskundig en volledig afgestemd op jullie wensen.
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4 [animation-delay:300ms]">
            <a href={AANMELD_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Kraamzorg aanvragen
            </a>
            <Link href="/over-mij" className="btn-secondary">
              Maak kennis met Cindy
            </Link>
          </div>
          <p className="animate-fade-in mt-8 text-sm font-medium uppercase tracking-widest text-white/70 [animation-delay:450ms]">
            Erkend door KCKZ · Hellevoetsluis &amp; omgeving
          </p>
        </div>
      </section>

      {/* ============ FELICITATIE ============ */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="eyebrow mb-3">Een bijzondere tijd</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Proficiat met je zwangerschap!
            </h2>
            <div className="divider-leaf mt-6 mb-6">✦</div>
            <p className="mb-4 leading-relaxed">
              Een warme felicitatie met de prachtige spruit die groeit in jouw buik.
              Het is een periode vol vreugde, maar ook met vragen en spanning. Bij
              Cindy's Kraamzorg in <strong>Hellevoetsluis &amp; omliggende gebieden</strong> vind ik
              het belangrijk dat je je gerust voelt.
            </p>
            <p className="mb-6 leading-relaxed">
              Het is fijn om te weten dat de zorg rondom je bevalling goed is
              geregeld. Ik sta klaar om je hierbij met <strong>vakmanschap en warmte</strong> te
              begeleiden van de eerste dag tot een zorgeloze overdracht.
            </p>
            <a href={AANMELD_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Meld je aan voor kraamzorg
            </a>
          </div>
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -inset-3 rounded-[2rem] bg-blush/40" aria-hidden="true" />
            <Image
              src="/images/cindy-baby.jpg"
              alt="Kraamverzorgende Cindy met een pasgeboren baby op de arm"
              width={600}
              height={800}
              className="relative rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* ============ REGIO ============ */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Jouw regio</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Persoonlijke kraamzorg in jouw buurt
            </h2>
            <p className="mt-4">
              Woon je in Hellevoetsluis, Brielle, Oostvoorne of Spijkenisse? Als
              ervaren kraamverzorgende bied ik professionele begeleiding precies
              waar jij het nodig hebt: bij jou thuis.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {regios.map((r) => (
              <Link key={r.name} href={r.href} className="card-soft group block">
                <h3 className="h-serif mb-2 text-xl group-hover:text-terracotta">{r.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-ink/70">{r.text}</p>
                <span className="text-sm font-semibold text-terracotta">
                  Bekijk kraamzorg in {r.name} →
                </span>
              </Link>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink/60">
            Van borstvoedingsadvies tot praktische babyverzorging waar je ook
            woont in de regio, bel gerust voor een kennismaking.
          </p>
        </div>
      </section>

      {/* ============ DIENSTEN ============ */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Hoe ik je help</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Alles voor de beste start van jullie gezin
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {diensten.map((d) => (
              <article key={d.title} className="card-soft flex flex-col">
                <h3 className="h-serif mb-3 text-2xl">{d.title}</h3>
                <p className="mb-6 flex-1 text-ink/70">{d.text}</p>
                <Link href={d.cta.href} className="font-semibold text-terracotta hover:text-terracottaDark">
                  {d.cta.label} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PERSOONLIJKE AANDACHT ============ */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Image
              src="/images/cindy-baby-giraf.jpg"
              alt="Cindy samen met een pasgeboren baby in een warme huiselijke omgeving"
              width={900}
              height={1200}
              className="rounded-[2rem] object-cover shadow-soft"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-3">Jouw comfort voorop</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Persoonlijke aandacht staat centraal
            </h2>
            <div className="divider-leaf mt-6 mb-6">✦</div>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-terracotta">✦</span>
                <p>
                  Ik neem de tijd om jullie te leren kennen. Samen stellen we een
                  <strong> op-maat-gemaakt kraamzorgplan</strong> op, volledig afgestemd op jullie situatie.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-terracotta">✦</span>
                <p>
                  Naast zorg voor moeder en baby bied ik <strong>praktische hulp</strong> in het
                  huishouden: van maaltijden bereiden tot boodschappen doen.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-terracotta">✦</span>
                <p>
                  Kortdurend of langdurig: ik sta garant voor <strong>hoogwaardige ondersteuning</strong> in
                  Hellevoetsluis en omgeving.
                </p>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-espresso shadow-card">
                Flexibele planning
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-espresso shadow-card">
                Persoonlijk zorgplan
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-espresso shadow-card">
                Zorg bij jou thuis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="py-16">
        <div className="container-site grid gap-8 text-center sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="h-serif text-5xl text-terracotta">{s.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-ink/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ KCKZ ============ */}
      <section className="bg-cream py-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Erkend &amp; gecertificeerd</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Kwaliteit die je kunt vertrouwen
            </h2>
            <div className="divider-leaf mt-6 mb-6">✦</div>
            <p className="mb-4 leading-relaxed">
              Cindy's Kraamzorg is erkend door <strong>KCKZ</strong> en voldoet aan de strenge
              kwaliteitseisen van <strong>KIWA</strong>-certificering. Je kiest dus niet alleen voor
              warmte, maar ook voor zorg die professioneel is geborgd.
            </p>
            <p className="leading-relaxed">
              Daarnaast werkt Cindy samen met verloskundigen en collega's in de
              regio, zodat je altijd bent verweven in een sterk zorgnetwerk.
            </p>
          </div>
          <Image
            src="/images/cindy-kckz.jpg"
            alt="Cindy Koppenaal Steeg in het KCKZ-Special magazine"
            width={1200}
            height={1600}
            className="mx-auto w-full max-w-md rounded-[2rem] object-cover shadow-soft"
          />
        </div>
      </section>

      <CtaBand
        eyebrow="Besluit nu"
        title="Geef jezelf de rust die je verdient in de eerste week"
        description="De agenda vult zich snel — meld je tijdig aan voor een zorgeloze kraamweek."
      />
    </>
  );
}
