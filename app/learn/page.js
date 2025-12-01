"use client";

export default function LearnPage() {
  return (
    <div className="space-y-4 text-xs">
      <h1 className="text-xl font-semibold mb-2">Learn</h1>
      <p className="text-textSecondary">
        DealReady helps you grow from beginner to confident investor. Start
        simple, then go deeper when you’re ready.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-card border border-slate-800 p-4 space-y-2">
          <h2 className="text-sm font-semibold">Beginner Path</h2>
          <ul className="space-y-1 text-textSecondary">
            <li>• What makes a good rental?</li>
            <li>• Cashflow vs. appreciation</li>
            <li>• Cap rate in plain language</li>
            <li>• Cash-on-cash with examples</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-card border border-slate-800 p-4 space-y-2">
          <h2 className="text-sm font-semibold">Expert Path</h2>
          <ul className="space-y-1 text-textSecondary">
            <li>• Stress-testing rate & vacancy</li>
            <li>• IRR vs. equity multiple</li>
            <li>• BRRRR & refinance scenarios</li>
            <li>• Scaling from 1 unit to 10+</li>
          </ul>
        </div>
      </div>

      <p className="text-[11px] text-textSecondary">
        In a future version, this page can load lessons from a database and use
        AI to explain deals in your own words.
      </p>
    </div>
  );
}
