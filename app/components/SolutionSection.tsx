import Crosshair from "./Crosshair";
import GridBackground from "./GridBackground";
import PCName from "./PCName";
import SectionHeading from "./SectionHeading";

const PILLARS = [
  {
    index: "A",
    title: "Behind-the-Meter Topology",
    body: "A single point of connection shared with your solar and BESS. Our consumption is private-wire by design and never appears on the system operator's withdrawal ledger.",
    meta: "Topology · BTM · single PoC",
  },
  {
    index: "B",
    title: "Self-Supply Framework",
    body: "We operate within each jurisdiction's behind-the-meter and self-supply rules — engaging the local TSO, ISO, or regulator early and structuring our load to fit cleanly inside existing flexibility frameworks.",
    meta: "Framework · self-supply · regulator-aligned",
  },
  {
    index: "C",
    title: "Universally Deployable",
    body: "The model works wherever solar generation outpaces transmission — from CAISO and ERCOT to the European interconnections, the Australian NEM, and the LATAM and MENA build-outs. Same physics, same arbitrage, same capacity discipline.",
    meta: "Coverage · global · jurisdiction-agnostic",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="solution"
      aria-labelledby="solution-title"
      className="relative overflow-hidden border-t border-navy-600 bg-navy-950 py-28 sm:py-36"
    >
      <GridBackground intensity="medium" size={72} />

      <div className="container-px relative">
        <SectionHeading
          index="03"
          eyebrow="The Solution"
          id="solution-title"
          title={
            <>
              A Co-Located,
              <br /> Behind-the-Meter Asset.
            </>
          }
          lede={
            <>
              <PCName /> deploys flexible compute infrastructure directly
              behind the meter at utility-scale solar and BESS sites. By
              sitting inside the host facility&apos;s point of
              interconnection, our consumption is structured as{" "}
              <strong className="text-white">self-supply</strong> — never
              traversing the public grid, never triggering systemic
              withdrawal events, and never competing with the host&apos;s
              grid-bound dispatch.
            </>
          }
        />

        <div className="mt-20 grid gap-px md:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="schematic-card group min-h-[320px]"
            >
              <Crosshair color="text-navy-500 group-hover:text-accent-500 transition-colors" />

              <div className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accent-500 tabular">
                [ {p.index} ]
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-white">
                {p.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-300">{p.body}</p>

              <div className="mt-7 h-px w-12 bg-navy-500" />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-navy-400">
                {p.meta}
              </p>
            </div>
          ))}
        </div>

        {/* Pull-quote — schematic blockquote */}
        <figure className="mt-20 max-w-4xl border-l-2 border-accent-500 pl-8 sm:pl-12">
          <p className="mono-label">[ POSITION ]</p>
          <blockquote className="mt-5 font-display text-2xl font-medium leading-[1.2] tracking-tight text-white sm:text-3xl">
            &ldquo;A behind-the-meter compute load is the only structurally
            clean way to monetize curtailed solar without putting the
            host&apos;s capacity revenues at risk.&rdquo;
          </blockquote>
          <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-widest text-navy-400">
            <PCName /> &nbsp;·&nbsp; Operating Principles, 2026
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
