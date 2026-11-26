"use client";

import { useMemo, useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  timeline: string;
  message: string;
};

const services = [
  "Fix my website",
  "New website",
  "Replace a spreadsheet with an app",
  "Security check",
  "Pen test",
  "Fix security problems",
  "Monthly check-up",
  "Not sure yet",
];

const timelines = [
  "As soon as possible",
  "Within a month",
  "In 1–3 months",
  "Just exploring",
];

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  service: services[0],
  timeline: timelines[1],
  message: "",
};

export default function ContactForm({ defaultService }: { defaultService?: string }) {
  const [form, setForm] = useState<FormState>({
    ...initialState,
    service: defaultService && services.includes(defaultService) ? defaultService : initialState.service,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const whatsappUrl = useMemo(() => {
    const text = [
      `Hi Hikma, I'm ${form.name || "-"}${form.company ? ` from ${form.company}` : ""}.`,
      `I need: ${form.service}`,
      `Timeline: ${form.timeline}`,
      "",
      form.message || "",
    ].join("\n");
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
  }, [form]);

  const update =
    (field: keyof FormState) =>
    (event: { target: { value: string } }) =>
      setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const sendWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const sendEmail = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setError("Add your name, email and a short description, then send again.");
      return;
    }
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
        throw new Error(payload?.error || "The email didn't send. Try WhatsApp instead.");
      }
      setStatus("sent");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "The email didn't send. Try WhatsApp instead.");
    }
  };

  return (
    <form onSubmit={sendWhatsApp} style={{ display: "grid", gap: "1.25rem" }}>
      <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))" }}>
        <label className="field">
          Your name
          <input value={form.name} onChange={update("name")} autoComplete="name" required />
        </label>
        <label className="field">
          Email
          <input type="email" value={form.email} onChange={update("email")} autoComplete="email" required />
        </label>
      </div>
      <label className="field">
        <span>
          Business name <span className="muted" style={{ fontWeight: 400 }}>(optional)</span>
        </span>
        <input value={form.company} onChange={update("company")} autoComplete="organization" />
      </label>
      <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))" }}>
        <label className="field">
          What do you need?
          <select value={form.service} onChange={update("service")}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="field">
          When?
          <select value={form.timeline} onChange={update("timeline")}>
            {timelines.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="field">
        Tell me about it
        <textarea
          value={form.message}
          onChange={update("message")}
          placeholder="Your website address, what's not working, or what you want built."
          required
        />
      </label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
        <button type="submit" className="btn btn-saffron">
          Send on WhatsApp
        </button>
        <button type="button" className="btn btn-line" onClick={sendEmail} disabled={status === "sending"}>
          {status === "sending" ? "Sending email…" : "Send by email"}
        </button>
      </div>
      <p role="status" aria-live="polite" style={{ margin: 0, fontWeight: 600 }}>
        {status === "sent" ? "Sent. I'll reply to the email address you gave." : null}
        {status === "error" ? <span style={{ color: "var(--danger)" }}>{error}</span> : null}
      </p>
    </form>
  );
}
