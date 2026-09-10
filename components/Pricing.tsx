import { Reveal } from "./Reveal";
import { WhatsappCta } from "./WhatsappCta";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
      <path d="M6 10.2 8.7 13 14 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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
      <div aria-hidden className="pointer-events-none absolute -left-10 -top-16 h-64 w-64 rounded-full bg-coral/20 blur-[80px]" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-8 h-64 w-64 rounded-full bg-lagoon/20 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-sm font-semibold tracking-wide text-lagoon">Mes formules</h2>
        <p className="mt-3 max-w-md text-sm text-ink-400">
          Deux formules simples, pensées pour un accompagnement qui produit de vrais résultats, pas une remise en forme ponctuelle.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Reveal delayMs={0}>
            <div className="glass-card flex h-full flex-col rounded-card border-t-2 border-coral/40 p-7 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-base font-semibold text-ink-50">Pack 5 séances</h3>
              <p className="mt-1 text-sm text-ink-400">2 500 Rs / séance</p>
              <p className="mt-5 text-3xl font-display">
                12 500 <span className="text-base font-body text-ink-400">Rs</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink-200">
                {pack5Features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <CheckIcon className="h-5 w-5 shrink-0 text-coral" />
                    {feature}
                  </li>
                ))}
              </ul>
              <WhatsappCta label="Réserver ce pack" message="Bonjour, je suis intéressé(e) par le pack de 5 séances." variant="outline" className="mt-7 w-full" />
            </div>
          </Reveal>

          <Reveal delayMs={150}>
            <div className="glass-card-highlight relative flex h-full scale-[1.02] flex-col rounded-card border-t-2 border-lagoon p-7 shadow-[0_20px_60px_-15px_rgba(0,194,178,0.35)] transition-transform duration-300 hover:-translate-y-1">
              <span className="absolute -top-3 left-7 rounded-full bg-lagoon px-3 py-1 text-[10px] font-bold tracking-wide text-[#00201d]">LE PLUS COMPLET</span>
              <h3 className="mt-2 text-base font-semibold text-ink-50">Pack 10 séances</h3>
              <p className="mt-1 text-sm text-ink-400">
                2 250 Rs / séance <span className="text-lagoon">(-10%)</span>
              </p>
              <div className="mt-5 flex items-baseline gap-2.5">
                <p className="text-3xl font-display">
                  22 500 <span className="text-base font-body text-ink-400">Rs</span>
                </p>
                <span className="text-sm text-ink-400 line-through decoration-coral/60">25 000 Rs</span>
              </div>
              <p className="mt-1 text-xs font-semibold text-lagoon">Économisez 2 500 Rs</p>
              <ul className="mt-6 space-y-3 text-sm text-ink-200">
                {pack10Features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <CheckIcon className="h-5 w-5 shrink-0 text-lagoon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <WhatsappCta label="Réserver ce pack" message="Bonjour, je suis intéressé(e) par le pack de 10 séances." variant="solid" className="mt-7 w-full" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
