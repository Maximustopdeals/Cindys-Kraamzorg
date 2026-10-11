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
      {/* ============ HERO — high-end & rustig ============ */}
      <section className="relative overflow-hidden bg-cream pt-32 pb-20 sm:pt-40 sm:pb-24">
        {/* Subtiel decoratief element */}
        <div
          className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blush/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-site relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Tekst links */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              {/* Badge */}
              <p className="eyebrow mb-6">Over mij</p>

              {/* H1 */}
              <h1 className="h-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
                Cindy Koppenaal Steeg
              </h1>

              {/* Sierlijn */}
              <div className="my-8 flex items-center justify-center gap-4 lg:justify-start">
                <span className="h-px w-16 bg-terracotta/40" />
                <span className="text-terracotta">✦</span>
                <span className="h-px w-16 bg-terracotta/40" />
              </div>

              {/* Subtitel */}
              <p className="text-lg leading-relaxed text-ink/80 sm:text-xl">
                Kraamverzorgende uit Hellevoetsluis. Al 22+ jaar met hart en
                ziel verbonden aan het mooiste vak ter wereld.
              </p>
            </div>

            {/* Portret rechts — rond */}
            <div className="relative order-1 mx-auto lg:order-2 lg:mx-0">
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                {/* Zachte gloed achter portret */}
                <div
                  className="absolute -inset-6 rounded-full bg-blush/50 blur-2xl"
                  aria-hidden="true"
                />

                {/* Rond portret */}
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-soft">
                  <Image
                    src="/images/cindy-over-mij.webp"
                    alt="Cindy Koppenaal Steeg van Cindy's Kraamzorg — kraamverzorgende in Hellevoetsluis"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 320px, 384px"
                    className="object-cover object-[20%_center]"
                  />
                </div>

                {/* Klein accent-element */}
                <div className="absolute -bottom-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full bg-terracotta text-white shadow-card">
                  <div className="text-center leading-none">
                    <span className="h-serif block text-2xl">22+</span>
                    <span className="mt-1 block text-[10px] font-semibold uppercase tracking-widest">
                      Jaar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VERHAAL ============ */}
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
                <strong>Sinds 2003</strong> werk ik als kraamverzorgster. Al ruim 22 jaar mag ik gezinnen begeleiden tijdens een van de meest bijzondere periodes in hun leven. Het is een voorrecht om ouders en baby&apos;s een fijne start te geven, en dat doe ik nog iedere dag met evenveel liefde en toewijding. Door regelmatige
                bijscholing en diverse certificaten waaronder mijn
                <strong> EHBO-diploma</strong> blijf ik mijn kennis en vaardigheden
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
                Cindy&apos;s Kraamzorg kies je voor deskundigheid en een overvloed
                aan liefde voor jouw prachtige gezin.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-blush/40" aria-hidden="true" />
            <Image
              src="/images/cindy-over-mij-verhaal.webp"
              alt="Cindy Koppenaal Steeg met pasgeboren baby en het logo van Cindy's Kraamzorg"
              width={900}
              height={1200}
              className="relative rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
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

      {/* ============ PASSIE ============ */}
      <section className="py-20 sm:py-24">
        <div className="container-site max-w-3xl text-center">
          <p className="eyebrow mb-3">Persoonlijk</p>
          <h2 className="h-serif text-3xl sm:text-4xl">
            Mijn passie naast het werk
          </h2>
          <div className="divider-leaf mt-6 mb-6">✦</div>
          <p className="leading-relaxed">
            Mijn hobby&apos;s zijn wandelen en fietsen, maar mijn grootste vreugde
            komt voort uit het bieden van een rustgevende en gezellige
            kraamweek voor jou en je gezin. Bij mij staat jouw welzijn en dat
            van je kindje voorop maar ook oudere kinderen en je partner
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
