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

type Project = {
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
  email: "tianhow1234@hotmail.com",
  linkedin: "https://www.linkedin.com/in/neotianhow/",
  resume: "/resume.pdf",
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
      "Developed truck appointment and terminal capacity management modules for PSA's Port Community System in Antwerp using Spring Boot and Angular, supporting appointment scheduling, container tracking, gate timeslot availability, and handover document generation.",
      "Designed and executed 500+ UAT test cases, identifying and resolving 40 defects, including a critical concurrency issue that allowed multiple trucking companies to reserve the final available gate timeslot.",
      "Introduced AI-assisted development practices by converting team coding standards into reusable AI agent skills and supporting Azure DevOps code review automation, improving code consistency and reducing delivery time by 15-20%.",
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
      "Automated migration of 50 Kafka topics and 150 consumer groups using reusable batch scripts, preserving partitioning, retention policies, and ACL configurations across environments.",
      "Designed and executed 1,000+ test cases for Global PortNet and DigitalPort enterprise systems, validating business workflows and working with developers to resolve critical defects before release.",
      "Supported frontend design solutioning by translating client requirements into 60+ Figma screens and building Angular features integrated with backend services for shipping lines, hauliers, and terminal operators.",
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
      "Integrated facial recognition into a Java/J2EE Visitor Management System using Face++, supporting automated visitor verification, blacklist checks, and live camera capture at security checkpoints.",
      "Enhanced a Security Guard Management System with real-time incident alerts and RFID checkpoint tracking, improving patrol visibility and response coordination across assigned locations.",
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
    title: "CodeOptics",
    period: "Nov 2024 - Mar 2025",
    summary:
      "CodeOptics is a full-stack GitLab analytics and review platform built for large enterprise workspaces. It helps teams identify stale and unmerged branches, summarize code changes using a local Qwen model, generate cross-repository PDF reports, and run AI-assisted merge request reviews through GitLab webhooks, while keeping code internal.",
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
    title: "TicketVibe",
    period: "Aug 2023 - Dec 2023",
    summary:
      "Ticket Vibe is a cloud-native ticketing platform built for high-demand event sales. It helps users browse events, join a virtual waiting room, and receive short-lived access tokens used to control access during ticket purchase, using RabbitMQ for queue messaging, Redis for real-time queue state, and Kubernetes for scalable deployment.",
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
      "A* Route Planner is a Flask-based journey application built for Bas Muafakat Johor buses. It helps users find nearby bus stops, calculate recommended routes using graph-based A* search, and handle bus transfers and walking links.",
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
