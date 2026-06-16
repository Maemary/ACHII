"use client";
import { useState } from "react";
import { useJoinModal } from "./JoinModalProvider";

const presets = [5000, 10000, 25000, 50000];
const impact: Record<number, string> = {
  5000: "can help print climate-health learning materials for a classroom.",
  10000: "can help provide climate-health learning resources to emerging researchers.",
  25000: "can support community outreach activities in one region.",
  50000: "can help fund a school outreach session reaching ~70 students.",
};
const methods = ["Card", "Bank Transfer", "Flutterwave", "Paystack", "International"];

const naira = (n: number) => "₦" + n.toLocaleString();

export default function DonateWidget({ initialFreq = "once" }: { initialFreq?: "once" | "monthly" }) {
  const [freq, setFreq] = useState<"once" | "monthly">(initialFreq);
  const [amount, setAmount] = useState<number | null>(10000);
  const [custom, setCustom] = useState("");
  const [method, setMethod] = useState("Card");
  const [done, setDone] = useState(false);
  const { open } = useJoinModal();

  const effective = custom ? parseInt(custom.replace(/[^0-9]/g, "")) || 0 : amount || 0;
  const impactLine =
    !custom && amount && impact[amount]
      ? `${naira(amount)} ${impact[amount]}`
      : effective > 0
        ? `${naira(effective)} goes directly to research, training, and community programmes.`
        : "Choose an amount to see the impact of your gift.";

  if (done) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm text-center">
        <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <h3 className="font-header font-semibold text-strong text-3xl mb-3">Thank you.</h3>
        <p className="font-body text-sub text-base leading-[1.7] max-w-md mx-auto mb-8">
          You are helping build Africa&apos;s climate-health future. A receipt and welcome note are on
          their way to your inbox.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
          <button onClick={open} className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-header font-medium text-sm bg-yellow text-strong hover:bg-[#f5c01f] transition-colors">
            Join ACHII Allies
          </button>
          <button
            onClick={() => {
              if (navigator.share) navigator.share({ title: "ACHII", url: window.location.origin });
              else navigator.clipboard?.writeText(window.location.origin);
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-header font-medium text-sm border border-strong/25 text-strong hover:bg-strong hover:text-white transition-colors"
          >
            Share ACHII
          </button>
          <a href="/reports" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-header font-medium text-sm border border-strong/25 text-strong hover:bg-strong hover:text-white transition-colors">
            Download Impact Report
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-header font-medium text-sm border border-strong/25 text-strong hover:bg-strong hover:text-white transition-colors">
            Follow on Social
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm">
      {/* Frequency */}
      <div className="flex p-1 bg-bg-soft rounded-full mb-7">
        {(["once", "monthly"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFreq(f)}
            className={`flex-1 rounded-full py-2.5 font-header font-medium text-sm transition-colors ${
              freq === f ? "bg-primary-base text-white" : "text-sub hover:text-strong"
            }`}
          >
            {f === "once" ? "One-time" : "Monthly"}
          </button>
        ))}
      </div>

      {/* Amounts */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {presets.map((p) => {
          const active = !custom && amount === p;
          return (
            <button
              key={p}
              onClick={() => { setAmount(p); setCustom(""); }}
              className={`rounded-xl py-4 font-header font-semibold text-lg border transition-colors ${
                active ? "border-primary-base bg-primary-lighter text-primary-base" : "border-stroke-sub text-strong hover:border-primary-base"
              }`}
            >
              {naira(p)}
            </button>
          );
        })}
      </div>
      <input
        type="text"
        inputMode="numeric"
        value={custom}
        onChange={(ev) => { setCustom(ev.target.value); setAmount(null); }}
        placeholder="Custom amount (₦)"
        className={`w-full rounded-xl px-4 py-3.5 font-body text-sm mb-5 border outline-none transition-colors ${
          custom ? "border-primary-base bg-primary-lighter" : "border-stroke-sub focus:border-primary-base"
        }`}
      />

      {/* Impact line */}
      <div className="bg-primary-lighter rounded-xl px-4 py-3 mb-6">
        <p className="font-body text-sm text-primary-dark leading-snug">{impactLine}</p>
      </div>

      {/* Payment methods */}
      <p className="font-body font-semibold text-xs text-sub uppercase tracking-wide mb-3">Payment method</p>
      <div className="flex flex-wrap gap-2 mb-7">
        {methods.map((m) => (
          <button
            key={m}
            onClick={() => setMethod(m)}
            className={`rounded-full px-4 py-2 font-body text-sm border transition-colors ${
              method === m ? "border-primary-base bg-primary-lighter text-primary-base" : "border-stroke-sub text-sub hover:border-primary-base"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <button
        onClick={() => effective > 0 && setDone(true)}
        disabled={effective <= 0}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-header font-medium text-sm bg-yellow text-strong hover:bg-[#f5c01f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {freq === "once" ? `Donate ${naira(effective)}` : `Give ${naira(effective)} every month`}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
      </button>
      <p className="font-body text-soft text-xs text-center mt-3">
        Secure payment processing is being finalised — this preview shows the full donation flow.
      </p>
    </div>
  );
}
