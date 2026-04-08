import type { Metadata } from "next";
import Crosshair from "../components/Crosshair";
import Footer from "../components/Footer";
import GridBackground from "../components/GridBackground";
import Nav from "../components/Nav";
import PCName from "../components/PCName";
import SectionLabel from "../components/SectionLabel";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Open a confidential conversation with Porter/Collins about behind-the-meter co-location at utility-scale solar and BESS sites.",
};

const TRACKS = [
  {
    code: "01",
    label: "Project inquiries",
    body: "Site identification, MW sizing, deployment timelines, and PPA structure for behind-the-meter co-location.",
  },
  {
    code: "02",
    label: "Regulatory & legal review",
    body: "Self-supply framework documentation, jurisdiction-specific positioning, and system operator coordination for counsel and compliance teams.",
  },
  {
    code: "03",
    label: "Technical due diligence",
    body: "Load profile data, dispatch logs, hard shutoff verification, and integration specs for your engineering team.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-navy-900">
        {/* Hero strip */}
        <section
          aria-labelledby="contact-title"
          className="relative overflow-hidden bg-navy-950 pt-36 pb-24 sm:pt-44 sm:pb-32"
        >
          <div className="freq-line" aria-hidden="true" />
          <GridBackground intensity="medium" size={72} />

          <div className="container-px relative">
            <SectionLabel index="07" text="Contact" />
            <h1
              id="contact-title"
              className="mt-8 max-w-4xl font-display text-mega-sm font-semibold leading-[0.92] tracking-[-0.035em] text-white sm:text-mega lg:text-mega-lg"
            >
              Partner
              <br />
              With Us<span className="text-accent-500">.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              <PCName /> works directly with Tier-1 renewable energy
              operators, their counsel, and institutional sponsors evaluating
              behind-the-meter flexible compute at utility-scale solar and
              BESS sites worldwide. Conversations are confidential by default.
            </p>
          </div>
        </section>

        {/* Email block */}
        <section className="border-t border-navy-600 py-24 sm:py-32">
          <div className="container-px">
            <div className="relative mx-auto max-w-3xl border border-navy-500 bg-navy-950 p-10 text-center sm:p-14">
              <Crosshair color="text-accent-500" />

              <p className="mono-label">[ DIRECT LINE ]</p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Reach the <PCName /> partnerships team.
              </h2>
              <p className="mt-4 text-slate-400">
                Email is the fastest path. We respond within two business
                days.
              </p>
              <a
                href="mailto:contact@portercollins.com"
                className="btn-primary mt-10 text-[12px] sm:text-[13px]"
              >
                contact@portercollins.com
              </a>
            </div>

            {/* Tracks */}
            <div className="mx-auto mt-20 max-w-5xl">
              <p className="text-center mono-label-dim">
                [ INDICATE YOUR INQUIRY TRACK ]
              </p>
              <div className="mt-10 grid gap-px sm:grid-cols-3">
                {TRACKS.map((t) => (
                  <div
                    key={t.code}
                    className="schematic-card min-h-[200px]"
                  >
                    <Crosshair />
                    <div className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accent-500 tabular">
                      [ {t.code} ]
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-white">
                      {t.label}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {t.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
