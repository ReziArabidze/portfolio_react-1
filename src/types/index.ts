export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile / UI' | 'Other';
  image: string;
  tags: string[];
  features?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools & DevOps' | 'Design & Other';
  level: number; // 0 - 100
  iconName: string;
  description?: string;
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
  features: string[];
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bioParagraphs: string[];
  location: string;
  email: string;
  phone: string;
  availability: string;
  socials: SocialLink[];
}
