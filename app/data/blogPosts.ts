export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  featured?: boolean;
};

// Placeholder content — swap these out for real posts when they're ready.
export const blogPosts: BlogPost[] = [
  {
    id: "placeholder-1",
    title: "A Field Note From the Climate-Health Frontline",
    excerpt:
      "This is placeholder body copy standing in for a real article excerpt. It will be replaced once the first post is written.",
    category: "Field Notes",
    author: "ACHII Team",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "placeholder-2",
    title: "What We're Learning About Community-Led Adaptation",
    excerpt:
      "Placeholder excerpt text. Real writing from African clinicians, researchers, and advocates will live here.",
    category: "Opinion",
    author: "ACHII Team",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: "placeholder-3",
    title: "Notes on Building the Regional Champion Model",
    excerpt:
      "Placeholder excerpt text describing what this article will eventually cover, in a sentence or two.",
    category: "Advocacy",
    author: "ACHII Team",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: "placeholder-4",
    title: "A Clinician's Perspective on Heat and Health",
    excerpt: "Placeholder excerpt text for a recent post card.",
    category: "Climate & Health",
    author: "ACHII Team",
    readTime: "3 min read",
  },
  {
    id: "placeholder-5",
    title: "Reporting From the Ground on Flood Recovery",
    excerpt: "Placeholder excerpt text for a recent post card.",
    category: "Field Notes",
    author: "ACHII Team",
    readTime: "5 min read",
  },
  {
    id: "placeholder-6",
    title: "Why Data Ownership Matters in African Health Research",
    excerpt: "Placeholder excerpt text for a recent post card.",
    category: "Research",
    author: "ACHII Team",
    readTime: "7 min read",
  },
  {
    id: "placeholder-7",
    title: "Student Voices From the ACHIIlites Programme",
    excerpt: "Placeholder excerpt text for a recent post card.",
    category: "Community",
    author: "ACHII Team",
    readTime: "4 min read",
  },
  {
    id: "placeholder-8",
    title: "The Case for Climate-Resilient Childhood Policy",
    excerpt: "Placeholder excerpt text for a recent post card.",
    category: "Policy & Advocacy",
    author: "ACHII Team",
    readTime: "6 min read",
  },
  {
    id: "placeholder-9",
    title: "Mosquitoes, Models, and the African Epidemiology Gap",
    excerpt: "Placeholder excerpt text for a recent post card.",
    category: "Disease Surveillance",
    author: "ACHII Team",
    readTime: "5 min read",
  },
];
