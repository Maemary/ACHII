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
  from: `ACHII <${process.env.EMAIL_FROM}>`,
  to: email,
  subject: "Welcome to ACHII Community 🎉",
  html: `
  <div style="margin:0;padding:40px 20px;background:#f4f7f6;font-family:Arial,Helvetica,sans-serif;color:#333;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          <table
            role="presentation"
            width="600"
            cellspacing="0"
            cellpadding="0"
            style="max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;"
          >

            <!-- Header -->
            <tr>
              <td
                style="background:#0f766e;padding:40px 30px;text-align:center;"
              >
                <h1 style="margin:0;color:#ffffff;font-size:30px;font-weight:700;">
                  Welcome to ACHII!
                </h1>
                <p style="margin:12px 0 0;color:#d1fae5;font-size:16px;">
                  Advancing Climate & Health Innovation in Africa
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:40px 32px;">

                <p style="margin:0 0 18px;font-size:18px;color:#111827;">
                  Hi${name ? ` ${name.split(" ")[0]}` : ""},
                </p>

                <p style="margin:0 0 20px;line-height:1.7;font-size:16px;color:#4b5563;">
                  Thank you for joining the <strong>ACHII community</strong>.
                  We're excited to have you with us as we advance climate and
                  health innovation across Africa.
                </p>

                <div
                  style="background:#f9fafb;border-left:4px solid #f5c01f;padding:18px 20px;margin:30px 0;border-radius:8px;"
                >
                  <h3 style="margin:0 0 12px;color:#111827;">
                    Here's what you'll receive:
                  </h3>

                  <ul style="margin:0;padding-left:20px;line-height:2;color:#374151;">
                    <li>🌍 Access to our ACHII Allies community</li>
                    <li>📚 Exclusive climate & health resources</li>
                    <li>📰 Monthly newsletters and updates</li>
                    <li>🎓 Early announcements for events, webinars, and fellowship opportunities</li>
                    <li>🤝 Networking with professionals, researchers, and advocates</li>
                  </ul>
                </div>

                <!-- CTA -->
                <div style="text-align:center;margin:35px 0 18px;">
                  <a
                    href="https://forms.gle/q7JTqAYGj4fEi6xb8"
                    target="_blank"
                    style="
                      display:inline-block;
                      background:#f5c01f;
                      color:#111827;
                      text-decoration:none;
                      padding:14px 28px;
                      border-radius:8px;
                      font-size:16px;
                      font-weight:700;
                    "
                  >
                    Become an ACHII Ally
                  </a>
                </div>

                <div style="text-align:center;margin-bottom:35px;">
                  <a
                    href="https://chat.whatsapp.com/Hh86VtOqqK6EXvDxhCmblo?mode=gi_t"
                    target="_blank"
                    style="
                      display:inline-block;
                      background:#25D366;
                      color:#ffffff;
                      text-decoration:none;
                      padding:14px 28px;
                      border-radius:8px;
                      font-size:16px;
                      font-weight:700;
                    "
                  >
                    Join Our WhatsApp Community
                  </a>
                </div>

                <p style="margin:0 0 16px;line-height:1.7;color:#4b5563;">
                  We're excited to grow with you and look forward to your
                  participation in our initiatives.
                </p>

                <p style="margin:30px 0 0;color:#111827;">
                  Warm regards,<br>
                  <strong>The ACHII Team</strong>
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                style="
                  background:#f9fafb;
                  border-top:1px solid #e5e7eb;
                  padding:24px;
                  text-align:center;
                  color:#6b7280;
                  font-size:13px;
                  line-height:1.8;
                "
              >
                Thank you for supporting climate and health innovation across Africa.
                <br><br>
                © ${new Date().getFullYear()} ACHII. All rights reserved.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
  `,
});
  } catch (emailError) {
    console.error("Failed to send welcome email:", emailError);
    // We don't fail the subscription just because the email failed
  }

  return { ok: true };
}