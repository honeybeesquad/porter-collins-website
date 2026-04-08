import Link from "next/link";
import PCName from "./PCName";

const NAV = [
  { href: "/#problem", label: "01 / Problem" },
  { href: "/#solution", label: "02 / Solution" },
  { href: "/#capacity", label: "03 / Capacity" },
  { href: "/#partnership", label: "04 / Partnership" },
  { href: "/#sustainability", label: "05 / Sustainability" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-navy-600 bg-navy-950">
      <div className="container-px py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Wordmark + tagline */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="Porter/Collins home"
              className="inline-flex items-center gap-3"
            >
              <span
                aria-hidden="true"
                className="font-mono text-[11px] font-medium uppercase tracking-widest text-navy-400"
              >
                [PC]
              </span>
              <span className="font-display text-base font-semibold tracking-wider text-white">
                PORTER
                <span className="text-accent-500">/</span>
                COLLINS
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-400">
              Active Dispatchable flexible compute, co-located behind the
              meter with utility-scale solar and battery storage.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-navy-400">
              <span className="text-slate-400">SYSTEM</span>
              <span className="ml-3">Active Dispatchable / BTM / Co-Located</span>
            </p>
          </div>

          {/* Navigation index */}
          <div className="lg:col-span-4">
            <p className="mono-label-dim">[ INDEX ]</p>
            <ul className="mt-6 space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-[12px] uppercase tracking-widest text-slate-300 transition-colors duration-200 hover:text-accent-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="mono-label-dim">[ CONTACT ]</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contact@portercollins.com"
                  className="font-mono text-[12px] uppercase tracking-wider text-slate-300 transition-colors hover:text-accent-500"
                >
                  contact@portercollins.com
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="btn-secondary text-[11px]">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-navy-600 pt-8 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} <PCName /> · All rights reserved
          </p>
          <p className="font-mono uppercase tracking-widest">
            Behind-the-meter compute · Engineered for grid co-location
          </p>
        </div>
      </div>
    </footer>
  );
}
