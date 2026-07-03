"use client";

import { useState, useEffect } from "react";

export default function SubscribeForm({
  source,
  buttonLabel,
}: {
  source: "join_movement" | "join_ally" | "newsletter";
  buttonLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "already" | "error">("idle");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const remembered = localStorage.getItem(`achii_subscribed_${source}`);
    if (remembered) setStatus("already");
    setChecked(true);
  }, [source]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source }),
    });

    if (res.ok) {
      localStorage.setItem(`achii_subscribed_${source}`, "true");
      setStatus("done");
    } else if (res.status === 409) {
      localStorage.setItem(`achii_subscribed_${source}`, "true");
      setStatus("already");
    } else {
      setStatus("error");
    }
  }

  if (!checked) return null; // avoid flashing the form before localStorage check runs

  if (status === "done") {
    return (
      <div className="flex items-center gap-2.5 rounded-xl bg-green/10 px-4 py-3.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green flex-shrink-0"><path d="M20 6 9 17l-5-5"/></svg>
        <span className="font-body text-sm text-strong">You're in! Check your inbox.</span>
      </div>
    );
  }

  if (status === "already") {
    return (
      <div className="flex items-center gap-2.5 rounded-xl bg-bg-soft px-4 py-3.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sub flex-shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        <span className="font-body text-sm text-sub">You're all signed up!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="flex-1 rounded-xl px-4 py-3 font-body text-sm text-strong placeholder-soft bg-white border border-stroke-sub focus:border-primary-base outline-none transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-header font-medium text-sm bg-yellow text-strong hover:bg-[#f5c01f] transition-colors disabled:opacity-60 whitespace-nowrap"
      >
        {status === "loading" ? "Submitting..." : buttonLabel ?? "Subscribe"}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
      </button>
      {status === "error" && (
        <span className="font-body text-red-600 text-xs">Something went wrong. Try again.</span>
      )}
    </form>
  );
}