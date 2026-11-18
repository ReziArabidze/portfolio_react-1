import React from 'react';
import { personalInfo, skills } from '../data/portfolioData';
import { Navbar } from '../components/sections/Navbar';
import { SkillsSection } from '../components/sections/SkillsSection';
import { Footer } from '../components/sections/Footer';
import { Icon } from '../components/common/Icon';
import '../App.css';

export const SkillsPage: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Navbar name={personalInfo.name} currentPage="skills" />

      <main className="main-content">
        <div className="section-container pb-0">
          <div className="page-breadcrumb-nav">
            <a href="index.html" className="breadcrumb-back-btn">
              <Icon name="arrow-left" size={18} />
              <span>მთავარ გვერდზე დაბრუნება</span>
            </a>
            <div className="breadcrumb-pill">
              <span className="breadcrumb-dot"></span>
              ტექნოლოგიური უნარები & Stack
            </div>
          </div>
        </div>

        <SkillsSection skills={skills} />
      </main>

      <Footer personalInfo={personalInfo} />
    </div>
  );
};

