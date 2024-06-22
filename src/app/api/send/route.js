import { NextResponse } from "next/server";
import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();
const resend = new Resend("re_HQbfhLiS_5pRuWYLMmJgs76yWgZyDrJsp");
const fromEmail = "12113071@nitkkr.ac.in";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message, resend, fromEmail);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
