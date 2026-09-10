"use client";

import { useState } from "react";
import { WhatsappCta } from "./WhatsappCta";

const links = [
  { href: "#formules", label: "Formules" },
  { href: "#coach", label: "Qui je suis" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
      {open ? <path d="M6 6 18 18M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-base/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a href="#" className="text-base font-semibold tracking-wide text-ink-50">
          Mauritius <span className="text-lagoon">Motion</span>
        </a>

        <nav className="hidden gap-8 text-sm text-ink-200 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink-50">{link.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <WhatsappCta label="WhatsApp" message="Bonjour, j'ai une question sur le coaching sportif." variant="whatsapp" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink-50 sm:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-white/10 bg-base px-6 py-4 text-sm text-ink-200 sm:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-white/5 py-3 last:border-0 hover:text-ink-50">
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
