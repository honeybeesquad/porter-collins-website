import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  onDark?: boolean;
  align?: "left" | "center";
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  onDark = false,
  align = "left",
  id,
}: Props) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className={onDark ? "eyebrow-on-dark" : "eyebrow"}>{eyebrow}</p>
      <h2
        id={id}
        className={`mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[44px] ${
          onDark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            onDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
