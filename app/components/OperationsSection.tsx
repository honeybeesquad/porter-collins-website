import Crosshair from "./Crosshair";
import GridBackground from "./GridBackground";
import SectionHeading from "./SectionHeading";

export default function OperationsSection() {
  return (
    <section
      id="capacity"
      aria-labelledby="capacity-title"
      className="relative overflow-hidden border-t border-navy-600 bg-navy-900 py-28 sm:py-36"
    >
      <GridBackground intensity="soft" size={56} />

      <div className="container-px relative">
        <SectionHeading
          index="04"
          eyebrow="Operations"
          id="capacity-title"
          title={
            <>
              Sub-Millisecond
              <br /> Load Shedding.
            </>
          }
          lede="Algorithmic curtailment, mapped to the host market's settlement intervals — with a hard, contractually enforced shutoff during the evening net-peak window every operating day."
        />

        <div className="mt-20 grid gap-px lg:grid-cols-2">
          {/* (a) Settlement-aligned arbitrage */}
          <div className="schematic-card">
            <Crosshair />

            <div className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accent-500 tabular">
              [ A ] &nbsp; SETTLEMENT-ALIGNED ARBITRAGE
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-white">
              Mapped to the system operator&apos;s settlement intervals.
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

            <ul className="mt-8 space-y-3 font-mono text-[12px] uppercase tracking-widest text-slate-300">
              <li className="flex items-baseline gap-3">
                <span className="text-accent-500">›</span>
                Real-time integration with system operator dispatch
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-accent-500">›</span>
                Sub-millisecond curtailment on price or signal
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-accent-500">›</span>
                Auditable per-interval consumption logs
              </li>
            </ul>
          </div>

          {/* (b) Capacity guarantee */}
          <div className="schematic-card border-accent-500/60 bg-gradient-to-br from-navy-800/60 to-navy-900">
            <Crosshair color="text-accent-500/70" />

            <div className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accent-500 tabular">
              [ B ] &nbsp; THE CAPACITY GUARANTEE
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-white">
              Scheduled hard shutoff: 18:00 — 22:00, daily.
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

            <div className="mt-8 inline-flex items-center gap-3 border border-accent-500/40 bg-accent-500/10 px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-accent-400">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent-500" />
              Contractually enforced · 100% of operating days
            </div>
          </div>
        </div>

        {/* Upgraded chart */}
        <DailyProfileChart />
      </div>
    </section>
  );
}

function DailyProfileChart() {
  // Chart geometry (viewBox = 900 x 360)
  const W = 900;
  const H = 360;
  const left = 70;
  const right = 870;
  const top = 50;
  const bottom = 290;
  const plotW = right - left;
  const plotH = bottom - top;

  // Scales
  const xAt = (h: number) => left + (h / 24) * plotW;
  const yAt = (mw: number) => bottom - (mw / 100) * plotH;

  // Hour labels every 3h
  const hours = [0, 3, 6, 9, 12, 15, 18, 21, 24];
  // MW labels every 25%
  const mwTicks = [0, 25, 50, 75, 100];

  // Compute load curve points (% of capacity 0–100)
  // Ramps from sunrise (~06:00), peaks midday (12:00), drops sharply at 18:00
  const loadPath = `
    M${xAt(0)},${yAt(0)}
    L${xAt(5)},${yAt(0)}
    C${xAt(6)},${yAt(0)} ${xAt(7)},${yAt(70)} ${xAt(9)},${yAt(85)}
    C${xAt(10.5)},${yAt(94)} ${xAt(13.5)},${yAt(96)} ${xAt(15)},${yAt(85)}
    C${xAt(16)},${yAt(72)} ${xAt(17)},${yAt(40)} ${xAt(18)},${yAt(2)}
    L${xAt(22)},${yAt(0)}
    L${xAt(24)},${yAt(0)}
  `;

  // BESS dispatch curve — flat low, then peak 18–22, taper after 22
  const bessPath = `
    M${xAt(0)},${yAt(5)}
    L${xAt(17)},${yAt(5)}
    C${xAt(17.5)},${yAt(8)} ${xAt(17.8)},${yAt(60)} ${xAt(18.5)},${yAt(85)}
    C${xAt(19)},${yAt(95)} ${xAt(20)},${yAt(96)} ${xAt(21)},${yAt(88)}
    C${xAt(21.5)},${yAt(78)} ${xAt(22)},${yAt(35)} ${xAt(22.5)},${yAt(8)}
    L${xAt(24)},${yAt(5)}
  `;

  return (
    <div className="relative mt-16 border border-navy-600 bg-navy-950/60 p-6 sm:p-10">
      <Crosshair />

      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mono-label">[ DAILY PROFILE ]</p>
          <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
            P/C compute load &nbsp;vs.&nbsp; BESS grid dispatch
            <br className="hidden sm:block" />
            <span className="text-slate-400"> 24-hour cycle, local time</span>
          </h3>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-navy-400">
          <span className="text-slate-400">UNIT</span>{" "}
          <span className="ml-2">% of installed capacity</span>
        </div>
      </div>

      <div className="mt-10 overflow-hidden">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="24-hour profile showing Porter/Collins compute load peaking during midday solar hours and dropping to zero from 18:00 to 22:00 local time, while BESS grid dispatch peaks during the same evening window."
        >
          {/* Y-axis grid lines */}
          <g stroke="#1B2942" strokeWidth="1">
            {mwTicks.map((mw) => (
              <line
                key={mw}
                x1={left}
                y1={yAt(mw)}
                x2={right}
                y2={yAt(mw)}
                strokeDasharray={mw === 0 ? "" : "2 4"}
              />
            ))}
          </g>

          {/* Y-axis tick labels */}
          <g
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="10"
            fill="#5A6B86"
            textAnchor="end"
          >
            {mwTicks.map((mw) => (
              <text key={mw} x={left - 12} y={yAt(mw) + 3}>
                {mw}
              </text>
            ))}
          </g>

          {/* X-axis tick labels */}
          <g
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="10"
            fill="#5A6B86"
            textAnchor="middle"
          >
            {hours.map((h) => (
              <g key={h}>
                <line
                  x1={xAt(h)}
                  y1={bottom}
                  x2={xAt(h)}
                  y2={bottom + 6}
                  stroke="#3D5278"
                />
                <text x={xAt(h)} y={bottom + 22}>
                  {String(h).padStart(2, "0")}:00
                </text>
              </g>
            ))}
          </g>

          {/* Net-peak shutoff window highlight (18:00–22:00) */}
          <rect
            x={xAt(18)}
            y={top}
            width={xAt(22) - xAt(18)}
            height={plotH}
            fill="#F97316"
            fillOpacity="0.07"
          />
          <line
            x1={xAt(18)}
            y1={top}
            x2={xAt(18)}
            y2={bottom}
            stroke="#F97316"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          <line
            x1={xAt(22)}
            y1={top}
            x2={xAt(22)}
            y2={bottom}
            stroke="#F97316"
            strokeWidth="1"
            strokeDasharray="3 4"
          />

          {/* P/C compute load — area + line */}
          <path
            d={`${loadPath} L${xAt(24)},${yAt(0)} L${xAt(0)},${yAt(0)} Z`}
            fill="#F97316"
            fillOpacity="0.18"
          />
          <path
            d={loadPath}
            fill="none"
            stroke="#F97316"
            strokeWidth="2.25"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* BESS dispatch — line only */}
          <path
            d={bessPath}
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2.25"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Annotation: PEAK SOLAR (above midday peak) */}
          <g
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="9"
            fill="#F97316"
            textAnchor="middle"
          >
            <line
              x1={xAt(12)}
              y1={yAt(96) - 4}
              x2={xAt(12)}
              y2={top + 14}
              stroke="#F97316"
              strokeWidth="0.75"
            />
            <text
              x={xAt(12)}
              y={top + 6}
              style={{ letterSpacing: "0.18em" }}
            >
              PEAK SOLAR
            </text>
          </g>

          {/* Annotation: HARD SHUTOFF (label inside the orange band) */}
          <g
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="9"
            fill="#FB923C"
            textAnchor="middle"
          >
            <text
              x={xAt(20)}
              y={top + 18}
              style={{ letterSpacing: "0.18em" }}
            >
              HARD SHUTOFF
            </text>
            <text
              x={xAt(20)}
              y={top + 32}
              fill="#5A6B86"
              style={{ letterSpacing: "0.16em" }}
            >
              0 MW · 18:00–22:00
            </text>
          </g>

          {/* Annotation: BESS PEAK (cyan) */}
          <g
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="9"
            fill="#38BDF8"
            textAnchor="end"
          >
            <line
              x1={xAt(20.2)}
              y1={yAt(96) - 4}
              x2={xAt(23.5)}
              y2={top + 60}
              stroke="#38BDF8"
              strokeWidth="0.75"
            />
            <text
              x={xAt(23.7)}
              y={top + 64}
              style={{ letterSpacing: "0.18em" }}
            >
              BESS DISPATCH PEAK
            </text>
          </g>

          {/* Frame */}
          <rect
            x={left}
            y={top}
            width={plotW}
            height={plotH}
            fill="none"
            stroke="#1B2942"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Legend in mono */}
      <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] uppercase tracking-widest text-slate-400">
        <div className="flex items-center gap-3">
          <span className="inline-block h-[3px] w-6 bg-accent-500" />
          P/C compute load
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-block h-[3px] w-6 bg-signal-400" />
          BESS grid dispatch
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-block h-3 w-6 border border-dashed border-accent-500/70 bg-accent-500/10" />
          Net-peak window · 18:00–22:00
        </div>
      </div>
    </div>
  );
}
