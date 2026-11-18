import React, { useState, useMemo } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { ProjectCard } from '../cards/ProjectCard';
import { ProjectModal } from '../common/ProjectModal';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';
import type { Project } from '../../types';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ყველა');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['ყველა', 'Full Stack', 'Frontend', 'Mobile / UI'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'ყველა' || project.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section id="projects" className="section-container">
      <SectionTitle
        badge="პორტფოლიო"
        title="გამორჩეული"
        highlight="პროექტები"
        description="რეალური პროექტები, სადაც გამოყენებულია თანამედროვე React არქიტექტურა და სუფთა კოდი."
      />

      {/* Search Input for Projects */}
      <div className="projects-search-bar">
        <div className="search-input-wrapper">
          <Icon name="search" size={18} className="search-input-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="მოძებნეთ პროექტი სახელით ან ტექნოლოგიით (მაგ. React, TypeScript, Next.js)..."
            className="search-input-field"
            aria-label="პროექტის ძებნა"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="search-clear-btn"
              aria-label="ძებნის გასუფთავება"
            >
              <Icon name="close" size={16} />
            </button>
          )}
        </div>
      </div>

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

      {/* Results counter when searching */}
      {searchQuery && (
        <p className="search-results-hint">
          ნაპოვნია <strong>{filteredProjects.length}</strong> პროექტი
        </p>
      )}

      {/* Projects Grid or Empty State */}
      {filteredProjects.length === 0 ? (
        <div className="users-empty-box">
          <div className="users-empty-icon">
            <Icon name="search" size={36} />
          </div>
          <h3 className="users-empty-title">პროექტი ვერ მოიძებნა</h3>
          <p className="users-empty-desc">
            ძებნის პარამეტრებით პროექტები ვერ მოიძებნა.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('ყველა');
            }}
          >
            ფილტრის გასუფთავება
          </Button>
        </div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      )}

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
