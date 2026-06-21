interface Props {
  x: number;
  y: number;

  active?: boolean;
}

export default function CircuitMarker({
  x,
  y,
  active,
}: Props) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle
        r="8"
        fill="#ff6548"
      />

      <circle
        r="16"
        fill="rgba(255,101,72,.15)"
      />

      {active && (
        <circle
          r="24"
          fill="none"
          stroke="#ff6548"
          strokeWidth="1"
        />
      )}
    </g>
  );
}