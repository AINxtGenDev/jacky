import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MusicVibes } from './components/MusicVibes';
import { Offerings } from './components/Offerings';
import { Events } from './components/Events';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Zum Hauptinhalt springen
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <MusicVibes />
        <Offerings />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
