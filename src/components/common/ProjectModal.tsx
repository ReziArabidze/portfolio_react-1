import React, { useEffect } from 'react';
import { Badge } from './Badge';
import { Button } from './Button';
import { Icon } from './Icon';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="დახურვა"
        >
          <Icon name="close" size={20} />
        </button>

        <div className="modal-image-wrapper">
          <img src={project.image} alt={project.title} className="modal-image" />
          <div className="modal-image-badges">
            <Badge variant="primary" size="md">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="accent" size="md" icon={<Icon name="star" size={14} />}>
                Featured
              </Badge>
            )}
          </div>
        </div>

        <div className="modal-body">
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-desc">
            {project.longDescription || project.description}
          </p>

          {project.features && project.features.length > 0 && (
            <div className="modal-features-section">
              <h4 className="modal-section-title">ძირითადი მახასიათებლები</h4>
              <ul className="modal-features-list">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <span className="feature-bullet">
                      <Icon name="check" size={14} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-tech-section">
            <h4 className="modal-section-title">ტექნოლოგიური სტეკი</h4>
            <div className="modal-tags">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="neutral" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            {project.demoUrl && (
              <Button
                href={project.demoUrl}
                variant="primary"
                size="md"
                icon={<Icon name="external" size={16} />}
              >
                ლაივ დემო
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="outline"
                size="md"
                icon={<Icon name="github" size={16} />}
                iconPosition="left"
              >
                GitHub კოდი
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

