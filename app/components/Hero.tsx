import Link from "next/link";
import GridBackground from "./GridBackground";
import MonoStat from "./MonoStat";
import PCName from "./PCName";
import SectionLabel from "./SectionLabel";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-navy-950 pt-36 sm:pt-40 lg:pt-48"
    >
      {/* Frequency scanner line at the very top — subtle pulsing accent */}
      <div className="freq-line" aria-hidden="true" />

      {/* Schematic grid */}
      <GridBackground intensity="medium" size={72} />

      {/* Accent radial bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-15%] h-[640px] w-[640px] rounded-full bg-accent-500/10 blur-[140px]"
      />

      <div className="container-px relative">
        <div className="reveal reveal-1">
          <SectionLabel
            index="01"
            text="Behind-the-Meter Flexible Compute · Utility-Scale Renewables"
          />
        </div>

        <h1
          id="hero-title"
          className="reveal reveal-2 mt-10 max-w-[1100px] font-display text-mega-sm font-semibold leading-[0.92] tracking-[-0.035em] text-white sm:text-mega lg:text-mega-lg"
        >
          Monetizing
          <br />
          Stranded Power.
          <br />
          <span className="relative inline-block">
            Stabilizing the
            <span className="text-white"> Grid</span>
            <span className="text-accent-500">.</span>
          </span>
        </h1>

        <p className="reveal reveal-3 mt-10 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          <PCName /> builds Active Dispatchable compute loads that
          co-locate behind the meter with utility-scale solar and battery
          storage. We transform{" "}
          <span className="text-white font-semibold">curtailed daytime</span>{" "}
          generation into predictable revenue — while perfectly protecting
          your capacity payments.
        </p>

        <div className="reveal reveal-4 mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="/contact" className="btn-primary">
            Partner With Us
          </Link>
          <Link href="#solution" className="btn-secondary">
            View Architecture →
          </Link>
        </div>

        {/* Oscilloscope stat readout */}
        <div className="reveal reveal-5 mt-24 grid gap-px sm:grid-cols-3 lg:mt-32">
          <MonoStat
            index="01"
            value="TWh-scale"
            label="Annual solar curtailment in every mature solar grid"
            meta={{ tag: "SCOPE", text: "global" }}
          />
          <MonoStat
            index="02"
            value={
              <>
                0 MW
                <span className="text-accent-500"> · </span>
                <span className="block text-[0.55em] sm:inline sm:text-inherit">
                  18:00–22:00
                </span>
              </>
            }
            label="Guaranteed hard shutoff during evening net-peak hours"
            meta={{ tag: "PROTOCOL", text: "scheduled · daily" }}
          />
          <MonoStat
            index="03"
            value="BTM"
            label="Co-located behind the meter, zero grid withdrawal during operation"
            meta={{ tag: "TOPOLOGY", text: "private wire" }}
          />
        </div>

        <div className="h-32 sm:h-40" />
      </div>
    </section>
  );
}
