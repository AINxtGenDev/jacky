export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/yoga-hero.jpg`}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-brand-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Willkommen bei
          <span className="mt-2 block text-brand-primary-hover">Soluna Yoga!</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
          Ich bin Jacky, eine 200h Yoga Alliance zertifizierte Yin & Vinyasa Yogalehrerin
          aus Österreich, derzeit in Barcelona. Ich habe diesen Raum geschaffen, um Bewegung,
          Atem und Stille zu verbinden — als Einladung, zu dir selbst zurückzukehren und
          innere Balance zu finden.
        </p>

        <p className="font-display mt-8 text-2xl italic text-brand-primary-hover sm:text-3xl">
          &ldquo;Find your balance. Live your flow.&rdquo;
        </p>

        <a
          href="#offerings"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-3 text-base font-medium text-white transition-all hover:bg-brand-primary-hover hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 sm:text-lg"
        >
          Entdecke meine Angebote
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
