import Image from "next/image";

export function Coach() {
  return (
    <section id="coach" className="section-shell relative overflow-hidden bg-base-alt">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-lagoon/20 blur-[110px]"
      />
      <div className="mx-auto max-w-6xl">
        <h2 className="text-sm font-semibold tracking-wide text-lagoon">
          Le coach
        </h2>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div className="mx-auto max-w-[380px]">
              <div className="relative aspect-[4/5] w-full">
                <div className="absolute inset-0 overflow-hidden rounded-card">
                  <Image
                    src="/images/apex-coach.jpg"
                    alt="Alain Attieh, coach sportif"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <span className="absolute -left-3 -top-3 h-8 w-8 border-l-2 border-t-2 border-lagoon/70" />
                <span className="absolute -right-3 -top-3 h-8 w-8 border-r-2 border-t-2 border-lagoon/70" />
                <span className="absolute -bottom-3 -left-3 h-8 w-8 border-b-2 border-l-2 border-lagoon/70" />
                <span className="absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-lagoon/70" />
              </div>
            </div>
          </div>

          <div className="lg:relative lg:pl-8">
            <div className="absolute -left-1 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-lagoon/60 to-transparent lg:block" />
            <p className="max-w-lg text-base leading-relaxed text-ink-200">
              Je m&rsquo;appelle Alain, coach sportif depuis plus de{" "}
              <span className="font-semibold text-ink-50">15 ans</span>, dont{" "}
              <span className="font-semibold text-ink-50">7 ans</span>{" "}
              co-owner d&rsquo;une box de CrossFit, et passionné de sport
              depuis plus de{" "}
              <span className="font-semibold text-ink-50">30 ans</span> —
              taekwondo, musculation, kickboxing, trail, ultra-trail et
              calisthénie.
            </p>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-200">
              Au fil des centaines de sportifs accompagnés, j&rsquo;ai appris
              qu&rsquo;un entraînement efficace n&rsquo;est jamais un
              entraînement qui casse le corps. La vraie performance se
              construit sur la durée&nbsp;: une progression maîtrisée, une
              technique juste, et une prévention des blessures pensée à
              chaque séance, pas seulement quand la douleur arrive.
            </p>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-200">
              Aujourd&rsquo;hui, je construis avec chaque sportif un
              programme sur-mesure qui respecte le corps autant que
              l&rsquo;objectif, pour progresser sans se blesser, et durer
              dans le temps.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-coral/30 bg-coral/10 py-2.5 pl-2.5 pr-5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coral text-[#2a0e05]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M12 2 4 5v6c0 5 3.4 8.5 8 9 4.6-.5 8-4 8-9V5l-8-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-coral">Progresser sans se blesser</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
