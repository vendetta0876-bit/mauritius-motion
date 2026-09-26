import Image from "next/image";

const benefits = [
  {
    title: "Force fonctionnelle",
    description: "Une force utile, capable de se transférer aux mouvements du quotidien comme à la pratique sportive.",
    accent: "bg-coral text-[#2a0e05]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="12" r="2" />
        <path d="M8 12h8M4 9v6M20 9v6" />
      </svg>
    ),
  },
  {
    title: "Puissance",
    description: "Les mouvements balistiques (swing, clean) développent la capacité à produire de la force rapidement.",
    accent: "bg-lagoon text-[#00201d]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
      </svg>
    ),
  },
  {
    title: "Stabilité & contrôle",
    description: "Le travail unilatéral et les charges décentrées sollicitent le gainage, la coordination et le contrôle du mouvement.",
    accent: "bg-coral text-[#2a0e05]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 3v18M5 7h14M5 7l-2 5h6L5 7ZM19 7l-2 5h6l-2-5Z" />
      </svg>
    ),
  },
  {
    title: "Efficacité",
    description: "Peu de matériel, énormément de possibilités — des séances courtes, progressives et adaptées.",
    accent: "bg-lagoon text-[#00201d]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="13" r="8" />
        <path d="M12 13V9M9 3h6M12 3v2" />
      </svg>
    ),
  },
];

export function Kettlebell() {
  return (
    <section className="section-shell bg-base-alt">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-sm font-semibold tracking-wide text-lagoon">La kettlebell</h2>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-card border border-white/10">
            <Image
              src="/images/kettlebell.png"
              alt="Alain Attieh à l'entraînement avec une kettlebell"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-4 text-base leading-relaxed text-ink-200">
            <p>
              La kettlebell occupe une place centrale dans ma façon d&rsquo;entraîner. Avec un seul outil, je travaille la force, la puissance, la stabilité, la coordination et la condition physique à travers des mouvements qui sollicitent le corps dans son ensemble.
            </p>
            <p>
              Swing, squat, clean, press, carry, Turkish Get-Up&nbsp;: chaque exercice s&rsquo;adapte au niveau, aux capacités et à l&rsquo;objectif de chacun.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card flex flex-col gap-3 rounded-card p-5">
              <span className={`flex h-10 w-10 items-center justify-center rounded-full ${b.accent}`}>
                {b.icon}
              </span>
              <h3 className="text-sm font-semibold text-ink-50">{b.title}</h3>
              <p className="text-sm leading-relaxed text-ink-400">{b.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg font-display text-ink-50">
          La kettlebell n&rsquo;est pas l&rsquo;objectif.{" "}
          <span className="text-lagoon">C&rsquo;est un outil au service de votre progression.</span>
        </p>
      </div>
    </section>
  );
}
