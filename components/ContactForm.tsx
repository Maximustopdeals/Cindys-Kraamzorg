'use client';

import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mwlpkgrr";

type Status = "idle" | "sending" | "success" | "error";

const bevallingOpties = [
  "Ziekenhuis (medische indicatie)",
  "Ziekenhuis (poliklinisch)",
  "Thuisbevalling",
];

const gevondenOpties = ["Google", "Familie en/of vrienden", "Anders"];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-soft text-center">
        <p className="h-serif mb-2 text-2xl text-terracotta">Bedankt!</p>
        <p className="text-ink/70">
          Je aanvraag is verzonden. Cindy neemt zo snel mogelijk contact met je op.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-espresso/15 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition";
  const labelCls = "mb-1.5 block text-sm font-semibold text-espresso";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="naam" className={labelCls}>
            Je naam *
          </label>
          <input id="naam" name="naam" type="text" required placeholder="Voor- en achternaam" className={inputCls} />
        </div>
        <div>
          <label htmlFor="telefoon" className={labelCls}>
            Telefoonnummer
          </label>
          <input id="telefoon" name="telefoon" type="tel" placeholder="06 - 12 34 56 78" className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>
          E-mailadres *
        </label>
        <input id="email" name="email" type="email" required placeholder="jouw@email.nl" className={inputCls} />
      </div>

      <div>
        <label htmlFor="postcode-woonplaats" className={labelCls}>
          Postcode en woonplaats *
        </label>
        <input
          id="postcode-woonplaats"
          name="postcode_woonplaats"
          type="text"
          required
          placeholder="Vul hier uw postcode en woonplaats in"
          className={inputCls}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bevalling" className={labelCls}>
            Bevalling *
          </label>
          <select id="bevalling" name="bevalling" required defaultValue="" className={inputCls}>
            <option value="" disabled>
              --- Selecteer keuze ---
            </option>
            {bevallingOpties.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="baby-verwacht" className={labelCls}>
            Baby verwacht op: *
          </label>
          <input id="baby-verwacht" name="baby_verwacht_op" type="date" required className={inputCls} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="verloskundige" className={labelCls}>
            Verloskundige (naam):
          </label>
          <input id="verloskundige" name="verloskundige" type="text" placeholder="Naam van je verloskundige" className={inputCls} />
        </div>
        <div>
          <label htmlFor="zorgverzekeraar" className={labelCls}>
            Zorgverzekeraar
          </label>
          <input id="zorgverzekeraar" name="zorgverzekeraar" type="text" placeholder="Naam zorgverzekeraar invullen" className={inputCls} />
        </div>
      </div>

      <fieldset>
        <legend className={labelCls}>Hoe heb je mij gevonden?</legend>
        <div className="space-y-2">
          {gevondenOpties.map((optie) => (
            <label
              key={optie}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-espresso/10 bg-white px-4 py-2.5 transition hover:border-terracotta/50"
            >
              <input
                type="radio"
                name="hoe_gevonden"
                value={optie}
                className="h-4 w-4 accent-terracotta"
              />
              <span className="text-sm text-ink/80">{optie}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="bericht" className={labelCls}>
          Je bericht
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={4}
          placeholder="Vertel kort over je situatie en waar je vragen over hebt…"
          className={inputCls}
        />
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Verzenden…" : "Verstuur aanvraag"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-700">
          Er ging iets mis bij het verzenden. Probeer het opnieuw of bel/app
          Cindy direct.
        </p>
      )}
    </form>
  );
}
