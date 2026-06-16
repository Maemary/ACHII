import Image from "next/image";
import Button from "./Button";
import JoinButton from "./JoinButton";

export default function Hero() {
  return (
    <section className="relative bg-primary-dark">
      <div className="container-site pt-[124px] pb-10">
        <h1 className="font-header font-semibold text-white text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-[-0.01em] max-w-5xl">
          Climate change is a <span className="text-yellow">health crisis.</span> We&apos;re building the system to face it.
        </h1>
      </div>

      <div className="relative w-full h-[432px] md:h-[596px] overflow-hidden bg-primary-base">
        <Image
          src="/images/hero.jpg"
          alt="A clinician and a community member examine a seedling in dry farmland"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container-site py-12">
        <div className="lg:ml-[42%] max-w-[746px]">
          <p className="font-body text-white/85 text-base leading-[1.75] mb-8">
            ACHII trains healthcare professionals to diagnose climate-driven illness, funds African
            researchers to publish frontline evidence, prototypes climate-smart health infrastructure,
            and builds the youth leadership pipeline our health systems need.
          </p>
          <div className="flex flex-wrap gap-3">
            <JoinButton variant="yellow">Join the Movement</JoinButton>
            <Button href="/#research" variant="outline-white">Take the Research Survey</Button>
            <Button href="/training" variant="outline-white">Watch a Webinar</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
