import Image from "next/image";
import { ArrowRightIcon, MailIcon } from "@/components/icons";
import { profile } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
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
  );
}
