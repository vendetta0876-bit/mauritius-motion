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

function KettlebellOutline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 130" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M32 60V40A18 18 0 0 1 68 40V60" />
      <circle cx="50" cy="92" r="37" />
    </svg>
  );
}

const steps = [
  { icon: "observation", title: "Observation directe", description: "Votre mouvement, vos compensations, vos points de fragilité.", accent: "bg-coral text-[#2a0e05]", border: "border-t-2 border-coral/40", delay: "" },
  { icon: "tools", title: "Outils au service du corps", description: "Kettlebell, poids du corps, matériel léger, environnement naturel.", accent: "bg-lagoon text-[#00201d]", border: "border-t-2 border-lagoon/40", delay: "fade-up-delay-1" },
  { icon: "structure", title: "Structure inspirée CrossFit", description: "Toujours adaptée à votre objectif du moment.", accent: "bg-coral text-[#2a0e05]", border: "border-t-2 border-coral/40", delay: "fade-up-delay-2" },
];

export function Method() {
  return (
    <section className="section-shell relative overflow-hidden bg-base">
      <KettlebellOutline className="animate-ghost pointer-events-none absolute left-[6%] top-4 h-16 w-16 rotate-[-8deg] text-coral/25" />
      <KettlebellOutline className="animate-ghost ghost-delay-2 pointer-events-none absolute left-[32%] top-8 h-10 w-10 rotate-[4deg] text-lagoon/20" />
      <KettlebellOutline className="animate-ghost ghost-delay-1 pointer-events-none absolute left-[58%] top-2 h-12 w-12 rotate-[-6deg] text-coral/20" />
      <KettlebellOutline className="animate-ghost ghost-delay-3 pointer-events-none absolute right-[6%] top-6 h-14 w-14 rotate-[10deg] text-lagoon/25" />
      <KettlebellOutline className="animate-ghost ghost-delay-3 pointer-events-none absolute left-1 top-1/2 hidden h-11 w-11 -translate-y-1/2 rotate-[-4deg] text-lagoon/15 lg:block" />
      <KettlebellOutline className="animate-ghost ghost-delay-1 pointer-events-none absolute right-1 top-[42%] hidden h-11 w-11 -translate-y-1/2 rotate-[7deg] text-coral/15 lg:block" />
      <KettlebellOutline className="animate-ghost ghost-delay-1 pointer-events-none absolute left-[8%] bottom-4 h-14 w-14 rotate-[6deg] text-lagoon/20" />
      <KettlebellOutline className="animate-ghost ghost-delay-2 pointer-events-none absolute left-[38%] bottom-8 h-10 w-10 rotate-[-5deg] text-coral/15" />
      <KettlebellOutline className="animate-ghost ghost-delay-3 pointer-events-none absolute right-[35%] bottom-2 h-11 w-11 rotate-[8deg] text-lagoon/15" />
      <KettlebellOutline className="animate-ghost ghost-delay-2 pointer-events-none absolute right-[7%] bottom-6 h-10 w-10 rotate-[-6deg] text-coral/20" />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-sm font-semibold tracking-wide text-lagoon">Ma méthode</h2>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-ink-200">
            <p>Tout commence par un échange et une observation en direct, pas un questionnaire standardisé. En vous regardant bouger, je repère ce qu&rsquo;aucun formulaire ne révèle&nbsp;: votre mobilité réelle, vos compensations, vos points de fragilité. C&rsquo;est cette lecture terrain qui définit le point de départ.</p>
            <p>Le travail s&rsquo;appuie sur ce que le corps sait déjà faire : kettlebell, poids du corps, matériel léger (élastiques, TRX, corde) et l&rsquo;environnement naturel. La kettlebell occupe une place centrale dans mes séances&nbsp;: son mouvement balistique sollicite tout le corps en chaîne, développe force, explosivité et cardio en même temps, tout en renforçant la stabilité des hanches et du dos, souvent le point faible chez les sportifs. Un outil polyvalent qui construit une vraie force fonctionnelle, transférable à n&rsquo;importe quel sport.</p>
            <p>Mon passage de plusieurs années comme co-owner d&rsquo;une box de CrossFit continue d&rsquo;influencer ma façon de structurer une séance&nbsp;: intensité mesurée, mouvements variés, travail par blocs de temps. Mais chaque choix reste guidé par votre objectif du moment, jamais par habitude.</p>
          </div>

          <div className="flex flex-col gap-4">
            {steps.map((step) => (
              <div key={step.title} className={`animate-rise-up ${step.delay} glass-card ${step.border} flex gap-4 rounded-card p-5`}>
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
