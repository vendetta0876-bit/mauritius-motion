import Image from "next/image";

const stats = [
  { value: "15+", label: "années d'expérience" },
  { value: "500+", label: "athlètes accompagnés" },
  { value: "100%", label: "dédié à votre progression" },
];

export function Hero() {
  return (
    <section className="section-shell bg-base pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <span className="eyebrow text-coral">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            Pas de programme générique. Du sur-mesure.
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Coaching sportif à l&rsquo;île Maurice
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-200">
            Votre ambition mérite plus qu&rsquo;un programme générique. Je
            construis un coaching précis, adapté à votre niveau, vos
            contraintes et vos objectifs. Force, condition physique,
            préparation spécifique trail&nbsp;: chaque séance est pensée pour
            créer une progression mesurable et durable. Un plan clair. Un
            accompagnement engagé. Des résultats qui s&rsquo;inscrivent dans
            le temps.
          </p>

          <div className="mt-8">
            <a
              href="#formules"
              className="inline-flex items-center justify-center rounded-md bg-coral px-6 py-3 text-sm font-semibold text-[#2a0e05] transition-colors hover:bg-coral/90"
            >
              Découvrir mes formules
            </a>
          </div>
        </div>

        <div>
          <div className="mx-auto max-w-[380px] lg:max-w-[420px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-white/10 bg-gradient-to-br from-base-alt to-base">
              <Image
                src="/images/apex-hero.png"
                alt="Coach sportif à l'île Maurice"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`animate-fade-up ${i === 1 ? "fade-up-delay-1" : i === 2 ? "fade-up-delay-2" : ""} rounded-card border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur-sm`}
              >
                <div className="text-xl font-display text-lagoon sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[11px] leading-snug text-ink-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
