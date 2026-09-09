import { WhatsappCta } from "./WhatsappCta";

const zones = [
  "Grand Baie",
  "Trou aux Biches",
  "Pereybère",
  "Mont Choisy",
  "Cap Malheureux",
  "Pointe aux Canonniers",
];

export function Contact() {
  return (
    <section className="section-shell bg-base">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-sm font-semibold tracking-wide text-lagoon">
          Réservez votre séance
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="max-w-md text-base leading-relaxed text-ink-200">
              Séances disponibles dans le Nord de l&rsquo;île&nbsp;:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {zones.map((zone) => (
                <li
                  key={zone}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink-200"
                >
                  {zone}
                </li>
              ))}
            </ul>

            <WhatsappCta
              label="Contacter sur WhatsApp"
              message="Bonjour, je souhaite réserver une séance de coaching sportif."
              variant="solid"
              className="mt-8"
            />
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-white/10">
            <iframe
              title="Carte — zone couverte, Nord de l'île Maurice"
              src="https://www.openstreetmap.org/export/embed.html?bbox=57.5300%2C-20.0850%2C57.6550%2C-19.9750&layer=mapnik&marker=-20.0064%2C57.5809"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-coral/70"
              style={{
                left: "41%",
                top: "29%",
                boxShadow: "0 0 0 2000px rgba(10,26,34,0.25)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
