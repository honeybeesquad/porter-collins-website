/**
 * SectionLabel — monospace technical marker for section openers.
 *
 * Renders as: `[ 02 ]  THE PROBLEM`
 *
 * The number sits in brackets like a CAD reference index, then a long
 * hairline rule extends to the right of the label like a schematic
 * leader line. Used as the "eyebrow" replacement throughout the site.
 */
type Props = {
  index: string;
  text: string;
  className?: string;
};

export default function SectionLabel({
  index,
  text,
  className = "",
}: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-widest text-accent-500 tabular">
        [ {index} ]
      </span>
      <span className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-widest text-accent-500">
        {text}
      </span>
      <span
        aria-hidden="true"
        className="hidden h-px flex-1 max-w-[160px] bg-navy-600 sm:block"
      />
    </div>
  );
}
