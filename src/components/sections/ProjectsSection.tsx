import React, { useState } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { ProjectCard } from '../cards/ProjectCard';
import { ProjectModal } from '../common/ProjectModal';
import type { Project } from '../../types';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ყველა');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['ყველა', 'Full Stack', 'Frontend', 'Mobile / UI'];

  const filteredProjects =
    activeCategory === 'ყველა'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-container">
      <SectionTitle
        badge="პორტფოლიო"
        title="გამორჩეული"
        highlight="პროექტები"
        description="რეალური პროექტები, სადაც გამოყენებულია თანამედროვე React არქიტექტურა და სუფთა კოდი."
      />

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-tab-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid using Reusable ProjectCard */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
