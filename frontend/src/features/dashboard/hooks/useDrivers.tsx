import { useQuery } from "@tanstack/react-query";

import { driverService } from "../services/getDrivers.services";

export function useDrivers() {
  return useQuery({
    queryKey: ["drivers"],

    queryFn: () =>
      driverService.getDrivers(),

    staleTime: 1000 * 60 * 5,
  });
}