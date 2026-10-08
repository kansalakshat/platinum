import { useEffect, useState } from 'react';

const links = [
  ['#top', 'Home'],
  ['#about', 'About Us'],
  ['#types', 'Projects'],
  ['#portfolio', 'Portfolio'],
  ['#clients', 'Clients'],
  ['#press', 'Press & Awards'],
  ['#contact', 'Career'],
  ['#contact', 'Contact'],
];

export function Brand() {
  return <>
    <img className="brand-mark" width="72" height="72" src="/logo-mark.webp" alt="" />
    <span className="brand-text"><b className="metal-silver-text">PLATINUM</b><small className="metal-gold-text">INFRASTRUCTURE</small></span>
  </>;
}

function toggleTheme() {
  const root = document.documentElement;
  const current = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
}

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#top');

  // highlight the last section whose top has passed 35% of the screen (footer once at the bottom)
  useEffect(() => {
    const sections = [...document.querySelectorAll('.hero, main section[id], #contact')];
    const onScroll = () => {
      const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
      const current = atBottom ? sections.at(-1) : sections.findLast(el => el.getBoundingClientRect().top <= innerHeight * .35) || sections[0];
      setActive(current.id ? '#' + current.id : '#top');
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => removeEventListener('scroll', onScroll);
  }, []);
  // Career and Contact share #contact; underline Contact only
  const activeIndex = links.findLastIndex(([href]) => href === active);

  return (
    <aside className={'sidebar' + (menuOpen ? ' menu-open' : '')}>
      <a href="#top" className="brand" aria-label="Platinum Infrastructure home"><Brand /></a>
      <nav className="nav" id="nav" aria-label="Primary">
        {links.map(([href, label], i) => (
          <a key={label} href={href} className={i === activeIndex ? 'active' : undefined} aria-current={i === activeIndex ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </nav>
      <div className="side-foot">
        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
          <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
          <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
        </button>
        <button className="icon-btn menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu" aria-expanded={menuOpen} aria-controls="nav">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 8h16M4 16h16" /></svg>
        </button>
      </div>
    </aside>
  );
}
