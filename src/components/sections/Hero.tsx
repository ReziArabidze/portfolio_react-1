import React from 'react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { StatCard } from '../common/StatCard';
import { Icon } from '../common/Icon';
import type { PersonalInfo, Stat } from '../../types';

interface HeroProps {
  personalInfo: PersonalInfo;
  stats: Stat[];
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, stats }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* Availability Badge */}
        <div className="hero-badge-wrapper">
          <Badge variant="accent" size="md" icon={<span className="status-pulse" />}>
            {personalInfo.availability}
          </Badge>
        </div>

        {/* Main Title */}
        <h1 className="hero-title">
          გამარჯობა, მე ვარ{' '}
          <span className="gradient-text hero-name">{personalInfo.name}</span>
        </h1>

        <h2 className="hero-subtitle-role">{personalInfo.title}</h2>

        <p className="hero-description">{personalInfo.subtitle}</p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <Button
            href="#projects"
            variant="primary"
            size="lg"
            icon={<Icon name="arrow-right" size={18} />}
          >
            პროექტების ნახვა
          </Button>

          <Button
            href="#contact"
            variant="outline"
            size="lg"
            icon={<Icon name="mail" size={18} />}
            iconPosition="left"
          >
            მომწერეთ
          </Button>

          <Button
            href="https://github.com"
            variant="ghost"
            size="lg"
            icon={<Icon name="github" size={20} />}
            aria-label="GitHub პროფილი"
          >
            GitHub
          </Button>
        </div>

        {/* Code Preview Floating Card */}
        <div className="hero-code-snippet">
          <div className="code-header">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="code-filename">Developer.ts</span>
          </div>
          <pre className="code-body">
            <code>
              <span className="code-keyword">const</span> developer = &#123;{'\n'}
              {'  '}name: <span className="code-string">'{personalInfo.name}'</span>,{'\n'}
              {'  '}role: <span className="code-string">'{personalInfo.title}'</span>,{'\n'}
              {'  '}passion: <span className="code-string">'Building scalable modern web apps'</span>,{'\n'}
              {'  '}skills: [<span className="code-string">'React'</span>, <span className="code-string">'TypeScript'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'REST APIs'</span>],{'\n'}
              {'  '}status: <span className="code-string">'Available for hire'</span>{'\n'}
              &#125;;
            </code>
          </pre>
        </div>

        {/* Stats Grid using Reusable StatCard Components */}
        <div className="hero-stats-grid">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

