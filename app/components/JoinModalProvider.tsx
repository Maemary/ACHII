"use client";
import { createContext, useContext, useEffect, useState } from "react";

type JoinCtx = { open: () => void; close: () => void };
const Ctx = createContext<JoinCtx>({ open: () => {}, close: () => {} });
export const useJoinModal = () => useContext(Ctx);

const perks = [
  "ACHII Allies WhatsApp community — real-time conversation with fellow Allies.",
  "Full access to the Resource Bank — recordings, reports, toolkits, infographics.",
  "Monthly newsletter — honest updates on what we’re building.",
  "Early access to webinars, events, and the Fellowship Programme.",
];

export default function JoinModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const open = () => {
    setDone(false);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-primary-dark/70 backdrop-blur-sm" onClick={close} />

          <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 max-h-[90vh]">
            {/* Left: invitation */}
            <div className="hidden md:flex flex-col bg-primary-dark p-9 text-white">
              <p className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-yellow mb-4">
                Join the Movement
              </p>
              <h3 className="font-header font-semibold text-2xl leading-tight mb-3">This is your invitation.</h3>
              <p className="font-body text-white/70 text-sm leading-[1.7] mb-6">
                ACHII Allies is a community of people who believe Africa&apos;s climate-health future is
                something we build — not something that happens to us.
              </p>
              <ul className="space-y-3 mt-auto">
                {perks.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow flex-shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"/></svg>
                    <span className="font-body text-white/80 text-[13px] leading-[1.5]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: form / success */}
            <div className="p-8 sm:p-9 overflow-y-auto">
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-sub hover:bg-bg-soft transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>

              {done ? (
                <div className="flex flex-col items-start justify-center h-full min-h-[280px]">
                  <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <h3 className="font-header font-semibold text-strong text-2xl mb-3">
                    Welcome to ACHII Allies{name ? `, ${name.split(" ")[0]}` : ""}.
                  </h3>
                  <p className="font-body text-sub text-sm leading-[1.7] mb-6">
                    Check your inbox for your welcome letter — it includes your WhatsApp community
                    invite and a link to the full Resource Bank. We&apos;re glad you&apos;re here.
                  </p>
                  <button
                    onClick={close}
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 font-header font-medium text-sm bg-strong text-white hover:bg-strong/90 transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <p className="md:hidden font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-primary-base mb-3">
                    Join the Movement
                  </p>
                  <h3 className="font-header font-semibold text-strong text-2xl mb-2">Join in 30 seconds.</h3>
                  <p className="font-body text-sub text-sm leading-[1.6] mb-7">
                    Email only is all we need. The rest is optional and helps us tailor what we send you.
                  </p>
                  <form
                    onSubmit={(ev) => {
                      ev.preventDefault();
                      if (email) setDone(true);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block font-body text-xs text-sub mb-1.5">Email address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                        placeholder="you@email.com"
                        className="w-full rounded-xl px-4 py-3 font-body text-sm text-strong placeholder-soft bg-white border border-stroke-sub focus:border-primary-base outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs text-sub mb-1.5">Name (optional)</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-xl px-4 py-3 font-body text-sm text-strong placeholder-soft bg-white border border-stroke-sub focus:border-primary-base outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs text-sub mb-1.5">I am a&hellip; (optional)</label>
                      <select
                        value={role}
                        onChange={(ev) => setRole(ev.target.value)}
                        className="w-full rounded-xl px-4 py-3 font-body text-sm text-strong bg-white border border-stroke-sub focus:border-primary-base outline-none transition-colors"
                      >
                        <option value="">Select one</option>
                        <option>Healthcare professional</option>
                        <option>Student</option>
                        <option>Researcher</option>
                        <option>Advocate / Community member</option>
                        <option>Partner / Funder</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-header font-medium text-sm bg-yellow text-strong hover:bg-[#f5c01f] transition-colors"
                    >
                      Join the Movement
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
                    </button>
                    <p className="font-body text-soft text-xs text-center">
                      No spam. Nothing financial. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
