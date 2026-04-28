"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bg/70 backdrop-blur-xl border-b border-line/60">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 flex items-center justify-between h-18 py-4">
        <Link href="/" className="flex items-center" aria-label="Home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft hover:text-brand transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://direct.chownow.com/order/"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Online
          </Link>
        </nav>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-semibold uppercase tracking-wide text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="https://direct.chownow.com/order/"
              className="btn-primary mt-2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Order Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
