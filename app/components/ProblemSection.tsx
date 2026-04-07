import SectionHeading from "./SectionHeading";
import StatCard from "./StatCard";

export default function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
      className="bg-slate-50 py-24 sm:py-32"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="The Problem"
          id="problem-title"
          title={<>The Decoupling Crisis</>}
          lede="Solar and battery storage are the Swiss Army knife of the modern energy transition. Every grid that scales them runs into the same structural wall."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="prose-slate space-y-6 text-slate-700">
              <p className="text-lg leading-relaxed">
                Generation is being built faster than transmission can be
                upgraded. Interconnection queues stretch years deep. The
                result is the now-familiar{" "}
                <strong className="text-navy-900">duck curve</strong>: massive
                midday solar surpluses with nowhere to go, followed by a
                steep evening ramp that strains the same grid the surplus
                could not relieve.
              </p>
              <p className="text-lg leading-relaxed">
                Across mature solar markets — CAISO, ERCOT, Iberia, the
                Australian NEM, and the fast-scaling LATAM and MENA grids —
                operators are watching utility-scale solar plants curtail{" "}
                <strong className="text-navy-900">GWh-by-GWh</strong> and
                clear at <strong className="text-navy-900">zero or negative
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
          </div>

          <div className="space-y-5 lg:col-span-2">
            <StatCard
              value="TWh-scale"
              label="Annual solar curtailment across every mature market"
            />
            <StatCard
              value="≤ $0/MWh"
              label="Negative daytime spot pricing now routine in solar-heavy zones"
            />
            <StatCard
              value="Multi-year"
              label="Typical horizon for transmission upgrade relief"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
