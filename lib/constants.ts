import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiMongodb,
  SiFirebase,
  SiPhp,
  SiNodedotjs,
  SiGit,
  SiPostman,
  SiGithub,
  SiFigma,
  SiCanva,
  SiOpenai,
  SiGoogle,
  SiElevenlabs,
  SiGithubcopilot,
  SiSaturn,
} from "react-icons/si";
import { FaCode, FaHeart, FaRobot, FaTools } from "react-icons/fa";
import { GiSpermWhale } from "react-icons/gi";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
};

export type Skill = {
  name: string;
  icon: React.ElementType;
  level?: number;
  category: "frontend" | "backend" | "design" | "tools" | "ai";
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce solution with real-time inventory, secure payments, and an intuitive admin dashboard.",
    image: "/assets/ecommerce.png",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Stripe", "Firebase"],
    demoUrl: "https://halloweenk.vercel.app/",
    githubUrl: "https://github.com/sarthak0422/React_Ecommerce_Website.git",
  },
  {
    id: 2,
    title: "Decentralized File Storage",
    description:
      "Smart task management app that uses AI to prioritize and categorize tasks, with team collaboration features.",
    image: "/assets/decenteralizedfilestorage.png",
    tags: ["Python", "Html", "CSS", "SQLite", "Flask"],
    demoUrl:
      "https://sarthak0422.github.io/Blockchain-based-File-Storage-main/",
    githubUrl:
      "https://github.com/sarthak0422/Blockchain-based-File-Storage-main.git",
  },
  // {
  //   id: 3,
  //   title: "PumpkinAI Personal Assistant",
  //   description: "It is a personal assistant that helps you with your daily tasks, reminders, and scheduling, using AI to enhance productivity.",
  //   image: "/assets/pumpkinai.png",
  //   tags: ["Python", "Google_Studio", "PyQT6","Elevenlabs", "OpenAI",],
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  // },
  {
    id: 4,
    title: "Weather App",
    description:
      "It is a modern weather forecasting application built with React JS, TypeScript, and Tailwind CSS, featuring real-time data from the OpenWeather API, advanced data fetching using Tanstack Query, and interactive charts with Recharts, all styled using Shadcn UI.",
    image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg",
    tags: ["React JS","TypeScript","Tailwind CSS","Tanstack Query","Recharts","OpenWeather API","Shadcn UI",],
    demoUrl: "https://climate-sarthak.vercel.app/",
    githubUrl: "https://github.com/sarthak0422/ClimatEApp",
  },
  // {
  //   id: 5,
  //   title: "5",
  //   description: "Comprehensive fitness tracking app with personalized workout plans, nutrition tracking, and progress analytics.",
  //   image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg",
  //   tags: ["React Native", "GraphQL", "Node.js", "Firebase", "TensorFlow"],
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  // },
  // {
  //   id: 6,
  //   title: "6",
  //   description: "Comprehensive fitness tracking app with personalized workout plans, nutrition tracking, and progress analytics.",
  //   image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg",
  //   tags: ["React Native", "GraphQL", "Node.js", "Firebase", "TensorFlow"],
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  // },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React.js", icon: SiReact, category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },
  { name: "HTML5", icon: SiHtml5, category: "frontend" },
  { name: "CSS3", icon: SiCss3, category: "frontend" },
  { name: "Flutter", icon: SiFlutter, category: "frontend" },

  // Backend
  { name: "MongoDB", icon: SiMongodb, category: "backend" },
  { name: "Firebase", icon: SiFirebase, category: "backend" },
  { name: "PHP", icon: SiPhp, category: "backend" },
  { name: "Node.js", icon: SiNodedotjs, category: "backend" },

  // Tools
  { name: "Git", icon: SiGit, category: "tools" },
  { name: "VS Code", icon: FaCode, category: "tools" },
  { name: "Postman", icon: SiPostman, category: "tools" },
  { name: "GitHub", icon: SiGithub, category: "tools" },

  // Design
  { name: "Figma", icon: SiFigma, category: "design" },
  { name: "Canva", icon: SiCanva, category: "design" },

  // AI
  { name: "ChatGPT", icon: SiOpenai, category: "ai" },
  { name: "Gemini", icon: SiGoogle, category: "ai" },
  { name: "Google AI Studio", icon: SiGoogle, category: "ai" },
  { name: "Lovable", icon: FaHeart, category: "ai" },
  { name: "DeepSeek", icon: GiSpermWhale, category: "ai" },
  { name: "Gamma", icon: SiGoogle, category: "ai" },
  { name: "Copilot", icon: SiGithubcopilot, category: "ai" },
  { name: "Grok", icon: SiSaturn, category: "ai" },
  { name: "Elevenlabs", icon: SiElevenlabs, category: "ai" },
];
