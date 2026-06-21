export const driverKpis = {
  consistencyScore: { value: "98.4", suffix: "/ 100" },
  avgLapDelta: { value: "-0.342" },
  wins: { value: "61", tag: "+14% vs LY", tagPositive: true },
  polePositions: { value: "39", tag: "Top Tier" },
  podiumRatio: { value: "74.2%", tag: "Record Pace" },
  pointsPerRace: { value: "22.4", tag: "Last 10 Races" },
};

export const intelligenceSummaries: Record<number, string> = {
  1: "3x World Champion. Dominating with unmatched technical precision and race-craft. Current lead: 124 pts.",
  16: "Consistent podium threat with exceptional qualifying pace. Strong street circuit specialist.",
  11: "Experienced race engineer with strategic tire management. Key constructor points contributor.",
  4: "Rising talent showing rapid development curve. Strong wet-weather performance metrics.",
};

export function getIntelligenceSummary(driverNumber: number, fullName: string): string {
  return (
    intelligenceSummaries[driverNumber] ??
    `${fullName} — Active season intelligence profile. Performance metrics updated per session.`
  );
}

export const performanceTrendData = [
  { race: "BHR", driverPace: 92, fieldAvg: 88 },
  { race: "SAU", driverPace: 94, fieldAvg: 89 },
  { race: "AUS", driverPace: 91, fieldAvg: 87 },
  { race: "JPN", driverPace: 95, fieldAvg: 88 },
  { race: "CHN", driverPace: 93, fieldAvg: 86 },
  { race: "MIA", driverPace: 96, fieldAvg: 89 },
  { race: "EMI", driverPace: 94, fieldAvg: 87 },
  { race: "MON", driverPace: 97, fieldAvg: 88 },
  { race: "CAN", driverPace: 95, fieldAvg: 87 },
  { race: "ESP", driverPace: 98, fieldAvg: 89 },
];

export const circuitCapabilityData = [
  { axis: "High Downforce", value: 72 },
  { axis: "High Speed", value: 95 },
  { axis: "Traction", value: 88 },
  { axis: "Street", value: 76 },
  { axis: "Wet", value: 82 },
];

export const gridToFinishData = [
  { race: "BEL", delta: 12, label: "+12" },
  { race: "AUT", delta: 2, label: "+2" },
  { race: "MIA", delta: 0, label: "P1 → P1" },
  { race: "CAN", delta: 4, label: "+4" },
  { race: "AUS", delta: -1, label: "DNF" },
];

export const careerBenchmarkData = [
  {
    metric: "Win Rate",
    season2025: "72.4%",
    season2024: "86.3%",
    careerAvg: "30.2%",
  },
  {
    metric: "Podium Frequency",
    season2025: "90.2%",
    season2024: "95.4%",
    careerAvg: "56.1%",
  },
  {
    metric: "Avg Start Pos",
    season2025: "1.4",
    season2024: "1.2",
    careerAvg: "4.1",
  },
  {
    metric: "Overtakes/GP",
    season2025: "4.2",
    season2024: "3.8",
    careerAvg: "5.9",
    highlight2025: true,
  },
];

export const peakLateralG = "5.42 G";
