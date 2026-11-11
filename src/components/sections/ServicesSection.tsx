import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { ServiceCard } from '../cards/ServiceCard';
import type { Service } from '../../types';

interface ServicesSectionProps {
  services: Service[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section id="services" className="section-container">
      <SectionTitle
        badge="სერვისები"
        title="რისი შეთავაზება"
        highlight="შემიძლია"
        description="სრული ციკლის ვებ დეველოპმენტი — იდეიდან მზა, გამართულ პროდუქტამდე."
      />

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

