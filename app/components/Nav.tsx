"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#problem", label: "01 / Problem" },
  { href: "/#solution", label: "02 / Solution" },
  { href: "/#capacity", label: "03 / Capacity" },
  { href: "/#partnership", label: "04 / Partnership" },
  { href: "/#sustainability", label: "05 / Sustainability" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-600/70 bg-navy-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between sm:h-20">
        {/* Wordmark — pure typographic, no image pill */}
        <Link
          href="/"
          aria-label="Porter/Collins home"
          className="group flex items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="font-mono text-[11px] font-medium uppercase tracking-widest text-navy-400"
          >
            [PC]
          </span>
          <span className="font-display text-[15px] font-semibold tracking-wider text-white sm:text-base">
            PORTER
            <span className="text-accent-500">/</span>
            COLLINS
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex lg:items-center lg:gap-9"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] font-medium uppercase tracking-widest text-slate-400 transition-colors duration-200 hover:text-accent-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Partner
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden ${
          open ? "block" : "hidden"
        } border-t border-navy-600/70 bg-navy-950`}
      >
        <nav
          aria-label="Mobile primary"
          className="container-px flex flex-col gap-1 py-6"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-2 py-3 font-mono text-[13px] font-medium uppercase tracking-widest text-slate-300 hover:text-accent-500"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full"
          >
            Partner With Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
