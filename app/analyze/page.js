"use client";

import { useState } from "react";

export default function AnalyzePage() {
  const [price, setPrice] = useState("250000");
  const [rent, setRent] = useState("2200");
  const [taxes, setTaxes] = useState("300");
  const [insurance, setInsurance] = useState("100");
  const [other, setOther] = useState("150");
  const [downPct, setDownPct] = useState("20");
  const [rate, setRate] = useState("6.5");
  const [term, setTerm] = useState("30");

  const [results, setResults] = useState(null);

  const parseNum = (v) => Number((v || "0").replace(/[^0-9.]/g, "")) || 0;

  const analyze = () => {
    const P = parseNum(price);
    const R = parseNum(rent);
    const T = parseNum(taxes);
    const I = parseNum(insurance);
    const O = parseNum(other);
    const dp = parseNum(downPct) / 100;
    const r = parseNum(rate) / 100 / 12;
    const n = parseNum(term) * 12;

    const loanAmount = P * (1 - dp);
    const cashDown = P * dp;

    const monthlyPayment = loanAmount
      ? (loanAmount * r * Math.pow(1 + r, n)) /
        (Math.pow(1 + r, n) - 1)
      : 0;

    const totalExpenses = monthlyPayment + T + I + O;
    const cashflow = R - totalExpenses;
    const annualCashflow = cashflow * 12;
    const coc = cashDown ? (annualCashflow / cashDown) * 100 : 0;
    const noi = (R - (T + I + O)) * 12;
    const cap = P ? (noi / P) * 100 : 0;

    setResults({
      monthlyPayment,
      cashflow,
      cap,
      coc
    });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold mb-2">Deal Analyzer</h1>
      <p className="text-xs text-textSecondary mb-4">
        Enter a simple rental deal and see cashflow, cap rate, and cash-on-cash
        return. This is the core of DealReady. Free tier shows the basics — Plus
        / Pro can later unlock advanced metrics and exports.
      </p>

      <div className="grid md:grid-cols-2 gap-4 text-xs">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Purchase price"
              value={price}
              onChange={setPrice}
              prefix="$"
            />
            <Field
              label="Monthly rent"
              value={rent}
              onChange={setRent}
              prefix="$"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Taxes (per month)"
              value={taxes}
              onChange={setTaxes}
              prefix="$"
            />
            <Field
              label="Insurance (per month)"
              value={insurance}
              onChange={setInsurance}
              prefix="$"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Other expenses (per month)"
              value={other}
              onChange={setOther}
              prefix="$"
            />
            <Field
              label="Down payment %"
              value={downPct}
              onChange={setDownPct}
              suffix="%"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Interest rate %"
              value={rate}
              onChange={setRate}
              suffix="%"
            />
            <Field
              label="Loan term (years)"
              value={term}
              onChange={setTerm}
            />
          </div>

          <button
            onClick={analyze}
            className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-teal text-bg text-xs font-semibold hover:opacity-90"
          >
            Run analysis
          </button>
        </div>

        <div className="rounded-2xl bg-card border border-slate-800 p-4 space-y-3">
          <h2 className="text-sm font-semibold">Results</h2>
          {!results ? (
            <p className="text-xs text-textSecondary">
              Fill in the numbers and tap <span className="font-semibold">Run analysis</span>.
            </p>
          ) : (
            <div className="space-y-2 text-xs">
              <ResultRow
                label="Monthly payment"
                value={`$${results.monthlyPayment.toFixed(0)}`}
              />
              <ResultRow
                label="Monthly cashflow"
                value={`$${results.cashflow.toFixed(0)}`}
                highlight={
                  results.cashflow > 0
                    ? "text-emerald-400"
                    : "text-rose-400"
                }
              />
              <ResultRow
                label="Cap rate"
                value={`${results.cap.toFixed(1)}%`}
              />
              <ResultRow
                label="Cash-on-cash return"
                value={`${results.coc.toFixed(1)}%`}
              />
              <p className="text-[11px] text-textSecondary pt-2 border-t border-slate-800 mt-2">
                In Plus / Pro, you&apos;ll later unlock IRR, DSCR, multi-year
                projections, save &amp; export, and AI coaching on whether this
                deal fits your goals.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, prefix, suffix }) {
  return (
    <label className="space-y-1">
      <span className="block text-[11px] text-textSecondary">{label}</span>
      <div className="flex items-center rounded-xl bg-slate-950 border border-slate-800 px-2 py-1.5">
        {prefix && (
          <span className="text-[11px] text-slate-500 mr-1">{prefix}</span>
        )}
        <input
          className="bg-transparent flex-1 outline-none text-xs"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {suffix && (
          <span className="text-[11px] text-slate-500 ml-1">{suffix}</span>
        )}
      </div>
    </label>
  );
}

function ResultRow({ label, value, highlight }) {
  return (
    <div className="flex justify-between">
      <span className="text-textSecondary">{label}</span>
      <span className={highlight || "text-textPrimary font-semibold"}>
        {value}
      </span>
    </div>
  );
}
