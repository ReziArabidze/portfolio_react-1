import { personalInfo, stats, services, skills, projects, experiences } from './data/portfolioData';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { ServicesSection } from './components/sections/ServicesSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      {/* Navigation Header */}
      <Navbar name={personalInfo.name} />

      {/* Main Content Sections */}
      <main className="main-content">
        <Hero personalInfo={personalInfo} stats={stats} />
        <About personalInfo={personalInfo} />
        <ServicesSection services={services} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experiences={experiences} />
        <ContactSection personalInfo={personalInfo} />
      </main>

      {/* Footer */}
      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App;
