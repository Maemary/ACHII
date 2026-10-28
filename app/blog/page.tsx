import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SectionHeader from "@/app/components/SectionHeader";
import Button from "@/app/components/Button";
import { socialIcons } from "@/lib/socialIcons";
import { blogPosts, upcomingPosts, formatPostDate, type BlogPost, type UpcomingPost } from "@/app/data/blogPosts";

export const metadata = {
  title: "Blog & Articles — ACHII",
  description:
    "Stories, essays, and field notes from African clinicians, researchers, and community advocates on the climate-health frontline.",
  alternates: { canonical: "/blog" },
};

// Featured post first, then newest first. The first post anchors the bento grid, the next two
// sit beside it, and everything after that goes in the Recent Posts list.
const posts = [...blogPosts].sort(
  (a, b) => Number(!!b.featured) - Number(!!a.featured) || b.publishedAt.localeCompare(a.publishedAt),
);
const [coverPost, ...rest] = posts;
const sidePosts = rest.slice(0, 2);
const recentPosts = rest.slice(2);

const categoryStyles: Record<string, string> = {
  "Field Notes": "bg-primary-dark text-white",
  Opinion: "bg-yellow text-strong",
  Article: "bg-yellow text-strong",
  Poem: "bg-green text-white",
  Advocacy: "bg-green text-white",
  "Climate & Health": "bg-primary-base text-white",
  Research: "bg-primary-light text-strong",
  Community: "bg-[#f5c01f] text-strong",
  "Policy & Advocacy": "bg-green/80 text-white",
  "Disease Surveillance": "bg-primary-base/80 text-white",
};

// Solid brand color per category — used for list thumbnails and bento accents.
const categorySolid: Record<string, { bg: string; text: string }> = {
  "Field Notes": { bg: "bg-primary-dark", text: "text-white" },
  Opinion: { bg: "bg-yellow", text: "text-strong" },
  Article: { bg: "bg-yellow", text: "text-strong" },
  Poem: { bg: "bg-green", text: "text-white" },
  Advocacy: { bg: "bg-green", text: "text-white" },
  "Climate & Health": { bg: "bg-primary-base", text: "text-white" },
  Research: { bg: "bg-primary-light", text: "text-strong" },
  Community: { bg: "bg-[#f5c01f]", text: "text-strong" },
  "Policy & Advocacy": { bg: "bg-green/80", text: "text-white" },
  "Disease Surveillance": { bg: "bg-primary-base/80", text: "text-white" },
};

const coverGradients = [
  "from-primary-dark via-primary-base to-green",
  "from-green via-primary-dark to-primary-base",
  "from-yellow via-[#f5c01f] to-primary-dark",
];

function DocIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6M9 17h6M9 9h1" />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M9.5 8C7 8 5 10 5 12.5S7 17 9.5 17c.3 0 .6 0 .9-.1-.6 1.6-2 2.9-3.9 3.4l.6 1.6c3.4-.9 5.9-3.8 5.9-7.9V12c0-2.2-1.8-4-4-4zm9 0c-2.5 0-4.5 2-4.5 4.5S16 17 18.5 17c.3 0 .6 0 .9-.1-.6 1.6-2 2.9-3.9 3.4l.6 1.6c3.4-.9 5.9-3.8 5.9-7.9V12c0-2.2-1.8-4-4-4z" />
    </svg>
  );
}

function MegaphoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M3 11v2a1 1 0 0 0 1 1h1l4 4V6l-4 4H4a1 1 0 0 0-1 1z" />
      <path d="M14 8a4 4 0 0 1 0 8" />
      <path d="M17.5 5.5a8 8 0 0 1 0 13" />
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M11 20A7 7 0 0 1 4 13V4h9a7 7 0 0 1 7 7v0a9 9 0 0 1-9 9z" />
      <path d="M4 13c8 0 11-6 11-9" />
    </svg>
  );
}

const icons = [QuoteIcon, DocIcon, MegaphoneIcon, LeafIcon];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

/** Large full-bleed "cover" card — the bento grid's anchor tile. */
function CoverCard({ post, variant }: { post: BlogPost; variant: number }) {
  const Icon = icons[variant % icons.length];
  return (
    <Link href={`/blog/${post.slug}`} className={`group relative h-full min-h-[300px] rounded-3xl overflow-hidden bg-gradient-to-br ${coverGradients[variant % coverGradients.length]} flex flex-col justify-end p-7 lg:p-9`}>
      <Icon className="absolute -top-6 -right-6 w-40 h-40 text-white/10 rotate-12" />
      <span className={`absolute top-5 left-5 inline-flex items-center rounded-full px-3 py-1 font-body font-semibold text-[10px] tracking-[0.1em] uppercase ${categoryStyles[post.category] ?? "bg-white text-strong"}`}>
        {post.category}
      </span>
      <div className="relative pt-10">
        <h3 className="font-header font-semibold text-white text-xl lg:text-[26px] leading-[1.2] mb-3 max-w-2xl group-hover:text-yellow transition-colors">
          {post.title}
        </h3>
        <p className="font-body text-white/75 text-sm leading-[1.7] mb-5 max-w-xl line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between gap-4 border-t border-white/20 pt-4">
          <div className="flex flex-wrap items-center gap-2 font-body text-xs text-white/60">
            <span>{post.author}</span>
            <span>&middot;</span>
            <span>{formatPostDate(post.publishedAt)}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>
          <span className="inline-flex items-center gap-1 font-header font-medium text-xs text-yellow flex-shrink-0">
            Read article <ArrowIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}

/** Compact bento tile — sits beside the cover card. */
function CompactCard({ post }: { post: BlogPost }) {
  // Poems tease their opening lines; everything else shows the excerpt.
  const teaser = post.category === "Poem" ? post.body[0].split("\n").slice(0, 4) : null;
  return (
    <Link href={`/blog/${post.slug}`} className="group relative bg-white rounded-2xl border border-stroke-soft hover:border-primary-light hover:shadow-lg transition-all duration-300 p-6 lg:p-7 flex-1 flex flex-col">
      <span className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 font-body font-semibold text-[10px] tracking-[0.1em] uppercase mb-4 ${categoryStyles[post.category] ?? "bg-primary-lighter text-primary-base"}`}>
        {post.category}
      </span>
      <h3 className="font-header font-semibold text-strong text-lg leading-[1.3] mb-3 group-hover:text-primary-base transition-colors line-clamp-2">
        {post.title}
      </h3>
      {teaser ? (
        <div className="mb-5 flex-1">
          <blockquote className="border-l-2 border-green pl-4">
            {teaser.map((line) => (
              <p key={line} className="font-body italic text-sub text-sm leading-[1.7]">{line}</p>
            ))}
          </blockquote>
        </div>
      ) : (
        <p className="font-body text-sub text-sm leading-[1.6] mb-5 line-clamp-3 flex-1">{post.excerpt}</p>
      )}
      <div className="flex items-center justify-between gap-3 border-t border-stroke-soft pt-4 font-body text-xs text-soft">
        <span className="truncate">{post.author} &middot; {post.readTime}</span>
        <span className="inline-flex items-center gap-1 font-header font-medium text-primary-base flex-shrink-0">
          Read <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

// "Precious Kosomolate" → "PK"
function initials(name: string) {
  const words = name.replace(/^Dr\.?\s+/i, "").split(/\s+/);
  return (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "")).toUpperCase();
}

/** "Coming soon" feature — announces a piece that hasn't been published yet, with the author up front. */
function ComingSoonCard({ post }: { post: UpcomingPost }) {
  return (
    <article className="relative rounded-3xl bg-white/[0.06] border border-white/10 backdrop-blur-sm overflow-hidden grid md:grid-cols-[260px_1fr]">
      {/* Author panel */}
      <div className="relative bg-gradient-to-br from-yellow to-[#f5c01f] p-8 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full bg-primary-dark text-yellow flex items-center justify-center font-header font-semibold text-3xl mb-4 ring-4 ring-white/40">
          {initials(post.author)}
        </div>
        <p className="font-header font-semibold text-strong text-lg leading-snug">{post.author}</p>
        <p className="font-body text-strong/70 text-xs mt-1 mb-4">Contributor</p>
        <div className="flex flex-wrap justify-center gap-2">
          {post.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${post.author} on ${l.label}`}
              className="w-9 h-9 rounded-full bg-primary-dark/90 text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d={socialIcons[l.icon]} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Piece details */}
      <div className="p-8 lg:p-10 flex flex-col">
        <div className="flex items-center gap-3 mb-5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-yellow opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow" />
          </span>
          <span className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow">In the works</span>
        </div>
        <h3 className="font-header font-semibold text-white text-2xl lg:text-[32px] leading-[1.15] tracking-[-0.01em] mb-5">
          {post.title}
        </h3>
        {post.shortBio && (
          <p className="md:hidden font-body text-white/70 text-sm leading-[1.8]">{post.shortBio}</p>
        )}
        <p className={`${post.shortBio ? "hidden md:block" : ""} font-body text-white/70 text-sm lg:text-[15px] leading-[1.8]`}>
          {post.authorBio}
        </p>
      </div>
    </article>
  );
}

/** Horizontal list row — used for the Recent Posts index. */
function ListRow({ post, variant }: { post: BlogPost; variant: number }) {
  const solid = categorySolid[post.category] ?? { bg: "bg-primary-lighter", text: "text-primary-base" };
  const Icon = icons[variant % icons.length];
  return (
    <Link href={`/blog/${post.slug}`} className="group grid grid-cols-[auto_1fr] sm:grid-cols-[96px_1fr_auto] gap-x-5 gap-y-3 items-center py-6 border-b border-white/10 hover:bg-white/[0.04] transition-colors px-2 -mx-2 rounded-xl">
      <div className={`w-16 h-16 sm:w-24 sm:h-24 rounded-2xl ${solid.bg} ${solid.text} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-7 h-7 sm:w-9 sm:h-9 opacity-70" />
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-3 mb-1.5">
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-body font-semibold text-[10px] tracking-[0.1em] uppercase ${categoryStyles[post.category] ?? "bg-primary-lighter text-primary-base"}`}>
            {post.category}
          </span>
          <span className="font-body text-[11px] text-white/40 uppercase tracking-[0.08em]">{formatPostDate(post.publishedAt)}</span>
        </div>
        <h3 className="font-header font-semibold text-white text-lg leading-[1.3] mb-1.5 group-hover:text-yellow transition-colors">
          {post.title}
        </h3>
        <p className="font-body text-white/60 text-sm leading-[1.6] line-clamp-1 sm:line-clamp-2 max-w-2xl">{post.excerpt}</p>
      </div>

      <div className="col-span-2 sm:col-span-1 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 sm:text-right">
        <span className="font-body text-xs text-white/50">{post.author}</span>
        <span className="font-body text-xs text-white/50">{post.readTime}</span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Highlights — bento grid */}
      <div data-nav-theme="light">
        <section className="relative overflow-hidden bg-primary-lighter pt-[160px] pb-20 lg:pb-[120px]">
          <div className="pointer-events-none absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-yellow/40 blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -left-32 w-[380px] h-[380px] rounded-full bg-green/30 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 w-[320px] h-[320px] rounded-full bg-primary-base/30 blur-3xl" />
          <div className="container-site relative">
            <SectionHeader
              eyebrow="Blog & Articles"
              title="Where to start."
              intro="Op-eds and reflections from African clinicians, researchers, and community advocates on the climate-health frontline."
              className="mb-12"
            />
            {sidePosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <CoverCard post={coverPost} variant={0} />
                </div>
                <div className="md:col-span-2 flex flex-col gap-6">
                  {sidePosts.map((post) => (
                    <CompactCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="md:h-[420px]">
                <CoverCard post={coverPost} variant={0} />
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Recent Posts — magazine index */}
      {recentPosts.length > 0 && (
        <div data-nav-theme="dark">
          <section className="relative overflow-hidden bg-primary-dark py-20 lg:py-[120px]">
            <div className="pointer-events-none absolute top-0 left-1/4 w-[380px] h-[380px] rounded-full bg-primary-base/40 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-yellow/15 blur-3xl" />
            <div className="container-site relative">
              <SectionHeader light eyebrow="Recent Posts" title="Latest from the blog." className="mb-8" />
              <div className="divide-y divide-white/10">
                {recentPosts.map((post, i) => (
                  <ListRow key={post.slug} post={post} variant={i + 1} />
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Coming soon — pieces announced but not yet published */}
      {upcomingPosts.length > 0 && (
        <div data-nav-theme="dark">
          <section className="relative overflow-hidden bg-primary-dark py-20 lg:py-[120px]">
            <div className="pointer-events-none absolute -top-20 right-1/4 w-[420px] h-[420px] rounded-full bg-yellow/15 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 -left-24 w-[380px] h-[380px] rounded-full bg-primary-base/40 blur-3xl" />
            <div className="container-site relative">
              <SectionHeader
                light
                eyebrow="Coming Soon"
                title="On the way."
                intro="A first look at what our contributors are writing next."
                className="mb-12"
              />
              <div className="grid grid-cols-1 gap-6">
                {upcomingPosts.map((post) => (
                  <ComingSoonCard key={post.title} post={post} />
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Submit your writing */}
      <div data-nav-theme="light">
        <section className="bg-bg-soft py-20 lg:py-[120px]">
          <div className="container-site">
            <div className="relative overflow-hidden rounded-3xl bg-white border border-stroke-soft p-9 lg:p-14 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="pointer-events-none absolute -bottom-24 -right-16 w-[320px] h-[320px] rounded-full bg-yellow/30 blur-3xl" />
              <div className="relative max-w-2xl">
                <p className="label-tag mb-4">Writings from African Voices</p>
                <h2 className="font-header font-semibold text-strong text-2xl lg:text-[34px] leading-[1.2] tracking-[-0.01em] mb-4">
                  Climate health, told by the people living it.
                </h2>
                <p className="font-body text-sub text-base leading-[1.75]">
                  Op-eds, essays, poems, and field reflections from African clinicians, researchers, and community
                  advocates. If you have a story to tell, a perspective to share, or research you want amplified,
                  we want to hear from you.
                </p>
              </div>
              <div className="relative">
                <Button href="https://forms.gle/bYggA3xcLdvT5eMK7" variant="yellow">Submit Your Writing</Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div data-nav-theme="dark">
        <Footer />
      </div>
    </main>
  );
}
