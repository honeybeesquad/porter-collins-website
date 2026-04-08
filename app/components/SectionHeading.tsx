import type { ReactNode } from "react";
import SectionLabel from "./SectionLabel";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  id?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  align = "left",
  id,
}: Props) {
  return (
    <div
      className={`max-w-4xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <SectionLabel index={index} text={eyebrow} />
      <h2
        id={id}
        className="mt-6 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      {lede && (
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          {lede}
        </p>
      )}
    </div>
  );
}
