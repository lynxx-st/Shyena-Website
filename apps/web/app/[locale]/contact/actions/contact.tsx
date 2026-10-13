"use server";

import { resend } from "@repo/email";
import { ContactTemplate } from "@repo/email/templates/contact";
import { createRateLimiter, slidingWindow } from "@repo/rate-limit";
import { headers } from "next/headers";
import { env } from "@/env";

export interface ContactState {
  message?: string;
  status: "idle" | "success" | "error";
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _previousState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = stringField(formData, "name", 120);
  const email = stringField(formData, "email", 254);
  const topic = stringField(formData, "topic", 80);
  const message = stringField(formData, "message", 5000);
  const honeypot = stringField(formData, "website", 200);

  if (honeypot) {
    return {
      status: "success",
      message: "Thanks. Your message has been received.",
    };
  }
  if (
    !(name && email && topic) ||
    message.length < 20 ||
    !isValidEmail(email)
  ) {
    return {
      status: "error",
      message:
        "Check your name, email address and message (at least 20 characters), then try again.",
    };
  }

  try {
    if (env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN) {
      const rateLimiter = createRateLimiter({
        limiter: slidingWindow(5, "1h"),
      });
      const requestHeaders = await headers();
      const ip =
        requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        "unknown";
      const { success } = await rateLimiter.limit(`contact_form_${ip}`);
      if (!success) {
        return {
          status: "error",
          message:
            "Too many messages were sent from this connection. Please try again later or email us directly.",
        };
      }
    }

    if (!(resend && env.RESEND_FROM)) {
      return {
        status: "error",
        message:
          "The form is not connected yet. Please email whois@shyenasec.com directly.",
      };
    }

    const result = await resend.emails.send({
      from: env.RESEND_FROM,
      to: "whois@shyenasec.com",
      subject: `Website inquiry: ${topic}`,
      replyTo: email,
      react: (
        <ContactTemplate
          email={email}
          message={`Topic: ${topic}\n\n${message}`}
          name={name}
        />
      ),
    });
    if (result.error) {
      return {
        status: "error",
        message:
          "We couldn’t send your message just now. Please email whois@shyenasec.com directly.",
      };
    }
    return {
      status: "success",
      message: "Thank you. Your message has been sent to our team.",
    };
  } catch {
    return {
      status: "error",
      message:
        "We couldn’t send your message just now. Please email whois@shyenasec.com directly.",
    };
  }
}

function stringField(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isValidEmail(value: string) {
  return emailPattern.test(value);
}
