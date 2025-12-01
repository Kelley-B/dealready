export const metadata = {
  title: "DealReady",
  description: "Analyze. Learn. Invest."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A0F2C" />
      </head>
      <body className="bg-bg text-textPrimary">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-slate-800 bg-navy/90 backdrop-blur">
            <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal to-gold flex items-center justify-center">
                  <span className="text-xs font-bold text-navy">DR</span>
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    DealReady
                  </div>
                  <div className="text-[10px] sm:text-xs text-textSecondary">
                    Analyze. Learn. Invest.
                  </div>
                </div>
              </div>
              <nav className="flex gap-3 text-xs sm:text-sm">
                <a href="/" className="hover:text-teal">
                  Home
                </a>
                <a href="/analyze" className="hover:text-teal">
                  Analyze
                </a>
                <a href="/learn" className="hover:text-teal">
                  Learn
                </a>
                <a href="/scenarios" className="hover:text-teal">
                  Scenarios
                </a>
                <a href="/portfolio" className="hover:text-teal">
                  Portfolio
                </a>
                <a href="/settings" className="hover:text-teal">
                  Settings
                </a>
              </nav>
            </div>
          </header>
          <main className="flex-1 max-w-5xl mx-auto px-4 py-6">
            {children}
          </main>
          <footer className="border-t border-slate-800 text-xs text-textSecondary py-3 text-center">
            DealReady • Built for beginners & pros • Install to your home screen
            for a full app experience.
          </footer>
        </div>
      </body>
    </html>
  );
}
