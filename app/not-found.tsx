import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-[1120px] place-items-center px-5 py-16 sm:px-8">
      <section className="max-w-[42rem] border-t border-[color:var(--line-strong)] pt-8">
        <p className="text-sm font-black text-[color:var(--accent)]">404</p>
        <h1 className="mt-3 text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.98] tracking-[-0.035em] text-[color:var(--text)] [text-wrap:balance]">
          This page is not in the dossier.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[color:var(--soft-text)]">
          The portfolio route you requested does not exist. Return home to view
          {` ${siteConfig.name}'s`} experience, projects, and contact details.
        </p>
        <Link
          href="/"
          className="group mt-7 inline-flex h-12 items-center justify-center gap-3 bg-[color:var(--accent)] px-5 text-sm font-semibold text-[color:var(--accent-ink)] transition-[background-color,transform] duration-150 ease-[var(--ease-out-quart)] hover:bg-[color:var(--accent-strong)] active:scale-[0.97]"
        >
          Back home
          <ArrowRightIcon className="size-4 transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover:translate-x-1" />
        </Link>
      </section>
    </main>
  );
}
