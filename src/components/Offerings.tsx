const OFFERINGS = [
  {
    title: 'Private Yoga Sessions',
    description:
      'Individuelle Sessions in Yin Yoga, Vinyasa, Meditation oder Atemarbeit für Gruppen — Geburtstage, Feiern, Team-Building Events.',
    image: '/images/yoga-membership.jpg',
    imageAlt: 'Private Yoga Session',
  },
  {
    title: 'Workshops & Retreats',
    description:
      'Zusammenarbeit mit Hotels und Locations, die Yoga-, Achtsamkeits- oder Atemarbeit-Erlebnisse bieten, mit sorgfältig gestalteten Workshops und Retreats.',
    image: '/images/yoga-outdoor.jpg',
    imageAlt: 'Yoga Workshop im Freien',
  },
] as const;

export function Offerings() {
  return (
    <section
      id="offerings"
      className="bg-brand-sand py-16 sm:py-24"
      aria-labelledby="offerings-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="offerings-heading"
            className="font-display text-3xl font-bold text-brand-dark sm:text-4xl lg:text-5xl"
          >
            Angebote
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-primary" />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {OFFERINGS.map((offering) => (
            <article
              key={offering.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={offering.image}
                  alt={offering.imageAlt}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-brand-dark sm:text-2xl">
                  {offering.title}
                </h3>
                <p className="mt-3 leading-relaxed text-brand-dark/70">
                  {offering.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex min-h-[44px] items-center gap-2 font-medium text-brand-primary transition-colors hover:text-brand-dark"
                >
                  Jetzt anfragen
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
