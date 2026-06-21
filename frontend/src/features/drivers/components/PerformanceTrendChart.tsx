"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import Panel from "@/features/shared/components/ui/Panel";
import PanelHeader from "@/features/shared/components/ui/PanelHeader";
import { performanceTrendData } from "../data/driverAnalytics.mock";

export default function PerformanceTrendChart() {
  return (
    <Panel className="h-full">
      <PanelHeader
        title="Performance Trend"
        subtitle="Season 2025"
      />

      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceTrendData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#221d1a" vertical={false} />

            <XAxis
              dataKey="race"
              tick={{ fill: "#8d6f67", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis hide domain={["dataMin - 2", "dataMax + 2"]} />

            <Tooltip
              contentStyle={{
                background: "#141214",
                border: "1px solid #2a211e",
                borderRadius: 0,
                fontSize: 11,
                color: "#f5e8e1",
              }}
            />

            <Legend
              wrapperStyle={{ fontSize: 10, paddingTop: 8 }}
              formatter={(value) => (
                <span style={{ color: value === "Driver Pace" ? "#ff6548" : "#8d6f67" }}>
                  {value}
                </span>
              )}
            />

            <Line
              type="monotone"
              dataKey="driverPace"
              name="Driver Pace"
              stroke="#ff6548"
              strokeWidth={2}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="fieldAvg"
              name="Field Avg"
              stroke="#4a403c"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}
