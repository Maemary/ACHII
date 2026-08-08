import LegalPage from "@/app/components/LegalPage";

export const metadata = {
  title: "Disclaimer — ACHII",
  description:
    "Important context on how to interpret the educational and research content published by ACHII.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      lastUpdated="August 8, 2026"
      sections={[
        {
          heading: "General information only",
          paragraphs: [
            "The content on this website — including webinar summaries, training materials, research findings, and blog content — is provided for general educational and informational purposes only. It does not constitute medical, clinical, legal, or professional advice. Healthcare professionals and community members should consult qualified professionals for guidance specific to their individual circumstances.",
          ],
        },
        {
          heading: "Not a substitute for professional care",
          paragraphs: [
            "Nothing on this website should be used as a substitute for professional medical diagnosis, treatment, or emergency care. If you are experiencing a health emergency, contact your local emergency services or healthcare provider immediately.",
          ],
        },
        {
          heading: "Research and data",
          paragraphs: [
            "Statistics and figures presented on this website reflect the most recent data available to ACHII at the time of publication (including our own Q1 and Q2 impact reports and national research study findings). Research on climate-health linkages is an evolving field, and findings may be updated as new data becomes available. Where figures are drawn from external sources, we aim to credit those sources accurately.",
          ],
        },
        {
          heading: "Speaker and contributor views",
          paragraphs: [
            "Views expressed by guest speakers, panelists, Regional Champions, or contributors during ACHII webinars, training sessions, or published content are their own and do not necessarily represent the official position of ACHII, unless explicitly stated otherwise.",
          ],
        },
        {
          heading: "External links",
          paragraphs: [
            "This website may link to third-party websites and resources for informational purposes. ACHII does not control and is not responsible for the content, accuracy, or practices of external sites.",
          ],
        },
        {
          heading: "No guarantee of outcomes",
          paragraphs: [
            "While ACHII's programmes are designed to build climate-health knowledge and capacity, we do not guarantee specific outcomes (such as career advancement, policy change, or health outcomes) resulting from participation in our webinars, training, or research initiatives.",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: ["If you have questions about this disclaimer, contact info@achii.co."],
        },
      ]}
    />
  );
}
