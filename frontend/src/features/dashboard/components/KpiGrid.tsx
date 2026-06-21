import KpiCard from "@/features/shared/components/data-display/KpiCard";
import { kpis } from "../data/dashboard.mock";

export default function KpiGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-4
      "
    >
      {kpis.map((item) => (
        <KpiCard
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
}