export type Experience = {
  company: string;
  logo: string;
  logoSrc?: string;
  logoDarkSrc?: string;
  logoWidth?: number;
  logoHeight?: number;
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
  logoDarkSrc?: string;
  logoWidth?: number;
  logoHeight?: number;
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
    logoSrc: "/crimsonlogic-logo.webp",
    logoDarkSrc: "/crimsonlogic-logo-dark.webp",
    logoWidth: 100,
    logoHeight: 128,
    role: "Software Engineer",
    period: "Jun 2025",
    status: "Current",
    bullets: [
      "Developed truck appointment and capacity management modules for a Port Community System in Antwerp.",
      "Designed and executed 500 UAT test cases and resolved 40 defects, including a critical concurrency issue.",
      "Introduced AI-assisted development workflows and Azure DevOps code review pipelines to improve delivery consistency.",
    ],
    tech: ["Spring Boot", "Angular", "Kafka", "MySQL", "Azure DevOps"],
  },
  {
    company: "PSA International",
    logo: "PSA",
    logoSrc: "/psa-logo.webp",
    logoDarkSrc: "/psa-logo-dark.webp",
    logoWidth: 138,
    logoHeight: 46,
    role: "Software Engineer (Internship)",
    period: "Sep 2024 - May 2025",
    bullets: [
      "Automated migration of 50 Kafka topics and 150 consumer groups with reusable batch scripts.",
      "Designed and executed 1,000+ test cases for Global PortNet and DigitalPort enterprise systems.",
      "Translated client requirements into 60+ Figma screens and delivered Angular frontend features.",
    ],
    tech: ["Angular", "Kafka", "UI/UX Design", "Azure DevOps"],
  },
  {
    company: "Reachfield IT Solutions",
    logo: "RI",
    logoSrc: "/reachfield-logo.webp",
    logoWidth: 180,
    logoHeight: 123,
    logoSize: "sm",
    role: "Software Developer (Internship)",
    period: "Oct 2019 - Apr 2020",
    bullets: [
      "Integrated facial recognition into a Visitor Management System using Java/J2EE and Face++.",
      "Enhanced a Security Guard Management System with real-time incident alerts and RFID patrol tracking.",
      "Improved entry processing and guard accountability for security-focused enterprise workflows.",
    ],
    tech: ["Java", "JavaScript", "Face++", "MySQL", "RFID"],
  },
];

export const education: Education[] = [
  {
    school: "Singapore Institute of Technology · University of Glasgow",
    logo: "SIT",
    logoSrc: "/sit-logo.webp",
    logoDarkSrc: "/sit-logo-dark.webp",
    logoWidth: 328,
    logoHeight: 304,
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
    logoSrc: "/sp-logo.webp",
    logoDarkSrc: "/sp-logo-dark.webp",
    logoWidth: 300,
    logoHeight: 188,
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
      src: "/psa-codeoptics-ai-code-review-thumbnail.webp",
      alt: "PSA CodeOptics thumbnail showing an AI code review workflow for GitLab workspaces",
      width: 1600,
      height: 1200,
    },
    github: "https://github.com/NeoTianHow/code-optics",
    tech: [
      "Spring Boot",
      "Spring AI",
      "Angular",
      "Ollama",
      "Qwen-2.5-Coder",
      "Chroma",
      "H2 Database",
      "Jasper Reports",
    ],
  },
  {
    slug: "microservice-ticketing",
    title: "Microservice Ticketing Solution",
    period: "Aug 2023 - Dec 2023",
    summary:
      "A distributed ticketing platform with virtual queueing, bot protection, real-time updates, and Kubernetes scaling for high-concurrency purchase flows.",
    image: {
      src: "/microservice-ticketing-thumbnail.webp",
      alt: "Microservice ticketing thumbnail showing queue-gated purchase flow and Kubernetes services",
      width: 1600,
      height: 1200,
    },
    github: "https://github.com/NeoTianHow/ticket-vibe",
    tech: [
      "React",
      "Node.js",
      "WebSocket",
      "RabbitMQ",
      "Redis",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "GCP",
      "PayPal",
    ],
  },
  {
    slug: "astar-route-planner",
    title: "A* Route Planner",
    period: "Jan 2023 - Apr 2023",
    summary:
      "A Flask journey planner that uses graph data structures and A* search to recommend Johor bus routes with transfers, walking links, traffic labels, and map visualisation.",
    image: {
      src: "/astar-route-planner-thumbnail.webp",
      alt: "A* Route Planner thumbnail showing a real map route result, search form, route metrics, and graph search flow",
      width: 1600,
      height: 1200,
    },
    github: "https://github.com/NeoTianHow/astar-route-planner",
    tech: [
      "Python",
      "Flask",
      "A* Search",
      "PostgreSQL",
      "Folium",
      "Leaflet",
      "OpenRouteService",
      "Telegram Bot API",
    ],
  },
];
