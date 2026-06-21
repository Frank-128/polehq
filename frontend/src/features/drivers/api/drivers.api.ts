const BASE_URL = "https://api.openf1.org/v1";

export async function getDrivers() {
  const response = await fetch(
    `${BASE_URL}/drivers?session_key=latest`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch drivers");
  }

  return response.json();
}

export async function getDriver(
  driverNumber: string
) {
  const response = await fetch(
    `${BASE_URL}/drivers?driver_number=${driverNumber}&session_key=latest`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch driver"
    );
  }

  const data = await response.json();

  return data[0];
}