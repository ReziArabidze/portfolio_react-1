import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Icon } from '../common/Icon';
import type { ExperienceItem } from '../../types';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience" className="section-container">
      <SectionTitle
        badge="გამოცდილება"
        title="სამუშაო & პროფესიული"
        highlight="ისტორია"
        description="კომპანიები და პროექტები, რომლებშიც მივიღე აქტიური მონაწილეობა."
      />

      <div className="timeline-container">
        <div className="timeline-line" />

        <div className="timeline-items">
          {experiences.map((item, index) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot">
                  <Icon name="briefcase" size={14} />
                </div>
              </div>

              <div className="timeline-content">
                <Card className="timeline-card" hoverable={true}>
                  <div className="timeline-header">
                    <Badge variant="accent" size="sm" icon={<Icon name="calendar" size={12} />}>
                      {item.period}
                    </Badge>
                    <span className="timeline-index">#0{index + 1}</span>
                  </div>

                  <h3 className="timeline-role">{item.role}</h3>
                  <h4 className="timeline-company">{item.company}</h4>

                  <p className="timeline-description">{item.description}</p>

                  <div className="timeline-tags">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="neutral" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

