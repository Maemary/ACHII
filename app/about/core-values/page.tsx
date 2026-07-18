import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import SectionHeader from "@/app/components/SectionHeader";

export const metadata = {
  title: "Core Values — ACHII",
  description:
    "The six values that guide how ACHII works: Collaboration, Inclusion, Proactiveness, Excellence, Integrity, and Empathy.",
};

const values = [
  ["Collaboration", "Strength in unity. We share knowledge freely and value collective success over individual recognition."],
  ["Inclusion", "Belonging for all. We intentionally seek out diverse perspectives."],
  ["Proactiveness", "Ownership of action. See a gap? Fill it."],
  ["Excellence", "Commitment to quality. Good enough is never the goal."],
  ["Integrity", "Honesty in effort. Trust is the foundation of our work."],
  ["Empathy", "Compassion in service. We lead with heart."],
];

export default function CoreValuesPage() {
  return (
    <main className="relative">
      <Navbar />

      <div data-nav-theme="dark">
        <PageHero
          eyebrow="About ACHII"
          title="Six values, six rules of engagement."
          subtitle="These are the values that shape every decision, partnership, and piece of work ACHII puts into the world."
        />
           <section className="bg-primary-dark py-20 lg:pt-[5px] lg:pb-[85px]">
          <div className="container-site">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map(([t, d]) => (
                <div key={t} className="bg-white/10 border border-white/15 rounded-2xl p-7">
                  <h3 className="font-header font-semibold text-white text-lg mb-2">{t}</h3>
                  <p className="font-body text-white/75 text-sm leading-[1.7]">{d}</p>
                </div>
              ))}
            </div>
     
           
          </div>
        </section>
      </div>

      <div data-nav-theme="dark">
        
      </div>

      <div data-nav-theme="dark"><Footer /></div>
    </main>
  );
}
