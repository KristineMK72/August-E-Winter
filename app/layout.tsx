import "./globals.css";

export const metadata = {
  title: "August Edward Winter — Missionary Journey (1861–1865)",
  description: "A narrative timeline based on Winter’s 1899 account, with family background by Wilhelm Winter.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-full px-4 py-2 text-sm hover:bg-black/5 transition"
    >
      {children}
    </a>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fbf6ea] text-[#1f2937]">
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fbf6ea]/80 backdrop-blur">
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
            <a href="/" className="leading-tight">
              <div className="text-xs tracking-[0.25em] uppercase opacity-70">
                Missionary Journey
              </div>
              <div className="text-lg font-semibold">
                August Edward Winter
              </div>
            </a>

            <nav className="flex items-center gap-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/timeline">Timeline</NavLink>
              <NavLink href="/sources">Sources</NavLink>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-black/10">
          <div className="mx-auto max-w-5xl px-6 py-10 text-sm opacity-70">
            Built from Winter’s published account (1899) and family background by Wilhelm Winter.
          </div>
        </footer>
      </body>
    </html>
  );
}
