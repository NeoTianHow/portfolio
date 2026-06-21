import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { profile, projects } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
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
          className="group hidden min-h-11 items-center gap-2 text-sm font-black text-[color:var(--accent)] transition-colors hover:text-[color:var(--text)] sm:inline-flex"
        >
          Download resume
          <ArrowRightIcon className="size-4 transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover:translate-x-1" />
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
              }
            : {};
          return (
            <CardTag
              key={project.slug}
              {...cardProps}
              className="group relative block bg-[color:var(--panel-soft)] p-5 transition-colors duration-300 ease-[var(--ease-out-quart)] hover:bg-[color:var(--panel-strong)] sm:p-6"
            >
              <div className="flex gap-6 lg:gap-10">
                <div className="flex-1">
                  <div>
                    <h3 className="flex items-center gap-2 text-[22px] font-black leading-tight tracking-[-0.03em] text-[color:var(--text)] transition-colors duration-200 group-hover:text-[color:var(--accent-strong)]">
                      {project.title}
                      {project.github && (
                        <ArrowRightIcon className="size-4 -translate-x-1 opacity-0 transition-[transform,opacity] duration-300 ease-[var(--ease-out-quart)] group-hover:translate-x-0 group-hover:opacity-100" />
                      )}
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
                <div className="hidden w-[200px] shrink-0 self-center lg:block">
                  <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--line-strong)] bg-[color:var(--panel)]">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={project.image.width}
                      height={project.image.height}
                      sizes="200px"
                      className="block h-full w-full object-contain transition-transform duration-500 ease-[var(--ease-out-quart)] group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </CardTag>
          );
        })}
      </div>
    </section>
  );
}
