"use client";

import { useState } from "react";

import Panel from "@/features/shared/components/ui/Panel";
import PanelHeader from "@/features/shared/components/ui/PanelHeader";
import { careerBenchmarkData } from "../data/driverAnalytics.mock";

type ViewMode = "season" | "rival";

export default function CareerBenchmarkTable() {
  const [view, setView] = useState<ViewMode>("season");

  return (
    <Panel className="h-full">
      <PanelHeader
        title="Career Benchmark"
        action={
          <div className="flex gap-1">
            {(["season", "rival"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setView(mode)}
                className={`
                  px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold
                  border transition-colors
                  ${
                    view === mode
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border text-text-muted hover:text-text-secondary"
                  }
                `}
              >
                {mode === "season" ? "By Season" : "By Rival"}
              </button>
            ))}
          </div>
        }
      />

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border text-[9px] uppercase tracking-[0.14em] text-text-muted">
              <th className="py-2 text-left font-medium">Metric</th>
              <th className="py-2 text-right font-medium">2025 (Live)</th>
              <th className="py-2 text-right font-medium">2024 (Season)</th>
              <th className="py-2 text-right font-medium">Career Avg</th>
            </tr>
          </thead>
          <tbody>
            {careerBenchmarkData.map((row) => (
              <tr key={row.metric} className="border-b border-border/60">
                <td className="py-2.5 text-text-secondary">{row.metric}</td>
                <td
                  className={`
                    py-2.5 text-right font-mono
                    ${row.highlight2025 ? "text-tertiary" : "text-text-primary"}
                  `}
                >
                  {view === "season" ? row.season2025 : "—"}
                </td>
                <td className="py-2.5 text-right font-mono text-text-secondary">
                  {view === "season" ? row.season2024 : "—"}
                </td>
                <td className="py-2.5 text-right font-mono text-text-muted">
                  {row.careerAvg}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
