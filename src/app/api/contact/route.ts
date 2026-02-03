import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  timeline?: string;
  message?: string;
};

const requiredEnv = ["EMAIL_USER", "EMAIL_PASS"] as const;
const CONTACT_RECIPIENT = "joeldoherty26@gmail.com";

export async function POST(request: Request) {
  const missingEnv = requiredEnv.filter((key) => !process.env[key]);
  if (missingEnv.length > 0) {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 }
    );
  }

  const data = (await request.json()) as ContactPayload;
  const name = data?.name?.trim();
  const email = data?.email?.trim();
  const message = data?.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please provide your name, email, and message." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const subject = `New Project Inquiry - ${data?.service || "General"}`;
  const text = [
    "New Project Inquiry",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${data?.company || "-"}`,
    `Service: ${data?.service || "-"}`,
    `Timeline: ${data?.timeline || "-"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  await transporter.sendMail({
    from: `${siteConfig.name} <${process.env.EMAIL_USER}>`,
    to: CONTACT_RECIPIENT,
    replyTo: email,
    subject,
    text,
  });

  return NextResponse.json({ ok: true });
}
