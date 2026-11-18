import React from 'react';
import { personalInfo, services } from '../data/portfolioData';
import { Navbar } from '../components/sections/Navbar';
import { ServicesSection } from '../components/sections/ServicesSection';
import { Footer } from '../components/sections/Footer';
import { Icon } from '../components/common/Icon';
import '../App.css';

export const ServicesPage: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Navbar name={personalInfo.name} currentPage="services" />

      <main className="main-content">
        <div className="section-container pb-0">
          <div className="page-breadcrumb-nav">
            <a href="index.html" className="breadcrumb-back-btn">
              <Icon name="arrow-left" size={18} />
              <span>მთავარ გვერდზე დაბრუნება</span>
            </a>
            <div className="breadcrumb-pill">
              <span className="breadcrumb-dot"></span>
              სერვისები და შესაძლებლობები
            </div>
          </div>
        </div>

        <ServicesSection services={services} />
      </main>

      <Footer personalInfo={personalInfo} />
    </div>
  );
};

