export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
  type: 'work' | 'internship' | 'project' | 'education';
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineering Fellowship",
    company: "HEADSTARTER AI",
    location: "Remote",
    duration: "July 2024 - Sep 2024",
    description: "Developed a full-stack social media dashboard using React.js, Node.js, and Firebase to streamline content schedulingand analytics",
    technologies: ["React.js", "Node.js", "Firebase", "REST APIs", "Data Visualization"],
    achievements: [
      "Engineered a RESTful API to integrate with social media platforms, enabling automated post scheduling and data retrieval for Facebook, Twitter, and Instagram",
      "Designed and implemented interactive data visualization charts to display post performance metrics such as total views, likes, and peak engagement hours",
      "Built features that provided actionable insights to users through analytics-driven dashboards",
      "Engaged in weekly mentorship sessions with engineers from Google, Y Combinator, Stanford, Amazon, and venture-backed startups"
    ],
    type: "internship"
  },

  {
    id: 2,
    title: "Full Stack Development Intern",
    company: "Tata Power - DDL",
    location: "New Delhi",
    duration: "Nov 2024 - Feb 2025",
    description: "Developed a full-stack internal application using Angular, Node.js (Express.js), and SQL Server to streamline user management and authentication processes",
    technologies: ["Angular", "Node.js", "Express.js", "SQL Server", "REST APIs"],
    achievements: [
      "Architected a SQL database schema and implemented complex stored procedures and functions to automate user record creation and ensure data integrity",
      "Built and secured RESTful APIs using Express.js for user authentication and efficient data retrieval",
      "Developed a responsive front-end login and registration system with Angular, incorporating advanced form validation and error handling",
      "Implemented CORS management and security best practices to ensure safe and seamless client-server communication"
    ],
    type: "internship"
  },

  {
    id: 3,
    title: "Web Developer Intern",
    company: "F3News",
    location: "Remote",
    duration: "Aug 2025 - Dec 2025",
    description: "Designed and developed a responsive admin dashboard frontend with a focus on usability, accessibility, and clean UI/UX",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "UI/UX Design"],
    achievements: [
      "Improved the overall visual design and layout, enhancing consistency, readability, and user experience across admin pages",
      "Built and enhanced admin-side features including role-based views for different user types",
      "Developed tools for writers to efficiently create, edit, and manage content",
      "Optimized frontend performance and responsiveness for a seamless user experience"
    ],
    type: "internship"
  }
];