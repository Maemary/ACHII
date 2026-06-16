import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import InsightsExplorer from "@/app/components/insights/InsightsExplorer";

export const metadata = {
  title: "Knowledge Hub — ACHII",
  description:
    "A living archive of climate-health conversations, evidence, and ideas shaping Africa’s future — ACHII webinars, reports, and discussions in one place.",
};

export default function InsightsPage() {
  return (
    <main className="relative">
      <Navbar />
      <div data-nav-theme="dark">
        <section className="bg-primary-dark pt-[148px] pb-20 lg:pb-24">
          <div className="container-site">
            <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-5">Knowledge Hub</p>
            <h1 className="font-header font-semibold text-white text-[34px] sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.01em] max-w-4xl">
              Climate-health conversations shaping Africa’s future.
            </h1>
            <p className="mt-6 font-body text-white/75 text-lg leading-[1.65] max-w-2xl">
              ACHII webinars, reports, and discussions are archived here for ongoing learning — a
              living record of the evidence and ideas building climate-resilient health systems.
            </p>
          </div>
        </section>
      </div>
      <div data-nav-theme="light">
        <InsightsExplorer />
      </div>
      <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
}
