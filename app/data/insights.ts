export type ContentType =
  | "Webinar"
  | "Insight Brief"
  | "Research Summary"
  | "Report";

export type Item = {
  id: string;
  type: ContentType;
  topic: string;
  tag?: string;
  title: string;
  excerpt: string;
  summary: string;
  date: string;
  speakers: string[];
  image?: string;
  duration?: string;
  watchHref?: string;
  reportHref?: string;
  takeaways: string[];
  discussion: string[];
  related: string[];
  featured?: boolean;
  upcoming?: boolean;
};

export const TOPICS = [
  "Climate & Health",
  "Food Systems",
  "Child Health",
  "Urban Resilience",
  "Disease Surveillance",
  "Policy & Advocacy",
  "AI & Public Health",
];

export const TYPE_FILTERS: (ContentType | "All Content")[] = [
  "All Content",
  "Webinar",
  "Insight Brief",
  "Research Summary",
  "Report",
];

export const typeStyles: Record<ContentType, string> = {
  Webinar: "bg-primary-base/90 text-strong",
  "Insight Brief": "bg-yellow/80 text-strong ",
  "Research Summary": "bg-primary-light/90 text-strong",
  Report: "bg-primary-base/90 text-strong",

};


export const items: Item[] = [
   {
    id: "wb0000-health",
    type: "Webinar",
    topic: "Climate & Health",
    tag: "WB0000 · October 2025",
    title: "Climate Change Is a Health Emergency: What Every Healthcare Worker Must Know.",
    excerpt:
      "What if the next patient you treat is already suffering from the invisible wounds of climate change?",
    summary:
      "From heat waves to flooding, shifting weather patterns are fueling new health emergencies. Healthcare workers stand at the frontline, yet many lack the knowledge to connect climate change with its medical consequences. ",
    date: "October 2025",
    duration: "75 min",
    speakers: ["ACHII Policy Team"],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784123991/achii/images/hero.jpg",
    reportHref: "https://drive.google.com/file/d/1Z_4sRm_vtwjRHEoZTaMf-jooQi6lWy4R/view",
    takeaways: [
      "Nigeria loses ₦3.5 trillion in food annually after harvest.",
      "Solutions exist at household, farm, and policy levels simultaneously.",
      "Food security is inseparable from climate-health resilience.",
    ],
    discussion: [
      "Storage and cold-chain gaps in rural supply lines.",
      "How youth-led agriculture can change the trajectory.",
      "Policy levers that actually reach smallholder farmers.",
    ],
    related: ["wb0003-mosquitoes", "wb0002-childhood", "report-q1"],
  },
 
  {
    id: "wb0001-food",
    type: "Webinar",
    topic: "Food Systems",
    tag: "WB0001 · January 2026",
    title: "The Future of Food & Sustainable Agriculture in Nigeria",
    excerpt:
      "Nigeria loses ₦3.5 trillion in food annually post-harvest — and climate change is compounding the failure.",
    summary:
      "Our opening webinar reached 42 attendees and delivered four audience-specific solutions across households, farmers, youth, and advocates. The headline: post-harvest loss is a climate-health problem hiding in plain sight, and the fixes are within reach if we act at every level at once.",
    date: "January 2026",
    duration: "75 min",
    speakers: ["ACHII Policy Team"],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784123995/achii/images/Jan.png",
    reportHref: "https://drive.google.com/file/d/1Z_4sRm_vtwjRHEoZTaMf-jooQi6lWy4R/view",
    takeaways: [
      "Nigeria loses ₦3.5 trillion in food annually after harvest.",
      "Solutions exist at household, farm, and policy levels simultaneously.",
      "Food security is inseparable from climate-health resilience.",
    ],
    discussion: [
      "Storage and cold-chain gaps in rural supply lines.",
      "How youth-led agriculture can change the trajectory.",
      "Policy levers that actually reach smallholder farmers.",
    ],
    related: ["wb0003-mosquitoes", "wb0002-childhood", "report-q1"],
  },
  
  {
    id: "wb0002-childhood",
    type: "Webinar",
    topic: "Child Health",
    tag: "WB0002 · February 2026",
    title: "Future-Proofing Childhood: Building Climate-Resilient Minds and Spaces for our Children",
    excerpt:
      "85% of brain development happens before age 3 — and climate stress in that window causes irreversible damage.",
    summary:
      "The most evidence-dense session of the series examined how heat, malnutrition, and disaster stress in early childhood reshape lifelong health. A sobering, deeply practical conversation about protecting the youngest in a warming world.",
    date: "February 2026",
    duration: "80 min",
    speakers: ["EcoTech Insights"],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784123990/achii/images/February-Webinar.jpg",
    reportHref: "https://drive.google.com/file/d/14I7XJDDjV0aOpNysRcwGv6oWWvRz7CVC/view",
    takeaways: [
      "85% of brain development is complete before age three.",
      "Heat and malnutrition in early life cause irreversible harm.",
      "Early-childhood protection is a frontline climate intervention.",
    ],
    discussion: [
      "How disaster displacement disrupts early development.",
      "Community-level buffers against childhood heat stress.",
      "Measuring long-term outcomes from early exposure.",
    ],
    related: ["wb0004-heat", "wb0001-food", "research-national"],
  },

  {
    id: "wb0003-mosquitoes",
    type: "Webinar",
    topic: "Disease Surveillance",
    tag: "WB0003 · March 2026",
    title: "The Big Itch: Why Climate change is the best thing to happen to mosquitoes.",
    excerpt:
      "Why a warming continent is rewriting the map of vector-borne disease — and why African epidemiology must lead the response.",
    summary:
      "Our third webinar drew international attendance from Afghanistan and Zambia for a hard look at how climate change is expanding the range and season of disease-carrying mosquitoes. AI-driven outbreak prediction is now hitting 85% accuracy — but the data, models, and decisions must be grounded in African epidemiology, not imported wholesale.",
    date: "March 2026",
    duration: "90 min",
    speakers: ["One Health Expert Panel"],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124018/achii/images/March.png",
    watchHref: "https://drive.google.com/file/d/1T5Ezw5EQ5lPkD0e2P5xpmS34YQfPKQvp/view",
    takeaways: [
      "Warming seasons extend mosquito breeding windows into previously low-risk regions.",
      "AI outbreak prediction has reached ~85% accuracy and is improving fast.",
      "African researchers must own the data pipelines, not just contribute samples.",
    ],
    discussion: [
      "Where surveillance gaps are widest across the continent.",
      "How to make prediction models usable for frontline clinics.",
      "The ethics of data ownership in cross-border health research.",
    ],
    related: ["wb0001-food", "research-national", "report-q1"],
    featured: true,
  },
   
  {
    id: "wb0004-heat",
    type: "Webinar",
    topic: "Urban Resilience",
    tag: "WB0004 · April 2026",
    title: "Too Hot to Handle: Why Heat is the Ultimate Inequality",
    excerpt:
      "Extreme heat hits the poor, the elderly, and the outdoor worker hardest — reshaping what ‘healthy’ means.",
    summary:
      "The highest-participation session of the series reframed extreme heat as a justice and equity issue, not just a medical one. An interactive format and a packed Q&A made it the most engaged conversation ACHII has hosted.",
    date: "April 2026",
    duration: "85 min",
    speakers: ["Urban Futures Collective"],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784123967/achii/images/April.png",
    watchHref: "https://drive.google.com/file/d/1z7zzcZcKqk-T9KAZJGvMDo2YU1wwL50f/view",
    takeaways: [
      "Heat exposure tracks directly onto existing inequality.",
      "Outdoor workers and the elderly carry the heaviest burden.",
      "Urban design is now a determinant of survivable temperatures.",
    ],
    discussion: [
      "Cooling access as a public-health right.",
      "Redesigning clinics, farms, and cities for heat.",
      "Who is accountable for heat-related deaths.",
    ],
    related: ["wb0003-mosquitoes", "wb0002-childhood", "report-q1"],
  },
  {
    id: "wb0005-minds",
    type: "Webinar",
     topic: "Climate & Health",
    tag: "WB0005",
    title: "Minds Under Pressure: The Unseen Wounds of Climate Change",
    excerpt:
      "Examining the psychological, emotional, and psychiatric toll of a changing climate on African communities.",
    summary:
      "A 90-minute conversation with leading voices on climate-mental health in Africa. Eco-anxiety, eco-grief, post-disaster trauma, and displacement stress are real clinical realities reshaping mental-health care — and they remain severely under-discussed.",
    date: "May 2026",
    duration: "7:00–8:30 PM WAT",
    speakers: ["Odunola Oladeji"],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124026/achii/images/May.png",
    watchHref: "https://drive.google.com/file/d/1AGZfMb_Q7SjkTas95ucCRzJTx3h1RmxW/view?usp=drive_link",
    takeaways: [
       "Climate shocks compound an already under-resourced mental-health system.",
      "Eco-anxiety and eco-grief are clinical realities, not metaphors.",
      "Community-centred frameworks can respond at scale.",
    ],
  discussion: [
      "Screening for climate-related distress in primary care.",
      "Therapeutic frameworks adapted to African contexts.",
      "Building peer-support networks after disasters.",
    ],
    related: ["wb0004-heat", "research-national"],
  },
//Upcoming?
  {
    id: "wb0006-equity",
    type: "Webinar",
    topic: "Climate & Health",
    tag: "WB0006 · 27 June 2026",
    title: "Voices From The Margins: Protecting Women, Elderly, and Low-Income Communities in Africa's Climate Crisis",
    excerpt:
      "Elevating solutions-oriented voices from within these communities, and builds collective action for protection and resilience. ",
    summary:
      "A 90-minute conversation that examines the intersecting vulnerabilities these groups face, explores evidence-based adaptation strategies, and builds pathways for inclusive climate action that prioritises protection, dignity, and equitable access to resources.",
    date: "Saturday, 27 June 2026",
    duration: "7:00–8:30 PM WAT",
    speakers: ["Lasisi Godwin (UNICEF GEN-U Youth Advisor) "],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124035/achii/images/outreach-assembly.jpg",
    watchHref: "https://forms.gle/rG283eQxCjRa7i1M6",
    takeaways: [
      "Climate shocks compound an already under-resourced mental-health system.",
      "Eco-anxiety and eco-grief are clinical realities, not metaphors.",
      "Community-centred frameworks can respond at scale.",
    ],
    discussion: [
      "Screening for climate-related distress in primary care.",
      "Therapeutic frameworks adapted to African contexts.",
      "Building peer-support networks after disasters.",
    ],
    related: ["wb0004-heat", "research-national"],
    upcoming: true,
  },

  {
    id: "research-national",
    type: "Research Summary",
    topic: "Policy & Advocacy",
    tag: "National Study",
    title: "Nigeria’s first national climate-health awareness study.",
    excerpt:
      "A mixed-methods study across all six geopolitical zones — scaling to 900 verified responses.",
    summary:
      "ACHII is examining climate-health awareness among healthcare professionals AND communities simultaneously — most research looks at only one. The pilot (81 responses) is complete; the study is now scaling nationally through the Regional Champion Model.",
    date: "Ongoing · 2026",
    speakers: ["ACHII Research Team"],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124126/achii/images/team-group.jpg",
    reportHref: "/#research",
    takeaways: [
      "First study to survey clinicians and communities together.",
      "Mixed-methods design across six geopolitical zones.",
      "Scaling from 81 pilot responses to 900 nationally.",
    ],
    discussion: [
      "Why the clinician–community gap costs lives.",
      "How Regional Champions close geographic blind spots.",
      "Turning findings into national policy.",
    ],
    related: ["wb0003-mosquitoes", "report-q1"],
  },

  {
    id: "report-q1",
    type: "Report",
    topic: "Climate & Health",
    tag: "Q1 2026",
    title: "ACHII Q1 Impact Report — January to April 2026",
    excerpt:
      "Four webinars, in-person outreach, the pilot research phase, and the Regional Champion Model.",
    summary:
      "Our first quarterly impact report is a window into how ACHII works — what we measure, what we learn, and what we do next. It covers the launch of the webinar series, school outreach, the national study pilot, and the deployment of 17 Regional Champions.",
    date: "April 2026",
    speakers: ["ACHII"],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124037/achii/images/outreach-blue.jpg",
    reportHref: "/reports",
    takeaways: [
      "117 webinar attendees across four countries.",
      "~70 students reached through in-person outreach.",
      "17 Regional Champions deployed across six zones.",
    ],
    discussion: [
      "What the numbers reveal about demand.",
      "Where the work goes in Q2.",
      "How transparency builds trust with funders.",
    ],
    related: ["research-national", "wb0001-food"],
  },

//INSIGHT-BRIEFS
  {
    id: "insight-food",
    type: "Insight Brief",
    topic: "Food Systems",
    tag: "Insight · Food",
    title: "Post-harvest loss is a climate-health emergency.",
    excerpt:
      "Nigeria loses ₦3.5 trillion in food annually after harvest — a crisis hiding in plain sight.",
    summary:
      "Drawn from our Food Systems webinar: climate change is compounding post-harvest failure, but household, farm, and policy solutions can move together. Food security is a climate-health issue, not a separate one.",
    date: "January 2026",
    speakers: ["ACHII Policy Team"],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784123995/achii/images/Jan.png",
    reportHref: "https://drive.google.com/file/d/1Z_4sRm_vtwjRHEoZTaMf-jooQi6lWy4R/view",
    takeaways: [
      "₦3.5 trillion in food is lost annually post-harvest.",
      "Cold-chain and storage gaps drive most of the loss.",
      "Fixes must run from household to national policy at once.",
    ],
    discussion: [
      "What scalable storage looks like for smallholders.",
      "How youth-led agriculture shifts the curve.",
      "Aligning incentives across the supply chain.",
    ],
    related: ["wb0001-food", "report-q1"],
  },
  {
    id: "insight-childhood",
    type: "Insight Brief",
    topic: "Child Health",
    tag: "Insight · Childhood",
    title: "Future-Proofing Childhood.",
    excerpt:
      "Building Climate-Resilient Minds.",
    summary:
      "A sobering, deeply practical conversation about protecting the youngest in a warming world.",
    date: "February 2026",
    speakers: ["ACHII Policy Team"],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784123990/achii/images/February-Webinar.jpg",
    reportHref: "https://drive.google.com/file/d/1T5Ezw5EQ5lPkD0e2P5xpmS34YQfPKQvp/view",
    takeaways: [
      "₦3.5 trillion in food is lost annually post-harvest.",
      "Cold-chain and storage gaps drive most of the loss.",
      "Fixes must run from household to national policy at once.",
    ],
    discussion: [
      "What scalable storage looks like for smallholders.",
      "How youth-led agriculture shifts the curve.",
      "Aligning incentives across the supply chain.",
    ],
    related: ["wb0002-childhood", "report-q1"],
  },
  {
    id: "insight-mosquitoes",
    type: "Insight Brief",
    topic: "Disease Surveillance",
    tag: "Insight · mosquitoes",
    title: "Climate change is the best thing to happen to mosquitoes in a century.",
    excerpt:
      "how climate change is expanding the range and season of disease-carrying mosquitoes.",
    summary:
      " AI-driven outbreak prediction is now hitting 85% accuracy — but the data, models, and decisions must be grounded in African epidemiology, not imported wholesale.",
    date: "March 2026",
    speakers: ["ACHII Policy Team"],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124018/achii/images/March.png",
    reportHref: "https://drive.google.com/file/d/1TGCKxJ782m7CnvczVm6Rm8jWxW8OAOE4/view",
    takeaways: [
      "₦3.5 trillion in food is lost annually post-harvest.",
      "Cold-chain and storage gaps drive most of the loss.",
      "Fixes must run from household to national policy at once.",
    ],
    discussion: [
      "What scalable storage looks like for smallholders.",
      "How youth-led agriculture shifts the curve.",
      "Aligning incentives across the supply chain.",
    ],
    related: ["wb0003-mosquitoes", "report-q1"],
  },
  {
    id: "insight-heat",
    type: "Insight Brief",
    topic: "Urban Resilience",
    tag: "Insight · Heat",
    title: "Extreme heat is the ultimate inequality.",
    excerpt:
      "Heat hits the poor, the elderly, and the outdoor worker hardest — reshaping what ‘healthy’ means.",
    summary:
      "From our Heat webinar: extreme heat is a justice issue as much as a medical one. Urban design, labour protections, and cooling access now determine survivable temperatures for the most exposed.",
    date: "April 2026",
    speakers: ["Urban Futures Collective"],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784123967/achii/images/April.png",
    reportHref: "https://drive.google.com/file/d/13oW_jL8wlDlkYxPzh5rO-EKZL2sxlaxr/view",
    takeaways: [
      "Heat exposure maps directly onto existing inequality.",
      "Outdoor workers and the elderly bear the heaviest load.",
      "City design is now a determinant of survival.",
    ],
    discussion: [
      "Cooling access as a public-health right.",
      "Redesigning clinics and workplaces for heat.",
      "Accountability for heat-related harm.",
    ],
    related: ["wb0004-heat", "report-q1"],
  },
   {
    id: "insights-minds",
    type: "Insight Brief",
     topic: "Climate & Health",
    tag: "Insight · Mind",
    title: "Minds Under Pressure: The Unseen Wounds of Climate Change",
    excerpt:
      "Examining the psychological, emotional, and psychiatric toll of a changing climate on African communities.",
    summary:
      "A 90-minute conversation with leading voices on climate-mental health in Africa. Eco-anxiety, eco-grief, post-disaster trauma, and displacement stress are real clinical realities reshaping mental-health care — and they remain severely under-discussed.",
    date: "May 2026",
    speakers: ["Odunola Oladeji"],
    image: "https://res.cloudinary.com/davuaeyxb/image/upload/v1784124026/achii/images/May.png",
    reportHref: "https://drive.google.com/file/d/1Sf65sWbKoGPtBRyozghAWNy8D1zQ3gvQ/view?usp=sharing",
    takeaways: [
       "Climate shocks compound an already under-resourced mental-health system.",
      "Eco-anxiety and eco-grief are clinical realities, not metaphors.",
      "Community-centred frameworks can respond at scale.",
    ],
  discussion: [
      "Screening for climate-related distress in primary care.",
      "Therapeutic frameworks adapted to African contexts.",
      "Building peer-support networks after disasters.",
    ],
    related: ["wb0005-minds", "research-national"],
  },
];

export const byId = (id: string) => items.find((i) => i.id === id);
