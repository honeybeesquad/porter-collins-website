import type { ReactNode } from "react";
import Crosshair from "./Crosshair";
import GridBackground from "./GridBackground";
import PCName from "./PCName";
import SectionHeading from "./SectionHeading";

type Pillar = {
  index: string;
  title: string;
  body: ReactNode;
  tag: string;
};

const PILLARS: Pillar[] = [
  {
    index: "A",
    title: "Code-Compliant Electrical Infrastructure",
    body: (
      <>
        Every <PCName /> deployment meets international electrical safety
        standards — including arc-fault protection (IEC 62606 / NEC AFCI)
        and the current ground-fault and isolation requirements for the
        host jurisdiction.
      </>
    ),
    tag: "IEC 62606 · NEC AFCI",
  },
  {
    index: "B",
    title: "Grid-Forming Inverter Compatible",
    body: (
      <>
        Our integration model supports partner BESS facilities running
        grid-forming inverters that improve local voltage and frequency
        stability — strengthening the grid we share, not stressing it.
      </>
    ),
    tag: "Grid-Forming · V/f stability",
  },
  {
    index: "C",
    title: "Local Grid Security First",
    body: (
      <>
        Operational protocols are designed around the host system
        operator&apos;s reliability standards, worker safety, and full
        transparency. Every shutoff, every dispatch, fully auditable.
      </>
    ),
    tag: "Auditable · Transparent",
  },
];

export default function SustainabilitySection() {
  return (
    <section
      id="sustainability"
      aria-labelledby="sustainability-title"
      className="relative overflow-hidden border-t border-navy-600 bg-navy-900 py-28 sm:py-36"
    >
      <GridBackground intensity="soft" size={56} />

      <div className="container-px relative">
        <SectionHeading
          index="06"
          eyebrow="Sustainability & Grid Safety"
          id="sustainability-title"
          title={
            <>
              Built to Strengthen
              <br /> the Grid, Not Stress It.
            </>
          }
          lede={
            <>
              <PCName /> is engineered as a grid-stabilizing asset. Our
              regulatory, safety, and sustainability commitments are
              designed to meet the institutional thresholds of Tier-1
              sponsors, lenders, and asset rotation buyers — in every
              jurisdiction we operate.
            </>
          }
        />

        <div className="mt-20 grid gap-px md:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="schematic-card group min-h-[300px]"
            >
              <Crosshair color="text-navy-500 group-hover:text-accent-500 transition-colors" />

              <div className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accent-500 tabular">
                [ {p.index} ]
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-white">
                {p.title}
              </h3>

              <p className="mt-4 text-[15px] leading-relaxed text-slate-300">
                {p.body}
              </p>

              <div className="mt-7 h-px w-12 bg-navy-500" />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-navy-400">
                {p.tag}
              </p>
            </div>
          ))}
        </div>

        {/* Closing CTA band — schematic, edge-to-edge */}
        <div className="relative mt-24 overflow-hidden border border-navy-500 bg-navy-950">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <Crosshair color="text-accent-500" />
          <div className="relative grid gap-10 p-10 sm:p-14 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <p className="mono-label">[ READY TO ALIGN ]</p>
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Open a confidential conversation with <PCName />.
              </h3>
              <p className="mt-5 max-w-2xl text-slate-300">
                For Tier-1 generators, regulatory counsel, and institutional
                sponsors evaluating behind-the-meter co-location at
                utility-scale solar and BESS sites worldwide.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <a href="/contact" className="btn-primary">
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
