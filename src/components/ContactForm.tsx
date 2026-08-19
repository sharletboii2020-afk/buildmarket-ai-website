"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { contact } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-2 focus:border-accent";

// Static export (no server) can't run an API route, so this opens a
// pre-filled email to contact.email instead of POSTing anywhere.
function buildMailtoLink(data: Record<string, string>) {
  const subject = `New project inquiry from ${data.name}`;
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone / WhatsApp: ${data.phone}`,
    data.service ? `Service interested in: ${data.service}` : null,
  ].filter(Boolean);
  const params = new URLSearchParams({ subject, body: lines.join("\n") });
  return `${contact.emailLink}?${params.toString()}`;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (!data.name?.trim() || !data.email?.trim() || !data.phone?.trim()) {
      setStatus("error");
      setErrorMessage("Name, email, and phone are required.");
      return;
    }

    setStatus("submitting");
    window.location.href = buildMailtoLink(data);
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="shadow-premium flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-10 text-center sm:p-14">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft/30">
          <CheckCircle2 className="h-7 w-7 text-accent-strong" />
        </span>
        <h3 className="text-lg font-semibold text-foreground">
          Your email app should be open now.
        </h3>
        <p className="max-w-sm text-sm text-muted">
          Just hit send on the pre-filled message and we&apos;ll reply by
          email or WhatsApp shortly. Didn&apos;t open?{" "}
          <a href={contact.emailLink} className="font-medium text-accent-strong hover:underline">
            Email us directly
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-accent-strong hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClasses}
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses}
          placeholder="jane@company.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Phone / WhatsApp Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={inputClasses}
          placeholder="+1 555 123 4567"
        />
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-medium text-foreground">
          Service Interested In <span className="text-muted-2">(optional)</span>
        </label>
        <select id="service" name="service" className={inputClasses} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option value="UGC Ads">UGC Ads</option>
          <option value="Premium Websites">Premium Websites</option>
          <option value="AI Agents">AI Agents</option>
          <option value="Not Sure">Not Sure</option>
        </select>
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
          <span>{errorMessage}</span>
        </div>
      )}

      <Button
        type="submit"
        icon={false}
        className="w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </span>
        ) : (
          "Send Details"
        )}
      </Button>
    </form>
  );
}
