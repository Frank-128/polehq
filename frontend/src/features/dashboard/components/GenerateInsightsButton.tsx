import { Zap } from "lucide-react";

export default function GenerateInsightsButton() {
  return (
    <button
      className="
        h-10

        px-4

        flex
        items-center
        gap-2

        bg-primary

        text-white
        text-xs
        font-semibold
        uppercase

        tracking-wider

        hover:brightness-110
        transition-all
      "
    >
      <Zap size={14} />

      Generate Insights
    </button>
  );
}