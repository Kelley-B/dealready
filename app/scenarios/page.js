"use client";

import { useState } from "react";

const sampleScenario = {
  title: "Starter rental in a B-class neighborhood",
  description:
    "Single-family home listed at $240,000. Expected rent $2,050/month. Taxes $280, insurance $110, other expenses $150. 20% down, 6.5% rate, 30-year fixed.",
  question: "Would you seriously consider this deal?"
};

export default function ScenariosPage() {
  const [answer, setAnswer] = useState(null);

  return (
    <div className="space-y-4 text-xs">
      <h1 className="text-xl font-semibold mb-2">Training Scenarios</h1>
      <p className="text-textSecondary">
        Practice thinking like an investor with quick &quot;Would you buy
        this?&quot; scenarios. In a later version, this can rotate daily and be
        AI-powered.
      </p>

      <div className="rounded-2xl bg-card border border-slate-800 p-4 space-y-3">
        <h2 className="text-sm font-semibold">{sampleScenario.title}</h2>
        <p className="text-textSecondary">{sampleScenario.description}</p>
        <p className="font-semibold">{sampleScenario.question}</p>
        <div className="flex gap-2">
          {["Pass", "Maybe", "Yes"].map((opt) => (
            <button
              key={opt}
              onClick={() => setAnswer(opt)}
              className={`px-3 py-1.5 rounded-xl border text-[11px] ${
                answer === opt
                  ? "bg-teal text-bg border-teal"
                  : "bg-slate-950 border-slate-700 hover:border-teal"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {answer && (
          <div className="mt-3 rounded-xl bg-slate-950 border border-slate-800 p-3">
            <p className="text-[11px] text-textSecondary">
              In a Pro version, DealReady AI would break down this scenario and
              explain whether your choice lines up with typical investor logic
              based on the cap rate, cash-on-cash, and your goals.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
