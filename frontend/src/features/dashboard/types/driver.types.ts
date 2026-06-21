export interface Driver {
  driver_number: number;

  first_name: string;

  last_name: string;

  full_name: string;

  broadcast_name: string;

  name_acronym: string;

  headshot_url: string;

  team_name: string;

  team_colour: string;
}

export interface DriverStanding {
  position: number;
  driver: string;
  points: number;
  trend: "up" | "down" | "neutral";
  color: string;
}