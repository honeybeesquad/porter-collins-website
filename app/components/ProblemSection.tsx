import GridBackground from "./GridBackground";
import MonoStat from "./MonoStat";
import SectionHeading from "./SectionHeading";

export default function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
      className="relative overflow-hidden border-t border-navy-600 bg-navy-900 py-28 sm:py-36"
    >
      <GridBackground intensity="soft" size={64} />

      <div className="container-px relative">
        <SectionHeading
          index="02"
          eyebrow="The Problem"
          id="problem-title"
          title={<>The Decoupling Crisis</>}
          lede="Solar and battery storage are the Swiss Army knife of the modern energy transition. Every grid that scales them runs into the same structural wall."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="space-y-7 text-slate-300">
              <p className="text-lg leading-relaxed">
                Generation is being built faster than transmission can be
                upgraded. Interconnection queues stretch years deep. The
                result is the now-familiar{" "}
                <strong className="text-white">duck curve</strong>: massive
                midday solar surpluses with nowhere to go, followed by a
                steep evening ramp that strains the same grid the surplus
                could not relieve.
              </p>
              <p className="text-lg leading-relaxed">
                Across mature solar markets — CAISO, ERCOT, Iberia, the
                Australian NEM, and the fast-scaling LATAM and MENA grids —
                operators are watching utility-scale solar plants curtail{" "}
                <strong className="text-white">GWh-by-GWh</strong> and
                clear at <strong className="text-white">zero or negative
                prices</strong> during the very hours those assets were built
                to monetize.
              </p>
              <p className="text-lg leading-relaxed">
                Capital deployed against generation is producing zero marginal
                revenue during the windows it was designed for. Waiting for
                transmission upgrades is a multi-year horizon that
                bondholders, sponsors, and asset rotation funds cannot
                accept. The supply/demand mismatch is a permanent feature of
                solar-led decarbonization, not a transient growing pain.
              </p>
            </div>

            {/* Marginalia-style markets list */}
            <div className="mt-12 border-l border-accent-500/60 pl-6">
              <p className="mono-label">[ AFFECTED MARKETS ]</p>
              <p className="mt-3 font-mono text-[12px] uppercase tracking-widest text-slate-400">
                CAISO &nbsp;·&nbsp; ERCOT &nbsp;·&nbsp; Iberia &nbsp;·&nbsp;
                Australian NEM &nbsp;·&nbsp; LATAM &nbsp;·&nbsp; MENA
              </p>
            </div>
          </div>

          <div className="space-y-px lg:col-span-5">
            <MonoStat
              index="A"
              value="TWh-scale"
              label="Annual solar curtailment across every mature market"
              meta={{ tag: "TREND", text: "structural · growing" }}
              size="md"
            />
            <MonoStat
              index="B"
              value="≤ $0/MWh"
              label="Negative daytime spot pricing now routine in solar-heavy zones"
              meta={{ tag: "FREQUENCY", text: "daily · midday" }}
              size="md"
            />
            <MonoStat
              index="C"
              value="Multi-year"
              label="Typical horizon for transmission upgrade relief"
              meta={{ tag: "BLOCKER", text: "permitting · queues" }}
              size="md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
