import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import VisionMission from "@/app/components/VisionMission";
import Pillars from "@/app/components/Pillars";
import Impact from "@/app/components/Impact";
import ImageBand from "@/app/components/ImageBand";
import ResearchStudy from "@/app/components/ResearchStudy";
import HomeInsights from "@/app/components/insights/HomeInsights";
import CallToAction from "@/app/components/CallToAction";
import Footer from "@/app/components/Footer";
import PartnerCarousel from "./components/partnerCarousel";
import ContactCTA from "./components/ContactCTA";
import PartnersSection from "./components/PartnerSection";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div data-nav-theme="dark"><Hero /></div>
      <div data-nav-theme="light"><About /></div>
      <div data-nav-theme="dark"><VisionMission /></div>
      <div data-nav-theme="light"><Impact /></div>
      <div data-nav-theme="light"><Pillars /></div>
      <div data-nav-theme="dark">
        <ImageBand src="/images/Students.jpg" alt="Students at an ACHII climate-health school outreach assembly" />
      </div>
      <div data-nav-theme="dark"><ResearchStudy /></div>
      <div data-nav-theme="light"><HomeInsights /></div>
      {/* <div data-nav-theme="dark">
        <ImageBand src="/images/Partner.jpg" alt="Students gathered at an ACHII school outreach event" height="h-[552px] md:h-[929px]" />
      </div> */}
      <div data-nav-theme="light"><CallToAction /></div>
       <div data-nav-theme="dark"><PartnersSection /></div>
       
       <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
}
