/**
 * GridBackground — schematic line pattern background.
 *
 * Uses CSS gradients to draw a 1px hairline grid at 64px spacing,
 * masked toward the center of the section so edges fade out. Can be
 * intensified or softened via the `intensity` prop.
 */
type Props = {
  intensity?: "soft" | "medium" | "strong";
  size?: number;
};

export default function GridBackground({
  intensity = "soft",
  size = 64,
}: Props) {
  const opacity =
    intensity === "strong" ? 0.09 : intensity === "medium" ? 0.06 : 0.04;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,${opacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,${opacity}) 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        maskImage:
          "radial-gradient(ellipse 90% 70% at 50% 40%, black 35%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 90% 70% at 50% 40%, black 35%, transparent 100%)",
      }}
    />
  );
}
