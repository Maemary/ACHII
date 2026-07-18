import Image from "next/image";
import Button from "./Button";
import JoinButton from "./JoinButton";
import HeroSlideshow from "./HeroSlideshow";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative bg-primary-dark">
      <div className="container-site pt-24 sm:pt-28 lg:pt-[120px] pb-8 sm:pb-10">
        <h1 className="font-header font-semibold text-white text-3xl sm:text-5xl lg:text-[60px] leading-[1.15] sm:leading-[1.05] tracking-[-0.01em] max-w-7xl">
          Climate change is a <span className="text-yellow">health crisis.</span>{" "}
          <br/>
          We are the movement driving solutions for a climate-resilient world.
        </h1>
      </div>

      <HeroSlideshow />

      <div className="container-site py-8 sm:py-5">
        <div className="flex flex-col items-center text-center gap-5 lg:flex-row lg:items-start lg:justify-between lg:text-left lg:gap-8">
          <Logo
  variant="color"
  align="left"
  size="xl"
  className="hidden lg:block flex-shrink-0"
/>
          <div className="max-w-[320px] sm:max-w-[500px] lg:max-w-[746px]">
            <p className="font-body text-white/85 text-sm sm:text-base leading-[1.7] sm:leading-[1.75] lg:ml-20">
             Climate change is already in Africa's hospitals. ACHII trains the leaders, empowers the researchers, and builds the youth pipeline, turning Africa's climate crisis into Africa's climate solutions.
            </p>
            <div className="flex justify-center lg:justify-start lg:ml-20 mt-6">
              <JoinButton variant="yellow">Join the Movement</JoinButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}