import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowRightIcon, MailIcon } from "@/components/icons";
import { profile } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section className="relative border-b border-[color:var(--line-strong)] pb-11 pt-7 lg:pb-16 lg:pt-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:items-center">
        <div className="max-w-[46rem]">
          <h1 className="font-black tracking-[-0.025em] text-[color:var(--text)]">
            <span
              className="reveal block max-w-[11em] text-[clamp(3.25rem,8vw,5rem)] leading-[0.95] [text-wrap:balance]"
              style={{ "--i": 0 } as CSSProperties}
            >
              Hi, I&apos;m Tian How.
            </span>
            <span
              className="reveal mt-3 block max-w-[13em] text-[clamp(2rem,4.7vw,3.45rem)] font-medium leading-[1.02] tracking-[-0.03em] text-[color:var(--soft-text)] [text-wrap:balance]"
              style={{ "--i": 1 } as CSSProperties}
            >
              Software engineer based in Singapore.
            </span>
          </h1>

          <p
            className="reveal mt-6 max-w-[38rem] border-t border-[color:var(--line-strong)] pt-5 text-lg font-normal leading-[1.6] text-[color:var(--soft-text)] sm:text-xl"
            style={{ "--i": 2 } as CSSProperties}
          >
            <span className="block">
              Full-stack by experience, backend by interest.
            </span>
            <span className="block">
              I build practical software for real-world use.
            </span>
          </p>

          <div
            className="reveal mt-7 flex flex-col gap-3 sm:flex-row"
            style={{ "--i": 3 } as CSSProperties}
          >
            <a
              href={profile.resume}
              download
              className="group inline-flex h-12 items-center justify-center gap-3 bg-[color:var(--accent)] px-5 text-sm font-semibold text-[color:var(--accent-ink)] transition-[background-color,transform] duration-150 ease-[var(--ease-out-quart)] hover:bg-[color:var(--accent-strong)] active:scale-[0.97] sm:min-w-44"
            >
              Download resume
              <ArrowRightIcon className="size-4 transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex h-12 items-center justify-center gap-3 border border-[color:var(--line-strong)] bg-[color:var(--panel-soft)] px-5 text-sm font-semibold text-[color:var(--text)] transition-[color,border-color,background-color,transform] duration-150 ease-[var(--ease-out-quart)] hover:border-[color:var(--accent)] hover:bg-[color:var(--panel-strong)] hover:text-[color:var(--accent)] active:scale-[0.97] sm:min-w-36"
            >
              Contact me
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:justify-self-end">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 left-5 right-5 h-28 bg-[color:var(--accent-soft)]"
          />
          <div className="reveal-wipe relative overflow-hidden border border-[color:var(--line-strong)] bg-[color:var(--panel)] p-1.5">
            <Image
              src="/profile-picture.webp"
              alt={`${profile.name} profile picture`}
              width={738}
              height={942}
              priority
              className="aspect-[4/5] w-full object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -right-3 top-6 hidden h-20 w-px bg-[color:var(--line-strong)] sm:block"
          />
          <div
            aria-hidden="true"
            className="absolute -right-8 top-12 hidden h-px w-20 bg-[color:var(--line-strong)] sm:block"
          />
        </div>
      </div>
    </section>
  );
}
