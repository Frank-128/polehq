import Panel from "@/features/shared/components/ui/Panel";
import PanelHeader from "@/features/shared/components/ui/PanelHeader";

import WorldMap from "./season-overview/WorldMap";

export default function SeasonOverviewPanel() {
  return (
    <Panel>
      <PanelHeader
        title="Interactive Season Overview"
        subtitle="Global circuit telemetry"
      />

      <WorldMap />
    </Panel>
  );
}