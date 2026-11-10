"use client";

import Link from "next/link";
import { useId, useMemo, useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  timeline: string;
  message: string;
};

const serviceOptions = [
  "Website Rescue Sprint",
  "Business Website Build",
  "Operations System Prototype",
  "App or prototype idea",
  "Question about Redirect",
  "Not sure yet",
];

const timelineOptions = [
  "As soon as possible (2 to 4 weeks)",
  "1 to 2 months",
  "3 to 4 months",
  "6 months or more",
  "Just exploring",
];

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  service: serviceOptions[0],
  timeline: timelineOptions[1],
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const id = useId();

  const whatsappUrl = useMemo(
    () =>
      whatsappLink(
        [
          "New Project Inquiry",
          `Name: ${form.name || "-"}`,
          `Email: ${form.email || "-"}`,
          `Company: ${form.company || "-"}`,
          `Service: ${form.service || "-"}`,
          `Timeline: ${form.timeline || "-"}`,
          "Message:",
          form.message || "-",
        ].join("\n")
      ),
    [form]
  );

  const update = (field: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  // Submitting the form (Enter or the main button) sends by email.
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload?.error || "The message could not be sent.");
      }

      setStatus("sent");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "The message could not be sent.");
    }
  };

  const handleWhatsApp = (event: React.MouseEvent<HTMLButtonElement>) => {
    const formEl = event.currentTarget.form;
    if (formEl && !formEl.reportValidity()) return;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="field" htmlFor={`${id}-name`}>
          Your name
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name")(e.target.value)}
            required
          />
        </label>
        <label className="field" htmlFor={`${id}-email`}>
          Email address
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email")(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="field" htmlFor={`${id}-company`}>
          Company (optional)
          <input
            id={`${id}-company`}
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => update("company")(e.target.value)}
          />
        </label>
        <label className="field" htmlFor={`${id}-service`}>
          What is it about?
          <select
            id={`${id}-service`}
            name="service"
            value={form.service}
            onChange={(e) => update("service")(e.target.value)}
          >
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="field" htmlFor={`${id}-timeline`}>
        Ideal timeline
        <select
          id={`${id}-timeline`}
          name="timeline"
          value={form.timeline}
          onChange={(e) => update("timeline")(e.target.value)}
        >
          {timelineOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="field" htmlFor={`${id}-message`}>
        Message
        <textarea
          id={`${id}-message`}
          name="message"
          placeholder="Your website link, the process you want fixed, or the idea in a few lines."
          value={form.message}
          onChange={(e) => update("message")(e.target.value)}
          required
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn btn-solid" disabled={status === "sending"}>
          {status === "sending" ? "Sending email..." : "Send by email"}
        </button>
        <button type="button" className="btn btn-line" onClick={handleWhatsApp}>
          Send on WhatsApp instead
        </button>
      </div>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === "sent" ? (
          <p>Message sent. We will reply to the email address you gave.</p>
        ) : null}
        {status === "error" ? (
          <p>
            {error} You can also email us directly or use WhatsApp.
          </p>
        ) : null}
      </div>
      <p className="t-small">
        Email sends your message to Hikma Solutions. WhatsApp opens in a new tab
        with your message filled in. See{" "}
        <Link href="/privacy" className="link">
          how we handle what you send
        </Link>
        .
      </p>
    </form>
  );
}
