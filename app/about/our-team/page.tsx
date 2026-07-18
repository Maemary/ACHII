import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import SectionHeader from "@/app/components/SectionHeader";
import Button from "@/app/components/Button";
import Placeholder from "@/app/components/Placeholder";
import TeamGrid from "@/app/components/TeamGrid";
import VolunteerGrid from "@/app/components/VolunteerGrid";
import FounderSection from "@/app/components/FounderSection";

export const metadata = {
  title: "Our Team — ACHII",
  description:
    "Meet the clinicians, researchers, communicators, and operations leads running ACHII, plus the volunteers and Allies who power the work.",
};

const teams = [
  {
    name: "Dr Promise Ozor",
    role: "Operations Team Lead",
    bio: "Dr. Promise Chidinma Ozor is a Project & Operations Manager who believes sustainable organizations run on efficient systems and empowered people, not just exceptional individuals. With over four years of experience, she leads ACHII's Operations Team using a Theory of Change framework that links strategy to execution and execution to measurable impact.",
    photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784125175/achii/images/promise.jpg",
  },
  {
    name: "Fancy Kutoi",
    role: "Research Team Lead",
    bio: "Fancy Kutoi is Research Team Co-Lead at ACHII — an anthropologist and climate-health researcher advancing equitable, evidence-based solutions at the intersection of climate change, public health, and climate justice across Africa.",
    photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784123988/achii/images/Fancy.jpg",
  },
  {
    name: "Benjamin Ayejusunle",
    role: "Research Team Lead",
    bio: "Benjamin Ayejusunle is a Data Analyst and Climate Scientist with a degree in Meteorology, serving as Co-Research Lead at ACHII. He drives data-driven research and climate communication to advance evidence-based responses to climate change.",
    photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784123974/achii/images/Benjamin.jpg",
  },
  {
    name: "Adebayo Temitope",
    role: "Media Team Lead",
    bio: "Adebayo Temitope Eunice is a Social Media Strategist, Content Manager, and Brand Communications Professional with expertise in building engaged digital communities through strategic content and storytelling. She has worked with startups, nonprofits, and impact-driven organizations across the agriculture, climate and health, education, and technology sectors, leading content strategy, campaigns, and community engagement. As Co-Lead of the Media Team at ACHII (formerly EcoDoctr), she helps drive the organization's digital presence and media strategy. A Chemical Engineering graduate of the Federal University of Petroleum Resources, Effurun (FUPRE), she combines analytical thinking with creative communication to deliver impactful digital campaigns.",
    photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124129/achii/images/temitope.jpg",
  },
  {
    name: "Oluwasemilore Daniel Olaitan",
    role: "Media Team Lead",
    bio: "Oluwasemilore Daniel Olaitan is an environmental scientist and digital strategist serving as Media Team Co-Lead at ACHII. He transforms complex climate and health data into accessible advocacy, drawing on a background in Marine Science and coastal oceanography to drive impactful climate communication across Africa.",
    photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124033/achii/images/Oluwasemilore.jpg",
  },
];

const volunteers = [
  { name: "Ezinne Nwosu ", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124143/achii/images/Volunteers/Volunteer1.jpg" },
  { name: "Praise Adewusi", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124197/achii/images/Volunteers/Volunteer2.jpg" },
  { name: "Onuora Chizaram", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124221/achii/images/Volunteers/Volunteer3.png" },
  { name: "Favour Iyore", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124230/achii/images/Volunteers/Volunteer4.jpg" },
  { name: "Vivian Onifade", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124231/achii/images/Volunteers/Volunteer5.jpg" },
  { name: "Onawumi Precious", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124194/achii/images/Volunteers/Volunteer19.png" },
  { name: "Israel Adeleke", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124238/achii/images/Volunteers/Volunteer7.png" },
  { name: "Aminat Poopola", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124206/achii/images/Volunteers/Volunteer24.jpg" },
  { name: "Bridget Useni", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124213/achii/images/Volunteers/Volunteer25.jpg" },
  { name: "Chidera Ugoh", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124214/achii/images/Volunteers/Volunteer26.jpg" },
  { name: "Adaeze Nwachukwu ", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124216/achii/images/Volunteers/Volunteer27.jpg" },
  { name: "Ngozi Godfrey", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124176/achii/images/Volunteers/Volunteer12.jpg" },
  { name: "Kwesi Ampofo ", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124181/achii/images/Volunteers/Volunteer13.jpg" },
  { name: "Adedoyin Babatunde", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124183/achii/images/Volunteers/Volunteer14.jpg" },
  { name: "Ogbaino Gabriel", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124185/achii/images/Volunteers/Volunteer15.png" },
  { name: "Sowunmi Kayode", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124188/achii/images/Volunteers/Volunteer16.jpg" },
  { name: "Oreoluwa Raheem", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124189/achii/images/Volunteers/Volunteer17.jpg" },
  { name: "Jennifer Kalu", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124191/achii/images/Volunteers/Volunteer18.jpg" },
  { name: "George Wushi Deborah ", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124233/achii/images/Volunteers/Volunteer6.jpg" },
  { name: "Unabor Olanike ", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124199/achii/images/Volunteers/Volunteer20.jpg" },
  { name: "Sylvia Atieno Ngantsala ", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124201/achii/images/Volunteers/Volunteer21.jpg" },
  { name: "Akinola Pelumi Semilore", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124202/achii/images/Volunteers/Volunteer22.jpg" },
  { name: "Boluwatife Adetutu", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124205/achii/images/Volunteers/Volunteer23.jpg" },
  { name: "Helen Otailku", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124242/achii/images/Volunteers/Volunteer8.jpg" },
  { name: "Mercy Omobobola ", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124245/achii/images/Volunteers/Volunteer9.png" },
  { name: "Paschaline Umoche Eleojo", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784125220/achii/images/Volunteers/Volunteer10.jpg" },
  { name: "Amadou Kongira ", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124168/achii/images/Volunteers/Volunteer11.jpg" },
  { name: "Emmanuel Blessing Amarachi", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124217/achii/images/Volunteers/Volunteer28.jpg" },
  { name: "Ahmad Abdulrahim ", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124218/achii/images/Volunteers/Volunteer29.jpg" },
  { name: "Vincent odhiambo otieno ", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124222/achii/images/Volunteers/Volunteer30.jpg" },
  {name: "Praise Ipadeola", photo: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784378566/NX1A7299_-_Ipadeola_Praise_omonnj.jpg"},
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
            <FounderSection />
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
              intro="Beyond our core team, ACHII is sustained by a growing network of volunteers — ACHII GENG."
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
