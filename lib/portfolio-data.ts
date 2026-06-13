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

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  period: string;
  summary: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  video?: string;
  tech: string[];
  problem: string;
  solution: string;
  architecture: string[];
  outcomes: string[];
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

export const skills = [
  "Java",
  "Spring Boot",
  "SQL",
  "Python",
  "JavaScript",
  "React",
  "Angular",
  "TypeScript",
  "Docker",
  "AWS",
  "Kubernetes",
  "Kafka",
  "Redis",
  "MongoDB",
];

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

export const projects: Project[] = [
  {
    slug: "psa-codeoptics",
    title: "PSA CodeOptics",
    eyebrow: "AI engineering workflow platform",
    period: "Nov 2024 - Mar 2025",
    summary:
      "An AI-powered platform for GitLab repository visibility, branch context summaries, and automated merge-request reviews aligned with internal standards.",
    image: {
      src: "/capstone-project-architecture.webp",
      alt: "PSA CodeOptics architecture diagram",
      width: 2179,
      height: 1070,
    },
    video: "/capstone-demo.mp4",
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
    problem:
      "Developers needed a faster way to understand branch activity, pull-request context, and code quality signals across many internal GitLab repositories.",
    solution:
      "Built a dashboard and AI review workflow that preprocesses code diffs, summarizes branch intent, reviews merge requests against internal rules, and captures feedback for refinement.",
    architecture: [
      "Angular frontend surfaces repository, branch, and merge-request insights in a compact dashboard.",
      "Spring Boot services coordinate GitLab webhooks, branch analysis, report generation, and review orchestration.",
      "LLM outputs are grounded with preprocessed diffs, commit messages, custom coding rules, and Chroma feedback embeddings.",
    ],
    outcomes: [
      "Reduced manual branch tracking by giving teams real-time visibility into merged, unmerged, active, and stale branches.",
      "Helped developers understand unfamiliar code changes faster with natural-language summaries.",
      "Created a feedback loop that stores downvoted review comments to improve future AI review quality.",
    ],
  },
  {
    slug: "microservice-ticketing",
    title: "Microservice Ticketing Solution",
    eyebrow: "Cloud-native ticketing architecture",
    period: "Aug 2023 - Dec 2023",
    summary:
      "A distributed ticketing platform with virtual queueing, bot protection, real-time updates, and Kubernetes scaling for high-concurrency purchase flows.",
    image: {
      src: "/microservice-ticketing-architecture.webp",
      alt: "Microservice ticketing system architecture diagram",
      width: 2721,
      height: 1237,
    },
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
    problem:
      "Ticketing systems can collapse under sudden demand, while scalping bots and denial-of-service traffic make fair access difficult to maintain.",
    solution:
      "Designed a containerized microservice platform with virtual queueing, rate limiting, CAPTCHA, Cloudflare protection, and real-time communication.",
    architecture: [
      "React clients communicate with Node.js services over REST and WebSocket channels.",
      "Redis and RabbitMQ coordinate queueing, event flow, and high-concurrency state transitions.",
      "Dockerized services run on Kubernetes with horizontal pod scaling based on demand.",
    ],
    outcomes: [
      "Supported fairer purchase access through a virtual queue during traffic spikes.",
      "Hardened the platform against scalping bots with rate limiting, CAPTCHA, and edge protection.",
      "Validated scalability under stress testing with 10,000 simulated requests per minute.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
