import projects from '../projects.js';

// name plates until real client logos arrive
export default function Clients() {
  return (
    <section id="clients">
      <h2 className="sec-title reveal">Clients</h2>
      <div className="logos reveal">
        {projects.map(p => (
          <div key={p.slug} className="ph"><span>{p.name}</span></div>
        ))}
      </div>
    </section>
  );
}
