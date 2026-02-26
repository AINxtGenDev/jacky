const PILLARS = [
  {
    title: 'Energie & Regeneration',
    description:
      'Spüre die belebende Kraft der Bewegung im Einklang mit sanfter Ruhe.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Dein individueller Weg',
    description:
      'Meine Yoga-Reise begann aus Neugier und wurde zur Leidenschaft. Heute lade ich dich ein, deinen eigenen Weg zu entdecken.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: 'Inspirierte Praxis',
    description:
      'Jede Session verbindet bewusste Bewegung, Musik und Intention.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
  {
    title: 'Offen für alle',
    description:
      'Ein unterstützender Raum, in dem jedes Level willkommen ist.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.502-4.688-4.502-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.748 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
] as const;

export function About() {
  return (
    <section className="bg-brand-cream py-16 sm:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="about-heading" className="font-display text-3xl font-bold text-brand-dark sm:text-4xl lg:text-5xl">
            Über Soluna
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-primary" />
          <p className="mt-6 text-lg leading-relaxed text-brand-dark/80 sm:text-xl">
            <strong>&ldquo;Soluna&rdquo;</strong> verbindet die spanischen Wörter{' '}
            <em>Sol</em> (Sonne) und <em>Luna</em> (Mond) — in Sanskrit{' '}
            <em>Surya</em> und <em>Chandra</em>. Sie stehen für Yin und Yang:
            schnell & langsam, warm & kühl, Tag & Nacht, Licht & Dunkel.
          </p>
          <p className="mt-4 font-display text-xl italic text-brand-primary sm:text-2xl">
            &ldquo;Alles braucht Balance, um zu fliessen.&rdquo;
          </p>
        </div>

        {/* Image + Text Row */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/yoga-lake.jpg"
              alt="Jacky bei Yoga am See"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-brand-dark/80">
              Meine Arbeit vereint kraftvolle Vinyasa Flows, beruhigende Yin Sessions,
              Meditation und Atemarbeit. Egal wo du gerade stehst — hier findest du
              einen Raum, um dich mit dir selbst zu verbinden.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="/images/certification.jpg"
                alt="200h Yoga Alliance Zertifizierung"
                className="h-20 w-20 rounded-lg object-cover shadow-md"
                loading="lazy"
              />
              <div>
                <p className="font-medium text-brand-dark">200h Yoga Alliance</p>
                <p className="text-sm text-brand-dark/60">Zertifizierte Yin & Vinyasa Lehrerin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-xl bg-brand-sand p-3 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-dark">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
