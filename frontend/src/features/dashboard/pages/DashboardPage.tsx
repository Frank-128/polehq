import DashboardHeader from "../components/DashboardHeader";
import KpiGrid from "../components/KpiGrid";
import PerformanceTrendsPanel from "../components/PerfomanceTrendsPanel";
import LiveIntelligencePanel from "../components/LiveIntelligencePanel";
import StandingsSection from "../components/StandingsSection";
import SeasonOverviewPanel from "../components/SeasonOverviewPanel";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <DashboardHeader />

      <KpiGrid />

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-12
          gap-4
        "
      >
        <div className="xl:col-span-8">
          <PerformanceTrendsPanel />
        </div>

        <div className="xl:col-span-4">
          <LiveIntelligencePanel />
        </div>
      </div>

      <StandingsSection />

      <SeasonOverviewPanel />
    </div>
  );
}