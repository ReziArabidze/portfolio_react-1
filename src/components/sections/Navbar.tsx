import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';

interface NavbarProps {
  name: string;
}

export const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'მთავარი', href: '#hero' },
    { label: 'ჩემ შესახებ', href: '#about' },
    { label: 'სერვისები', href: '#services' },
    { label: 'უნარები', href: '#skills' },
    { label: 'პროექტები', href: '#projects' },
    { label: 'გამოცდილება', href: '#experience' },
    { label: 'კონტაქტი', href: '#contact' },
  ];

  return (
    <header className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#hero" className="navbar-logo">
          <span className="logo-icon">
            <Icon name="code" size={20} />
          </span>
          <span className="logo-text">
            {name.split(' ')[0]}
            <span className="logo-dot">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="navbar-cta">
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            icon={<Icon name="arrow-right" size={16} />}
          >
            დამიკავშირდით
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="მენიუს გახსნა"
        >
          <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          <ul className="mobile-menu-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-cta">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              დამიკავშირდით
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

