import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  timeline?: unknown;
  message?: unknown;
  website?: unknown; // honeypot: real people never fill this in
};

const requiredEnv = ["EMAIL_USER", "EMAIL_PASS"] as const;
// Inbox that receives form messages. Set CONTACT_RECIPIENT in Vercel to change it.
const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT || "joeldoherty26@gmail.com";

const FAIL_MESSAGE = "That didn’t send. Please WhatsApp me instead.";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Basic per-instance rate limit: 5 messages per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later, or WhatsApp me." },
      { status: 429 }
    );
  }

  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: FAIL_MESSAGE }, { status: 400 });
  }

  // Bots fill in the hidden field. Pretend it worked and drop it.
  if (clean(data.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const message = clean(data.message, 5000);
  const company = clean(data.company, 160);
  const service = clean(data.service, 80);
  const timeline = clean(data.timeline, 80);

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Add your name, a valid email and a short message, then try again." },
      { status: 400 }
    );
  }

  if (requiredEnv.some((key) => !process.env[key])) {
    console.error("Contact form: EMAIL_USER / EMAIL_PASS not set");
    return NextResponse.json({ error: FAIL_MESSAGE }, { status: 503 });
  }

  const text = [
    "New enquiry from the website",
    `Name: ${name}`,
    `Email: ${email}`,
    `Business: ${company || "-"}`,
    `Needs: ${service || "-"}`,
    `When: ${timeline || "-"}`,
    "",
    message,
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    await transporter.sendMail({
      from: `${siteConfig.name} <${process.env.EMAIL_USER}>`,
      to: CONTACT_RECIPIENT,
      replyTo: email,
      subject: `Website enquiry: ${service || "General"}`,
      text,
    });
  } catch (err) {
    console.error("Contact form: send failed", err);
    return NextResponse.json({ error: FAIL_MESSAGE }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
