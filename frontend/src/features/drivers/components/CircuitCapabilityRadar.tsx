"use client";

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

import Panel from "@/features/shared/components/ui/Panel";
import PanelHeader from "@/features/shared/components/ui/PanelHeader";
import { circuitCapabilityData, peakLateralG } from "../data/driverAnalytics.mock";

export default function CircuitCapabilityRadar() {
  return (
    <Panel className="h-full">
      <PanelHeader title="Circuit Capability" />

      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={circuitCapabilityData} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="#2a211e" />

            <PolarAngleAxis
              dataKey="axis"
              tick={{ fill: "#8d6f67", fontSize: 9 }}
            />

            <Radar
              dataKey="value"
              stroke="#ff6548"
              fill="#ff6548"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between border-t border-border pt-3 mt-1">
        <span className="text-[10px] uppercase tracking-[0.14em] text-text-muted">
          Peak Lateral G
        </span>
        <span className="text-lg font-mono text-primary">{peakLateralG}</span>
      </div>
    </Panel>
  );
}
