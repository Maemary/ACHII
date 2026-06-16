"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { items, byId, typeStyles, Item, TOPICS, TYPE_FILTERS, ContentType } from "@/app/data/insights";
import InsightModal from "./InsightModal";

function Badge({ type }: { type: ContentType }) {
  return (
    <span className={`inline-block w-fit self-start rounded-full px-3 py-1 font-body font-semibold text-[11px] tracking-wide uppercase ${typeStyles[type]}`}>
      {type}
    </span>
  );
}

function ArchiveCard({ item, onOpen }: { item: Item; onOpen: (i: Item) => void }) {
  return (
    <button onClick={() => onOpen(item)} className="text-left group rounded-2xl overflow-hidden border border-stroke-soft hover:border-primary-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-white flex flex-col">
      <div className="relative h-44 w-full overflow-hidden bg-primary-base">
        {item.image && <Image src={item.image} alt={item.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />}
        <div className="absolute left-4 top-4"><Badge type={item.type} /></div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-header font-semibold text-strong text-base leading-snug mb-2 group-hover:text-primary-base transition-colors">{item.title}</h3>
        <p className="font-body text-sub text-sm leading-[1.6] mb-4 flex-1">{item.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="font-body text-soft text-xs">{item.date}{item.duration ? ` · ${item.duration}` : ""}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-soft group-hover:text-primary-base group-hover:translate-x-1 transition-all"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </div>
      </div>
    </button>
  );
}

export default function InsightsExplorer() {
  const [active, setActive] = useState<Item | null>(null);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<(ContentType | "All Content")>("All Content");
  const [topic, setTopic] = useState<string | null>(null);
  const open = (i: Item) => setActive(i);

  const featured = byId("wb0003-mosquitoes")!;
  const upcoming = items.filter((i) => i.upcoming);
  const pastWebinars = items.filter((i) => (i.type === "Webinar" || i.type === "Recording") && !i.upcoming && i.id !== featured.id);
  const insights = items.filter((i) => ["Insight Brief", "Research Summary", "Report"].includes(i.type));

  const isFiltering = query.trim() !== "" || typeFilter !== "All Content" || topic !== null;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) => {
      const mType = typeFilter === "All Content" || i.type === typeFilter;
      const mTopic = !topic || i.topic === topic;
      const hay = [i.title, i.excerpt, i.summary, i.topic, i.tag, i.speakers.join(" ")].join(" ").toLowerCase();
      const mQuery = !q || hay.includes(q);
      return mType && mTopic && mQuery;
    });
  }, [query, typeFilter, topic]);

  const gcal =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" +
    encodeURIComponent("ACHII Webinar: Minds Under Pressure") +
    "&dates=20260530T180000Z/20260530T193000Z&details=" +
    encodeURIComponent("ACHII climate-mental health webinar. Register at achii.africa") +
    "&location=Google+Meet";

  return (
    <div className="bg-white">
      {/* Search + filters */}
      <div className="container-site pt-14 lg:pt-20">
        <div className="relative max-w-2xl mb-8">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-5 top-1/2 -translate-y-1/2 text-soft"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, topic, speaker, or keyword…"
            className="w-full rounded-full border border-stroke-sub pl-13 pr-5 py-4 font-body text-base outline-none focus:border-primary-base transition-colors"
            style={{ paddingLeft: "3.25rem" }}
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {TYPE_FILTERS.map((t) => (
            <button key={t} onClick={() => setTypeFilter(t)} className={`rounded-full px-4 py-2 font-header font-medium text-sm border transition-colors ${typeFilter === t ? "bg-primary-base text-white border-primary-base" : "border-stroke-sub text-sub hover:border-primary-base hover:text-primary-base"}`}>{t}</button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          <button onClick={() => setTopic(null)} className={`rounded-full px-3.5 py-1.5 font-body text-sm border transition-colors ${topic === null ? "bg-primary-lighter border-primary-base text-primary-base" : "border-stroke-soft text-soft hover:text-primary-base hover:border-primary-base"}`}>All topics</button>
          {TOPICS.map((t) => (
            <button key={t} onClick={() => setTopic(topic === t ? null : t)} className={`rounded-full px-3.5 py-1.5 font-body text-sm border transition-colors ${topic === t ? "bg-primary-lighter border-primary-base text-primary-base" : "border-stroke-soft text-soft hover:text-primary-base hover:border-primary-base"}`}>{t}</button>
          ))}
        </div>
      </div>

      {isFiltering ? (
        /* ---- Search results ---- */
        <div className="container-site py-14">
          <p className="font-body text-sub text-sm mb-6">{results.length} result{results.length === 1 ? "" : "s"}</p>
          {results.length === 0 ? (
            <p className="font-body text-soft text-base py-16 text-center">No matches. Try a different keyword or filter.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((i) => <ArchiveCard key={i.id} item={i} onOpen={open} />)}
            </div>
          )}
        </div>
      ) : (
        <>
          {/* ---- Featured webinar ---- */}
          <div className="container-site py-14 lg:py-20">
            <p className="label-tag mb-6">Featured Webinar</p>
            <button onClick={() => open(featured)} className="w-full text-left group rounded-3xl overflow-hidden border border-stroke-soft hover:border-primary-base hover:shadow-xl transition-all duration-300 grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto lg:min-h-[360px] overflow-hidden bg-primary-base">
                {featured.image && <Image src={featured.image} alt={featured.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />}
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5"><Badge type={featured.type} /><span className="font-body text-sub text-xs">{featured.tag}</span></div>
                <h3 className="font-header font-semibold text-strong text-2xl lg:text-[34px] leading-[1.12] tracking-[-0.01em] mb-4 group-hover:text-primary-base transition-colors">{featured.title}</h3>
                <p className="font-body text-sub text-base leading-[1.7] mb-6">{featured.summary}</p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-soft font-body">
                  <span>{featured.date}</span><span>{featured.duration}</span><span>{featured.speakers.join(", ")}</span>
                </div>
              </div>
            </button>
          </div>

          {/* ---- Upcoming ---- */}
          {upcoming.length > 0 && (
            <div className="bg-primary-lighter py-14 lg:py-20">
              <div className="container-site">
                <p className="label-tag mb-6">Upcoming Webinars</p>
                {upcoming.map((u) => (
                  <div key={u.id} className="bg-white rounded-3xl p-7 lg:p-10 flex flex-col lg:flex-row gap-8 lg:items-center">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3"><Badge type={u.type} /><span className="font-body text-sub text-xs">{u.topic}</span></div>
                      <h3 className="font-header font-semibold text-strong text-xl lg:text-2xl leading-snug mb-3">{u.title}</h3>
                      <div className="flex flex-wrap gap-x-6 gap-y-1 font-body text-sm text-sub mb-2">
                        <span>{u.date}</span><span>{u.duration}</span><span>{u.speakers.join(", ")}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 lg:w-56 flex-shrink-0">
                      <a href={u.watchHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-header font-medium text-sm bg-yellow text-strong hover:bg-[#f5c01f] transition-colors">Register →</a>
                      <a href={gcal} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-header font-medium text-sm border border-strong/20 text-strong hover:bg-strong hover:text-white transition-colors">Add to calendar</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ---- Past webinars ---- */}
          <div className="container-site py-14 lg:py-20">
            <p className="label-tag mb-6">Past Webinars</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastWebinars.map((i) => <ArchiveCard key={i.id} item={i} onOpen={open} />)}
            </div>
          </div>

          {/* ---- Insights & key learnings ---- */}
          <div className="bg-bg-soft py-14 lg:py-20">
            <div className="container-site">
              <p className="label-tag mb-2">Insights & Key Learnings</p>
              <h2 className="font-header font-semibold text-strong text-2xl lg:text-[32px] leading-tight tracking-[-0.01em] mb-10 max-w-2xl">The arguments that outlive the webinar.</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {insights.map((i) => {
                  const rel = i.related.map(byId).find(Boolean);
                  return (
                    <button key={i.id} onClick={() => open(i)} className="text-left group bg-white rounded-2xl p-7 lg:p-8 border border-transparent hover:border-primary-base hover:shadow-lg transition-all duration-300 flex flex-col">
                      <Badge type={i.type} />
                      <h3 className="font-header font-semibold text-strong text-xl lg:text-[22px] leading-snug mt-4 mb-3 group-hover:text-primary-base transition-colors">{i.title}</h3>
                      <p className="font-body text-sub text-sm leading-[1.7] mb-5 flex-1">{i.summary}</p>
                      <div className="flex items-center justify-between">
                        {rel && <span className="font-body text-soft text-xs">Related: {rel.tag}</span>}
                        <span className="font-header font-medium text-sm text-primary-base inline-flex items-center gap-1.5 ml-auto">Read more <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}

      <InsightModal item={active} onClose={() => setActive(null)} onOpen={open} />
    </div>
  );
}
