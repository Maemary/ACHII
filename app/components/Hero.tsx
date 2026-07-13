import Image from "next/image";
import Button from "./Button";
import JoinButton from "./JoinButton";
import HeroSlideshow from "./HeroSlideshow";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative bg-primary-dark">
      <div className="container-site pt-[120px] pb-10">
        <h1 className="font-header font-semibold text-white text-4xl sm:text-5xl lg:text-[60px] leading-[1.05] tracking-[-0.01em] max-w-5xl">
          Climate change is a <span className="text-yellow">health crisis.</span> <br></br>We are the movement driving solutions for a climate-resilient world.
        </h1>
      </div>

      <HeroSlideshow />

      <div className="container-site py-5">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
          <Logo variant="color" align="left" size="xl" className="mb-0 mt-8 pt-6 lg:mt-0 flex-shrink-0" />
          <div className="max-w-[746px]">
            <p className="font-body text-white/85 text-base leading-[1.75] mb-8 mt-8 ml-20">
              ACHII builds the youth leadership pipeline our health systems need,  prototypes climate-smart health infrastructure, trains healthcare professionals to diagnose climate-driven illness and empowers researchers to publish frontline evidence.
            </p>
            <div className="flex justify-center">
              <JoinButton variant="yellow">Join the Movement</JoinButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}