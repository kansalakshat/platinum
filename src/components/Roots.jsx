import { useEffect, useRef, useState } from 'react';

const stats = [
  [500, '+', 'Projects delivered over 25+ years'],
  [50, 'M+', 'Sq.ft. of Civil & Interiors'],
  [20, 'M+', 'Sq.ft. of General Contracting'],
  [5, 'M+', 'Sq.ft. of Design & Build'],
];

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// counts from 0 to `end` once it scrolls into view
function Counter({ end }) {
  const ref = useRef(null);
  const [value, setValue] = useState(reduceMotion ? end : 0);

  useEffect(() => {
    if (reduceMotion) return;
    let frame;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1800;
      const tick = t => {
        const p = Math.min((t - t0) / dur, 1);
        setValue(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: .15 });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, [end]);

  return <span ref={ref}>{value}</span>;
}

export default function Roots() {
  return (
    <section className="roots" id="about">
      <h1 className="roots-title metal-gold-text reveal">The Roots Of Platinum</h1>
      <div className="roots-grid">
        <div className="reveal">
          <p>With decades of expertise, Platinum Infrastructure turns complex briefs into remarkable built environments. Our approach blends precision construction with strategic vision, creating spaces that respond to the evolving needs of government and commercial sectors.</p>
          <p>Our in-house architects, engineers and craftsmen manage every phase, from design and civil work to MEP and fit-out, so clients get one accountable partner from concept to handover.</p>
        </div>
        <div className="rule" aria-hidden="true"></div>
        <div className="stats reveal">
          {stats.map(([end, suffix, label]) => (
            <div className="stat" key={label}>
              <div className="num"><Counter end={end} /><sup className="metal-gold-text">{suffix}</sup></div>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
