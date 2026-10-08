import { useEffect, useState } from 'react';

import projects, { photoSrc } from '../projects.js';

// one cover photo per client
const slides = projects.map(p => [p.name, p.type, photoSrc(p, p.cover)]);

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const go = step => setIndex(i => (i + step + slides.length) % slides.length);

  // auto-advance every 5s; restarts whenever the slide changes (incl. arrow clicks)
  useEffect(() => {
    if (reduceMotion) return;
    const timer = setTimeout(() => go(1), 5000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="hero" aria-label="Featured projects">
      <div className="slider metal-frame">
        {slides.map(([name, city, src], i) => (
          <div key={name} className={'slide ph' + (i === index ? ' active' : '')} aria-hidden={i !== index}>
            <img src={src} alt={name} loading={i ? 'lazy' : 'eager'} fetchpriority={i ? undefined : 'high'} />
            <div className="caption"><b>{name}</b><span>{city}</span></div>
          </div>
        ))}
        <button className="arrow prev" onClick={() => go(-1)} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button className="arrow next" onClick={() => go(1)} aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
}
