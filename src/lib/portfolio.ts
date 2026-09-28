import type { LucideIcon } from "lucide-react";
import {
  Award,
  Brain,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Leaf,
  Network,
  School,
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
    "Final-year Informatics student and Bangkit Academy 2024 graduate specializing in backend development and cloud computing. I build production systems: a livestock platform on a custom domain, LLM pipelines with evaluation frameworks, and 24/7 Telegram commerce bots.",
  focus: ["Backend APIs", "Cloud Computing", "AI Integration", "System Design"],
  typing: [
    "Backend Developer.",
    "AI Automation Engineer.",
    "Fullstack Developer.",
    "DevOps & Cloud Engineer.",
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
      "Clinical nutrition recommendation system for Indonesian demographics built on computer vision, a Graph RAG knowledge base, and multi-LLM comparison — deployed end-to-end on Cloud Run.",
    outcome:
      "Indonesia faces a double burden of malnutrition (21.6% stunting, 19.5M diabetes patients) and existing apps cannot map local food to clinical conditions. I built the complete thesis system that does: food photo → CV recognition → Graph RAG clinical reasoning → multi-LLM recommendations with an evaluation framework measuring answer quality.",
    tags: ["Next.js 14", "FastAPI", "Neo4j", "Graph RAG", "RAGAS", "Docker"],
    tone: "teal",
    icon: Brain,
    preview: "/previews/nutrigraph.png",
    details: [
      "Knowledge graph with 251 nodes and 792 relationships in Neo4j — modeling ingredients, nutrients, medical conditions, chemical reactions, and dataset sources for Indonesian foods.",
      "Curated clinical database of 42 local ingredients (bayam, tempe, ayam, salmon, etc.) with per-100g macro and clinical values, each traceable to a dataset source.",
      "Multi-LLM generation pipeline running 3 models in parallel — DeepSeek and Qwen via OpenRouter, Llama 3.3 via Groq Direct — with explicit failure states that never fabricate clinical content.",
      "Evaluation framework with Official RAGAS (faithfulness, answer relevance) over a 15-question clinical benchmark plus a separate custom LLM-as-a-Judge, migrated to Qwen on OpenRouter at USD 0.00004247 per judge call.",
      "Computer vision recognition via Qwen2.5-VL with CLIP visual similarity verification (openai/clip-vit-base-patch32) reaching 0.965 final similarity on real food photos, backed by a versioned similarity cache.",
      "Three-service architecture (Next.js frontend, Express gateway, FastAPI AI engine) with Redis caching (graph provenance TTL 300s), PWA installability scoring Lighthouse 100, and 104 passing Python tests at deploy time.",
    ],
    metrics: [
      { label: "Knowledge graph", value: "251 nodes / 792 rel" },
      { label: "Clinical DB", value: "42 ingredients" },
      { label: "LLM providers", value: "3 in parallel" },
      { label: "Test suite", value: "104 passing" },
    ],
  },
  {
    slug: "ternak-monitor",
    title: "Ternak Monitor",
    type: "Production Livestock Platform",
    role: "Full-Stack Developer",
    period: "2026",
    summary:
      "Integrated farm management platform for PT Duta Agri Nusantara running on its own domain — covering livestock records, health, weight, reproduction, feed, sales, and daily finance for a 200-head cattle operation.",
    outcome:
      "Small livestock operations track everything in spreadsheets and lose money to missed health events and unreadable margins. I built the system that replaces that: one platform where staff record daily operations and owners get AI-summarized briefs — deployed at ptdutaagrinusantara.com with a public cattle catalog for customers.",
    tags: ["React 19", "Express", "PostgreSQL", "Supabase", "JWT", "Gemini API"],
    tone: "teal",
    icon: Database,
    href: "https://ptdutaagrinusantara.com",
    preview: "/previews/ternak-monitor.png",
    details: [
      "Livestock management core sized for a 200-head cattle operation: individual animal records covering health events, weight progression, reproduction cycles, feed consumption, sales, and per-day financial entries.",
      "Role-based access control with JWT authentication — owners, staff, and customers see different surfaces, protected at the API layer on Express with PostgreSQL/Supabase as the datastore.",
      "Report pipelines exporting operational records to PDF and XLSX so owners can hand auditors, vets, or buyers a clean document instead of raw spreadsheets.",
      "Gemini-powered Owner Daily Brief that automatically summarizes herd condition, recent transactions, and anomalies into one readable morning report.",
      "Public customer-facing cattle catalog that works without login, turning internal farm data into a sales channel on the company domain.",
      "Deployed full-stack on Vercel with a Supabase backend, health-check endpoint, and automated Supabase snapshot backups pushed daily.",
    ],
    metrics: [
      { label: "Scale", value: "200-head cattle" },
      { label: "Domain", value: "ptdutaagrinusantara.com" },
      { label: "Reports", value: "PDF + XLSX" },
      { label: "Brief", value: "AI daily summary" },
    ],
  },
  {
    slug: "sipeka",
    title: "SIPEKA",
    type: "Kerja Praktek Prototype",
    role: "Full-Stack Developer",
    period: "2026",
    summary:
      "Extracurricular management portal for schools — a multi-user control room covering extracurricular directory, agenda, student registration, achievement news, and coach dashboards.",
    outcome:
      "School extracurricular programs run on WhatsApp groups and paper forms: coaches cannot see capacity, students miss registration windows, and principals have no oversight. SIPEKA centralizes that workflow into one auditable application with role-based dashboards for admin, coaches, teachers, and homeroom teachers.",
    tags: ["React", "TypeScript", "Vite", "Multi-user", "Dashboard"],
    tone: "blue",
    icon: School,
    href: "https://sipeka-delta.vercel.app",
    preview: "/previews/sipeka.png",
    details: [
      "Multi-user role system for admin, pembina (coach), guru, and wali kelas — each role gets a different dashboard view and permission set.",
      "Extracurricular directory with search, filtering, and side-by-side capacity comparison so students pick open programs instead of full ones.",
      "Live capacity tracking per program — e.g. Basket 35/40 (88%), Pramuka 62/80 (78%), Robotik & IoT 24/32 (75%) — surfaced on the operations panel at a glance.",
      "Agenda and registration queue management with nearest-activity prioritization and registration status handling for coaches.",
      "Achievement newsroom styled like a school news archive, making student achievements auditable and publicly presentable.",
      "Built with React + TypeScript + Vite as a Kerja Praktek prototype, deployed multi-user on Vercel.",
    ],
    metrics: [
      { label: "Roles", value: "4 user types" },
      { label: "Modules", value: "5 core modules" },
      { label: "Status", value: "Live prototype" },
    ],
  },
  {
    slug: "nmr-cp",
    title: "NMR Corporate Profile",
    type: "Client Corporate Website",
    role: "Developer",
    period: "2026",
    summary:
      "Bilingual corporate website for PT Nur Mutiara Riau — a sustainable forest management and carbon credit company in Riau — with an Indonesian/English language switcher.",
    outcome:
      "A forestry company needs to present impact numbers, services, and partnership channels to both Indonesian and international stakeholders. I built the corporate profile that does this in two languages, structuring the company's forest management, carbon trading, community empowerment, and research services into a credible web presence.",
    tags: ["Corporate Site", "Bilingual", "TypeScript", "Landing"],
    tone: "teal",
    icon: Leaf,
    href: "https://nmr-cp.vercel.app",
    preview: "/previews/nmr-cp.png",
    details: [
      "Bilingual IDN/ENG toggle across the entire site for international carbon-market partners.",
      "Impact statistics band presenting the company's operating scale: 38,564 hectares managed, 1.2M+ tons CO₂, 15+ communities engaged, 25+ partners.",
      "Four-service architecture section: carbon trading, forest management, community empowerment, and research & innovation, each with icon-led cards.",
      "Alternating mission/vision storytelling sections and a partnership CTA funneling potential partners to the contact team.",
      "Nature-themed design system: forest photography hero, deep green brand palette, and rounded service cards.",
    ],
    metrics: [
      { label: "Languages", value: "IDN + ENG" },
      { label: "Impact data", value: "38,564 Ha shown" },
      { label: "Services", value: "4 pillars" },
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
      "Self-taught security learning fails without measurable structure. I built the tracker I use myself: ten curriculum paths with per-item progress so every lab, course, and practice set is accounted for.",
    tags: ["Cybersecurity", "Web Security", "Cloud", "Machine Learning", "Mathematics"],
    tone: "violet",
    icon: ShieldCheck,
    href: "https://cybermath-masterpiece-one.vercel.app",
    preview: "/previews/cybermath.png",
    details: [
      "Ten learning paths including a 315-item 90-day cybersecurity plan, Professor Dave mathematics (193 items), and a 54-item problem-first pentest path.",
      "Industry lab integration: PortSwigger Web Security academies for SQL injection, authentication, and access control.",
      "Cloud and ML curricula: Dicoding AWS Cloud fundamentals, Dicoding Machine Learning for beginners, and Kaggle Learn practice tracks.",
      "Progress persistence per path with completion percentages surfaced in the header for at-a-glance tracking.",
    ],
    metrics: [
      { label: "Paths", value: "10 tracks" },
      { label: "Largest path", value: "315 items" },
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
      "The goyank brand needed one entry point that routes customers into the buying funnel without manual forwarding. I built the landing that connects the channel, fast-response WhatsApp, and the automatic order bot — deployed self-hosted on Vercel.",
    tags: ["Landing Page", "Telegram", "Commerce", "Automation"],
    tone: "blue",
    icon: Network,
    href: "https://goyank-linktree.vercel.app",
    preview: "/previews/goyank-bot.png",
    details: [
      "Glassmorphism landing consistent with the goyank brand identity (doodle background, brand blue).",
      "Three conversion routes: Telegram channel for promos, WhatsApp for fast response, and the 24/7 order bot for automatic checkout.",
      "Deployed self-hosted on Vercel as the entry layer of the goyank commerce infrastructure backed by the Telegram bots.",
    ],
    metrics: [
      { label: "Status", value: "Live on Vercel" },
      { label: "Role", value: "Funnel entry" },
      { label: "Bot", value: "24/7 orders" },
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
      "Farmers need treatment guidance even when the primary AI path fails. I engineered the hybrid backend where Groq Llama 3.3 Versatile is the consultation engine with automatic fallback to Llama 3.1, plus a dedicated auth microservice — source available on GitHub.",
    tags: ["React", "Node.js", "Python", "Firebase", "Groq", "Llama 3.3"],
    tone: "teal",
    icon: Brain,
    href: "https://github.com/syronesdreamland/GoTanny",
    details: [
      "Architected the React frontend and a hybrid backend combining Python LLM services with Node.js microservices.",
      "Integrated Groq Llama 3.3 Versatile as the consultation engine with automatic fallback to Llama 3.1 for service stability.",
      "Built a dedicated Node.js microservice for account security features and email-based password recovery.",
      "Used Firebase Authentication and Firestore Database for secure, real-time user data management.",
    ],
    metrics: [
      { label: "AI", value: "Llama 3.3 → 3.1" },
      { label: "Domain", value: "AgriTech" },
      { label: "Source", value: "On GitHub" },
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
      "The Android team needed one dependable prediction endpoint with clean user data flows. I owned the entire server side: database schema, secure RESTful API, and the .h5 ML model integration that powered every prediction the app made.",
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
      "Small exporters lose margin on shipping and have no learning infrastructure. I led the concept where exporters to the same country consolidate cargo into one shipment, plus the education hub and community forum — earning Best Project of Class 2022.",
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
      "Selling digital products on Telegram means handling orders, payments, and delivery without losing money to manual mistakes. I built and operate two independent bots that do the full loop — order, QRIS payment, automated delivery, transaction log, and nightly backups — as systemd services.",
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
      "Recurring research and content operations waste hours when done by hand. I built the infrastructure that runs them autonomously: CDP-driven browser pipelines, Tailscale SSH bridges to Windows with PowerShell automation, and scheduled jobs with failure handling.",
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
    slug: "retyan-computer",
    title: "Retyan Computer",
    type: "Internship Experience",
    role: "IT Support Intern",
    period: "Oct 2021 - Jan 2024",
    summary:
      "Technical support internship covering computer hardware maintenance, OS installation, troubleshooting, and CCTV installation over 2+ years.",
    outcome:
      "Real customer problems with no textbook answer — I diagnosed hardware and software issues under service conditions for over two years, which is where my infrastructure instincts come from.",
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
    items: ["Groq API", "Llama 3.3", "ML Deployment (.h5)", "Gemini API", "Graph RAG", "RAGAS", "Networking (CCNA)", "Git"],
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
