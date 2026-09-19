import Link from "next/link";
import Image from "next/image";

const partners = [
  { name: "KCKZ", href: "https://www.kckz.nl/" },
  { name: "Kraammarkt", href: "https://kraammarkt.nl/" },
  { name: "KIWA", href: "https://www.kiwa.com/nl/nl/diensten/certificering/" },
];

const samenwerkingen = [
  { name: "Verloskundigen aan de Schie", href: "https://verloskundigcentrumrotterdam.nl/" },
  { name: "Marley's Kraamzorg", href: "https://www.marleyskraamzorg.nl/" },
];

const nav = [
  { href: "/", label: "Home" },
  { href: "/kraamzorg", label: "Kraamzorg" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-sand/90">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo.png"
            alt="Cindy's Kraamzorg"
            width={160}
            height={106}
            className="mb-4 h-20 w-auto rounded-xl bg-white p-2"
          />
          <p className="text-sm leading-relaxed">
            Persoonlijke, liefdevolle kraamzorg aan huis in Hellevoetsluis en
            omgeving. Al ruim 22 jaar ervaring.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg text-blush">Contact</h3>
          <address className="space-y-2 text-sm not-italic">
            <p>Struytse Hoeck 106<br />3224 HB Hellevoetsluis</p>
            <p>
              <a href="tel:+31610890534" className="hover:text-blush">
                06 - 10 89 05 34
              </a>
            </p>
            <p>
              <a href="mailto:info@cindyskraamzorg.nl" className="hover:text-blush">
                info@cindyskraamzorg.nl
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg text-blush">Erkend door</h3>
          <ul className="mb-6 space-y-2 text-sm">
            {partners.map((p) => (
              <li key={p.name}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="hover:text-blush">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
          <h3 className="mb-4 font-serif text-lg text-blush">Samenwerking met</h3>
          <ul className="space-y-2 text-sm">
            {samenwerkingen.map((p) => (
              <li key={p.name}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="hover:text-blush">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg text-blush">Snel naar</h3>
          <ul className="mb-5 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-blush">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mb-3 font-serif text-lg text-blush">Werkgebieden</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kraamzorg-hellevoetsluis" className="hover:text-blush">Hellevoetsluis</Link></li>
            <li><Link href="/kraamzorg-brielle" className="hover:text-blush">Brielle</Link></li>
            <li><Link href="/kraamzorg-oostvoorne" className="hover:text-blush">Oostvoorne</Link></li>
            <li><Link href="/kraamzorg-spijkenisse" className="hover:text-blush">Spijkenisse</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-sand/60 sm:flex-row">
          <p>
            © <Year /> Cindy's Kraamzorg – Alle rechten voorbehouden
          </p>
          <p>
            KvK 93392230 · KCKZ-nr. 210125
          </p>
        </div>
      </div>
    </footer>
  );
}

function Year() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
