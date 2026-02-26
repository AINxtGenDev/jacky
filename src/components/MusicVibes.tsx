export function MusicVibes() {
  return (
    <section
      id="music"
      className="relative overflow-hidden bg-brand-dark py-16 sm:py-24"
      aria-labelledby="music-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-brand-primary blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-brand-primary-hover blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="music-heading"
            className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Soluna Music Vibes
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-primary" />
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            Entdecke Soluna Yoga Angebote und tauche ein in kuratierte Playlists.
            Von sanften Klängen bis zu energiegeladenen Beats.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group overflow-hidden rounded-2xl">
            <img
              src="/images/yoga-studio.jpg"
              alt="Yoga Studio mit Atmosphäre"
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72"
              loading="lazy"
            />
          </div>
          <div className="group overflow-hidden rounded-2xl">
            <img
              src="/images/yoga-meditation.jpg"
              alt="Meditationsraum"
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72"
              loading="lazy"
            />
          </div>
          <div className="group overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-1">
            <img
              src="/images/yoga-instructor.jpg"
              alt="Jacky bei einer Yoga Session"
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
