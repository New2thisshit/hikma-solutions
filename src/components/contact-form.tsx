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

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  service: "Software Development",
  timeline: "Within 1-2 months",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState<string>("");

  const composedMessage = useMemo(() => {
    return [
      "New Project Inquiry",
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Company: ${form.company || "-"}`,
      `Service: ${form.service || "-"}`,
      `Timeline: ${form.timeline || "-"}`,
      "Message:",
      form.message || "-",
    ].join("\n");
  }, [form]);

  const whatsappUrl = useMemo(() => {
    const encoded = encodeURIComponent(composedMessage);
    return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
  }, [composedMessage]);

  const updateField = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleEmailSend = async () => {
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
        throw new Error(payload?.error || "Something went wrong.");
      }

      setStatus("sent");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unexpected error.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-sans">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Full name
          <input
            className="w-full rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal)]"
            placeholder="Your name"
            value={form.name}
            onChange={(event) => updateField("name")(event.target.value)}
            required
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Email address
          <input
            className="w-full rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal)]"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(event) => updateField("email")(event.target.value)}
            required
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Company (optional)
          <input
            className="w-full rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal)]"
            placeholder="Company name"
            value={form.company}
            onChange={(event) => updateField("company")(event.target.value)}
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Service needed
          <select
            className="w-full rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal)]"
            value={form.service}
            onChange={(event) => updateField("service")(event.target.value)}
          >
            <option>Custom software / internal tool</option>
            <option>Mobile app (iOS / Android)</option>
            <option>Website design / marketing site</option>
            <option>Product redesign / UX refresh</option>
            <option>API integrations / automation</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-slate-700">
        Ideal timeline
        <select
          className="w-full rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal)]"
          value={form.timeline}
          onChange={(event) => updateField("timeline")(event.target.value)}
        >
          <option>ASAP (within 2-4 weeks)</option>
          <option>1-2 months</option>
          <option>3-4 months</option>
          <option>6+ months</option>
          <option>Just exploring</option>
        </select>
      </label>
      <label className="space-y-2 text-sm font-medium text-slate-700">
        Project details
        <textarea
          className="min-h-[140px] w-full rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal)]"
          placeholder="Tell us about your goals, features, and timeline."
          value={form.message}
          onChange={(event) => updateField("message")(event.target.value)}
          required
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-primary">
          Send via WhatsApp
        </button>
        <button
          type="button"
          className="btn-outline"
          onClick={handleEmailSend}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send via Email"}
        </button>
      </div>
      {status === "sent" ? (
        <p className="text-xs text-emerald-700">
          Thanks! Your message was sent successfully.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-xs text-rose-600">{error}</p>
      ) : null}
      <p className="text-xs text-slate-500">
        WhatsApp opens in a new tab. Email sends directly through our system.
      </p>
    </form>
  );
}
