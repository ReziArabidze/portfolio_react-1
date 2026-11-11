import React from 'react';
import { Icon } from '../common/Icon';
import type { PersonalInfo } from '../../types';

interface FooterProps {
  personalInfo: PersonalInfo;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#hero" className="footer-logo">
            <span className="logo-icon">
              <Icon name="code" size={20} />
            </span>
            <span className="logo-text">
              {personalInfo.name.split(' ')[0]}
              <span className="logo-dot">.dev</span>
            </span>
          </a>
          <p className="footer-tagline">
            თანამედროვე, სუფთა და მაღალმწარმოებლური React ვებ გადაწყვეტები.
          </p>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-heading">ნავიგაცია</h4>
          <ul className="footer-links">
            <li><a href="#hero">მთავარი</a></li>
            <li><a href="#about">ჩემ შესახებ</a></li>
            <li><a href="#services">სერვისები</a></li>
            <li><a href="#skills">უნარები</a></li>
            <li><a href="#projects">პროექტები</a></li>
            <li><a href="#contact">კონტაქტი</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-heading">სოციალური ქსელები</h4>
          <ul className="footer-links">
            {personalInfo.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <Icon name={social.iconName} size={16} />
                  <span>{social.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-scroll-top">
          <button
            type="button"
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="ზემოთ დაბრუნება"
          >
            <Icon name="chevron-up" size={22} />
          </button>
          <span className="scroll-top-label">ზემოთ</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {CURRENT_YEAR} {personalInfo.name}. ყველა უფლება დაცულია.
        </p>
        <p className="footer-built-with">
          დამზადებულია სიყვარულით <span>React</span> & <span>TypeScript</span>-ით.
        </p>
      </div>
    </footer>
  );
};
