import { Experience, Project, SkillCategory, Education } from './types';

export const PERSONAL_INFO = {
  name: "Yassine Echamkh",
  title: "Software Engineer",
  email: "echamkh.yassine@gmail.com",
  phone: "07 77 95 31 80",
  location: "HAY RMEL NR 74 TARRAST INEZGANE, Agadir",
  summary: "Software Engineer specialized in Full Stack JavaScript, proficient in Next.js, NestJS, MongoDB, and PostgreSQL. Strong experience in designing high-performance APIs and integrating distributed systems following best practices (testing, CI/CD). Independent and detail-oriented, I adapt quickly to agile and collaborative environments."
};

export const EXPERIENCES: Experience[] = [
  {
    id: "techco",
    role: "Backend Developer",
    company: "TechCo",
    location: "Casablanca",
    duration: "Oct 2025 – Present",
    description: "Built backend for Iron Wheels logistics platform.",
    tech: ["NestJS", "Prisma ORM", "PostgreSQL", "openAPI/Swagger", "Socket.io", "Firebase Cloud Messaging"],
    achievements: [
      "Developed backend for logistics platform assigning orders to Track drivers.",
      "Implemented real-time system (Custom WebSocket) & FCM notifications.",
      "Handled order dispatching, driver management, PDF generation, and auth.",
      "Optimized architecture with NestJS & Prisma, improving SQL schema."
    ]
  },
  {
    id: "tértalink",
    role: "Backend Developer",
    company: "Tértalink",
    location: "France, Remote",
    duration: "Feb 2025 – May 2025",
    description: "Developed financial accounting SaaS backend.",
    tech: ["TypeScript", "NestJS", "Prisma ORM", "PostgreSQL", "Jest Testing", "Domain Driven Design"],
    achievements: [
      "Maintenance of robust RESTful APIs for financial SaaS.",
      "Applied Domain-Driven Design (DDD) principles.",
      "Integrated PostgreSQL via Prisma ORM.",
      "Wrote Unit and Integration tests with Jest."
    ]
  },
  {
    id: "energiedin",
    role: "Full Stack Developer Intern (MERN)",
    company: "Energiedin",
    location: "Agadir",
    duration: "Feb 2024 – Jun 2024",
    description: "Legal consultation platform with ML integration.",
    tech: ["React", "Express.js", "MongoDB", "Python", "Docker", "REST APIs", "ML/AI",],
    achievements: [
      "Developed legal consultation platform.",
      "Backend with Express.js & MongoDB.",
      "Integrated Python ML model for client review classification (90% accuracy).",
      "Deployed project using Docker containers."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Web Development",
    icon: "Globe",
    skills: ["React.js", "Next.js", "NestJS", "Express.js", "REST APIs", "TailwindCSS"]
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM"]
  },
  {
    title: "DevOps & Cloud",
    icon: "Cloud",
    skills: ["Docker", "AWS (EC2, S3)", "CI/CD", "Git"]
  },
  {
    title: "Testing & Quality",
    icon: "CheckCircle",
    skills: ["Jest", "Postman", "ESLint", "Validation"]
  },
  {
    title: "Languages",
    icon: "Code",
    skills: ["TypeScript", "Python"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AtlasTawjih",
    description: "Web platform for centralized and automated management of admissions to major schools and universities.",
    tech: ["Nest.js", "Next.js", "PostgreSQL"],
    type: "Web Platform"
  },
  {
    title: "E-learning Platform",
    description: "Online learning web application using Next.js and YouTube API to allow students to access interactive IT courses via videos.",
    tech: ["Next.js", "YouTube API"],
    type: "Web App"
  },
  {
    title: "School Bus Tracking",
    description: "Mobile and web app ensuring real-time tracking of school buses to enhance student safety.",
    tech: ["React Native", "Next.js", "Express.js", "MongoDB", "Google Maps API"],
    type: "Mobile & Web"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master’s Degree in AI & Software Engineering",
    institution: "Faculté des Sciences et Techniques Marrakech",
    year: "2022 – 2024"
  },
  {
    degree: "Bachelor Degree in Distributed Systems",
    institution: "Faculté des Sciences et Techniques Marrakech",
    year: "2019 – 2022"
  }
];