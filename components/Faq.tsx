const faqs = [
  {
    question: "Dois-je avoir un bon niveau physique pour commencer ?",
    answer:
      "Non. Chaque séance est adaptée à votre niveau réel, du débutant au sportif confirmé. C'est justement le principe de l'observation en direct en amont.",
  },
  {
    question: "Le matériel est-il fourni ?",
    answer:
      "Oui, tout le matériel nécessaire (kettlebell, matériel léger) est apporté par mes soins. Rien à prévoir de votre côté.",
  },
  {
    question: "Que se passe-t-il en cas de mauvais temps ?",
    answer:
      "Les séances en extérieur sont adaptées ou déplacées selon la météo, pour que rien ne soit annulé sans solution.",
  },
  {
    question:
      "Puis-je réserver seulement pendant mon séjour, ou aussi en tant que résident ?",
    answer:
      "Les deux. Les formules fonctionnent aussi bien pour un accompagnement ponctuel pendant vos vacances que pour un suivi régulier si vous êtes installé sur l'île.",
  },
  {
    question: "Comment se déroule la première séance ?",
    answer:
      "Elle commence par un échange et une observation de votre mouvement, pour construire un programme réellement adapté dès le départ, pas un format générique.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function Faq() {
  return (
    <section className="section-shell bg-base-alt">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold tracking-wide text-lagoon">
          Questions fréquentes
        </h2>

        <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-ink-50">
                {faq.question}
                <span className="text-coral transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
