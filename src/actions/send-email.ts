"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendEmail(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;
    
    const emailData = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Default Resend testing domain
      to: 'gsaldana709@gmail.com',
      subject: `New Message from Portfolio: ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h1>New Message from Portfolio</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (emailData.error) {
      return { success: false, error: emailData.error.message };
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error("Send email error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
