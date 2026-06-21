"use client";

import DriverHero from "../components/DriverHero";
import {
  DriverPrimaryKpis,
  DriverSecondaryKpis,
} from "../components/DriverKpiGrid";
import PerformanceTrendChart from "../components/PerformanceTrendChart";
import CircuitCapabilityRadar from "../components/CircuitCapabilityRadar";
import GridToFinishDelta from "../components/GridToFinishDelta";
import CareerBenchmarkTable from "../components/CareerBenchmarkTable";

import { useDriver } from "../hooks/useDriver";

interface Props {
  driverNumber: string;
}

export default function DriverAnalyticsPage({ driverNumber }: Props) {
  const { data: driver, isLoading } = useDriver(driverNumber);

  if (isLoading) {
    return (
      <div className="text-xs uppercase tracking-widest text-text-muted py-8">
        Loading driver intelligence...
      </div>
    );
  }

  if (!driver) {
    return (
      <div className="text-xs uppercase tracking-widest text-text-muted py-8">
        Driver not found
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-3">
        <DriverHero driver={driver} />
        <DriverSecondaryKpis />
      </div>

      <DriverSecondaryKpis />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        <PerformanceTrendChart />
        <CircuitCapabilityRadar />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        <GridToFinishDelta />
        <CareerBenchmarkTable />
      </div>
    </div>
  );
}
