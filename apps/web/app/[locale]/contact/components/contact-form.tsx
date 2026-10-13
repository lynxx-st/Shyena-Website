"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { Input } from "@repo/design-system/components/ui/input";
import { Label } from "@repo/design-system/components/ui/label";
import { Textarea } from "@repo/design-system/components/ui/textarea";
import { useActionState } from "react";
import { type ContactState, submitContact } from "../actions/contact";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );

  return (
    <form action={formAction} className="contact-form">
      <div className="form-field">
        <Label htmlFor="contact-name">Your name</Label>
        <Input
          autoComplete="name"
          id="contact-name"
          maxLength={120}
          name="name"
          required
        />
      </div>
      <div className="form-field">
        <Label htmlFor="contact-email">Work email</Label>
        <Input
          autoComplete="email"
          id="contact-email"
          maxLength={254}
          name="email"
          required
          type="email"
        />
      </div>
      <div className="form-field">
        <Label htmlFor="contact-topic">What would you like to discuss?</Label>
        <select defaultValue="" id="contact-topic" name="topic" required>
          <option disabled value="">
            Choose a topic
          </option>
          <option value="Security services">Security services</option>
          <option value="FlagForge">FlagForge</option>
          <option value="SecYourFlow demo">SecYourFlow demo</option>
          <option value="Other inquiry">Other inquiry</option>
        </select>
      </div>
      <div className="form-field">
        <Label htmlFor="contact-message">A little context</Label>
        <Textarea
          id="contact-message"
          maxLength={5000}
          minLength={20}
          name="message"
          placeholder="What are you working on, and what would you like help with?"
          required
          rows={6}
        />
        <span className="form-help">
          Please don’t include passwords, access tokens or other secrets.
        </span>
      </div>
      <div aria-hidden="true" className="honeypot">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          autoComplete="off"
          id="contact-website"
          name="website"
          tabIndex={-1}
        />
      </div>
      {state.status !== "idle" && (
        <p
          aria-live="polite"
          className={`form-status ${state.status === "error" ? "error" : ""}`}
          role={state.status === "error" ? "alert" : "status"}
        >
          {state.message}
        </p>
      )}
      <Button
        className="button button-primary form-submit"
        disabled={pending}
        size="lg"
        type="submit"
      >
        {pending ? "Sending…" : "Send inquiry"}{" "}
        <span aria-hidden="true">↗</span>
      </Button>
      <p className="form-help">
        Your message will be sent to Shyena Technologies. See the{" "}
        <a href="/privacy">privacy notice</a>.
      </p>
    </form>
  );
}
