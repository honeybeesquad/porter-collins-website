import Image from "next/image";
import Link from "next/link";
import PCName from "./PCName";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link
              href="/"
              aria-label="Porter/Collins home"
              className="inline-flex items-center gap-3"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white p-1">
                <Image
                  src="/logo.png"
                  alt=""
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-display text-base font-semibold tracking-wide text-white">
                PORTER<span className="text-accent-500">/</span>COLLINS
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Active Dispatchable flexible compute, co-located behind the
              meter with utility-scale solar and battery storage.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[12px] font-medium uppercase tracking-eyebrow text-accent-400">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/#problem"
                  className="text-slate-300 hover:text-white"
                >
                  The Decoupling Problem
                </Link>
              </li>
              <li>
                <Link
                  href="/#solution"
                  className="text-slate-300 hover:text-white"
                >
                  Our Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/#capacity"
                  className="text-slate-300 hover:text-white"
                >
                  Capacity Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/#partnership"
                  className="text-slate-300 hover:text-white"
                >
                  Partnership Model
                </Link>
              </li>
              <li>
                <Link
                  href="/#sustainability"
                  className="text-slate-300 hover:text-white"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[12px] font-medium uppercase tracking-eyebrow text-accent-400">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contact@portercollins.com"
                  className="text-slate-300 hover:text-white"
                >
                  contact@portercollins.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-display font-semibold text-accent-400 hover:text-accent-500"
                >
                  Partner With Us →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-navy-700/60 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} <PCName />. All rights reserved.</p>
          <p>
            Behind-the-meter flexible compute · Engineered for utility-scale
            solar &amp; storage worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
