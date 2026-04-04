"use client";
import { MoreHorizontal, Info, Move, Plus } from "lucide-react";

interface BalanceActionsProps {
  onDetailsClick: () => void;
}

export const BalanceActions = ({ onDetailsClick }: BalanceActionsProps) => (
  <div className="flex items-center gap-2 pb-7">
    <button className="py-1 px-2 rounded-full bg-gray-200 hover:text-shark hover:bg-selection transition-colors bg-card">
      <MoreHorizontal className="w-4 h-4" />
    </button>
    <button
      onClick={onDetailsClick}
      className="flex items-center rounded-full gap-2 bg-gray-200 px-3 py-1 text-sm font-medium hover:bg-selection transition-colors text-shark bg-card"
    >
      <Info className="rounded-full w-4 h-4" />
      Details
    </button>
    <button className="flex items-center gap-2 px-3 bg-gray-200 py-1 text-sm font-medium rounded-full hover:bg-selection transition-colors text-shark bg-card">
      <Move className="w-4 h-4" />
      Move
    </button>
    <button className="flex items-center gap-2 px-2 py-1 text-sm font-medium bg-shark text-card rounded-full hover:bg-shark/90 transition-colors shadow-sm">
      <Plus className="w-4 h-4" strokeWidth={3} />
      Add money
    </button>
  </div>
);
