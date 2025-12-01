export default function SettingsPage() {
  return (
    <div className="space-y-4 text-xs">
      <h1 className="text-xl font-semibold mb-2">Plan & Settings</h1>
      <p className="text-textSecondary">
        Start with the free tier. Upgrade to Plus or Pro when you want deeper
        analysis, AI coaching, and portfolio tools.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <PlanCard
          name="Free"
          price="$0"
          highlight={false}
          features={[
            "Basic rental analyzer",
            "1 scenario per day",
            "Beginner lessons preview"
          ]}
        />
        <PlanCard
          name="Plus"
          price="$6.99 / mo"
          highlight={false}
          features={[
            "Full analyzer with cap rate & CoC",
            "Multiple saved deals",
            "All beginner content"
          ]}
        />
        <PlanCard
          name="Pro"
          price="$14.99 / mo"
          highlight={true}
          note="Best value • $99/year option later"
          features={[
            "Everything in Plus",
            "Advanced metrics & projections",
            "Portfolio tools & AI coaching"
          ]}
        />
      </div>

      <p className="text-[11px] text-textSecondary">
        To actually charge users, you&apos;ll later connect Stripe or another
        payment provider in a backend. The UI here is already structured for
        that upgrade.
      </p>
    </div>
  );
}

function PlanCard({ name, price, features, highlight, note }) {
  return (
    <div
      className={`rounded-2xl border p-4 space-y-2 ${
        highlight
          ? "border-gold bg-gradient-to-br from-navy to-slate-900"
          : "border-slate-800 bg-card"
      }`}
    >
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold">{name}</h2>
        <div className="text-[11px] text-gold font-semibold">{price}</div>
      </div>
      {note && <div className="text-[10px] text-gold">{note}</div>}
      <ul className="space-y-1 text-textSecondary">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
    </div>
  );
}
