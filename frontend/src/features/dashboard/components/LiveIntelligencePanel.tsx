import Panel from "@/features/shared/components/ui/Panel";
import PanelHeader from "@/features/shared/components/ui/PanelHeader";

import IntelligenceCard from "@/features/shared/components/data-display/InsightCard";

import { intelligence } from "../data/dashboard.mock";

export default function LiveIntelligencePanel() {
  return (
    <Panel className="h-85 overflow-auto">
      <PanelHeader
        title="Live Intelligence"
        subtitle="Strategy and race analysis"
        action={
          <span
            className="
        text-[10px]
        uppercase
        tracking-[0.18em]

        text-primary
      "
          >
            03 Active
          </span>
        }
      />

      <div className="space-y-1">
        {intelligence.map((item) => (
          <IntelligenceCard key={item.title} {...item} />
        ))}
      </div>
    </Panel>
  );
}
