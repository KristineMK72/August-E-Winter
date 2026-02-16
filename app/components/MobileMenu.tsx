"use client";

import { useState } from "react";

type LinkItem = { href: string; label: string };

export default function MobileMenu({ links }: { links: LinkItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobileOnly">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="hamburgerBtn"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {open && (
        <div className="menuPanel">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="menuLink"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
