"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { Input } from "@repo/design-system/components/ui/input";
import { Label } from "@repo/design-system/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/design-system/components/ui/select";
import { Textarea } from "@repo/design-system/components/ui/textarea";
import { useActionState } from "react";
import { type ContactState, submitContact } from "../actions/contact";

const initialState: ContactState = { status: "idle" };

export function ContactForm({ initialTopic = "" }: { initialTopic?: string }) {
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
        <Select defaultValue={initialTopic} name="topic" required>
          <SelectTrigger className="contact-select-trigger" id="contact-topic">
            <SelectValue placeholder="Choose a topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Security services">Security services</SelectItem>
            <SelectItem value="Hardware VAPT">Hardware VAPT</SelectItem>
            <SelectItem value="OT / ICS assessment">
              OT / ICS assessment
            </SelectItem>
            <SelectItem value="IoT security testing">
              IoT security testing
            </SelectItem>
            <SelectItem value="SCADA network testing">
              SCADA network testing
            </SelectItem>
            <SelectItem value="Red team operations">
              Red team operations
            </SelectItem>
            <SelectItem value="Compliance & risk advisory">
              Compliance &amp; risk advisory
            </SelectItem>
            <SelectItem value="FlagForge">FlagForge</SelectItem>
            <SelectItem value="SecYourFlow demo">SecYourFlow demo</SelectItem>
            <SelectItem value="Other inquiry">Other inquiry</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="form-field">
        <Label htmlFor="contact-message">A little context</Label>
        <Textarea
          aria-describedby="contact-message-guidance"
          id="contact-message"
          maxLength={5000}
          minLength={20}
          name="message"
          placeholder="What are you working on, and what would you like help with?"
          required
          rows={6}
        />
        <span className="form-help" id="contact-message-guidance">
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
