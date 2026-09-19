# Cindy's Kraamzorg — Next.js website

Premium Next.js-website voor Cindy's Kraamzorg (Hellevoetsluis), gebouwd voor
snelheid, SEO en leadgeneratie.

## Stack

- **Next.js 16.2.2** (App Router, TypeScript)
- **Tailwind CSS 3.4** — premium kleurenpalet (zand / espresso / terracotta)
- **Google Tag Manager** (GTM-WB3H7L6W) — GA4 draait via de GTM-container
- **Google Search Console** verificatie in metadata
- **Formspree** contactformulier (f/mwlpkgrr)
- **Elfsight** Google Reviews widget
- Geoptimaliseerde afbeeldingen (avif/webp via `next/image`)

## Lokale ontwikkeling

```bash
npm install
npm run dev
```

Build & start:

```bash
npm run build
npm start
```

## Pagina's

| Route | Doel |
|-------|------|
| `/` | Homepage met hero, regio's, diensten, KCKZ-vertrouwen |
| `/kraamzorg` | Uitleg diensten, 3-stappenplan, FAQ |
| `/over-mij` | Persoonlijk verhaal + credentials van Cindy |
| `/reviews` | Elfsight Google Reviews + review-CTA |
| `/contact` | Contactgegevens, kaart, Formspree-formulier |

De hoofd-conversieknop "Meld je aan" verwijst naar:
`https://cindyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame`

## Deployment op Vercel

1. Push deze map naar een Git-repository (GitHub/GitLab/Bitbucket)
2. Importeer het project in [Vercel](https://vercel.com/new)
3. Voeg het domein `cindyskraamzorg.nl` toe in **Settings → Domains**
4. Vercel toont de vereiste DNS-records

## DNS-instellingen bij Cloud86

**E-mail blijft bij Cloud86 — MX-, SPF- en DKIM-records NIET aanpassen!**

Wijzig alleen:

| Record | Type | Waarde |
|--------|------|--------|
| `@` (root) | A | `76.76.21.21` |
| `www` | CNAME | `cname.vercel-dns.com` |

⚠️ **Laat MX-, TXT- (SPF) en andere mail-records ongemoeid.** Alleen het
A-record en www-CNAME aanpassen; de e-mail bij Cloud86 blijft hierdoor
gewoon werken.

In Vercel → **Settings → Domains**: markeer `cindyskraamzorg.nl` als primary
domain, zodat `www.cindyskraamzorg.nl` automatisch doorverwijst (301) naar
de non-www versie.

## Google Search Console

1. Ga naar [search.google.com/search-console](https://search.google.com/search-console)
2. Voeg property `cindyskraamzorg.nl` toe (Domain-property, DNS-verificatie
   is al voorbereid via de meta tag `bZMH29-…`)
3. Dien na livegang de sitemap in: `https://cindyskraamzorg.nl/sitemap.xml`

## Tracking

- **GTM** wordt via `app/layout.tsx` geladen (`GTM-WB3H7L6W`)
- GA4 (`G-5K48NNLSPD`) wordt binnen GTM geconfigureerd — voeg daar een
  GA4-configuratietag toe die op alle pagina's vuurt. Zo voorkom je
  dubbele pageviews.
- WhatsApp-, telefoon- en mailto-klikken zijn klaar voor event-tracking
  via GTM (automatische link-klikdetectie op deze elementen).

## SEO-maatregelen

- Unieke title + meta description per pagina
- JSON-LD `MedicalBusiness` met adres, geo, areaServed, credentials
- `sitemap.xml` en `robots.txt` in `/public`
- Canonical URL's, Open Graph + Twitter cards
- Geoptimaliseerde afbeeldingen (hero: ±350 KB i.p.v. meerdere MB)
- Semantische HTML, alt-teksten, `lang="nl"`

---

© Cindy's Kraamzorg — ontwikkeld voor [Webboostpartner.nl](https://webboostpartner.nl)
