"use client";

import Image from "next/image";
import { Driver } from "../types/driver.types";
import { getIntelligenceSummary } from "../data/driverAnalytics.mock";

interface Props {
  driver: Driver;
}

export default function DriverHero({ driver }: Props) {
  const teamColor = `#${driver.team_colour}`;
  const summary = getIntelligenceSummary(
    driver.driver_number,
    driver.full_name,
  );
  const driverNumber = String(driver.driver_number).padStart(2, "0");

  return (
    <div className="flex overflow-hidden border border-[#222] bg-[#0d0d0d] min-h-[200px]">
      {/* Left — image panel with driver number */}
      <div className="relative w-[260px] flex-shrink-0 overflow-hidden max-sm:hidden border-r border-[#222] bg-[#111]">
        {/* Team colour glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 120% 80% at 60% 40%, ${teamColor}22 0%, transparent 65%)`,
          }}
        />

        {/* Driver headshot */}
        <Image
          src={"/waves.jpg"}
          alt={driver.full_name}
          fill
          className="object-cover object-top"
          sizes="260px"
        />

        {/* Gradient overlay so number is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Driver number */}
        <span
          className="absolute bottom-3.5 left-4 text-[52px] font-black leading-none tracking-[-2px]"
          style={{ color: teamColor }}
        >
          {driverNumber}
        </span>
      </div>

      {/* Centre — name + info */}
      <div className="flex flex-1  max-sm:px-2 sm:pr-8  justify-center gap-2.5 border-r border-[#222] ">
        <div className="flex flex-1 flex-col justify-center gap-2.5  border-[#222] sm:px-8 px-2 sm:py-7 py-5">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className="px-2 py-1 text-[9px] font-extrabold uppercase tracking-[0.10em] text-white"
              style={{ background: teamColor }}
            >
              {driver.team_name}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#00C896]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00C896]" />
              Live Intelligence
            </span>
          </div>

          {/* Name */}
          <h1 className="text-[42px] font-black uppercase leading-none tracking-[-1.5px] text-white">
            {driver.full_name}
          </h1>

          {/* Summary */}
          <p className="max-w-[380px] text-xs leading-relaxed text-[#888]">
            {summary}
          </p>
        </div>

        <Image
          src={driver.headshot_url}
          alt={driver.full_name}
          width={100}
          height={100}
          style={{outlineColor:`#${driver.team_colour}`}}
          className="object-cover  outline-2 outline-amber-500 outline-offset-1 rounded-full  self-center object-top sm:w-20 w-12 sm:h-20 h-12"
        />
      </div>

      {/* Right — KPI cards */}
      <div className="flex max-sm:hidden flex-shrink-0">
        <DriverHeroKpiCard
          label="Consistency Score"
          value="98.4"
          suffix="/100"
          valueClassName="text-[#E8765A]"
        />
        <DriverHeroKpiCard
          label="Avg. Lap Delta"
          value="-0.342"
          suffix="s"
          valueClassName="text-[#00D2BE]"
          suffixClassName="text-[22px] font-black text-[#00D2BE]"
        />
      </div>
    </div>
  );
}

interface KpiCardProps {
  label: string;
  value: string;
  suffix?: string;
  valueClassName?: string;
  suffixClassName?: string;
}

function DriverHeroKpiCard({
  label,
  value,
  suffix,
  valueClassName = "",
  suffixClassName = "text-[13px] font-semibold text-[#444]",
}: KpiCardProps) {
  return (
    <div className="flex w-[160px] flex-col justify-center border-l border-[#222] bg-[#111] px-5 py-6">
      <p className="mb-3 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#555]">
        {label}
      </p>
      <div className="flex items-baseline gap-0.5">
        <span
          className={`text-[38px] font-black leading-none tracking-[-2px] ${valueClassName}`}
        >
          {value}
        </span>
        {suffix && <span className={suffixClassName}>{suffix}</span>}
      </div>
    </div>
  );
}
