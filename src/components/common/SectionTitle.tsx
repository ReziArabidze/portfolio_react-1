import React from 'react';
import { Badge } from './Badge';

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) => {
  return (
    <div className={`section-header section-header-${align} ${className}`}>
      {badge && (
        <Badge variant="accent" size="md" className="section-badge">
          {badge}
        </Badge>
      )}
      <h2 className="section-title">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};

