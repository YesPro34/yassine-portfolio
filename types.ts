export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location?: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  type?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}