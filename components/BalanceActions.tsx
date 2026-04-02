"use client";

import React from "react";
import { MoreHorizontal, Info, Move, Plus } from "lucide-react";

interface BalanceActionsProps {
  onDetailsClick: () => void;
}

export const BalanceActions = ({ onDetailsClick }: BalanceActionsProps) => (
  <div className="flex items-center gap-3 pb-5">
    <button className="p-2 text-disabled hover:text-shark hover:bg-selection rounded-lg transition-colors">
      <MoreHorizontal className="w-5 h-5" />
    </button>
    <button
      onClick={onDetailsClick}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:bg-selection transition-colors text-shark bg-card"
    >
      <Info className="w-4 h-4" />
      Details
    </button>
    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:bg-selection transition-colors text-shark bg-card">
      <Move className="w-4 h-4" />
      Move
    </button>
    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-shark text-card rounded-full hover:bg-shark/90 transition-colors shadow-sm has-border">
      <Plus className="w-4 h-4" strokeWidth={3} />
      Add money
    </button>
  </div>
);
