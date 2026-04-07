"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#problem", label: "The Decoupling Problem" },
  { href: "/#solution", label: "Our Solution" },
  { href: "/#capacity", label: "Capacity Protection" },
  { href: "/#partnership", label: "Partnership Model" },
  { href: "/#esg", label: "ESG" },
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
          ? "bg-navy-900/95 backdrop-blur-md border-b border-navy-700/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          aria-label="Porter/Collins home"
          className="flex items-center gap-3"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white p-1 sm:h-11 sm:w-11">
            <Image
              src="/logo.png"
              alt=""
              width={44}
              height={44}
              priority
              className="h-full w-full object-contain"
            />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-wide text-white sm:text-base">
            PORTER<span className="text-accent-500">/</span>COLLINS
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex lg:items-center lg:gap-8"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-[14px] font-medium text-slate-200 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Partner With Us
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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
        } border-t border-navy-700/60 bg-navy-900`}
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
              className="rounded-md px-3 py-3 font-display text-base font-medium text-slate-100 hover:bg-navy-800"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            Partner With Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
