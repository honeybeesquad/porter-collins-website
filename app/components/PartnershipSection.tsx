import SectionHeading from "./SectionHeading";

const BENEFITS = [
  "Zero capital outlay required from the host",
  "Fixed off-take on otherwise curtailed daytime hours",
  "Improved Enterprise Value on hybrid solar + BESS SPVs",
  "Highly bankable for institutional asset rotation exits",
];

export default function PartnershipSection() {
  return (
    <section
      id="partnership"
      aria-labelledby="partnership-title"
      className="bg-slate-50 py-24 sm:py-32"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Partnership Model"
          id="partnership-title"
          title={
            <>
              Zero CAPEX.
              <br className="hidden sm:block" /> Asset Rotation Ready.
            </>
          }
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-6 text-lg leading-relaxed text-slate-700 lg:col-span-3">
            <p>
              Porter/Collins offers a{" "}
              <strong className="text-navy-900">zero-CAPEX structure</strong>{" "}
              for generators. We sign a behind-the-meter PPA for the daytime
              solar production that would otherwise be curtailed, deploy and
              operate the compute infrastructure on our own balance sheet,
              and pay the host a fixed off-take regardless of spot conditions.
            </p>
            <p>
              The hybrid SPV gains a{" "}
              <strong className="text-navy-900">
                predictable, contracted revenue floor
              </strong>{" "}
              on previously stranded production. That floor flows directly
              into the asset&apos;s discounted cash flow model, boosting
              Enterprise Value and{" "}
              <strong className="text-navy-900">
                bankability for institutional exit sales
              </strong>{" "}
              — the core thesis underpinning every asset rotation strategy in
              the global renewables space.
            </p>
            <p>
              No additional capital. No lender consent risk on grid usage. No
              cannibalization of capacity revenues. Just a cleaner SPV cash
              flow profile and a more bankable exit — wherever your assets
              sit.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
              <p className="font-display text-[12px] font-medium uppercase tracking-eyebrow text-accent-600">
                What the host gets
              </p>
              <ul className="mt-5 space-y-4">
                {BENEFITS.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[15px] text-slate-800"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent-500/10 text-accent-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
