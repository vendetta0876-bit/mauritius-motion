import Image from "next/image";

export function Coach() {
  return (
    <section className="section-shell relative overflow-hidden bg-base-alt">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-lagoon/15 blur-[90px]"
      />
      <div className="mx-auto max-w-6xl">
        <h2 className="text-sm font-semibold tracking-wide text-lagoon">
          Le coach
        </h2>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
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
                <span className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-lagoon/60" />
                <span className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-lagoon/60" />
                <span className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-lagoon/60" />
                <span className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-lagoon/60" />
              </div>
            </div>
          </div>

          <div className="lg:border-l-2 lg:border-lagoon/25 lg:pl-8">
            <p className="max-w-lg text-base leading-relaxed text-ink-200">
              Coach sportif depuis plus de{" "}
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

            <span className="eyebrow mt-8 text-coral">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              Progresser sans se blesser
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
