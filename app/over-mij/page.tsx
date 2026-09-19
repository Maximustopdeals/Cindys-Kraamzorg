import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Over mij | Cindy Koppenaal Steeg, kraamverzorgende in Hellevoetsluis",
  description:
    "Leer Cindy kennen: al sinds 2003 kraamverzorgende, moeder van vier kinderen, trotse oma en werkbegeleider in de kraamzorg. Erkend door KCKZ.",
};

const stats = [
  { value: "22+", label: "Jaar ervaring" },
  { value: "100+", label: "Gezinnen verzorgd" },
  { value: "24/7", label: "Voor jou beschikbaar" },
];

const punten = [
  "Erkend door KCKZ (nr. 210125)",
  "EHBO-diploma en jaarlijkse bijscholing",
  "Ervaring als werkbegeleider in de kraamzorg",
  "Specialisme in borstvoeding & gezinsvoorlichting",
];

export default function OverMijPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-16 pt-40">
        <Image
          src="/images/cindy-kinderen.jpg"
          alt="Kraamverzorgende Cindy met pasgeboren baby en peuter"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-sand" />
        <div className="container-site relative">
          <p className="eyebrow mb-3 !text-blush">Over mij</p>
          <h1 className="h-serif max-w-3xl text-4xl text-white sm:text-5xl">
            Cindy Koppenaal Steeg
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Kraamverzorgende uit Hellevoetsluis — al ruim 22 jaar met hart en
            ziel verbonden aan het mooiste vak ter wereld.
          </p>
        </div>
      </section>

      {/* Verhaal */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Mijn verhaal</p>
            <h2 className="h-serif text-3xl sm:text-4xl">
              Meer dan een vak: het is mijn passie
            </h2>
            <div className="divider-leaf mt-6 mb-6">✦</div>
            <div className="space-y-4 leading-relaxed">
              <p>
                Ik ben <strong>Cindy Koppenaal Steeg</strong>, getrouwd en moeder van vier
                prachtige kinderen: Romy, Emily, Kelsey en mijn geliefde zoon
                Bradley, die als een mooie ster aan de hemel schijnt en op
                19-jarige leeftijd is overleden. Daarnaast ben ik een trotse oma
                van vier kleinzonen en een kleindochter. Het is een voorrecht
                geweest om kraamzorg te mogen bieden aan al mijn kleinkinderen.
              </p>
              <p>
                <strong>Sinds 2003</strong> werk ik als kraamverzorgster. Met liefde heb ik
                de afgelopen 22 jaar talloze gezinnen mogen verzorgen en ik kijk
                ernaar uit om dit nog vele jaren te blijven doen. Door regelmatige
                bijscholing en diverse certificaten — waaronder mijn
                <strong> EHBO-diploma</strong> — blijf ik mijn kennis en vaardigheden
                voortdurend uitbreiden.
              </p>
              <p>
                Ook heb ik als <strong>werkbegeleider in de kraamzorg</strong> vele
                leerlingen mogen begeleiden op weg naar dit prachtige beroep. Met
                ruime ervaring in borstvoeding, gezinsvoorlichting en alle
                aspecten van babyverzorging houd ik nauwlettend het welzijn van
                je baby in de gaten, inclusief het controleren op geelzucht.
              </p>
              <p>
                Elk gezin is uniek en ik pas me graag aan aan jullie wensen.
                <strong> Flexibiliteit</strong> staat bij mij hoog in het vaandel. Bij
                Cindy's Kraamzorg kies je voor deskundigheid en een overvloed
                aan liefde voor jouw prachtige gezin.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-blush/40" aria-hidden="true" />
            <Image
              src="/images/cindy-gezin.jpg"
              alt="Cindy met een pasgeboren baby en peuter op de bank"
              width={900}
              height={1200}
              className="relative rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream py-16">
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

      {/* Passie */}
      <section className="py-20 sm:py-24">
        <div className="container-site max-w-3xl text-center">
          <p className="eyebrow mb-3">Persoonlijk</p>
          <h2 className="h-serif text-3xl sm:text-4xl">
            Mijn passie naast het werk
          </h2>
          <div className="divider-leaf mt-6 mb-6">✦</div>
          <p className="leading-relaxed">
            Mijn hobby's zijn wandelen en fietsen, maar mijn grootste vreugde
            komt voort uit het bieden van een rustgevende en gezellige
            kraamweek voor jou en je gezin. Bij mij staat jouw welzijn en dat
            van je kindje voorop — maar ook oudere kinderen en je partner
            worden met liefde verzorgd en ondersteund. Ik neem diverse
            huishoudelijke taken op me, zodat jij je kunt concentreren op het
            genieten van deze bijzondere tijd.
          </p>
          <ul className="mx-auto mt-10 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
            {punten.map((item) => (
              <li key={item} className="card-soft flex items-center gap-3 !p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-sm text-terracotta">✦</span>
                <span className="text-sm text-ink/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Persoonlijk contact"
        title="Lijkt Cindy de juiste match voor jullie gezin?"
        description="Plan een vrijblijvende kennismaking en ervaar zelf de rust die zij brengt."
      />
    </>
  );
}
