"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import Panel from "@/features/shared/components/ui/Panel";
import PanelHeader from "@/features/shared/components/ui/PanelHeader";

import { performanceTrendData } from "../data/perfomanceTrend.mock";

export default function PerformanceTrendsPanel() {
  return (
    <Panel className="h-85">
      <PanelHeader
        title="Performance Trends"
        subtitle="Pace delta comparison"
        action={
          <div className="flex gap-3 text-[10px] uppercase">
            <span className="text-primary">RB</span>
            <span className="text-text-primary">FER</span>
            <span className="text-success">MCL</span>
          </div>
        }
      />

      <div className="h-62.5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceTrendData}>
            <CartesianGrid stroke="#221d1a" vertical={false} />

            <XAxis
              dataKey="race"
              tick={{
                fill: "#8d6f67",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis hide />

            <Tooltip
              contentStyle={{
                background: "#141214",
                border: "1px solid #2a211e",
                color: "#f5e8e1",
              }}
            />

            <Line
              type="monotone"
              dataKey="rb"
              stroke="#ff6548"
              strokeWidth={2}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="fer"
              stroke="#f5e8e1"
              strokeWidth={2}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="mcl"
              stroke="#00d2be"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}
