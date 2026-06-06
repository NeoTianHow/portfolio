import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { experiences, profile, projects, skills } from "@/lib/portfolio-data";

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

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SiteHeader />

      <main
        id="home"
        className="mx-auto w-full max-w-[1014px] px-5 pb-8 pt-9 sm:px-8 lg:pt-12"
      >
        <section className="grid items-center gap-12 py-6 md:grid-cols-[1.08fr_0.92fr] md:py-10">
          <div className="reveal flex flex-col items-start">
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
              <Link
                href="#projects"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-[color:var(--accent)] px-6 text-sm font-extrabold text-white shadow-[0_18px_38px_rgba(79,107,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)]"
              >
                View my work
                <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-[color:var(--line-strong)] bg-[color:var(--panel-soft)] px-6 text-sm font-extrabold text-[color:var(--text)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
              >
                Get in touch
                <MailIcon />
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-1 relative mx-auto w-full max-w-[360px] md:mr-4">
            <div className="dot-grid absolute -right-10 top-2 h-56 w-44 opacity-55" />
            <div className="absolute -left-4 bottom-10 h-40 w-40 rounded-full bg-[rgba(79,107,255,0.18)] blur-3xl" />
            <div className="relative rotate-2 overflow-hidden rounded-2xl border border-[color:var(--line-strong)] bg-[color:var(--panel-strong)] p-2 shadow-[0_28px_72px_rgba(0,0,0,0.36)] transition duration-500 hover:rotate-0">
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
          className="glass-card reveal reveal-delay-2 mt-4 flex flex-col gap-4 rounded-xl px-5 py-4 sm:flex-row sm:items-center sm:px-6"
        >
          <div className="flex shrink-0 items-center gap-3">
            <h2 className="text-lg font-extrabold tracking-[-0.03em] text-[color:var(--text)]">
              Skills
            </h2>
            <span className="text-[color:var(--quiet)]">+</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 10).map((skill) => (
              <span
                key={skill}
                className="chip rounded-md px-3 py-1.5 text-xs font-bold"
              >
                {skill}
              </span>
            ))}
            <span className="px-2 py-1.5 text-xs font-bold text-[color:var(--muted)]">
              +{skills.length - 10} more
            </span>
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
              className="hidden items-center gap-2 text-sm font-extrabold text-[color:var(--accent-strong)] transition hover:text-[color:var(--text)] sm:inline-flex"
            >
              View full timeline
              <ArrowRightIcon />
            </a>
          </div>

          <div className="relative pl-0 sm:pl-6">
            <div className="absolute bottom-8 left-1 top-2 hidden w-px bg-[color:var(--line-strong)] sm:block" />
            <div className="space-y-3">
              {experiences.map((experience, index) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className={`glass-card reveal relative rounded-xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--line-strong)] sm:ml-4 sm:p-6 ${
                    index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
                  }`}
                >
                  <span className="absolute -left-[5px] mt-2 hidden size-3 rounded-full border border-[color:var(--accent)] bg-[color:var(--canvas)] shadow-[0_0_0_4px_rgba(79,107,255,0.12)] sm:block" />
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

                    <div className="flex items-start gap-3 md:justify-end">
                      <span className="text-sm font-medium text-[color:var(--muted)]">
                        {experience.period}
                      </span>
                      {experience.status ? (
                        <span className="rounded-md bg-[color:var(--success-soft)] px-2.5 py-1 text-xs font-extrabold text-[color:var(--success)]">
                          {experience.status}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-2">
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
                    <Link
                      href="/#projects"
                      className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-[color:var(--accent-strong)] transition hover:text-[color:var(--text)]"
                    >
                      View projects
                      <ArrowRightIcon />
                    </Link>
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
              View case studies
              <ArrowRightIcon />
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`glass-card reveal group grid overflow-hidden rounded-xl p-3 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] sm:grid-cols-[180px_1fr] ${
                  index === 1 ? "reveal-delay-1" : ""
                }`}
              >
                <div className="relative min-h-44 overflow-hidden rounded-lg bg-[color:var(--chip)] sm:min-h-full">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  {index === 0 ? (
                    <span className="absolute right-3 top-3 rounded-full bg-[color:var(--accent)] px-3 py-1 text-xs font-extrabold text-white">
                      Featured
                    </span>
                  ) : null}
                </div>
                <div className="flex min-h-48 flex-col p-3 sm:min-h-0 sm:py-2">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                    {project.eyebrow}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold tracking-[-0.03em] text-[color:var(--text)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-[color:var(--soft-text)]">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 5).map((item) => (
                      <span
                        key={item}
                        className="chip rounded px-2 py-1 text-[11px] font-bold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-extrabold text-[color:var(--accent-strong)]">
                    Read case study
                    <ArrowRightIcon />
                  </span>
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
