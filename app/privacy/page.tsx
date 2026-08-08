import LegalPage from "@/app/components/LegalPage";

export const metadata = {
  title: "Privacy Policy — ACHII",
  description:
    "How the Africa Climate and Health Innovation Institute collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="August 8, 2026"
      intro={
        'The Africa Climate and Health Innovation Institute ("ACHII," "we," "us," or "our") is committed to protecting the privacy of everyone who visits our website, joins our programmes, or participates in our research. This Privacy Policy explains what information we collect, how we use it, and the choices you have.'
      }
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            "ACHII (registered as Africa Climate and Health Innovation Institute Ltd/Gte, a private company limited by guarantee incorporated in Nigeria under the Companies and Allied Matters Act 2020, RC 9418473) operates primarily in Nigeria with a volunteer network across 15+ countries. For the purposes of data protection law, ACHII is the data controller for information collected through this website. You can reach us at info@achii.co.",
          ],
        },
        {
          heading: "Information we collect",
          paragraphs: ["We collect information in the following ways:"],
          list: [
            'Newsletter and "Join as an Ally" signups — name and email address, and role (e.g. clinician, researcher, student) where you provide it through our "Join the Movement" form.',
            "Research survey responses — when you complete our national climate-health survey (hosted via Google Forms), we collect the responses you provide. The survey is designed to be anonymous; we do not knowingly collect information that identifies you personally through it unless you choose to include it in an open response.",
            'Volunteer and "Get Involved" applications — name, email, and any other details you choose to submit.',
            "Contact and partnership enquiries — any information you include when emailing info@achii.co or submitting a partnership request.",
            "Website usage data — we use Google Analytics to understand how visitors use the site (e.g., pages viewed, general location by country, device type). Google Analytics uses cookies to collect this information.",
          ],
        },
        {
          heading: "How we use your information",
          paragraphs: ["We use the information we collect to:"],
          list: [
            "Operate and improve our programmes (webinars, training, school outreach, research)",
            "Send newsletters and updates to allies and volunteers who opt in",
            "Analyse aggregated, de-identified survey data for research and policy purposes",
            "Coordinate with volunteers and Regional Champions",
            "Respond to partnership and collaboration enquiries",
            "Maintain the security and functioning of our website",
          ],
          closing: "We do not sell your personal information.",
        },
        {
          heading: "Third-party services we use",
          paragraphs: [
            "Our website and programmes rely on the following third-party services, each of which processes data under its own privacy policy:",
          ],
          list: [
            "Supabase — the database where we securely store newsletter and Ally signup information (name, email, role).",
            "Google Workspace, Google Forms, and Google Drive (surveys, recordings, document sharing)",
            "Cloudinary (image hosting)",
            "Resend (email/newsletter delivery)",
            "Social media platforms (TikTok, X, Instagram, LinkedIn) when you interact with our profiles",
          ],
        },
        {
          heading: "Research data and health-related information",
          paragraphs: [
            "Our national research study collects perceptions and awareness data from healthcare professionals and community members. Participation is voluntary, responses are anonymous by design, and data is used in aggregate for research, policy recommendations, and educational purposes. We do not use survey data for any purpose beyond what is described when you take the survey.",
          ],
        },
        {
          heading: "Children's privacy",
          paragraphs: [
            "Our website and online survey are intended for adults. Our ACHIIlites school outreach programme engages secondary school students (ages 12–17) directly through partner schools and NYSC coordination, not through this website. Where photographs, testimonials, or other materials from school outreach sessions are used on this site or in our reports, we require written consent from the partner school or a parent/guardian before publishing any identifiable photo or material.",
          ],
        },
        {
          heading: "Photos and media",
          paragraphs: [
            "We may feature photographs and videos from our webinars, outreach events, and programmes on this website and in our materials. If you attend an ACHII event and do not wish to be photographed or featured, please let our team know at the event or contact info@achii.co.",
          ],
        },
        {
          heading: "Data retention",
          paragraphs: [
            "We retain personal information for as long as necessary to fulfil the purposes described in this policy, or as required by law. Aggregated, de-identified research data may be retained indefinitely for research and policy purposes.",
          ],
        },
        {
          heading: "International data transfers",
          paragraphs: [
            "Because ACHII's volunteer network spans multiple countries and we use international service providers (such as Google), your information may be processed outside your home country. We take reasonable steps to ensure it remains protected consistent with this policy.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Depending on your location, you may have the right to access, correct, or request deletion of your personal information, or to withdraw consent for us to use it. To exercise any of these rights, contact info@achii.co.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "We take reasonable technical and organisational measures to protect the information we hold, but no method of transmission or storage is completely secure.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            'We may update this policy from time to time. The "last updated" date at the top will reflect the most recent revision.',
          ],
        },
        {
          heading: "Contact us",
          paragraphs: ["Questions about this policy can be sent to info@achii.co."],
        },
      ]}
    />
  );
}
