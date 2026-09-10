const icons: Record<string, JSX.Element> = {
  observation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M6.5 6.5 4 4M17.5 6.5 20 4M6.5 17.5 4 20M17.5 17.5 20 20" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  ),
  structure: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
};

const steps = [
  {
    icon: "observation",
    title: "Observation directe",
    description: "Votre mouvement, vos compensations, vos points de fragilité.",
    accent: "bg-coral text-[#2a0e05]",
    delay: "",
  },
  {
    icon: "tools",
    title: "Outils au service du corps",
    description: "Kettlebell, poids du corps, matériel léger, environnement naturel.",
    accent: "bg-lagoon text-[#00201d]",
    delay: "fade-up-delay-1",
  },
  {
    icon: "structure",
    title: "Structure inspirée CrossFit",
    description: "Toujours adaptée à votre objectif du moment.",
    accent: "bg-coral text-[#2a0e05]",
    delay: "fade-up-delay-2",
  },
];

export function Method() {
  return (
    <section className="section-shell bg-base">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-sm font-semibold tracking-wide text-lagoon">Ma méthode</h2>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-ink-200">
            <p>
              Tout commence par un échange et une observation en direct, pas un questionnaire standardisé. En vous regardant bouger, je repère ce qu&rsquo;aucun formulaire ne révèle&nbsp;: votre mobilité réelle, vos compensations, vos points de fragilité. C&rsquo;est cette lecture terrain qui définit le point de départ.
            </p>
            <p>
              Le travail s&rsquo;appuie sur ce que le corps sait déjà faire : kettlebell, poids du corps, matériel léger (élastiques, TRX, corde) et l&rsquo;environnement naturel. La kettlebell occupe une place centrale dans mes séances&nbsp;: son mouvement balistique sollicite tout le corps en chaîne, développe force, explosivité et cardio en même temps, tout en renforçant la stabilité des hanches et du dos, souvent le point faible chez les sportifs. Un outil polyvalent qui construit une vraie force fonctionnelle, transférable à n&rsquo;importe quel sport.
            </p>
            <p>
              Mon passage de plusieurs années comme co-owner d&rsquo;une box de CrossFit continue d&rsquo;influencer ma façon de structurer une séance&nbsp;: intensité mesurée, mouvements variés, travail par blocs de temps. Mais chaque choix reste guidé par votre objectif du moment, jamais par habitude.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {steps.map((step) => (
              <div key={step.title} className={`animate-fade-up ${step.delay} glass-card flex gap-4 rounded-card p-5`}>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${step.accent}`}>
                  {icons[step.icon]}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink-50">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
