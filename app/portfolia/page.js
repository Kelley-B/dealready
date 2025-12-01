export default function PortfolioPage() {
  return (
    <div className="space-y-3 text-xs">
      <h1 className="text-xl font-semibold mb-2">Portfolio (coming soon)</h1>
      <p className="text-textSecondary">
        This is where you&apos;ll track your real properties: units, equity,
        cashflow, and returns. For now, use this page as a simple vision of
        where DealReady Pro can grow.
      </p>
      <div className="rounded-2xl bg-card border border-slate-800 p-4">
        <p className="text-textSecondary">
          Later you can plug in Supabase and Stripe here to store real
          portfolios and gate advanced features behind Plus / Pro.
        </p>
      </div>
    </div>
  );
}
