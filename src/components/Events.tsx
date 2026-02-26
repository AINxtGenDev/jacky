export function Events() {
  return (
    <section
      id="events"
      className="bg-brand-cream py-16 sm:py-24"
      aria-labelledby="events-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="events-heading"
            className="font-display text-3xl font-bold text-brand-dark sm:text-4xl lg:text-5xl"
          >
            Anstehende Events
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-primary" />
        </div>

        {/* Featured Event */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-sm md:grid md:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src="/images/staudachhof.jpg"
              alt="Staudachhof Retreat Location in Kärnten"
              className="h-64 w-full object-cover md:h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1.5 text-sm font-medium text-brand-primary">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              12. — 14. Juni 2026
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold text-brand-dark sm:text-3xl">
              Staudachhof Retreat
            </h3>

            <p className="mt-2 text-sm text-brand-dark/60">
              <svg className="mr-1 inline h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Guttaring, Kärnten, Österreich
            </p>

            <p className="mt-4 leading-relaxed text-brand-dark/80">
              Erlebe die heilende Kraft von Bewegung, Stille und Gemeinschaft in
              Kärntens natürlicher Ruhe. Energetisierende Vinyasa Flows, beruhigende
              Yin- und Meditationssessions, Breathwork-Workshop — dazu Lachen und Leichtigkeit.
            </p>

            <ul className="mt-6 space-y-2">
              {[
                'Energizing Vinyasa Flows',
                'Calming Yin & Meditation',
                'Breathwork Workshop',
                'Gemeinschaft & Natur',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-brand-dark/70">
                  <svg className="h-4 w-4 flex-shrink-0 text-brand-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-brand-primary-hover hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
            >
              Jetzt anfragen
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        <p className="font-display mt-12 text-center text-xl italic text-brand-primary sm:text-2xl">
          &ldquo;Gather. Move. Shine. Repeat.&rdquo;
        </p>
      </div>
    </section>
  );
}
