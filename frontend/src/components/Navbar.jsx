import { useState, useRef } from 'react';
import r4mLogo from '../assets/r4m-logo.png';

const SERVICES_ITEMS = [
  {
    title: 'Manpower Outsourcing',
    desc: 'We connect businesses with the right talent through workforce solutions tailored to their needs.',
    href: '#services',
  },
  {
    title: 'Recruitment Process Outsourcing',
    desc: 'We connect businesses with the right talent through workforce solutions tailored to their needs.',
    href: '#services',
  },
  {
    title: 'Specialized & Technical Roles',
    desc: 'We connect businesses with the right talent through workforce solutions tailored to their needs.',
    href: '#services',
  },
  {
    title: 'Find the Right Solutions',
    desc: 'We connect businesses with the right talent through workforce solutions tailored to their needs.',
    href: '#services',
  },
];

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about', hasDropdown: true },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Industries', href: '#industries', hasDropdown: true },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Contact Us', href: '#contact' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (label) => {
    if (label === 'Services') {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveDropdown('Services');
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleMegaMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleClick = (e, label) => {
    if (label === 'Services') {
      e.preventDefault();
      setActiveDropdown((prev) => (prev === 'Services' ? null : 'Services'));
    }
  };

  const isServicesOpen = activeDropdown === 'Services';

  return (
    <>
      {/* Background Overlay with Backdrop Blur for Content Below */}
      {isServicesOpen && (
        <div 
          className="r4m-mega-overlay" 
          onClick={() => setActiveDropdown(null)}
        />
      )}

      {/* Services Mega Dropdown Container spanning to the TOP of screen */}
      {isServicesOpen && (
        <div 
          className="r4m-mega-menu"
          onMouseEnter={handleMegaMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="r4m-mega-menu__container">
            
            {/* Left Featured Card */}
            <div className="r4m-mega__featured">
              <div className="r4m-mega__img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                  alt="R4M Services" 
                  className="r4m-mega__img"
                />
              </div>
              <span className="r4m-mega__category">SERVICES</span>
              <p className="r4m-mega__desc">
                We connect businesses with the right talent through workforce solutions tailored to their needs.
              </p>
              <a href="#services" className="r4m-mega__btn" onClick={() => setActiveDropdown(null)}>
                Explore our services
              </a>
            </div>

            {/* Vertical Divider Line */}
            <div className="r4m-mega__divider"></div>

            {/* Right 2x2 Services Grid */}
            <div className="r4m-mega__grid">
              {SERVICES_ITEMS.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href} 
                  className="r4m-mega__item"
                  onClick={() => setActiveDropdown(null)}
                >
                  <h4 className="r4m-mega__item-title">{item.title}</h4>
                  <p className="r4m-mega__item-desc">{item.desc}</p>
                </a>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* Main Floating Navbar */}
      <header className={`r4m-nav ${isServicesOpen ? 'is-dropdown-open' : ''}`}>
        <a href="#home" className="r4m-logo">
          <img src={r4mLogo} alt="R4M Talent Solutions Logo" className="r4m-logo__img" />
        </a>

        <nav className={`r4m-menu ${mobileOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <div 
              key={link.label}
              className="r4m-menu__item-wrap"
              onMouseEnter={() => handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href={link.href} 
                className={`r4m-menu__link ${activeDropdown === link.label ? 'is-active' : ''}`}
                onClick={(e) => handleClick(e, link.label)}
              >
                {link.label}
                {link.hasDropdown && <i className="bi bi-chevron-down r4m-chevron"></i>}
              </a>
            </div>
          ))}
        </nav>

        <button
          className="r4m-nav-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <i className={`bi ${mobileOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
        </button>
      </header>
    </>
  );
}

export default Navbar;