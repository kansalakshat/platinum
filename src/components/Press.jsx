// [text, client photo]
const articles = [
  ["Platinum's fire-rated door system cleared independent fire-resistance testing, setting a new benchmark for large-format interiors.", 'chabra-ji-house-pragati-green/17'],
  ['Founded over two decades ago, the company has executed projects for highly discerning clients across government and enterprise.', 'azaan-project/04'],
  ['A one-stop, pan-India turnkey fit-out partner, Platinum shares how integrated delivery keeps large builds on schedule.', 'kalptaru-katarias-project/12'],
];

export default function Press() {
  return (
    <section id="press">
      <h2 className="sec-title reveal">Press</h2>
      <div className="press-grid">
        {articles.map(([text, photo]) => (
          <article key={text} className="press-card reveal">
            <div className="ph"><img src={`/projects/${photo}-sm.webp`} alt="" loading="lazy" /></div>
            <p>{text}</p>
            <a href="#press">READ MORE</a>
          </article>
        ))}
      </div>
    </section>
  );
}
