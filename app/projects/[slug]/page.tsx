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

  return (
    <div className="min-h-screen overflow-hidden">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1014px] px-5 pb-8 pt-8 sm:px-8">
        <Link
          href="/#projects"
          className="reveal inline-flex items-center gap-2 text-sm font-extrabold text-[color:var(--accent-strong)] transition hover:text-[color:var(--text)]"
        >
          <ArrowLeftIcon />
          Back to projects
        </Link>

        <section className="reveal mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
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
                      className="chip rounded-md px-3 py-1.5 text-xs font-bold transition hover:text-[color:var(--text)]"
                    >
                      Demo video
                    </a>
                  ) : null}
                  <a
                    href={`mailto:${profile.email}`}
                    className="chip rounded-md px-3 py-1.5 text-xs font-bold transition hover:text-[color:var(--text)]"
                  >
                    Ask about this
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="reveal reveal-delay-1 mt-8 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] shadow-[0_24px_70px_rgba(0,0,0,0.26)]">
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
          <section className="reveal reveal-delay-2 mt-5 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.2)]">
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
          <article className="glass-card reveal rounded-2xl p-6">
            <h2 className="text-xl font-extrabold tracking-[-0.035em] text-[color:var(--text)]">
              Problem
            </h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--soft-text)]">
              {project.problem}
            </p>
          </article>
          <article className="glass-card reveal reveal-delay-1 rounded-2xl p-6">
            <h2 className="text-xl font-extrabold tracking-[-0.035em] text-[color:var(--text)]">
              Solution
            </h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--soft-text)]">
              {project.solution}
            </p>
          </article>
        </section>

        <section className="mt-4 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="glass-card reveal rounded-2xl p-6">
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

          <article className="glass-card reveal reveal-delay-1 rounded-2xl p-6">
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

        <section className="glass-card reveal mt-4 rounded-2xl p-6">
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

        <section className="reveal mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[color:var(--line)] bg-[linear-gradient(135deg,rgba(79,107,255,0.22),rgba(15,23,42,0.72))] p-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold tracking-[-0.04em] text-[color:var(--text)]">
              Interested in the details?
            </h2>
            <p className="mt-2 text-sm leading-6 text-[color:var(--soft-text)]">
              I can walk through the tradeoffs, implementation decisions, and what I would improve in a production version.
            </p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-[color:var(--accent)] px-6 text-sm font-extrabold text-white shadow-[0_18px_38px_rgba(79,107,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)]"
          >
            Get in touch
            <ArrowRightIcon />
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
