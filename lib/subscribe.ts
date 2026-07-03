import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { resend } from "@/lib/resend";

type SubscribeInput = {
  email: string;
  name?: string;
  role?: string;
  source: string;
};

type SubscribeResult =
  | { ok: true }
  | { ok: false; reason: "already_exists" | "invalid" | "unknown"; message: string };

export async function subscribeEmail({ email, name, role, source }: SubscribeInput): Promise<SubscribeResult> {
  if (!email || typeof email !== "string") {
    return { ok: false, reason: "invalid", message: "Email is required" };
  }

  const { error } = await supabaseAdmin.from("subscribers").insert({
    email,
    name: name || null,
    role: role || null,
    source,
  });

  if (error) {
    if (error.code === "23505") {
      return { ok: false, reason: "already_exists", message: "You're already on the list!" };
    }
    return { ok: false, reason: "unknown", message: error.message };
  }

  // Fire the welcome email — don't block the response on it failing
  try {
    await resend.emails.send({
      from: "ACHII <hello@mail.achii.co>",
      to: email,
      subject: "Welcome to ACHII Allies",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
          <h2>Welcome${name ? `, ${name.split(" ")[0]}` : ""}.</h2>
          <p>You're officially part of the ACHII community. Here's what's coming your way:</p>
          <a href="https://forms.gle/q7JTqAYGj4fEi6xb8" target="_blank" style="display: inline-block; background-color: #f5c01f; color: #000; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: bold; margin: 10px 0;">Join As an Ally</a>
          <ul>
            <li>Our WhatsApp Allies community invite</li>
            <li>Access to the full Resource Bank</li>
            <li>Our monthly newsletter</li>
            <li>Early heads-up on events and the Fellowship Programme</li>
          </ul>
          <p>Glad you're here.</p>
        </div>
      `,
    });
  } catch (emailError) {
    console.error("Failed to send welcome email:", emailError);
    // We don't fail the subscription just because the email failed
  }

  return { ok: true };
}