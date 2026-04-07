import SectionHeading from "./SectionHeading";

const PILLARS = [
  {
    title: "Behind-the-Meter Topology",
    body: "A single point of connection shared with your solar and BESS. Our consumption never traverses the public grid — there is no withdrawal event to charge.",
    icon: (
      <path d="M3 12h4l2-7 4 14 2-7h6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Law 21.505 SGC Status",
    body: "Porter/Collins operates as a registered Sistema Generación-Consumo under Chile's flexibility framework, fully aligned with the regulator and the CEN.",
    icon: (
      <>
        <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Article 116 quater Exemption",
    body: "Under DS 125, our self-supplied consumption is legally exempt from systemic grid withdrawal charges — the only clean structure for monetizing curtailed solar.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18M8 15h3" strokeLinecap="round" />
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
              A Sistema Generación-Consumo,
              <br className="hidden sm:block" /> Engineered for the SEN
            </>
          }
          lede={
            <>
              Under Law 21.505, Porter/Collins operates as a registered{" "}
              <strong className="text-navy-900">
                Sistema Generación-Consumo (SGC)
              </strong>
              . By sitting behind a single point of connection alongside your
              solar and BESS assets, our self-supplied consumption is legally
              exempt from systemic grid withdrawals under{" "}
              <strong className="text-navy-900">
                Article 116 quater of DS 125
              </strong>
              .
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
            &ldquo;The SGC structure is the only legally clean path to monetize
            curtailed solar without triggering systemic grid charges — and
            without putting the generator&apos;s capacity revenues at risk.&rdquo;
          </blockquote>
          <figcaption className="mt-5 font-display text-[12px] font-medium uppercase tracking-eyebrow text-slate-500">
            Porter/Collins · Regulatory Position Paper, 2026
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
