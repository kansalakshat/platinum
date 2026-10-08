const types = ['Corporate', 'Educational', 'Hospitality', 'Government', 'Healthcare', 'Bank'];
// closest matching client photo for each type; swap when sector-specific photos arrive
const images = {
  Corporate: 'krishna-food-pvt-lt-parle-g-project/01',
  Educational: 'dp-abhushan-ltd-office/09',
  Hospitality: 'kalani-house-project/08',
  Government: 'dp-abhushan-ltd-office/01',
  Healthcare: 'dp-abhushan-ltd-office/14',
  Bank: 'krishna-food-pvt-lt-parle-g-project/08',
};

export default function Projects() {
  return (
    <section id="types">
      <h2 className="sec-title reveal">Projects</h2>
      <div className="types-grid">
        {types.map(type => (
          <a key={type} href="#types" className="type metal-frame reveal">
            <div className="ph"><img src={`/projects/${images[type]}-sm.webp`} alt="" loading="lazy" /></div>
            {type}
          </a>
        ))}
      </div>
    </section>
  );
}
