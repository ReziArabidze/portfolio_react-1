import React from 'react';
import { Card } from '../common/Card';
import { Icon } from '../common/Icon';
import type { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Card className="skill-card" hoverable={true}>
      <div className="skill-card-header">
        <div className="skill-icon-box">
          <Icon name={skill.iconName} size={24} />
        </div>
        <div className="skill-info">
          <h4 className="skill-name">{skill.name}</h4>
          <span className="skill-category">{skill.category}</span>
        </div>
        <span className="skill-percentage">{skill.level}%</span>
      </div>

      <div className="skill-progress-bar-bg">
        <div
          className="skill-progress-bar-fill"
          style={{ width: `${skill.level}%` }}
        />
      </div>

      {skill.description && (
        <p className="skill-description">{skill.description}</p>
      )}
    </Card>
  );
};

