const faqs = [
  {
    q: "Wat is kraamzorg en waarom is het belangrijk?",
    a: "Kraamzorg is professionele ondersteuning aan huis tijdens de eerste dagen na de bevalling. Een kraamverzorgende helpt bij de verzorging van moeder en baby, geeft borstvoedingsadvies, biedt praktische hulp in het huishouden en begeleidt het gezin in de nieuwe situatie. Het is belangrijk omdat het zorgt voor een rustige start, professionele medische controle en emotionele steun in een kwetsbare periode.",
  },
  {
    q: "Wat kan ik verwachten tijdens kraamzorg?",
    a: "Tijdens de kraamzorg kun je dagelijkse medische controles van moeder en baby verwachten, begeleiding bij borstvoeding of flesvoeding, hulp bij de verzorging van de baby, ondersteuning bij huishoudelijke taken zoals wassen en schoonmaken, en emotionele begeleiding. Samen stellen we een zorgplan op dat past bij jouw wensen en situatie.",
  },
  {
    q: "Hoe kan ik contact opnemen met Cindy's Kraamzorg?",
    a: "Je kunt contact opnemen via telefoon op 06-10890534 (bereikbaar op werkdagen van 8:00-20:00), via e-mail op info@cindyskraamzorg.nl, of via het contactformulier op de website. Ik neem dan binnen 24 uur contact met je op voor een vrijblijvend kennismakingsgesprek.",
  },
  {
    q: "Hoe vraag ik kraamzorg aan?",
    a: "Het aanvragen van kraamzorg is eenvoudig. Neem contact met mij op voor een vrijblijvend kennismakingsgesprek. Daarna meld je je aan via mijn online aanmeldformulier of via de website van je zorgverzekeraar. Bij voorkeur doe je dit vóór de 16e week van je zwangerschap, zodat ik de beschikbaarheid goed kan plannen.",
  },
  {
    q: "Kan ik kraamzorg aanpassen aan mijn specifieke behoeften?",
    a: "Zeker! Bij Cindy's Kraamzorg staat jouw gezin centraal. Samen stellen we een persoonlijk zorgplan op dat volledig is afgestemd op jullie wensen, behoeften en situatie. Of je nu extra ondersteuning nodig hebt bij borstvoeding, hulp bij oudere kinderen, of specifieke tijden afspreekt: alles is bespreekbaar.",
  },
  {
    q: "Wat zijn de kosten van kraamzorg en wordt het vergoed?",
    a: "Kraamzorg wordt in Nederland volledig vergoed vanuit het basispakket van alle zorgverzekeraars. Je betaalt geen eigen risico voor kraamzorg. Ik help je graag met de administratieve afhandeling en zorg dat alles soepel verloopt. Neem gerust contact op voor meer informatie over de vergoeding.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-site max-w-3xl">
        <div className="text-center">
          <p className="eyebrow mb-3">Vragen &amp; Antwoorden</p>
          <h2 className="h-serif text-3xl sm:text-4xl">Veelgestelde vragen</h2>
          <p className="mt-4">
            Alles wat je wilt weten over kraamzorg in Hellevoetsluis en omgeving.
          </p>
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
  );
}
