import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowRightIcon, MailIcon } from "@/components/icons";
import { profile } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section className="grid gap-9 border-b border-[color:var(--line-strong)] pb-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center lg:gap-8 lg:pb-14">
      <div className="max-w-[46rem]">
        <div className="reveal mb-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--accent-soft)] px-3 py-2 text-sm font-semibold text-[color:var(--accent-strong)]" style={{ "--i": 0 } as CSSProperties}>
          <span className="ping relative size-2 rounded-full bg-[color:var(--accent)]" />
          {profile.availability}
        </div>

        <h1 className="max-w-3xl font-medium tracking-[-0.015em] text-[color:var(--text)]">
          <span className="reveal block text-4xl leading-[1.08] sm:text-5xl lg:text-[58px]" style={{ "--i": 1 } as CSSProperties}>
            Hi, I&apos;m Tian How.
          </span>
          {" "}
          <span className="reveal mt-2 block max-w-[15em] text-3xl leading-[1.12] text-[color:var(--soft-text)] sm:text-[40px] lg:text-[44px]" style={{ "--i": 2 } as CSSProperties}>
            Software engineer based in Singapore.
          </span>
        </h1>

        <p className="reveal mt-6 max-w-[39rem] text-lg font-normal leading-[1.6] text-[color:var(--soft-text)] sm:text-xl" style={{ "--i": 3 } as CSSProperties}>
          <span className="block">
            Full-stack by experience, backend by interest.
          </span>
          <span className="block">
            I build practical software for real-world use.
          </span>
        </p>

        <div className="reveal mt-7 flex flex-col gap-3 sm:flex-row" style={{ "--i": 4 } as CSSProperties}>
          <a
            href={profile.resume}
            download
            className="group inline-flex h-11 items-center justify-center gap-3 bg-[color:var(--accent)] px-5 text-sm font-semibold text-[color:var(--accent-ink)] transition-[background-color,transform] duration-150 ease-[var(--ease-out-quart)] hover:bg-[color:var(--accent-strong)] active:scale-[0.97]"
          >
            Download resume
            <ArrowRightIcon className="size-4 transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex h-11 items-center justify-center gap-3 border border-[color:var(--line-strong)] px-5 text-sm font-semibold text-[color:var(--text)] transition-[color,border-color,transform] duration-150 ease-[var(--ease-out-quart)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] active:scale-[0.97]"
          >
            Contact me
            <MailIcon />
          </a>
        </div>
      </div>

      <div className="flex justify-start lg:justify-end">
        <div className="reveal-wipe overflow-hidden border border-[color:var(--line-strong)] bg-[color:var(--panel)] p-1 lg:w-[340px]">
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
