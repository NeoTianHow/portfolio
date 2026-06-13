import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ExperienceEducation } from "@/components/experience-education";
import { profile, projects } from "@/lib/portfolio-data";

const skillIconUrls: Record<string, string> = {
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Azure DevOps":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  Kafka:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
  Kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Spring Boot":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "Vue.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
};

const skillGroups = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "MySQL", "Python", "Kafka", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Docker", "Kubernetes", "AWS", "Azure DevOps"],
  },
  {
    title: "Frontend",
    skills: ["Angular", "TypeScript", "React", "Vue.js", "JavaScript"],
  },
];

function ArrowRightIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6.5h16v11H4z" />
      <path d="m4.8 7.2 7.2 5.5 7.2-5.5" />
    </svg>
  );
}


function RedisIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5 text-[#DC382D]"
      fill="currentColor"
    >
      <path d="M20.6 14.2c.9.5.9 1.4 0 1.9l-7.2 4.1c-.8.5-2.1.5-2.9 0l-7.1-4.1c-.9-.5-.9-1.4 0-1.9l1.1-.6 6 3.5c.8.5 2.1.5 2.9 0l6.1-3.5 1.1.6Z" />
      <path d="M20.6 10.5c.9.5.9 1.4 0 1.9l-7.2 4.1c-.8.5-2.1.5-2.9 0l-7.1-4.1c-.9-.5-.9-1.4 0-1.9l1.1-.6 6 3.5c.8.5 2.1.5 2.9 0l6.1-3.5 1.1.6Z" />
      <path d="M20.6 6.8c.9.5.9 1.4 0 1.9l-7.2 4.1c-.8.5-2.1.5-2.9 0L3.4 8.7c-.9-.5-.9-1.4 0-1.9l7.1-4.1c.8-.5 2.1-.5 2.9 0l7.2 4.1Z" />
    </svg>
  );
}

function SkillIcon({ skill }: { skill: string }) {
  if (skill === "Redis") {
    return <RedisIcon />;
  }

  const iconUrl = skillIconUrls[skill];

  if (!iconUrl) {
    return (
      <span className="grid size-5 place-items-center bg-[color:var(--accent-soft)] text-[10px] font-black text-[color:var(--accent-strong)]">
        {skill.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <Image
      src={iconUrl}
      alt=""
      aria-hidden="true"
      width={20}
      height={20}
      unoptimized
      className={`size-5 shrink-0 object-contain${skill === "Kafka" ? " [[data-theme=dark]_&]:invert" : ""}`}
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SiteHeader />

      <main
        id="home"
        className="mx-auto w-full max-w-[1120px] px-5 pb-10 pt-10 sm:px-8 lg:pt-14"
      >
        <section className="grid gap-9 border-b border-[color:var(--line-strong)] pb-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center lg:gap-8 lg:pb-14">
          <div className="max-w-[46rem]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--accent-soft)] px-3 py-2 text-sm font-semibold text-[color:var(--accent-strong)]">
              <span className="size-2 rounded-full bg-[color:var(--accent)]" />
              {profile.availability}
            </div>

            <h1 className="max-w-3xl font-medium tracking-[-0.015em] text-[color:var(--text)]">
              <span className="block text-4xl leading-[1.08] sm:text-5xl lg:text-[58px]">
                Hi, I&apos;m Tian How.
              </span>
              <span className="mt-2 block max-w-[15em] text-3xl leading-[1.12] text-[color:var(--soft-text)] sm:text-[40px] lg:text-[44px]">
                Software engineer based in Singapore.
              </span>
            </h1>

            <p className="mt-6 max-w-[39rem] text-lg font-normal leading-[1.6] text-[color:var(--soft-text)] sm:text-xl">
              <span className="block">
                Full-stack by experience, backend by interest.
              </span>
              <span className="block">
                I build practical software for real-world use.
              </span>
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={profile.resume}
                download
                className="inline-flex h-11 items-center justify-center gap-3 bg-[color:var(--accent)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--accent-strong)]"
              >
                Download resume
                <ArrowRightIcon />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-11 items-center justify-center gap-3 border border-[color:var(--line-strong)] px-5 text-sm font-semibold text-[color:var(--text)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                Contact me
                <MailIcon />
              </a>
            </div>
          </div>

          <div className="flex justify-start lg:justify-end">
            <div className="overflow-hidden border border-[color:var(--line-strong)] bg-[color:var(--panel)] p-1 lg:w-[340px]">
              <Image
                src="/profile-picture.webp"
                alt={`${profile.name} profile picture`}
                width={738}
                height={942}
                priority
                className="aspect-[4/5] w-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="skills-heading"
          className="section-rule py-9"
        >
          <div className="mb-6">
            <h2
              id="skills-heading"
              className="text-3xl font-black tracking-[-0.035em] text-[color:var(--text)]"
            >
              Tech stack
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-sm font-bold text-[color:var(--muted)]">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="chip inline-flex h-8 items-center gap-2 px-3 text-sm font-semibold tracking-[-0.01em]"
                    >
                      <SkillIcon skill={skill} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ExperienceEducation />

        <section
          id="projects"
          className="section-rule py-9"
          aria-labelledby="projects-heading"
        >
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2
              id="projects-heading"
              className="text-3xl font-black tracking-[-0.035em] text-[color:var(--text)]"
            >
              Featured projects
            </h2>
            <a
              href={profile.resume}
              download
              className="hidden items-center gap-2 text-sm font-black text-[color:var(--accent)] hover:text-[color:var(--text)] sm:inline-flex"
            >
              Download resume
              <ArrowRightIcon />
            </a>
          </div>

          <div className="space-y-px bg-[color:var(--line-strong)]">
            {projects.map((project) => {
              const CardTag = project.github ? "a" : "div";
              const cardProps = project.github
                ? {
                    href: project.github,
                    target: "_blank" as const,
                    rel: "noreferrer",
                    "aria-label": `${project.title} — view on GitHub`,
                  }
                : {};
              return (
                <CardTag
                  key={project.slug}
                  {...cardProps}
                  className="group block bg-[color:var(--panel-soft)] p-5 sm:p-6"
                >
                  <div className="flex gap-6 lg:gap-10">
                    <div className="flex-1">
                      <div>
                        <h3 className="text-[22px] font-black leading-tight tracking-[-0.03em] text-[color:var(--text)]">
                          {project.title}
                        </h3>
                        <p className="mt-0.5 text-xs font-medium text-[color:var(--muted)]">{project.period}</p>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--soft-text)]">
                        {project.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="chip px-2.5 py-1.5 text-xs font-bold"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden w-[220px] shrink-0 self-center lg:block">
                      <div className="relative aspect-[16/9] overflow-hidden bg-[color:var(--canvas-soft)]">
                        <Image
                          src={project.image.src}
                          alt={project.image.alt}
                          width={project.image.width}
                          height={project.image.height}
                          className="h-full w-full object-contain p-3 opacity-75"
                        />
                      </div>
                    </div>
                  </div>
                </CardTag>
              );
            })}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
