import React from 'react';
import { personalInfo, experiences } from '../data/portfolioData';
import { Navbar } from '../components/sections/Navbar';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { Footer } from '../components/sections/Footer';
import { Icon } from '../components/common/Icon';
import '../App.css';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Navbar name={personalInfo.name} currentPage="experience" />

      <main className="main-content">
        <div className="section-container pb-0">
          <div className="page-breadcrumb-nav">
            <a href="index.html" className="breadcrumb-back-btn">
              <Icon name="arrow-left" size={18} />
              <span>მთავარ გვერდზე დაბრუნება</span>
            </a>
            <div className="breadcrumb-pill">
              <span className="breadcrumb-dot"></span>
              სამუშაო გამოცდილება & კარიერა
            </div>
          </div>
        </div>

        <ExperienceSection experiences={experiences} />
      </main>

      <Footer personalInfo={personalInfo} />
    </div>
  );
};

