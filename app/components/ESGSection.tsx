import SectionHeading from "./SectionHeading";

const PILLARS = [
  {
    title: "Code-Compliant Electrical Infrastructure",
    body: "Every Porter/Collins deployment meets international electrical safety standards — including arc-fault protection (IEC 62606 / NEC AFCI) and the current ground-fault and isolation requirements for the host jurisdiction.",
    icon: (
      <>
        <path
          d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    title: "Grid-Forming Inverter Compatible",
    body: "Our integration model supports partner BESS facilities running grid-forming inverters that improve local voltage and frequency stability — strengthening the grid we share, not stressing it.",
    icon: (
      <>
        <path
          d="M3 12c4 0 4-7 8-7s4 14 8 14 4-7 8-7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    title: "Local Grid Security First",
    body: "Operational protocols are designed around the host system operator's reliability standards, worker safety, and full transparency. Every shutoff, every dispatch, fully auditable.",
    icon: (
      <>
        <path
          d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
];

export default function ESGSection() {
  return (
    <section
      id="esg"
      aria-labelledby="esg-title"
      className="bg-white py-24 sm:py-32"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Compliance & Grid Safety"
          id="esg-title"
          title={
            <>
              Built to Strengthen the Grid,
              <br className="hidden sm:block" /> Not Stress It
            </>
          }
          lede="Porter/Collins is engineered as a grid-stabilizing asset. Our regulatory, safety, and ESG commitments are designed to meet the institutional thresholds of Tier-1 sponsors, lenders, and asset rotation buyers — in every jurisdiction we operate."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="card">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-accent-500">
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

        {/* Closing CTA band */}
        <div className="mt-20 overflow-hidden rounded-2xl bg-navy-900 p-10 sm:p-14">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <p className="eyebrow-on-dark">Ready to align?</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                Open a confidential conversation with Porter/Collins.
              </h3>
              <p className="mt-4 max-w-2xl text-slate-300">
                For Tier-1 generators, regulatory counsel, and institutional
                sponsors evaluating behind-the-meter co-location at
                utility-scale solar and BESS sites worldwide.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <a href="/contact" className="btn-primary">
                Partner With Us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
