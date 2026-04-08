import type { ReactNode } from "react";
import Crosshair from "./Crosshair";

/**
 * MonoStat — oscilloscope-style stat readout.
 *
 * A schematic data block: bracketed index in mono at top-left, large
 * value in display type, supporting label below, source/protocol meta
 * tag at the bottom separated by a hairline. Optional crosshair corner
 * marks for the technical blueprint feel.
 */
type Props = {
  index: string;
  value: ReactNode;
  label: ReactNode;
  meta?: { tag: string; text: string };
  size?: "md" | "lg";
  crosshair?: boolean;
};

export default function MonoStat({
  index,
  value,
  label,
  meta,
  size = "md",
  crosshair = true,
}: Props) {
  const valueClass =
    size === "lg"
      ? "text-5xl sm:text-6xl lg:text-7xl"
      : "text-3xl sm:text-4xl lg:text-[44px]";

  return (
    <div className="relative border border-navy-600 bg-navy-800/30 p-7">
      {crosshair && <Crosshair />}

      <div className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accent-500 tabular">
        [ {index} ]
      </div>

      <p
        className={`mt-5 font-display font-semibold leading-[0.92] tracking-tight text-white tabular ${valueClass}`}
      >
        {value}
      </p>

      <p className="mt-4 text-sm leading-snug text-slate-300 sm:text-[15px]">
        {label}
      </p>

      {meta && (
        <>
          <div className="mt-6 h-px w-12 bg-navy-500" />
          <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-navy-400">
            <span className="text-slate-400">{meta.tag}</span>{" "}
            <span className="ml-2">{meta.text}</span>
          </p>
        </>
      )}
    </div>
  );
}
