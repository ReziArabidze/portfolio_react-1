import React from 'react';
import { Card } from '../common/Card';
import { Icon } from '../common/Icon';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="service-card" hoverable={true} glow={true}>
      <div className="service-icon-wrapper">
        <Icon name={service.iconName} size={30} />
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>

      <ul className="service-features-list">
        {service.features.map((feature, idx) => (
          <li key={idx} className="service-feature-item">
            <span className="service-check-icon">
              <Icon name="check" size={14} />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

