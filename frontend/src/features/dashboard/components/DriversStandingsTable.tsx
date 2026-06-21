import Panel from "@/features/shared/components/ui/Panel";
import PanelHeader from "@/features/shared/components/ui/PanelHeader";

import { driverStandings } from "../data/dashboard.mock";
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react";

const TREND_CONFIG = {
  up:      { symbol: <TrendingUp/>, className: "text-[#00c96e]" },
  down:    { symbol: <TrendingDown/>, className: "text-[#e8002d]" },
  neutral: { symbol: <ArrowRight/>, className: "text-[#00d2b8]" },
} as const;

export default function DriverStandingsTable() {
  return (
    

      <table className="w-full">
        <thead>
          <tr className="border-y border-border text-[12px] bg-[#242324]">
            <th className="py-3 px-4 text-left  font-semibold uppercase tracking-[0.16em] text-primary w-14">
              Pos
            </th>
            <th className="text-left  font-semibold uppercase tracking-[0.16em] text-primary">
              Driver
            </th>
            <th className="text-left  font-semibold uppercase tracking-[0.16em] text-primary w-20">
              Points
            </th>
            <th className="text-left  font-semibold uppercase tracking-[0.16em] text-primary w-16">
              Trend
            </th>
          </tr>
        </thead>

        <tbody>
          {driverStandings.map((row) => {
            const trend = TREND_CONFIG[row.trend as keyof typeof TREND_CONFIG];
            return (
              <tr
                key={row.position}
                className="border-b border-border bg-[#1c1b1c] hover:bg-bg-hover transition-colors"
              >
                {/* Position — monospaced, muted */}
                <td className="px-4 py-4 font-mono text-[20px] text-text-secondary">
                  {String(row.position).padStart(2, "0")}
                </td>

                {/* Driver name with team-color accent bar */}
                <td className="py-4 ">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-[6px] h-[22px] flex-shrink-0"
                      style={{ background: row.color }}
                    />
                    <span className="text-text-primary text-[18px]  font-mono">
                      {row.driver}
                    </span>
                  </div>
                </td>

                {/* Points */}
                <td className="text-text-primary text-[20px] font-mono">
                  {row.points}
                </td>

                {/* Trend arrow */}
                <td className={`text-[14px] leading-none ${trend.className}`}>
                  {trend.symbol}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    // </Panel>
  );
}