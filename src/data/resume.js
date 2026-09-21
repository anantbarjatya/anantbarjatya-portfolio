// Single source of truth — every field here is pulled directly from
// Anant's resume. Edit this file to update the site; no other file
// should hardcode portfolio content.

export const profile = {
  name: "Anant Barjatya",
  role: "Software Engineer",
  tagline: "Building systems. Crafting experiences.",
  github: "https://github.com/anantbarjatya",
  linkedin: "https://www.linkedin.com/in/anantbarjatya/",
  email: "barjatyaanant23@gmail.com",

};

export const experience = [
  {
    company: "Marsh McLennan (India) Private Limited",
    role: "Intern – Investments",
    location: "Gurugram",
    start: "Jul 2026",
    end: "Present",
    current: true,
    points: [
      "Developed a Python-based PowerPoint automation engine (python-pptx) to generate investment reports from standardized templates, dynamically populating client-specific text, tables, and charts while preserving formatting.",
      "Built reusable, template-driven report generation workflows supporting dynamic sections and variable table structures for scalable investment reporting.",
      "Contributing to the development of a POC client dashboard enabling direct access to investment reports, performance metrics, and interactive charts with near real-time data updates.",
    ],
    tech: [
      "Python",
      "python-pptx",
      "Solid.js",
      "Data Visualization",
      "Dashboards",
    ],
  },

  {
    company: "Mynd Integrated Solutions Private Limited",
    role: "Software Engineering Intern",
    location: "Noida",
    start: "May 2026",
    end: "Jul 2026",
    points: [
      "Developed a production-grade Email Template Management System using Spring Boot, JWT, and JavaMailSender.",
      "Built secure REST APIs with JWT-based authentication and authorization for managing email templates and user access.",
      "Implemented email template creation, management, and delivery workflows using JavaMailSender.",
      "Designed backend components following a modular architecture to support maintainability and scalable email management workflows.",
    ],
    tech: [
      "Spring Boot",
      "JWT",
      "JavaMailSender",
      "REST APIs",
    ],
  },

  {
    company: "PwC Advisory Launchpad Program",
    role: "Data Analytics Trainee",
    location: "",
    start: "Feb 2026",
    end: "Jul 2026",
    current: true,
    points: [
      "Selected for PwC's Advisory Launchpad Program with training in Data Analytics, Data Engineering, and Modern Data Systems.",
      "Applied SQL, Python, Pandas, and Excel for data cleaning, analysis, visualization, and reporting workflows.",
      "Gained exposure to ETL pipelines, APIs, cloud databases, business intelligence, and Generative AI for data-driven decision making.",
    ],
    tech: [
      "SQL",
      "Python",
      "Pandas",
      "Excel",
      "ETL",
    ],
  },

  {
    company: "Deccan AI",
    role: "AI Response Evaluation Intern (Freelance)",
    location: "",
    start: "Jan 2026",
    end: "Apr 2026",
    points: [
      "Evaluated AI-generated video outputs to identify visual, semantic, and instruction-following errors, analyzing failure cases across diverse video samples.",
      "Refined and authored prompts based on identified model failures to improve video generation quality, consistency, and adherence to intended instructions.",
      "Curated and prepared a 100+ hour video dataset for model evaluation and training, covering diverse samples for robust testing of AI-generated video outputs.",
      "Performed human-in-the-loop evaluation of model outputs and documented failure patterns to support iterative model improvement and training workflows.",
    ],
    tech: [
      "LLM Evaluation",
      "Prompt Engineering",
      "AI Video Generation",
      "Dataset Curation",
    ],
  },

  {
    company: "Kanchan India Limited",
    role: "Frontend Developer",
    location: "",
    start: "May 2024",
    end: "June 2024",
    points: [
      "Developed responsive and accessible UI components using React.js, HTML, CSS, and Tailwind CSS.",
      "Designed modern cross-browser layouts while improving website performance through optimized assets and frontend best practices.",
      "Revamped homepage UI, contributing to a 20% reduction in bounce rate.",
    ],
    tech: [
      "React.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
];

export const projects = [
  {
    name: "Mera Khata AI",
    period: "Jun 2026 – Present",
    description:
      "A voice-first AI ledger app for kirana stores using Sarvam STT, LLM & TTS, enabling Hindi/Hinglish transaction recording with automated ledger and inventory updates.",
    points: [
      "Engineered a multimodal invoice scanner with Sarvam OCR + LLM to extract supplier invoice data from images and automatically sync inventory records.",
      "Built and deployed a full-stack application using React, Node.js, and SQLite, supporting multilingual input, credit tracking, and real-time inventory synchronization.",
    ],
    tech: [
      "React",
      "Node.js",
      "SQLite",
      "Sarvam STT",
      "LLM",
      "TTS",
      "Sarvam OCR",
    ],
    live: true,
    liveUrl: "https://mera-khata-ai.vercel.app/",
    github: true,
    githubUrl: "https://github.com/anantbarjatya/mera-khata-ai",
  },

  {
    name: "Tala — Credential Manager",
    period: "Sep 2025 – Present",
    description:
      "A full-stack credential manager (MERN) with AES-256-GCM encryption, using a fresh random IV per credential to ensure secure storage of sensitive data.",
    points: [
      "Designed a dual-password vault with bcrypt (12 rounds) authentication and separate decryption keys, ensuring compromised JWT sessions expose no plaintext credentials.",
      "Hardened against XSS, CSRF, and brute-force using httpOnly + sameSite JWT cookies, rate limiting, and custom sanitization middleware.",
    ],
    tech: [
      "MERN",
      "AES-256-GCM",
      "bcrypt",
      "JWT",
      "Rate Limiting",
    ],
    live: true,
    liveUrl: "https://tala-password-manager.vercel.app/",
    github: true,
    githubUrl: "https://github.com/anantbarjatya/tala-password-manager",
  },

  {
    name: "Deffo — DeepFake Detection",
    period: "Oct 2025",
    description:
      "A deepfake detection system using Xception CNN + Bidirectional LSTM, achieving 83.93% ROC-AUC on the Google DFD dataset.",
    points: [
      "Extracted facial features from video frames using MTCNN and leveraged temporal modeling for classification.",
      "Developed a Flask-based web application for real-time deepfake video inference and prediction.",
    ],
    tech: [
      "Xception CNN",
      "Bi-LSTM",
      "MTCNN",
      "Flask",
    ],
    stat: {
      label: "ROC-AUC · Google DFD",
      value: "83.93%",
    },
    live: false,
    github: true,
    githubUrl: "https://github.com/anantbarjatya/deepfake-detector--DEFFO",
  },
];

export const education = {
  institution: "Manipal University Jaipur",
  degree: "Bachelor of Technology in Computer Science (Data Science)",
  duration: "2023 – 2027",
  cgpa: "7.82",
};

export const achievements = [
  "Selected for the Pre-Incubation Program at Manipal University Jaipur E-Cell for startup initiative SPARKSTORM.",
];

export const skills = {
  ENGINE: {
    label: "Programming",
    items: ["Java", "JavaScript", "Python", "SQL"],
  },

  TRANSMISSION: {
    label: "Frameworks & Technologies",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Spring Boot",
      "Bootstrap",
    ],
  },

  ELECTRONICS: {
    label: "Backend & Security",
    items: [
      "REST APIs",
      "Authentication & Authorization",
      "JWT",
      "bcrypt",
      "Firebase Auth",
      "httpOnly Cookies",
      "AES-256-GCM",
      "Rate Limiting",
    ],
  },

  "DATA SYSTEM": {
    label: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
    ],
  },

  TOOLKIT: {
    label: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Render",
    ],
  },

  CORE: {
    label: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
};