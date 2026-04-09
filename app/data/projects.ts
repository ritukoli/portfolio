export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  hasDemo?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Krishi Sewa AI",
    description: "A multi-agent supervisor system built with LangGraph and FastAPI to assist farmers with agricultural queries. Features specialized agents for weather forecasting, crop recommendations, and government policy lookup. Built with a TypeScript frontend and Python backend, enabling intelligent routing of queries to the right domain agent.",
    image: "/krishi_sewa_ai_banner.svg",
    tags: ["LangGraph", "FastAPI", "TypeScript", "Python", "LangChain"],
    liveUrl: "",
    githubUrl: "https://github.com/ritukoli/Krishi-Sewa-AI",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "A full-stack MERN social media analytics dashboard that integrates with Facebook, Twitter, and Instagram via a RESTful API for automated post scheduling and data retrieval. Features interactive data visualization charts displaying post performance metrics — total views, likes, and peak engagement hours — and delivers actionable insights through analytics-driven dashboards.",
    image: "/social media dashboard.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "REST API"],
    liveUrl: "",
    githubUrl: "https://github.com/ritukoli/social-media-tool",
  },

  {
    id: 3,
    title: "Excel Mock Interviewer",
    description: "A multi-turn agentic mock interviewer specializing in Excel and data skills. Built with LangChain and LangGraph, powered by Gemini 1.5 Flash. Uses tool-calling, Google Sheets API integration, and Pydantic validation to simulate realistic interview sessions with adaptive follow-up questions and performance feedback.",
    image: "/excel_mock_interviewer.svg",
    tags: ["LangChain", "LangGraph", "Gemini 1.5 Flash", "Google Sheets API", "Python"],
    liveUrl: "",
    githubUrl: "https://github.com/ritukoli/excel_mock_interview-agentic-ai",
  },
  {
    id: 4,
    title: "Persona-Adaptive Customer Support Agent",
    description: "An intelligent customer support agent that detects user persona from conversation context and adapts its tone and responses accordingly. Built with LangChain and Cohere, featuring knowledge base retrieval and a human escalation pathway for complex queries that fall outside automated resolution.",
    image: "/AI-customer-service-agents-1680x1120-1.webp",
    tags: ["LangChain", "Cohere", "Python", "RAG"],
    liveUrl: "",
    githubUrl: "https://github.com/ritukoli/Persona-Adaptive-Customer-Support-Agent",
  },
  {
    id: 5,
    title: "docqueryAI",
    description: "A RAG-based document Q&A tool that lets users upload documents and ask natural language questions against their content. Built with Python and LangChain, it chunks and embeds documents for semantic retrieval, then generates grounded answers with source attribution.",
    image: "/doquery.jpg",
    tags: ["Python", "LangChain", "RAG", "LangGraph"],
    liveUrl: "",
    githubUrl: "https://github.com/ritukoli/docqueryAi",
  },
  {
    id: 6,
    title: "Inventory Management System",
    description: "A full-stack inventory management system with complete CRUD operations for streamlined stock tracking. Features real-time updates, search functionality, and a clean Material-UI interface backed by Firebase Firestore for live data sync.",
    image: "/erp-inventory_management.jpg",
    tags: ["React", "Next.js", "Firebase", "Firestore", "Material-UI", "JavaScript"],
    liveUrl: "",
    githubUrl: "https://github.com/ritukoli/pantry_management",
  }
];
