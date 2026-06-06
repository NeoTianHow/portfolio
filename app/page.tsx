import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { experiences, profile, projects, skills } from "@/lib/portfolio-data";

const skillIconUrls: Record<string, string> = {
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
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
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Spring Boot":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
};

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

function DatabaseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5 text-sky-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

function RedisIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5 text-[#dc382d]"
      fill="currentColor"
    >
      <path d="M20.6 14.2c.9.5.9 1.4 0 1.9l-7.2 4.1c-.8.5-2.1.5-2.9 0l-7.1-4.1c-.9-.5-.9-1.4 0-1.9l1.1-.6 6 3.5c.8.5 2.1.5 2.9 0l6.1-3.5 1.1.6Z" />
      <path d="M20.6 10.5c.9.5.9 1.4 0 1.9l-7.2 4.1c-.8.5-2.1.5-2.9 0l-7.1-4.1c-.9-.5-.9-1.4 0-1.9l1.1-.6 6 3.5c.8.5 2.1.5 2.9 0l6.1-3.5 1.1.6Z" />
      <path d="M20.6 6.8c.9.5.9 1.4 0 1.9l-7.2 4.1c-.8.5-2.1.5-2.9 0L3.4 8.7c-.9-.5-.9-1.4 0-1.9l7.1-4.1c.8-.5 2.1-.5 2.9 0l7.2 4.1Z" />
      <path
        d="M9.2 6.7 8.1 8.1l3.5.4-.5 1.2 1.7-.8 1.9 1.1-.4-1.5 2-.2-1.9-1-1.4.9.2-1.7-1.6 1.1-2.4-.9Z"
        fill="white"
        opacity=".9"
      />
    </svg>
  );
}

function SkillIcon({ skill }: { skill: string }) {
  if (skill === "SQL") {
    return <DatabaseIcon />;
  }

  if (skill === "Redis") {
    return <RedisIcon />;
  }

  const iconUrl = skillIconUrls[skill];

  if (!iconUrl) {
    return (
      <span className="grid size-5 place-items-center rounded bg-[color:var(--chip)] text-[10px] font-black text-[color:var(--accent-strong)]">
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
      className="size-5 shrink-0 object-contain"
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SiteHeader />

      <main
        id="home"
        className="mx-auto w-full max-w-[1014px] px-5 pb-8 pt-9 sm:px-8 lg:pt-12"
      >
        <section className="grid items-center gap-12 py-6 md:grid-cols-[1.08fr_0.92fr] md:py-10">
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/10 bg-[color:var(--success-soft)] px-3 py-1.5 text-xs font-extrabold text-[color:var(--success)] shadow-[0_0_28px_rgba(34,197,94,0.1)]">
              <span className="size-1.5 rounded-full bg-[color:var(--success)] shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
              {profile.availability}
            </span>

            <h1 className="mt-7 max-w-[620px] text-5xl font-extrabold leading-[1.03] tracking-[-0.055em] text-[color:var(--text)] sm:text-6xl lg:text-[64px]">
              hi, I&apos;m{" "}
              <span className="text-[color:var(--accent)]">{profile.shortName}.</span>
            </h1>

            <p className="mt-5 max-w-[620px] text-[1.35rem] font-bold leading-[1.45] tracking-[-0.025em] text-[color:var(--text)] sm:text-2xl">
              {profile.headline}
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-[color:var(--soft-text)]">
              {profile.summary}
            </p>

            <p className="mt-5 text-sm font-medium text-[color:var(--muted)]">
              {profile.personalLine}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={profile.resume}
                download
                className="inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-[color:var(--accent)] px-6 text-sm font-extrabold text-white shadow-[0_18px_38px_rgba(79,107,255,0.28)] hover:bg-[color:var(--accent-strong)]"
              >
                Download resume
                <ArrowRightIcon className="size-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-[color:var(--line-strong)] bg-[color:var(--panel-soft)] px-6 text-sm font-extrabold text-[color:var(--text)] hover:border-[color:var(--accent)]"
              >
                Get in touch
                <MailIcon />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[360px] md:mr-4">
            <div className="dot-grid absolute -right-10 top-2 h-56 w-44 opacity-55" />
            <div className="absolute -left-4 bottom-10 h-40 w-40 rounded-full bg-[rgba(79,107,255,0.18)] blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-[color:var(--line-strong)] bg-[color:var(--panel-strong)] p-2 shadow-[0_28px_72px_rgba(0,0,0,0.36)]">
              <Image
                src="/profile-picture.webp"
                alt={`${profile.name} profile picture`}
                width={738}
                height={942}
                priority
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <section
          aria-label="Skills"
          className="glass-card mt-4 flex flex-col gap-4 rounded-xl px-5 py-4 sm:flex-row sm:px-6"
        >
          <div className="flex shrink-0 items-center pt-1">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.1em] text-[color:var(--muted)]">
              Tech stack
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="chip inline-flex h-10 items-center gap-2.5 rounded-md px-3 text-sm font-extrabold text-[color:var(--soft-text)] shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              >
                <SkillIcon skill={skill} />
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-9" aria-labelledby="experience-heading">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2
              id="experience-heading"
              className="text-2xl font-extrabold tracking-[-0.04em] text-[color:var(--text)]"
            >
              Experience
            </h2>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 text-sm font-extrabold text-[color:var(--accent-strong)] hover:text-[color:var(--text)] sm:inline-flex"
            >
              View full timeline
              <ArrowRightIcon />
            </a>
          </div>

          <div>
            <div className="space-y-3">
              {experiences.map((experience) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="glass-card relative rounded-xl p-5 hover:border-[color:var(--line-strong)] sm:p-6"
                >
                  <div className="grid gap-5 md:grid-cols-[1fr_auto]">
                    <div className="flex gap-4">
                      <div className="grid size-14 shrink-0 place-items-center rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] text-sm font-black text-[color:var(--text)] shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                        {experience.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold tracking-[-0.035em] text-[color:var(--text)]">
                          {experience.company}
                        </h3>
                        <p className="mt-1 text-sm font-extrabold text-[color:var(--accent-strong)]">
                          {experience.role}
                        </p>
                        <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-6 text-[color:var(--soft-text)]">
                          {experience.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex self-start items-center gap-2 md:justify-end">
                      <span className="whitespace-nowrap text-sm font-medium text-[color:var(--muted)]">
                        {experience.status
                          ? `${experience.period} -`
                          : experience.period}
                      </span>
                      {experience.status ? (
                        <span className="inline-flex items-center rounded-md bg-[color:var(--success-soft)] px-2.5 py-1 text-xs font-extrabold text-[color:var(--success)]">
                          {experience.status}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="mr-1 text-sm text-[color:var(--soft-text)]">
                      Tech used:
                    </span>
                    {experience.tech.map((item) => (
                      <span
                        key={item}
                        className="chip rounded-md px-3 py-1.5 text-xs font-bold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mt-8" aria-labelledby="projects-heading">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2
              id="projects-heading"
              className="text-2xl font-extrabold tracking-[-0.04em] text-[color:var(--text)]"
            >
              Featured projects
            </h2>
            <span className="hidden items-center gap-2 text-sm font-extrabold text-[color:var(--accent-strong)] sm:inline-flex">
              View all projects
              <ArrowRightIcon />
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="glass-card group flex min-h-full flex-col overflow-hidden rounded-xl p-4 transition hover:border-[color:var(--accent)] sm:p-5"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--chip)]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    className="h-full w-full object-cover object-center opacity-85 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                  <h3 className="text-2xl font-extrabold tracking-[-0.045em] text-[color:var(--text)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-[34rem] text-base leading-7 text-[color:var(--soft-text)]">
                    {project.summary}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-7">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="chip rounded-md px-2.5 py-1.5 text-xs font-extrabold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
