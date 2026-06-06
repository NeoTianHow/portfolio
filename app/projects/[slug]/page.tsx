import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProject, profile, projects } from "@/lib/portfolio-data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function ArrowLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5" />
      <path d="m11 6-6 6 6 6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4"
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

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found | Neo Tian How",
    };
  }

  return {
    title: `${project.title} | Neo Tian How`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[projectIndex + 1];

  return (
    <div className="min-h-screen overflow-hidden">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1014px] px-5 pb-8 pt-8 sm:px-8">
        <nav
          aria-label="Project navigation"
          className="flex items-center justify-between gap-4"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[color:var(--accent-strong)] hover:text-[color:var(--text)]"
          >
            <ArrowLeftIcon />
            Back to projects
          </Link>

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-right text-sm font-extrabold text-[color:var(--accent-strong)] hover:text-[color:var(--text)]"
            >
              Next project
              <ArrowRightIcon />
            </Link>
          ) : null}
        </nav>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
              {project.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.055em] text-[color:var(--text)] sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--soft-text)]">
              {project.summary}
            </p>
          </div>

          <aside className="glass-card h-fit rounded-2xl p-5">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="font-extrabold text-[color:var(--text)]">Timeline</dt>
                <dd className="mt-1 text-[color:var(--muted)]">{project.period}</dd>
              </div>
              <div>
                <dt className="font-extrabold text-[color:var(--text)]">Role</dt>
                <dd className="mt-1 text-[color:var(--muted)]">
                  Full-stack engineering, architecture, and validation
                </dd>
              </div>
              <div>
                <dt className="font-extrabold text-[color:var(--text)]">Links</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.video ? (
                    <a
                      href={project.video}
                      className="chip rounded-md px-3 py-1.5 text-xs font-bold hover:text-[color:var(--text)]"
                    >
                      Demo video
                    </a>
                  ) : null}
                  <a
                    href={`mailto:${profile.email}`}
                    className="chip rounded-md px-3 py-1.5 text-xs font-bold hover:text-[color:var(--text)]"
                  >
                    Ask about this
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="mt-8 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] shadow-[0_24px_70px_rgba(0,0,0,0.26)]">
          {project.video ? (
            <video
              controls
              preload="metadata"
              poster={project.image.src}
              className="aspect-video w-full bg-black object-cover"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              priority
              className="w-full object-cover"
            />
          )}
        </section>

        {project.video ? (
          <section className="mt-5 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.2)]">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              className="w-full rounded-xl object-cover"
            />
          </section>
        ) : null}

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-extrabold tracking-[-0.035em] text-[color:var(--text)]">
              Problem
            </h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--soft-text)]">
              {project.problem}
            </p>
          </article>
          <article className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-extrabold tracking-[-0.035em] text-[color:var(--text)]">
              Solution
            </h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--soft-text)]">
              {project.solution}
            </p>
          </article>
        </section>

        <section className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-extrabold tracking-[-0.035em] text-[color:var(--text)]">
              Architecture notes
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--soft-text)]">
              {project.architecture.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-extrabold tracking-[-0.035em] text-[color:var(--text)]">
              Outcomes
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--soft-text)]">
              {project.outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[color:var(--success)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="glass-card mt-4 rounded-2xl p-6">
          <h2 className="text-xl font-extrabold tracking-[-0.035em] text-[color:var(--text)]">
            Tech stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span key={item} className="chip rounded-md px-3 py-1.5 text-xs font-bold">
                {item}
              </span>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
