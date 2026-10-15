// Blog page temporarily disabled until articles are published.
// To restore: delete the stub below and uncomment everything after it.
import { notFound } from "next/navigation";

export default function BlogPage() {
  notFound();
}

// ---- Original blog page (commented out) ----
// import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";
// import SectionHeader from "@/app/components/SectionHeader";
// import { blogPosts, type BlogPost } from "@/app/data/blogPosts";
// 
// export const metadata = {
//   title: "Blog & Articles — ACHII",
//   description:
//     "Stories, essays, and field notes from African clinicians, researchers, and community advocates on the climate-health frontline.",
//   alternates: { canonical: "/blog" },
// };
// 
// const highlights = blogPosts.filter((p) => p.featured);
// const recentPosts = blogPosts.filter((p) => !p.featured);
// 
// const categoryStyles: Record<string, string> = {
//   "Field Notes": "bg-primary-dark text-white",
//   Opinion: "bg-yellow text-strong",
//   Advocacy: "bg-green text-white",
//   "Climate & Health": "bg-primary-base text-white",
//   Research: "bg-primary-light text-strong",
//   Community: "bg-[#f5c01f] text-strong",
//   "Policy & Advocacy": "bg-green/80 text-white",
//   "Disease Surveillance": "bg-primary-base/80 text-white",
// };
// 
// // Solid brand color per category — used for list thumbnails and bento accents.
// const categorySolid: Record<string, { bg: string; text: string }> = {
//   "Field Notes": { bg: "bg-primary-dark", text: "text-white" },
//   Opinion: { bg: "bg-yellow", text: "text-strong" },
//   Advocacy: { bg: "bg-green", text: "text-white" },
//   "Climate & Health": { bg: "bg-primary-base", text: "text-white" },
//   Research: { bg: "bg-primary-light", text: "text-strong" },
//   Community: { bg: "bg-[#f5c01f]", text: "text-strong" },
//   "Policy & Advocacy": { bg: "bg-green/80", text: "text-white" },
//   "Disease Surveillance": { bg: "bg-primary-base/80", text: "text-white" },
// };
// 
// const coverGradients = [
//   "from-primary-dark via-primary-base to-green",
//   "from-green via-primary-dark to-primary-base",
//   "from-yellow via-[#f5c01f] to-primary-dark",
// ];
// 
// function DocIcon({ className }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
//       <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//       <path d="M14 2v6h6" />
//       <path d="M9 13h6M9 17h6M9 9h1" />
//     </svg>
//   );
// }
// 
// function QuoteIcon({ className }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
//       <path d="M9.5 8C7 8 5 10 5 12.5S7 17 9.5 17c.3 0 .6 0 .9-.1-.6 1.6-2 2.9-3.9 3.4l.6 1.6c3.4-.9 5.9-3.8 5.9-7.9V12c0-2.2-1.8-4-4-4zm9 0c-2.5 0-4.5 2-4.5 4.5S16 17 18.5 17c.3 0 .6 0 .9-.1-.6 1.6-2 2.9-3.9 3.4l.6 1.6c3.4-.9 5.9-3.8 5.9-7.9V12c0-2.2-1.8-4-4-4z" />
//     </svg>
//   );
// }
// 
// function MegaphoneIcon({ className }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
//       <path d="M3 11v2a1 1 0 0 0 1 1h1l4 4V6l-4 4H4a1 1 0 0 0-1 1z" />
//       <path d="M14 8a4 4 0 0 1 0 8" />
//       <path d="M17.5 5.5a8 8 0 0 1 0 13" />
//     </svg>
//   );
// }
// 
// function LeafIcon({ className }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
//       <path d="M11 20A7 7 0 0 1 4 13V4h9a7 7 0 0 1 7 7v0a9 9 0 0 1-9 9z" />
//       <path d="M4 13c8 0 11-6 11-9" />
//     </svg>
//   );
// }
// 
// const icons = [DocIcon, QuoteIcon, MegaphoneIcon, LeafIcon];
// 
// function ArrowIcon({ className = "" }: { className?: string }) {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//       <path d="M7 17 17 7M9 7h8v8" />
//     </svg>
//   );
// }
// 
// function ComingSoonBadge({ dark = false }: { dark?: boolean }) {
//   return (
//     <span
//       className={`absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-body font-semibold text-[10px] tracking-[0.1em] uppercase shadow-sm ${
//         dark ? "bg-white/15 text-white backdrop-blur" : "bg-white/95 text-strong"
//       }`}
//     >
//       <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
//       Coming Soon
//     </span>
//   );
// }
// 
// /** Large full-bleed "cover" card — the bento grid's anchor tile. */
// function CoverCard({ post, variant }: { post: BlogPost; variant: number }) {
//   const Icon = icons[variant % icons.length];
//   return (
//     <article className={`group relative h-full min-h-[320px] rounded-3xl overflow-hidden bg-gradient-to-br ${coverGradients[variant % coverGradients.length]} flex flex-col justify-end p-8 lg:p-10`}>
//       <Icon className="absolute -top-6 -right-6 w-48 h-48 text-white/10 rotate-12" />
//       <ComingSoonBadge dark />
//       <span className={`absolute top-5 left-5 inline-flex items-center rounded-full px-3 py-1 font-body font-semibold text-[10px] tracking-[0.1em] uppercase ${categoryStyles[post.category] ?? "bg-white text-strong"}`}>
//         {post.category}
//       </span>
//       <div className="relative">
//         <h3 className="font-header font-semibold text-white text-2xl lg:text-[32px] leading-[1.15] mb-4 max-w-lg group-hover:text-yellow transition-colors">
//           {post.title}
//         </h3>
//         <p className="font-body text-white/75 text-sm leading-[1.7] mb-6 max-w-md">{post.excerpt}</p>
//         <div className="flex items-center justify-between border-t border-white/20 pt-4">
//           <div className="flex items-center gap-2 font-body text-xs text-white/60">
//             <span>{post.author}</span>
//             <span>&middot;</span>
//             <span>{post.readTime}</span>
//           </div>
//           <span className="inline-flex items-center gap-1 font-header font-medium text-xs text-yellow">
//             Read more <ArrowIcon />
//           </span>
//         </div>
//       </div>
//     </article>
//   );
// }
// 
// /** Compact bento tile — sits beside the cover card. */
// function CompactCard({ post }: { post: BlogPost }) {
//   const solid = categorySolid[post.category] ?? { bg: "bg-primary-lighter", text: "text-primary-base" };
//   return (
//     <article className="group relative bg-white rounded-2xl border border-stroke-soft hover:border-primary-light hover:shadow-lg transition-all duration-300 p-6 flex-1 flex flex-col">
//       <div className={`w-9 h-9 rounded-lg ${solid.bg} ${solid.text} flex items-center justify-center mb-4 font-header font-semibold text-sm`}>
//         {post.category.charAt(0)}
//       </div>
//       <span className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 font-body font-semibold text-[10px] tracking-[0.1em] uppercase mb-3 ${categoryStyles[post.category] ?? "bg-primary-lighter text-primary-base"}`}>
//         {post.category}
//       </span>
//       <h3 className="font-header font-semibold text-strong text-base leading-[1.35] mb-2 group-hover:text-primary-base transition-colors line-clamp-2">
//         {post.title}
//       </h3>
//       <p className="font-body text-sub text-xs leading-[1.6] mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
//       <div className="flex items-center gap-2 font-body text-[11px] text-soft">
//         <span>{post.author}</span>
//         <span>&middot;</span>
//         <span>{post.readTime}</span>
//         <span className="ml-auto rounded-full bg-yellow/20 text-strong px-2 py-0.5 font-semibold text-[9px] tracking-[0.08em] uppercase">Soon</span>
//       </div>
//     </article>
//   );
// }
// 
// /** Horizontal list row — used for the Recent Posts index. */
// function ListRow({ post, variant }: { post: BlogPost; variant: number }) {
//   const solid = categorySolid[post.category] ?? { bg: "bg-primary-lighter", text: "text-primary-base" };
//   const Icon = icons[variant % icons.length];
//   return (
//     <article className="group grid grid-cols-[auto_1fr] sm:grid-cols-[96px_1fr_auto] gap-x-5 gap-y-3 items-center py-6 border-b border-white/10 hover:bg-white/[0.04] transition-colors px-2 -mx-2 rounded-xl">
//       <div className={`w-16 h-16 sm:w-24 sm:h-24 rounded-2xl ${solid.bg} ${solid.text} flex items-center justify-center flex-shrink-0`}>
//         <Icon className="w-7 h-7 sm:w-9 sm:h-9 opacity-70" />
//       </div>
// 
//       <div className="min-w-0">
//         <div className="flex items-center gap-3 mb-1.5">
//           <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-body font-semibold text-[10px] tracking-[0.1em] uppercase ${categoryStyles[post.category] ?? "bg-primary-lighter text-primary-base"}`}>
//             {post.category}
//           </span>
//           <span className="font-body text-[11px] text-white/40 uppercase tracking-[0.08em]">Coming Soon</span>
//         </div>
//         <h3 className="font-header font-semibold text-white text-lg leading-[1.3] mb-1.5 group-hover:text-yellow transition-colors">
//           {post.title}
//         </h3>
//         <p className="font-body text-white/60 text-sm leading-[1.6] line-clamp-1 sm:line-clamp-2 max-w-2xl">{post.excerpt}</p>
//       </div>
// 
//       <div className="col-span-2 sm:col-span-1 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 sm:text-right">
//         <span className="font-body text-xs text-white/50">{post.author}</span>
//         <span className="font-body text-xs text-white/50">{post.readTime}</span>
//       </div>
//     </article>
//   );
// }
// 
// export default function BlogPage() {
//   return (
//     <main className="relative">
//       <Navbar />
// 
//       {/* Highlights — bento grid */}
//       <div data-nav-theme="light">
//         <section className="relative overflow-hidden bg-primary-lighter pt-[160px] pb-20 lg:pb-[120px]">
//           <div className="pointer-events-none absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-yellow/40 blur-3xl" />
//           <div className="pointer-events-none absolute top-1/3 -left-32 w-[380px] h-[380px] rounded-full bg-green/30 blur-3xl" />
//           <div className="pointer-events-none absolute bottom-0 right-1/4 w-[320px] h-[320px] rounded-full bg-primary-base/30 blur-3xl" />
//           <div className="container-site relative">
//             <SectionHeader
//               eyebrow="Blog & Articles"
//               title="Where to start."
//               intro="Op-eds and reflections from African clinicians, researchers, and community advocates. This page is a work in progress — the posts below are placeholders."
//               className="mb-12"
//             />
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:h-[460px]">
//               <div className="md:col-span-3 md:h-full">
//                 <CoverCard post={highlights[0]} variant={0} />
//               </div>
//               <div className="md:col-span-2 md:h-full flex flex-col gap-6">
//                 {highlights.slice(1).map((post) => (
//                   <CompactCard key={post.id} post={post} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
// 
//       {/* Recent Posts — magazine index */}
//       <div data-nav-theme="dark">
//         <section className="relative overflow-hidden bg-primary-dark py-20 lg:py-[120px]">
//           <div className="pointer-events-none absolute top-0 left-1/4 w-[380px] h-[380px] rounded-full bg-primary-base/40 blur-3xl" />
//           <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-yellow/15 blur-3xl" />
//           <div className="container-site relative">
//             <SectionHeader light eyebrow="Recent Posts" title="Latest from the blog." className="mb-8" />
//             <div className="divide-y divide-white/10">
//               {recentPosts.map((post, i) => (
//                 <ListRow key={post.id} post={post} variant={i} />
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
// 
//       <div data-nav-theme="dark">
//         <Footer />
//       </div>
//     </main>
//   );
// }
