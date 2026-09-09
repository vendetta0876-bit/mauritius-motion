import { WhatsappCta } from "./WhatsappCta";

const pack5Features = [
  "Séances d'1h, sur-mesure",
  "Domicile ou extérieur",
  "Adapté à tout niveau, débutant à confirmé",
  "Conseils en nutrition",
  "Conseils en préparation mentale",
];

const pack10Features = [
  "Tout le pack 5 inclus",
  "Charge ajustée dans la durée",
  "Progression réellement mesurable",
];

export function Pricing() {
  return (
    <section id="formules" className="section-shell relative overflow-hidden bg-base-alt">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-16 h-64 w-64 rounded-full bg-coral/20 blur-[80px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-8 h-64 w-64 rounded-full bg-lagoon/20 blur-[80px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-sm font-semibold tracking-wide text-lagoon">
          Mes formules
        </h2>
        <p className="mt-3 max-w-md text-sm text-ink-400">
          Deux formules simples, pensées pour un accompagnement qui produit
          de vrais résultats, pas une remise en forme ponctuelle.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* Pack 5 */}
          <div className="glass-card rounded-card p-7">
            <h3 className="text-base font-semibold text-ink-50">
              Pack 5 séances
            </h3>
            <p className="mt-1 text-sm text-ink-400">2 500 Rs / séance</p>
            <p className="mt-5 text-3xl font-display">
              12 500 <span className="text-base font-body text-ink-400">Rs</span>
            </p>

            <ul className="mt-6 space-y-3 text-sm text-ink-200">
              {pack5Features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-coral">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <WhatsappCta
              label="Réserver ce pack"
              message="Bonjour, je suis intéressé(e) par le pack de 5 séances."
              variant="outline"
              className="mt-7 w-full"
            />
          </div>

          {/* Pack 10 */}
          <div className="glass-card-highlight relative rounded-card p-7">
            <span className="absolute -top-3 left-7 rounded-full bg-lagoon px-3 py-1 text-[10px] font-bold tracking-wide text-[#00201d]">
              LE PLUS COMPLET
            </span>

            <h3 className="mt-2 text-base font-semibold text-ink-50">
              Pack 10 séances
            </h3>
            <p className="mt-1 text-sm text-ink-400">
              2 250 Rs / séance <span className="text-lagoon">(-10%)</span>
            </p>
            <p className="mt-5 text-3xl font-display">
              22 500 <span className="text-base font-body text-ink-400">Rs</span>
            </p>
            <p className="mt-1 text-xs text-lagoon">
              Économisez 2 500 Rs
            </p>

            <ul className="mt-6 space-y-3 text-sm text-ink-200">
              {pack10Features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-lagoon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <WhatsappCta
              label="Réserver ce pack"
              message="Bonjour, je suis intéressé(e) par le pack de 10 séances."
              variant="solid"
              className="mt-7 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
