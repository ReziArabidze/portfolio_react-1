import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';
import type { PersonalInfo } from '../../types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

export const About: React.FC<AboutProps> = ({ personalInfo }) => {
  const highlights = [
    {
      iconName: 'code',
      title: 'სუფთა და მოდულური კოდი',
      description: 'DRY პრინციპები, SOLID არქიტექტურა და მრავალჯერადი React კომპონენტები.',
    },
    {
      iconName: 'zap',
      title: 'მაქსიმალური სისწრაფე',
      description: 'ოპტიმიზებული რენდერინგი, ასინქრონული ჩატვირთვა და სწრაფი რეაგირება.',
    },
    {
      iconName: 'palette',
      title: 'მომხმარებლის გამოცდილება (UX)',
      description: 'ინტუიციური, ესთეტიკური და მოსახერხებელი ინტერფეისები ნებისმიერ მოწყობილობაზე.',
    },
  ];

  return (
    <section id="about" className="section-container">
      <SectionTitle
        badge="ჩემ შესახებ"
        title="გაიცანით დეველოპერი"
        highlight="კულისებს მიღმა"
        description="მოკლე ინფორმაცია ჩემი გამოცდილების, ფილოსოფიისა და მიდგომების შესახებ."
      />

      <div className="about-grid">
        {/* Left Column: Personal Card */}
        <Card className="about-profile-card" glow={true}>
          <div className="about-avatar-container">
            <div className="about-avatar-placeholder">
              <span className="avatar-initials">RB</span>
            </div>
            <div className="about-avatar-badge">
              <Icon name="check" size={16} />
            </div>
          </div>

          <h3 className="about-name">{personalInfo.name}</h3>
          <p className="about-role">{personalInfo.title}</p>

          <div className="about-details-list">
            <div className="about-detail-item">
              <span className="detail-icon"><Icon name="map-pin" size={18} /></span>
              <span className="detail-text">{personalInfo.location}</span>
            </div>
            <div className="about-detail-item">
              <span className="detail-icon"><Icon name="mail" size={18} /></span>
              <span className="detail-text">{personalInfo.email}</span>
            </div>
            <div className="about-detail-item">
              <span className="detail-icon"><Icon name="phone" size={18} /></span>
              <span className="detail-text">{personalInfo.phone}</span>
            </div>
          </div>

          <div className="about-socials">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-btn"
                aria-label={social.name}
              >
                <Icon name={social.iconName} size={18} />
              </a>
            ))}
          </div>

          <div className="about-cv-button">
            <Button
              href="#contact"
              variant="outline"
              size="sm"
              icon={<Icon name="arrow-right" size={16} />}
              className="w-full"
            >
              კონსულტაცია
            </Button>
          </div>
        </Card>

        {/* Right Column: Narrative & Values */}
        <div className="about-content">
          <div className="about-narrative">
            {personalInfo.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights Reusable Mini Cards */}
          <div className="about-highlights-grid">
            {highlights.map((item, index) => (
              <Card key={index} className="about-highlight-card" hoverable={true}>
                <div className="highlight-icon">
                  <Icon name={item.iconName} size={22} />
                </div>
                <h4 className="highlight-title">{item.title}</h4>
                <p className="highlight-desc">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

