import { Brand } from './Sidebar.jsx';

const regions = ['Maharashtra', 'Delhi', 'Karnataka', 'Gujarat', 'Telangana', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal'];
const types = ['Corporate Interior', 'Education', 'Bank', 'Hospital', 'Government'];
const quickLinks = [
  ['#about', 'About Us'],
  ['#types', 'Projects'],
  ['#clients', 'Clients'],
  ['#press', 'Awards'],
  ['mailto:careers@platinuminfra.in', 'Careers'],
];

const socials = [
  ['LinkedIn', <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 9h3.5v11H4zM5.75 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM9.5 9h3.4v1.6h.05c.47-.9 1.62-1.85 3.35-1.85 3.58 0 4.2 2.35 4.2 5.4V20H17v-5.2c0-1.25-.02-2.85-1.74-2.85-1.74 0-2 1.36-2 2.76V20H9.5z" /></svg>],
  ['Instagram', <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".6" fill="currentColor" /></svg>],
  ['Facebook', <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.25-1.5 1.55-1.5h1.65V3.45A22 22 0 0 0 14.3 3.3c-2.4 0-4.05 1.47-4.05 4.15v2.35H7.5V13h2.75v8z" /></svg>],
  ['YouTube', <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z" /></svg>],
];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div>
          <h2>Quick Links</h2>
          <div className="footer-cols">
            <div><h4>Projects by Region</h4><ul>{regions.map(r => <li key={r}>{r}</li>)}</ul></div>
            <div><h4>Projects by Type</h4><ul>{types.map(t => <li key={t}><a href="#types">{t}</a></li>)}</ul></div>
            <div><h4>Downloads</h4><ul><li><a href="#" rel="noopener">Corporate Profile</a></li></ul></div>
            <div><h4>Quick Links</h4><ul>{quickLinks.map(([href, label]) => <li key={label}><a href={href}>{label}</a></li>)}</ul></div>
          </div>
        </div>
        <div>
          <h4>Plant Address</h4>
          <address>Plant address line, Industrial Estate, City - 000000</address>
          <h4>Head Office Address</h4>
          <address>Office address line, City - 000000</address>
          <h4>Contact</h4>
          <address><a href="mailto:info@platinuminfra.in">info@platinuminfra.in</a><br /><a href="tel:+910000000000">Tel: +91 00000 00000</a></address>
          <div className="social">
            {socials.map(([label, icon]) => <a key={label} href="#" aria-label={label} rel="noopener">{icon}</a>)}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="brand"><Brand /></div>
        <div>© {new Date().getFullYear()} Platinum Infrastructure | All rights reserved.</div>
      </div>
    </footer>
  );
}
