"use client";

import { ChevronDown, TrendingUp } from "lucide-react";
import { BalanceActions } from "./BalanceActions";

interface BalanceSectionProps {
  onDetailsClick: () => void;
}

export const BalanceSection = ({ onDetailsClick }: BalanceSectionProps) => (
  <div className="mb-2 px-3 pt-2 pb-1 flex flex-row md:flex-row md:items-center justify-between gap-6">
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-1">
        <h2 className="text-2xl font-bold tracking-tight text-shark">
          €132,149<span className="text-base">.90</span>
        </h2>
        <button className="p-0.5 hover:bg-selection bg-gray-200 rounded-full transition-colors self-center">
          <ChevronDown className="w-4 h-4 text-disabled" />
        </button>
      </div>
      <div className="flex items-center gap-2 text-md font-normal text-black">
        <div className="w-5 h-5 bg-accent-vibrant rounded-full flex items-center justify-center">
          <TrendingUp className="w-3 h-3 text-card" />
        </div>
        <span>Main · All</span>
      </div>
    </div>

    <BalanceActions onDetailsClick={onDetailsClick} />
  </div>
);
