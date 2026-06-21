"use client";

import { BarChart3, Target, TrendingUp, Trophy } from "lucide-react";
import DriverKpiCard from "./DriverKpiCard";
import { driverKpis } from "../data/driverAnalytics.mock";

export function DriverPrimaryKpis() {
  const { consistencyScore, avgLapDelta } = driverKpis;

  return (
    <div className="grid h-full grid-cols-2 gap-3 xl:grid-cols-1">
      <DriverKpiCard
        title="Consistency Score"
        value={consistencyScore.value}
        suffix={consistencyScore.suffix}
      />
      <DriverKpiCard
        title="Avg. Lap Delta"
        value={avgLapDelta.value}
        accent="teal"
      />
    </div>
  );
}

export function DriverSecondaryKpis() {
  const { wins, polePositions, podiumRatio, pointsPerRace } = driverKpis;

  return (
    <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
      <DriverKpiCard
        title="Grand Prix Wins"
        value={wins.value}
        tag={wins.tag}
        tagPositive={wins.tagPositive}
        icon={<Trophy size={13} />}
        compact
      />
      <DriverKpiCard
        title="Pole Positions"
        value={polePositions.value}
        tag={polePositions.tag}
        icon={<Target size={13} />}
        compact
      />
      <DriverKpiCard
        title="Podium Ratio"
        value={podiumRatio.value}
        tag={podiumRatio.tag}
        icon={<TrendingUp size={13} />}
        compact
      />
      <DriverKpiCard
        title="Points / Race"
        value={pointsPerRace.value}
        tag={pointsPerRace.tag}
        icon={<BarChart3 size={13} />}
        compact
      />
    </div>
  );
}