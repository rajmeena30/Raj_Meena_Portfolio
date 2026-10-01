import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import useSpotlight from './hooks/useSpotlight';
import useTheme from './hooks/useTheme';
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Focus from './sections/Focus';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Work from './sections/Work';

export default function App() {
  const { theme, toggle } = useTheme();
  useSpotlight();

  return (
    <>
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Work />
        <Focus />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
