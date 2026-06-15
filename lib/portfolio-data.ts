export type Experience = {
  company: string;
  logo: string;
  logoSrc?: string;
  logoSize?: "sm" | "md";
  role: string;
  period: string;
  status?: string;
  bullets: string[];
  tech: string[];
};

export type Honor = {
  title: string;
  kind?: string;
};

export type Education = {
  school: string;
  logo: string;
  logoSrc?: string;
  logoSize?: "sm" | "md";
  qualification: string;
  period: string;
  badge?: string;
  detail: string;
  honors?: Honor[];
};

export type Project = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  github?: string;
  tech: string[];
};

export const profile = {
  name: "Neo Tian How",
  shortName: "Neo",
  initials: "NT",
  role: "Software Engineer",
  location: "Singapore",
  email: "tianhow1234@hotmail.com",
  phone: "90082094",
  linkedin: "https://www.linkedin.com/in/neotianhow/",
  resume: "/resume.pdf",
  headline: "I build scalable software and practical digital systems.",
  summary:
    "Full-stack software engineer building enterprise web platforms, backend automation, cloud-native systems, and AI-assisted developer workflows.",
  availability: "Available for software engineering opportunities",
  personalLine: "Software Engineer from Singapore",
};

export const experiences: Experience[] = [
  {
    company: "CrimsonLogic",
    logo: "CL",
    logoSrc: "/crimsonlogic.webp",
    role: "Software Engineer",
    period: "Jun 2025",
    status: "Current",
    bullets: [
      "Developed truck appointment and capacity management modules for a Port Community System in Antwerp.",
      "Designed and executed 500 UAT test cases and resolved 40 defects, including a critical concurrency issue.",
      "Introduced AI-assisted development workflows and Azure DevOps code review pipelines to improve delivery consistency.",
    ],
    tech: ["Java", "Spring Boot", "Angular", "SQL", "Azure DevOps"],
  },
  {
    company: "PSA International",
    logo: "PSA",
    logoSrc: "/psa.webp",
    role: "Software Engineer (Internship)",
    period: "Sep 2024 - May 2025",
    bullets: [
      "Automated migration of 50 Kafka topics and 150 consumer groups with reusable batch scripts.",
      "Designed and executed 1,000+ test cases for Global PortNet and DigitalPort enterprise systems.",
      "Translated client requirements into 60+ Figma screens and delivered Angular frontend features.",
    ],
    tech: ["Angular", "Kafka", "Spring Boot", "Bash", "Figma"],
  },
  {
    company: "Reachfield IT Solutions",
    logo: "RI",
    logoSrc: "/reachfield.webp",
    logoSize: "sm",
    role: "Software Developer",
    period: "Oct 2019 - Apr 2020",
    bullets: [
      "Integrated facial recognition into a Visitor Management System using Java/J2EE and Face++.",
      "Enhanced a Security Guard Management System with real-time incident alerts and RFID patrol tracking.",
      "Improved entry processing and guard accountability for security-focused enterprise workflows.",
    ],
    tech: ["Java", "J2EE", "JavaScript", "SQL", "Face++"],
  },
];

export const education: Education[] = [
  {
    school: "Singapore Institute of Technology · University of Glasgow",
    logo: "SIT",
    logoSrc: "/sit.webp",
    qualification: "BSc (Hons) in Computing Science",
    period: "2022 - 2025",
    badge: "GPA 4.68/5",
    detail:
      "Joint honours degree covering data structures and algorithms, distributed and cloud computing, machine learning, and professional software development.",
    honors: [
      { title: "The Ngee Ann Kongsi Scholarship", kind: "Merit-based" },
      { title: "SIT Hackrift 2023", kind: "Hackathon participant" },
      { title: "SIT Hackrift 2022", kind: "Hackathon participant" },
    ],
  },
  {
    school: "Singapore Polytechnic",
    logo: "SP",
    logoSrc: "/sp.webp",
    qualification: "Diploma in Information Technology with Merit",
    period: "2017 - 2020",
    badge: "GPA 3.88/4",
    detail:
      "Foundation in software development, databases, and web technologies, including a final-year e-commerce build for KidZania Singapore as frontend lead.",
    honors: [
      { title: "School of Computing Director's Roll", kind: "Academic honor" },
      { title: "Edusave Skills Award", kind: "Technical achievement" },
      { title: "Student Facilitator, SEED SIG", kind: "Software Development" },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "psa-codeoptics",
    title: "PSA CodeOptics",
    period: "Nov 2024 - Mar 2025",
    summary:
      "An AI-powered platform for GitLab repository visibility, branch context summaries, and automated merge-request reviews aligned with internal standards.",
    image: {
      src: "/capstone-project-architecture.webp",
      alt: "PSA CodeOptics architecture diagram",
      width: 2179,
      height: 1070,
    },
    github: "https://github.com/NeoTianHow/code-optics",
    tech: [
      "Angular",
      "Spring Boot",
      "Spring AI",
      "Ollama",
      "Qwen-2.5-Coder",
      "Chroma",
      "H2",
      "JasperReports",
    ],
  },
  {
    slug: "microservice-ticketing",
    title: "Microservice Ticketing Solution",
    period: "Aug 2023 - Dec 2023",
    summary:
      "A distributed ticketing platform with virtual queueing, bot protection, real-time updates, and Kubernetes scaling for high-concurrency purchase flows.",
    image: {
      src: "/microservice-ticketing-architecture.webp",
      alt: "Microservice ticketing system architecture diagram",
      width: 2721,
      height: 1237,
    },
    github: "https://github.com/NeoTianHow/ticket-vibe",
    tech: [
      "React",
      "Node.js",
      "Docker",
      "Kubernetes",
      "GCP",
      "Redis",
      "MongoDB",
      "RabbitMQ",
      "WebSocket",
      "Cloudflare",
    ],
  },
];
