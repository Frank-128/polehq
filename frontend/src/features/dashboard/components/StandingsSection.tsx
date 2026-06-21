import Panel from "@/features/shared/components/ui/Panel";
import PanelHeader from "@/features/shared/components/ui/PanelHeader";
import StandingsTable from "@/features/shared/components/tables/StandingsTable";

import {
  constructorStandings,
  driverStandings,
} from "../data/dashboard.mock";
import DriverStandingsTable from "./DriversStandingsTable";
import ConstructorStandingsTable from "./ConstructorsStandingTable";

export default function StandingsSection() {
  return (
    <div
      className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-4
      "
    >
      
        <DriverStandingsTable />
        <ConstructorStandingsTable/>
    </div>
  );
}