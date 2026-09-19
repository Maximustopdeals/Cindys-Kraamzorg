import { AANMELD_URL } from "@/components/Navbar";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function CtaBand({
  eyebrow = "Zorgeloos beginnen",
  title,
  description,
}: CtaBandProps) {
  return (
    <section className="bg-sand px-5 pb-20 pt-4 sm:px-8">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2.5rem] bg-espresso px-6 py-16 shadow-soft sm:px-12 sm:py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #C08A5B 0%, transparent 40%), radial-gradient(circle at 80% 70%, #E8C4B8 0%, transparent 40%)",
          }}
        />
        <div className="relative text-center">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="h-serif mx-auto max-w-2xl text-3xl text-sand sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-sand/80">{description}</p>
          )}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={AANMELD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Kraamzorg aanvragen
            </a>
            <a
              href="tel:+31610890534"
              className="btn-secondary !border-sand/30 !bg-transparent text-sand hover:!bg-sand/10"
            >
              Bel 06 - 10 89 05 34
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
