interface Props {
  name: string;
  status: string;
  temperature: number;
  x: number;
  y: number;
}

export default function MapTooltip({
  name,
  status,
  temperature,
  x,
  y,
}: Props) {
  const isLive = status === "LIVE";

  return (
    <div
      className="absolute z-50 bg-bg-card border border-border px-3 py-2 pointer-events-none shadow-lg"
      style={{ left: x, top: y }}
    >
      <div className="text-[10px] uppercase text-primary tracking-wider font-semibold">
        {name}
      </div>

      <div className="mt-1 flex items-center gap-2">
        <span
          className={`
            text-[9px] uppercase tracking-wide font-medium
            ${isLive ? "text-tertiary" : "text-text-muted"}
          `}
        >
          {isLive && (
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary mr-1 animate-pulse" />
          )}
          {status}
        </span>
      </div>

      <div className="text-[10px] text-text-secondary font-mono mt-0.5">
        {temperature}°C track temp
      </div>
    </div>
  );
}
