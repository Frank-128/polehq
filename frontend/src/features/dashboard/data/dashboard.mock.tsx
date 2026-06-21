import {
  Circuit,
  IntelligenceItem,
  KpiMetric,
  StandingRow,
} from "../types/dashboard.types";

import {
  CalendarDays,
  Trophy,
  Timer,
  Users,
} from "lucide-react";
import { DriverStanding } from "../types/driver.types";

export const kpis = [
  {
    title: "GP Completed",
    value: "06",
    suffix: "/24",

    icon: <CalendarDays size={14} />,

    progress: 25,
  },

  {
    title: "Championship Leader",

    value: "MAX VERSTAPPEN",

    footer: "RED BULL RACING • 161 PTS",

    icon: <Trophy size={14} />,

    trend: "+25",
    positive: true,
  },

  {
    title: "Fastest Lap (AVG)",

    value: "1:31.442",

    footer: "-0.124s VS 2023",

    status: "OPTIMAL",

    icon: <Timer size={14} />,
  },

  {
    title: "Constructor Lead",

    value: "RED BULL",

    footer: "GAP TO P2: +52 PTS",

    icon: <Users size={14} />,

    status: "DECAYING",
  },
];

export const driverStandings:DriverStanding[] = [
  {
    position: 1,
    driver: "Verstappen",
    points: 161,
    trend: "neutral",
    color: "#FFB4A8",
  },
  {
    position: 2,
    driver: "Leclerc",
    points: 113,
    trend: "up",
    color: "#00D2BE",
  },
  {
    position: 3,
    driver: "Perez",
    points: 107,
    trend: "down",
    color: "#FFB4A8",
  },
  {
    position: 4,
    driver: "Norris",
    points: 101,
    trend: "up",
    color: "#D8D8D8",
  },
];

export const constructorStandings = [
  {
    position: 1,
    team: "RED BULL RACING",
    points: 268,
    gap: "-",
    color: "#3671C6",
  },
  {
    position: 2,
    team: "FERRARI",
    points: 212,
    gap: "-56",
    color: "#E80020",
  },
  {
    position: 3,
    team: "MCLAREN",
    points: 154,
    gap: "-114",
    color: "#FF8000",
  },
  {
    position: 4,
    team: "MERCEDES",
    points: 79,
    gap: "-189",
    color: "#27F4D2",
  },
];

export const intelligence: IntelligenceItem[] = [

  {
    severity: "HIGH",

    title: "Under-cut Risk High",

    description:
      "Simulation suggests a 2–3 lap pit delta is required to retain track position against P2.",

    timestamp: "2m ago",
  },

  {
    severity: "MEDIUM",

    title: "Tyre Degradation Alert",

    description:
      "Medium compounds are degrading 8.3% faster than baseline projections.",

    timestamp: "5m ago",
  },

  {
    severity: "LOW",

    title: "Fuel Management",

    description:
      "Fuel save target of 0.15kg per lap required over final stint.",

    timestamp: "12m ago",
  },
];



export const circuits: Circuit[] = [
  {
    id: "miami",
    name: "Miami GP",

    latitude: 25.958,
    longitude: -80.238,

    status: "completed",

    temperature: 32,
  },

  {
    id: "monaco",
    name: "Monaco GP",

    latitude: 43.738,
    longitude: 7.424,

    status: "live",

    temperature: 24,
  },

  {
    id: "singapore",
    name: "Singapore GP",

    latitude: 1.291,
    longitude: 103.864,

    status: "upcoming",

    temperature: 31,
  },

  {
    id: "suzuka",
    name: "Suzuka GP",

    latitude: 34.843,
    longitude: 136.541,

    status: "completed",

    temperature: 28,
  },
];

export const telemetryStats = [
  {
    label: "Track Revolutions",
    value: "1,442",
    suffix: "LAPS",
  },

  {
    label: "Total Distance",
    value: "7,210",
    suffix: "KM",
  },

  {
    label: "Data Processed",
    value: "14.2",
    suffix: "TB",
  },
];