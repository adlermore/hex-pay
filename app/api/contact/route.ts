import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const clientEmail = process.env.CLIENT_EMAIL;
    if (!clientEmail) {
      throw new Error("CLIENT_EMAIL environment variable is not set.");
    }

    await resend.emails.send({
      from: "Your App <onboarding@resend.dev>", // replace with a verified sender
      to: [clientEmail], // where you want to receive messages
      subject: "New Contact Form Submission",
      react: ContactEmail(body), // pass form data into email template
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
