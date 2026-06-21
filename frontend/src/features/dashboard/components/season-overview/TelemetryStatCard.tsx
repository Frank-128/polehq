interface Props {
  label: string;
  value: string;
  suffix: string;
}

export default function TelemetryStatCard({ label, value, suffix }: Props) {
  return (
    <div className="border border-border bg-[#111111] px-3 py-2.5">
      <div className="text-[9px] uppercase tracking-[0.16em] font-semibold text-primary">
        {label}
      </div>

      <div className="flex items-baseline gap-1.5 mt-1">
        <span className="text-2xl font-mono font-bold text-text-primary">
          {value}
        </span>
        <span className="text-[10px] uppercase font-semibold text-primary">
          {suffix}
        </span>
      </div>
    </div>
  );
}
