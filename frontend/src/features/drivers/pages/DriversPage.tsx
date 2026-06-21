"use client";

import DriverTable from "../components/DriverTable";
import { useDrivers } from "../hooks/useDrivers";

export default function DriversPage() {
  const { data, isLoading } = useDrivers();

  if (isLoading) {
    return (
      <div className="text-xs uppercase tracking-widest text-text-muted py-8">
        Loading driver intelligence...
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold">
          Driver Intelligence
        </div>
        <h1 className="text-xl font-bold text-text-primary tracking-tight mt-0.5">
          Driver Directory
        </h1>
        <p className="text-xs text-text-muted mt-1">
          {data?.length ?? 0} active drivers · Season 2025
        </p>
      </div>

      <DriverTable drivers={data ?? []} />
    </div>
  );
}
