import LegalPage from "@/app/components/LegalPage";

export const metadata = {
  title: "Terms of Service — ACHII",
  description:
    "The terms that govern your use of the ACHII website, achii.co.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="August 8, 2026"
      intro="Welcome to achii.co. By accessing or using this website, you agree to the following terms."
      sections={[
        {
          heading: "About ACHII",
          paragraphs: [
            "The Africa Climate and Health Innovation Institute (ACHII), formerly EcoDoctr, is registered in Nigeria as Africa Climate and Health Innovation Institute Ltd/Gte, a private company limited by guarantee under the Companies and Allied Matters Act 2020 (RC 9418473). This website is operated by ACHII to share information about our programmes, research, and how to get involved.",
          ],
        },
        {
          heading: "Use of this website",
          paragraphs: [
            "You may use this website for personal, educational, and non-commercial informational purposes. You agree not to:",
          ],
          list: [
            "Use the site in any way that could damage, disable, or impair it",
            "Attempt to gain unauthorised access to any part of the site or our systems",
            "Use automated tools to scrape or extract content without permission",
            "Submit false or misleading information through our forms or surveys",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "Unless otherwise stated, the text, graphics, logo, and educational materials on this website are the property of ACHII. Resources published in our Resource Bank are made freely available for educational use — you're welcome to share and reference them with appropriate credit to ACHII. The ACHII name and logo may not be used to imply endorsement or affiliation without our written permission.",
          ],
        },
        {
          heading: "User-submitted information",
          paragraphs: [
            "By submitting information through our surveys, forms, or newsletter signup, you confirm the information you provide is accurate to the best of your knowledge and you consent to it being used as described in our Privacy Policy.",
          ],
        },
        {
          heading: "Links to third-party sites",
          paragraphs: [
            "Our website links to third-party services (Google Forms, Google Drive, social media platforms, partner organisation websites). We are not responsible for the content, privacy practices, or availability of these third-party sites.",
          ],
        },
        {
          heading: "No warranty",
          paragraphs: [
            "While we make reasonable efforts to keep information accurate and current, ACHII makes no warranties, express or implied, about the completeness, reliability, or accuracy of the content.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the extent permitted by law, ACHII is not liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: ["These terms are governed by the laws of the Federal Republic of Nigeria."],
        },
        {
          heading: "Changes to these terms",
          paragraphs: [
            "We may update these terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: ["Questions about these terms can be sent to info@achii.co."],
        },
      ]}
    />
  );
}
