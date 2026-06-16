"use client";
import { useState } from "react";

export default function EmailSignup({
  buttonLabel = "Join as an Ally",
  dark = false,
}: {
  buttonLabel?: string;
  dark?: boolean;
}) {
  const [value, setValue] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className={`font-body text-sm ${dark ? "text-white/80" : "text-sub"}`}>
        Thanks for joining &mdash; check your inbox for your welcome letter, WhatsApp invite, and
        Resource Bank link.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value) setDone(true);
      }}
      className="flex flex-col sm:flex-row gap-3 max-w-md"
    >
      <input
        type="email"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="you@email.com"
        className={`flex-1 rounded-full px-5 py-3.5 font-body text-sm outline-none transition-colors ${
          dark
            ? "bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-white/50"
            : "bg-white text-strong placeholder-soft border border-stroke-sub focus:border-primary-base"
        }`}
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-header font-medium text-sm whitespace-nowrap bg-yellow text-strong hover:bg-[#f5c01f] transition-colors"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
