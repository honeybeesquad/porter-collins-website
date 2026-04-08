import GridBackground from "./GridBackground";
import PCName from "./PCName";
import SectionHeading from "./SectionHeading";

const BENEFITS = [
  {
    code: "01",
    text: "Zero capital outlay required from the host",
    tag: "CAPEX",
  },
  {
    code: "02",
    text: "Fixed off-take on otherwise curtailed daytime hours",
    tag: "REVENUE",
  },
  {
    code: "03",
    text: "Improved Enterprise Value on hybrid solar + BESS SPVs",
    tag: "VALUATION",
  },
  {
    code: "04",
    text: "Highly bankable for institutional asset rotation exits",
    tag: "EXIT",
  },
];

export default function PartnershipSection() {
  return (
    <section
      id="partnership"
      aria-labelledby="partnership-title"
      className="relative overflow-hidden border-t border-navy-600 bg-navy-950 py-28 sm:py-36"
    >
      <GridBackground intensity="medium" size={64} />

      <div className="container-px relative">
        <SectionHeading
          index="05"
          eyebrow="Partnership Model"
          id="partnership-title"
          title={
            <>
              Zero CAPEX.
              <br /> Asset Rotation Ready.
            </>
          }
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="space-y-7 text-lg leading-relaxed text-slate-300 lg:col-span-7">
            <p>
              <PCName /> offers a{" "}
              <strong className="text-white">zero-CAPEX structure</strong>{" "}
              for generators. We sign a behind-the-meter PPA for the daytime
              solar production that would otherwise be curtailed, deploy and
              operate the compute infrastructure on our own balance sheet,
              and pay the host a fixed off-take regardless of spot conditions.
            </p>
            <p>
              The hybrid SPV gains a{" "}
              <strong className="text-white">
                predictable, contracted revenue floor
              </strong>{" "}
              on previously stranded production. That floor flows directly
              into the asset&apos;s discounted cash flow model, boosting
              Enterprise Value and{" "}
              <strong className="text-white">
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

          {/* Mono technical benefit list — stacked rows with leader rules */}
          <div className="lg:col-span-5">
            <div className="border border-navy-600 bg-navy-900/60 p-8">
              <p className="mono-label">[ HOST RECEIVES ]</p>

              <ul className="mt-7 divide-y divide-navy-600">
                {BENEFITS.map((b) => (
                  <li
                    key={b.code}
                    className="flex items-start gap-5 py-5 first:pt-0 last:pb-0"
                  >
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accent-500 tabular pt-1">
                      {b.code}
                    </span>
                    <div className="flex-1">
                      <p className="text-[15px] leading-snug text-white">
                        {b.text}
                      </p>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-navy-400">
                        {b.tag}
                      </p>
                    </div>
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
