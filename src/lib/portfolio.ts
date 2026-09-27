import type { LucideIcon } from "lucide-react";
import {
  Award,
  Brain,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

export const profile = {
  name: "Alif Muhammad Aditya",
  shortName: "Alif",
  title: "Fullstack Developer & Cloud Computing Enthusiast",
  location: "Indonesia",
  university: "Universitas Islam Riau",
  linkedin: "https://www.linkedin.com/in/aalifadityaa/",
  github: "https://github.com/aalifadityaa",
  summary:
    "Backend-focused developer with hands-on cloud computing, REST API, Firebase, and AI integration experience. I like turning practical problems into reliable systems that are clear to use, test, and improve.",
  focus: ["Backend APIs", "Cloud Computing", "AI Integration", "System Design"],
};

export type ProjectTone = "teal" | "blue" | "amber" | "violet";

export type Project = {
  slug: string;
  title: string;
  type: string;
  role: string;
  period: string;
  summary: string;
  outcome: string;
  tags: string[];
  tone: ProjectTone;
  icon: LucideIcon;
  href?: string;
  details: string[];
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "gotanny",
    title: "GoTanny",
    type: "Capstone Project",
    role: "Full Stack & AI Engineer",
    period: "Semester 7",
    summary:
      "Plant disease detection and treatment assistant that combines a web interface, backend services, and LLM-based guidance.",
    outcome:
      "Designed an LLM orchestration flow with fallback behavior so users can still receive treatment guidance when the primary response path is unavailable.",
    tags: ["React", "Node.js", "Python", "Firebase", "Groq", "Llama"],
    tone: "teal",
    icon: Brain,
    href: profile.linkedin,
    details: [
      "Built a practical diagnosis workflow for plant health questions and treatment recommendations.",
      "Connected frontend flows to backend services and AI response handling.",
      "Focused on resilience, readable API behavior, and useful outputs for non-technical users.",
    ],
    metrics: [
      { label: "Role", value: "Full stack + AI" },
      { label: "Domain", value: "AgriTech" },
      { label: "Core", value: "LLM orchestration" },
    ],
  },
  {
    slug: "diabesafe",
    title: "DiabeSafe",
    type: "Bangkit Academy Capstone",
    role: "Backend Developer",
    period: "2024",
    summary:
      "Mobile health application for early diabetes risk detection using REST APIs and machine learning model integration.",
    outcome:
      "Implemented backend endpoints that serve ML predictions to the Android app and support user data flows for the product prototype.",
    tags: ["Python", "REST API", "ML Model", "Cloud", ".h5"],
    tone: "blue",
    icon: Server,
    href: profile.linkedin,
    details: [
      "Created API surfaces for prediction requests and app integration.",
      "Worked with model artifacts and cloud deployment constraints.",
      "Collaborated across mobile, machine learning, and cloud responsibilities in the capstone team.",
    ],
    metrics: [
      { label: "Track", value: "Cloud" },
      { label: "Product", value: "HealthTech" },
      { label: "Output", value: "Prediction API" },
    ],
  },
  {
    slug: "nusaco",
    title: "NUSACO",
    type: "Marketplace Prototype",
    role: "Project Manager",
    period: "Semester 3",
    summary:
      "Export-import marketplace concept with community learning features and a joint shipment workflow for small sellers.",
    outcome:
      "Led planning and system analysis, including DFD, ERD, and product concepts that earned Best Project of Class 2022.",
    tags: ["TypeScript", "DFD", "ERD", "Product Planning", "Team Lead"],
    tone: "amber",
    icon: Network,
    href: profile.linkedin,
    details: [
      "Defined the core marketplace workflow and supporting education/community features.",
      "Led system blueprinting through DFD Level 1, DFD Level 2, and ERD deliverables.",
      "Coordinated team execution around a clear product story and technical model.",
    ],
    metrics: [
      { label: "Recognition", value: "Best project" },
      { label: "Role", value: "PM" },
      { label: "Scope", value: "Marketplace" },
    ],
  },
  {
    slug: "retyan-computer",
    title: "Retyan Computer",
    type: "Internship Experience",
    role: "IT Support Intern",
    period: "Internship",
    summary:
      "Technical support experience covering troubleshooting, computer assembly, CCTV setup, and customer-facing problem solving.",
    outcome:
      "Built practical infrastructure instincts by diagnosing hardware and software issues in real service conditions.",
    tags: ["Troubleshooting", "Hardware", "CCTV", "PC Building", "Support"],
    tone: "violet",
    icon: ShieldCheck,
    href: profile.linkedin,
    details: [
      "Handled hardware and software troubleshooting for everyday customer issues.",
      "Supported CCTV installation and system setup.",
      "Strengthened practical communication while explaining technical problems clearly.",
    ],
    metrics: [
      { label: "Area", value: "IT support" },
      { label: "Work", value: "Hands-on" },
      { label: "Skill", value: "Diagnostics" },
    ],
  },
];

export type Certification = {
  slug: string;
  title: string;
  issuer: string;
  detail: string;
  skills: string[];
  icon: LucideIcon;
  href?: string;
};

export const certifications: Certification[] = [
  {
    slug: "bangkit-academy-cloud-computing",
    title: "Bangkit Academy 2024 Graduate",
    issuer: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
    detail:
      "Cloud Computing learning path with capstone collaboration, professional readiness, and distinction-level performance noted in the existing portfolio.",
    skills: ["Cloud Computing", "Backend APIs", "Team Capstone", "Professional Skills"],
    icon: GraduationCap,
    href: profile.linkedin,
  },
  {
    slug: "google-cloud-skills-boost",
    title: "Google Cloud Skills Boost",
    issuer: "Google Cloud",
    detail:
      "Training across Compute Engine, networking, security, and cloud architecture fundamentals.",
    skills: ["Compute Engine", "VPC", "Networking", "Cloud Security"],
    icon: Cloud,
    href: profile.linkedin,
  },
  {
    slug: "aws-cloud-practitioner-essentials",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    detail:
      "Foundation in AWS services, cloud concepts, pricing, architecture, and shared responsibility.",
    skills: ["AWS", "Cloud Concepts", "Security", "Architecture"],
    icon: Award,
    href: profile.linkedin,
  },
  {
    slug: "google-python-git-github",
    title: "Python, Git & GitHub Foundations",
    issuer: "Google",
    detail:
      "Core programming and source control foundations through Crash Course on Python and Introduction to Git and GitHub.",
    skills: ["Python", "Git", "GitHub", "Automation"],
    icon: Terminal,
    href: profile.linkedin,
  },
];

export const skillGroups = [
  {
    title: "Backend",
    icon: Code2,
    items: ["Python", "Node.js", "Express.js", "Flask", "FastAPI", "REST API"],
  },
  {
    title: "Cloud & Data",
    icon: Database,
    items: ["Google Cloud", "Firebase Auth", "Firestore", "Compute Engine", "VPC", "SQL"],
  },
  {
    title: "AI & Delivery",
    icon: Brain,
    items: ["Groq API", "Llama", ".h5 deployment", "Postman", "Git", "GitHub"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getCertification(slug: string) {
  return certifications.find((certification) => certification.slug === slug);
}
