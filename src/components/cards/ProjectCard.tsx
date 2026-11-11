import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <Card
      className="project-card"
      hoverable={true}
      onClick={onSelect ? () => onSelect(project) : undefined}
    >
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
        <div className="project-image-overlay">
          <Badge variant="primary" size="sm" className="project-category-badge">
            {project.category}
          </Badge>
          {project.featured && (
            <Badge variant="accent" size="sm" icon={<Icon name="star" size={12} />}>
              Featured
            </Badge>
          )}
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="neutral" size="sm">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="project-actions" onClick={(e) => e.stopPropagation()}>
          {onSelect && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onSelect(project)}
            >
              დეტალურად
            </Button>
          )}
          {project.demoUrl && (
            <Button
              href={project.demoUrl}
              variant="primary"
              size="sm"
              icon={<Icon name="external" size={16} />}
              iconPosition="right"
            >
              Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="ghost"
              size="sm"
              icon={<Icon name="github" size={16} />}
              aria-label="GitHub Repository"
            >
              Code
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
