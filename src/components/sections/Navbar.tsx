import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'skills'
  | 'projects'
  | 'users'
  | 'experience'
  | 'contact';

interface NavbarProps {
  name: string;
  currentPage?: PageId;
}

export const Navbar: React.FC<NavbarProps> = ({ name, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Automatically detect active page from prop or window location
  const getActivePage = (): PageId => {
    if (currentPage) return currentPage;
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase();
    if (path.includes('about')) return 'about';
    if (path.includes('services')) return 'services';
    if (path.includes('skills')) return 'skills';
    if (path.includes('projects')) return 'projects';
    if (path.includes('experience')) return 'experience';
    if (path.includes('users')) return 'users';
    return 'home';
  };

  const activePage = getActivePage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks: { label: string; href: string; id: PageId; badge?: string }[] = [
    { label: 'მთავარი', href: 'index.html', id: 'home' },
    { label: 'ჩემ შესახებ', href: 'about.html', id: 'about' },
    { label: 'სერვისები', href: 'services.html', id: 'services' },
    { label: 'უნარები', href: 'skills.html', id: 'skills' },
    { label: 'პროექტები', href: 'projects.html', id: 'projects' },
    { label: 'მომხმარებლები', href: 'users.html', id: 'users', badge: 'API' },
    { label: 'გამოცდილება', href: 'experience.html', id: 'experience' },
    { label: 'კონტაქტი', href: 'index.html#contact', id: 'contact' },
  ];

  return (
    <header className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="index.html" className="navbar-logo">
          <span className="logo-icon">
            <Icon name="code" size={20} />
          </span>
          <span className="logo-text">
            {name.split(' ')[0]}
            <span className="logo-dot">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav" aria-label="მთავარი ნავიგაცია">
          <ul className="navbar-links">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;

              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="nav-badge-pill">{link.badge}</span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="navbar-cta">
          {activePage === 'home' ? (
            <Button
              href="index.html#contact"
              variant="primary"
              size="sm"
              icon={<Icon name="arrow-right" size={16} />}
            >
              დამიკავშირდით
            </Button>
          ) : (
            <Button
              href="index.html"
              variant="secondary"
              size="sm"
              icon={<Icon name="arrow-left" size={16} />}
              iconPosition="left"
            >
              მთავარი
            </Button>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'მენიუს დახურვა' : 'მენიუს გახსნა'}
          aria-expanded={mobileMenuOpen}
        >
          <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown-wrapper">
          <div
            className="mobile-menu-backdrop"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="mobile-menu-dropdown">
            <ul className="mobile-menu-links">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;

                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="nav-badge-pill">{link.badge}</span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mobile-menu-cta">
              {activePage === 'home' ? (
                <Button
                  href="index.html#contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  დამიკავშირდით
                </Button>
              ) : (
                <Button
                  href="index.html"
                  variant="secondary"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                  icon={<Icon name="arrow-left" size={16} />}
                  iconPosition="left"
                >
                  მთავარ გვერდზე დაბრუნება
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
