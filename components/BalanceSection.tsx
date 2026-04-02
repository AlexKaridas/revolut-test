"use client";

import { ChevronDown, TrendingUp } from "lucide-react";
import { BalanceActions } from "./BalanceActions";

interface BalanceSectionProps {
  onDetailsClick: () => void;
}

export const BalanceSection = ({ onDetailsClick }: BalanceSectionProps) => (
  <div className="mb-4 px-5 pt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-1">
        <h2 className="text-3xl font-bold tracking-tight text-shark">€132,149.90</h2>
        <button className="p-1 hover:bg-selection rounded-full transition-colors self-center mt-1">
          <ChevronDown className="w-6 h-6 text-disabled bg-gray p-1" />
        </button>
      </div>
      <div className="flex items-center gap-2 text-md font-light text-black">
        <div className="w-5 h-5 bg-accent-vibrant rounded-full flex items-center justify-center">
          <TrendingUp className="w-3 h-3 text-card" />
        </div>
        <span>Main · All</span>
      </div>
    </div>

    <BalanceActions onDetailsClick={onDetailsClick} />
  </div>
);
