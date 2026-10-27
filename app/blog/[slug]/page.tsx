import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Button from "@/app/components/Button";
import { blogPosts, getPost, formatPostDate } from "@/app/data/blogPosts";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — ACHII`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

// "Dr Bridget Pemphero Useni" → "BU"
function initials(name: string) {
  const words = name.replace(/^Dr\.?\s+/i, "").split(/\s+/);
  return (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "")).toUpperCase();
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const isPoem = post.category === "Poem";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Africa Climate and Health Innovation Institute" },
    mainEntityOfPage: `https://achii.co/blog/${post.slug}`,
  };

  return (
    <main className="relative">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <div data-nav-theme="dark">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary-base to-green pt-[160px] pb-16 lg:pb-24">
          <div className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-yellow/20 blur-3xl" />
          <div className="container-site relative max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-1.5 font-body text-xs text-white/70 hover:text-white transition-colors mb-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              All articles
            </Link>
            <span className="block w-fit rounded-full px-3 py-1 mb-5 font-body font-semibold text-[10px] tracking-[0.1em] uppercase bg-yellow text-strong">
              {post.category}
            </span>
            <h1 className="font-header font-semibold text-white text-3xl md:text-[44px] leading-[1.12] tracking-[-0.02em] mb-6">
              {post.title}
            </h1>
            <p className="font-body italic text-white/80 text-base md:text-lg leading-[1.7] mb-8 max-w-3xl">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-2 font-body text-sm text-white/70">
              <span className="text-white font-medium">{post.author}</span>
              <span>&middot;</span>
              <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Body */}
      <div data-nav-theme="light">
        <article className="bg-white py-16 lg:py-24">
          <div className="container-site max-w-3xl">
            <div className={isPoem ? "space-y-8" : "space-y-6"}>
              {post.body.map((para, i) => (
                <p
                  key={i}
                  className={`font-body text-strong/85 text-base md:text-[17px] leading-[1.85] ${
                    isPoem ? "whitespace-pre-line" : i === 0 ? "first-letter:font-header first-letter:font-semibold first-letter:text-primary-base first-letter:text-5xl first-letter:float-left first-letter:mr-2 first-letter:leading-[0.9]" : ""
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            {isPoem && (
              <p className="mt-10 font-body italic text-sub text-base">— {post.author}</p>
            )}

            {/* Author bio */}
            {post.authorBio && (
            <aside className="mt-14 rounded-2xl bg-primary-lighter p-7 md:p-8 flex flex-col sm:flex-row gap-5">
              <div className="w-14 h-14 flex-shrink-0 rounded-full bg-primary-base text-white flex items-center justify-center font-header font-semibold text-lg">
                {initials(post.author)}
              </div>
              <div>
                <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-primary-base mb-2">About the author</p>
                <p className="font-header font-semibold text-strong text-lg mb-2">{post.author}</p>
                <p className="font-body text-sub text-sm leading-[1.75]">{post.authorBio}</p>
              </div>
            </aside>
            )}

            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="/blog" variant="outline-dark">More articles</Button>
              <Button href="/get-involved" variant="yellow">Join as an Ally</Button>
            </div>
          </div>
        </article>
      </div>

      <div data-nav-theme="dark">
        <Footer />
      </div>
    </main>
  );
}
