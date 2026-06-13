import Image from "next/image";
import { skillIconUrls } from "@/components/skill-icons";

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

export function TechStackSection() {
  return (
    <section aria-labelledby="skills-heading" className="section-rule py-9">
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
  );
}
