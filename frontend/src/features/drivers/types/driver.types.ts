export interface Driver {
  driver_number: number;
  full_name: string;
  first_name: string;
  last_name: string;
  name_acronym: string;

  team_name: string;
  team_colour: string;

  headshot_url: string;

  points: number;
  wins: number;
  podiums: number;
  avg_finish: number;
}