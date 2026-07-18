"use client";

import { useState } from "react";

const storyParagraphs = [
  "I asked my colleagues, people I trained alongside, whether they knew about the relationship between climate change and health. They didn't. Not vaguely, not partially. They simply hadn't been taught it.",
  "The environment wasn't a backdrop to my patients' health. It was shaping it directly, in front of me, and almost no one around me had the language to name what they were seeing.",
  "So I went looking for where that gap actually lived. I found it in the curriculum. Climate change was absent from medical training across schools in Africa. Two truths sat closest to home for me: that our clinics collapse under climate shocks they were never built for, and that passionate students have no real platform to lead change. I had lived both.",
  "Then I started where I was. For the first two months, it was just me, running a pilot study to find out how deep the knowledge gap actually went. Then the first volunteers found me, and within three months of that, we had launched the national survey and delivered our first webinar.",
  "It wasn't an easy field to build in, climate-health still isn't common ground, and some people were understandably cautious. But others had been waiting for someone to start exactly this. I had real support around me, and my faith carried me through the moments of doubt.",
  "Watching it grow into ACHII — the Regional Champions, the reach across 15+ countries, the team I've been blessed with — still feels unreal. I'm grateful, and we are just getting started.",
];

const bioParagraphs = [
  "Dr. Aishat Ayoola Oduye is a medical doctor, climate and health expert, and youth development strategist with over six years of experience at the intersection of public health, environmental sustainability, and policy advocacy. Passionate about creating systems-level change, she has led and contributed to over 45 youth-driven projects across 15 Nigerian states and 15 countries, focusing on climate education, plastic pollution mitigation, health equity, and meaningful youth engagement.",
  "As a Yale Certified Climate and Health Expert, Dr. Aishat has represented global youths and frontline communities at some of the world's most influential platforms, including PreCOP29 in Azerbaijan, where she delivered the Global Youth Statement, the World Health Assembly, and the UNFCCC 11th Facilitative Working Group for Local Communities and Indigenous Peoples.",
  "Beyond founding the Africa Climate and Health Innovation Institute, she is also the co-contact point for the Health Working Group at YOUNGO UNFCCC, where she leads advocacy strategy, capacity building, and intergenerational policy engagement. She is deeply committed to ensuring that youth voices, especially from the Global South, influence environmental governance and climate-resilient healthcare policies.",
  "Her work is grounded in lived experience and driven by a vision to bridge climate and health systems, empower marginalized communities, and inspire a generation of youth leaders to drive inclusive, data-informed, and justice-centred solutions for a sustainable future.",
];

export default function FounderSection() {
  const [tab, setTab] = useState<"story" | "bio">("story");

  return (
    <div data-nav-theme="light">
      <section className="bg-bg-soft py-20 lg:py-[120px]">
        <div className="container-site grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12">
          <div>
            <img
              src="https://res.cloudinary.com/davuaeyxb/image/upload/v1784123963/achii/images/Aisha.jpg"
              alt="Dr Aishat Oduye"
              className="aspect-[4/5] w-full object-cover rounded-2xl mb-5"
            />
            <h2 className="font-header font-semibold text-strong text-2xl leading-tight">
              Dr Aishat Oduye
            </h2>
            <p className="font-body text-primary-base text-sm mt-1">
              Founder & Executive Director
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-8">
              <button
                onClick={() => setTab("story")}
                className={`rounded-full px-5 py-2 font-header font-medium text-sm transition-colors ${
                  tab === "story"
                    ? "bg-primary-base text-white"
                    : "bg-white text-soft border border-stroke-soft hover:border-primary-base"
                }`}
              >
                Founder's Story
              </button>
              <button
                onClick={() => setTab("bio")}
                className={`rounded-full px-5 py-2 font-header font-medium text-sm transition-colors ${
                  tab === "bio"
                    ? "bg-primary-base text-white"
                    : "bg-white text-soft border border-stroke-soft hover:border-primary-base"
                }`}
              >
                Bio
              </button>
            </div>

            {tab === "story" ? (
              <div>
                <p className="font-header font-semibold text-strong text-2xl sm:text-3xl leading-snug tracking-[-0.01em] mb-8 max-w-xl">
                  "It started with a question, not an answer."
                </p>
                <div className="flex flex-col gap-5 max-w-2xl">
                  {storyParagraphs.map((p, i) => (
                    <p key={i} className="font-body text-dark text-base leading-[1.75]">
                      {p}
                    </p>
                  ))}
                  <p className="font-header font-medium text-strong text-sm mt-2">
                    — Dr. Aishat
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-5 max-w-2xl">
                {bioParagraphs.map((p, i) => (
                  <p key={i} className="font-body text-dark text-base leading-[1.75]">
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}