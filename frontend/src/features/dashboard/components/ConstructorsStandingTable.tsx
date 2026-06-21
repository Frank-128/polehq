import { constructorStandings } from "../data/dashboard.mock";

export default function ConstructorStandingsTable() {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-y border-border text-[12px] bg-[#242324]">
          <th className="py-3 px-4 text-left  font-semibold uppercase tracking-[0.16em] text-primary w-14">
            Pos
          </th>

          <th className="text-left  font-semibold uppercase tracking-[0.16em] text-primary">
            Team
          </th>

          <th className="text-left  font-semibold uppercase tracking-[0.16em] text-primary w-20">
            Points
          </th>

          <th className="text-left  font-semibold uppercase tracking-[0.16em] text-primary w-16">
            Gap
          </th>
        </tr>
      </thead>

      <tbody>
        {constructorStandings.map((row) => (
          <tr
            key={row.position}
            className="
              border-b
              border-border
              bg-[#1c1b1c]
              hover:bg-bg-hover
              transition-colors
            "
          >
            {/* Position */}
            <td className="px-4 py-4 font-mono text-[20px] text-text-secondary">
              {String(row.position).padStart(2, "0")}
            </td>

            {/* Team */}
            <td className="py-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-[6px] h-[22px] flex-shrink-0"
                  style={{
                    background: row.color,
                  }}
                />

                <span className="text-text-primary text-[18px] font-mono">
                  {row.team}
                </span>
              </div>
            </td>

            {/* Points */}
            <td className="text-text-primary text-[20px] font-mono">
              {row.points}
            </td>

            {/* Gap */}
            <td
              className={`
                text-[18px]
                font-mono
                ${
                  row.gap === "-"
                    ? "text-text-secondary"
                    : "text-[#ff8c8c]"
                }
              `}
            >
              {row.gap}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}