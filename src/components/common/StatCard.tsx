import React from 'react';
import { Card } from './Card';
import { Icon } from './Icon';
import type { Stat } from '../../types';

interface StatCardProps {
  stat: Stat;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <Card className="stat-card" glow={true}>
      <div className="stat-icon-wrapper">
        <Icon name={stat.iconName} size={26} />
      </div>
      <div className="stat-value gradient-text">{stat.value}</div>
      <div className="stat-label">{stat.label}</div>
    </Card>
  );
};

