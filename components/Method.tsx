const steps = [
  {
    title: "Observation directe",
    description:
      "Votre mouvement, vos compensations, vos points de fragilité.",
    color: "bg-coral text-[#2a0e05]",
    delay: "",
  },
  {
    title: "Outils au service du corps",
    description:
      "Kettlebell, poids du corps, matériel léger, environnement naturel.",
    color: "bg-lagoon text-[#00201d]",
    delay: "animate-step-delay-1",
  },
  {
    title: "Structure inspirée CrossFit",
    description: "Toujours adaptée à votre objectif du moment.",
    color: "bg-coral text-[#2a0e05]",
    delay: "animate-step-delay-2",
  },
];

export function Method() {
  return (
    <section className="section-shell bg-base">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-sm font-semibold tracking-wide text-lagoon">
          Ma méthode
        </h2>

        <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ink-200">
          <p>
            Tout commence par un échange et une observation en direct, pas
            un questionnaire standardisé. En vous regardant bouger, je
            repère ce qu&rsquo;aucun formulaire ne révèle&nbsp;: votre
            mobilité réelle, vos compensations, vos points de fragilité.
            C&rsquo;est cette lecture terrain qui définit le point de
            départ.
          </p>
          <p>
            Le travail s&rsquo;appuie sur ce que le corps sait déjà faire :
            kettlebell, poids du corps, matériel léger (élastiques, TRX,
            corde) et l&rsquo;environnement naturel. La kettlebell occupe
            une place centrale dans mes séances&nbsp;: son mouvement
            balistique sollicite tout le corps en chaîne, développe force,
            explosivité et cardio en même temps, tout en renforçant la
            stabilité des hanches et du dos, souvent le point faible chez
            les sportifs. Un outil polyvalent qui construit une vraie force
            fonctionnelle, transférable à n&rsquo;importe quel sport.
          </p>
          <p>
            Mon passage de plusieurs années comme co-owner d&rsquo;une box
            de CrossFit continue d&rsquo;influencer ma façon de structurer
            une séance&nbsp;: intensité mesurée, mouvements variés, travail
            par blocs de temps. Mais chaque choix reste guidé par votre
            objectif du moment, jamais par habitude.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative pt-4">
              <div className="absolute left-0 right-0 top-0 h-px bg-white/10" />
              <div
                className={`animate-step ${step.delay} absolute -top-[9px] left-0 flex h-[18px] w-[18px] items-center justify-center rounded-full text-[10px] font-bold ${step.color}`}
              >
                {index + 1}
              </div>
              <div className={`animate-step ${step.delay} mt-4`}>
                <h3 className="text-sm font-semibold text-ink-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
