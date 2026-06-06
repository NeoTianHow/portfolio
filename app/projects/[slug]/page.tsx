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
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5" />
      <path d="m11 6-6 6 6 6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
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

      <main className="mx-auto w-full max-w-[1120px] px-5 pb-10 pt-8 sm:px-8">
        <nav aria-label="Project navigation" className="flex items-center justify-between gap-4 text-sm font-black">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-[color:var(--accent)] hover:text-[color:var(--text)]">
            <ArrowLeftIcon />
            Back to projects
          </Link>

          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`} className="inline-flex items-center gap-2 text-right text-[color:var(--accent)] hover:text-[color:var(--text)]">
              Next project
              <ArrowRightIcon />
            </Link>
          ) : null}
        </nav>

        <section className="mt-10 grid gap-8 border-b border-[color:var(--line-strong)] pb-10 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="font-mono text-xs font-bold text-[color:var(--second)]">{project.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[1] tracking-[-0.04em] text-[color:var(--text)] sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-bold leading-8 text-[color:var(--soft-text)]">
              {project.summary}
            </p>
          </div>

          <aside className="h-fit bg-[color:var(--panel)] p-5 shadow-[0_8px_16px_rgba(21,24,26,0.05)]">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="font-black text-[color:var(--text)]">Timeline</dt>
                <dd className="mt-1 font-medium text-[color:var(--muted)]">{project.period}</dd>
              </div>
              <div>
                <dt className="font-black text-[color:var(--text)]">Role</dt>
                <dd className="mt-1 font-medium text-[color:var(--muted)]">
                  Full-stack engineering, architecture, and validation
                </dd>
              </div>
              <div>
                <dt className="font-black text-[color:var(--text)]">Links</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {project.video ? (
                    <a href={project.video} className="chip px-3 py-1.5 text-xs font-bold hover:text-[color:var(--text)]">
                      Demo video
                    </a>
                  ) : null}
                  <a href={`mailto:${profile.email}`} className="chip px-3 py-1.5 text-xs font-bold hover:text-[color:var(--text)]">
                    Ask about this
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="mt-8 overflow-hidden bg-[color:var(--text)] p-2">
          {project.video ? (
            <video controls preload="metadata" poster={project.image.src} className="aspect-video w-full bg-black object-cover">
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
          <section className="mt-5 bg-[color:var(--panel)] p-3 shadow-[0_8px_16px_rgba(21,24,26,0.05)]">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              className="w-full object-cover"
            />
          </section>
        ) : null}

        <section className="mt-10 grid gap-px bg-[color:var(--line-strong)] md:grid-cols-2">
          {[
            ["Problem", project.problem],
            ["Solution", project.solution],
          ].map(([title, body]) => (
            <article key={title} className="bg-[color:var(--panel-soft)] p-6">
              <h2 className="text-xl font-black tracking-[-0.03em] text-[color:var(--text)]">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-[color:var(--soft-text)]">{body}</p>
            </article>
          ))}
        </section>

        <section className="mt-px grid gap-px bg-[color:var(--line-strong)] md:grid-cols-2">
          <article className="bg-[color:var(--panel-soft)] p-6">
            <h2 className="text-xl font-black tracking-[-0.03em] text-[color:var(--text)]">
              Architecture notes
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--soft-text)]">
              {project.architecture.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-px w-4 shrink-0 bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-[color:var(--panel-soft)] p-6">
            <h2 className="text-xl font-black tracking-[-0.03em] text-[color:var(--text)]">
              Outcomes
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--soft-text)]">
              {project.outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-px w-4 shrink-0 bg-[color:var(--success)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-px bg-[color:var(--panel-soft)] p-6">
          <h2 className="text-xl font-black tracking-[-0.03em] text-[color:var(--text)]">
            Tech stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span key={item} className="chip px-3 py-1.5 text-xs font-bold">
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
