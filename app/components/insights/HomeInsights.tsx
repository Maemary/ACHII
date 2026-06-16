"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { items, byId, typeStyles, Item } from "@/app/data/insights";
import InsightModal from "./InsightModal";

const featured = byId("wb0003-mosquitoes")!;
const supporting = ["insight-food", "research-national", "wb0002-childhood"].map(byId).filter(Boolean) as Item[];

function Badge({ type }: { type: Item["type"] }) {
  return (
    <span className={`inline-block w-fit self-start rounded-full px-3 py-1 font-body font-semibold text-[11px] tracking-wide uppercase ${typeStyles[type]}`}>
      {type}
    </span>
  );
}

export default function HomeInsights() {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <section id="insights" className="bg-white py-20 lg:py-[120px]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="label-tag mb-4">Webinar Insights · What we’ve heard</p>
            <h2 className="font-header font-semibold text-strong text-3xl lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
              A living archive of climate-health conversations.
            </h2>
          </div>
          <Link href="/insights" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-header font-medium text-sm bg-yellow text-strong hover:bg-[#f5c01f] transition-colors whitespace-nowrap self-start md:self-auto">
            Explore the Knowledge Hub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured cover story */}
          <button
            onClick={() => setActive(featured)}
            className="lg:col-span-2 text-left group rounded-3xl overflow-hidden border border-stroke-soft hover:border-primary-base hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
          >
            <div className="relative h-64 sm:h-80 lg:h-[380px] w-full overflow-hidden bg-primary-base">
              {featured.image && (
                <Image src={featured.image} alt={featured.title} fill sizes="(max-width:1024px) 100vw, 66vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/20 to-transparent" />
              <div className="absolute left-7 right-7 bottom-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge type={featured.type} />
                  <span className="font-body text-white/80 text-xs">{featured.tag}</span>
                </div>
                <h3 className="font-header font-semibold text-white text-2xl sm:text-[32px] lg:text-[38px] leading-[1.1] tracking-[-0.01em] max-w-2xl">
                  {featured.title}
                </h3>
              </div>
            </div>
            <div className="p-7 lg:p-8 flex-1 flex flex-col">
              <p className="font-body text-sub text-base leading-[1.7] mb-6 max-w-2xl">{featured.excerpt}</p>
              <ul className="space-y-2.5 mb-7 max-w-2xl">
                {featured.takeaways.slice(0, 3).map((t) => (
                  <li key={t} className="flex gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green flex-shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"/></svg>
                    <span className="font-body text-sub text-sm leading-[1.55]">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-stroke-soft">
                <span className="font-body text-soft text-sm">{featured.date} · {featured.speakers.join(", ")}</span>
                <div className="flex items-center gap-4">
                  <span className="font-header font-medium text-sm text-strong inline-flex items-center gap-1.5">
                    Watch Webinar
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </span>
                  <span className="font-header font-medium text-sm text-primary-base hidden sm:inline">Read Key Insights</span>
                </div>
              </div>
            </div>
          </button>

          {/* Supporting cards */}
          <div className="flex flex-col gap-6">
            {supporting.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s)}
                className="text-left group rounded-2xl border border-stroke-soft hover:border-primary-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 p-6 bg-white flex flex-col flex-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <Badge type={s.type} />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-soft group-hover:text-primary-base transition-colors flex-shrink-0"><path d="M7 17 17 7M9 7h8v8"/></svg>
                </div>
                <h3 className="font-header font-semibold text-strong text-lg leading-snug mb-2 group-hover:text-primary-base transition-colors">{s.title}</h3>
                <p className="font-body text-sub text-sm leading-[1.6] mb-4 flex-1">{s.excerpt}</p>
                <span className="font-body text-soft text-xs">{s.date}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <InsightModal item={active} onClose={() => setActive(null)} onOpen={(i) => setActive(i)} />
    </section>
  );
}
