import TelemetryBadge from "./TelemetryBadge";
import GenerateInsightsButton from "./GenerateInsightsButton";

export default function DashboardHeader() {
  return (
    <div className="space-y-3">
      {/* Top Row */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <TelemetryBadge
            label="Live : Season 2026 Intelligence"
            active
          />

          {/* <TelemetryBadge label="Season 2024" />

          <TelemetryBadge label="Intelligence" /> */}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div
            className="
              text-[11px]
              uppercase
              tracking-[0.12em]
              text-text-primary
              font-medium
            "
          >
            Monaco Grand Prix
          </div>

          <div
            className="
              text-[11px]
              font-mono
              text-text-secondary
            "
          >
            04:22:15:08
          </div>

          <GenerateInsightsButton />
        </div>
      </div>

      {/* Bottom Row */}

      <div className="flex items-center justify-between">
        <h1
          className="
            text-3xl
            font-bold
            text-text-primary
          "
        >
          Data Overview Dashboard
        </h1>
      </div>
    </div>
  );
}