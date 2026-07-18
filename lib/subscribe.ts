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

const RESOURCE_BANK_URL = "https://drive.google.com/drive/folders/1XJCt3uu6n7Vt02aj3BUx9mZ6ahIvWM2M";
const WHATSAPP_URL = "https://chat.whatsapp.com/Hh86VtOqqK6EXvDxhCmblo?mode=gi_t";
const WEBINAR_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdNSwJam6YwSDlCJ3HMKcuFBZ79qv9blfYRpMd313JLzYWyJw/viewform";
const LINKEDIN_URL = "https://www.linkedin.com/company/ecodoctr";
const X_URL = "https://x.com/ACHII_Ecodoctr";
const INSTAGRAM_URL = "https://www.instagram.com/achii_ecodoctr/";
const BLOG_URL = "https://achii.africa/insights";
const ALLY_SIGNUP_URL = "https://achii.africa/get-involved#ally";

const socialLinksHtml = `
  <a href="${LINKEDIN_URL}" target="_blank" style="color:#0f766e;font-weight:700;">LinkedIn</a>,
  <a href="${X_URL}" target="_blank" style="color:#0f766e;font-weight:700;">X</a>, and
  <a href="${INSTAGRAM_URL}" target="_blank" style="color:#0f766e;font-weight:700;">Instagram</a>
`;

function renderEmailShell({
  preheader,
  headerSubtitle,
  bodyHtml,
}: {
  preheader: string;
  headerSubtitle: string;
  bodyHtml: string;
}) {
  return `
  <div style="margin:0;padding:40px 20px;background:#f4f7f6;font-family:Arial,Helvetica,sans-serif;color:#333;">
    <!-- Preheader (hidden preview text) -->
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      ${preheader}
    </div>
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
              <td style="background:#0f766e;padding:40px 30px;text-align:center;">
                <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">
                  Welcome ACHII Allies
                </h1>
                <p style="margin:12px 0 0;color:#d1fae5;font-size:16px;">
                  ${headerSubtitle}
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:40px 32px;">
                ${bodyHtml}
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
  `;
}

function allyWelcomeEmail(name?: string) {
  const bodyHtml = `
    <p style="margin:0 0 18px;font-size:18px;color:#111827;">
      Dearest ${name ? name.split(" ")[0] : "Gentle Ally"},
    </p>

    <p style="margin:0 0 16px;line-height:1.7;font-size:16px;color:#4b5563;">
      Welcome to the Africa Climate and Health Innovation Institute Community.
    </p>

    <p style="margin:0 0 16px;line-height:1.7;font-size:16px;color:#4b5563;">
      By registering as an Ally of Africa Climate and Health Innovation Institute (ACHII), you are joining a dedicated global network of
      clinicians, researchers, youth advocates, and community leaders. We believe
      that the gap between clinical knowledge and community experience is where
      lives are lost in the climate crisis, and we are building the evidence,
      tools, and partnerships to close it.
    </p>

    <p style="margin:0 0 20px;line-height:1.7;font-size:16px;color:#4b5563;">
      We don't just want you on our mailing list; we want to equip you to lead.
    </p>

    <div style="background:#f9fafb;border-left:4px solid #f5c01f;padding:18px 20px;margin:30px 0;border-radius:8px;">
      <h3 style="margin:0 0 12px;color:#111827;">1. Unlock Your Exclusive Resources</h3>
      <p style="margin:0 0 12px;line-height:1.7;color:#374151;">
        As an official ACHII Ally, you now have full access to our Resource Bank —
        your open-access toolkit for localized action:
      </p>
      <ul style="margin:0;padding-left:20px;line-height:2;color:#374151;">
        <li>Evidence-Based Briefs: High-level policy and event briefings summarizing key continental data.</li>
        <li>WASH & Climate Infographics: Clean, visual tools to help you educate your local communities.</li>
        <li>Community-Led Frameworks: Actionable emergency preparedness and data-gathering templates.</li>
      </ul>
    </div>

    <div style="text-align:center;margin:0 0 35px;">
      <a href="${RESOURCE_BANK_URL}" target="_blank" style="display:inline-block;background:#f5c01f;color:#111827;text-decoration:none;padding:14px 28px;border-radius:8px;font-size:16px;font-weight:700;">
        Access the Resource Bank Here
      </a>
      <p style="margin:10px 0 0;font-size:12px;color:#9ca3af;">Bookmark this link for future use.</p>
    </div>

    <h3 style="margin:0 0 14px;color:#111827;">2. Take Your First 3 Steps Today</h3>

    <p style="margin:0 0 10px;line-height:1.7;color:#4b5563;">
      <strong>Step 1:</strong> Join the WhatsApp community.
    </p>
    <div style="text-align:center;margin-bottom:22px;">
      <a href="${WHATSAPP_URL}" target="_blank" style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:8px;font-size:16px;font-weight:700;">
        Join Our WhatsApp Community
      </a>
    </div>

    <p style="margin:0 0 10px;line-height:1.7;color:#4b5563;">
      <strong>Step 2:</strong> Save your seat for our monthly webinar. Every month, we
      host global dialogues connecting frontline realities with clinical evidence.
    </p>
    <p style="margin:0 0 22px;line-height:1.7;">
      <a href="${WEBINAR_URL}" target="_blank" style="color:#0f766e;font-weight:700;">
        Click here to register for free.
      </a>
    </p>

    <p style="margin:0 0 10px;line-height:1.7;color:#4b5563;">
      <strong>Step 3:</strong> Connect with the movement. We share real-time research
      updates, toolkits, and campaign opportunities on our social platforms.
    </p>
    <p style="margin:0 0 30px;line-height:1.7;">
      Join the conversation on ${socialLinksHtml}.
    </p>

    <p style="margin:0 0 16px;line-height:1.7;color:#4b5563;">
      <strong>Our Ethos:</strong> We believe climate-health knowledge belongs to
      everyone. Our resources are built to be shared, adapted, and scaled. Use them,
      teach them, and lead with them.
    </p>

    <p style="margin:0 0 16px;line-height:1.7;color:#4b5563;">
      Thank you for stepping up as an ACHII Ally. We are excited to build a more
      resilient future alongside you.
    </p>

    <p style="margin:30px 0 0;color:#111827;">
      Best,<br>
      <strong>ACHII Geng</strong>
    </p>
  `;

  return {
    subject: "Welcome to ACHII: Your access to the Climate-Health Resource Bank is inside",
    html: renderEmailShell({
      preheader: "You are now officially an ACHII Ally. Let's bridge the gap and save lives.",
      headerSubtitle: "You are now officially an ACHII Ally.",
      bodyHtml,
    }),
  };
}

function newsletterWelcomeEmail(name?: string) {
  const bodyHtml = `
    <p style="margin:0 0 18px;font-size:18px;color:#111827;">
      Welcome${name ? `, ${name.split(" ")[0]}` : ""}!
    </p>

    <p style="margin:0 0 16px;line-height:1.7;font-size:16px;color:#4b5563;">
      Thank you for subscribing to the Africa Climate and Health Innovation Institute
      (ACHII) newsletter.
    </p>

    <p style="margin:0 0 16px;line-height:1.7;font-size:16px;color:#4b5563;">
      At ACHII, we focus on a critical reality: the gap between what healthcare workers
      know and what communities experience in the face of climate change is where lives
      are lost. We are here to bridge that divide through localized research, advocacy,
      and community-led action.
    </p>

    <p style="margin:0 0 20px;line-height:1.7;font-size:16px;color:#4b5563;">
      By joining our mailing list, you've secured a front-row seat to the movement.
    </p>

    <div style="background:#f9fafb;border-left:4px solid #f5c01f;padding:18px 20px;margin:30px 0;border-radius:8px;">
      <h3 style="margin:0 0 12px;color:#111827;">3 Ways to Dive In Right Now</h3>
      <ul style="margin:0;padding-left:20px;line-height:2;color:#374151;">
        <li>
          <strong>Join our upcoming Webinar:</strong>
          <a href="${WEBINAR_URL}" target="_blank" style="color:#0f766e;font-weight:700;">Click here to secure your free spot.</a>
        </li>
        <li>
          <strong>Read our latest articles:</strong> You don't have to wait for the next
          newsletter. Explore our public insights page for our recent blog posts, reports,
          and community briefs.
          <a href="${BLOG_URL}" target="_blank" style="color:#0f766e;font-weight:700;">Explore the Blog.</a>
        </li>
        <li>
          <strong>Connect on social media:</strong> We post real-time updates and campaign
          highlights on ${socialLinksHtml}.
        </li>
      </ul>
    </div>

    <p style="margin:0 0 16px;line-height:1.7;font-size:16px;color:#111827;">
      <strong>Ready to take it a step further?</strong>
    </p>

    <p style="margin:0 0 20px;line-height:1.7;font-size:16px;color:#4b5563;">
      If you are a clinician, youth leader, or environmental advocate looking for direct
      collaboration and access to our private Resource Bank (featuring specialized
      toolkits and curricula), consider formally registering as an ACHII Ally.
    </p>

    <div style="text-align:center;margin:0 0 35px;">
      <a href="${ALLY_SIGNUP_URL}" target="_blank" style="display:inline-block;background:#f5c01f;color:#111827;text-decoration:none;padding:14px 28px;border-radius:8px;font-size:16px;font-weight:700;">
        Join Our Community
      </a>
    </div>

    <p style="margin:0 0 16px;line-height:1.7;color:#4b5563;">
      We are incredibly glad to have you in our community. Let's build a more resilient
      future, together.
    </p>

    <p style="margin:30px 0 0;color:#111827;">
      Warmly,<br>
      <strong>ACHII Geng</strong>
    </p>
  `;

  return {
    subject: "Welcome to the Africa Climate and Health Innovation Institute : Actionable insights at the intersection of climate and health",
    html: renderEmailShell({
      preheader: "Your source for Interesting Climate and Health insights.",
      headerSubtitle: "Your source for Interesting Climate and Health insights.",
      bodyHtml,
    }),
  };
}

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
    const { subject, html } = source === "newsletter" ? newsletterWelcomeEmail(name) : allyWelcomeEmail(name);

    const { error: sendError } = await resend.emails.send({
      from: `ACHII <${process.env.EMAIL_FROM}>`,
      to: email,
      subject,
      html,
    });

    if (sendError) {
      console.error("Resend rejected the welcome email:", sendError);
    }
  } catch (emailError) {
    console.error("Failed to send welcome email:", emailError);
    // We don't fail the subscription just because the email failed
  }

  return { ok: true };
}
