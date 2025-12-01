"use client";

import { useState } from "react";

export default function HomePage() {
  const [mode, setMode] = useState("beginner"); // 'beginner' | 'expert'
  const [tier] = useState("FREE"); // placeholder – later: FREE | PLUS | PRO

  return (
    <div className="space-y-6">
      <section className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Get DealReady for real estate investing.
          </h1>
          <p className="text-sm text-textSecondary">
            Choose your mode, run the numbers, and grow from your first deal to
            a full portfolio. Start free, upgrade when you&apos;re ready.
          </p>

          <div className="inline-flex rounded-full bg-slate-900 p-1 text-xs">
            <button
              className={`px-3 py-1 rounded-full ${
                mode === "beginner" ? "bg-teal text-bg" : "text-textSecondary"
              }`}
              onClick={() => setMode("beginner")}
            >
              Beginner Mode
            </button>
            <button
              className={`px-3 py-1 rounded-full ${
                mode === "expert" ? "bg-teal text-bg" : "text-textSecondary"
              }`}
              onClick={() => setMode("expert")}
            >
              Expert Mode
            </button>
          </div>

          <div className="rounded-2xl bg-card border border-slate-800 p-4 text-xs space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold text-teal">Current Plan</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-900 text-[10px]">
                {tier} (limited)
              </span>
            </div>
            <p className="text-textSecondary">
              Free users can analyze basic rental deals and try one training
              scenario per day. Upgrade later to unlock advanced calculators,
              portfolios, AI coaching, and pro tools.
            </p>
            <a
              href="/settings"
              className="inline-flex text-[11px] text-gold hover:underline"
            >
              View Plus / Pro upgrade options →
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-slate-800 p-4 space-y-3">
          <h2 className="text-sm font-semibold flex items-center justify-between">
            Today&apos;s plan
            <span className="text-[10px] text-textSecondary">
              Mode: {mode === "beginner" ? "Beginner" : "Expert"}
            </span>
          </h2>
          {mode === "beginner" ? (
            <ul className="text-xs text-textSecondary space-y-1.5">
              <li>• Watch: &quot;What makes a good rental?&quot; (5 min)</li>
              <li>• Analyze 1 simple rental in the Analyzer.</li>
              <li>• Answer 1 training scenario in Scenarios.</li>
            </ul>
          ) : (
            <ul className="text-xs text-textSecondary space-y-1.5">
              <li>• Run a full cap rate & cash-on-cash check.</li>
              <li>• Stress-test at different rates & vacancies.</li>
              <li>• Log one property in your Portfolio view.</li>
            </ul>
          )}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <a
              href="/analyze"
              className="rounded-xl bg-teal text-bg text-center py-2 font-semibold hover:opacity-90"
            >
              Analyze a deal
            </a>
            <a
              href="/scenarios"
              className="rounded-xl bg-slate-900 border border-slate-700 text-center py-2 hover:border-teal"
            >
              Today&apos;s scenario
            </a>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4 text-xs">
        <div className="rounded-2xl bg-card border border-slate-800 p-4 space-y-1.5">
          <h3 className="font-semibold text-sm">Analyze</h3>
          <p className="text-textSecondary">
            Rental cashflow, cap rate, and cash-on-cash in one place. Plus and
            Pro unlock IRR, DSCR, and full projections.
          </p>
        </div>
        <div className="rounded-2xl bg-card border border-slate-800 p-4 space-y-1.5">
          <h3 className="font-semibold text-sm">Learn</h3>
          <p className="text-textSecondary">
            Beginner-friendly paths and pro-level breakdowns so you understand
            why investors say yes or no to a deal.
          </p>
        </div>
        <div className="rounded-2xl bg-card border border-slate-800 p-4 space-y-1.5">
          <h3 className="font-semibold text-sm">Invest</h3>
          <p className="text-textSecondary">
            Turn analysis into action. Use scenarios, portfolio snapshots, and
            guided steps to move toward your first or next deal.
          </p>
        </div>
      </section>
    </div>
  );
}
