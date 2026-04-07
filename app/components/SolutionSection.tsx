import SectionHeading from "./SectionHeading";

const PILLARS = [
  {
    title: "Behind-the-Meter Topology",
    body: "A single point of connection shared with your solar and BESS. Our consumption is private-wire by design and never appears on the system operator's withdrawal ledger.",
    icon: (
      <path
        d="M3 12h4l2-7 4 14 2-7h6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Self-Supply Framework",
    body: "We operate within each jurisdiction's behind-the-meter and self-supply rules — engaging the local TSO, ISO, or regulator early and structuring our load to fit cleanly inside existing flexibility frameworks.",
    icon: (
      <>
        <path
          d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    title: "Universally Deployable",
    body: "The model works wherever solar generation outpaces transmission — from CAISO and ERCOT to the European interconnections, the Australian NEM, and the LATAM and MENA build-outs. Same physics, same arbitrage, same capacity discipline.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path
          d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

export default function SolutionSection() {
  return (
    <section
      id="solution"
      aria-labelledby="solution-title"
      className="bg-white py-24 sm:py-32"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="The Solution"
          id="solution-title"
          title={
            <>
              A Co-Located, Behind-the-Meter Asset
              <br className="hidden sm:block" /> — Engineered for Every Grid
            </>
          }
          lede={
            <>
              Porter/Collins deploys flexible compute infrastructure directly
              behind the meter at utility-scale solar and BESS sites. By
              sitting inside the host facility&apos;s point of
              interconnection, our consumption is structured as{" "}
              <strong className="text-navy-900">self-supply</strong> — never
              traversing the public grid, never triggering systemic
              withdrawal events, and never competing with the host&apos;s
              grid-bound dispatch.
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="card">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  {p.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>

        <figure className="mt-16 rounded-2xl border-l-4 border-accent-500 bg-slate-50 p-8 sm:p-10">
          <blockquote className="font-display text-xl font-medium leading-snug text-navy-900 sm:text-2xl">
            &ldquo;A behind-the-meter compute load is the only structurally
            clean way to monetize curtailed solar without putting the
            host&apos;s capacity revenues at risk.&rdquo;
          </blockquote>
          <figcaption className="mt-5 font-display text-[12px] font-medium uppercase tracking-eyebrow text-slate-500">
            Porter/Collins · Operating Principles, 2026
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
