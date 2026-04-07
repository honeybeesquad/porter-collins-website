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
          title={
            <>
              The Decoupling Crisis
              <br className="hidden sm:block" /> in the SEN
            </>
          }
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="prose-slate space-y-6 text-slate-700">
              <p className="text-lg leading-relaxed">
                Chile&apos;s Sistema Eléctrico Nacional (SEN) is choking on its
                own success. Transmission infrastructure has fallen years
                behind the build-out of utility-scale solar in the north,
                creating severe evacuation bottlenecks at the Crucero and
                Cardones nodes.
              </p>
              <p className="text-lg leading-relaxed">
                In 2025 alone, <strong className="text-navy-900">over
                6,000 GWh</strong> of renewable energy was curtailed across
                the SEN — concentrated in the Atacama and Antofagasta regions.
                The result is extreme basis risk and chronic{" "}
                <strong className="text-navy-900">$0/MWh daytime spot
                pricing</strong> for solar generators sitting on stranded
                megawatts they cannot evacuate.
              </p>
              <p className="text-lg leading-relaxed">
                Capital deployed against generation assets is producing zero
                marginal revenue during the very hours those assets were
                designed to monetize. The traditional remedy — wait for
                transmission upgrades — runs on a multi-year horizon that
                bondholders, sponsors, and asset rotation funds cannot accept.
              </p>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-2">
            <StatCard
              value="6,000+ GWh"
              label="Renewable curtailment across the SEN, 2025"
            />
            <StatCard
              value="$0/MWh"
              label="Daytime spot price at affected northern nodes"
            />
            <StatCard
              value="2 nodes"
              label="Crucero and Cardones — primary transmission bottlenecks"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
