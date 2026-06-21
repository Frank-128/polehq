"use client";

import Link from "next/link";
import Image from "next/image";
import { Driver } from "../types/driver.types";
import { DriverStats } from "../data/driverStats.mock";

interface Props {
  driver: Driver;
  stats: DriverStats;
}

export default function DriverTableRow({ driver, stats }: Props) {
  const teamColor = `#${driver.team_colour}`;

  return (
    <tr className="border-b border-border bg-[#111111] hover:bg-bg-hover transition-colors duration-150">
      <td className="px-3 py-2 font-mono text-sm text-text-secondary">
        {String(stats.position).padStart(2, "0")}
      </td>

      <td className="px-3 py-2 font-mono text-sm text-text-muted">
        {String(driver.driver_number).padStart(2, "0")}
      </td>

      <td className="px-3 py-2">
        <Link
          href={`/drivers/${driver.driver_number}`}
          className="flex items-center gap-2.5 group"
        >
          <Image
            src={driver.headshot_url}
            alt={driver.full_name}
            width={32}
            height={32}
            className="rounded-full bg-bg-surface shrink-0 outline outline-1 outline-offset-1"
            style={{ outlineColor: teamColor }}
          />
          <div className="min-w-0">
            <div className="text-sm font-semibold text-text-primary leading-tight group-hover:text-primary transition-colors truncate">
              {driver.full_name}
            </div>
            <div className="text-[10px] font-medium tracking-widest uppercase text-text-muted">
              {driver.name_acronym}
            </div>
          </div>
        </Link>
      </td>

      <td className="px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 shrink-0" style={{ background: teamColor }} />
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: teamColor }}>
            {driver.team_name}
          </span>
        </div>
      </td>

      <td className="px-3 py-2 text-right font-mono text-sm text-text-primary">
        {stats.points}
      </td>

      <td className="px-3 py-2 text-right font-mono text-sm text-text-secondary">
        {stats.wins}
      </td>

      <td className="px-3 py-2 text-right font-mono text-sm text-text-secondary">
        {stats.podiums}
      </td>

      <td className="px-3 py-2 text-right font-mono text-sm text-text-secondary">
        {stats.avgFinish > 0 ? stats.avgFinish.toFixed(1) : "—"}
      </td>
    </tr>
  );
}
