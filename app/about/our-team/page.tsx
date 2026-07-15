import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import SectionHeader from "@/app/components/SectionHeader";
import Button from "@/app/components/Button";
import Placeholder from "@/app/components/Placeholder";
import TeamGrid from "@/app/components/TeamGrid";
import VolunteerGrid from "@/app/components/VolunteerGrid";

export const metadata = {
  title: "Our Team — ACHII",
  description:
    "Meet the clinicians, researchers, communicators, and operations leads running ACHII, plus the volunteers and Allies who power the work.",
};

const teams = [
  {
    name: "Promise",
    role: "Operations Team Lead",
    bio: "Nil",
    photo: "/images/promise.jpeg",
  },
  {
    name: "Fancy Kutoi",
    role: "Research Team Lead",
    bio: "Fancy Kutoi is Research Team Co-Lead at ACHII — an anthropologist and climate-health researcher advancing equitable, evidence-based solutions at the intersection of climate change, public health, and climate justice across Africa.",
    photo: "/images/Fancy.jpg",
  },
  {
    name: "Benjamin Ayejusunle",
    role: "Research Team Lead",
    bio: "Benjamin Ayejusunle is a Data Analyst and Climate Scientist with a degree in Meteorology, serving as Co-Research Lead at ACHII. He drives data-driven research and climate communication to advance evidence-based responses to climate change.",
    photo: "/images/Benjamin.jpg",
  },
  {
    name: "Temitope",
    role: "Media Team Lead",
    bio: "Adebayo Temitope Eunice is a Social Media Strategist, Content Manager, and Brand Communications Professional with expertise in building engaged digital communities through strategic content and storytelling. She has worked with startups, nonprofits, and impact-driven organizations across the agriculture, climate and health, education, and technology sectors, leading content strategy, campaigns, and community engagement. As Co-Lead of the Media Team at ACHII (formerly EcoDoctr), she helps drive the organization's digital presence and media strategy. A Chemical Engineering graduate of the Federal University of Petroleum Resources, Effurun (FUPRE), she combines analytical thinking with creative communication to deliver impactful digital campaigns.",
    photo: "/images/temitope.jpeg",
  },
  {
    name: "Oluwasemilore Daniel Olaitan",
    role: "Media Team Lead",
    bio: "Oluwasemilore Daniel Olaitan is an environmental scientist and digital strategist serving as Media Team Co-Lead at ACHII. He transforms complex climate and health data into accessible advocacy, drawing on a background in Marine Science and coastal oceanography to drive impactful climate communication across Africa.",
    photo: "/images/Oluwasemilore.jpg",
  },
];

const volunteers = [
  { name: "Volunteer 1", photo: "/images/Volunteers/volunteer1.jpeg" },
  { name: "Volunteer 2", photo: "/images/Volunteers/volunteer2.jpeg" },
  { name: "Volunteer 3", photo: "/images/Volunteers/volunteer3.png" },
  { name: "Volunteer 4", photo: "/images/Volunteers/volunteer4.jpg" },
  { name: "Volunteer 5", photo: "/images/Volunteers/volunteer5.jpg" },
  { name: "Volunteer 6", photo: "/images/Volunteers/volunteer6.jpg" },
  { name: "Volunteer 7", photo: "/images/Volunteers/volunteer7.png" },
  { name: "Volunteer 8", photo: "/images/Volunteers/volunteer8.jpeg" },
  { name: "Volunteer 9", photo: "/images/Volunteers/volunteer9.png" },
  { name: "Volunteer 10", photo: "/images/Volunteers/volunteer10.jpeg" },
  { name: "Volunteer 11", photo: "/images/Volunteers/volunteer11.jpg" },
  { name: "Volunteer 12", photo: "/images/Volunteers/volunteer12.jpg" },
  { name: "Volunteer 13", photo: "/images/Volunteers/volunteer13.jpg" },
  { name: "Volunteer 14", photo: "/images/Volunteers/volunteer14.jpg" },
  { name: "Volunteer 15", photo: "/images/Volunteers/volunteer15.png" },
  { name: "Volunteer 16", photo: "/images/Volunteers/volunteer16.jpg" },
  { name: "Volunteer 17", photo: "/images/Volunteers/volunteer17.jpg" },
  { name: "Volunteer 18", photo: "/images/Volunteers/volunteer18.jpeg" },
  { name: "Volunteer 19", photo: "/images/Volunteers/volunteer19.png" },
  { name: "Volunteer 20", photo: "/images/Volunteers/volunteer20.jpg" },
  { name: "Volunteer 21", photo: "/images/Volunteers/volunteer21.jpg" },
  { name: "Volunteer 22", photo: "/images/Volunteers/volunteer22.jpg" },
  { name: "Volunteer 23", photo: "/images/Volunteers/volunteer23.jpg" },
  { name: "Volunteer 24", photo: "/images/Volunteers/volunteer24.jpg" },
  { name: "Volunteer 25", photo: "/images/Volunteers/volunteer25.jpg" },
  { name: "Volunteer 26", photo: "/images/Volunteers/volunteer26.jpeg" },
  { name: "Volunteer 27", photo: "/images/Volunteers/volunteer27.jpeg" },
  { name: "Volunteer 28", photo: "/images/Volunteers/volunteer28.jpg" },
  { name: "Volunteer 29", photo: "/images/Volunteers/volunteer29.png" },
  { name: "Volunteer 30", photo: "/images/Volunteers/volunteer30.jpg" },
];


export default function OurTeamPage() {
  return (
    <main className="relative">
      <Navbar />

      <div data-nav-theme="dark">
        <PageHero
          eyebrow="About ACHII"
          title="The people building this every day."
          subtitle="ACHII is run by a small, focused team of clinicians, researchers, communicators, and operations leads — every hire mission-aligned — and sustained by a growing network of volunteers."
        />
      </div>

        {/* Founder */}
            <div data-nav-theme="light">
              <section className="bg-bg-soft py-20 lg:py-[120px]">
                <div className="container-site grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12">
                  <div>
                    <img src="/images/Aisha.jpg" alt="Dr Aishat Oduye" className="aspect-[4/5] mb-5" />
                    <h2 className="font-header font-semibold text-strong text-2xl leading-tight">Dr Aishat Oduye</h2>
                    <p className="font-body text-primary-base text-sm mt-1">Founder & Executive Director</p>
                  </div>
                  <div>
                    <p className="label-tag mb-4">Founder’s Story</p>
                    <h3 className="font-header font-semibold text-strong text-2xl lg:text-[28px] leading-tight mb-6">Why I started ACHII.</h3>
                    <Placeholder
                      dark={false}
                      label="Professional bio (100–150 words) and first-person “Why I started ACHII” narrative (250–400 words) to be added before launch. Pair with a founder photo and a 60–90 second video."
                      className="min-h-[180px] mb-6"
                    />
                    <p className="font-body text-sub text-sm leading-[1.7]">
                      We recommend pairing this section with a strong founder photo and a short video of the
                      founder telling this story in her own voice.
                    </p>
                  </div>
                </div>
              </section>
            </div>
      
      {/* Core team */}
      <div data-nav-theme="light">
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader
              eyebrow="Core Team"
              title="The team building this every day."
              intro="ACHII is run by a small, focused team of clinicians, researchers, communicators, and operations leads — every hire mission-aligned."
              className="mb-10"
            />
            <TeamGrid teams={teams} />
          </div>
        </section>
      </div>

      {/* Volunteers */}
      <div data-nav-theme="light">
        <section className="bg-bg-soft py-20 lg:py-[120px]">
          <div className="container-site">
            <SectionHeader
              eyebrow="Volunteers & ACHII Allies"
              title="ACHII is powered by the people who show up."
              intro="Beyond our core team, ACHII is sustained by a growing network of volunteers — Allies, Regional Champions, student ambassadors, peer reviewers, writers, and contributors of every kind."
              className="mb-10"
            />
            <VolunteerGrid volunteers={volunteers} />
            
            <p className="font-body text-sub text-base mb-8">
              If you’re already volunteering — thank you. If you’re not yet — there’s a place for you.
            </p>
            <Button href="/get-involved#volunteer" variant="yellow">Volunteer with ACHII</Button>
          </div>
        </section>
      </div>

      <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
}
