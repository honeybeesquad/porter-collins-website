import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-navy-900 pt-32 sm:pt-36 lg:pt-44"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      {/* Accent radial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent-500/10 blur-3xl"
      />

      <div className="container-px relative">
        <p className="eyebrow-on-dark">
          Behind-the-Meter Flexible Compute for Utility-Scale Renewables
        </p>
        <h1
          id="hero-title"
          className="mt-5 max-w-4xl font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[64px]"
        >
          Monetizing Stranded Power.
          <br className="hidden sm:block" />
          <span className="text-white">Stabilizing the </span>
          <span className="relative inline-block">
            <span className="relative z-10 text-white">Grid.</span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent-500/50"
            />
          </span>
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          Porter/Collins builds Active Dispatchable compute loads that
          co-locate behind the meter with utility-scale solar and battery
          storage. We transform{" "}
          <span className="text-white font-semibold">curtailed daytime</span>{" "}
          generation into predictable revenue — while perfectly protecting
          your capacity payments.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Partner With Us →
          </Link>
          <Link href="#solution" className="btn-secondary">
            View Our Architecture
          </Link>
        </div>

        {/* Stat strip */}
        <div className="mt-20 grid gap-px rounded-xl border border-navy-700 bg-navy-700 sm:grid-cols-3 lg:mt-24">
          <div className="bg-navy-900 p-7">
            <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
              TWh-scale
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Annual solar curtailment in every mature solar grid
            </p>
          </div>
          <div className="bg-navy-900 p-7">
            <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
              0 MW <span className="text-accent-500">·</span> Evening Peak
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Guaranteed hard shutoff during net-peak hours
            </p>
          </div>
          <div className="bg-navy-900 p-7">
            <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Behind the Meter
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Co-located, zero grid withdrawal during operation
            </p>
          </div>
        </div>

        <div className="h-24 sm:h-32" />
      </div>
    </section>
  );
}
