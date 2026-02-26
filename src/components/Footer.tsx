export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark py-12 text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/logo.png"
              alt="Soluna Yoga Logo"
              className="h-10 w-auto brightness-0 invert"
              loading="lazy"
            />
            <p className="font-display mt-4 italic text-white/70">
              &ldquo;Breathe in balance, flow with light.&rdquo;
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Music Vibes', href: '#music' },
                { label: 'Angebote', href: '#offerings' },
                { label: 'Events', href: '#events' },
                { label: 'Kontakt', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-sm text-white/70 transition-colors hover:text-brand-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Kontakt</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="tel:+436604922409" className="inline-flex min-h-[44px] items-center text-sm text-white/70 transition-colors hover:text-brand-primary">
                  +43 660 4922409
                </a>
              </li>
              <li>
                <a href="mailto:jacky.kryzer@gmail.com" className="inline-flex min-h-[44px] items-center text-sm text-white/70 transition-colors hover:text-brand-primary break-all">
                  jacky.kryzer@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/jacquelinekryzer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center text-sm text-white/70 transition-colors hover:text-brand-primary"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Rechtliches</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/impressum" className="inline-flex min-h-[44px] items-center text-sm text-white/70 transition-colors hover:text-brand-primary">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="inline-flex min-h-[44px] items-center text-sm text-white/70 transition-colors hover:text-brand-primary">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <a href="/agbs" className="inline-flex min-h-[44px] items-center text-sm text-white/70 transition-colors hover:text-brand-primary">
                  AGBs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            &copy; {currentYear} Soluna Yoga — Jacqueline Kryzer. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
