import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Soluna Music Vibes', href: '#music' },
  { label: 'Angebote', href: '#offerings' },
  { label: 'Events', href: '#events' },
  { label: 'Kontakt', href: '#contact' },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  function handleNavClick() {
    setIsOpen(false);
  }

  const textColor = isScrolled ? 'text-brand-dark' : 'text-white';
  const hoverColor = isScrolled ? 'hover:text-brand-primary' : 'hover:text-brand-primary-hover';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between md:h-24">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0" aria-label="Soluna Yoga Home">
            <img
              src="/images/logo.png"
              alt="Soluna Yoga Logo"
              className={`h-14 w-auto md:h-16 transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`inline-flex min-h-[44px] items-center text-base font-semibold tracking-wide transition-colors ${textColor} ${hoverColor}`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md p-2 md:hidden transition-colors ${textColor}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Menu schliessen' : 'Menu oeffnen'}
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-brand-cream/98 backdrop-blur-md px-4 pb-6 pt-2 shadow-lg">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              className="block py-3 text-lg font-medium text-brand-dark transition-colors hover:text-brand-primary border-b border-brand-sand/50 last:border-0"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
