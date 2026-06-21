import { useQuery } from "@tanstack/react-query";

import { getDriver } from "../api/drivers.api";

export function useDriver(
  driverNumber: string
) {
  return useQuery({
    queryKey: [
      "driver",
      driverNumber,
    ],

    queryFn: () =>
      getDriver(driverNumber),

    enabled: !!driverNumber,
  });
}