"use client";

import { Driver } from "../types/driver.types";
import { getDriverStats } from "../data/driverStats.mock";
import DriverTableRow from "./DriverTableRow";

export default function DriverTable({ drivers }: { drivers: Driver[] }) {
  const sorted = [...drivers].sort(
    (a, b) => getDriverStats(a.driver_number).position - getDriverStats(b.driver_number).position,
  );

  return (
    <div className="border border-border bg-bg-card overflow-x-auto">
      <table className="w-full min-w-[720px]">
        <thead>
          <tr className="border-b border-border bg-[#141214] text-[10px] uppercase tracking-[0.16em] text-primary">
            <th className="py-2 px-3 text-left font-semibold w-12">Pos</th>
            <th className="py-2 px-3 text-left font-semibold w-14">No</th>
            <th className="py-2 px-3 text-left font-semibold">Driver</th>
            <th className="py-2 px-3 text-left font-semibold">Team</th>
            <th className="py-2 px-3 text-right font-semibold w-16">Pts</th>
            <th className="py-2 px-3 text-right font-semibold w-14">Wins</th>
            <th className="py-2 px-3 text-right font-semibold w-16">Podiums</th>
            <th className="py-2 px-3 text-right font-semibold w-20">Avg Fin</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((driver) => (
            <DriverTableRow
              key={driver.driver_number}
              driver={driver}
              stats={getDriverStats(driver.driver_number)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
