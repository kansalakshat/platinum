import { useRef, useState } from 'react';
import projects, { photoSrc } from '../projects.js';

// one block per client, all of that client's photos together in a scrollable strip
export default function Portfolio() {
  const dialog = useRef(null);
  const [open, setOpen] = useState(null); // [project, photo index]

  const show = (p, i) => { setOpen([p, i]); dialog.current.showModal(); };
  const step = d => setOpen(([p, i]) => [p, (i + d + p.photos.length) % p.photos.length]);

  return (
    <section id="portfolio">
      <h2 className="sec-title reveal">Portfolio</h2>
      {projects.map(p => (
        <div key={p.slug} className="client reveal">
          <div className="client-head">
            <h3>{p.name}</h3>
            <span>{p.type} · {p.photos.length} photos</span>
          </div>
          <div className="strip">
            {p.photos.map(([w, h], i) => (
              <button key={i} onClick={() => show(p, i)} aria-label={`${p.name}, photo ${i + 1} of ${p.photos.length}`}>
                <img loading="lazy" decoding="async" width={w} height={h} src={photoSrc(p, i, true)} alt="" />
              </button>
            ))}
          </div>
        </div>
      ))}

      <dialog ref={dialog} className="lightbox" onClose={() => setOpen(null)}
        onClick={e => e.target === dialog.current && dialog.current.close()}
        onKeyDown={e => { if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1); }}>
        {open && <>
          <img src={photoSrc(open[0], open[1])} alt={`${open[0].name}, photo ${open[1] + 1}`} />
          <p>{open[0].name} · {open[1] + 1} / {open[0].photos.length}</p>
          <button className="arrow prev" onClick={() => step(-1)} aria-label="Previous photo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button className="arrow next" onClick={() => step(1)} aria-label="Next photo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 5l7 7-7 7" /></svg>
          </button>
          <button className="close" onClick={() => dialog.current.close()} aria-label="Close">×</button>
        </>}
      </dialog>
    </section>
  );
}
