import { NextResponse } from "next/server";

const emailJsConfig = {
  serviceId: process.env.EMAILJS_SERVICE_ID ?? "service_prqz3sl",
  templateId: process.env.EMAILJS_TEMPLATE_ID ?? "template_8i3rosg",
  publicKey: process.env.EMAILJS_PUBLIC_KEY ?? "wOcf7bpSksTH6BSax",
};

export async function POST(request: Request) {
  const body = await request.json();
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Please complete all fields." }, { status: 400 });
  }

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: emailJsConfig.serviceId,
      template_id: emailJsConfig.templateId,
      user_id: emailJsConfig.publicKey,
      template_params: {
        name,
        from_name: name,
        email,
        from_email: email,
        reply_to: email,
        message,
      },
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("EmailJS contact request failed:", response.status, details);
    return NextResponse.json({ message: "The email provider rejected the message. Please email me directly." }, { status: 502 });
  }

  return NextResponse.json({ message: "Message sent successfully." });
}
