import { NextRequest, NextResponse } from "next/server";

// This route accepts the contact form submission and, if RESEND_API_KEY is
// set in your environment, emails it to you via Resend. Without a key, it
// still validates the input and logs it — useful for local testing before
// you connect Resend (see README "Wiring up the contact form").

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toAddress = process.env.CONTACT_TO_EMAIL || "hello@aivora.ai";

    if (apiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || "Aivora AI Site <onboarding@resend.dev>",
        to: toAddress,
        reply_to: email,
        subject: `New strategy call request from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message || "(none)"}`,
      });
    } else {
      // No email provider configured yet — log so the submission isn't silently dropped.
      console.log("[contact form submission]", { name, email, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
