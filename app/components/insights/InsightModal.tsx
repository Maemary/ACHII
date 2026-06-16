"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Item, typeStyles, byId } from "@/app/data/insights";

function Badge({ type }: { type: Item["type"] }) {
  return (
    <span className={`inline-block w-fit self-start rounded-full px-3 py-1 font-body font-semibold text-[11px] tracking-wide uppercase ${typeStyles[type]}`}>
      {type}
    </span>
  );
}

export default function InsightModal({
  item,
  onClose,
  onOpen,
}: {
  item: Item | null;
  onClose: () => void;
  onOpen: (i: Item) => void;
}) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    try {
      const s = JSON.parse(localStorage.getItem("achii-saved") || "[]");
      setSaved(s.includes(item.id));
    } catch {}
    setCopied(false);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  const url = typeof window !== "undefined" ? `${window.location.origin}/insights#${item.id}` : "";
  const shareText = encodeURIComponent(item.title);

  const toggleSave = () => {
    try {
      const s: string[] = JSON.parse(localStorage.getItem("achii-saved") || "[]");
      const next = s.includes(item.id) ? s.filter((x) => x !== item.id) : [...s, item.id];
      localStorage.setItem("achii-saved", JSON.stringify(next));
      setSaved(next.includes(item.id));
    } catch {}
  };
  const copyLink = () => {
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const related = item.related.map(byId).filter(Boolean) as Item[];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-primary-dark/70 backdrop-blur-sm" onClick={onClose} />

      {/* Fixed, centered frame \u2014 only the inner content scrolls */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white shadow-lg hover:bg-bg-soft flex items-center justify-center text-strong transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>

        <div className="flex-1 min-h-0 overflow-y-auto">
          {/* Banner (scrolls with content) */}
          <div className="relative h-[270px] sm:h-[345px] w-full bg-primary-base">
            {item.image && <Image src={item.image} alt={item.title} fill sizes="(max-width:896px) 100vw, 896px" className="object-cover" />}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/15 to-transparent" />
            <div className="absolute left-6 sm:left-9 bottom-6 right-6">
              <div className="flex items-center gap-3 mb-3">
                <Badge type={item.type} />
                {item.tag && <span className="font-body text-white/85 text-xs">{item.tag}</span>}
              </div>
              <h2 className="font-header font-semibold text-white text-2xl sm:text-[30px] leading-[1.12] tracking-[-0.01em] max-w-2xl">{item.title}</h2>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-9">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mb-6 font-body text-sm text-sub">
              <span>{item.date}</span>
              {item.duration && <span>{item.duration}</span>}
              <span>{item.speakers.join(", ")}</span>
            </div>

            <p className="font-body text-sub text-base leading-[1.75] mb-8">{item.summary}</p>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-header font-semibold text-strong text-sm uppercase tracking-wide mb-4">Key takeaways</h3>
                <ul className="space-y-3">
                  {item.takeaways.map((t) => (
                    <li key={t} className="flex gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green flex-shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"/></svg>
                      <span className="font-body text-sub text-sm leading-[1.6]">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-header font-semibold text-strong text-sm uppercase tracking-wide mb-4">Major discussion points</h3>
                <ul className="space-y-3">
                  {item.discussion.map((d, i) => (
                    <li key={d} className="flex gap-3 font-body text-sub text-sm leading-[1.6]">
                      <span className="font-header font-semibold text-primary-base">{String(i + 1).padStart(2, "0")}</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {item.watchHref && (
                <a href={item.watchHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-header font-medium text-sm bg-yellow text-strong hover:bg-[#f5c01f] transition-colors">
                  {item.upcoming ? "Register to Watch" : "Watch Recording"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
                </a>
              )}
              {item.reportHref && (
                <a href={item.reportHref} className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-header font-medium text-sm border border-strong/25 text-strong hover:bg-strong hover:text-white transition-colors">
                  Read Report
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
                </a>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-stroke-soft">
              <span className="font-body text-xs text-soft uppercase tracking-wide mr-1">Share</span>
              <a href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="rounded-full border border-stroke-sub px-3.5 py-1.5 font-body text-xs text-sub hover:border-primary-base hover:text-primary-base transition-colors">WhatsApp</a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="rounded-full border border-stroke-sub px-3.5 py-1.5 font-body text-xs text-sub hover:border-primary-base hover:text-primary-base transition-colors">LinkedIn</a>
              <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="rounded-full border border-stroke-sub px-3.5 py-1.5 font-body text-xs text-sub hover:border-primary-base hover:text-primary-base transition-colors">X</a>
              <button onClick={copyLink} className="rounded-full border border-stroke-sub px-3.5 py-1.5 font-body text-xs text-sub hover:border-primary-base hover:text-primary-base transition-colors">{copied ? "Copied!" : "Copy link"}</button>
              <button onClick={toggleSave} className={`rounded-full border px-3.5 py-1.5 font-body text-xs transition-colors ml-auto ${saved ? "border-primary-base bg-primary-lighter text-primary-base" : "border-stroke-sub text-sub hover:border-primary-base hover:text-primary-base"}`}>
                {saved ? "Saved" : "Save for later"}
              </button>
            </div>

            {related.length > 0 && (
              <div className="mt-8 pt-6 border-t border-stroke-soft">
                <h3 className="font-header font-semibold text-strong text-sm uppercase tracking-wide mb-4">Related content</h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {related.map((r) => (
                    <button key={r.id} onClick={() => onOpen(r)} className="text-left rounded-xl border border-stroke-soft p-4 hover:border-primary-base transition-colors group">
                      <Badge type={r.type} />
                      <p className="font-header font-medium text-strong text-sm leading-snug mt-2 group-hover:text-primary-base transition-colors">{r.title}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
