/**
 * Crosshair — CAD-style corner markers for technical/schematic blocks.
 *
 * Drop inside any `relative` container. Renders four "+" marks at the
 * corners, slightly offset outside the box so they read as registration
 * marks rather than decoration.
 */
export default function Crosshair({
  color = "text-navy-500",
}: {
  color?: string;
}) {
  return (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -left-1.5 -top-1.5 font-mono text-base leading-none ${color}`}
      >
        +
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-1.5 -top-1.5 font-mono text-base leading-none ${color}`}
      >
        +
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-1.5 -left-1.5 font-mono text-base leading-none ${color}`}
      >
        +
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-1.5 -right-1.5 font-mono text-base leading-none ${color}`}
      >
        +
      </span>
    </>
  );
}
