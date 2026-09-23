import { useState } from 'react';
import r4mLogo from '../assets/r4m-logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about', hasDropdown: true },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Industries', href: '#industries', hasDropdown: true },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Contact Us', href: '#contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="r4m-nav">
      <a href="#home" className="r4m-logo">
        <img src={r4mLogo} alt="R4M Talent Solutions Logo" className="r4m-logo__img" />
      </a>


      <nav className={`r4m-menu ${open ? 'is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="r4m-menu__link">
            {link.label}
            {link.hasDropdown && <i className="bi bi-chevron-down r4m-chevron"></i>}
          </a>
        ))}
      </nav>

      <button
        className="r4m-nav-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`}></i>
      </button>
    </header>
  );
}

export default Navbar;