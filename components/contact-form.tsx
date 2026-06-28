"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { sendContactMessage } from "@/app/actions";
import { ArrowRightIcon } from "@/components/icons";
import { initialContactState } from "@/lib/contact";
import type { ContactField } from "@/lib/contact";
import type { ChangeEvent } from "react";

const fieldClass =
  "mt-2 block min-h-12 w-full border bg-[color:var(--panel)] px-4 py-3 text-base text-[color:var(--text)] outline-none transition-[border-color,background-color] duration-200 ease-[var(--ease-out-quart)] placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:bg-[color:var(--panel-strong)] disabled:cursor-not-allowed disabled:opacity-70";
const errorClass =
  "border-[color:var(--danger-border)] focus:border-[color:var(--danger-border)]";
const requiredMark = (
  <span className="text-[color:var(--danger)]" aria-hidden="true">
    *
  </span>
);

function FieldError({
  children,
  id,
}: {
  children?: string;
  id: string;
}) {
  if (!children) return null;

  return (
    <p id={id} className="mt-2 text-sm font-semibold text-[color:var(--danger)]">
      {children}
    </p>
  );
}

function getFieldProps(field: ContactField, error?: string) {
  const errorId = `contact-${field}-error`;

  return {
    errorId,
    inputProps: {
      "aria-describedby": error ? errorId : undefined,
      "aria-invalid": Boolean(error),
    },
  };
}

function isValidFieldValue(field: ContactField, value: string) {
  const trimmed = value.trim();

  if (field === "name") {
    return trimmed.length >= 2 && trimmed.length <= 80;
  }

  if (field === "email") {
    return (
      trimmed.length <= 254 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
    );
  }

  return trimmed.length >= 20 && trimmed.length <= 3000;
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialContactState,
  );
  const [clearedErrors, setClearedErrors] = useState<
    Partial<Record<ContactField, true>>
  >({});
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  useEffect(() => {
    if (state.status !== "error") return;

    const frame = requestAnimationFrame(() => {
      const firstInvalid = formRef.current?.querySelector<HTMLElement>(
        '[aria-invalid="true"]',
      );

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      statusRef.current?.focus();
    });

    return () => cancelAnimationFrame(frame);
  }, [state.errors, state.status]);

  function handleFieldChange(
    field: ContactField,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (!state.errors?.[field]) return;

    if (isValidFieldValue(field, event.currentTarget.value)) {
      setClearedErrors((current) => ({
        ...current,
        [field]: true,
      }));
    }
  }

  const nameError = clearedErrors.name ? undefined : state.errors?.name;
  const emailError = clearedErrors.email ? undefined : state.errors?.email;
  const messageError = clearedErrors.message
    ? undefined
    : state.errors?.message;
  const nameProps = getFieldProps("name", nameError);
  const emailProps = getFieldProps("email", emailError);
  const messageProps = getFieldProps("message", messageError);
  const statusId = "contact-status";
  const hasVisibleErrors = Boolean(nameError || emailError || messageError);
  const formStatusMessage = hasVisibleErrors
    ? "Please fix the highlighted fields and send again."
    : state.message;

  return (
    <form
      ref={formRef}
      action={formAction}
      aria-describedby={formStatusMessage ? statusId : undefined}
      className="relative grid gap-4 sm:grid-cols-2"
      onSubmit={() => setClearedErrors({})}
      noValidate
    >
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip-path:inset(50%)]">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="contact-name"
          className="text-sm font-black text-[color:var(--text)]"
        >
          Name {requiredMark}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          disabled={pending}
          className={`${fieldClass} ${
            nameError
              ? errorClass
              : "border-[color:var(--line-strong)]"
          }`}
          defaultValue={state.values?.name}
          onChange={(event) => handleFieldChange("name", event)}
          {...nameProps.inputProps}
        />
        <FieldError id={nameProps.errorId}>{nameError}</FieldError>
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="text-sm font-black text-[color:var(--text)]"
        >
          Email {requiredMark}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={pending}
          className={`${fieldClass} ${
            emailError
              ? errorClass
              : "border-[color:var(--line-strong)]"
          }`}
          defaultValue={state.values?.email}
          onChange={(event) => handleFieldChange("email", event)}
          {...emailProps.inputProps}
        />
        <FieldError id={emailProps.errorId}>{emailError}</FieldError>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-black text-[color:var(--text)]"
        >
          Message {requiredMark}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          disabled={pending}
          className={`${fieldClass} resize-y leading-7 ${
            messageError
              ? errorClass
              : "border-[color:var(--line-strong)]"
          }`}
          defaultValue={state.values?.message}
          onChange={(event) => handleFieldChange("message", event)}
          {...messageProps.inputProps}
        />
        <FieldError id={messageProps.errorId}>
          {messageError}
        </FieldError>
      </div>

      <div className="flex flex-col gap-3 border-t border-[color:var(--line)] pt-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-h-6 flex-1">
          {formStatusMessage ? (
            <p
              ref={statusRef}
              id={statusId}
              aria-live={state.status === "success" ? "polite" : "assertive"}
              role={state.status === "success" ? "status" : "alert"}
              tabIndex={state.status === "error" ? -1 : undefined}
              className={`text-sm font-semibold ${
                state.status === "success"
                  ? "text-[color:var(--accent-strong)]"
                  : state.status === "error"
                    ? "text-[color:var(--danger)]"
                    : "text-[color:var(--soft-text)]"
              }`}
            >
              {formStatusMessage}
            </p>
          ) : null}
        </div>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex h-12 items-center justify-center gap-3 bg-[color:var(--accent)] px-5 text-sm font-semibold text-[color:var(--accent-ink)] transition-[background-color,transform,opacity] duration-150 ease-[var(--ease-out-quart)] hover:bg-[color:var(--accent-strong)] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-40"
        >
          {pending ? "Sending" : "Send message"}
          <ArrowRightIcon className="size-4 transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
