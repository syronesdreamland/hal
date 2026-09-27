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
  title: "Backend Developer",
  location: "Pekanbaru, Indonesia",
  university: "Universitas Islam Riau",
  email: "alifadityaat@gmail.com",
  linkedin: "https://www.linkedin.com/in/aalifadityaa/",
  github: "https://github.com/syronesdreamland",
  summary:
    "Final-year Informatics student and Bangkit Academy 2024 graduate specializing in backend development and cloud computing. Experienced in RESTful API design, database management, and AI model integration with Python and Node.js — with production systems running on Vercel and 24/7 Telegram commerce bots.",
  focus: ["Backend APIs", "Cloud Computing", "AI Integration", "System Design"],
  typing: [
    "Backend APIs that ship to production.",
    "Cloud systems on GCP & AWS.",
    "LLM orchestration with fallback safety.",
    "Automation that runs 24/7.",
  ],
};

export type ProjectTone = "teal" | "blue" | "amber" | "violet";

export type Showcase = {
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
  preview?: string;
  details: string[];
  metrics: { label: string; value: string }[];
};

export const projects: Showcase[] = [
  {
    slug: "nutrigraph-ai",
    title: "NutriGraph AI",
    type: "Undergraduate Thesis System",
    role: "Full-Stack & AI Engineer",
    period: "2025 - 2026",
    summary:
      "Clinical nutrition recommendation system for Indonesian demographics built on computer vision, a Graph RAG knowledge base, and multi-LLM comparison.",
    outcome:
      "Designed and built the complete thesis system: Next.js frontend, Express gateway, FastAPI AI engine, Neo4j knowledge graph, and Redis cache — with an LLM evaluation framework comparing multiple models head-to-head.",
    tags: ["Next.js", "FastAPI", "Neo4j", "Graph RAG", "Computer Vision", "D3.js"],
    tone: "teal",
    icon: Brain,
    preview: "/previews/nutrigraph.png",
    details: [
      "Architected a three-layer system: Next.js 14 frontend, Express.js gateway, and FastAPI AI engine.",
      "Built a Neo4j knowledge graph of Indonesian food nutrition served through Graph RAG retrieval.",
      "Implemented food recognition via computer vision to estimate nutrition from photos.",
      "Ran a multi-LLM evaluation framework comparing model responses for clinical recommendation quality.",
      "Visualized nutrition knowledge maps and comparisons with D3.js.",
    ],
    metrics: [
      { label: "Scope", value: "Thesis system" },
      { label: "Core", value: "Graph RAG" },
      { label: "AI", value: "Multi-LLM" },
    ],
  },
  {
    slug: "ternak-monitor",
    title: "Ternak Monitor",
    type: "Production Full-Stack App",
    role: "Full-Stack Developer",
    period: "2026",
    summary:
      "Livestock management platform covering livestock records, health, weight, reproduction, feed, sales, and daily financial reporting for farm operations.",
    outcome:
      "Shipped a complete React + Express system with JWT auth, PostgreSQL REST API, PDF/XLSX report export, and an AI-powered daily brief, deployed live on Vercel.",
    tags: ["React 19", "Express", "PostgreSQL", "JWT", "Gemini API", "Vercel"],
    tone: "teal",
    icon: Database,
    href: "https://ternak-monitor.vercel.app",
    preview: "/previews/ternak-monitor.png",
    details: [
      "Built REST API foundation with JWT authentication, livestock and location models, and transaction endpoints on PostgreSQL.",
      "Implemented report pipelines exporting operational data to PDF and XLSX for farm owners.",
      "Integrated Gemini-powered Owner Daily Brief that summarizes daily farm conditions automatically.",
      "Deployed frontend and backend to production with Supabase integration and health-check monitoring.",
    ],
    metrics: [
      { label: "Status", value: "Live on Vercel" },
      { label: "Stack", value: "React + Express" },
      { label: "AI", value: "Gemini brief" },
    ],
  },
  {
    slug: "cybermath-academy",
    title: "CyberMath Academy",
    type: "Self-Paced Learning Tracker",
    role: "Creator & Developer",
    period: "2026",
    summary:
      "Structured learning tracker spanning cybersecurity, mathematics, penetration testing, AWS cloud, web security, and machine learning — ten curriculum paths in one progress dashboard.",
    outcome:
      "Designed a progress-first learning system covering 315-item cybersecurity plans, PortSwigger web security labs, Dicoding cloud and ML courses, and Kaggle practice tracks.",
    tags: ["Cybersecurity", "Web Security", "Cloud", "Machine Learning", "Mathematics"],
    tone: "violet",
    icon: ShieldCheck,
    href: "https://cybermath-masterpiece-one.vercel.app",
    preview: "/previews/cybermath.png",
    details: [
      "Structured ten learning paths across security, math, cloud, and ML with measurable progress tracking.",
      "Integrated industry labs: PortSwigger SQL injection, authentication, and access control academies.",
      "Tracked Dicoding AWS Cloud, Machine Learning, and Kaggle Learn curriculum completion.",
      "Built a 90-day cybersecurity plan with 315 trackable items.",
    ],
    metrics: [
      { label: "Paths", value: "10 tracks" },
      { label: "Focus", value: "Off + Def security" },
      { label: "Status", value: "Live on Vercel" },
    ],
  },
  {
    slug: "go-linktree",
    title: "go — digital lifestyle",
    type: "Commerce Landing",
    role: "Developer & Operator",
    period: "2026",
    summary:
      "Self-hosted link-in-bio storefront for the goyank digital-lifestyle brand: Telegram channel, WhatsApp ordering, and a 24/7 automatic order bot in one glassmorphism page.",
    outcome:
      "Built and deployed a production landing that routes customers into the Telegram commerce funnel with the order bot handling purchases automatically.",
    tags: ["Landing Page", "Telegram", "Commerce", "Automation"],
    tone: "blue",
    icon: Network,
    href: "https://goyank-linktree.vercel.app",
    preview: "/previews/goyank-bot.png",
    details: [
      "Designed a glassmorphism landing consistent with the goyank brand identity.",
      "Connected Telegram channel, WhatsApp fast-response, and the 24/7 order bot in one flow.",
      "Deployed self-hosted on Vercel as part of the goyank commerce infrastructure.",
    ],
    metrics: [
      { label: "Status", value: "Live on Vercel" },
      { label: "Role", value: "Funnel entry" },
      { label: "Bot", value: "24/7 orders" },
    ],
  },
];

export const experience: Showcase[] = [
  {
    slug: "telegram-commerce-bots",
    title: "Telegram Commerce Bots",
    type: "Production Automation",
    role: "Backend Developer & Operator",
    period: "2025 - 2026",
    summary:
      "Pair of production Telegram storefront bots processing QRIS payments, product catalogs, and digital goods delivery for real customers.",
    outcome:
      "Built and operated two independent bots with payment flow, catalog management, transaction logging, and automated backups running as systemd services.",
    tags: ["Python", "aiogram", "SQLite", "QRIS", "systemd", "Automation"],
    tone: "blue",
    icon: Terminal,
    details: [
      "Implemented end-to-end purchase flow: catalog browsing, order creation, QRIS payment, and automated goods delivery.",
      "Managed product catalogs and supplier data with persistent SQLite storage and transaction history.",
      "Operated both bots 24/7 as systemd services with automated database backup routines.",
      "Handled real customer transactions end-to-end with admin tooling for fulfillment and support.",
    ],
    metrics: [
      { label: "Bots", value: "2 in production" },
      { label: "Payment", value: "QRIS integration" },
      { label: "Uptime", value: "systemd 24/7" },
    ],
  },
  {
    slug: "ai-ops-automation",
    title: "AI Ops Automation",
    type: "Infrastructure & Automation",
    role: "Systems Engineer",
    period: "2025 - 2026",
    summary:
      "Private automation infrastructure connecting VPS and Windows machines: browser automation, scheduled agents, monitoring loops, and multi-machine orchestration.",
    outcome:
      "Designed and run a resilient agent infrastructure with Chrome DevTools Protocol control, SSH bridges across machines, and scheduled job pipelines for research and content operations.",
    tags: ["Python", "CDP", "SSH", "Cron", "Linux", "Windows"],
    tone: "violet",
    icon: Cloud,
    details: [
      "Built browser automation pipelines via Chrome DevTools Protocol for data collection and workflow execution.",
      "Engineered VPS-to-Windows bridges over Tailscale SSH with PowerShell automation for hybrid workflows.",
      "Scheduled autonomous monitoring and content pipelines with failure handling and state persistence.",
      "Maintained observability through structured logging, health checks, and automated backups.",
    ],
    metrics: [
      { label: "Scope", value: "Multi-machine" },
      { label: "Core", value: "CDP + SSH" },
      { label: "Mode", value: "24/7 scheduled" },
    ],
  },
  {
    slug: "gotanny",
    title: "GoTanny",
    type: "Capstone Project",
    role: "Full Stack & AI Engineer",
    period: "Sep 2025 - Jan 2026",
    summary:
      "Intelligent web platform for plant disease detection with AI-based treatment consultation, built as the Semester 7 capstone.",
    outcome:
      "Designed a hybrid backend with Groq Llama 3.3 Versatile as the consultation engine and automatic fallback to Llama 3.1, plus a Node.js microservice for account security and email-based password recovery.",
    tags: ["React", "Node.js", "Python", "Firebase", "Groq", "Llama 3.3"],
    tone: "teal",
    icon: Brain,
    href: profile.linkedin,
    details: [
      "Architected the React frontend and a hybrid backend combining Python LLM services with Node.js microservices.",
      "Integrated Groq Llama 3.3 Versatile as the consultation engine with automatic fallback to Llama 3.1 for service stability.",
      "Built a dedicated Node.js microservice for account security features and email-based password recovery.",
      "Used Firebase Authentication and Firestore Database for secure, real-time user data management.",
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
    period: "Jan 2024",
    summary:
      "Mobile health application for early diabetes risk detection, serving an Android app with secure REST APIs and ML prediction integration.",
    outcome:
      "Owned the entire server side: database schema design, secure RESTful API development, and integration of the .h5 machine learning model into the prediction flow.",
    tags: ["Python", "REST API", "ML Model", "Cloud", ".h5"],
    tone: "blue",
    icon: Server,
    href: profile.linkedin,
    details: [
      "Owned server-side design: database schema, secure RESTful API, and ML prediction flow.",
      "Integrated the .h5 machine learning model into backend prediction endpoints.",
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
    period: "Sep - Dec 2023",
    summary:
      "Bilingual digital ecosystem bridging local exporters with global importers: marketplace, export-import education hub, and community forum.",
    outcome:
      "Led planning, High-Fidelity UI direction, and system blueprinting (DFD Level 1 & 2, Context Diagram, ERD, Use Case) — including a joint-shipment consolidation feature to cut logistics costs. Earned Best Project of Class 2022.",
    tags: ["TypeScript", "DFD", "ERD", "Product Planning", "Team Lead"],
    tone: "amber",
    icon: Network,
    href: profile.linkedin,
    details: [
      "Defined the core marketplace workflow with education and community features.",
      "Led system blueprinting: DFD Level 1 & 2, Context Diagram, ERD, and Use Case Diagram.",
      "Initiated the joint-shipment consolidation concept to minimize logistics costs for exporters.",
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
    period: "Oct 2021 - Jan 2024",
    summary:
      "Technical support internship covering computer hardware maintenance, OS installation, troubleshooting, and CCTV installation over 2+ years.",
    outcome:
      "Built practical infrastructure instincts by diagnosing hardware and software issues in real customer service conditions.",
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
  date?: string;
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
      "Cloud Computing learning path with capstone collaboration and professional readiness training, completed as a Backend Developer cohort member.",
    skills: ["Cloud Computing", "Backend APIs", "Team Capstone", "Professional Skills"],
    icon: GraduationCap,
    href: profile.linkedin,
  },
  {
    slug: "ccna-cisco-introduction-to-networks",
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "Dec 2024",
    detail:
      "Networking fundamentals: network architecture, routing and switching basics, IP addressing, and network security foundations.",
    skills: ["Networking", "Routing & Switching", "IP Addressing", "Network Security"],
    icon: ShieldCheck,
    href: profile.linkedin,
  },
  {
    slug: "menjadi-google-cloud-engineer",
    title: "Menjadi Google Cloud Engineer",
    issuer: "Dicoding Indonesia",
    date: "Dec 2024",
    detail:
      "Cloud engineering path covering Compute Engine, Kubernetes Engine, networking, storage, and deployment on Google Cloud Platform.",
    skills: ["Compute Engine", "Kubernetes Engine", "GCP Networking", "Cloud Deployment"],
    icon: Cloud,
    href: profile.linkedin,
  },
  {
    slug: "belajar-penerapan-machine-learning-gcp",
    title: "Belajar Penerapan Machine Learning dengan Google Cloud",
    issuer: "Dicoding Indonesia",
    date: "Dec 2024",
    detail:
      "Applied machine learning on Google Cloud: ML workflows, model deployment, and AI services integration.",
    skills: ["Machine Learning", "GCP AI Services", "Model Deployment"],
    icon: Brain,
    href: profile.linkedin,
  },
  {
    slug: "belajar-dasar-ai",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Dec 2024",
    detail:
      "Artificial intelligence fundamentals: machine learning concepts, natural language processing, and computer vision basics.",
    skills: ["AI Fundamentals", "Machine Learning", "NLP", "Computer Vision"],
    icon: Brain,
    href: profile.linkedin,
  },
  {
    slug: "belajar-data-science-microsoft-fabric",
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    date: "Dec 2024",
    detail:
      "Data science workflows on Microsoft Fabric: data ingestion, transformation, analytics, and visualization.",
    skills: ["Data Science", "Microsoft Fabric", "Analytics", "Visualization"],
    icon: Database,
    href: profile.linkedin,
  },
  {
    slug: "belajar-javascript-dasar",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Nov 2024",
    detail:
      "JavaScript fundamentals: ES6+ syntax, DOM manipulation, asynchronous programming, and modern tooling.",
    skills: ["JavaScript", "ES6+", "Async Programming", "DOM"],
    icon: Code2,
    href: profile.linkedin,
  },
  {
    slug: "belajar-membuat-aplikasi-back-end-gcp",
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    issuer: "Dicoding Indonesia",
    date: "Nov 2024",
    detail:
      "Backend application fundamentals with Google Cloud: RESTful API construction, authentication, and cloud storage integration.",
    skills: ["REST API", "Authentication", "Cloud Storage", "Node.js"],
    icon: Server,
    href: profile.linkedin,
  },
  {
    slug: "google-cloud-terraform",
    title: "Terraform for Google Cloud",
    issuer: "Google Cloud",
    date: "Oct 2024",
    detail:
      "Infrastructure as Code on Google Cloud: Getting Started with Terraform and Build Infrastructure with Terraform courses.",
    skills: ["Terraform", "Infrastructure as Code", "Google Cloud"],
    icon: Cloud,
    href: profile.linkedin,
  },
  {
    slug: "google-cloud-infrastructure",
    title: "Google Cloud Infrastructure Series",
    issuer: "Google Cloud",
    date: "Oct 2024",
    detail:
      "Essential Google Cloud Infrastructure courses: Foundation, Core Services, Elastic Scaling and Automation, plus Preparing for Associate Cloud Engineer.",
    skills: ["Compute Engine", "Cloud IAM", "Scaling & Automation", "Cloud Architecture"],
    icon: Award,
    href: profile.linkedin,
  },
  {
    slug: "google-cloud-networking-security",
    title: "Google Cloud Networking & Security",
    issuer: "Google Cloud",
    date: "Oct 2024",
    detail:
      "Build a Secure Google Cloud Network, Develop your Google Cloud Network, and Implement Load Balancing on Compute Engine.",
    skills: ["VPC Networks", "Cloud Security", "Load Balancing", "Network Design"],
    icon: ShieldCheck,
    href: profile.linkedin,
  },
  {
    slug: "google-cloud-computing-foundations",
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "Sep 2024",
    detail:
      "Four-part foundations series: Cloud Computing Fundamentals, Infrastructure, Networking & Security, and Data, ML, and AI in Google Cloud.",
    skills: ["Cloud Fundamentals", "Infrastructure", "Data & ML", "AI in GCP"],
    icon: Cloud,
    href: profile.linkedin,
  },
  {
    slug: "google-cloud-fundamentals-kubernetes",
    title: "Google Cloud Fundamentals & Kubernetes",
    issuer: "Google Cloud",
    date: "Oct 2024",
    detail:
      "Google Cloud Fundamentals: Core Infrastructure, Getting Started with Google Kubernetes Engine, and Set Up an App Dev Environment.",
    skills: ["Core Infrastructure", "Kubernetes Engine", "App Dev Environment"],
    icon: Cloud,
    href: profile.linkedin,
  },
  {
    slug: "dicoding-programming-foundations",
    title: "Programming Foundations Series",
    issuer: "Dicoding Indonesia",
    date: "2022",
    detail:
      "Foundational programming series: Programming Logic 101, C, Java, Data 101, Web programming basics, and Software Developer career path.",
    skills: ["Programming Logic", "C", "Java", "Web Fundamentals"],
    icon: Code2,
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
    items: ["Python", "Node.js", "Express.js", "Flask", "FastAPI", "REST API", "Java", "C++"],
  },
  {
    title: "Cloud & Data",
    icon: Database,
    items: ["Google Cloud Platform", "AWS", "Firebase Auth", "Firestore", "Compute Engine", "Kubernetes Engine", "Terraform", "SQL", "PostgreSQL"],
  },
  {
    title: "AI & Networking",
    icon: Brain,
    items: ["Groq API", "Llama 3.3", "ML Deployment (.h5)", "Gemini API", "Graph RAG", "Networking (CCNA)", "Git"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getExperience(slug: string) {
  return experience.find((item) => item.slug === slug);
}

export function getShowcase(slug: string): Showcase | undefined {
  return getProject(slug) ?? getExperience(slug);
}

export function getCertification(slug: string) {
  return certifications.find((certification) => certification.slug === slug);
}
