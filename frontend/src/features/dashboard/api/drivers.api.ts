import { Driver } from "../types/driver.types";

export async function getDrivers(): Promise<Driver[]> {
  const response = await fetch(
    "https://api.openf1.org/v1/drivers?session_key=latest"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch drivers");
  }

  return response.json();
}