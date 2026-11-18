import React from 'react';
import { personalInfo, stats, services, skills, projects, experiences } from '../data/portfolioData';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { ServicesSection } from '../components/sections/ServicesSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero personalInfo={personalInfo} stats={stats} />
      <About personalInfo={personalInfo} />
      <ServicesSection services={services} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experiences={experiences} />
      <ContactSection personalInfo={personalInfo} />
    </>
  );
};

