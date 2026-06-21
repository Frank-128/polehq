"use client";

import Panel from "@/features/shared/components/ui/Panel";
import PanelHeader from "@/features/shared/components/ui/PanelHeader";
import { gridToFinishData } from "../data/driverAnalytics.mock";

export default function GridToFinishDelta() {
  const maxDelta = Math.max(...gridToFinishData.map((d) => Math.abs(d.delta)), 1);

  return (
    <Panel className="h-full">
      <PanelHeader title="Grid-to-Finish Delta" subtitle="Position change per race" />

      <div className="space-y-2">
        {gridToFinishData.map((item) => {
          const isDnf = item.label === "DNF";
          const isNeutral = item.delta === 0;
          const barWidth = isNeutral || isDnf ? 0 : (Math.abs(item.delta) / maxDelta) * 100;

          return (
            <div key={item.race} className="flex items-center gap-3">
              <span className="w-8 text-[10px] font-mono uppercase text-text-muted shrink-0">
                {item.race}
              </span>

              <div className="flex-1 h-5 relative bg-bg-hover">
                {!isNeutral && !isDnf && item.delta > 0 && (
                  <div
                    className="absolute inset-y-0 left-0 bg-primary/80"
                    style={{ width: `${barWidth}%` }}
                  />
                )}
                {!isNeutral && !isDnf && item.delta < 0 && (
                  <div
                    className="absolute inset-y-0 right-0 bg-danger/60"
                    style={{ width: `${barWidth}%` }}
                  />
                )}
              </div>

              <span
                className={`
                  w-14 text-right text-xs font-mono shrink-0
                  ${isDnf ? "text-danger" : isNeutral ? "text-text-muted" : "text-primary"}
                `}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
