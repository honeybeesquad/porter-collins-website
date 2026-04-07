import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PCName from "../components/PCName";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Open a confidential conversation with Porter/Collins about behind-the-meter co-location at utility-scale solar and BESS sites.",
};

const TRACKS = [
  {
    label: "Project inquiries",
    body: "Site identification, MW sizing, deployment timelines, and PPA structure for behind-the-meter co-location.",
  },
  {
    label: "Regulatory & legal review",
    body: "Self-supply framework documentation, jurisdiction-specific positioning, and system operator coordination for counsel and compliance teams.",
  },
  {
    label: "Technical due diligence",
    body: "Load profile data, dispatch logs, hard shutoff verification, and integration specs for your engineering team.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        {/* Top hero strip */}
        <section
          aria-labelledby="contact-title"
          className="relative overflow-hidden bg-navy-900 pt-32 pb-20 sm:pt-40 sm:pb-28"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
            }}
          />
          <div className="container-px relative">
            <p className="eyebrow-on-dark">Contact</p>
            <h1
              id="contact-title"
              className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Partner With Us.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              <PCName /> works directly with Tier-1 renewable energy
              operators, their counsel, and institutional sponsors evaluating
              behind-the-meter flexible compute at utility-scale solar and
              BESS sites worldwide. Conversations are confidential by default.
            </p>
          </div>
        </section>

        {/* Email block */}
        <section className="py-20 sm:py-28">
          <div className="container-px">
            <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-card sm:p-12">
              <p className="font-display text-[12px] font-medium uppercase tracking-eyebrow text-accent-600">
                Direct line
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
                Reach the <PCName /> partnerships team
              </h2>
              <p className="mt-4 text-slate-600">
                Email is the fastest path. We respond within two business
                days.
              </p>
              <a
                href="mailto:contact@portercollins.com"
                className="btn-primary mt-8 text-base"
              >
                contact@portercollins.com
              </a>
            </div>

            {/* Tracks */}
            <div className="mx-auto mt-16 max-w-4xl">
              <p className="text-center font-display text-[12px] font-medium uppercase tracking-eyebrow text-slate-500">
                Please indicate your inquiry track
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {TRACKS.map((t) => (
                  <div
                    key={t.label}
                    className="rounded-xl border border-slate-200 bg-white p-6"
                  >
                    <h3 className="font-display text-base font-semibold text-navy-900">
                      {t.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
