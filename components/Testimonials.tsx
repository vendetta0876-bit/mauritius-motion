const testimonials = [
  {
    name: "Frédéric",
    quote:
      "Si tu cherches à passer un palier, sportivement, professionnellement, Alain est la donnée qu'il te manque dans l'équation. Accompagnement de qualité, je recommande les yeux fermés.",
  },
  {
    name: "Jean-Michel Laine",
    quote:
      "Coach Alain Atthieh, à l'écoute, très professionnel. C'est votre chance d'identifier ce qui freine votre motivation, votre confiance, de dépasser vos blocages mentaux pour gagner en clarté, en sérénité et en efficacité. Je recommande vivement.",
  },
  {
    name: "Hafiz",
    quote:
      "Alain est un coach exceptionnel, autant sur le plan physique que mental. Grâce à son accompagnement, j'ai gagné en confiance, en discipline et en performance.",
  },
  {
    name: "Alberto E. Hernandez",
    quote:
      "Je connais le coach Alain Atthieh depuis 2016. Il se distingue par son accompagnement mental pour sportifs, ses compétences en gestion du stress et en libération des blocages mentaux.",
  },
  {
    name: "Sébastien Rech",
    quote:
      "Je connais Alain depuis 2022 et je peux témoigner de son professionnalisme autant sur la préparation mentale que physique. Il sait s'adapter à chaque besoin et situation.",
  },
  {
    name: "Marie-Charlotte Frey",
    quote:
      "Alain m'accompagne dans ma préparation et que dire de son service — humain, professionnel et empathique. La Dépolarisation® m'aide énormément dans l'accomplissement de mes objectifs.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-coral" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section-shell bg-base">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-sm font-semibold tracking-wide text-lagoon">
          Ce que les sportifs disent
        </h2>

        <div className="mt-4 flex items-center gap-2 text-sm text-ink-200">
          <Stars />
          <span>6 avis · 5/5 sur Google</span>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-card border border-white/10 bg-base-alt p-6"
            >
              <Stars />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink-200">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                  {t.name.charAt(0)}
                </span>
                <span className="text-sm font-medium text-ink-50">
                  {t.name}
                </span>
                <span className="ml-auto rounded-full bg-lagoon/10 px-2 py-0.5 text-[10px] font-medium text-lagoon">
                  Vérifié
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
