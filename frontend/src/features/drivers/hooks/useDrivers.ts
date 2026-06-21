import { useQuery } from "@tanstack/react-query";

import { getDrivers } from "../api/drivers.api";

export function useDrivers() {
  return useQuery({
    queryKey: ["drivers"],
    queryFn: getDrivers,
  });
}