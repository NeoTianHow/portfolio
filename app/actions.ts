"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import type {
  ContactActionState,
  ContactFormValues,
} from "@/lib/contact";
import {
  contactRateLimiter,
  getContactRateLimitKey,
} from "@/lib/contact-rate-limit";
import { profile } from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your name.")
    .max(80, "Keep your name under 80 characters."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Keep your email under 254 characters."),
  message: z
    .string()
    .trim()
    .min(20, "Write at least 20 characters.")
    .max(3000, "Keep your message under 3000 characters."),
  company: z.string().optional(),
});

const genericError =
  `I could not send that message right now. Please email me directly at ${profile.email}.`;

function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

function toFieldErrors(
  fieldErrors: z.inferFlattenedErrors<typeof contactSchema>["fieldErrors"],
) {
  return {
    name: fieldErrors.name?.[0],
    email: fieldErrors.email?.[0],
    message: fieldErrors.message?.[0],
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildPlainTextEmail({
  email,
  message,
  name,
  timestamp,
}: ContactFormValues & { timestamp: string }) {
  return [
    "New portfolio contact message",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Source: ${siteConfig.url}/#contact`,
    `Sent: ${timestamp}`,
    "",
    "Message:",
    message,
  ].join("\n");
}

function buildHtmlEmail({
  email,
  message,
  name,
  timestamp,
}: ContactFormValues & { timestamp: string }) {
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return `
    <div style="font-family: Arial, sans-serif; color: #15181a; line-height: 1.6;">
      <h1 style="font-size: 20px; margin: 0 0 16px;">New portfolio contact message</h1>
      <table style="border-collapse: collapse; margin-bottom: 20px;">
        <tr><td style="padding: 4px 16px 4px 0; font-weight: 700;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 4px 16px 4px 0; font-weight: 700;">Email</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding: 4px 16px 4px 0; font-weight: 700;">Source</td><td>${escapeHtml(siteConfig.url)}/#contact</td></tr>
        <tr><td style="padding: 4px 16px 4px 0; font-weight: 700;">Sent</td><td>${escapeHtml(timestamp)}</td></tr>
      </table>
      <div style="border-top: 1px solid #d7dddc; padding-top: 16px;">
        ${safeMessage}
      </div>
    </div>
  `;
}

export async function sendContactMessage(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const raw = {
    name: readText(formData, "name"),
    email: readText(formData, "email"),
    message: readText(formData, "message"),
    company: readText(formData, "company"),
  };

  if (raw.company.trim()) {
    return {
      status: "success",
      message: "Message sent. Thanks for reaching out.",
    };
  }

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      message: "",
      errors: toFieldErrors(parsed.error.flatten().fieldErrors),
      values: {
        name: raw.name,
        email: raw.email,
        message: raw.message,
      },
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Neo Tian How Portfolio <contact@mail.neotianhow.com>";
  const to = process.env.CONTACT_TO_EMAIL ?? profile.email;

  if (!apiKey) {
    console.error("Contact form is missing RESEND_API_KEY.");
    return {
      status: "error",
      message: genericError,
      values: parsed.data,
    };
  }

  const rateLimit = contactRateLimiter.check(
    getContactRateLimitKey(await headers()),
  );

  if (!rateLimit.allowed) {
    console.warn("Contact form rate limit exceeded.", {
      resetAt: new Date(rateLimit.resetAt).toISOString(),
      retryAfterSeconds: rateLimit.retryAfterSeconds,
    });
    return {
      status: "error",
      message: genericError,
      values: parsed.data,
    };
  }

  const resend = new Resend(apiKey);
  const timestamp = new Date().toISOString();

  try {
    const result = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `Portfolio contact from ${parsed.data.name}`,
      text: buildPlainTextEmail({ ...parsed.data, timestamp }),
      html: buildHtmlEmail({ ...parsed.data, timestamp }),
    });

    if (result.error) {
      console.error("Resend contact form error:", result.error);
      return {
        status: "error",
        message: genericError,
        values: parsed.data,
      };
    }

    return {
      status: "success",
      message: "Message sent. Thanks for reaching out.",
    };
  } catch (error) {
    console.error("Unexpected contact form error:", error);
    return {
      status: "error",
      message: genericError,
      values: parsed.data,
    };
  }
}
