import Image from "next/image";
import { Driver } from "../types/driver.types";

interface Props {
  driver: Driver;
  position: number;
}

export default function DriverTableRow({
  driver,
  position,
}: Props) {
  return (
    <tr
      className="
        border-b
        border-border
        hover:bg-bg-hover
        transition-colors
      "
    >
      <td className="py-3 text-text-secondary">
        {position}
      </td>

      <td className="py-3">
        <div className="flex items-center gap-3">
          <Image
            src={driver.headshot_url}
            alt={driver.full_name}
            width={36}
            height={36}
            className="rounded-full"
          />

          <div>
            <div className="text-sm text-text-primary">
              {driver.full_name}
            </div>

            <div className="text-[10px] uppercase text-text-muted">
              {driver.name_acronym}
            </div>
          </div>
        </div>
      </td>

      <td>
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: `#${driver.team_colour}`,
            }}
          />

          <span className="text-sm text-text-secondary">
            {driver.team_name}
          </span>
        </div>
      </td>

      <td className="text-text-primary">
        {driver.driver_number}
      </td>
    </tr>
  );
}