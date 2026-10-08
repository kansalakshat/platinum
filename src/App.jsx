import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Hero from './components/Hero.jsx';
import Roots from './components/Roots.jsx';
import Projects from './components/Projects.jsx';
import Portfolio from './components/Portfolio.jsx';
import Clients from './components/Clients.jsx';
import Press from './components/Press.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [showTop, setShowTop] = useState(false);

  // fade sections in as they scroll into view
  useEffect(() => {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    }), { threshold: .15 });
    document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 3) * 90 + 'ms'; io.observe(el); });
    return () => io.disconnect();
  }, []);

  // back-to-top button
  useEffect(() => {
    const onScroll = () => setShowTop(scrollY > 400);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Sidebar />
      <div className="main">
        <main id="top">
          <Hero />
          <Roots />
          <Projects />
          <Portfolio />
          <Clients />
          <Press />
        </main>
        <Footer />
      </div>
      <a href="#top" className={'to-top' + (showTop ? ' show' : '')} aria-label="Back to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 15l6-6 6 6" /></svg>
      </a>
    </>
  );
}
