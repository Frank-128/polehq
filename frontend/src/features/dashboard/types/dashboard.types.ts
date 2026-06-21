export interface KpiMetric {
  title: string;

  value: string;
  suffix?: string;

  footer?: string;

  trend?: string;
  positive?: boolean;

  icon?: React.ReactNode;

  status?: string;

  progress?: number;
}

export interface StandingRow {
  position: number;
  name: string;
  points: number;
}

export interface IntelligenceItem {
  severity: "HIGH" | "MEDIUM" | "LOW";

  title: string;

  description: string;

  timestamp?: string;
}

export interface Circuit {
  id: string;

  name: string;

  latitude: number;
  longitude: number;

  status:
    | "completed"
    | "upcoming"
    | "live";

  temperature: number;
}