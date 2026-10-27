export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorBio?: string;
  publishedAt: string; // ISO date
  readTime: string;
  body: string[]; // one entry per paragraph (or stanza, for poems — lines separated by "\n")
  featured?: boolean; // pins the post to the /blog cover card regardless of date
};

export const blogPosts: BlogPost[] = [
  {
    slug: "the-invisible-fire",
    title: "The Invisible Fire",
    excerpt:
      "A poem for COP31 in Antalya on the climate threat we cannot see, and a call to bring it into the light with open data and decisive action.",
    category: "Poem",
    author: "George Wushi Deborah",
    publishedAt: "2026-10-27",
    readTime: "2 min read",
    body: [
      "An invisible fire that we cannot see,\nCreeps through the rafters of sky and of sea.\nIt holds not the flicker, the smoke, or the glare,\nBut a silent, sharp hunger that lingers in air.\nWe talk of the carbon, the black clouds of coal,\nWhile this ghost in the shadows consumes the whole.",
      "The pipelines are leaking, the meadows are deep,\nWith promises broken while the policy sleeps.\nThe venting of riches, of fuel turned to waste,\nA poison we're breathing with sickening haste.\nIt's a thief in the system, a hole in the plan,\nSlipping right through the tight grip of man.",
      "Yet here in the halls where the future is cast,\nWe stand at the threshold, the end of the past.\nFor if we would silence this heat in the night,\nWe must drag the invisible into the light.\nNot with more pledges, or ink on a page,\nBut with clear, open data to anchor the age.",
      "The cure is within us, a choice we can take,\nTo patch up the systems for our children's sake.\nTo capture the vapor, to seal up the vent,\nAnd reclaim the power we've recklessly spent.\nIt is low-hanging fruit on a tree growing dry,\nThe fastest way back to a cooler blue sky.",
      "So here in Antalya, the place where we turn,\nTo quench the cold embers that quietly burn.\nNo longer unseen, let the mandate be clear:\nTo face the invisible, to conquer the fear.\nFor the fire we cannot see, we can surely contain,\nIf we act for the earth, and the life that remains.",
    ],
  },
  {
    slug: "david-in-the-age-of-goliath",
    title: "David in the Age of Goliath: Africa’s Fight Against Climate Change",
    excerpt:
      "This piece explores the historical influences of the climate crisis in Africa. It challenges one to see the continent not as a victim, but as a powerful, necessary voice in the global climate movement.",
    category: "Article",
    author: "Dr Bridget Pemphero Useni",
    authorBio:
      "Dr Bridget Pemphero Useni is a 26-year-old Intern Medical Officer passionate about the intersection of health, community, and climate. She balances her clinical work with a deep love for reading and writing, especially reflective pieces and social commentary. Her interests span climate change and health, as well as sexual and reproductive health—areas she hopes to influence through both medicine and storytelling. When she’s not in the hospital or writing, she enjoys staying active, often exploring the outdoors through walking and hiking.",
    publishedAt: "2026-10-23",
    readTime: "4 min read",
    featured: true,
    body: [
      "Being a small NGO battling climate change can often feel like stepping into the shoes of David facing Goliath. The systems we challenge are enormous—global corporations, entrenched interests, centuries-old power structures. Yet what drives us is not size, but conviction. We are a passionate group of people who believe deeply in our cause, and we understand that this fight is not optional. Climate change is real, it is present, and it is reshaping life across the continent we call home.",
      "Despite what Big Oil and its defenders claim, Africa is among the most affected regions in the world. Rising temperatures, erratic rains, failed harvests, floods, cyclones—our landscapes feel the pressure long before the boardrooms of the polluters do. And the irony remains painful: we contribute the least to the global carbon footprint, yet we pay the highest price.",
      "This injustice is not disconnected from history. Colonialism disrupted indigenous relationships with the land. The white man persuaded African communities to abandon time-tested farming systems and adopt methods that suited foreign economies, not African ecologies. Seeds were replaced with imported varieties, cultivation methods with techniques that eroded soil health, depleted water sources, and pushed monolithic agriculture where biodiversity once thrived. What was introduced as “modernity” was, in fact, a slow unravelling of ecological wisdom.",
      "The same pattern followed with transport. We inherited cars reliant on imported fuel, machines that fill our cities and villages with fumes. Today our children cough from sunrise to sunset—victims of an air poisoning they did not create. And when these illnesses emerge, Big Pharma arrives with treatments for diseases that our ancestral lifestyles had never nurtured. The cycle repeats: dependence, vulnerability, profit.",
      "Africa, oh Africa—this struggle is not new. And while it is easy to view climate change as the responsibility of the wealthy, the truth is that we must stand at the forefront of this fight. We have done it before. We fought colonialism with bravery and unity, with the belief that our future was worth claiming. Today, environmental degradation is another form of colonization—one that targets our economies, our aspirations, and our right to sustainable development.",
      "Big Oil thrives when Africa fails to diversify. Its influence shapes policies, stifles renewable transitions, and keeps nations trapped in cycles of extraction rather than innovation. This is not an accident; it is a strategy. And resisting it is not merely an environmental duty—it is an act of economic liberation.",
      "The fight against climate change must therefore be waged at every level of African society. From Lagos to Addis Ababa, from Cape Town to Alexandria, we must raise our voices. Our governments must be reminded that environmental policy is not an optional add-on; it is the backbone of our survival. Policymakers must be confronted with truth and urgency. Communities must be educated, mobilized, and empowered to act.",
      "Courage, in this context, means pointing fingers where they need to be pointed. It means demanding accountability from those who profit from destruction. It means refusing to let the future of this continent be shaped by forces that care only for revenue, never for lives.",
      "In the face of a Goliath-sized crisis, Africa does not have the luxury of silence. We must fight—boldly, collectively, and unapologetically—because our survival depends on it.",
    ],
  },
];

export type UpcomingPost = {
  title: string;
  author: string;
  authorBio: string;
  links: { label: string; href: string }[];
};

// Shown in the "Coming soon" tile on /blog until the piece is published.
export const upcomingPosts: UpcomingPost[] = [
  {
    title: "Our Messed Mentality Towards the Environment",
    author: "Precious Kosomolate",
    authorBio:
      "Precious Kosomolate, popularly known as \"The Global Cosmolate,\" is a visionary Nigerian science communicator and first-class graduate of Adekunle Ajasin University who operates at the vital intersection of environmental health and creative advocacy. Driven by a deep interest in molecular biology and the One Health framework, she uses her platform, The One Health Diaries, to creatively demystify the links between human, animal, and planetary health. Through Project Typhoid Free Nigeria, Precious merges physical activism, such as community cleanups, with strategic health education on sanitation and hand hygiene to tackle waterborne diseases influenced by climate change. As a STEM mentor and environmentalist, she inspires a new generation to view scientific innovation as a creative tool for ecological resilience, proving that protecting our shared environment is the most effective way to ensure a healthy and sustainable future for all.",
    links: [{ label: "Instagram", href: "https://www.instagram.com/theglobalcosmolate" }],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
