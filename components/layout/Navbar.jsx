"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-board/95 backdrop-blur border-b border-board-line">
      <div className="container-inquivesta flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="relative h-8 w-8 rounded-full border border-marigold/70">
            <span className="absolute inset-1.5 rounded-full bg-marigold group-hover:bg-ember transition-colors" />
          </span>
          <span className="font-display text-xl text-paper">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm text-paper/75 hover:text-marigold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/register" variant="primary">
            Register
          </Button>
        </div>

        <button
          className="md:hidden text-paper"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-board-line bg-board">
          <div className="container-inquivesta flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-body text-paper/85 hover:text-marigold transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <Button href="/register" variant="primary" className="w-full">
                Register
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
