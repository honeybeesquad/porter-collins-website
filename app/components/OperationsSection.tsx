import SectionHeading from "./SectionHeading";

export default function OperationsSection() {
  return (
    <section
      id="capacity"
      aria-labelledby="capacity-title"
      className="relative overflow-hidden bg-navy-900 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Operations"
          id="capacity-title"
          onDark
          title={
            <>
              Sub-Millisecond Load Shedding.
              <br className="hidden sm:block" /> Zero Capacity Cannibalization.
            </>
          }
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* (a) Settlement-aligned arbitrage */}
          <div className="card-on-dark">
            <p className="font-display text-[12px] font-medium uppercase tracking-eyebrow text-accent-400">
              Settlement-Aligned Arbitrage
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">
              Mapped to the system operator&apos;s settlement intervals
            </h3>
            <p className="mt-4 leading-relaxed text-slate-300">
              Our control system maps power draw to the host market&apos;s
              settlement intervals — whether that&apos;s 5-minute, 15-minute,
              or 30-minute resolution. Algorithmic load shedding executes in{" "}
              <strong className="text-white">sub-millisecond response time</strong>
              , allowing the asset to consume only when curtailed energy is
              genuinely available — never displacing grid-bound generation,
              never creating an unscheduled withdrawal.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Dot /> Real-time integration with the system operator&apos;s
                dispatch signal
              </li>
              <li className="flex items-start gap-3">
                <Dot /> Sub-millisecond load curtailment on price or signal
              </li>
              <li className="flex items-start gap-3">
                <Dot /> Auditable per-interval consumption logs
              </li>
            </ul>
          </div>

          {/* (b) Evening Net-Peak Hard Shutoff */}
          <div className="relative rounded-xl border border-accent-500/40 bg-gradient-to-br from-navy-800 to-navy-900 p-7">
            <div className="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-accent-500" />
            <p className="font-display text-[12px] font-medium uppercase tracking-eyebrow text-accent-400">
              The Capacity Guarantee
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">
              Scheduled Hard Shutoff: Evening Net-Peak, Daily
            </h3>
            <p className="mt-4 leading-relaxed text-slate-300">
              We execute a{" "}
              <strong className="text-white">scheduled hard shutoff</strong>{" "}
              during the grid&apos;s evening net-peak window every day. By
              curtailing our load to{" "}
              <strong className="text-white">0 MW</strong> from{" "}
              <strong className="text-white">18:00 to 22:00</strong> local
              time, we{" "}
              <strong className="text-white">
                guarantee zero cannibalization
              </strong>{" "}
              of the host&apos;s capacity market revenues. Your BESS
              dispatches{" "}
              <strong className="text-white">100% to the grid</strong> when
              the system needs it most — exactly when capacity payments
              clear.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent-500/15 px-3 py-2 font-display text-xs font-semibold uppercase tracking-eyebrow text-accent-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline
                  points="12 6 12 12 16 14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Contractually enforced · 100% of operating days
            </div>
          </div>
        </div>

        {/* 24h SVG load profile */}
        <div className="mt-16 rounded-2xl border border-navy-700 bg-navy-800/50 p-6 sm:p-8">
          <p className="font-display text-[12px] font-medium uppercase tracking-eyebrow text-accent-400">
            Daily Profile
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-white">
            P/C compute load vs. BESS grid dispatch — 24h cycle (local time)
          </h3>

          <div className="mt-6 overflow-hidden">
            <svg
              viewBox="0 0 800 240"
              className="h-auto w-full"
              role="img"
              aria-label="24-hour profile showing Porter/Collins compute load peaking during midday solar hours and dropping to zero from 18:00 to 22:00 local time, while BESS grid dispatch peaks during the same evening window."
            >
              {/* Grid lines */}
              <g stroke="#1E3A6B" strokeWidth="1">
                <line x1="40" y1="40" x2="780" y2="40" />
                <line x1="40" y1="100" x2="780" y2="100" />
                <line x1="40" y1="160" x2="780" y2="160" />
                <line x1="40" y1="200" x2="780" y2="200" />
              </g>

              {/* Hour ticks (every 3h) */}
              <g
                fontFamily="var(--font-source-sans), sans-serif"
                fontSize="11"
                fill="#94a3b8"
              >
                {[0, 3, 6, 9, 12, 15, 18, 21, 24].map((h) => {
                  const x = 40 + (h / 24) * 740;
                  return (
                    <g key={h}>
                      <line
                        x1={x}
                        y1="200"
                        x2={x}
                        y2="206"
                        stroke="#475569"
                      />
                      <text x={x} y="222" textAnchor="middle">
                        {String(h).padStart(2, "0")}:00
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* P/C compute load (orange area) — ramps up at sunrise, max midday, drops at 18:00 */}
              <path
                d="
                  M40,200
                  L160,200
                  C 200,200 220,80 280,55
                  C 340,35 420,35 480,55
                  C 530,72 555,160 580,195
                  L 600,200
                  L 720,200
                  L 720,200
                  L 780,200
                  Z
                "
                fill="#F97316"
                fillOpacity="0.28"
                stroke="#F97316"
                strokeWidth="2"
              />
              {/* Hard shutoff zero line band 18:00-22:00 */}
              <rect
                x={40 + (18 / 24) * 740}
                y="40"
                width={(4 / 24) * 740}
                height="160"
                fill="#F97316"
                fillOpacity="0.06"
              />
              <line
                x1={40 + (18 / 24) * 740}
                y1="40"
                x2={40 + (18 / 24) * 740}
                y2="200"
                stroke="#F97316"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <line
                x1={40 + (22 / 24) * 740}
                y1="40"
                x2={40 + (22 / 24) * 740}
                y2="200"
                stroke="#F97316"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* BESS dispatch (cyan line) — peaks 18:00–22:00 */}
              <path
                d="
                  M40,195
                  L 480,195
                  C 540,195 560,90 600,55
                  C 640,30 680,30 700,80
                  C 715,120 730,180 780,200
                "
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-5 rounded-sm bg-accent-500/40 ring-1 ring-accent-500" />
              P/C compute load
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-[3px] w-5 rounded-sm bg-sky-400" />
              BESS grid dispatch
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-5 rounded-sm border border-dashed border-accent-500/70" />
              Evening net-peak (18:00–22:00 local)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <span
      aria-hidden="true"
      className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent-500"
    />
  );
}
