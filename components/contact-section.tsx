import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-rule py-10 lg:py-12"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[58rem]">
        <div className="mb-6 border-b border-[color:var(--line-strong)] pb-5">
          <h2
            id="contact-heading"
            className="text-[clamp(2rem,5vw,3.25rem)] font-black leading-[0.98] tracking-[-0.03em] text-[color:var(--text)] [text-wrap:balance]"
          >
            Let&apos;s talk.
          </h2>
          <p className="mt-3 max-w-[38rem] text-base leading-7 text-[color:var(--soft-text)]">
            Open to software roles, collaborations, and good conversations.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
