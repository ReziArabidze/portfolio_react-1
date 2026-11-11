import React, { useState } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { SkillCard } from '../cards/SkillCard';
import type { Skill } from '../../types';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ყველა');

  const categories = ['ყველა', 'Frontend', 'Backend', 'Tools & DevOps', 'Design & Other'];

  const filteredSkills =
    activeCategory === 'ყველა'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-container">
      <SectionTitle
        badge="უნარები & სტეკი"
        title="ტექნოლოგიური"
        highlight="არსენალი"
        description="თანამედროვე ენები, ბიბლიოთეკები და ხელსაწყოები, რომლებსაც ყოველდღიურად ვიყენებ."
      />

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-tab-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid with Reusable SkillCard */}
      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

