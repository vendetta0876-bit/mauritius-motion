import { WhatsappCta } from "./WhatsappCta";

const zones = [
  "Grand Baie",
  "Trou aux Biches",
  "Pereybère",
  "Mont Choisy",
  "Cap Malheureux",
  "Pointe aux Canonniers",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-base">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="text-base font-semibold tracking-wide text-ink-50">
              Mauritius <span className="text-lagoon">Motion</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-400">
              Coaching sportif privé, sur-mesure, dans le Nord de l&rsquo;île Maurice.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm text-ink-200">
            <a href="#formules" className="hover:text-ink-50">Formules</a>
            <a href="#" className="hover:text-ink-50">Qui je suis</a>
          </nav>

          <div>
            <p className="text-sm text-ink-400">Séances dans le Nord de l&rsquo;île&nbsp;:</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-200">{zones.join(" · ")}</p>
            <WhatsappCta label="WhatsApp" message="Bonjour, j'ai une question sur le coaching sportif." variant="whatsapp" className="mt-5" />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-ink-400">
          © {year} Mauritius Motion. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
