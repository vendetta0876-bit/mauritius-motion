import { WhatsappCta } from "./WhatsappCta";

export function DepolarisationHighlight() {
  return (
    <section className="section-shell bg-base">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-semibold tracking-wide text-lagoon">Au-delà du physique</h2>

        <p className="mt-6 text-lg text-ink-50">
          La performance ne dépend pas uniquement de vos capacités physiques.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-200">
          Pression, peur de l&rsquo;échec, manque de confiance, regard des autres ou schémas qui se répètent peuvent parfois limiter l&rsquo;expression de votre potentiel.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-200">
          En complément du coaching sportif, je suis également coach en Dépolarisation®. Cette approche permet d&rsquo;explorer les associations et conditionnements qui peuvent être à l&rsquo;origine de certains blocages, afin de retrouver davantage de liberté dans sa façon d&rsquo;agir, de décider et de performer.
        </p>

        <p className="mt-8 text-xl font-display leading-snug">
          Le physique construit vos capacités.{" "}
          <span className="text-lagoon">Le mental vous permet de les exprimer.</span>
        </p>

        <div className="glass-card mx-auto mt-10 flex max-w-sm flex-col items-center gap-4 rounded-card border-t-2 border-lagoon/40 p-6">
          <div>
            <p className="text-sm text-ink-400">Séance de Dépolarisation®</p>
            <p className="mt-1 text-2xl font-display">
              4 500 <span className="text-base font-body text-ink-400">Rs</span>
            </p>
          </div>
          <WhatsappCta
            label="Réserver une séance"
            message="Bonjour, je suis intéressé(e) par une séance de Dépolarisation®."
            variant="outline"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
