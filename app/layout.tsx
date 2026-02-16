import "./globals.css";
import MobileMenu from "./components/MobileMenu";

export const metadata = {
  title: "August Edward Winter — Missionary Journey (1861–1865)",
  description:
    "A narrative timeline based on Winter’s 1899 account, with family background by Wilhelm Winter.",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/timeline", label: "Timeline" },
  { href: "/sources", label: "Sources" },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="navLink">
      {children}
    </a>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <div className="headerInner">
            <a href="/" className="brand">
              <div className="brandKicker">Missionary Journey</div>
              <div className="brandTitle">August Edward Winter</div>
            </a>

            {/* Desktop nav */}
            <nav className="desktopNav">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/timeline">Timeline</NavLink>
              <NavLink href="/sources">Sources</NavLink>
            </nav>

            {/* Mobile hamburger */}
            <MobileMenu links={links} />
          </div>
        </header>

        <main className="pageWrap">{children}</main>

        <footer className="siteFooter">
          <div className="footerInner">
            Built from Winter’s published account (1899) and family background by Wilhelm Winter.
          </div>
        </footer>

        <style>{`
          .siteHeader{
            position: sticky; top: 0; z-index: 50;
            background: rgba(251,246,234,0.85);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid var(--border);
          }
          .headerInner{
            max-width: 980px; margin: 0 auto;
            padding: 14px 18px;
            display: flex; align-items: center; justify-content: space-between; gap: 12px;
          }
          .brand{ text-decoration: none; line-height: 1.1; }
          .brandKicker{ font-size: 11px; letter-spacing: .25em; text-transform: uppercase; opacity: .7; }
          .brandTitle{ font-size: 18px; font-weight: 700; }

          .desktopNav{ display: flex; gap: 6px; }
          .navLink{
            text-decoration: none;
            padding: 8px 12px;
            border-radius: 999px;
            transition: background .2s ease;
          }
          .navLink:hover{ background: rgba(0,0,0,.05); }

          .pageWrap{ max-width: 980px; margin: 0 auto; padding: 28px 18px; }

          .siteFooter{
            border-top: 1px solid var(--border);
            padding: 24px 0;
          }
          .footerInner{
            max-width: 980px; margin: 0 auto;
            padding: 0 18px;
            font-size: 14px; opacity: .75;
          }

          /* Mobile menu styles */
          .mobileOnly{ display: none; position: relative; }
          .hamburgerBtn{
            width: 44px; height: 44px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: rgba(255,255,255,.35);
            display: grid; place-content: center;
          }
          .bar{ display:block; width: 18px; height: 2px; background: var(--ink); margin: 2px 0; }

          .menuPanel{
            position: absolute; right: 0; top: 52px;
            min-width: 180px;
            border: 1px solid var(--border);
            background: rgba(255,255,255,.92);
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,.08);
          }
          .menuLink{
            display:block;
            padding: 12px 14px;
            text-decoration:none;
            border-top: 1px solid rgba(0,0,0,.06);
          }
          .menuLink:first-child{ border-top: none; }
          .menuLink:hover{ background: rgba(0,0,0,.04); }

          @media (max-width: 640px){
            .desktopNav{ display:none; }
            .mobileOnly{ display:block; }
          }
        `}</style>
      </body>
    </html>
  );
}
