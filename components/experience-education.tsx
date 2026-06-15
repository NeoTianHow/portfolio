"use client";

import Image from "next/image";
import { useId, useLayoutEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";
import {
  education as educationData,
  experiences as experiencesData,
  profile,
  type Education,
  type Experience,
} from "@/lib/portfolio-data";

function LogoBlock({
  logo,
  logoSrc,
  logoSize,
  label,
}: {
  logo: string;
  logoSrc?: string;
  logoSize?: "sm" | "md";
  label: string;
}) {
  if (logoSrc) {
    return (
      <div className="mt-0.5 flex h-11 w-14 shrink-0 items-center justify-center overflow-hidden">
        <Image
          src={logoSrc}
          alt={label}
          width={56}
          height={44}
          unoptimized
          className={`w-auto max-w-[56px] object-contain${logoSize === "sm" ? " h-8" : " h-11"}`}
        />
      </div>
    );
  }
  return (
    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center bg-[color:var(--accent-soft)] font-mono text-xs font-black text-[color:var(--accent-strong)]">
      {logo}
    </div>
  );
}

function ExperienceRow({ experience }: { experience: Experience }) {
  return (
    <article className="bg-[color:var(--panel-soft)] p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <LogoBlock
          logo={experience.logo}
          logoSrc={experience.logoSrc}
          logoSize={experience.logoSize}
          label={experience.company}
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <h3 className="text-[22px] font-black leading-tight tracking-[-0.03em] text-[color:var(--text)]">
              {experience.company}
            </h3>
            {experience.status === "Current" && (
              <span className="inline-flex items-center rounded-full bg-[color:var(--accent-soft)] px-2 py-0.5 text-[11px] font-bold tracking-wide text-[color:var(--accent-strong)]">
                Now
              </span>
            )}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
            <p className="font-bold text-[color:var(--second)]">{experience.role}</p>
            <span className="select-none text-[color:var(--quiet)]">·</span>
            <p className="font-medium text-[color:var(--muted)]">
              {experience.status === "Current"
                ? `${experience.period} – Present`
                : experience.period}
            </p>
          </div>
        </div>
      </div>
      <ul className="mt-4 grid gap-2 text-sm leading-6 text-[color:var(--soft-text)]">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-px w-4 shrink-0 bg-[color:var(--accent)]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {experience.tech.map((item) => (
          <span key={item} className="chip px-2.5 py-1.5 text-xs font-bold">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function EducationRow({ entry }: { entry: Education }) {
  return (
    <article className="bg-[color:var(--panel-soft)] p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <LogoBlock
          logo={entry.logo}
          logoSrc={entry.logoSrc}
          logoSize={entry.logoSize}
          label={entry.school}
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <h3 className="text-[22px] font-black leading-tight tracking-[-0.03em] text-[color:var(--text)]">
              {entry.school}
            </h3>
            {entry.badge && (
              <span className="inline-flex items-center rounded-full bg-[color:var(--accent-soft)] px-2 py-0.5 text-[11px] font-bold tracking-wide text-[color:var(--accent-strong)]">
                {entry.badge}
              </span>
            )}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
            <p className="font-bold text-[color:var(--second)]">{entry.qualification}</p>
            <span className="select-none text-[color:var(--quiet)]">·</span>
            <p className="font-medium text-[color:var(--muted)]">{entry.period}</p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-[color:var(--soft-text)]">{entry.detail}</p>
      {entry.honors && entry.honors.length > 0 && (
        <ul className="mt-4 grid gap-2 text-sm leading-6 text-[color:var(--soft-text)]">
          {entry.honors.map((honor) => (
            <li key={honor.title} className="flex items-baseline gap-3">
              <span className="mt-2 h-px w-4 shrink-0 self-start bg-[color:var(--accent)]" />
              <span>
                <span className="font-bold text-[color:var(--text)]">{honor.title}</span>
                {honor.kind && (
                  <>
                    <span className="select-none text-[color:var(--quiet)]"> · </span>
                    <span className="font-medium text-[color:var(--muted)]">{honor.kind}</span>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

const tabs = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ExperienceEducation() {
  const [active, setActive] = useState<TabId>("experience");
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const index = tabs.findIndex((tab) => tab.id === active);
    const node = tabRefs.current[index];
    if (node) {
      setIndicator({ left: node.offsetLeft, width: node.offsetWidth });
    }
  }, [active]);

  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const dir = event.key === "ArrowRight" ? 1 : -1;
    const next = (index + dir + tabs.length) % tabs.length;
    setActive(tabs[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <section className="section-rule py-9" aria-labelledby={`${baseId}-heading`}>
      <h2 id={`${baseId}-heading`} className="sr-only">
        Experience and education
      </h2>

      <div className="mb-6 flex flex-wrap items-end justify-between gap-x-4 gap-y-3 border-b border-[color:var(--line-strong)]">
        <div
          role="tablist"
          aria-label="Experience and education"
          className="relative -mb-px flex gap-7"
        >
          {tabs.map((tab, index) => {
            const selected = active === tab.id;
            return (
              <button
                key={tab.id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                role="tab"
                type="button"
                id={`${baseId}-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={`pb-2.5 text-3xl font-black tracking-[-0.035em] transition-colors duration-200 ${
                  selected
                    ? "text-[color:var(--text)]"
                    : "text-[color:var(--quiet)] hover:text-[color:var(--soft-text)]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
          <span
            aria-hidden="true"
            className="absolute -bottom-px h-0.5 bg-[color:var(--accent)] transition-[transform,width] duration-300 ease-[var(--ease-out-quint)] motion-reduce:transition-none"
            style={{
              width: indicator.width,
              transform: `translateX(${indicator.left}px)`,
            }}
          />
        </div>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group mb-3 hidden items-center gap-2 text-sm font-black text-[color:var(--accent)] transition-colors hover:text-[color:var(--text)] sm:inline-flex"
        >
          Full profile on LinkedIn
          <ArrowRightIcon className="size-4 transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover:translate-x-1" />
        </a>
      </div>

      <div
        key={active}
        role="tabpanel"
        id={`${baseId}-panel-${active}`}
        aria-labelledby={`${baseId}-tab-${active}`}
        className="panel-swap space-y-px bg-[color:var(--line-strong)]"
      >
        {active === "experience"
          ? experiencesData.map((experience) => (
              <ExperienceRow
                key={`${experience.company}-${experience.role}`}
                experience={experience}
              />
            ))
          : educationData.map((entry) => (
              <EducationRow key={entry.school} entry={entry} />
            ))}
      </div>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        className="group mt-5 inline-flex items-center gap-2 text-sm font-black text-[color:var(--accent)] transition-colors hover:text-[color:var(--text)] sm:hidden"
      >
        Full profile on LinkedIn
        <ArrowRightIcon className="size-4 transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover:translate-x-1" />
      </a>
    </section>
  );
}
