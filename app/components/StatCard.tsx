type Props = {
  value: string;
  label: string;
  onDark?: boolean;
};

export default function StatCard({ value, label, onDark = false }: Props) {
  return (
    <div
      className={`rounded-xl border p-6 ${
        onDark
          ? "border-navy-700 bg-navy-800/60"
          : "border-slate-200 bg-white shadow-card"
      }`}
    >
      <p
        className={`font-display text-4xl font-semibold leading-none tracking-tight sm:text-5xl ${
          onDark ? "text-white" : "text-navy-900"
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-3 text-sm leading-snug ${
          onDark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
